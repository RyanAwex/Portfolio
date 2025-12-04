import React from "react";

const Privacy = () => {
  return (
    <>
      <title>Privacy</title>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16 md:px-20">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Privacy Policy
          </h1>

          <p className="mb-4">
            Your privacy is important to us. This policy explains what
            information we collect and how we use it.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information such as your name, email
            address, and browsing data when you use our website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            2. How We Use Information
          </h2>
          <p className="mb-4">
            The information collected is used to improve our services, respond
            to inquiries, and enhance user experience.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies</h2>
          <p className="mb-4">
            Our website uses cookies to personalize content and analyze traffic.
            You can control cookies via your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Sharing</h2>
          <p className="mb-4">
            We do not sell or rent your personal information. We may share data
            with trusted partners only to provide services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            5. Updates to Policy
          </h2>
          <p className="mb-4">
            We may update this policy from time to time. Please check this page
            periodically for the latest version.
          </p>

          <p className="mt-8 text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Rayane Sefiani. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
