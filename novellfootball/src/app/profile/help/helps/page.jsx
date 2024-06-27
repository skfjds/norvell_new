"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BackButton from "@/app/components/BackButton";
import { LiaAngleDownSolid, LiaAngleRightSolid } from "react-icons/lia";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import Loading from "@/app/components/Loading";

import Layout from "@/app/components/Layout";
import Back from "@/app/components/LiveChats/Back";

const accorodient = {
  show: {
    height: "12vh",
    opacity: 1,
    duration: 1,
  },
  hide: {
    height: "0rem",
    opacity: 0,
    duration: 0,
  },
  showTwo: {
    height: "55vh",
    opacity: 1,
    duration: 1,
  },
  hideTwo: {
    height: "0rem",
    opacity: 0,
    duration: 0,
  },
};

function Page() {
  const onClick = () => {
    setTerms(true);
  };

  const [isVisible, setVisible] = useState(false);
  const [isVisibleTwo, setVisibleTwo] = useState(false);
  const [isHide, setHide] = useState(true);
  const [showTerms, setTerms] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <Layout>
      <section className="h-screen bg-[#F8FCFF] ">
        {loading && <Loading />}

        {/* <Link href="/profile/help/">
          <div className="pt-3   ">
            <BackButton pageName="Help?" />
          </div>
        </Link> */}
        <Back page={"help?"} />

        <div className="mt-[2rem] w-[90%]  mr-auto ml-auto  ">
          <div
            style={{ boxShadow: "0 10px 10px rgba(0,0,0,0.05) " }}
            className="flex justify-between px-3 place-items-center py-3  rounded-xl bg-[#fff] text-[0.7rem]    "
          >
            <p className="font-[600]">Terms and conditions</p>
            <span
              onClick={() => setTerms(true)}
              className="h-full rounded-full bg-gray-300 text-black p-1"
            >
              <LiaAngleRightSolid />
            </span>
          </div>

          <div
            style={{ boxShadow: "0 10px 10px rgba(0,0,0,0.05) " }}
            className="mt-3 py-3 font-[600] rounded-xl bg-[#fff] text-[0.7rem] "
          >
            <div className="flex justify-between place-items-center px-3 ">
              <p>Game Rule</p>
              <span
                // (prev) => !prev
                onClick={() =>
                  setVisible((isVisible) => !isVisible) ||
                  setHide((isHide) => !isHide)
                }
                className="h-full rounded-full bg-gray-300 text-black p-1"
              >
                {isVisible ? <IoIosArrowUp /> : <LiaAngleDownSolid />}
              </span>
            </div>
            <div>
              <motion.p
                variants={accorodient}
                animate={isVisible ? "show" : "hide"}
                transition={{ duration: 0.5 }}
                className="text-[#00000091] text-[0.6rem] overflow-scroll  flex justify-center place-items-center px-4  "
              >
                There are 18 possible scores ranging from 0-0 to 4-4 and
                "Other." If same score FT comes which you have stake on it, It's
                means you loose. As long as the selected score doesn't match the
                final result, there will be a profit.
              </motion.p>
            </div>
          </div>

          <div
            style={{ boxShadow: "0 10px 10px rgba(0,0,0,0.05) " }}
            className="mt-3 py-3  rounded-xl bg-[#fff] text-[0.7rem] "
          >
            <div className="flex justify-between place-items-center px-3 ">
              <p className="font-[600] ">Commission Rule</p>
              <span
                onClick={() => setVisibleTwo(!isVisibleTwo)}
                className="h-full rounded-full bg-gray-300 text-black p-1"
              >
                {isVisibleTwo ? <IoIosArrowUp /> : <LiaAngleDownSolid />}
              </span>
            </div>
            <div>
              <motion.div
                variants={accorodient}
                animate={isVisibleTwo ? "showTwo" : "hideTwo"}
                transition={{ duration: 0.5 }}
                className="text-[0.6rem] overflow-scroll  flex flex-col  place-items-center px-4  "
              >
                <p className="my-3 text-[#00000091] font-[600]">
                  Our commission structure operates across three levels,
                  ensuring rewarding opportunities for all members.
                </p>

                <p className="mb-3 text-[#00000091] font-[600]">
                  Level 1 members yield a 10% commission, Level 2 members offer
                  a 7% commission, and Level 3 members provide a 3% commission.
                </p>

                <p className="text-[#00000091] font-[600]">
                  For instance, if a (Level 1 member places a stake of Rs. 500k
                  and earns Rs. 25k, you receive Rs. 2500 as commission).
                </p>
                <p className="mb-3 text-[#00000091] font-[600]">
                  Similarly, from a (Level 2 member's Rs. 25k earnings, you
                  receive Rs. 1750), and from a (Level 3 member, you receive Rs.
                  750).
                </p>

                <h1 className="text-left font-bold w-full text-[#000000e7] ">
                  This result in a daily income of Rs.5000
                </h1>

                <p className="my-3 text-[#00000091] font-[600]">
                  Invite your family and friends to partake in these benefits
                  and maximize their earnings. Together, we can create a
                  thriving community where everyone prospers. Join us today and
                  unlock the potential for substantial and sustainable income.
                  Don't miss out on this opportunity to elevate your financial
                  prospects while sharing the rewards with your loved ones.
                  Embrace the power of our commission structure and embark on a
                  journey towards financial freedom and prosperity.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {showTerms ? <Terms setTerms={setTerms} /> : ""}
      </section>
    </Layout>
  );
}

