"use client";

import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import MatchCard from "./components/MatchCard";
import { useContext, useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Carousel } from "flowbite-react";
import Layout from "./components/Layout";
import { UserContext } from "./helpers/UserContext";
import { easeInOut, motion } from "framer-motion";
import Loading from "./components/Loading";
import { AlertContext } from "./helpers/AlertContext";
import DemoCarousel from "./components/DemoCarousel";

export default function Home() {
    let router = useRouter();
    const { userBalance, userOtherData, getBalance } = useContext(UserContext);
    const [balance, updateBalance] = useState(0);
    const [matches, updateMatches] = useState([]);
    const [matchLoaded, updateLoaded] = useState(false);
    const [loading, setLoading] = useState(true);
    // states for access current data and popup handling //
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);

    // event handlers for the popup and accesing current data //
    const handleMatchCardClick = (item) => {
        setSelectedMatch(item);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    async function getLiveMatches() {
        try {
            let res = await fetch(`/api/home`);
            if (!res.ok) throw new Error("Error while fetching matches");
            res = await res.json();
            if (res?.status === 200) {
                updateMatches(res?.data?.matches);
                setLoading(false); // Set loading to false when data is fetched
            } else {
                throw new Error("Somethign went wrong");
            }
        } catch (error) {
            setLoading(false); // Handle errors and set loading to false
            // router.push("/access/login");
        }
    }

    const [user, setUser] = useState();
    const randomUser = () => {
        let users = Math.floor(Math.random() * 10000000);
        setUser(users);
    };

    useEffect(() => {
        if (userBalance) {
            updateBalance(userBalance);
        } else {
            getBalance();
        }
    }, [userBalance]);

    useEffect(() => {
        if (!matchLoaded) {
            getLiveMatches();
            updateLoaded(true);
        }
        randomUser();
    }, [matchLoaded]);

    const gradients = [
        {
            id: 1,
            bgColor:
                "linear-gradient(138deg, rgba(255,210,210,1) 0%, rgba(255,255,255,1) 50%, rgba(255,210,210,1) 100%)",
            start: "#FCDDBC",
            stop: "#f71b1b",
        },
        {
            id: 2,
            bgColor:
                "linear-gradient(138deg, rgba(199,255,199,1) 0%, rgba(255,255,255,1) 50%, rgba(199,255,199,1) 100%)",
            start: "#f7fff7",
            stop: "#1aff1a",
        },
        {
            id: 3,
            bgColor:
                "linear-gradient(138deg, rgba(255,197,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,197,255,1) 100%)",
            start: "#ffedff",
            stop: "#ff14ff",
        },
        {
            id: 4,
            bgColor:
                "linear-gradient(138deg, rgba(255,225,195,1) 0%, rgba(255,255,255,1) 50%, rgba(255,225,195,1) 100%)",
            start: "#fff9f4",
            stop: "#ff8b17",
        },
        {
            id: 5,
            bgColor:
                "linear-gradient(138deg, rgba(255,255,205,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,205,1) 100%)",
            start: "#fffff0",
            stop: "#ffff17",
        },
        {
            id: 6,
            bgColor:
                "linear-gradient(138deg, rgba(223,255,190,1) 0%, rgba(255,255,255,1) 50%, rgba(223,255,190,1) 100%)",
            start: "#f7ffef",
            stop: "#8dff17",
        },
        {
            id: 7,
            bgColor:
                "linear-gradient(138deg, rgba(215,255,254,1) 0%, rgba(255,255,255,1) 50%, rgba(215,255,254,1) 100%)",
            start: "#fdffff",
            stop: "#00ffff",
        },
    ];

    const getRandomGradient = () => {
        const randomIndex = Math.floor(Math.random() * gradients.length);
        return gradients[randomIndex];
    };

    return (
        <Layout>
            <main className="h-screen bg-no-repeat bg- bg-center bg-gradient-to-b from-[#2885F6] to-[#000] overflow-hidden  ">
                <div className="  flex justify-between place-items-center  w-[90%] mr-auto ml-auto   ">
                    <div className="w-max mt-2 flex flex-col justify-center  pt-2 ">
                        <div
                            onClick={() => {
                                router.push("/profile/recharge");
                            }}
                            className=" flex place-items-center h-6 rounded-full bg-white w-max line-clamp-1 text-ellipsis   "
                        >
                            <span className="flex items-center   line-clamp-1 text-ellipsis text-[.65rem] font-bold px-2  min-w-[4rem] ">
                                <FaRupeeSign />
                                {Number(userBalance?.toFixed(2)) || 0}
                            </span>
                            <FaCirclePlus className="text-[.9rem] mr-2 text-[#2885F6] " />
                        </div>

                        <h1 className=" font-extrabold text-[1.3rem] text-[white] mt-3 text-center  ">
                            Top Events
                        </h1>
                    </div>

                    <div className="flex place-items-center">
                        <span className=" mt-1 leading-3 mr-1 text-white ">
                            <p className="w-[8rem] flex flex-col items-end  text-right overflow-hidden   break-words  ">
                                <span className="text-[.9rem] font-semibold w-[90%] text-right ">
                                    Welcome Back
                                </span>
                                <span className="text-[.7rem] font-[500] w-[4rem] overflow-ellipsis line-clamp-1 ">
                                    {" "}
                                    {userOtherData?.UserName || "name"}{" "}
                                </span>
                            </p>
                        </span>
                        <div className="h-[3.3rem] w-[3.3rem] flex justify-center place-items-center rounded-full bg-white ">
                            <Image
                                src={"/logo.png"}
                                alt="logo"
                                width={45}
                                height={45}
                            />
                        </div>
                    </div>
                </div>

                <div className="h-[28%]  w-[95%] mr-auto ml-auto mt-1 mb-[2rem] ">
                    <DemoCarousel />
                </div>

                <div className="h-[60%] mt-[1rem] rounded-t-[30px]  shadow-2xl shadow-black  bg-[#F8FCFF]">
                    <div className="h-[70px] rounded-t-[30px] flex flex-col justify-around  ">
                        <div className="w-[70px] h-[5px]  mr-auto ml-auto rounded-2xl bg-blue-500 "></div>
                        <div className="flex  justify-between w-[90%] mr-auto ml-auto  ">
                            <h1 className="font-bold ">Hot Matches</h1>
                            <h1 className="flex text-[12px] font-light text-[#989898] line-clamp-1 text-ellipsis ">
                                Online Users :{" "}
                                {new Intl.NumberFormat().format(
                                    user ? user : 0
                                )}
                            </h1>
                        </div>
                    </div>

                    <div className=" overflow-y-scroll h-[60%] pb-[8rem] z-[-1] ">
                        {matches.map((item, i) => (
                            <div key={item.StakeId}>
                                <MatchCard
                                    id={i}
                                    index={i}
                                    data={{ ...item }}
                                    gradient={gradients[i]}
                                    onClick={() => handleMatchCardClick(item)}
                                    color={getRandomGradient()}
                                />
                            </div>
                        ))}
                    </div>

                    {popupVisible && (
                        <MatchPopup
                            match={selectedMatch}
                            onClose={closePopup}
                        />
                    )}
                </div>

                {/* loading component here */}
                {loading && <Loading />}
            </main>
        </Layout>
    );
}

