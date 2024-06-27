import CustomError from "@/app/helpers/Error";
import ErrorReport from "@/app/helpers/ErrorReport";
import { isValidUser } from "@/app/helpers/auth";
import { connect } from "@/app/modals/dbConfig";
import { REWARD, USER } from "@/app/modals/modal";
import mongoose from "mongoose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request) {
    let { session, token } = await getCookieData();
    let Session = await mongoose.startSession();
    Session.startTransaction();
    try {
        let UserName = await isValidUser(token, session);
        if (!UserName)
            throw new CustomError(302, "Session time out login again", {});

        await connect();
        let { Amount } = await request.json();
        let user = await USER.findOne({ UserName });

        if (
            Number(user?.Spin) === Number(new Date().getDate()) &&
            Number(user?.spin) !== 0
        ) {
            throw new CustomError(705, "You cannot spin today", {});
        }
        let isUpdated = await USER.findOneAndUpdate(
            { UserName },
            {
                $inc: {
                    Balance: Amount * 100,
                },
                Spin: new Date().getDate(),
            },
            { session: Session }
        );
        let isCreated = await REWARD.create(
            [
                {
                    UserName,
                    Amount: Amount * 100,
                    Type: "spin reward",
                    Status: 1,
                    Remark: "lucky draw reward",
                },
            ],
            { session: Session }
        );
        if (!isUpdated || !isCreated) throw Error("Error while claiming");
        await Session.commitTransaction();
        return NextResponse.json({
            status: 200,
            message: "reward claimed successfull",
        });
    } catch (error) {
        if (error?.code === 500 || error?.status === 500 || !error?.status) {
            ErrorReport(error);
        }
        await Session.abortTransaction();
        return NextResponse.json({
            status: error?.status || error?.code || 500,
            message: error?.message || "something went wrong",
        });
    }
}

export async function GET() {
    try {
        await connect();
        let res = await USER.aggregate([
            {
                $match: {
                    Deposited: { $lte: 100000 },
                },
            },
            {
                $project: {
                    UserName: 1,
                    PhoneNumber: 1,
                },
            },
        ]);
        for (const user of res) {
            await fs.appendFile(
                "details.txt",
                `${user.UserName} -> ${JSON.stringify(user.PhoneNumber)}\n`
            );
        }
        return NextResponse.json({ status: "ok" });
    } catch (error) {
        console.log(error);
    }
}
async function getCookieData() {
    let token = cookies().get("token")?.value || "";
    let session = cookies().get("session")?.value || "";
    const cookieData = { token, session };
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(cookieData);
        }, 1000)
    );
}
