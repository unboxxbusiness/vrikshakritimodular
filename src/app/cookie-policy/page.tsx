
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CookiePolicyPage() {
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
            COOKIE POLICY – VRIKSHAKRITI MODULAR KITCHENS
          </h1>
          {lastUpdatedDate && (
            <p className="text-sm text-muted-foreground text-center mb-12">
              Last Updated: {lastUpdatedDate}
            </p>
          )}

          <div className="space-y-6 text-foreground/80">
            <p>
              This Cookie Policy explains how Vrikshakriti Modular Kitchens (“we”, “us”, “our”) uses cookies and similar tracking technologies when you visit our website.
            </p>
            <p>
              By continuing to browse our site, you agree to our use of cookies as described below.
            </p>

            <h2 className="pt-6 border-t">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help improve your browsing experience by remembering your preferences, analyzing site performance, and personalizing content.
            </p>

            <h2 className="pt-6 border-t">2. Types of Cookies We Use</h2>
            <p>
              We use the following categories of cookies:
            </p>

            <h3>A. Essential / Strictly Necessary Cookies</h3>
            <p>These cookies are required for the website to function properly. They help with:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Page navigation</li>
              <li>Security</li>
              <li>Form submissions</li>
              <li>Loading core website features</li>
            </ul>
            <p>You cannot disable these cookies.</p>

            <h3>B. Performance & Analytics Cookies</h3>
            <p>These cookies help us understand how visitors use the website, such as:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Pages visited</li>
              <li>Time spent</li>
              <li>Clicks and interactions</li>
              <li>Website errors</li>
            </ul>
            <p>We use this data to improve our website performance and user experience.</p>

            <h3>C. Functional Cookies</h3>
            <p>These cookies allow the website to remember your:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Language preferences</li>
              <li>Location-based settings</li>
              <li>Form information</li>
            </ul>
            <p>They make your browsing experience more personalized.</p>

            <h3>D. Advertising / Marketing Cookies</h3>
            <p>These cookies may be used (if enabled) to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Show relevant ads</li>
              <li>Measure ad performance</li>
              <li>Track conversions</li>
              <li>Build anonymized visitor profiles</li>
            </ul>
            <p>We may use platforms like Google, Facebook, or Instagram for retargeting campaigns.</p>

            <h2 className="pt-6 border-t">3. Third-Party Cookies</h2>
            <p>Some cookies may come from trusted third parties, such as:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Google Analytics</li>
              <li>Meta Pixel (Facebook/Instagram)</li>
              <li>YouTube embeds</li>
              <li>Advertisement tools</li>
            </ul>
            <p>These services may use cookies to personalize your experience beyond our site. We are not responsible for third-party cookie policies. Please review their terms directly.</p>

            <h2 className="pt-6 border-t">4. How You Can Manage Cookies</h2>
            <p>You can control or disable cookies anytime through:</p>
            
            <h3>A. Browser Settings</h3>
            <p>Most browsers allow you to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Block cookies</li>
              <li>Delete cookies</li>
              <li>Allow or restrict certain types</li>
            </ul>
            <p>Common browsers: Chrome, Firefox, Safari, Edge.</p>

            <h3>B. Cookie Banner Settings</h3>
            <p>You can change your cookie preferences through our cookie banner when you first visit the website. (Enable button on site if applicable.)</p>

            <h3>C. Opt-out Links</h3>
            <p>For analytics/ad cookies (if used):</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Google Analytics Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a></li>
              <li>Meta Ads Preferences: <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.facebook.com/ads/preferences</a></li>
            </ul>

            <h2 className="pt-6 border-t">5. What Happens If You Disable Cookies?</h2>
            <p>If you disable cookies, some features may not work properly, including:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Form submissions</li>
              <li>Personalized content</li>
              <li>Login sessions</li>
              <li>Video embeds</li>
              <li>Analytics tracking</li>
            </ul>
            <p>Your browsing experience may be limited.</p>

            <h2 className="pt-6 border-t">6. Data Protection & Privacy</h2>
            <p>
              For information on how we collect, store, and protect your personal data, please review our:
              <Link href="/privacy-policy" className="text-primary hover:underline font-semibold"> 👉 Privacy Policy</Link>
            </p>

            <h2 className="pt-6 border-t">7. Updates to This Cookie Policy</h2>
            <p>We may update this Cookie Policy to reflect:</p>
            <ul className="list-disc space-y-2 pl-6">
                <li>Website changes</li>
                <li>Legal requirements</li>
                <li>New technologies</li>
            </ul>
            <p>The latest version will always be available on this page.</p>

            <h2 className="pt-6 border-t">8. Contact Us</h2>
            <p>
              If you have questions or requests regarding this Cookie Policy or your data, contact:
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
