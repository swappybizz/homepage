// pages/privacy.js
import React from 'react';
import Head from 'next/head'; // Optional: For setting the page title

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - [Your Company Name]</title>
        {/* Add meta description or other head elements if needed */}
      </Head>

      <div className="bg-gray-50 min-h-screen py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-sm rounded-lg p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Last Updated: October 26, 2023
          </p>

          <div className="prose prose-lg max-w-none text-gray-700"> {/* Using prose for nice default styling */}
            <p className="mb-6">
              [Your Company Name] ("us", "we", or "our") operates the [Your Website URL] website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
            <p className="mb-6">
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Information Collection and Use</h2>
            <p className="mb-4">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Types of Data Collected</h3>
            <p className="font-semibold mb-2">Personal Data:</p>
            <p className="mb-4">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number (Optional)</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <p className="font-semibold mb-2">Usage Data:</p>
            <p className="mb-4">
              We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Use of Data</h2>
            <p className="mb-4">
              [Your Company Name] uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Data Security</h2>
            <p className="mb-4">
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Service Providers</h2>
            <p className="mb-4">
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), provide the Service on our behalf, perform Service-related services or assist us in analysing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Links to Other Sites</h2>
            <p className="mb-4">
              Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Children's Privacy</h2>
            <p className="mb-4">
              Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Child has provided us with Personal Data, please contact us.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "Last Updated" date at the top of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc list-inside mb-6 pl-4">
              <li>By email: swapnil@digitalsafety.no</li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;