// app/terms/page.tsx
// Terms & Conditions — content mirrors the approved AheadTech360 LLC Terms document.
// Section text is data-driven below; **double asterisks** mark inline bold.
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions — AheadTech360',
  description:
    'The terms governing all services, proposals, invoices, and communications between AheadTech360 LLC and its clients, including payment, refunds, timelines, liability, and dispute resolution.',
}

const EFFECTIVE_DATE = '10 Sep 2026'
const LAST_UPDATED = '10 Sep 2026'

type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }

interface Section {
  title: string
  blocks: Block[]
}

const SECTIONS: Section[] = [
  {
    title: '1. Services',
    blocks: [
      {
        type: 'p',
        text: `AheadTech360 provides digital growth services, including paid ads (Meta/Google), CRO, email marketing automation, Shopify build/optimization, and brand and website strategy, as defined in a signed proposal or Service Agreement. Nothing on the Site is an offer of service without a signed agreement and payment.`,
      },
    ],
  },
  {
    title: '2. Payment',
    blocks: [
      {
        type: 'ul',
        items: [
          `**100% advance payment is required** for all services before work begins, unless a signed Service Agreement states an alternate schedule.`,
          `Invoices are due immediately upon issue unless a due date is stated.`,
          `Client is responsible for all third-party costs incurred on their behalf (ad spend, app/software fees, platform costs) regardless of project status.`,
          `Fees are quoted in USD and exclude taxes/duties, which are the Client's responsibility.`,
        ],
      },
    ],
  },
  {
    title: '3. No Chargebacks',
    blocks: [
      {
        type: 'p',
        text: `Client agrees **not** to file a chargeback, payment dispute, or reversal through their bank or card provider for any payment made to AheadTech360. Any billing error (wrong amount charged, duplicate charge, unauthorized charge) must be raised directly with us by email at **finance@aheadtech360.com within 7 days** of the charge. Refund requests based on non-performance are governed exclusively by Section 4 and its 30-day window, not by this billing-error window.`,
      },
      {
        type: 'p',
        text: `Filing a chargeback instead of contacting us directly is treated as a material breach of these Terms. If a chargeback is filed:`,
      },
      {
        type: 'ul',
        items: [
          `AheadTech360 may immediately suspend or terminate all services and access, with no obligation to deliver further work.`,
          `Client remains liable for the full amount, plus any bank/processor fees and collection costs incurred by AheadTech360 in recovering it.`,
          `AheadTech360 may pursue the amount through collections or legal action.`,
        ],
      },
    ],
  },
  {
    title: '4. Refunds, Returns & Cancellations',
    blocks: [
      {
        type: 'ul',
        items: [
          `**Refund window for total non-performance.** If AheadTech360 has performed no work at all under the engagement, Client may request a refund in writing to **finance@aheadtech360.com** within **30 days** of the engagement start date (the date of first payment). This is the only basis on which a refund may be requested, and this is the only window in which it may be requested. Requests made after 30 days are not eligible for a refund under any circumstance, including a claim that no work was performed.`,
          `**What counts as work.** For purposes of this Section, "work" includes any service-related activity under the Service Agreement, including onboarding, account access setup, audits, strategy or creative development, campaign build-out, or communication directly tied to delivering the engagement. Performing any of these means the engagement is not eligible for a non-performance refund.`,
          `**Partial or incomplete deliverables are never grounds for a refund.** Once any work has been performed under the engagement, a dispute over one or more specific deliverables within a broader scope (for example, one deliverable out of ten not being completed) is not treated as non-performance and is not refundable, regardless of how much time has passed. Client's sole remedy in this situation is to request completion of the outstanding deliverable(s), handled under the normal delivery and timeline terms of the Service Agreement, not as a refund claim.`,
          `**Retainer engagements.** The 30-day window runs once, from the engagement's original start date, not from each subsequent billing cycle. Continued retainer billing and continued engagement past the 30-day window is treated as confirmation that services are ongoing, and closes out any non-performance refund claim permanently.`,
          `Any refund request must be submitted in writing to **finance@aheadtech360.com**. Verbal requests, WhatsApp messages, or chargebacks do not count as a valid refund request.`,
          `Refunds, if granted under this Section, are limited to the specific engagement fee for the period in which no work occurred, and do not extend to any month, cycle, or period in which any work was performed.`,
          `No refunds are issued for third-party costs already spent (ad spend delivered, software already provisioned, contractor time already committed).`,
          `If Client cancels an active engagement, all fees paid to date are retained by AheadTech360 for work performed and resources committed, subject to the non-performance window above. Any remaining scope is simply not delivered, and it is not refunded.`,
          `Dissatisfaction with marketing results (ROAS, conversion rate, traffic, rankings, etc.) is not, by itself, grounds for a refund. See Section 8.`,
        ],
      },
    ],
  },
  {
    title: '5. Project Timelines & Delays',
    blocks: [
      {
        type: 'ul',
        items: [
          `Timelines quoted in a proposal or Service Agreement are estimates based on the Client providing access, assets, approvals, and feedback within **3 business days** per request, unless stated otherwise.`,
          `**If a timeline is extended because the Client is slow or unresponsive** (delayed approvals, missing access/assets, unanswered messages, delayed feedback), the extended timeline is not a failure or breach by AheadTech360. Example: a 1 month project estimate can reasonably become 3 months if the Client is the source of delay; this does not entitle the Client to a discount, refund, or free extension of scope.`,
          `If Client does not respond for **14 consecutive days**, AheadTech360 may pause the engagement. Fees already paid are not refunded during or after a pause caused by Client non-responsiveness.`,
          `If Client remains unresponsive for **30 days** after a pause, AheadTech360 may treat the engagement as terminated by the Client under Section 4 (no refund).`,
        ],
      },
    ],
  },
  {
    title: '6. Communication',
    blocks: [
      {
        type: 'ul',
        items: [
          `All official project communication happens by **email only**. Instructions, approvals, or change requests made through any other channel (calls, WhatsApp, in-person conversation, etc.) are not binding until confirmed in writing by email.`,
          `AheadTech360 will respond to Client emails within **2 business days**.`,
          `Any changes to scope, deadlines, or deliverables must be confirmed in writing by email to be valid. Verbal or informal agreements do not override the signed Service Agreement or these Terms.`,
          `Formal reporting (if included in scope) is delivered on the cadence stated in the Service Agreement. Delays to reporting caused by Client-side access issues or non-response are not a breach by AheadTech360.`,
        ],
      },
    ],
  },
  {
    title: '7. Intellectual Property & Portfolio Rights',
    blocks: [
      {
        type: 'ul',
        items: [
          `Client-provided brand assets, logos, and product content remain Client's property.`,
          `AheadTech360's internal frameworks, templates, SOPs, and proprietary systems remain our exclusive property regardless of engagement.`,
          `Upon full payment, Client receives the right to use final deliverables created specifically for them.`,
          `**Unless the signed Service Agreement expressly states otherwise, AheadTech360 retains the right to reference, display, and advertise any completed work,** including as case studies, in our portfolio, on our website, and in marketing or sales materials, without further approval from Client.`,
        ],
      },
    ],
  },
  {
    title: '8. No Guarantee of Results',
    blocks: [
      {
        type: 'p',
        text: `Marketing outcomes depend on factors outside our control, including platform algorithm changes, market conditions, Client's product/pricing/inventory decisions, and Client's own responsiveness. **AheadTech360 does not guarantee specific revenue, ROAS, conversion rate, or other performance outcomes** unless explicitly stated with defined terms in a signed Service Agreement. Case studies and past results shown anywhere are illustrative only, not a promise of similar results.`,
      },
    ],
  },
  {
    title: '9. Confidentiality',
    blocks: [
      {
        type: 'p',
        text: `Both parties will keep the other's non-public business, financial, and strategic information confidential, using it only for the engagement. This survives termination for **2 years**, except for information that becomes public, was already known, or must be disclosed by law.`,
      },
    ],
  },
  {
    title: '10. Liability & Indemnification',
    blocks: [
      {
        type: 'ul',
        items: [
          `Except for the specific claims listed below, AheadTech360 has no liability whatsoever, to the fullest extent permitted by law, and Client engages AheadTech360's services at their own risk.`,
          `**AheadTech360 may only be held liable for a claim arising from one of the following:**`,
        ],
      },
      {
        type: 'ol',
        items: [
          `Gross negligence or willful misconduct in performing the services.`,
          `A confirmed breach of the confidentiality obligations in Section 9.`,
          `Total non-performance within the 30-day window defined in Section 4, meaning AheadTech360 accepted payment and performed no work at all, and Client raised the claim in writing within that window.`,
          `A direct technical error caused by AheadTech360 that disables or breaks the Client's live store or checkout.`,
          `Infringement of a third party's intellectual property rights by material AheadTech360 itself sourced or created for the Client.`,
        ],
      },
      {
        type: 'ul',
        items: [
          `**No claim may be brought, and AheadTech360 has no liability, for any other reason,** including but not limited to: marketing results or performance not meeting expectations (see Section 8), a dispute over one or more specific deliverables within a broader scope of work (see Section 4), a non-performance claim raised after the 30-day window in Section 4 has closed, ad account suspensions or bans by any third-party platform, platform outages, policy or algorithm changes, ad spend or budget decisions made in good faith, or delays caused by the Client (see Section 5).`,
          `Where a cap on liability is required under applicable law for a claim permitted under this Section, AheadTech360's total liability is limited to the amount actually paid by Client for that specific engagement in the **1 month** preceding the claim.`,
          `In no event is AheadTech360 liable for indirect, incidental, consequential, special, or punitive damages, including lost profits, lost revenue, or reputational harm, regardless of the cause of the claim.`,
          `Client agrees to indemnify, defend, and hold harmless AheadTech360, its owners, employees, and contractors from any claim, loss, or expense (including legal fees) arising from Client's breach of these Terms, inaccurate or infringing content or instructions provided by Client, or Client's violation of law.`,
          `Any claim not covered by the 30-day refund window in Section 4 must be brought in writing within **1 year** of the date it arose, or it is permanently barred.`,
        ],
      },
    ],
  },
  {
    title: '11. Termination',
    blocks: [
      {
        type: 'ul',
        items: [
          `Either party may terminate with **30 days written notice**, unless a different notice period is stated in the signed Service Agreement.`,
          `AheadTech360 may terminate immediately, without refund, for non-payment, chargebacks, abusive conduct, or requests to perform unlawful or platform-policy-violating work.`,
          `All fees for work performed and costs already committed remain due on termination, regardless of cause.`,
        ],
      },
    ],
  },
  {
    title: '12. Dispute Resolution',
    blocks: [
      {
        type: 'ul',
        items: [
          `Any disagreement (billing, refunds, scope, performance, or otherwise) must first be raised in writing to **finance@aheadtech360.com**. We will respond within **3 business days** and work in good faith to resolve it directly.`,
          `If unresolved after **15 days** of good faith attempts, the dispute will be resolved by **binding arbitration under the American Arbitration Association (AAA) Commercial Rules, seated in Wyoming**, and both parties waive the right to a jury trial or class action.`,
          `Either party may instead bring an individual claim in small claims court if the claim qualifies under that court's jurisdictional limit.`,
          `The prevailing party in any dispute is entitled to recover its reasonable attorneys' fees and arbitration or court costs from the other party.`,
          `These Terms are governed by the laws of the State of Wyoming, USA.`,
        ],
      },
    ],
  },
  {
    title: '13. General',
    blocks: [
      {
        type: 'ul',
        items: [
          `**Changes:** We may update these Terms; the "Last Updated" date reflects the latest version. Continued engagement after changes means acceptance. Changes do not apply retroactively to an active signed Service Agreement without Client's consent.`,
          `**Force majeure:** Neither party is liable for delays caused by events outside reasonable control (natural disasters, platform-wide outages, war, government action, etc.).`,
          `**Third-party platforms:** We are not responsible for the acts, policies, or outages of platforms we integrate with (Meta, Google, Shopify, email providers, etc.).`,
          `**Severability:** If any provision is found unenforceable, the rest of these Terms remain in effect.`,
          `**Entire agreement:** These Terms plus the signed Service Agreement/proposal and our Privacy Policy make up the full agreement and supersede any prior discussions.`,
          `**Commercial relationship:** Client enters this agreement as a business in a professional or commercial capacity, not as a consumer, and acknowledges having had the opportunity to review these Terms and seek independent legal counsel before engaging AheadTech360.`,
        ],
      },
    ],
  },
]

