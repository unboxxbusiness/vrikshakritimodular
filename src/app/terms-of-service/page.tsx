
'use client';

import { useState, useEffect } from 'react';

export default function TermsOfServicePage() {
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
          <h1 className="text-center mb-4">
            TERMS OF USE – VRIKSHAKRITI MODULAR KITCHENS
          </h1>
          {lastUpdatedDate && (
            <p className="text-sm text-muted-foreground text-center mb-12">
              Last Updated: {lastUpdatedDate}
            </p>
          )}

          <div className="space-y-6 text-foreground/80">
            <p>
              Welcome to Vrikshakriti Modular Kitchens. By using our website,
              services, or submitting your information through our contact forms,
              you agree to the Terms of Use listed below. Please read them
              carefully before accessing or using our website.
            </p>
            <p>
              If you do not agree with these Terms, please do not use our website
              or services.
            </p>

            <h2 className="pt-6 border-t">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you agree to comply with these Terms of
              Use, our Privacy Policy, and any other guidelines posted on the
              site. These Terms apply to all visitors, customers, and users of the
              website.
            </p>

            <h2 className="pt-6 border-t">2. Use of Website</h2>
            <p>You agree to use our website for lawful purposes only. You must not:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Copy, reproduce, or distribute our content without written permission</li>
              <li>Use our website to spread harmful, offensive, or fraudulent information</li>
              <li>Interfere with the functioning or security of the website</li>
            </ul>

            <h2 className="pt-6 border-t">3. Product & Service Information</h2>
            <p>Vrikshakriti Modular Kitchens provides:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Modular kitchen design services</li>
              <li>Manufacturing & installation</li>
              <li>Customized storage and interior solutions</li>
            </ul>
            <p>
              All product images, designs, layouts, and materials shown on the
              website are for illustrative purposes. Actual products may vary
              depending on availability, customization, and project requirements.
            </p>
            <p>
              We reserve the right to update designs, prices, materials, and
              service offerings without prior notice.
            </p>

            <h2 className="pt-6 border-t">4. Pricing & Estimates</h2>
            <p>Any pricing shown on the website is:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Indicative and subject to change</li>
              <li>
                Dependent on materials, finishes, layout, accessories, and
                measurements
              </li>
              <li>Not final unless confirmed in writing</li>
            </ul>
            <p>
              Final pricing is provided only after consultation, site measurement,
              and project analysis.
            </p>

            <h2 className="pt-6 border-t">5. Intellectual Property</h2>
            <p>
              All content on this website—including text, images, graphics,
              designs, logos, videos, and layouts—is the intellectual property of
              Vrikshakriti Modular Kitchens unless otherwise stated.
            </p>
            <p>You may not:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Copy</li>
              <li>Modify</li>
              <li>Reproduce</li>
              <li>Publish</li>
              <li>Sell</li>
              <li>Distribute</li>
            </ul>
            <p>any material from this website without explicit written permission.</p>

            <h2 className="pt-6 border-t">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. Vrikshakriti
              is not responsible for the content, accuracy, or policies of
              third-party websites. Visiting these links is at your own risk.
            </p>

            <h2 className="pt-6 border-t">7. User Submissions</h2>
            <p>
              When you submit information through forms, WhatsApp, or email, you
              agree that:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>You are providing accurate information</li>
              <li>We may contact you regarding your enquiry</li>
              <li>We may store your information as per our Privacy Policy</li>
            </ul>
            <p>We do not sell your personal information to any external party.</p>

            <h2 className="pt-6 border-t">8. Appointments & Consultations</h2>
            <p>Booking a consultation does not guarantee:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Final price</li>
              <li>Deliverables</li>
              <li>Timeline of project execution</li>
            </ul>
            <p>
              All deliverables are confirmed only after a formal agreement and
              advance payment.
            </p>

            <h2 className="pt-6 border-t">9. Limitations of Liability</h2>
            <p>Vrikshakriti is not liable for:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Temporary website unavailability</li>
              <li>Errors in content due to updates</li>
              <li>
                Losses caused by using website information without professional
                consultation
              </li>
            </ul>
            <p>
              All design and technical decisions should be verified with our team
              before execution.
            </p>

            <h2 className="pt-6 border-t">10. Project Timelines</h2>
            <p>
              Estimated timelines for manufacturing or installation may vary due to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Material availability</li>
              <li>Design changes</li>
              <li>Site conditions</li>
              <li>External factors like weather, logistics, or government restrictions</li>
            </ul>
            <p>We are not liable for delays caused by such circumstances.</p>

            <h2 className="pt-6 border-t">11. Indemnification</h2>
            <p>
              By using our website and services, you agree to indemnify and hold
              Vrikshakriti, its directors, employees, and partners harmless from
              any claim or demand arising out of:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Your misuse of the website</li>
              <li>Violation of these Terms</li>
              <li>Use of our content without permission</li>
            </ul>

            <h2 className="pt-6 border-t">12. Modifications to Terms</h2>
            <p>
              We may update or revise these Terms of Use at any time. Continued
              use of our website means you accept the updated Terms.
            </p>

            <h2 className="pt-6 border-t">13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India, with jurisdiction in
              Delhi NCR.
            </p>

            <h2 className="pt-6 border-t">14. Contact Us</h2>
            <p>
              If you have questions about these Terms of Use, please contact:
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
