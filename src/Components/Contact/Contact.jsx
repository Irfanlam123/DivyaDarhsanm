import React from "react";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div className="font-montserrat">
      <div className="bg-gray-50 py-8 px-4 sm:px-8 lg:px-16">
        <section className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Thank You for Choosing Divyadarshanm!
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            We are a service-based company dedicated to bringing you closer to
            spirituality.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
            Get in Touch
          </h2>
          <div className="space-y-4 sm:space-y-6 text-center">
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@Divyadarshanm.in"
                className="text-blue-500 hover:underline"
              >
                support@Divyadarshanm.in
              </a>
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              <strong>Phone:</strong> +91 7991522694
            </p>
          </div>
        </section>

        <section className="text-center">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
            Thank you for shopping with Divyadarshanm. We are here to serve you
            and make your spiritual journey meaningful.
          </p>
          <p className="text-base sm:text-lg text-gray-700 font-semibold">
            Your trust and support mean the world to us!
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
