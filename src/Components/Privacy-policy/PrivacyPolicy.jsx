import React from "react";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="font-montserrat">
      <div className="bg-gray-50 py-12 px-8 sm:px-16 lg:px-32">
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your privacy is important to us. Learn about how we collect, use,
            and protect your personal information.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Information We Collect
          </h2>
          <ul className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <strong>Name, Nakshatra, Gothra, Rashi</strong>
            </li>
            <li>
              <strong>Contact information:</strong> Email address, Phone number,
              Address
            </li>
            <li>
              <strong>Demographic information:</strong> Postcode, preferences,
              and interests
            </li>
            <li>
              <strong>Other relevant details:</strong> Customer surveys or
              offers
            </li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What We Do With Your Information
          </h2>
          <ul className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
            <li>
              <strong>Internal record keeping.</strong>
            </li>
            <li>
              We may use the information to improve our products and services.
            </li>
            <li>
              Promotional emails regarding new products, special offers, or
              other relevant information.
            </li>
            <li>Contacting you for market research purposes.</li>
          </ul>
        </section>

        {/* Cookie Usage Section */}
        <section className="bg-white shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            How We Use Cookies
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A cookie is a small file placed on your device to help analyze web
            traffic and tailor the website to your preferences.
          </p>
          <ul className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
            <li>
              Cookies allow us to analyze website traffic and improve the
              website.
            </li>
            <li>
              You can choose to accept or decline cookies through your browser
              settings.
            </li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you have any questions or concerns regarding our privacy policy
            or your data, feel free to reach out to us.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@divyadarshanm.com"
                className="text-blue-500 hover:underline"
              >
                support@divyadarshanm.com
              </a>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Phone:</strong> +91 7991522694
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
