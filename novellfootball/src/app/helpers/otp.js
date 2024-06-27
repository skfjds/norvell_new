import nodemailer from "nodemailer";

export async function sendPhoneOtp(number, otp) {
    try {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        let res = await fetch(
            `https://2factor.in/API/V1/6fe20a5a-2a1f-11ef-8b60-0200cd936042/SMS/${number}/${otp}/OTP1`,
            requestOptions
        );
        res = await res.json();
        return res?.Status === "Success" ? true : false;
    } catch (error) {
        return false;
    }
}
export async function sendPhoneOtp2(number, otp) {
    try {
        let options = {
            method: "POST",
            headers: {
                authToken:
                    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLUUwOEJENjcyMDI2RTQ1MCIsImlhdCI6MTcxNzg2NDExMSwiZXhwIjoxODc1NTQ0MTExfQ.uBxr-KEWfASB-DaQXNKxt6BQXN5bGj7Ng0miTQ2Bf7BL8OzUF5pSJeVHUsP-3rB_dbdModz3zwbgDlQiPV_vvA",
            },
        };

        let url = `https://cpaas.messagecentral.com/verification/v2/verification/send?countryCode=91&customerId=C-E08BD672026E450&senderId=UTOMOB&type=SMS&flowType=SMS&mobileNumber=${number}&message=Your otp for verification is ${otp}`;

        let res = await fetch(url, options);
        res = await res.json();
        console.log(res);
        if (!res) throw Error("Server error");
        if (res?.responseCode === 200) return true;
        return false;
    } catch (error) {
        return false;
    }
}

export async function sendEmailOtp(EmailId, otp) {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "norvellfootball0@gmail.com",
                pass: "gpjukemzttiykwqd",
            },
        });

        let mailOptions = {
            from: "norvellfootball0@gmail.com",
            to: `${EmailId}`,
            subject: "Norvell football",
            text: `Your OTP for varification is ${otp}`,
        };

        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        return false;
    }
}
