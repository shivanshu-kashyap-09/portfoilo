import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Successfully Sent!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      document.querySelector("form").reset();
    }
  }, [state.succeeded]);

  return (
    <section className="bg-[#0a1128] py-4 px-6 ">
      <ToastContainer />
      {/* Section Heading */}
      <div className="flex justify-center mb-10">
        <motion.h2
          initial={{ opacity: 0.5, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center"
        >
          <div className="text-center">
            <h2 className="font-bold text-orange-500 tracking-wide drop-shadow-[0_0_12px_#f97316] relative text-3xl sm:text-5xl md:text-2xl lg:text-5xl font-serif">
              CONTACT US
            </h2>
          </div>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-orange-500 rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-orange-100 font-semibold mb-2">Get in Touch</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact with Us
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-700"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-700"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-700"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-700"
            />
            <textarea
              name="message"
              placeholder="Type your message"
              className="w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-700 resize-none h-32"
              required
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 bg-orange-600 hover:bg-orange-800 text-white font-semibold rounded-lg transition-all duration-300"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Contact Info + Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-[#1d2e58] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
              alt="Contact"
              className="w-full h-97 object-cover rounded-t-2xl"
            />
          </div>

          <div className="bg-orange-500 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
              <span className="text-orange-700 text-xl">📧</span>
              <div className="grid grid-cols-1">
                <p className="text-orange-500 text-lg font-bold">Email</p>

                <a href="mailto:kashyapshivanshu63@gmail.com" className="hover:underline text-gray-800">
                  kashyapshivanshu63@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
