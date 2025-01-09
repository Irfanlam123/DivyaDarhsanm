import React from "react";
import Footer from "../Footer/Footer";

const TermCondition = () => {
  return (
    <div className="font-montserrat">
      <div className="bg-gray-50 py-12 px-8 sm:px-16 lg:px-32">
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Please read the following terms carefully before using
            Divyadarshanm.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            1. Acceptance of Terms
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            By accessing or using Divyadarshanm, you agree to comply with these
            Terms. If you do not agree to these Terms, please refrain from using
            Divyadarshanm.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            2. Permitted Use of Divyadarshanm
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            You agree not to use Divyadarshanm in a manner that could disrupt
            the service or violate applicable laws. Below are the activities you
            should avoid:
          </p>
          <ul className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
            <li>Violate any applicable laws or regulations.</li>
            <li>Infringe upon the rights of others.</li>
            <li>Disrupt the operation of Divyadarshanm.</li>
            <li>Attempt to access unauthorized areas or systems.</li>
            <li>
              Engage in harmful activities affecting users or the platform.
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            3. User Accounts
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Certain features may require the creation of a user account. You are
            responsible for maintaining the confidentiality of your account
            information and ensuring that all activities under your account
            comply with these Terms.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            4. Intellectual Property Rights
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            All content, features, and services on Divyadarshanm are protected
            by intellectual property laws. Unauthorized use or reproduction of
            any content without prior written consent is prohibited.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            5. Third-Party Links and Services
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Divyadarshanm may link to third-party websites or services. We are
            not responsible for their content or practices. Your interactions
            with such third parties are subject to their own terms and policies.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            6. Disclaimer of Warranties
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Divyadarshanm is provided “as is” without warranties. We do not
            guarantee the accuracy, reliability, or completeness of the services
            or content provided.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            7. Limitation of Liability
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Divyadarshanm and its affiliates are not liable for any indirect or
            consequential damages arising from your use of the platform.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            8. Changes to Terms
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            We reserve the right to modify these Terms at any time. Changes will
            be posted, and continued use of Divyadarshanm signifies acceptance
            of the updated Terms.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            9. Contact Us
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            For any questions or concerns, please reach out to us at:
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@Divyadarshanm.in"
                className="text-blue-500 hover:underline"
              >
                support@Divyadarshanm.in
              </a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> +91 7991522694
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Thank you for choosing Divyadarshanm.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermCondition;
