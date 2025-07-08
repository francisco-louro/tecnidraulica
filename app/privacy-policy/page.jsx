// app/privacy-policy/page.jsx
import Link from "next/link";
import Topbar from "@/components/Topbar";

export default function PrivacyPolicy() {
  return (
    <div className="overflow-hidden">
      {/*<Topbar className="fixed top-0 left-0 right-0 z-50" />*/}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect information when you use our website, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              Personal data you provide (name, email, etc.)
            </li>
            <li className="mb-2">Usage data through cookies and analytics</li>
            <li className="mb-2">Device and browser information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. How We Use Cookies</h2>
          <p className="mb-4">Our website uses these cookie categories:</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-medium mb-2">Necessary Cookies</h3>
            <p className="text-sm mb-4">
              Essential for website functionality. Cannot be disabled.
            </p>

            <h3 className="font-medium mb-2">Analytics Cookies</h3>
            <p className="text-sm mb-4">
              Help us understand how visitors interact with our website.
            </p>

            <h3 className="font-medium mb-2">Marketing Cookies</h3>
            <p className="text-sm">
              Used to track visitors across websites for advertising purposes.
            </p>
          </div>
          <p>
            You can manage your cookie preferences at any time using our{" "}
            <Link href="#" className="text-blue-600 underline">
              Cookie Settings
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li className="mb-2">Service providers assisting our business</li>
            <li className="mb-2">Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Your Rights</h2>
          <p className="mb-2">
            Under GDPR and other privacy laws, you have the right to:
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">Access your personal data</li>
            <li className="mb-2">Request correction or deletion</li>
            <li className="mb-2">Object to processing</li>
            <li className="mb-2">Withdraw consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            For privacy-related inquiries, contact us at:{" "}
            <a
              href="mailto:privacy@yourdomain.com"
              className="text-blue-600 underline"
            >
              privacy@yourdomain.com
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </section>
      </div>
    </div>
  );
}
