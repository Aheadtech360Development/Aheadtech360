/**
 * Privacy Policy. Sections 2–10 are the existing published policy (GDPR/CCPA, SMS mobile-number
 * non-sharing, international transfers). Section 1 is rewritten: the previously published text under
 * "Information We Collect" was refund-policy copy pasted in by mistake. Needs legal review.
 */
import type { LegalDocumentMeta, LegalSection } from './types'

export const PRIVACY_SECTIONS: readonly LegalSection[] = [
  {
    title: '1. Information We Collect',
    blocks: [
      {
        type: 'p',
        text: 'When you fill out a form, book a call, or contact us, we collect what you provide directly — name, email, phone number, company and store details, and anything you share about your business. Our site also automatically collects basic technical information, like your browser, device, and pages visited.',
      },
      {
        type: 'p',
        text: 'Our goal is simple: keep your information safe while helping your business grow with confidence.',
      },
    ],
  },
  {
    title: '2. How We Use Your Data',
    blocks: [
      { type: 'p', text: 'We use your information to:' },
      {
        type: 'ul',
        items: [
          'Provide and manage Services',
          'Process payments and billing',
          'Respond to requests and support needs',
          'Improve and personalize Services',
          'Send service notifications and, if consented, marketing messages',
        ],
      },
    ],
  },
  {
    title: '3. Non-Sharing of Mobile Numbers',
    blocks: [
      {
        type: 'p',
        text: 'We do not share your mobile phone numbers or SMS/text messaging consent information with third parties or affiliates for their own marketing or promotional purposes. Your phone number and related consent are used solely for the purposes outlined in this policy.',
      },
    ],
  },
  {
    title: '4. Cookies & Tracking',
    blocks: [
      {
        type: 'p',
        text: 'We use cookies and pixels for analytics, performance, and advertising optimization. You may disable cookies through browser settings.',
      },
    ],
  },
  {
    title: '5. Data Sharing',
    blocks: [
      { type: 'p', text: 'We do not sell personal data. We may share data with:' },
      { type: 'ul', items: ['Service providers', 'Payment processors', 'Legal authorities when required'] },
    ],
  },
  {
    title: '6. International Transfers',
    blocks: [{ type: 'p', text: 'Data may be processed or stored outside your jurisdiction, including the U.S.' }],
  },
  {
    title: '7. User Rights (GDPR & CCPA)',
    blocks: [
      {
        type: 'p',
        text: 'You may request access, correction, deletion, restriction, or opt-out of certain processing. California residents can request rights under CCPA. GDPR rights apply to EU data subjects. Requests: info@aheadtech360.com.',
      },
    ],
  },
  {
    title: '8. Data Security & Retention',
    blocks: [
      {
        type: 'p',
        text: 'We implement reasonable security measures, but no system is fully secure. Data is retained only as long as necessary for business, compliance, or legal purposes.',
      },
    ],
  },
  {
    title: '9. Children',
    blocks: [{ type: 'p', text: 'We do not knowingly collect data from individuals under 18.' }],
  },
  {
    title: '10. Policy Changes',
    blocks: [{ type: 'p', text: 'This policy may be updated from time to time. Continued use implies acceptance.' }],
  },
  {
    title: '11. Contact',
    blocks: [
      {
        type: 'p',
        text: 'Questions about this policy, or requests about your data, can be sent to info@aheadtech360.com, or by mail to AheadTech360 LLC, 30 N Gould St, STE N, Sheridan, WY 82801.',
      },
    ],
  },
]

export const PRIVACY_META: LegalDocumentMeta = {
  title: 'Privacy Policy',
  effective: 'September 10, 2026',
  intro: [
    'AheadTech360 LLC (“AheadTech360,” “we,” “us”) respects your privacy. This policy explains what information we collect through this website and our booking process, how we use it, and the choices you have. It applies to visitors of this site and to prospects who book a call with us.',
  ],
}
