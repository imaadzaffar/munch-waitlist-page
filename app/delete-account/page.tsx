import React from 'react';

export default function DeleteAccountPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary border-b-2 border-gray-200 pb-4 mb-4">
          Delete Your Account
        </h1>
        <p className="text-secondary italic">Last updated April 14, 2025</p>
      </header>

      <main className="space-y-12">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">How to Delete Your Account</h2>
          <p className="mb-6">If you wish to delete your Munch account, please follow these steps:</p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <ol className="list-decimal pl-6 space-y-4">
              <li>Send an email to <a href="mailto:support@zafarislabs.com" className="text-accent hover:underline">support@zafarislabs.com</a> from the email address associated with your account</li>
              <li>Include "Account Deletion Request" in the subject line</li>
              <li>In the body of the email, confirm that you want to delete your account</li>
              <li>Our support team will process your request within 48 hours</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-700"><strong>Important:</strong> Once your account is deleted, this action cannot be undone. All your data will be permanently removed from our systems.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">What Happens When You Delete Your Account</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Data That Will Be Deleted</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your account information (email, username, password)</li>
                <li>All personal data associated with your account</li>
                <li>All other data collected during your use of our services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Data Retention</h3>
              <p>We do not retain any of your data after account deletion. Once your account is deleted:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>All your data is permanently removed from our active systems</li>
                <li>No data is kept in backup systems</li>
                <li>There is no retention period - deletion is immediate and permanent</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Need Help?</h2>
          <p className="mb-4">If you have any questions about the account deletion process, please contact our support team:</p>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-medium">Email: <a href="mailto:support@zafarislabs.com" className="text-accent hover:underline">support@zafarislabs.com</a></p>
            <p className="font-medium mt-2">Zafaris Labs Ltd<br />
            128 City Rd<br />
            London EC1V 2NX<br />
            United Kingdom</p>
          </div>
        </section>
      </main>
    </div>
  );
} 