function MatchPopup({ match, onClose }) {
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);
    const { getAlert } = useContext(AlertContext);
    const { userBalance, getBalance } = useContext(UserContext);
    const [Team_a_logo, updateSrcTeam_a] = useState();
    const [Team_b_logo, updateSrcTeam_b] = useState();
    const [MatchStartTime, updateTime] = useState(new Date());

    // placeBet function //

    async function placeBet(Percentage, Score_a, Score_b, BetAmount) {
        setDisabled(true);

        getAlert();
        if (disabled === false) {
            try {
                // let [Score_a, Score_b] = score.split("-");
                let body = {
                    ...match,
                    BetAmount,
                    Percentage,
                    Score_a,
                    Score_b,
                };

                let config = {
                    method: "POST",
                    headers: {
                        "content-type": "applicaiton/json",
                    },
                    body: JSON.stringify(body),
                };
                let res = await fetch(`/api/match`, config);
                res = await res.json();
                if (res?.status === 200) {
                    getAlert("success", res.message);
                    await getBalance();
                    router.push("/stake");
                } else if (res?.status === 302) {
                    getAlert("redirect", res.message);
                } else {
                    getAlert("opps", res.message || "something went wrong");
                }
            } catch (error) {
                getAlert("redirect", res.message);
            }
        }
        setTimeout(() => {
            setDisabled(false);
        }, 4000);
    }

    // updating the logos and match time start

    useEffect(() => {
        const MatchTime = new Date(
            new Date(match?.StartsAt).toLocaleString("en-US", {
                timeZone: "asia/calcutta",
            })
        );
        updateTime(MatchTime);
        updateSrcTeam_a(match?.Team_a_logo);
        updateSrcTeam_b(match?.Team_b_logo);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-screen absolute z-[1] bottom-0 top-0 left-0 flex justify-center items-end bg-black/70 w-full  "
        >
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className=" h-[80%] pt-[2rem] pb-[6rem]  bg-slate-100 overflow-y-scroll rounded-t-[2rem] w-[98%]"
            >
                <div className="flex  relative px-2  justify-center">
                    <h4 className="border-2 border-solid border-blue-700 min-w-[20%] rounded-full"></h4>
                    <p
                        onClick={onClose}
                        className="absolute left-2 text-sm font-bold mt-[-1rem] p-2"
                    >
                        &lt; Back
                    </p>
                </div>

                <div className=" px-6 mt-4 text-white">
                    <div className="rounded-2xl relative  pt-4 bg-[url(/betplace.png)]  h-full  text-center  w-full">
                        <h2 className="capitalize text-sm font-bold truncate text-white">
                            {match.LeagueName}
                            <p className="hidden">{match.StakeId}</p>
                        </h2>
                        <div className="w-full mt-3 flex px-2">
                            <div className="flex-[2] flex-col flex w-full items-center h-full ">
                                <span className="h-[60px] w-[60px] rounded-full relative  flex justify-center place-items-center ">
                                    <Image
                                        src={Team_a_logo || "/search.png"}
                                        alt="logo"
                                        unoptimized
                                        width={38}
                                        height={38}
                                    />
                                </span>
                                <span className="line-clamp-2 w-[80%] text-[.6rem] capitalize font-bold">
                                    {match?.Team_a || "Team b unavailable"}
                                </span>
                            </div>
                            <div className="flex-[1] flex items-center justify-center flex-col">
                                <span className="text-xl block font-bold text-red-600">
                                    {MatchStartTime.getHours()
                                        ?.toString()
                                        ?.padStart(1, "0")}
                                    :
                                    {MatchStartTime.getMinutes()
                                        ?.toString()
                                        ?.padStart(1, "0")}
                                </span>
                                <span className="uppercase text-sm font-bold">
                                    {MatchStartTime.getDate()}
                                    {MatchStartTime.toDateString().slice(3, 8)}
                                </span>
                            </div>
                            <div className="flex-[2] flex-col flex w-full items-center h-full ">
                                <span className="h-[60px] w-[60px] rounded-full relative flex justify-center place-items-center ">
                                    <Image
                                        src={Team_b_logo || "/search.png"}
                                        alt="logo"
                                        unoptimized
                                        width={38}
                                        height={38}
                                    />
                                </span>
                                <span className="line-clamp-2 w-[80%] text-[.6rem] capitalize font-bold">
                                    {match?.Team_b || "Team b unavailable"}
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <div className="rounded-t-xl bg-red-600 px-3 py-1 h-full">
                                <h2 className="capitalize font-bold text-sm text-white">
                                    full-time
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-5">
                    <h2 className="text-[0.7rem] mt-3 font-semibold text-slate-500">
                        Please choose a match score to place your stake.
                    </h2>
                </div>

                <div className="mt-2 px-4 space-y-4">
                    <ScoreCards
                        placeBet={placeBet}
                        percent={match?.FixedPercent}
                        Balance={userBalance}
                        Score_a={match.Score_a}
                        Score_b={match.Score_b}
                        disabled={disabled}
                        style={{ backgroundColor: disabled ? "gray" : "blue" }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

function ScoreCards({
    placeBet,
    percent,
    Balance,
    Score_a,
    Score_b,
    disabled,
    style,
}) {
    const [estimatedIncome, updateEstimated] = useState(0);
    const [betAmount, updateBetAmount] = useState(0);

    function updateAmount(amount) {
        updateBetAmount(amount);
        updateEstimated(() => {
            let estimated = ((Number(amount) / 100) * Number(percent)).toFixed(
                2
            );
            return Math.abs(
                Number(estimated) - (Number(estimated) / 100) * 5
            ).toFixed(2);
        });
    }

    console.log(betAmount);

    let router = useRouter();

    return (
        <div className="w-[100%] ">
            <div
                style={{
                    gridTemplateColumns: "1fr 2fr 1fr",
                    boxShadow: "0 4px 4px rgb(0,0,0,0.1)",
                }}
                className=" mt-[1rem] rounded-xl bg-[#F8FCFF]  w-[100%] flex justify-around text-[.65rem]  font-semibold   h-[3rem] place-items-center  "
            >
                <span
                    className="flex items-center justify-center 
        "
                >
                    Score{" "}
                    <h2 className="ml-1 text-red-500 ">
                        {" "}
                        {Score_a}-{Score_b}{" "}
                    </h2>
                </span>
                <span className="flex items-center">
                    Odds percentage -<h2 className=" ml-1 text-green-400"></h2>
                    <h2 className="text-green-400"> {percent} </h2>
                </span>
                <span className="flex items-center justify-center py-2 px-2 bg-[#5A5A5A] text-white rounded-[7px] ">
                    Place stake
                </span>
            </div>

            <div className="space-y-4 mt-3 px-2">
                <div className="flex justify-between ">
                    <span className=" text-[0.65rem] text-gray-600 font-bold">
                        Handling fee 5%
                    </span>
                    <div
                        onClick={() => {
                            router.push("/profile/recharge");
                        }}
                        className=" rounded-full py-0.5 ring-1 ring-gray-600/30 px-1 w-fit bg-white space-x-1 flex justify-center items-center"
                    >
                        <div className="flex pl-1 justify-center items-center h-[90%] space-x-1">
                            <span
                                className=" h-full aspect-square rounded-full text-white 
             bg-blue-700 flex text-[0.5rem] justify-center items-center"
                            >
                                <FaRupeeSign />
                            </span>

                            <span
                                onClick={() => router.push("/profile/recharge")}
                                className="text-xs font-bold pr-3"
                            >
                                {new Intl.NumberFormat().format(Balance || 0)}
                            </span>
                        </div>
                        <span className="h-[90%] font-bolder text-white aspect-square rounded-full bg-blue-700 flex justify-center items-center">
                            <IoIosAdd />
                        </span>
                    </div>
                </div>

                <div className="grid px-0 ">
                    <span className="grid grid-cols-2">
                        <h2 className="text-[0.65rem]  font-bold capitalize ">
                            stake amount
                        </h2>
                        <h2 className="text-[0.65rem] pl-1 font-bold capitalize ">
                            estimated amount
                        </h2>
                    </span>

                    <div
                        className="flex ring-2 px-1 ring-blue-600
           mt-1 py-1 rounded-md items-center"
                    >
                        <div className="flex pl-1 space-x-1 max-w-[50%] min-w-[50%]  items-center h-[90%]">
                            <span
                                className=" h-[80%] aspect-square rounded-full text-white 
             bg-blue-600 flex text-[0.65rem] justify-center items-center"
                            >
                                <FaRupeeSign />
                            </span>
                            <input
                                type="number"
                                className="focus:outline-none h-8 w-[80%] border-none bg-transparent outline-none "
                                placeholder="Add"
                                name=""
                                id=""
                                onChange={(e) => updateAmount(e.target.value)}
                                value={betAmount}
                            />
                        </div>
                        <div className="flex pl-1 min-w-[50%] space-x-2  items-center h-[90%] ">
                            <span
                                className=" h-[80%] aspect-square rounded-full text-white 
             bg-green-400 text-[0.65rem] flex justify-center items-center"
                            >
                                <FaRupeeSign />
                            </span>

                            <span className="text-xs font-bold text-green-500 pr-3">
                                {estimatedIncome || 0}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-2">
                    <button
                        onClick={() => updateAmount(Balance)}
                        className="py-2 px-1 font-bold w-[30%] text-sm text-white rounded-md capitalize bg-gray-900"
                    >
                        all amount
                    </button>
                    <button
                        onClick={() =>
                            placeBet(percent, Score_a, Score_b, betAmount)
                        }
                        disabled={disabled}
                        style={{
                            backgroundColor: disabled ? "#5A5A5A" : "#2885F6",
                        }}
                        className="py-2 px-2 w-[70%] bg-[#2885F6] font-bold text-sm text-white rounded-md capitalize"
                    >
                        confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

// HOW TO USE THE COPY BUTTON

// onClick={async (e) => {
//   let isCopied = await Copy("TEXT"); //  returns true if successful
//   getAlert(
//     isCopied ? "success" : "opps",
//     isCopied
//       ? "Invitation link copied successfully."
//       : "unable to copy the text please try to copy it manually"
//   );
// }}
