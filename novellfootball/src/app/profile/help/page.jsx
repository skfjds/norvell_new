"use client";
import Layout from "@/app/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { LiaAngleDownSolid, LiaAngleRightSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
import OlarkChat from "@/app/components/LiveChats/OlarkChat";
import Back from "@/app/components/LiveChats/Back";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import Link from "next/link";

const Page = () => {
    const [getAgents, toggleAgents] = useState(false);
    const router = useRouter();

    return (
        <Layout>
            <section className=" bg-[#F8FCFF] w-full relative pb-40 h-[100dvh] overflow-y-auto">
                <Back page={"get help"} />
                <main className=" h-full space-y-1  px-4 ">
                    <div className="h-[50%] relative w-full">
                        <Image src={"/get_help_svg.svg"} fill alt="get help" />
                    </div>
                    <div className="h-[50%]  overflow-y-auto px-1 space-y-3 pb-40">
                        <div
                            style={{
                                boxShadow: "0 10px 10px rgba(0,0,0,0.04) ",
                            }}
                            className="flex items-center mt-2 capitalize bg-white  rounded-xl py-2 px-2 font-semibold text-sm"
                        >
                            <div className="flex-[1]">
                                <span className="bg-blue-500 text-blue-500 text-3xl size-8 rounded-full">
                                    <FaTelegram />
                                </span>
                            </div>
                            <div className="flex-[3]">
                                <p>telegram group</p>
                            </div>
                            <div className="flex-[2] flex justify-end items-center">
                                <Link
                                    href={"https://t.me/+HzeCGolBpFBmNDM1"}
                                    className="h-full rounded-xl bg-blue-500 text-white px-8 py-2"
                                >
                                    join
                                </Link>
                            </div>
                        </div>
                        <div
                            style={{
                                boxShadow: "0 10px 10px rgba(0,0,0,0.04) ",
                            }}
                            className="flex items-center mt-2 capitalize bg-white  rounded-xl py-2 px-2 font-semibold text-sm"
                        >
                            <div className="flex-[1]">
                                <span className="bg-blue-500 text-green-500 text-3xl size-8 rounded-full">
                                    <FaWhatsapp />
                                </span>
                            </div>
                            <div className="flex-[3]">
                                <p>whats app group</p>
                            </div>
                            <div className="flex-[2] flex justify-end items-center">
                                <Link
                                    href={
                                        "https://chat.whatsapp.com/D5izGU6e6COKBlInEvgs9O"
                                    }
                                    className="h-full rounded-xl bg-blue-500 text-white px-8 py-2"
                                >
                                    join
                                </Link>
                            </div>
                        </div>

                        <div
                            style={{
                                boxShadow: "0 10px 10px rgba(0,0,0,0.04) ",
                            }}
                            className=" capitalize bg-white  rounded-xl py-2 px-2 font-semibold text-sm"
                        >
                            <div className="flex items-center">
                                <div className="flex-[1]">
                                    <span className="bg-blue-500 text-blue-500 text-3xl size-8 rounded-full">
                                        <FaTelegram />
                                    </span>
                                </div>
                                <div className="flex-[4]">
                                    <p>telegram agenets</p>
                                </div>
                                <div className="flex-[1] flex justify-center items-center">
                                    <span
                                        onClick={() =>
                                            toggleAgents((prev) => !prev)
                                        }
                                        className="h-full rounded-full bg-gray-200 text-white p-0.5"
                                    >
                                        <LiaAngleDownSolid />
                                    </span>
                                </div>
                            </div>
                            {getAgents && (
                                <motion.div
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-2 flex space-y-2 flex-col items-center"
                                >
                                    <div className="w-[90%] flex items-center space-x-2">
                                        <div className="w-[10%]">
                                            <p
                                                style={{
                                                    background:
                                                        "url('/agents/alok.jpg') center no-repeat",
                                                    backgroundSize: "cover",
                                                }}
                                                className="size-6 rounded-full"
                                            ></p>
                                        </div>
                                        <div className="w-[30%] text-[0.5rem] text-gray-600 ">
                                            <p>Alok</p>
                                        </div>
                                        <div className="w-[60%]">
                                            <a
                                                href="https://t.me/AlokRaj05"
                                                className="bg-blue-500 h-full w-[100%] py-1 px-2 rounded-xl text-center text-[0.6rem] text-white font-bold "
                                            >
                                                connect to Alok
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-[90%] flex items-center space-x-2">
                                        <div className="w-[10%]">
                                            <p
                                                style={{
                                                    background:
                                                        "url('/agents/anthony.jpg') center no-repeat",
                                                    backgroundSize: "cover",
                                                }}
                                                className="size-6 rounded-full"
                                            ></p>
                                        </div>
                                        <div className="w-[30%] text-[0.5rem] text-gray-600 ">
                                            <p>Anthony</p>
                                        </div>
                                        <div className="w-[60%]">
                                            <a
                                                href="https://t.me/Anthony_8892"
                                                className="bg-blue-500 h-full w-full py-1 px-2 rounded-xl text-center text-[0.6rem] text-white font-bold "
                                            >
                                                connect to Anthony
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-[90%] flex items-center space-x-2">
                                        <div className="w-[10%]">
                                            <p
                                                style={{
                                                    background:
                                                        "url('/agents/ruhi.jpg') center no-repeat",
                                                    backgroundSize: "cover",
                                                }}
                                                className="size-6 rounded-full"
                                            ></p>
                                        </div>
                                        <div className="w-[30%] text-[0.5rem] text-gray-600 ">
                                            <p>Ruhi</p>
                                        </div>
                                        <div className="w-[60%]">
                                            <a
                                                href="https://t.me/Aryarhi"
                                                className="bg-blue-500 h-full w-full py-1 px-2 rounded-xl text-center text-[0.6rem] text-white font-bold "
                                            >
                                                connect to Ruhi
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <div
                            style={{
                                boxShadow: "0 10px 10px rgba(0,0,0,0.04) ",
                            }}
                            onClick={() => router.push("/profile/help/privacy")}
                            className=" capitalize bg-white  rounded-lg py-2 px-2 font-semibold text-sm"
                        >
                            <div className="flex items-center">
                                <div className="flex-[1]">
                                    <span className="flex justify-center items-center text-3xl size-8 rounded-full">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18 9H17V8C17 6.67392 16.4732 5.40215 15.5356 4.46447C14.5979 3.52678 13.3261 3 12 3C10.6739 3 9.40217 3.52678 8.46448 4.46447C7.5268 5.40215 7.00002 6.67392 7.00002 8V9H6.00002C5.7348 9 5.48045 9.10536 5.29291 9.29289C5.10537 9.48043 5.00002 9.73478 5.00002 10V17.764C4.99812 18.3216 5.15243 18.8686 5.44547 19.3429C5.73851 19.8173 6.15856 20.2001 6.65802 20.448L11.553 22.895C11.6919 22.9645 11.8452 23.0007 12.0005 23.0007C12.1559 23.0007 12.3091 22.9645 12.448 22.895L17.343 20.448C17.8423 20.2 18.2621 19.8171 18.555 19.3427C18.8478 18.8684 19.002 18.3215 19 17.764V10C19 9.73478 18.8947 9.48043 18.7071 9.29289C18.5196 9.10536 18.2652 9 18 9ZM9.00002 8C9.00002 7.20435 9.31609 6.44129 9.8787 5.87868C10.4413 5.31607 11.2044 5 12 5C12.7957 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8V9H9.00002V8ZM17 17.764C17.0008 17.95 16.9494 18.1324 16.8516 18.2907C16.7539 18.4489 16.6137 18.5765 16.447 18.659L12 20.882L7.55302 18.658C7.3865 18.5756 7.24641 18.4481 7.14867 18.2901C7.05092 18.1321 6.99942 17.9498 7.00002 17.764V11H17V17.764Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M12 13C11.7348 13 11.4804 13.1054 11.2929 13.2929C11.1054 13.4804 11 13.7348 11 14V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V14C13 13.7348 12.8946 13.4804 12.7071 13.2929C12.5196 13.1054 12.2652 13 12 13Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex-[4]">
                                    <p>privacy</p>
                                </div>
                                <div className="flex-[1] flex justify-center items-center">
                                    <span className="h-full rounded-full bg-gray-200 text-white p-0.5">
                                        <LiaAngleRightSolid />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div
                            style={{
                                boxShadow: "0 10px 10px rgba(0,0,0,0.04) ",
                            }}
                            onClick={() => router.push("/profile/help/helps")}
                            className=" capitalize bg-white  rounded-lg py-2 px-2 font-semibold text-sm"
                        >
                            <div className="flex items-center">
                                <div className="flex-[1]">
                                    <span className="flex justify-center items-center  text-3xl size-8 rounded-full">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.29 16.29C11.247 16.3375 11.2069 16.3876 11.17 16.44C11.1322 16.4957 11.1019 16.5563 11.08 16.62C11.0512 16.6767 11.031 16.7374 11.02 16.8C11.0151 16.8666 11.0151 16.9334 11.02 17C11.0166 17.1312 11.044 17.2613 11.1 17.38C11.1449 17.5041 11.2166 17.6168 11.3099 17.7101C11.4032 17.8034 11.5159 17.8751 11.64 17.92C11.7597 17.9729 11.8891 18.0002 12.02 18.0002C12.1509 18.0002 12.2803 17.9729 12.4 17.92C12.5241 17.8751 12.6368 17.8034 12.7301 17.7101C12.8234 17.6168 12.8951 17.5041 12.94 17.38C12.9844 17.2584 13.0048 17.1294 13 17C13.0008 16.8684 12.9755 16.7379 12.9258 16.6161C12.876 16.4943 12.8027 16.3834 12.71 16.29C12.617 16.1963 12.5064 16.1219 12.3846 16.0711C12.2627 16.0203 12.132 15.9942 12 15.9942C11.868 15.9942 11.7373 16.0203 11.6154 16.0711C11.4936 16.1219 11.383 16.1963 11.29 16.29ZM12 3C10.0222 3 8.08879 3.58649 6.4443 4.6853C4.79981 5.78412 3.51809 7.3459 2.76121 9.17317C2.00433 11.0004 1.8063 13.0111 2.19215 14.9509C2.578 16.8907 3.53041 18.6725 4.92894 20.0711C6.32746 21.4696 8.10929 22.422 10.0491 22.8079C11.9889 23.1937 13.9996 22.9957 15.8268 22.2388C17.6541 21.4819 19.2159 20.2002 20.3147 18.5557C21.4135 16.9112 22 14.9778 22 13C22 11.6868 21.7413 10.3864 21.2388 9.17317C20.7363 7.95991 19.9997 6.85752 19.0711 5.92893C18.1425 5.00035 17.0401 4.26375 15.8268 3.7612C14.6136 3.25866 13.3132 3 12 3ZM12 21C10.4178 21 8.87104 20.5308 7.55544 19.6518C6.23985 18.7727 5.21447 17.5233 4.60897 16.0615C4.00347 14.5997 3.84504 12.9911 4.15372 11.4393C4.4624 9.88743 5.22433 8.46197 6.34315 7.34315C7.46197 6.22433 8.88743 5.4624 10.4393 5.15372C11.9911 4.84504 13.5997 5.00346 15.0615 5.60896C16.5233 6.21447 17.7727 7.23984 18.6518 8.55544C19.5308 9.87103 20 11.4177 20 13C20 15.1217 19.1572 17.1566 17.6569 18.6569C16.1566 20.1571 14.1217 21 12 21ZM12 8C11.4731 7.99966 10.9553 8.13812 10.4989 8.40144C10.0425 8.66476 9.66347 9.04366 9.4 9.5C9.32765 9.61382 9.27907 9.7411 9.25718 9.87418C9.23529 10.0073 9.24055 10.1434 9.27263 10.2744C9.30472 10.4054 9.36297 10.5285 9.44389 10.6364C9.52481 10.7443 9.62671 10.8348 9.74348 10.9022C9.86024 10.9697 9.98945 11.0129 10.1233 11.0292C10.2572 11.0454 10.393 11.0345 10.5225 10.9969C10.6521 10.9593 10.7727 10.8959 10.8771 10.8105C10.9814 10.7251 11.0675 10.6195 11.13 10.5C11.2181 10.3474 11.345 10.2208 11.4978 10.133C11.6505 10.0452 11.8238 9.9993 12 10C12.2652 10 12.5196 10.1054 12.7071 10.2929C12.8946 10.4804 13 10.7348 13 11C13 11.2652 12.8946 11.5196 12.7071 11.7071C12.5196 11.8946 12.2652 12 12 12C11.7348 12 11.4804 12.1054 11.2929 12.2929C11.1054 12.4804 11 12.7348 11 13V14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V13.82C13.6614 13.58 14.2174 13.1152 14.5708 12.5069C14.9242 11.8985 15.0525 11.1853 14.9334 10.4919C14.8143 9.79849 14.4552 9.16902 13.919 8.71352C13.3828 8.25801 12.7035 8.00546 12 8Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex-[4]">
                                    <p>help</p>
                                </div>
                                <div className="flex-[1] flex justify-center items-center">
                                    <span className="h-full rounded-full bg-gray-200 text-white p-0.5">
                                        <LiaAngleRightSolid />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <a
                            href={"/downloads/Norvell-football.pdf"}
                            download={"norvellfootball.pdf"}
                        >
                            <div
                                style={{
                                    boxShadow: "0 10px 10px rgba(0,0,0,0.04) ",
                                }}
                                className="flex items-center capitalize bg-white  rounded-lg py-2 px-2 font-semibold text-sm mt-3 "
                            >
                                <div className="flex-[1]">
                                    <span className="flex justify-center items-center text-3xl size-8 rounded-full">
                                        <BsFileEarmarkPdfFill className="text-[1rem] " />
                                    </span>
                                </div>
                                <div className="flex-[4]">
                                    <p>Norvell Football Pdf </p>
                                </div>
                                <div className="flex-[1] flex justify-center items-center">
                                    <span className="h-full rounded-full bg-gray-200 text-white p-0.5">
                                        <LiaAngleRightSolid />
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                </main>
            </section>
            <OlarkChat />
        </Layout>
    );
};

export default Page;