export default Page;

function Terms({ setTerms }) {
  return (
    <section className="absolute top-0 left-0 bg-white h-screen w-screen ">
      <div onClick={() => setTerms(false)} className="p-1 mt-3  ">
        <BackButton pageName="Terms and Conditions" />
      </div>
      <div className=" mt-4 w-[90%] mr-auto ml-auto h-full overflow-y-scroll pb-[8rem] ">
        {/* Introduction part */}
        <div className="my-3">
          <h1 className="font-bold tracking-wide text-[0.7rem] ">
            A. INTRODUCTION
          </h1>
          <p className="text-[0.6rem] my-3 ">
            1. By using, visiting and/or accessing any part (including, but not
            limited to, sub-domains, source code and/or website APIs, whether
            visible or not) of the Norvell Football website or mobile
            application or any other websites or applications that we own or
            operate (the “Website”) and/or registering on the Website, you
            acknowledge and agree to be bound by our policies and terms as
            follows: (i) these Terms and Conditions; (ii) our Privacy Policy;
            (iii) our Cookies Policy and (iv) the Rules applicable to our
            betting or gaming products as further referenced at paragraph A.2
            below (together the "Terms"), and are deemed to have accepted and
            understood all the Terms.
          </p>

          <p className="text-[0.6rem] my-3 ">
            Our Privacy Policy and Cookies Policy are provided for informational
            purposes only.
          </p>

          <p className="text-[0.6rem] mb-3 ">
            By creating a personal player account (as described in Section B) on
            the Website and checking the box on the sign-up page, you explicitly
            accept and agree to these Terms and Conditions and the Rules. You
            may at any time download these Terms and Conditions and the Rules by
            clicking the link above.
          </p>

          <p className="text-[0.6rem] mb-3 ">
            Please read the Terms and Conditions and Rules carefully and if you
            do not accept the Terms and Conditions and Rules, do not use, visit
            or access any part (including, but not limited to, sub-domains,
            source code and/or website APIs, whether visible or not) of the
            Website. The Terms and Conditions and Rules shall also apply to all
            betting or gaming via mobile devices including downloadable
            applications to a mobile device (as if references to your use of the
            Website were references to your use of our mobile devices betting
            facilities).
          </p>

          <p className="text-[0.6rem] mb-3 ">
            2. Where you play any game, or place a bet or wager, using the
            Website, you accept and agree to be bound by, the Rules which apply
            to the applicable products available on the Website from time to
            time. The Rules can be found under the Help tab of the applicable
            section of the Website, or more specifically at:
          </p>

          <p className="text-[0.6rem] mb-3 ">
            (a) The Rules for Football stake is available on Help?
          </p>

          <p className="text-[0.6rem] mb-3 ">
            (b) Strict Policy: Self-Staking is strictly prohibited. Violation of
            this policy will result in loss amount. We appreciate your
            compliance.
          </p>

          <p className="text-[0.6rem] mb-3">
            3. We reserve the right to unilaterally change the Terms at any time
            which may reasonably be required from time to time for a number of
            reasons (including to comply with applicable laws and regulations,
            and regulatory requirements). All changes will be published on the
            Website. The most up to date Terms will be available on the Website.
            When a change is made to the Terms and Conditions the customer will
            be informed. Your continued use of the Website constitutes ongoing
            acceptance of the Terms. Should you, due to any possible changes,
            not wish to continue using the services of Norvell Football anymore,
            you can withdraw all of your available funds and close the account.
          </p>

          <p className="text-[0.6rem] mb-3">
            4. Reference to "you", "your" or the "customer" is reference to any
            person using the Website or the services of norvell-football and/or any
            registered customer of Norvell Football.
          </p>

          <p className="text-[0.6rem] mb-3">
            5. norvell-football is committed to providing excellent customer service. As
            part of that commitment, Norvell Football is committed to supporting
            responsible gambling. Although Norvell Football will use its
            reasonable endeavours to enforce its responsible gambling policies,
            Norvell Football does not accept any responsibility or liability if
            you nevertheless continue gambling and/or seek to use the Website
            with the intention of deliberately avoiding the relevant measures in
            place and/or Norvell Football is unable to enforce its
            measures/policies for reasons outside of Norvell Football’s
            reasonable control.
          </p>
        </div>

        {/* Your norvell football account */}
        <div className="text-[0.6rem] mb-3">
          <h1 className="font-bold tracking-wide text-[0.7rem] mb-3">
            B. YOUR Norvell Football ACCOUNT
          </h1>
          <p className="text-[0.6rem] mb-3">1. Application</p>
          <p className="text-[0.6rem] mb-3">
            1.1 All customers must be over 18 years of age and of legal capacity
            to place a bet/wager or register with Norvell Football. Norvell
            Football reserves the right to ask for proof of age from any
            customer and suspend their account until satisfactory documentation
            is provided. Norvell Football takes its responsibilities in respect
            of under age and responsible gambling very seriously.
          </p>
          <p className="text-[0.6rem] mb-3">
            1.2 All customers must register personally and information supplied
            when registering with the Website (including without limitation full
            name, contact email, personal telephone number, bank account
            details) MUST be your information and be accurate and complete in
            all respects. Where this is not the case, we reserve the right to
            suspend the account and treat any deposits into the gambling account
            as being invalid (and any winnings arising from such deposit as
            void). Where an account is suspended, the relevant customer should
            Contact Us.
          </p>
          <p className="text-[0.6rem] mb-3">
            1.3 Upon registration, Norvell Football will verify the contact
            email by sending a verification email to the customer. When such
            correspondence is initiated, all offers and withdrawal requests may
            remain pending until the details has been confirmed as correct.
          </p>
          <p className="text-[0.6rem] mb-3">
            1.4 By registering to use the Website you hereby agree that we shall
            be entitled to conduct any and all such identification, credit and
            other verification checks from time to time that we may require
            and/or are required by applicable laws and regulations (including
            without limitation for the purpose of complying with anti-money
            laundering laws and regulations) and/or by the relevant regulatory
            authorities for use of the Website and our products generally. You
            agree to provide all such information as we require in connection
            with such verification checks. We shall be entitled to suspend your
            registration and/or restrict your account in any manner that we may
            deem to be appropriate, until such time as the relevant checks are
            completed to our satisfaction.
          </p>
          <p className="text-[0.6rem] mb-3">
            1.5 As part of the identity and verification process, we may supply
            your information details (including without limitation first names,
            last name and bank account details) to authorised third parties,
            including identity service providers and credit reference agencies.
          </p>
          <p className="text-[0.6rem] mb-3">
            1.6 Customers may open only one account. Should we identify any
            customer with more than one account we reserve the right to treat
            other accounts as closed.
          </p>
          <p className="text-[0.6rem] mb-3">
            1.7 Customers must keep their registration and account details up to
            date. This, and your account information, may be amended in the
            Personal section of the Website. If you require any assistance,
            please Contact Us.
          </p>
          <p className="text-[0.6rem] mb-3">
            1.8 Norvell Football reserves the right to refuse to register any
            customer account application at its sole discretion.
          </p>
          <h1 className="font-bold tracking-wide text-[0.7rem] mb-3">
            2. Player declaration
          </h1>
          <p className="text-[0.6rem] mb-3">
            2.1. By opening an account on the Website and accepting the Terms
            and Conditions and Rules by checking the box on the sign-up page,
            you explicitly declare and guarantee that:
          </p>
          <p className="text-[0.6rem] mb-3">
            (a) you are legally competent and will only play for your own
            account;
          </p>
          <p className="text-[0.6rem] mb-3">
            (b) your registration and account will not be used for money
            laundering or the financing of terrorism, for the violation of
            sanction order or for fraud with or the misuse of the licensed games
            of chance;
          </p>
          <p className="text-[0.6rem] mb-3">
            (c) you will take due care with the means of identification for
            login, take all reasonable measures to prevent its use by third
            parties and, to this end, will comply with any further instructions
            to be drawn up by us, if necessary;
          </p>
          <h1 className="font-bold tracking-wide text-[0.7rem] mb-3 ">
            3. Personal Details
          </h1>
          <p className="text-[0.6rem] mb-3">
            You have a right to data portability and access to your data and
            request it to be rectified, restricted or deleted. If you wish to do
            so, please Contact Us.
          </p>
        </div>

        {/* Personal details */}
        <div className="my-3">
          <h1 className="font-bold tracking-wide text-[0.7rem] mb-3">
            4. Suspension and Closure
          </h1>
          <p className="text-[0.6rem] mb-3">
            4.1 If you want to close your account, please Contact Us.
          </p>
          <p className="text-[0.6rem] mb-3">
            4.2 Norvell Football shall be entitled to close or suspend your
            account if:
          </p>
          <p className="text-[0.6rem] mb-3">(a) you become bankrupt;</p>
          <p className="text-[0.6rem] mb-3">
            (b) Norvell Football considers that you have used the Website in a
            fraudulent manner or for illegal and/or unlawful or improper
            purposes;
          </p>
          <p className="text-[0.6rem] mb-3">
            (c) Norvell Football considers that you have used the Website in an
            unfair manner, have deliberately cheated or taken unfair advantage
            of Norvell Football or any of its customers or if your account is
            being used for the benefit of a third party;
          </p>
          <p className="text-[0.6rem] mb-3">
            (d) Norvell Football is requested to do so by the police, any
            regulatory authority or court;
          </p>
          <p className="text-[0.6rem] mb-3">
            (e) Norvell Football considers that any of the events referred to in
            (a) to (c) above may have occurred or are likely to occur.
          </p>
          <p className="text-[0.6rem] mb-3">
            4.3 If Norvell Football closes or suspends your account for any of
            the reasons referred to in (a) to (e) above, you shall be liable for
            any and all claims, losses, liabilities, damages, costs and expenses
            incurred or suffered by Norvell Football (together “Claims”) arising
            therefrom and shall indemnify and hold Norvell Football harmless on
            demand for such Claims. In the circumstances referred to in (a) to
            (e) above, Norvell Football shall also be entitled to withhold
            and/or retain any and all amounts which would otherwise have been
            paid or payable to you (including any winnings, Bet Credits or bonus
            payments).
          </p>
          <p className="text-[0.6rem] mb-3">
            4.4 In addition to the specific reasons provided, Norvell Football
            reserves the right to close or suspend your account at any time and
            for any reason.
          </p>
        </div>

        {/* Fair use */}
        <div className="my-3">
          <p className="text-[0.6rem] mb-3">
            5.1 The Website and Norvell Football products may only be used for
            the purposes of placing bets and wagers on events and/or gaming
            products.
          </p>
          <p className="text-[0.6rem] mb-3">
            5.2 You must not use the Website for the benefit of a third party or
            for any purpose which (in Norvell Football’s opinion) is illegal,
            defamatory, abusive or obscene, or which Norvell Football considers
            discriminatory, fraudulent, dishonest or inappropriate. norvell-football may
            report to the authorities any activity which it considers to be
            suspicious and/or in breach of this paragraph.
          </p>
          <p className="text-[0.6rem] mb-3">
            5.3 Norvell Football will seek criminal and contractual sanctions
            against any customer involved in fraudulent, dishonest or criminal
            acts via or in connection with the Website or Norvell Football's
            products. Norvell Football will withhold payment to any customer
            where any of these are suspected or where the payment is suspected
            to be for the benefit of a third party. The customer shall indemnify
            and shall be liable to pay to Norvell Football, on demand, all
            Claims arising directly or indirectly from the customer’s
            fraudulent, dishonest or criminal act.
          </p>
        </div>

        {/* Third party rights */}
        <div className="my-3">
          <h1 className="font-bold tracking-wide text-[0.7rem] mb-3">
            Third Party Rights
          </h1>
          <p className="text-[0.6rem] mb-3">
            Its group companies may enforce any provision of these terms and
            conditions against you as a third party contract beneficiary whether
            in the name of Norvell Football or in its own name.
          </p>
        </div>
      </div>
    </section>
  );
}
