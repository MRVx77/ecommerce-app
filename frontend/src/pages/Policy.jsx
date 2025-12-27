import React from "react";

const Policy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-sm text-gray-500 mb-8">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-6">
        <p>
          Welcome to <strong>Priyalooms</strong>. We are committed to protecting
          your privacy and ensuring the security of your personal information.
          This Privacy Policy explains how we collect, use, and protect your
          data when you use our e-commerce platform.
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>

        <h3 className="font-medium">a) Personal Information</h3>
        <ul className="list-disc ml-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Shipping and billing address</li>
          <li>Encrypted login credentials</li>
        </ul>

        <h3 className="font-medium">b) Order & Transaction Information</h3>
        <ul className="list-disc ml-6">
          <li>Products purchased</li>
          <li>Order history</li>
          <li>Delivery status</li>
        </ul>

        <h3 className="font-medium">c) Payment Information</h3>
        <p>
          Payments are securely processed via <strong>Razorpay</strong>. We do
          not store card details, UPI IDs, CVV, or banking information on our
          servers.
        </p>

        <h2 className="text-xl font-semibold">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6">
          <li>To create and manage user accounts</li>
          <li>To process and deliver orders</li>
          <li>To send order updates and notifications</li>
          <li>To provide customer support</li>
          <li>To improve website performance</li>
          <li>To prevent fraud and unauthorized access</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Cookies Policy</h2>
        <p>
          We use cookies to maintain login sessions, manage cart functionality,
          and analyze website traffic. You can disable cookies in your browser,
          but some features may not work properly.
        </p>

        <h2 className="text-xl font-semibold">4. Data Sharing</h2>
        <p>
          We share data only with trusted third parties such as payment
          gateways, shipping partners, and analytics services when necessary to
          provide our services.
        </p>
        <p>
          <strong>We do not sell or rent your personal data.</strong>
        </p>

        <h2 className="text-xl font-semibold">5. Data Security</h2>
        <ul className="list-disc ml-6">
          <li>SSL (HTTPS) encryption</li>
          <li>Encrypted passwords</li>
          <li>Secure servers and databases</li>
          <li>Restricted access to sensitive data</li>
        </ul>

        <h2 className="text-xl font-semibold">6. User Rights</h2>
        <ul className="list-disc ml-6">
          <li>Access your personal data</li>
          <li>Update or correct your information</li>
          <li>Delete your account</li>
          <li>Withdraw consent</li>
        </ul>

        <p>
          To exercise these rights, contact us at{" "}
          <strong>Priyaloomsofficial@gamil.com</strong>.
        </p>

        <h2 className="text-xl font-semibold">7. Children’s Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 18. We
          do not knowingly collect personal data from minors.
        </p>

        <h2 className="text-xl font-semibold">8. Legal Compliance</h2>
        <p>
          This Privacy Policy complies with the Information Technology Act, 2000
          and the Digital Personal Data Protection (DPDP) Act, 2023 (India).
        </p>

        <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>

        <h2 className="text-xl font-semibold">10. Contact Us</h2>
        <p>
          <strong>Priyalooms</strong>
          <br />
          Email: <strong>Priyaloomsofficial@gamil.com</strong>
          <br />
          Country: India
        </p>
      </section>
    </div>
  );
};

export default Policy;
