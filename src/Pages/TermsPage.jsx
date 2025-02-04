
const TermsOfService = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 text-black p-6">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Movie Hunt! By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>
        <h2 className="text-2xl font-semibold mb-3">1. Use of Our Service</h2>
        <p className="text-gray-700 mb-4">
          Movie Hunt provides a platform for discovering and tracking movies. You agree to use our service lawfully and responsibly.
        </p>
        <h2 className="text-2xl font-semibold mb-3">2. User Accounts</h2>
        <p className="text-gray-700 mb-4">
          You are responsible for maintaining the security of your account. Any activity under your account is your responsibility.
        </p>
        <h2 className="text-2xl font-semibold mb-3">3. Content and Copyright</h2>
        <p className="text-gray-700 mb-4">
          All content provided on Movie Hunt is for informational purposes. Unauthorized use or distribution of content is prohibited.
        </p>
        <h2 className="text-2xl font-semibold mb-3">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          Movie Hunt is not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our service.
        </p>
        <h2 className="text-2xl font-semibold mb-3">5. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to update these terms at any time. Continued use of our services constitutes acceptance of the revised terms.
        </p>
        <p className="text-gray-600 text-center mt-6">
          If you have any questions about our Terms of Service, please contact us at support@moviehunt.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;