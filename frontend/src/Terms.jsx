import React from "react";

const Terms = () => {
  return (
    <>
      <title>Terms</title>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16 md:px-20">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-10">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Terms & Conditions
          </h1>

          <p className="mb-4">
            Welcome to our website. By accessing or using our site, you agree to
            comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1. Use of the Website
          </h2>
          <p className="mb-4">
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            2. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on this site, including text, images, and logos, is the
            property of the website owner unless otherwise stated.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            3. Limitation of Liability
          </h2>
          <p className="mb-4">
            We are not liable for any damages arising from the use of this
            website. Use it at your own risk.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">
            4. Changes to Terms
          </h2>
          <p className="mb-4">
            We reserve the right to update these terms at any time. It is your
            responsibility to review them periodically.
          </p>

          <p className="mt-8 text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Rayane Sefiani. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