// Renders **bold** segments inside an otherwise plain string.
function parseBold(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} style={{ color: '#1C2A42', fontWeight: 700 }}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

const bodyStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#6E8098',
  lineHeight: 1.8,
  fontFamily: 'var(--font-jakarta)',
}

const listStyle: React.CSSProperties = { paddingLeft: '20px', margin: '0 0 12px' }
const itemStyle: React.CSSProperties = { ...bodyStyle, marginBottom: '8px' }

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'p') {
          return (
            <p key={i} style={{ ...bodyStyle, margin: '0 0 12px' }}>
              {parseBold(block.text)}
            </p>
          )
        }
        if (block.type === 'ol') {
          return (
            <ol key={i} style={listStyle}>
              {block.items.map((item, j) => (
                <li key={j} style={itemStyle}>{parseBold(item)}</li>
              ))}
            </ol>
          )
        }
        return (
          <ul key={i} style={listStyle}>
            {block.items.map((item, j) => (
              <li key={j} style={itemStyle}>{parseBold(item)}</li>
            ))}
          </ul>
        )
      })}
    </>
  )
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', color: '#fff', padding: '88px 32px 60px', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg,rgba(16,25,45,.72),rgba(16,25,45,.4) 70%,rgba(16,25,45,.2))' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', fontSize: '11px', fontWeight: 800, letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-jetbrains)', color: '#8ff0c0' }}>Legal</div>
          <h1 style={{ fontFamily: 'var(--font-bricolage)', fontWeight: 800, lineHeight: 1.1, fontSize: 'clamp(38px,5.5vw,58px)', color: '#fff', marginBottom: '12px', letterSpacing: '-0.3px' }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ fontSize: '15px', color: '#e6edf9', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'var(--font-jakarta)' }}>
            The terms that govern every engagement, invoice, and conversation with AheadTech360.
          </p>
          <p style={{ fontSize: '12px', color: '#9fb2d6', marginTop: '10px', fontFamily: 'var(--font-jakarta)' }}>
            AheadTech360 LLC &middot; Effective {EFFECTIVE_DATE} &middot; Last updated {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 32px 80px' }} className="terms-container">

          {/* Intro box */}
          <div style={{ background: '#EEF2F9', border: '1px solid #DFE5ED', borderRadius: '12px', padding: '20px 24px', marginBottom: '40px' }}>
            <p style={{ ...bodyStyle, color: '#3E5068', margin: '0 0 10px' }}>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern all services, proposals, invoices, and
              communications between <strong style={{ color: '#1C2A42' }}>AheadTech360 LLC</strong>{' '}
              (&ldquo;AheadTech360,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) and any client engaging
              our services (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; &ldquo;your&rdquo;), and your use of{' '}
              <a href="https://www.aheadtech360.com" style={{ color: '#213D79', fontWeight: 600 }}>www.aheadtech360.com</a>{' '}
              (the &ldquo;Site&rdquo;).
            </p>
            <p style={{ ...bodyStyle, color: '#3E5068', margin: 0 }}>
              By signing a proposal, paying an invoice, or otherwise engaging AheadTech360, you agree to these Terms.
              Where a signed Service Agreement or Statement of Work exists, that document governs scope and
              deliverables. These Terms govern payment, refunds, disputes, communication, and everything else not
              spelled out there.
            </p>
          </div>

          {/* Sections */}
          {SECTIONS.map((section, i) => (
            <div key={i} style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: '1px solid #DFE5ED' }}>
              <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '18px', fontWeight: 800, color: '#080E1C', marginBottom: '12px' }}>
                {section.title}
              </h2>
              <Blocks blocks={section.blocks} />
            </div>
          ))}

          {/* 14. Contact */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: '18px', fontWeight: 800, color: '#080E1C', marginBottom: '12px' }}>
              14. Contact
            </h2>
            <div style={{ background: '#EDFBF3', border: '1px solid rgba(37,180,114,.2)', borderRadius: '12px', padding: '20px 24px' }}>
              <p style={{ ...bodyStyle, color: '#1C2A42', fontWeight: 700, margin: '0 0 6px' }}>AheadTech360 LLC</p>
              <p style={{ ...bodyStyle, margin: 0 }}>30 N Gould St, STE N</p>
              <p style={{ ...bodyStyle, margin: '0 0 10px' }}>Sheridan, WY 82801</p>
              <p style={{ ...bodyStyle, margin: 0 }}>
                General:{' '}
                <a href="mailto:info@aheadtech360.com" style={{ color: '#1C8F5A', fontWeight: 700 }}>info@aheadtech360.com</a>
              </p>
              <p style={{ ...bodyStyle, margin: 0 }}>
                Billing, refunds &amp; disputes:{' '}
                <a href="mailto:finance@aheadtech360.com" style={{ color: '#1C8F5A', fontWeight: 700 }}>finance@aheadtech360.com</a>
              </p>
              <p style={{ ...bodyStyle, margin: 0 }}>
                <a href="https://www.aheadtech360.com" style={{ color: '#1C8F5A', fontWeight: 700 }}>www.aheadtech360.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ position: 'relative', padding: '74px 32px', color: '#fff', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(135deg,#1b356e 0%,#16294F 60%,#101f3d 100%)' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'rgba(16,25,45,.35)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-bricolage)', fontSize: 'clamp(1.55rem,3.2vw,2.3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.13 }}>
            Tell us about your store. We will tell you what we see.
          </h2>
          <div style={{ marginTop: '24px' }}>
            <Link href="/apply" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-bricolage)', fontWeight: 700, fontSize: '1rem', padding: '.82rem 1.55rem', borderRadius: '12px', background: '#25B472', color: '#05261a', textDecoration: 'none' }}>
              Talk to Us
            </Link>
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
