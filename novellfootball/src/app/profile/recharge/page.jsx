"use client";

import BackButton from "@/app/components/BackButton";
import { TbCoinRupeeFilled } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaInfoCircle } from "react-icons/fa";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import { useContext } from "react";
import { AlertContext } from "@/app/helpers/AlertContext";
import { UserContext } from "@/app/helpers/UserContext";

function Page() {
  //--------------------------------- popup handler ------------------------------------//
  const { getAlert } = useContext(AlertContext);
  const { getExtraDetails } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  // change the value of input box whenever user click any div
  const [inputValue, setInputValue] = useState("");

  const handleDivClick = (value) => {
    if (value) {
      setInputValue(value);
    }
  };

  const [selectedDiv, setSelectedDiv] = useState(null);
  const chnageBgColor = (divNumber) => {
    setSelectedDiv(divNumber);
  };

  useEffect(() => {
    getExtraDetails();
  }, []);

  // implementing condtion based redireacting
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleRedirect = () => {
    setDisabled(true);
    if (disabled == false) {
      if (!inputValue) {
        getAlert("opps", "please enter the deposit amount");
      } else if (inputValue < 999){
        getAlert("opps", "Minimum deposit amount 1000");
      } else {
        if (selectedOption === "option1") {
          router.push(
            `/profile/recharge/paymentChannelOne?data=${encodeURIComponent(
              inputValue
            )}`
          );
        } else if (selectedOption === "option2") {
          router.push(
            `/profile/recharge/paymentChannelTwo?data=${encodeURIComponent(
              inputValue
            )}`
          );
        } else if (selectedOption === "option3") {
          router.push(
            ` /profile/recharge/paymentChannelThree?data=${encodeURIComponent(
              inputValue
            )}`
          );
        } else if (selectedOption === "option4") {
          router.push(
            `/profile/recharge/usdt?data=${encodeURIComponent(inputValue)}`
          );
        } else if (selectedOption === "") {
          getAlert("opps", "please choose any one payment method");
        }
      }
    }
    setTimeout(() => {
      setDisabled(false);
    }, 4000);
  };

  return (
    <Layout>
      <div className="h-screen w-screen bg-[#F8FCFF]  ">
        <div className="h-screen w-screen pb-[10rem] overflow-y-scroll">
          <div onClick={() => router.back()} className="pt-2 ">
            <BackButton pageName="Recharge" />
          </div>

          <div className=" w-[90%] h-[30%] mr-auto ml-auto mt-4  ">
            <Image
              src={"/recharge.png"}
              alt="recharge"
              width={100}
              height={100}
              unoptimized
              className="w-full h-full "
            />
          </div>
          <div className="w-[90%]   mr-auto ml-auto my-3  ">
            <p className="text-[.7rem] ">
              Please Select Or Enter The Desired Amount{" "}
            </p>

            <div className=" my-1 flex justify-around place-items-center py-1 text-xs ">
              <div
                onClick={() =>
                  handleDivClick(document.getElementById("div1").innerText) ||
                  chnageBgColor(1)
                }
                style={{
                  boxShadow: "0 2px 4px rgb(0,0,0,0.05)",
                  backgroundColor: selectedDiv === 1 ? "#2885F6" : "white",
                  color: selectedDiv === 1 ? "white" : "black",
                }}
                className="h-[2.2rem] w-[23%] bg-[#2885F6] text-white text-center  grid place-items-center rounded-2xl "
                id="div1"
              >
                1000
              </div>

              <div
                onClick={() =>
                  handleDivClick(document.getElementById("div2").innerText) ||
                  chnageBgColor(2)
                }
                style={{
                  boxShadow: "0 2px 4px rgb(0,0,0,0.05)",
                  backgroundColor: selectedDiv === 2 ? "#2885F6" : "white",
                  color: selectedDiv === 2 ? "white" : "black",
                }}
                className="h-[2.2rem] w-[23%] bg-[#ffffff] text-[#000000]  text-center grid place-items-center rounded-2xl "
                id="div2"
              >
                2000
              </div>

              <div
                onClick={() =>
                  handleDivClick(document.getElementById("div3").innerText) ||
                  chnageBgColor(3)
                }
                style={{
                  boxShadow: "0 2px 4px rgb(0,0,0,0.05)",
                  backgroundColor: selectedDiv === 3 ? "#2885F6" : "white",
                  color: selectedDiv === 3 ? "white" : "black",
                }}
                id="div3"
                className="h-[2.2rem] w-[23%] bg-[#ffffff] text-[#000000]  text-center grid place-items-center rounded-2xl "
              >
                10000
              </div>

              <div
                onClick={() =>
                  handleDivClick(document.getElementById("div4").innerText) ||
                  chnageBgColor(4)
                }
                style={{
                  boxShadow: "0 2px 4px rgb(0,0,0,0.05)",
                  backgroundColor: selectedDiv === 4 ? "#2885F6" : "white",
                  color: selectedDiv === 4 ? "white" : "black",
                }}
                className="h-[2.2rem] w-[23%] bg-[#ffffff] text-[#000000]   text-center grid place-items-center rounded-2xl "
                id="div4"
              >
                100000
              </div>
            </div>

            <div>
              <h3 className="text-[.75rem] ">Enter Amount</h3>
              <div
                style={{ boxShadow: "0 2px 5px rgb(0,0,0,.06) " }}
                className="flex border-2 border-[#2785F6] w-[98%] pl-2 mr-auto ml-auto place-items-center my-1 rounded-lg "
              >
                <TbCoinRupeeFilled className="text-[1.5rem] text-[#2785F6] " />{" "}
                <input
                  placeholder="10000"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className=" py-2 w-[80%] ml-2 bg-transparent outline-none focus-within text-[.65rem] "
                />{" "}
              </div>
              <div
                style={{ boxShadow: "0 2px 5px rgb(0,0,0,0.06)" }}
                className="flex justify-between px-2 py-3 place-items-center mt-2 w-[98%] mr-auto ml-auto rounded-lg bg-white  "
              >
                <p className="text-[0.7rem] ">Payment link 1</p>
                <input
                  type="radio"
                  name="link"
                  id=""
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
              </div>

              <div
                style={{ boxShadow: "0 2px 5px rgb(0,0,0,0.06)" }}
                className="flex justify-between  px-2 py-3 place-items-center mt-2 w-[98%] mr-auto ml-auto rounded-lg bg-white "
              >
                <p className="text-[0.7rem] ">Payment link 2</p>
                <input
                  type="radio"
                  name="link"
                  id=""
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
              </div>

              <div
                style={{ boxShadow: "0 2px 5px rgb(0,0,0,0.06)" }}
                className="flex justify-between  px-2 py-3 place-items-center mt-2 w-[98%] mr-auto ml-auto rounded-lg bg-white "
              >
                <p className="text-[0.7rem] ">Payment link 3</p>
                <input
                  type="radio"
                  name="link"
                  id=""
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleOptionChange}
                />
              </div>

              <div
                style={{ boxShadow: "0 2px 5px rgb(0,0,0,0.06)" }}
                className="flex justify-between px-2 py-3 place-items-center mt-2 w-[98%] mr-auto ml-auto rounded-lg bg-white  "
              >
                <p className="text-[0.7rem] ">Usdt</p>
                <input
                  type="radio"
                  name="link"
                  id=""
                  value="option4"
                  checked={selectedOption === "option4"}
                  onChange={handleOptionChange}
                />
              </div>

              <div
                onClick={handleRedirect}
                disabled={disabled}
                style={{
                  backgroundColor: disabled ? "#5A5A5A" : "#2885F6",
                  boxShadow: "0 0 5px 0 #c0cad9",
                }}
                className="bg-[#2885F6] text-center p-3 mt-[2rem] rounded-lg flex justify-center place-items-center text-[#fff] "
              >
                Recharge
              </div>

              <div className="my-6 ">
                <span className="flex items-center mb-1 " >
                  <FaInfoCircle color="red" />
                  <h1 className="ml-1.5 font-[600] text-[.8rem] " >Recharge Instruction&apos;s</h1>
                </span>
                <p className="text-sm text-gray-600 ">
                  1. Kindly resubmit the deposit form upon expiration of
                  transfer time. <br />
                  2. The transfer amount must match the order you created,
                  otherwise the money cannot be credited successfully. <br />
                  3. If you transfer the wrong amount, our company will not be
                  responsible for the lost amount! <br /> 4. If you encounter
                  any issues, please don't hesitate to reach out to our customer
                  support team for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
