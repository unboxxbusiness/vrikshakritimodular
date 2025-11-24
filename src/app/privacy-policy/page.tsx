
'use client';

import { useState, useEffect } from 'react';

export default function PrivacyPolicyPage() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    setLastUpdatedDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);

  return (
    <div className="bg-background pt-16">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-4">
            PRIVACY POLICY – VRIKSHAKRITI MODULAR KITCHENS
          </h1>
          {lastUpdatedDate && (
            <p className="text-sm text-muted-foreground text-center mb-12">
              Last Updated: {lastUpdatedDate}
            </p>
          )}

          <div className="space-y-6 text-foreground/80">
            <p>
              Vrikshakriti Modular Kitchens (“we”, “us”, “our”) is committed to
              protecting your personal information and respecting your privacy. This
              Privacy Policy explains how we collect, use, share, and safeguard
              your information when you visit our website or interact with our
              team.
            </p>
            <p>
              By using our website, you agree to the terms outlined in this Privacy
              Policy.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">1. Information We Collect</h2>
            <p>
              We may collect the following types of information when you visit the
              website, submit a form, or contact us:
            </p>

            <h3 className="text-xl font-semibold tracking-tight text-foreground">A. Personal Information</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Full Name</li>
              <li>Phone Number</li>
              <li>Email Address</li>
              <li>City / Location</li>
              <li>Address details (if shared for consultation or delivery)</li>
              <li>Requirements or project details</li>
            </ul>

            <h3 className="text-xl font-semibold tracking-tight text-foreground">B. Automatic Information</h3>
            <p>When you browse our website, we automatically collect:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Interaction data (buttons clicked, time spent)</li>
              <li>Cookies and tracking data</li>
            </ul>

            <h3 className="text-xl font-semibold tracking-tight text-foreground">C. Communication Information</h3>
            <p>
              Any emails, messages, or WhatsApp conversations you have with us.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">2. How We Use Your Information</h2>
            <p>
              We use your information to provide better service and communication,
              including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Responding to enquiries and customer service requests</li>
              <li>Providing consultations and project estimates</li>
              <li>
                Sending order updates, booking confirmations, or support messages
              </li>
              <li>Improving website performance and user experience</li>
              <li>Sending promotional offers or updates (only if you consent)</li>
              <li>Internal analytics, reporting, and marketing insights</li>
            </ul>
            <p>We do not sell or rent your personal data to third parties.</p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">3. Sharing of Information</h2>
            <p>We may share your information only with:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Internal design & installation teams for project execution
              </li>
              <li>
                Technical partners (like hosting providers or payment gateways)
                for smooth website functioning
              </li>
              <li>Logistics or delivery partners when required</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p>
              All partners accessing your data are required to maintain
              confidentiality.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">4. Cookies & Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tools to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Analyze site traffic</li>
              <li>Remember your preferences</li>
              <li>Improve user experience</li>
              <li>Deliver relevant ads</li>
            </ul>
            <p>
              You can disable cookies through your browser settings, though some
              website features may not work properly.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">5. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g., payment
              gateways, blogs, YouTube, social media). We are not responsible for
              their privacy practices or content.
            </p>
            <p>
              We recommend reading their privacy policies before sharing your
              information.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">6. Data Security</h2>
            <p>
              We use reasonable physical, electronic, and administrative safeguards
              to protect your data. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Request access to the personal data we hold</li>
              <li>Ask for correction of incorrect or outdated information</li>
              <li>Opt out of promotional messages</li>
              <li>Request deletion of your personal data (unless required for legal reasons)</li>
            </ul>
            <p>To exercise these rights, contact us at the details below.</p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">8. Data Retention</h2>
            <p>
              We retain your personal information only as long as necessary:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>To fulfil the purpose it was collected for</li>
              <li>To comply with legal and financial obligations</li>
              <li>To resolve disputes or provide ongoing support</li>
            </ul>
            <p>After this period, the data is securely deleted.</p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">9. Use of WhatsApp Communication</h2>
            <p>By contacting us through WhatsApp, you agree to receive:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Project updates</li>
              <li>Consultation details</li>
              <li>Offers or reminders</li>
              <li>Support messages</li>
            </ul>
            <p>
              You may request to stop WhatsApp communication at any time.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">10. Policy on Children’s Data</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We
              do not knowingly collect data from minors.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">11. Changes to This Privacy Policy</h2>
            <p>
              We may update or modify this Privacy Policy from time to time. The
              updated version will always be available on this page with a “Last
              Updated” date.
            </p>
            <p>
              Continued use of our website means you accept the updated policy.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-foreground pt-6 border-t">12. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, please contact:
            </p>
            <p>
              Vrikshakriti Modular Kitchens
              <br />
              📧 Email: hello@vrikshakriti.shop
              <br />
              📍 Delhi – NCR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
