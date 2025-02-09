import Footer from "../Footer/Footer";
import {motion} from 'motion/react'
function About() {
  return (
    <div className="font-montserrat">
      <div className="bg-gray-50 py-12 px-4 sm:px-8 md:px-16 lg:px-32">
        <section className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Welcome to Divyadarshanm
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
            Bringing sacred rituals and divine experiences closer to you.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Our Mission
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
            At Divyadarshanm, our mission is to bridge the gap between you and
            the divine. We offer services such as Sevas, Poojas, Annadanam, Gau
            Poojas, and other spiritual practices, enabling you to experience
            these rituals from the comfort of your home. Join us in bringing
            peace and blessings to your life.
          </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Why Choose Divyadarshanm
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            We believe that spirituality should be accessible to everyone. With
            Divyadarshanm, you can participate in sacred rituals and practices
            with ease, without the need for physical travel. Here’s what sets us
            apart:
          </p>
          <ul className="list-disc pl-6 space-y-2 sm:space-y-4 text-sm sm:text-lg text-gray-700">
            <li>Convenient online booking for all spiritual services.</li>
            <li>
              Authentic and meaningful experiences, including Sevas and Poojas.
            </li>
            <li>Transparent policies and reliable customer support.</li>
          </ul>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Refund and Cancellation Policy
          </h2>
          <ol className="list-decimal pl-6 space-y-2 sm:space-y-4 text-sm sm:text-lg text-gray-700">
            <li>
              <strong>Order Cancellations:</strong> We do not generally allow
              cancellations. However, for accidental orders or technical
              glitches, please contact us at{" "}
              <a
                href="mailto:support@divyadarshanm.com"
                className="text-blue-500 underline"
              >
                support@divyadarshanm.com
              </a>{" "}
              within 2 days of placing your order.
            </li>
            <li>
              <strong>Refunds:</strong> Services already performed (e.g., Sevas)
              cannot be refunded. Services booked but not performed may be
              canceled under specific conditions.
            </li>
          </ol>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Contact Us
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            If you have any questions or concerns, feel free to reach out to us:
          </p>
          <div className="space-y-2 sm:space-y-4">
            <p className="text-sm sm:text-lg text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@divyadarshanm.com"
                className="text-blue-500 hover:underline"
              >
                support@divyadarshanm.com
              </a>
            </p>
            <p className="text-sm sm:text-lg text-gray-700">
              <strong>Phone:</strong> +91 7991522694
            </p>
          </div>
        </section>
        <motion.div
          className="w-60 h-40 rounded-2xl mt-4 bg-red-300"
          animate={{
            x: 900,
            y:200
          }}
        ></motion.div>
        <motion.div
          className="w-60 h-40 rounded-full mt-4 bg-blue-300"
          animate={{
            x: 400,
            scale:0.9
          }}
        ></motion.div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
