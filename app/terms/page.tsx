// app/terms/page.tsx

const SECTIONS = [
  {
    title: '1. Definitions',
    content: [
      { bold: 'Client/You', text: ' – The person or entity that purchases services or accesses the Website.' },
      { bold: 'Services', text: ' – Digital marketing, advertising, web and software development, SEO, email/SMS marketing, analytics, consulting, or other services provided by the Company.' },
      { bold: 'Website', text: ' – All content at https://aheadtech360.com and subdomains.' },
    ],
    type: 'list',
  },
  {
    title: '2. Acceptance of Terms',
    content: 'By accessing or using our Website or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable policies, including the Privacy Policy. If you do not agree, do not use the Website or Services.',
    type: 'text',
  },
  {
    title: '3. Payment & Billing',
    content: [
      { heading: '3.1 Fees', text: 'All fees for Services are prepaid unless otherwise expressly agreed in writing. This includes one-time project fees, retainers, and recurring subscriptions.' },
      { heading: '3.2 Automatic Renewals', text: 'Subscription services automatically renew on the billing cycle chosen at purchase (monthly or annual). You authorize us to charge your payment method on file for all amounts due.' },
      { heading: '3.3 Cancellations', text: 'Cancellation requires 30 days written notice. Cancellation becomes effective at the end of the current billing period. No pro-rated refunds are provided for partial periods.' },
      { heading: '3.4 Late Payments', text: 'We may suspend or discontinue Services for non-payment without prior notice. Collection costs, interest, or legal costs may be charged to you.' },
    ],
    type: 'subsections',
  },
  {
    title: '4. Scope of Services & Change Orders',
    content: 'Services are limited to the scope defined in your signed agreement, proposal, or order. Any additional work requires a written amendment, quote, and prepayment. Delays caused by Client actions (lack of required access, feedback delays, content delays) may extend timelines.',
    type: 'text',
  },
  {
    title: '5. Client Responsibilities',
    content: 'Clients must provide accurate information, necessary access credentials, and required approvals. You are responsible for ensuring compliance with third-party platform rules and applicable laws.',
    type: 'text',
  },
  {
    title: '6. Intellectual Property',
    content: [
      { heading: '6.1 Ownership', text: 'Ownership of deliverables transfers to the Client only after full payment.' },
      { heading: '6.2 Company IP', text: 'Company retains ownership of frameworks, methodologies, templates, proprietary tools, and underlying technology.' },
      { heading: '6.3 Portfolio Rights', text: 'We may display deliverables in portfolio, marketing, or case studies unless expressly prohibited in writing.' },
    ],
    type: 'subsections',
  },
  {
    title: '7. Confidentiality & Data Use',
    content: 'Both parties will protect confidential information using industry-standard measures. Confidentiality obligations survive termination for two (2) years. Personal data processing is governed by our Privacy Policy.',
    type: 'text',
  },
  {
    title: '8. Warranties & Disclaimers',
    content: 'All Services are provided "AS IS". We disclaim all warranties, including implied warranties of merchantability or fitness for a particular purpose. We do not guarantee specific marketing results, rankings, performance metrics, or revenue outcomes.',
    type: 'text',
  },
  {
    title: '9. Limitation of Liability',
    content: 'To the fullest extent permitted by law, our total liability under these Terms shall not exceed the amount you paid in the 30 days preceding the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages.',
    type: 'text',
  },
  {
    title: '10. Indemnification',
    content: 'You agree to defend, indemnify, and hold harmless the Company from any claims, liabilities, losses, or expenses arising from your breach of these Terms or misuse of Services.',
    type: 'text',
  },
  {
    title: '11. Termination',
    content: 'We may terminate Services immediately for:',
    bullets: ['Non-payment', 'Material breach', 'Fraud, abuse, or unlawful conduct'],
    footer: 'Termination does not relieve you of payment obligations.',
    type: 'bullets',
  },
  {
    title: '12. Third-Party Links',
    content: 'Our Website may link to third-party services or content. We are not responsible for their content, policies, or availability.',
    type: 'text',
  },
  {
    title: '13. Governing Law & Dispute Resolution',
    content: 'These Terms are governed by the laws of the State of Wyoming, United States. All disputes will be resolved through binding arbitration in Wyoming. No class actions.',
    type: 'text',
  },
  {
    title: '14. Modifications to Terms',
    content: 'We may modify these Terms at any time. Changes take effect upon posting. Continued use of the Website or Services constitutes acceptance.',
    type: 'text',
  },
]

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(160deg,#EEF2F9,#fff)', padding: '60px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#213D79' }}>Legal</div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(38px,5.5vw,58px)', color: '#1C2A42', marginBottom: '12px', letterSpacing: '-0.3px' }}>
            Terms & Conditions
          </h1>
          <p style={{ fontSize: '15px', color: '#6E8098', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}>
            Understanding our commitment to transparency and compliance.
          </p>
          <p style={{ fontSize: '12px', color: '#A4B3C4', marginTop: '10px', fontFamily: 'var(--font-jakarta)' }}>
            AheadTech360 LLC · Last updated: 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 32px 80px' }} className="terms-container">

          {/* Intro box */}
          <div style={{ background: '#EEF2F9', border: '1px solid #DFE5ED', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px' }}>
            <p style={{ fontSize: '14px', color: '#3E5068', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', margin: 0 }}>
              Welcome to <strong>AheadTech360 LLC</strong>. These Terms & Conditions ("Terms") govern your access to and use of our website, digital services, software, products, platforms, and any related tools, solutions, or content. By accessing our website or engaging with any services, you agree to these Terms.
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
                <p style={{ fontSize: '14px', color: '#6E8098', lineHeight: 1.8, fontFamily: 'var(--font-jakarta)' }}>
                  {section.content as string}
                </p>
              )}

              {/* Definition list */}
              {section.type === 'list' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(section.content as { bold: string; text: string }[]).map((item, j) => (
                    <p key={j} style={{ fontSize: '14px', color: '#6E8098', lineHeight: 1.8, fontFamily: 'var(--font-jakarta)', margin: 0 }}>
                      <strong style={{ color: '#1C2A42' }}>{item.bold}</strong>{item.text}
                    </p>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.type === 'subsections' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {(section.content as { heading: string; text: string }[]).map((sub, j) => (
                    <div key={j} style={{ background: '#F2F5F8', borderRadius: '8px', padding: '14px 16px' }}>
                      <p style={{ fontSize: '12px', fontWeight: 800, color: '#213D79', marginBottom: '4px', fontFamily: 'var(--font-jetbrains)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {sub.heading}
                      </p>
                      <p style={{ fontSize: '14px', color: '#6E8098', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)', margin: 0 }}>
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Bullets */}
              {section.type === 'bullets' && (
                <>
                  <p style={{ fontSize: '14px', color: '#6E8098', lineHeight: 1.8, fontFamily: 'var(--font-jakarta)', marginBottom: '10px' }}>
                    {section.content as string}
                  </p>
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
              Questions about these Terms? Contact us at{' '}
              <a href="mailto:info@aheadtech360.com" style={{ color: '#1C8F5A', fontWeight: 700 }}>
                info@aheadtech360.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){
          .terms-container { padding: 40px 16px 60px !important; }
        }
      `}</style>
    </>
  )
}