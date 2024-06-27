/*
  This function deals with creation of matches and sheduling the 
  matches , every night at 12 (midnight)
  #NOTE 
    This function has to be called manually such that cron job can be invoked
    and all set 😁
*/

import { NextResponse } from "next/server";
import moment from "moment-timezone";
import cron from "node-cron";
import { MATCH } from "@/app/modals/modal";
import { connect } from "@/app/modals/dbConfig";
import ErrorReport from "@/app/helpers/ErrorReport";
const scores = [
  "0-0",
  "0-1",
  "0-2",
  "0-3",
  "1-0",
  "1-1",
  "1-2",
  "1-3",
  "2-0",
  "2-1",
  "2-2",
  "2-3",
  "3-0",
  "3-1",
  "3-2",
  "3-3",
  "4-4",
];
export async function GET(request) {
  let test = "not";
  if (request?.nextUrl?.searchParams?.get("id") === "2002") {
    test = await scheduleMatches();
    cron.schedule("0 0 * * *", async () => {
      await scheduleMatches();
    });
  }
  return NextResponse.json({ status: 200, msg: "done", data: test });
}

export async function scheduleMatches() {
  await connect();
  let today = getDate();
  today = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(today);
  today = today.split("/");
  let parsed_date = `${today[2]}-${today[1]}-${today[0]}`;

  try {
    let searchParams = new URLSearchParams({
      date: `${parsed_date}`,
      status: "NS",
    });
    let res = await fetch(
      `https://v3.football.api-sports.io/fixtures?${searchParams}`,
      {
        method: "get",
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-apisports-key": `${process.env.NEXT_PUBLIC_LIVE_MATCH_KEY}`,
        },
      }
    );
    if (res) {
      res = await res.json();
      if (!res?.response) return false;
      let data = [];
      res.response.forEach((element) => {
        let SCORE = scores[Math.floor(Math.random() * scores.length)];
        let match = {
          Team_a: element?.teams?.home?.name || "",
          Team_b: element?.teams?.away?.name || "",
          StakeId: element?.fixture?.id || "",
          LeagueName: element?.league?.name,
          Team_a_logo: element?.teams?.home?.logo || "",
          Team_b_logo: element?.teams?.away?.logo || "",
          StartsAt: element?.fixture?.date || "",
          Percents: [],
          Score_a: SCORE.split("-")[0] || 1,
          Score_b: SCORE.split("-")[0] || 0,
          FixedPercent: (Math.random() * 6 + 1.5).toFixed(2),
        };
        for (let i = 0; i < 17; i++) {
          match["Percents"].push((Math.random() * 5 + 1).toFixed(2));
        }
        data.push(match);
      });
      let stringData = JSON.stringify(data);
      if (!data) return false;
      let isCreated = await MATCH.findOneAndUpdate(
        { _id: process.env.NEXT_PUBLIC_MATCH_ID },
        { data: stringData }
      );
      return isCreated ? true : false;
    }
  } catch (error) {
    if (error?.code === 500 || error?.status === 500 || !error?.status) {
      ErrorReport(error);
    }
    return false;
  }
  return false;
}

function getDate() {
  let nDate = new Date();
  let date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Calcutta",
  }).format(nDate);
  date = moment.tz(
    date,
    "dddd, MMMM D, YYYY [at] h:mm:ss A [GMT]Z",
    "Asia/Calcutta"
  );
  date = date.toDate();
  return new Date(date);
}
