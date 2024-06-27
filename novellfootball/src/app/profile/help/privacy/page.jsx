"use client";
import BackButton from "@/app/components/BackButton";
import Layout from "@/app/components/Layout";
import Back from "@/app/components/LiveChats/Back";
import Link from "next/link";
import React from "react";

function Privacy() {
  return (
    <Layout>
      <main>
        <Back page={"privacy"} />

        <div className="w-[90%] mr-auto ml-auto pb-[10rem] overflow-y-scroll text-[.6rem] ">
          <div className="my-3 ">
            <h1 className="font-bold mb-3 ">privacy Policy (Customers)</h1>
            <p>
              This Privacy Policy describes the way in which Norvell Football
              deal with the information and data you provide to us to enable us
              to manage your relationship with Norvell Football.
            </p>

            <p className="mt-3 ">
              We will process any personal information provided to us or
              otherwise held by us relating to you in the manner set out in this
              Privacy Policy. Information may be provided via the Norvell
              Football website (the &quot;Website&quot;), telephone calls or any
              other means.
            </p>

            <p className="mt-3">
              By accepting the privacy policy you agree that you understand and
              accept the use of your personal information as set out in this
              Privacy Policy. If you do not agree with the terms of this Privacy
              Policy please do not use the Website or otherwise provide us with
              your personal information.
            </p>
          </div>

          <div className="mb-3 ">
            <h1 className="font-bold ">Who we are</h1>
            <p>
              References in this Privacy Policy to &quot;Norvell Football&quot;,
              &quot;we&quot;, &quot;us&quot; or &quot;our&quot; relate to
              Hillside (Norvell Football) Plc, a company incorporated in
              Colorado, with registrations number 20231352910 and having its
              registered office at 148 Remington St Ste 100Fort Collins CO
              80524US (&apos;&apos;Company&apos;&apos;) (trading as
              &apos;&apos;Norvell Football&apos;&apos;).We control the ways your
              Personal Data is collected and the purposes for which your
              Personal Data is used by Norvell Football, acting as the
              &quot;data controller&quot; for the purposes of applicable
              European data protection legislation.
            </p>
          </div>

          <div className="mb-3 ">
            <h1 className="font-bold ">Contacting us</h1>
            <p>
              If you have any concerns, or would like more detail about how we
              process your personal data, you can contact us on Telegram.
            </p>
          </div>

          <div className="mb-3 ">
            <h1 className="font-bold ">Protecting Your Personal Data</h1>
            <div className="mt-2 ">
              <p>
                Your Personal Data isn&apos;t just protected by the quality,
                commitment and high standards of Norvell Football, it&apos;s
                also protected by law. The law means that we can only process
                your Personal Data when there is a genuine reason to do so, and
                those reasons must be one of the following
              </p>
              <div>
                • To fulfil any contract that we have with you <br />
                • We have a legal obligation <br />
                • Where you have consented to the processing <br />
                • When it is in our legitimate interest <br />
                • When it is in the public interest <br />
                • When it is in your vital interests <br />
              </div>
            </div>
          </div>

          {/* legitimate interets */}
          <div className="my-4">
            <h1 className="font-bold">Legitimate Interests</h1>
            <p className="mt-3">
              When we have a business or commercial reason to process your
              Personal Data this is referred to as a legitimate interest. Your
              Personal Data is still protected and we must not process it in a
              way that would be unfair to you or your interests.
            </p>
            <p className="mt-3">
              If we do use legitimate interests as a reason to process your
              Personal Data we will tell you that we are doing so, what our
              legitimate interests are and provide you with a method to raise
              any questions or objections you may have. However, compelling
              grounds for processing such information may over-ride your right
              to object.
            </p>
          </div>

          {/* How long we keep your personal data */}
          <div className="my-4">
            <h1 className="font-bold">How long we keep your personal data</h1>
            <p className="mt-3">
              Whenever your data is kept by Norvell Football we will ensure that
              it is appropriately protected and only used for acceptable
              purposes.
            </p>
            <p className="mt-3">
              We will keep your data for the period that you are a customer of
              Norvell Football.
            </p>
            <p className="mt-3">
              If you are no longer a customer of Norvell Football, we will keep
              your data for the minimum length of time required to comply with
              the purposes set out in this policy and relevant legal or
              regulatory obligations. Your Personal Data may be kept longer if
              we cannot delete it for technical reasons.
            </p>
            <p className="mt-3">
              If you choose not to provide your Personal Data it may prevent us
              from meeting legal obligations, fulfilling a contract, or
              performing services required to run your account. Not providing
              your Personal Data may mean we are unable to provide you with
              products or services.
            </p>
          </div>

          {/*Information collected  */}
          <div className="my-4">
            <h1 className="font-bold">Information Collected</h1>
            <p className="mt-3">
              The information and data about you which we may collect, use and
              process includes the following:
            </p>
            <p className="mt-1">
              • Information that you provide to us by filling in forms on the
              Website or any other information you submit to us via the Website
              or email
            </p>
            <p className="mt-1">
              • Records of correspondence, whether via the Website, email,
              telephone or other means
            </p>
            <p className="mt-1">
              • Your responses to surveys or customer research that we carry out
            </p>
            <p className="mt-1">
              • Details of the transactions you carry out with us, whether via
              the Website, telephone or other means
            </p>
            <p className="mt-1">
              • Details of your visits to the Website including, but not limited
              to, traffic data, location data, weblogs and other communication
              data.
            </p>
            <p className="mt-3">
              Where it is reasonable for us to do so and not detrimental to your
              rights and freedoms, we also collect Personal Data from publicly
              available sources such as internet searches, Companies House, and
              broadcast media.
            </p>
          </div>

          {/*telephone calls  */}
          <div className="my-4">
            <h1 className="font-bold">Telephone calls</h1>
            <p className="mt-3">
              Telephone calls to and from our Customer Contact Centre are
              recorded for training and security purposes along with the
              resolution of any queries arising from the service you receive.
            </p>
          </div>

          {/*social features of our products  */}
          <div className="my-4">
            <h1 className="font-bold">Social Features of Our Products</h1>
            <p className="mt-3">
              If you choose to participate in any of the social features that we
              provide with our products (such as chat rooms) Norvell Football
              may store, record or otherwise process this data.
            </p>
          </div>

          {/* Use Of Cookies */}
          <div className="my-4">
            <h1 className="font-bold">Use Of Cookies</h1>
            <p className="mt-1">
              The Norvell Football website (the "Website") uses cookies and
              similar technologies to deliver a better and more personalised
              service to users.
            </p>
            <p className="mt-1">
              When you access or use our products and services, we may collect
              information on your devices via the use of 'cookies' or similar
              technologies.
            </p>
            <p className="mt-1">
              Cookies are used to improve your user experience, this policy
              provides you with a clearer understanding of how cookies are used
              on our Websites and how you can manage their use.
            </p>
          </div>

          {/* Personal Data we share with others */}
          <div className="my-4">
            <h1 className="font-bold">Personal Data we share with others</h1>
            <p className="mt-3">
              We may share your personal data within the Norvell Football group
              and with these other organisations:
            </p>
            <div className="mt-3">
              <p>
                • Law enforcement agencies, regulators and other authorities
              </p>
              <p>• Credit reference agencies</p>
              <p>• Fraud prevention agencies</p>
              <p>• Identity verification agencies</p>
              <p>• Sports governing bodies</p>
              <p>• Organisations that introduce you to us</p>
              <p>
                • Third parties you ask us (or permit us) to share your data
                with Third parties necessary to provide products or services
                which you have requested
              </p>
            </div>
            <p className="mt-3">
              Depending on the products you choose to use we may need to share
              your Personal Data with the third parties that provide those
              services. We never Personal Data outside.
            </p>
          </div>

          {/* Your rights over your personal data */}
          <div className="my-4">
            <h1 className="font-bold">Your rights over your Personal Data</h1>
            <p className="my-3">
              We will assist you if you choose to exercise any of your rights
              over your Personal Data, including:
            </p>

            <p>
              • Withdrawing your consent in any situation where we have asked
              for it, though this will not invalidate any previous processing
              from when we had your consent
            </p>
            <p>
              • Lodging a complaint with any relevant Data Protection Authority
            </p>
            <p>• Access to your Personal Data that we hold or process</p>
            <p>
              • Correction of any Personal Data that is incorrect or out of date
            </p>
            <p>• Erasure of any Personal Data that we process</p>
            <p>
              • Restrict processing of your Personal Data in certain
              circumstances
            </p>
            <p>
              • Asking us to provide you or another company you nominate with
              certain aspects of your Personal Data, often referred to as ‘the
              right to portability’
            </p>
            <p>
              • The ability to object to any processing data where we are doing
              it for our legitimate interests
            </p>
            <p>
              • The ability to contest a decision made entirely by automated
              processing, to express your point of view and to request that a
              human review the decision
            </p>
          </div>

          {/* Changes to our Privacy Statement */}
          <div className="my-4">
            <h1 className="font-bold">Changes to our Privacy Statement</h1>
            <p className="mt-3">
              We may update this policy from time to time, so please review it
              frequently.
            </p>
            <p className="mt-3">
              If any material changes are made to this Privacy Policy we will
              use reasonable endeavours to inform you in advance by email,
              notice on the Website or other agreed communications channels. We
              will communicate the changes to you in advance, giving an
              appropriate amount of time for you to consider and understand the
              changes before they become effective.
            </p>
            <p className="mt-3">
              We will not enforce material changes to the Privacy Policy without
              your express consent. If you decline to accept the changes to the
              Privacy Policy, or otherwise do not accept the changes within the
              time period, we may not be able to continue to provide some or all
              products and services.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Privacy;
