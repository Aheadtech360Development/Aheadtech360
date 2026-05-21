// app/privacy/page.tsx

const SECTIONS = [
  {
    title: '1. Information We Collect',
    type: 'bullets',
    content: 'We may collect:',
    bullets: [
      'A full refund may be available within 14 days of the initial payment if no work has started.',
      'Partial refunds may be considered depending on progress and completed deliverables.',
      'Custom development and approved builds are non-refundable once work begins.',
      'All refund requests must be submitted in writing for review.',
    ],
    footer: 'Our goal is simple: keep your information safe while helping your business grow with confidence.',
  },
  {
    title: '2. How We Use Your Data',
    type: 'bullets',
    content: 'We use your information to:',
    bullets: [
      'Provide and manage Services',
      'Process payments and billing',
      'Respond to requests and support needs',
      'Improve and personalize Services',
      'Send service notifications and, if consented, marketing messages',
    ],
  },
  {
    title: '3. Non-Sharing of Mobile Numbers',
    type: 'text',
    content: 'We do not share your mobile phone numbers or SMS/text messaging consent information with third parties or affiliates for their own marketing or promotional purposes. Your phone number and related consent are used solely for the purposes outlined in this policy.',
  },
  {
    title: '4. Cookies & Tracking',
    type: 'text',
    content: 'We use cookies and pixels for analytics, performance, and advertising optimization. You may disable cookies through browser settings.',
  },
  {
    title: '5. Data Sharing',
    type: 'bullets',
    content: 'We do not sell personal data. We may share data with:',
    bullets: ['Service providers', 'Payment processors', 'Legal authorities when required'],
  },
  {
    title: '6. International Transfers',
    type: 'text',
    content: 'Data may be processed or stored outside your jurisdiction, including the U.S.',
  },
  {
    title: '7. User Rights (GDPR & CCPA)',
    type: 'text',
    content: 'You may request access, correction, deletion, restriction, or opt-out of certain processing. California residents can request rights under CCPA. GDPR rights apply to EU data subjects. Requests: info@aheadtech360.com.',
  },
  {
    title: '8. Data Security & Retention',
    type: 'text',
    content: 'We implement reasonable security measures, but no system is fully secure. Data is retained only as long as necessary for business, compliance, or legal purposes.',
  },
  {
    title: '9. Children',
    type: 'text',
    content: 'We do not knowingly collect data from individuals under 18.',
  },
  {
    title: '10. Policy Changes',
    type: 'text',
    content: 'This policy may be updated from time to time. Continued use implies acceptance.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Legal</div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(38px,5.5vw,58px)', color: '#1C2A42', marginBottom: '12px', letterSpacing: '-0.3px' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '15px', color: '#6E8098', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}>
            How we collect, use, and protect your personal information.
          </p>
          <p style={{ fontSize: '12px', color: '#A4B3C4', marginTop: '10px', fontFamily: 'var(--font-jakarta)' }}>
            AheadTech360 LLC · Last updated: 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 32px 80px' }} className="privacy-container">

          {/* Intro box */}
          <div style={{ background: '#EEF2F9', border: '1px solid #DFE5ED', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px' }}>
            <p style={{ fontSize: '14px', color: '#3E5068', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', margin: 0 }}>
              At <strong>AheadTech360 LLC</strong>, we take your privacy seriously and are committed to protecting your personal data in full compliance with applicable privacy laws, including <strong>GDPR</strong> and <strong>CCPA</strong>.
            </p>
          </div>

          {/* Sections */}
          {SECTIONS.map((section, i) => (
            <div key={i} style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: i < SECTIONS.length - 1 ? '1px solid #DFE5ED' : 'none' }}>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '18px', fontWeight: 800, color: '#080E1C', marginBottom: '12px' }}>
                {section.title}
              </h2>

              {/* Plain text */}
              {section.type === 'text' && (
                <p style={{ fontSize: '14px', color: '#6E8098', lineHeight: 1.8, fontFamily: 'var(--font-jakarta)', margin: 0 }}>
                  {section.content}
                </p>
              )}

              {/* Bullets */}
              {section.type === 'bullets' && (
                <>
                  {section.content && (
                    <p style={{ fontSize: '14px', color: '#6E8098', lineHeight: 1.8, fontFamily: 'var(--font-jakarta)', marginBottom: '10px' }}>
                      {section.content}
                    </p>
                  )}
                  <ul style={{ paddingLeft: '20px', margin: '0 0 10px' }}>
                    {section.bullets?.map((b, j) => (
                      <li key={j} style={{ fontSize: '14px', color: '#6E8098', lineHeight: 1.8, fontFamily: 'var(--font-jakarta)', marginBottom: '4px' }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                  {section.footer && (
                    <p style={{ fontSize: '14px', color: '#6E8098', lineHeight: 1.8, fontFamily: 'var(--font-jakarta)', margin: 0 }}>
                      {section.footer}
                    </p>
                  )}
                </>
              )}
            </div>
          ))}

          {/* Contact note */}
          <div style={{ background: '#EDFBF3', border: '1px solid rgba(37,180,114,.2)', borderRadius: '12px', padding: '20px 24px' }}>
            <p style={{ fontSize: '14px', color: '#1C8F5A', fontFamily: 'var(--font-jakarta)', margin: 0, lineHeight: 1.7 }}>
              Privacy questions or data requests? Contact us at{' '}
              <a href="mailto:info@aheadtech360.com" style={{ color: '#1C8F5A', fontWeight: 700 }}>
                info@aheadtech360.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .privacy-container { padding: 40px 16px 60px !important; }
        }
      `}</style>
    </>
  )
}