import React from "react";
import Footer from "../Footer/Footer";

const Cancellation = () => {
  return (
    <div className="font-montserrat">
      <div className="bg-gray-50 py-12 px-6 sm:px-8 md:px-16 lg:px-32">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Cancellation and Refund Policy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Learn about our policies for cancellations and refunds to ensure a
            smooth experience with Divyadarshanm.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Understanding Our Policies
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            We value your trust and aim to provide transparent policies to guide
            you through our services. Please review the following guidelines for
            cancellations and refunds:
          </p>
          <ol className="list-decimal pl-5 sm:pl-6 space-y-4 text-base sm:text-lg text-gray-700">
            <li>
              <strong>Order Cancellations:</strong> While cancellations are
              generally not accommodated, exceptional cases like accidental
              orders or technical glitches may be considered. Please email us at{" "}
              <a
                href="mailto:support@divyadarshanm.com"
                className="text-blue-500 underline"
              >
                support@divyadarshanm.com
              </a>{" "}
              within 2 days of placing your order. Requests outside this window
              or those that do not meet the conditions may be declined.
            </li>
            <li>
              <strong>Refund Conditions:</strong> Services such as Sevas that
              have been performed are non-refundable. Refunds for Sevas that
              have been booked but not performed will be processed according to
              the cancellation terms.
            </li>
          </ol>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            If you have any questions or concerns regarding cancellations or
            refunds, our team is here to help. Reach out to us:
          </p>
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@divyadarshanm.com"
                className="text-blue-500 hover:underline"
              >
                support@divyadarshanm.com
              </a>
            </p>
            <p className="text-lg sm:text-xl text-gray-700">
              <strong>Phone:</strong> +91 7991522694
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Cancellation;
