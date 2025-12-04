import React, { useState } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const submitForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      resolve({ success: true });
    }, 1500);
  });
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    try {
      const response = await submitForm(formData);
      if (response.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          <span className="text-indigo-600 dark:text-indigo-400 mr-3">04.</span>
          Get in Touch
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-lg shadow-md transform transition-transform duration-300 cursor-pointer border border-transparent bg-white dark:bg-zinc-900 hover:border-gray-300 dark:hover:border-gray-700 p-8 md:p-10 rounded-xl text-left ">
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-center">
              I'm available for new projects and collaborations. Let's connect!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 mt-[1px]" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                  className="w-full h-12 pl-10 p-3 border border-gray-300 dark:border-gray-700 dark:bg-zinc-800 dark:text-white dark:focus:bg-black rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 mt-[1px]" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                  className="w-full h-12 pl-10 p-3 border border-gray-300 dark:border-gray-700 dark:bg-zinc-800 dark:text-white dark:focus:bg-black rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 placeholder-gray-500"
                  placeholder="Your Email Address"
                />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <MessageSquare className="pointer-events-none absolute left-3 top-3 w-5 h-5 text-gray-400 mt-[3px]" />
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "submitting"}
                  className="w-full pl-10 p-3 border border-gray-300 dark:border-gray-700 dark:bg-zinc-800 dark:text-white dark:focus:bg-black rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 resize-y placeholder-gray-500"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <p className="flex items-center text-sm font-medium text-green-700 bg-green-100 p-3 rounded-lg border border-green-300">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center text-sm font-medium text-red-700 bg-red-100 p-3 rounded-lg border border-red-300">
                  ❌ Submission failed. Please ensure all fields are filled.
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-lg text-sm font-semibold text-white transition duration-300 shadow-lg transform hover:scale-[1.01] ${
                  status === "submitting"
                    ? "bg-indigo-400 cursor-not-allowed"
                    : status === "success"
                    ? "bg-green-600 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                }`}
              >
                {status === "submitting" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>
                      {status === "success" ? "Message Sent!" : "Send Message"}
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
