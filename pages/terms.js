// pages/terms.js
import React from 'react';
import Head from 'next/head'; // Optional: For setting the page title

const TermsOfServicePage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Digital Safety</title>
        {/* Add meta description or other head elements if needed */}
      </Head>

      <div className="bg-gray-50 min-h-screen py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm rounded-lg p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Effective Date: October 26, 2023
          </p>

          <div className="prose prose-lg max-w-none text-gray-700"> {/* Using prose for nice default styling */}
            <p className="mb-6">
              Welcome to Digital Safety! These Terms of Service ("Terms") govern your use of our website located at digitalsafety.no (the "Site") and any related services provided by Digital Safety ("Company," "we," "us," or "our").
            </p>
            <p className="mb-6">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Use of Our Service</h2>
            <p className="mb-4">
              You agree to use our Service only for lawful purposes and in accordance with these Terms. You must be at least 18 years old to use our Service.
            </p>
            <p className="mb-4">
              You are responsible for ensuring that your use of the Service complies with all applicable laws, rules, and regulations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Digital Safety and its licensors. The Service is protected by copyright, trademark, and other laws of both [Your Country] and foreign countries.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of Norway, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Changes to These Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>By email: swapnil@digitalsafety.no</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;