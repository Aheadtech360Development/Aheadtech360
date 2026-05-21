// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type ProseBlock =
  | { type: 'p';  text: string }          // **word** → <strong>
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }       // **word** → <strong>

export interface ServicePageData {
  slug:  string
  title: string

  hero: {
    tags:        string[]
    heading:     string   // [em]...[/em] → green italic
    description: string
    ctaPrimary:  string
    ctaSecondary?: string
    checklist:   string[]
    stats:       { value: string; label: string }[]
  }

  truth: {
    tag:        string
    heading:    string   // [em]...[/em]
    subheading: string
    bad:  { label: string; heading: string; items: string[] }
    good: { label: string; heading: string; items: string[] }
  }

  prose: {
    heading: string
    blocks:  ProseBlock[]
    related: { text: string; href: string }[]
  }

  deliverables: {
    tag:     string
    heading: string   // [em]...[/em]
    items:   { icon: string; title: string; desc: string; highlight?: boolean }[]
  }

  faq: {
    badge:   string
    tag:     string
    heading: string   // [em]...[/em]
    items:   { q: string; a: string }[]
  }

  testimonials: {
    tag:     string
    heading: string   // [em]...[/em]
    items:   { quote: string; bold?: string; name: string; role: string; initials: string }[]
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared: Pricing (same on every service page)
// ─────────────────────────────────────────────────────────────────────────────

export const PRICING_TIERS = [
  {
    tag:         'ONE-OFF PROJECT',
    price:       'From $1,499',
    perMonth:    false,
    description: 'For audits, builds, wireframes, and scoped projects with a clear endpoint.',
    features:    ['Fixed scope, fixed price', 'Single deliverable focus', 'Defined timeline', '30-day post-delivery fixes', 'No ongoing commitment'],
    cta:         'Get a Quote →',
    href:        '/contact',
    popular:     false,
  },
  {
    tag:         'MONTHLY RETAINER',
    price:       'From $2,999',
    perMonth:    true,
    description: 'For ongoing performance work — ads, SEO, email, social, content production.',
    features:    ['Senior team on your account', 'Weekly + monthly reporting', 'Continuous optimization', '90-day initial commit', 'Month-to-month after that', 'Strategic calls included'],
    cta:         'Book a Call →',
    href:        '/contact',
    popular:     true,
  },
  {
    tag:         'FULL-STACK PARTNERSHIP',
    price:       'Custom',
    perMonth:    false,
    description: 'For brands wanting paid + organic + email + content + dev under one roof.',
    features:    ['Multiple services bundled', 'Dedicated account team', 'Discounted bundled pricing', 'Quarterly strategic reviews', 'Direct founder access', 'Priority delivery + support'],
    cta:         'Talk to Founder →',
    href:        '/contact',
    popular:     false,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Content Map  ← add/edit service content here
// ─────────────────────────────────────────────────────────────────────────────

export const SERVICE_CONTENT: Record<string, ServicePageData> = {

  // ── CONTENT PRODUCTION ────────────────────────────────────────────────────
  'content-production': {
    slug: 'content-production', title: 'Content Production',

    hero: {
      tags: ['CONTENT PRODUCTION', 'UGC', 'VIDEO'],
      heading: 'Content that [em]actually performs.[/em]',
      description: 'Photo, video, UGC, motion graphics, VSLs — produced to support paid ads, organic social, and your site. Built around what converts, not what wins design awards.',
      ctaPrimary:   'Plan Your Content →',
      ctaSecondary: 'See Portfolio',
      checklist: [
        'UGC creator sourcing + briefing',
        'Video editing for ads, organic, and VSLs',
        'Product photography (in-house or sourced)',
        'Motion graphics + animated ads',
        'Voiceovers + captions',
        'Multi-format delivery (1:1, 9:16, 16:9)',
        'Performance-first creative briefs',
      ],
      stats: [
        { value: '10+',   label: 'UGC CREATORS' },
        { value: '7d',    label: 'TURNAROUND'   },
        { value: 'Multi', label: 'FORMAT'       },
      ],
    },

    truth: {
      tag:        'THE HARD TRUTH',
      heading:    'Beautiful content that [em]doesn\'t convert is decoration.[/em]',
      subheading: 'Production value matters. Performance matters more.',
      bad: {
        label:   '✗  TYPICAL PRODUCTION',
        heading: 'What you usually get',
        items: [
          'Polished, commercial-style video — fails on TikTok',
          'Stock-looking product shots that read as cold',
          'Producer with no marketing context',
          'No A/B variants — one final version',
          'Slow turnaround (3+ weeks)',
          'Disconnected from ad strategy',
        ],
      },
      good: {
        label:   '✓  THE AT360 WAY',
        heading: 'Performance-first content',
        items: [
          'UGC-style native content for Meta + TikTok',
          'Product shots that feel like the brand',
          'Briefs written by the people running your ads',
          'Multiple cuts + variants for testing',
          '7-day turnaround on most assets',
          'Built to feed paid ads, social, email, and site',
        ],
      },
    },

    prose: {
      heading: 'Content Production for Brands That Run Ads',
      blocks: [
        { type: 'p', text: 'Most production studios optimize for the final cut looking beautiful. We optimize for it **converting**. Different goal, different process, different output.' },
        { type: 'p', text: 'We produce content for **paid ads** (Meta, Google, TikTok), organic social, video sales letters (VSLs), product pages, and email campaigns. Every brief starts with a media buyer or strategist — not just a videographer — so the content is built around how it\'ll be used, not just how it looks.' },
        { type: 'h3', text: 'What We Produce' },
        { type: 'ul', items: [
          '**UGC content** — native creator-style video and photo. Best for Meta + TikTok ads.',
          '**Video sales letters (VSLs)** — long-form direct-response video for landing pages.',
          '**Motion graphics + animated ads** — explainer-style for B2B, SaaS, and complex products.',
          '**Product photography** — clean studio shots + lifestyle/in-context.',
          '**Reels + short-form video** — optimized for vertical (9:16) and IG/TikTok formats.',
          '**Long-form YouTube content** — for brands building YouTube as a channel.',
        ]},
        { type: 'h3', text: 'Our Process' },
        { type: 'p', text: 'Brief → script (if needed) → creator sourcing or studio plan → shoot → multiple cuts → review → final delivery in all required formats. Most projects deliver in **7–14 days** depending on complexity. UGC turnaround is fastest (7 days) because creators shoot from home with their own gear.' },
        { type: 'h3', text: 'Why Performance-First Creative Matters' },
        { type: 'p', text: 'A creative that scores high on production value but bombs in CPM and CTR is a loss. We measure success by **ad-account performance**, not by how shiny the final file looks. That\'s why our briefs come from media buyers who know what\'s working in the account right now.' },
      ],
      related: [
        { text: 'Paid Ads',      href: '/services/meta-ads'     },
        { text: 'Social Media',  href: '/services/social-media'  },
        { text: 'Web Dev + CRO', href: '/services/web-design'    },
      ],
    },

    deliverables: {
      tag:     'EXACTLY WHAT YOU GET',
      heading: 'Production deliverables [em]built for performance.[/em]',
      items: [
        { icon: '🎥', title: 'UGC Creator Content',       desc: 'Sourced creators, brief, multiple takes. Native-feel video for ads + organic. 7-day turnaround.' },
        { icon: '📺', title: 'Video Sales Letters (VSL)',  desc: 'Script + production + editing for long-form landing page video. Built on a direct-response framework.', highlight: true },
        { icon: '📷', title: 'Product Photography',        desc: 'Clean studio shots + lifestyle/in-context shots. Multiple angles, white background + branded.' },
        { icon: '✨', title: 'Motion Graphics + Animation',desc: 'Animated explainers, kinetic typography, branded motion ads. Perfect for B2B + SaaS.' },
        { icon: '✂️', title: 'Multi-Format Cuts',          desc: 'Every video delivered in 1:1, 9:16, and 16:9. Plus 15-sec, 30-sec, and 60-sec variants.' },
        { icon: '📋', title: 'Performance-First Briefs',   desc: 'Briefs written by media buyers + strategists. Content built to test, not just to look good.' },
      ],
    },

    faq: {
      badge:   'FAQ — CONTENT PRODUCTION',
      tag:     'COMMON QUESTIONS',
      heading: 'Production questions [em]founders ask us.[/em]',
      items: [
        { q: 'Do you film locally or remotely?',       a: 'Both. In-studio shoots in Karachi. UGC and creator content remotely worldwide. Whatever fits the brief and budget.' },
        { q: 'What\'s the turnaround?',                a: 'UGC: 7 days. Edited videos from your footage: 5–7 days. Motion graphics: 10–14 days. Product photo: 7–10 days. VSL with script: 3–4 weeks.' },
        { q: 'Do you write the scripts?',              a: 'Yes — direct-response copywriters on the team. Especially for VSLs and ad creative, the script is the bottleneck. We don\'t outsource it.' },
        { q: 'Can you work with my existing footage?', a: 'Yes. Sending us a Dropbox of footage and getting cut + edited ads back is one of our most common workflows.' },
        { q: 'Do you do podcasts or long-form YouTube?',a: 'Yes — editing existing podcast or YouTube footage, plus repurposing into short-form social content.' },
        { q: 'What\'s the pricing structure?',         a: 'Per-project for one-off shoots. Monthly retainer for ongoing UGC + ad creative (typically 8–12 assets/month).' },
      ],
    },

    testimonials: {
      tag:     'FROM FOUNDERS WE WORK WITH',
      heading: 'What clients [em]actually say.[/em]',
      items: [
        { quote: 'Their UGC pipeline is legit. ', bold: '10 creators sourced, briefed, and shipped in 12 days.', name: 'TrashedPunk', role: 'Streetwear Founder', initials: 'TP' },
        { quote: 'AT360 didn\'t just run our ads — they rebuilt our creative from scratch. ', bold: 'First UGC batch dropped CPM by 40%.', name: 'M. Asad', role: 'Founder, Maniyas', initials: 'MA' },
        { quote: 'Sent them raw phone footage. Got back ', bold: '6 cut-down ad variants, all formatted for Meta and TikTok, in 5 days.', name: 'Jason M.', role: 'Lofty Creations · UK', initials: 'JM' },
      ],
    },
  },

  // ── META ADS ───────────────────────────────────────────────────────────────
  'meta-ads': {
    slug:  'meta-ads',
    title: 'Meta Ads',

    hero: {
      tags:        ['META', 'GOOGLE', 'TIKTOK ADS'],
      heading:     'Paid ads that [em]actually pay you back.[/em]',
      description: 'Most agencies optimize for activity — clicks, impressions, "engagement." We optimize for the only number that matters: revenue per dollar spent. Audit-first, senior buyer on every account, no junior interns running your budget.',
      ctaPrimary:  'Get My Free Ads Audit →',
      ctaSecondary:'See Client Results',
      checklist: [
        'Full ad account audit + competitor research',
        'Pixel + CAPI setup with high match quality',
        'Angle-first creative testing (6 angles)',
        'Campaign structure rebuild (CBO + Advantage+)',
        'Weekly optimization + ad copy refreshes',
        'Native reporting + custom client reports',
        'Bi-weekly strategy calls with your media buyer',
      ],
      stats: [
        { value: '7.05x', label: 'Best ROAS'  },
        { value: '6.94x', label: '10-mo avg'  },
        { value: '75+',   label: 'Brands'     },
      ],
    },

    truth: {
      tag:        'THE HARD TRUTH',
      heading:    'Most agencies make you [em]worse[/em] at ads.',
      subheading: 'They optimize for activity, not outcomes. We don\'t. Here\'s the difference.',
      bad: {
        label:   '✗  OTHER AGENCIES',
        heading: 'What "ads management" usually looks like',
        items: [
          'Set up a campaign and hope it works',
          'Junior strategist runs your account part-time',
          '"Reporting" = a screenshot from Ads Manager',
          'Creative is one image with the logo slapped on',
          'Tracking is broken and nobody mentions it',
          'You ask "what changed this week?" — no answer',
          'Locked into 6-month contracts with no results',
        ],
      },
      good: {
        label:   '✓  THE AT360 WAY',
        heading: 'How performance media buying should work',
        items: [
          'Audit-first → strategy doc → then execution',
          'Senior media buyer assigned to your account',
          'Clear, repeatable monthly reporting',
          'UGC + static + video tested in parallel',
          'Pixel + CAPI rebuilt for accurate attribution',
          'Weekly walkthrough of every change we made',
          'Month-to-month after 90 days — earn the renewal',
        ],
      },
    },

    prose: {
      heading: 'Performance Marketing Without the Agency BS',
      blocks: [
        { type: 'p',  text: 'If you\'re spending money on **Meta Ads**, **Google Ads**, or **TikTok Ads** and you can\'t tell us — to the dollar — how much revenue each campaign drove last month, you don\'t have an ads agency. You have an expensive screenshot generator. At **AheadTech360**, paid advertising means one thing: every dollar in must produce more dollars out. Predictably. At scale.' },
        { type: 'p',  text: 'We manage paid media for ecommerce brands, education clients, B2B service businesses, and local lead-gen across the US, UK, UAE, and Pakistan. Platforms we actually run on: **Meta (Facebook + Instagram)**, **Google Search & Performance Max**, **TikTok Ads Manager**, **YouTube**, and **LinkedIn** when the buyer journey calls for it.' },
        { type: 'h3', text: 'Who This Is For' },
        { type: 'p',  text: 'Best fit: businesses doing **$10K–$500K/month in revenue** who want to scale profitably without burning runway. Founders who care about unit economics, who understand that CAC and LTV are the metrics that matter, and who want a real strategist — not a campaign manager juggling 40 accounts.' },
        { type: 'p',  text: 'Not a fit: founders who want $500/month + a 10× ROAS in 30 days, who change strategy weekly based on Twitter advice, or who treat the agency as an order-taker.' },
        { type: 'h3', text: 'Our Process' },
        { type: 'p',  text: 'Every engagement starts with a **free ads audit** where we tear into your existing ad account and show you what\'s broken — tracking, structure, creative, audiences, or bidding. If we don\'t think we can move the needle, we say so. If we can, here\'s what follows:' },
        { type: 'ul', items: [
          '**Week 1 — Foundations:** Pixel + CAPI audit, conversion tracking rebuild, competitor research, customer interviews, offer/positioning review. We also flag CRO issues on your landing pages because broken pages kill ROAS faster than bad ads.',
          '**Week 2 — Strategy:** Account structure plan, creative angle ideation (6-angle framework: Pain, Mechanism, Identity, Authority, Social Proof, Urgency), creative brief, and a 90-day media plan with budget allocation.',
          '**Weeks 3–4 — Build & Launch:** Campaigns built, creative produced (UGC + static + motion), launched with clean testing structure — one variable at a time.',
          '**Ongoing — Optimize & Scale:** Weekly creative refresh, bid + audience optimization, monthly strategy reviews. ROAS targets reviewed against blended CAC.',
        ]},
        { type: 'h3', text: 'What Makes Our Approach Different' },
        { type: 'p',  text: 'Our creative testing isn\'t "make 10 ads and pick the best one." It\'s an **angle-first framework** — identify the customer\'s underlying pain, build messaging around 6 distinct emotional angles, then produce 3 creatives per angle. You learn what your market actually responds to, not what looks good in a meeting. Combined with weekly Loom video walkthroughs of every change we make, you stay in the loop instead of getting a 30-page PDF nobody reads.' },
        { type: 'h3', text: 'Reporting You Can Actually Use' },
        { type: 'p',  text: 'You get native reporting from Meta and Google Ads Manager plus a clean monthly client report covering: blended ROAS, CAC, revenue by campaign, creative-level performance, and what we\'re testing next. We focus on revenue and unit economics — not vanity metrics. We also send a weekly **Loom video** walking through what changed and why.' },
      ],
      related: [
        { text: 'SEO & Organic Growth',     href: '/services/seo'             },
        { text: 'Email Marketing',          href: '/services/email-marketing'  },
        { text: 'CRO & Web Development',    href: '/services/cro'             },
        { text: 'See Our Portfolio',        href: '/results'                   },
      ],
    },

    deliverables: {
      tag:     'EXACTLY WHAT YOU GET',
      heading: 'No vague promises. [em]Real deliverables.[/em]',
      items: [
        { icon: '🔍', title: 'Full Account Audit (Week 1)',  desc: 'Tracking health, account structure, creative analysis, audience overlap, and full diagnostic report.' },
        { icon: '📊', title: 'Clean Monthly Reporting',     desc: 'Native Meta + Google reports plus a structured monthly performance brief — revenue, CAC, creative wins.', highlight: true },
        { icon: '🎬', title: 'Creative Production',         desc: 'UGC creators, motion graphics, static ads. Included in Growth + Scale packages.' },
        { icon: '🎯', title: 'Angle-First Testing',         desc: '6 messaging angles tested in parallel. Winners scaled, losers killed within 7 days.' },
        { icon: '📞', title: 'Bi-Weekly Strategy Calls',    desc: '30-min calls with your senior media buyer + weekly Loom walkthroughs of every change.' },
        { icon: '⚡', title: 'Pixel + CAPI Rebuild',        desc: 'Server-side tracking, deduplication, and proper event hierarchy for accurate attribution.' },
      ],
    },

    faq: {
      badge:   'FAQ — PAID ADS',
      tag:     'COMMON QUESTIONS',
      heading: 'Things people ask [em]before signing up.[/em]',
      items: [
        { q: 'How much should I spend on ads to work with you?', a: 'Minimum recommendation is $5,000/month on ad spend. Below that, fees eat too much of the budget and there isn\'t enough data volume to optimize.' },
        { q: 'Do you take a percentage of ad spend?',           a: 'No. Flat monthly retainer. Our incentive is your results, not your spend. Bigger spend doesn\'t mean a bigger fee with us.' },
        { q: 'How long until I see results?',                   a: 'Tracking + audit fixes happen in week 1. New campaign launch in week 3. First real ROAS signal around day 30. Optimization compounds month over month.' },
        { q: 'What if my creative sucks? Do you make ads?',     a: 'Yes. UGC creators, motion graphics, static ads — all included in Growth + Scale packages. Starter includes 2 creative refreshes/month.' },
        { q: 'Can I cancel anytime?',                           a: '90-day initial commitment (needed to set up tracking + run real tests). After that, month-to-month. No year-long lock-ins.' },
        { q: 'Will I work with a senior or junior buyer?',      a: 'Senior buyer assigned from day 1. Iqrar (COO) reviews every account monthly. No interns running your ads.' },
      ],
    },

    testimonials: {
      tag:     'FROM FOUNDERS WE WORK WITH',
      heading: 'What clients [em]actually say.[/em]',
      items: [
        { quote: 'We had three agencies before AT360. Each one told us our ads were "doing fine." AT360 did the audit fast and showed us exactly what was broken.', bold: 'Fixed in week 1. ROAS doubled in month 2.', name: 'Artaboon Shah',  role: 'Founder, Piplytics Capital', initials: 'AS' },
        { quote: 'The angle-first creative system is the real deal. I used to throw 20 ads at the wall and pray. Now I know which angle works for which audience.',  bold: 'CPM down. CTR up.',                                                    name: 'Jason M.',       role: 'Owner, Lofty Creations (UK)', initials: 'JM' },
        { quote: 'Weekly Loom videos changed everything. Other agencies sent PDFs nobody read.',                                                                     bold: 'AT360 walks me through every change. I actually understand my account now.', name: 'Maaz K.', role: 'Founder, Driply',             initials: 'MK' },
      ],
    },
  },

  // ── SEO ────────────────────────────────────────────────────────────────────
  'seo': {
    slug:  'seo',
    title: 'SEO & Organic Growth',

    hero: {
      tags:        ['SEO', 'ORGANIC GROWTH', 'CONTENT'],
      heading:     'Traffic that compounds [em]even when ads pause.[/em]',
      description: 'SEO done right is the most defensible growth channel you\'ll ever own. We build content + technical + link systems that turn your site into a compounding asset — not a money pit waiting for the next Google update.',
      ctaPrimary:  'Get My Free SEO Audit →',
      ctaSecondary:'See Client Results',
      checklist: [
        'Full technical SEO audit (crawl, speed, schema)',
        'Keyword research mapped to buyer intent',
        'On-page optimization (titles, meta, internal links)',
        'Content strategy + production calendar',
        'White-hat link building from real publications',
        'Local SEO (GBP, citations) where relevant',
        'Monthly ranking + traffic + revenue report',
      ],
      stats: [
        { value: '2.4x', label: 'AVG TRAFFIC LIFT' },
        { value: '6 mo', label: 'FIRST CLEAR WIN'  },
        { value: '75+',  label: 'BRANDS'            },
      ],
    },

    truth: {
      tag:        'THE HARD TRUTH',
      heading:    'Most SEO agencies sell you [em]activity, not rankings.[/em]',
      subheading: '"We wrote 8 blog posts this month" isn\'t a result. Revenue from organic search is.',
      bad: {
        label:   '✗  OTHER SEO AGENCIES',
        heading: 'What you typically get',
        items: [
          'Generic content nobody searches for',
          'PBN/private blog network links (Google penalties)',
          'Keyword stuffing that reads like a robot wrote it',
          'Reports showing "keywords up" but no revenue',
          'No technical fixes — just content for content\'s sake',
          '12-month contracts before you see anything',
        ],
      },
      good: {
        label:   '✓  THE AT360 WAY',
        heading: 'How real SEO works in 2026',
        items: [
          'Content mapped to buyer intent, not search volume alone',
          'Real editorial links from real publications',
          'Copy written for humans first, search engines second',
          'Reports track revenue from organic, not just traffic',
          'Technical foundations fixed before content even starts',
          '6-month commitment — earn renewal with results',
        ],
      },
    },

    prose: {
      heading: 'SEO Services Built for Compounding Revenue',
      blocks: [
        { type: 'p',  text: 'The thing nobody tells you about search engine optimization is that 90% of agencies still operate like it\'s 2015. They sell you 4 blog posts and 10 directory submissions, then send you a screenshot of a keyword that moved up two positions. That\'s not SEO — that\'s busywork.' },
        { type: 'p',  text: 'Real SEO in 2026 means three things working together: a technically sound site that Google can crawl and trust, content that matches real buyer intent at each funnel stage, and authority signals (links, mentions, citations) from sources Google actually respects.' },
        { type: 'h3', text: 'Who SEO Works For' },
        { type: 'p',  text: 'SEO works best for businesses where (a) people actually search for what you sell, (b) you can wait 4–6 months for compounding to kick in, and (c) the lifetime value of a customer justifies the upfront content investment. **E-commerce, SaaS, education, professional services, and local businesses** with real search demand.' },
        { type: 'p',  text: 'SEO doesn\'t work well for: brand-new product categories nobody is searching for yet (you need paid ads + content marketing instead), or businesses with $0 margin on the first sale and no LTV.' },
        { type: 'h3', text: 'Our SEO Process' },
        { type: 'ul', items: [
          '**Month 1 — Technical foundation:** Full crawl audit, Core Web Vitals fixes, schema markup, internal linking architecture, indexation cleanup. Without this, content won\'t rank no matter how good it is.',
          '**Month 1–2 — Keyword + content strategy:** Research keywords by buyer intent (informational, commercial, transactional). Map each to a page. Build a 6-month content calendar with priorities.',
          '**Month 2+ — Content production + on-page:** 4–8 high-quality articles/pages per month written by writers who understand your niche. Every existing page audited and optimized.',
          '**Month 3+ — Authority building:** Editorial outreach to real publications. Digital PR. Guest contributions. Resource page placements. No PBNs, no spam.',
          '**Ongoing — Measure & iterate:** Monthly report shows rankings, traffic, conversions, and revenue from organic. We adjust based on what\'s actually moving the needle.',
        ]},
        { type: 'h3', text: 'What Makes Our SEO Different' },
        { type: 'p',  text: 'One: we treat SEO as a revenue channel, not a vanity-metric channel. The monthly report shows what organic traffic is doing for your business — **leads, sales, revenue** — not just keyword positions. Two: we don\'t separate technical SEO, content, and links. They\'re one system. Three: every piece of content is written by a real person who understands your customer and your product. No AI-mass-produced articles that read like wallpaper.' },
        { type: 'h3', text: 'Local SEO' },
        { type: 'p',  text: 'If you serve local customers, we run a parallel local SEO track: **Google Business Profile optimization**, citation cleanup across NAP directories, local content, review acquisition systems, and proximity-based on-page work. This is what gets you into the Map Pack.' },
      ],
      related: [
        { text: 'Paid Ads',       href: '/services/meta-ads' },
        { text: 'CRO & Web Dev',  href: '/services/cro'      },
        { text: 'Email Marketing',href: '/services/email-marketing' },
      ],
    },

    deliverables: {
      tag:     'EXACTLY WHAT YOU GET',
      heading: 'SEO deliverables [em]that move revenue.[/em]',
      items: [
        { icon: '🔧', title: 'Technical Audit + Fixes',    desc: 'Crawl errors, Core Web Vitals, schema markup, indexation, internal linking — all fixed before content goes live.' },
        { icon: '📄', title: 'Content Production',         desc: '4–8 long-form articles/pages per month, written by humans who understand your niche.', highlight: true },
        { icon: '🔗', title: 'White-Hat Link Building',    desc: 'Real editorial placements, digital PR, and resource page links. No PBNs, no spam.' },
        { icon: '🎯', title: 'Keyword + Intent Map',       desc: 'Every commercial + informational keyword mapped to a page. No cannibalization, no gaps.' },
        { icon: '📍', title: 'Local SEO (Optional)',       desc: 'GBP optimization, citations, review systems, local content — for service area businesses.' },
        { icon: '📊', title: 'Monthly Revenue Report',     desc: 'Rankings + organic traffic + leads + revenue. We show what SEO is doing, not just keyword charts.' },
      ],
    },

    faq: {
      badge:   'FAQ — SEO',
      tag:     'COMMON QUESTIONS',
      heading: 'SEO questions [em]founders ask us.[/em]',
      items: [
        { q: 'How long until SEO actually works?',    a: 'Technical fixes show within 30–60 days. Content needs 4–6 months to start compounding. Real revenue from SEO usually hits month 6–9. Anyone promising faster is lying.' },
        { q: 'Do you use AI to write the content?',   a: 'AI is used for research and outlines. Final writing is done by humans because Google\'s helpful content guidelines and ranking systems heavily penalize AI-mass-produced content.' },
        { q: 'What if my site is brand new?',         a: 'New sites take longer (8–12 months for real traction). We usually pair new-site SEO with paid ads so you don\'t bleed cash waiting.' },
        { q: 'Do you guarantee #1 rankings?',         a: 'Anyone who guarantees specific rankings is either lying or about to break Google\'s terms. We guarantee process and effort, not Google\'s algorithm.' },
        { q: 'What\'s the minimum commitment?',       a: '6 months. SEO doesn\'t work on shorter timelines. If you can\'t commit 6 months, run paid ads instead — same budget, faster signal.' },
        { q: 'Do you work in non-English markets?',   a: 'Yes — Urdu, Arabic, and Spanish markets specifically. Each requires native writers and different keyword research methodology.' },
      ],
    },

    testimonials: {
      tag:     'FROM FOUNDERS WE WORK WITH',
      heading: 'What clients [em]actually say.[/em]',
      items: [
        { quote: 'AT360 fixed our technical SEO in month 1 — crawl errors dropped from 847 to 12. By month 4, organic traffic had doubled.', bold: 'By month 7 it was our #1 revenue channel.', name: 'Sarah K.',  role: 'Founder, HomeDecorPro',   initials: 'SK' },
        { quote: 'Every other agency sent us keyword reports. AT360 sent us a revenue report.',                                               bold: 'Organic went from $0 to $18K/month in 8 months.',              name: 'Ahmed R.', role: 'Founder, DesignHouse PK', initials: 'AR' },
        { quote: 'The content they produced is genuinely the best in our niche.',                                                            bold: 'Not AI fluff. Real articles that actually rank and convert.',   name: 'Liam T.',  role: 'CEO, TechStack Blog',     initials: 'LT' },
      ],
    },
  },

  // ── APP DEVELOPMENT ───────────────────────────────────────────────────────
  'app-dev': {
    slug: 'app-dev', title: 'Mobile App Development',

    hero: {
      tags: ['MOBILE APP DEVELOPMENT', 'iOS', 'ANDROID'],
      heading: 'iOS + Android apps that [em]ship and scale.[/em]',
      description: 'Native and cross-platform mobile apps for ecommerce, lifestyle, AI tools, and service businesses. From MVP to v1 launch to App Store submission — handled end-to-end.',
      ctaPrimary:   'Scope Your App →',
      ctaSecondary: 'See Portfolio',
      checklist: [
        'UX wireframes + product flow design',
        'Native (Swift + Kotlin) or React Native',
        'Backend + API integrations',
        'Authentication, payments, push notifications',
        'App Store + Google Play submission',
        'Analytics + crash reporting',
        'Post-launch support + iteration',
      ],
      stats: [
        { value: 'iOS',   label: '+ ANDROID' },
        { value: '12 wk', label: 'MVP AVG'   },
        { value: 'Live',  label: 'APP STORE'  },
      ],
    },

    truth: {
      tag:        'THE HARD TRUTH',
      heading:    'Most apps [em]die in the App Store.[/em]',
      subheading: 'Built without product strategy, launched without distribution, ignored after launch.',
      bad: {
        label:   '✗  TYPICAL APP PROJECTS',
        heading: 'Why most apps fail',
        items: [
          'Built every feature on the founder\'s wishlist',
          'No real users tested before launch',
          'App Store listing is an afterthought',
          'Backend can\'t scale beyond 1,000 users',
          'No retention strategy or push notification plan',
          'Disappears once delivered — no iteration',
        ],
      },
      good: {
        label:   '✓  THE AT360 WAY',
        heading: 'Apps built to ship + grow',
        items: [
          'MVP scope ruthlessly cut to what actually matters',
          'Closed beta with real users before public launch',
          'ASO (App Store Optimization) handled before listing',
          'Backend architected for 100x scale from day one',
          'Push + retention loops planned in v1 spec',
          'Post-launch iteration retainer available',
        ],
      },
    },

    prose: {
      heading: 'Mobile App Development — iOS, Android, Cross-Platform',
      blocks: [
        { type: 'p', text: 'Mobile app development isn\'t a code problem. It\'s a product problem. The hardest part isn\'t building the app — it\'s knowing what to leave out. Every "essential feature" your team brainstorms in week one is a future maintenance bill and a friction point in user experience.' },
        { type: 'p', text: 'We build **native iOS apps** (Swift), **native Android apps** (Kotlin), and **cross-platform apps** (React Native, Flutter) — chosen based on what the product actually needs. Cross-platform when speed-to-market matters more than maximum performance. Native when the app does heavy work (camera, AR, complex animations, ML).' },
        { type: 'h3', text: 'Where We Excel' },
        { type: 'ul', items: [
          '**Ecommerce apps** — Shopify-connected mobile apps for brands with engaged repeat customers.',
          '**Lifestyle + utility apps** — fitness, productivity, scheduling, tracking.',
          '**AI-powered apps** — wrappers around GPT, Claude, image generation, etc., with proper UX and billing.',
          '**Service-based apps** — booking, scheduling, on-demand service marketplaces.',
          '**SaaS companion apps** — mobile companions for web-first SaaS products.',
        ]},
        { type: 'h3', text: 'Our Process' },
        { type: 'p', text: 'Discovery → MVP scoping (cut, cut, cut) → wireframes → product design → backend architecture → app build → beta testing → ASO + listing → App Store + Play Store submission → launch → iteration. MVP timeline: **10–14 weeks** typical.' },
        { type: 'h3', text: 'What We Won\'t Do' },
        { type: 'p', text: 'We turn down app projects that should be websites, projects with no distribution plan, and projects where the founder hasn\'t thought past the build. An app is a **3-year commitment**, not a one-time deliverable. If you\'re not ready for that, we\'ll save you the money and tell you so.' },
      ],
      related: [
        { text: 'Custom Development', href: '/services/web-design' },
        { text: 'Web Dev + CRO',      href: '/services/web-design' },
      ],
    },

    deliverables: {
      tag:     'EXACTLY WHAT YOU GET',
      heading: 'App build deliverables — [em]nothing skipped.[/em]',
      items: [
        { icon: '🎯', title: 'Product Strategy + MVP Scope', desc: 'Real scoping: what\'s in v1, what\'s in v2, what gets cut. Saves 6 months of feature creep.' },
        { icon: '📱', title: 'iOS + Android Build',          desc: 'Native or React Native — chosen based on product needs. Both stores covered.', highlight: true },
        { icon: '🔧', title: 'Backend + Auth + Payments',    desc: 'API design, authentication (email/social/SSO), Stripe/RevenueCat billing, push notification infrastructure.' },
        { icon: '🧪', title: 'Beta Testing Program',          desc: 'TestFlight + Google Play Internal Testing. Real users on real devices before public launch.' },
        { icon: '🚀', title: 'App Store Submission + ASO',    desc: 'Listing copy, screenshots, keywords. Submission handled including reviewer back-and-forth.' },
        { icon: '📊', title: 'Analytics + Crash Reporting',   desc: 'Mixpanel/Amplitude for analytics, Sentry for crashes. Live from day one.' },
      ],
    },

    faq: {
      badge:   'FAQ — MOBILE APP DEVELOPMENT',
      tag:     'COMMON QUESTIONS',
      heading: 'App questions [em]founders ask us.[/em]',
      items: [
        { q: 'Native or React Native — which is right for me?', a: 'React Native if speed-to-market matters and the app is mostly UI + API calls. Native if it does heavy work — camera, AR, real-time, complex animations, ML on device.' },
        { q: 'How long for an MVP?',                            a: '10–14 weeks for a properly scoped MVP. Anyone promising 4 weeks for a real app is either lying or building a template wrapper.' },
        { q: 'What does an MVP typically cost?',                a: 'Simple MVP (one-platform, basic features): $15K–$30K. Full MVP (iOS + Android, backend, payments): $35K–$80K. Free scoping call gets you a real number.' },
        { q: 'Do you handle App Store submission?',             a: 'Yes — listing copy, screenshots, ASO, submission, and reviewer back-and-forth until you\'re live.' },
        { q: 'What about ongoing maintenance?',                 a: 'Apps need updates: iOS/Android version compatibility, bug fixes, security patches. Monthly retainer available for ongoing support after the initial 30-day window.' },
        { q: 'Can you also do marketing for the app launch?',   a: 'Yes — bundled with our Paid Ads + ASO services. App launch marketing is its own playbook (very different from ecom or lead gen).' },
      ],
    },

    testimonials: {
      tag:     'FROM FOUNDERS WE WORK WITH',
      heading: 'What clients [em]actually say.[/em]',
      items: [
        { quote: 'AT360 scoped our MVP in week one — cut our feature list from 40 to 12. ', bold: 'Shipped in 11 weeks. App Store live in week 13.', name: 'Maaz K.', role: 'Founder, Driply (AI Fashion)', initials: 'MK' },
        { quote: 'We had a contractor ghost us at 70% done. AT360 picked it up and ', bold: 'shipped both stores in 3 weeks.', name: 'R. Ali', role: 'Founder, TechHub', initials: 'RA' },
        { quote: 'Backend they built handles 50K daily actives without issues. ', bold: 'Architected to scale from day one — not patched after the fact.', name: 'S. Khan', role: 'CEO, LuxeBags', initials: 'SK' },
      ],
    },
  },

  // ── CUSTOM DEVELOPMENT ────────────────────────────────────────────────────
  'custom-dev': {
    slug: 'custom-dev', title: 'Custom Development',

    hero: {
      tags: ['CUSTOM DEVELOPMENT', 'SHOPIFY', 'B2B'],
      heading: 'When off-the-shelf [em]doesn\'t fit.[/em]',
      description: 'Custom Shopify functions, B2B portals, gated wholesale pricing, configurators, calculators, marketplaces, internal tools — we build the systems that Shopify and WordPress can\'t do natively.',
      ctaPrimary:   'Scope Your Project →',
      ctaSecondary: 'See Portfolio',
      checklist: [
        'Custom Shopify apps (private + public)',
        'B2B wholesale portals with login-gated pricing',
        'Custom calculators + configurators',
        'Marketplaces + multi-vendor sites',
        'Internal admin tools + dashboards',
        'API integrations + automation',
        'Headless commerce builds (Next.js + Shopify)',
      ],
      stats: [
        { value: 'Custom', label: 'STACK'   },
        { value: 'B2B',    label: '+ B2C'   },
        { value: '6–12wk', label: 'TYPICAL' },
      ],
    },

    truth: {
      tag:        'THE HARD TRUTH',
      heading:    'Platforms have limits. [em]Your business shouldn\'t.[/em]',
      subheading: 'If Shopify or WordPress can\'t do it, that\'s not a reason to stop. That\'s a reason to build.',
      bad: {
        label:   '✗  HITTING PLATFORM LIMITS',
        heading: 'Where most businesses get stuck',
        items: [
          '"Shopify doesn\'t let us do this"',
          '5 different apps stacked, all conflicting',
          'Workarounds that break every update',
          'Manual processes that should be automated',
          'Apps you pay $400/month for one feature',
          'Wholesale workflows duct-taped together',
        ],
      },
      good: {
        label:   '✓  CUSTOM DEVELOPMENT',
        heading: 'Build what fits the business',
        items: [
          'Custom code that does exactly what you need',
          'One clean integration instead of 5 apps',
          'Update-proof solutions, not workarounds',
          'Automation that runs without supervision',
          'One-time build instead of monthly app fees',
          'Wholesale + retail unified in one system',
        ],
      },
    },

    prose: {
      heading: 'Custom Development for Businesses That Outgrew Their Platform',
      blocks: [
        { type: 'p', text: 'Shopify is incredible — until you need something it doesn\'t do. Then you have two options: stack 6 apps that half-work and break every update, or build it properly once. We do the second.' },
        { type: 'p', text: 'Custom development at AheadTech360 covers everything from custom Shopify apps and theme extensions, to **B2B wholesale portals** with login-gated pricing, to full headless commerce builds with Next.js. Our developers work in PHP, JavaScript, Node, React, Liquid, and Python — picked based on the project, not the developer\'s preference.' },
        { type: 'h3', text: 'What We Most Commonly Build' },
        { type: 'ul', items: [
          '**B2B portals** — login-gated pricing, bulk order grids, net terms checkout, custom catalogs, sales rep accounts.',
          '**Custom configurators** — product configurators, custom apparel builders, calculator-driven quote tools.',
          '**Shopify apps** — private apps for specific functionality, public apps for the App Store.',
          '**Marketplaces** — multi-vendor sites, commission logic, vendor onboarding flows.',
          '**Internal tools** — admin dashboards, inventory systems, custom CRM views.',
          '**API integrations** — connecting Shopify/Woo with CRMs, ERPs, shipping providers, accounting systems.',
        ]},
        { type: 'h3', text: 'Our Process' },
        { type: 'p', text: 'Discovery + scoping → technical spec + architecture → build in **2-week sprints** → QA → staged deployment → handover with documentation. Most custom projects run **6–12 weeks** depending on complexity.' },
        { type: 'h3', text: 'When Custom Doesn\'t Make Sense' },
        { type: 'p', text: 'Honestly, most businesses don\'t need custom development. If a Shopify app does 80% of what you need, we\'ll tell you. Custom is the right answer when (a) the feature is core to how your business works, (b) you\'ll use it for years, or (c) the existing apps cost more in subscriptions than the build cost.' },
      ],
      related: [
        { text: 'Web Dev + CRO',    href: '/services/web-design' },
        { text: 'App Development',  href: '/services/app-dev'    },
      ],
    },

    deliverables: {
      tag:     'EXACTLY WHAT YOU GET',
      heading: 'Custom-built systems [em]you own forever.[/em]',
      items: [
        { icon: '📋', title: 'Technical Spec + Architecture', desc: 'Written before any code. Stack chosen for fit, not familiarity. Documented for handover.' },
        { icon: '🔨', title: 'Sprint-Based Development',      desc: '2-week sprints with demos. You see progress every 2 weeks, not at the end.', highlight: true },
        { icon: '✏️', title: 'Full QA + Testing',             desc: 'Test cases written for every feature. Bugs caught before launch, not after.' },
        { icon: '📚', title: 'Documentation + Handover',      desc: 'Full technical docs so any developer can take over later. No vendor lock-in.' },
        { icon: '🚀', title: 'Staged Deployment',              desc: 'Staging environment + production deployment. Rollback plan if something breaks.' },
        { icon: '🔧', title: '30-Day Post-Launch Support',     desc: 'Bug fixes + minor tweaks included for 30 days. Ongoing support available as retainer.' },
      ],
    },

    faq: {
      badge:   'FAQ — CUSTOM DEVELOPMENT',
      tag:     'COMMON QUESTIONS',
      heading: 'Custom dev questions [em]founders ask us.[/em]',
      items: [
        { q: 'How do I know if I need custom or just an app?', a: 'Start with the cheapest viable app. Switch to custom when (a) no app fits, (b) you stack 3+ apps to fake it, or (c) monthly app fees exceed a one-time build cost.' },
        { q: 'What\'s the typical cost?',                      a: 'Small Shopify customizations: $1.5K–$5K. B2B portals: $8K–$25K. Marketplaces or complex apps: $25K–$80K+. Free scoping call to give you a real number.' },
        { q: 'Will updates break the custom code?',            a: 'Built right, no. We follow Shopify + WordPress best practices for upgrade-safe customizations. We also offer optional ongoing maintenance retainer.' },
        { q: 'Who owns the code?',                             a: 'You. Once paid, the code is yours. Repository handed over. Any future developer can take it on. No vendor lock-in.' },
        { q: 'What if I want to build a Shopify public app?',  a: 'We\'ve done it. Includes app store submission, billing API setup, multi-store support, and merchant onboarding.' },
        { q: 'Can you work with our existing dev team?',       a: 'Yes — code reviews, pair work, scoped sprints. Augmenting an existing team is one of our common engagements.' },
      ],
    },

    testimonials: {
      tag:     'FROM FOUNDERS WE WORK WITH',
      heading: 'What clients [em]actually say.[/em]',
      items: [
        { quote: 'Built our forex capital management site from a Notion doc in 3 weeks. ', bold: 'Custom JS calculator works flawlessly.', name: 'Artaboon Shah', role: 'Founder, Piplytics', initials: 'AS' },
        { quote: 'Our B2B portal with login-gated pricing was costing us $600/month in apps. AT360 built it once. ', bold: 'Paid off in 4 months.', name: 'H. Kamran', role: 'Founder, UrbanWear', initials: 'HK' },
        { quote: 'They handed over the repo with full docs. ', bold: 'Our in-house dev picked it up on day one. Zero vendor lock-in.', name: 'P. Malik', role: 'Owner, PrintHouse', initials: 'PM' },
      ],
    },
  },

  // ── CRO ────────────────────────────────────────────────────────────────────
  'cro': {
    slug: 'cro', title: 'CRO & Web Development',
    hero: { tags: ['CRO', 'WEB DESIGN', 'SHOPIFY'], heading: 'More sales from [em]the traffic you already have.[/em]', description: 'Content coming soon.', ctaPrimary: 'Get My Free CRO Audit →', checklist: ['Content coming soon'], stats: [{ value: '47%', label: 'More sales' }] },
    truth: { tag: 'THE HARD TRUTH', heading: 'Your website is [em]costing you money.[/em]', subheading: 'Coming soon.', bad: { label: '✗  OTHER AGENCIES', heading: 'What bad CRO looks like', items: ['Coming soon'] }, good: { label: '✓  THE AT360 WAY', heading: 'How real CRO works', items: ['Coming soon'] } },
    prose: { heading: 'CRO That Moves the Needle', blocks: [{ type: 'p', text: 'Content coming soon.' }], related: [] },
    deliverables: { tag: 'EXACTLY WHAT YOU GET', heading: 'No vague promises. [em]Real deliverables.[/em]', items: [{ icon: '⚡', title: 'Coming Soon', desc: 'Content coming soon.' }] },
    faq: { badge: 'FAQ — CRO', tag: 'COMMON QUESTIONS', heading: 'Things people ask [em]before signing up.[/em]', items: [{ q: 'Coming soon?', a: 'Coming soon.' }] },
    testimonials: { tag: 'FROM FOUNDERS WE WORK WITH', heading: 'What clients [em]actually say.[/em]', items: [{ quote: 'Coming soon.', name: 'Coming Soon', role: 'Founder', initials: 'CS' }] },
  },

  // ── EMAIL MARKETING ────────────────────────────────────────────────────────
  'email-marketing': {
    slug: 'email-marketing', title: 'Email & SMS Marketing',

    hero: {
      tags: ['EMAIL', 'SMS', 'KLAVIYO'],
      heading: 'Your email list is [em]leaving money on the table.[/em]',
      description: 'Most ecom brands earn 5–10% of revenue from email. The good ones earn 25–35%. We build the flows, broadcasts, and segmentation that turn your list into a recurring revenue stream — without spamming subscribers into hating you.',
      ctaPrimary:  'Get My Free Email Audit →',
      ctaSecondary: 'See Client Results',
      checklist: [
        'Klaviyo / Omnisend / Mailchimp audit + cleanup',
        'Core flows: Welcome, Abandoned Cart, Browse, Post-Purchase, Win-Back',
        'Segmentation strategy + custom segments',
        '4–8 broadcasts per month (copy + design)',
        'List growth: pop-ups, lead magnets, exit intent',
        'Deliverability fixes (SPF, DKIM, DMARC)',
        'Monthly revenue + flow performance report',
      ],
      stats: [
        { value: '22%',  label: 'AVG REVENUE LIFT' },
        { value: '8+',   label: 'CORE FLOWS'       },
        { value: '2–4wk', label: 'SETUP TIME'      },
      ],
    },

    truth: {
      tag:        'THE HARD TRUTH',
      heading:    'Most email "strategies" are [em]just blasts.[/em]',
      subheading: 'No flows. No segmentation. No deliverability. Just a Monday newsletter your subscribers ignore.',
      bad: {
        label:   '✗  TYPICAL SETUP',
        heading: 'What kills your email revenue',
        items: [
          'One newsletter blast to everyone, same content',
          'No abandoned cart flow (or it has 1 email)',
          'Welcome flow is "Hi, here\'s 10% off"',
          'Subscribers haven\'t been segmented, ever',
          'Deliverability tanked — going to spam',
          'Nobody knows what email actually earns',
        ],
      },
      good: {
        label:   '✓  THE AT360 WAY',
        heading: 'How email should actually work',
        items: [
          'Broadcasts segmented by buying behavior + engagement',
          'Multi-email abandoned cart with offer escalation',
          'Welcome flow that warms before it sells',
          'VIP, lapsed, browsers, buyers — all separately treated',
          'Domain authentication + warm-up done right',
          'Monthly report shows email-attributed revenue',
        ],
      },
    },

    prose: {
      heading: 'Email Marketing That Actually Drives Ecom Revenue',
      blocks: [
        { type: 'p', text: 'Email marketing is the **highest-margin channel in e-commerce** — but only if you do it right. The difference between a brand earning 8% from email and one earning 30% isn\'t more emails. It\'s structure: the right flows, the right segments, the right offers at the right time.' },
        { type: 'p', text: 'We build email marketing systems on **Klaviyo, Omnisend, and Mailchimp** — picking the platform that fits the size and stage of the business. Klaviyo for serious ecom (Shopify especially), Omnisend for budget-conscious starters, Mailchimp only when there\'s a specific reason.' },
        { type: 'h3', text: 'The 8 Core Flows Every Ecom Brand Needs' },
        { type: 'ul', items: [
          '**Welcome Series (3–5 emails):** First impression. Brand story, value, social proof, then an offer. Not "10% off" in email one.',
          '**Abandoned Cart (3 emails):** Reminder → social proof → offer escalation. Most brands run 1 email. Leaves 60% of recoverable revenue on the table.',
          '**Browse Abandonment:** Catches people who viewed but didn\'t add to cart. Often a higher-margin recovery than abandoned cart.',
          '**Post-Purchase (5 emails):** Thank you, order confirmation, shipping, "how to use," review request, cross-sell. Builds LTV.',
          '**Win-Back:** 60-day lapsed buyer flow with progressive discount escalation. Recovers 8–15% of dormant customers.',
          '**Welcome Pop-up Flow:** First-time visitor opt-in → entry into welcome series.',
          '**VIP Flow:** Top 10% of buyers get exclusive early access — rewards frequency, grows margin.',
          '**Sunset Flow:** Re-engagement → list cleanup to protect deliverability.',
        ]},
        { type: 'h3', text: 'Broadcasts Done Right' },
        { type: 'p', text: 'Broadcast strategy isn\'t "what\'s the offer this week." It\'s a 12-week calendar segmented by audience: engaged buyers get one cadence, browsers get another, new subscribers get another, and dormant subscribers get a re-engagement track. Copy is written by **direct-response writers**, not template-filled by interns.' },
        { type: 'h3', text: 'Deliverability — The Hidden Killer' },
        { type: 'p', text: 'If your emails are going to spam, none of this matters. Every engagement starts with a deliverability check: **SPF, DKIM, DMARC** records, sender reputation, list hygiene, engagement metrics. We fix what\'s broken before sending a single new campaign.' },
      ],
      related: [
        { text: 'Paid Ads',        href: '/services/meta-ads'   },
        { text: 'CRO + Web Dev',   href: '/services/web-design' },
        { text: 'Social Media',    href: '/services/social-media' },
      ],
    },

    deliverables: {
      tag:     'EXACTLY WHAT YOU GET',
      heading: 'Email deliverables that [em]print revenue.[/em]',
      items: [
        { icon: '🔄', title: '8 Core Flows Built',      desc: 'Welcome, Abandoned Cart, Browse, Post-Purchase, Win-Back, Pop-up, VIP, Sunset — all live in 2–4 weeks.' },
        { icon: '👥', title: 'Segmentation Strategy',   desc: 'Behavioral segments, engagement segments, RFM analysis. Right message to right person.', highlight: true },
        { icon: '📅', title: '4–8 Broadcasts / Month',  desc: 'Copy, design, scheduling. All campaigns mapped to a 12-week calendar.' },
        { icon: '📈', title: 'List Growth Systems',     desc: 'Welcome pop-ups, exit-intent, lead magnets, post-purchase opt-ins. Compounds list size monthly.' },
        { icon: '🛡️', title: 'Deliverability Fixes',   desc: 'SPF, DKIM, DMARC authentication. Inbox placement tested before sending campaigns.' },
        { icon: '📊', title: 'Monthly Revenue Report',  desc: 'Email-attributed revenue, flow performance, broadcast wins, what\'s next.' },
      ],
    },

    faq: {
      badge:   'FAQ — EMAIL MARKETING',
      tag:     'COMMON QUESTIONS',
      heading: 'Email questions [em]founders ask us.[/em]',
      items: [
        { q: 'Which platform is best — Klaviyo, Omnisend, or Mailchimp?', a: 'Klaviyo for serious Shopify ecom. Omnisend for budget-conscious or smaller lists. Mailchimp rarely — only if you\'re locked in. We help you pick based on stage.' },
        { q: 'How long until flows go live?',                              a: '2–4 weeks for a full 8-flow build, depending on your offer complexity and how many segments are needed.' },
        { q: 'What about SMS?',                                            a: 'SMS works for ecom with high AOV and engaged customers. We build SMS into abandoned cart and VIP flows. Standalone SMS broadcasts depend on your market.' },
        { q: 'My open rates are 8%. Is the list dead?',                   a: 'Probably deliverability, not the list. We audit sender reputation, authentication, and engagement before declaring a list dead.' },
        { q: 'Do you write the copy?',                                     a: 'Yes. Direct-response copywriters on the team. Copy is the highest-leverage variable in email, so we don\'t outsource it to templates.' },
        { q: 'Can you migrate from one platform to another?',             a: 'Yes — migrations from Mailchimp to Klaviyo are common. We move templates, flows, segments, and historical data.' },
      ],
    },

    testimonials: {
      tag:     'FROM FOUNDERS WE WORK WITH',
      heading: 'What clients [em]actually say.[/em]',
      items: [
        { quote: 'AT360 took our Klaviyo from 2% email revenue to 31% in three months. Welcome flow, abandoned cart, win-back — all rebuilt and tested. ', bold: '5 stars isn\'t enough.', name: 'L. Bennett', role: 'Founder, Bennett Beauty', initials: 'LB' },
        { quote: 'They fixed our deliverability in week one — emails were going to spam for months and we had no idea. ', bold: 'Revenue from email doubled in 60 days.', name: 'D. Khan', role: 'CEO, FreshCo', initials: 'DK' },
        { quote: 'Hired them for a basic Shopify audit. Got a full revenue diagnostic, CRO wireframe, and ', bold: 'an Omnisend flow blueprint that now runs on autopilot.', name: 'Jen K.', role: 'Owner, Coastal Threads', initials: 'JK' },
      ],
    },
  },

  // ── WEB DESIGN ─────────────────────────────────────────────────────────────
  'web-design': {
    slug: 'web-design', title: 'Web Development + CRO',

    hero: {
      tags: ['WEB DEVELOPMENT', 'CRO', 'SHOPIFY'],
      heading: 'Websites that [em]sell, not just look pretty.[/em]',
      description: 'Shopify, WordPress, custom builds — engineered to convert from day one. Every wireframe is CRO-backed before a line of code is written. Speed, structure, and conversion baked in.',
      ctaPrimary: 'Get My Free Site Audit →',
      ctaSecondary: 'See Portfolio',
      checklist: [
        'CRO-backed wireframe (V1 → V-final)',
        'Mobile-first responsive design',
        'Shopify, WordPress, or custom stack',
        'Speed optimization (<2s load on mobile)',
        'Analytics + conversion tracking setup',
        '30 days of post-launch fixes included',
        'Training for your team to manage content',
      ],
      stats: [
        { value: '47%',  label: 'AVG CVR LIFT' },
        { value: '<2s',  label: 'LOAD TIME'    },
        { value: '75+',  label: 'SITES BUILT'  },
      ],
    },

    truth: {
      tag:        'THE HARD TRUTH',
      heading:    'A pretty site that doesn\'t [em]convert is a brochure.[/em]',
      subheading: 'Most agencies design for awards. We design for revenue.',
      bad: {
        label:   '✗  OTHER WEB AGENCIES',
        heading: 'What you typically get',
        items: [
          'Design-first → CRO is an afterthought',
          '4 second page load on mobile',
          'No conversion tracking after launch',
          'Generic template with your logo swapped in',
          'Hands you the keys and disappears',
          'No idea what made the old site fail',
        ],
      },
      good: {
        label:   '✓  THE AT360 WAY',
        heading: 'Conversion-first development',
        items: [
          'Wireframe → CRO review → then design',
          'Sub-2-second load on mobile, every time',
          'Full tracking stack live before launch',
          'Custom built around your offer + audience',
          '30 days of post-launch fixes included',
          'Audit of the old site\'s failures, fixed in v2',
        ],
      },
    },

    prose: {
      heading: 'Website Development with CRO Built In',
      blocks: [
        { type: 'p', text: 'A website is the most over-rated and under-engineered asset in most businesses. Founders spend $10K on design and $0 thinking about conversion. The result: a beautiful page that loses 97% of visitors and nobody knows why.' },
        { type: 'p', text: 'At AheadTech360, we treat **website development** and **conversion rate optimization (CRO)** as one discipline, not two. Every wireframe starts with a question: "What does the visitor need to see, in what order, to take the action that makes us money?" Design serves that question. Code serves design. Speed serves everything.' },
        { type: 'h3', text: 'Platforms We Build On' },
        { type: 'p', text: 'We pick the platform based on what the business actually needs:' },
        { type: 'ul', items: [
          '**Shopify** — for e-commerce. App ecosystem, payments, inventory. Default choice unless there\'s a reason to go custom.',
          '**WordPress + WooCommerce** — for content-heavy sites, lead-gen, service businesses, or e-com that needs deeper customization.',
          '**Custom (Next.js, React)** — for SaaS, marketplaces, or businesses where off-the-shelf doesn\'t fit.',
          '**Webflow** — for marketing sites that need to look exceptional and stay easy to update.',
        ]},
        { type: 'h3', text: 'Our Process' },
        { type: 'p', text: 'Discovery → wireframe (3–4 iterations) → CRO review → design → development → QA → launch → post-launch CRO. Most builds take 4–8 weeks depending on complexity. Custom builds and apps take longer.' },
        { type: 'h3', text: 'CRO After Launch' },
        { type: 'p', text: 'Launching is the start, not the end. Post-launch we run a CRO loop: behavior data (heatmaps, session recordings), conversion analysis, hypothesis → test → measure. Most clients see meaningful uplift in the first 90 days post-launch from CRO iteration alone.' },
      ],
      related: [
        { text: 'Paid Ads',           href: '/services/meta-ads'       },
        { text: 'SEO',                href: '/services/seo'            },
        { text: 'Email Marketing',    href: '/services/email-marketing' },
      ],
    },

    deliverables: {
      tag:     'EXACTLY WHAT YOU GET',
      heading: 'From wireframe to [em]revenue-generating site.[/em]',
      items: [
        { icon: '📐', title: 'CRO-Backed Wireframe',    desc: 'Interactive HTML wireframes with section-by-section CRO rationale before any design happens.' },
        { icon: '🎨', title: 'Custom Design',           desc: 'Mobile-first design tailored to your brand. Not a template with your logo on it.', highlight: true },
        { icon: '⚡', title: 'Speed Optimization',      desc: 'Sub-2-second mobile load. Image optimization, lazy loading, clean code, CDN setup.' },
        { icon: '📊', title: 'Tracking Stack Setup',    desc: 'GA4, Meta Pixel + CAPI, Google Ads conversion tracking, all live and tested before launch.' },
        { icon: '🔧', title: '30-Day Post-Launch Fixes',desc: 'Bug fixes, copy tweaks, conversion adjustments — free for 30 days after going live.' },
        { icon: '🎓', title: 'Team Training',           desc: 'Recorded walkthrough so your team can add products, write posts, and update copy without us.' },
      ],
    },

    faq: {
      badge:   'FAQ — WEB DEV + CRO',
      tag:     'COMMON QUESTIONS',
      heading: 'Things people ask [em]before signing up.[/em]',
      items: [
        { q: 'How long does a Shopify build take?',                              a: 'Standard Shopify build: 4–6 weeks. Custom Shopify with complex logic (B2B portals, bundles, gated pricing): 6–10 weeks.' },
        { q: 'Do you redesign existing sites or only build new?',               a: 'Both. Redesigns include an audit of the current site\'s failures so we don\'t repeat them in v2.' },
        { q: 'What if I want a custom feature my platform doesn\'t support?',   a: 'Custom development is part of the package. We build custom apps, calculators, configurators, gated portals — anything Shopify or WordPress can\'t do natively.' },
        { q: 'Do you handle hosting?',                                           a: 'Shopify hosts itself. WordPress + custom builds — we set up managed hosting (Cloudways, WP Engine, or Vercel) and configure it. Hosting bills are paid by the client.' },
        { q: 'What\'s the payment structure?',                                   a: '100% advance for builds under $3K. Larger projects: 50% to start, 50% at launch. No surprise fees mid-project.' },
        { q: 'Can you also run ongoing CRO after launch?',                       a: 'Yes. Post-launch CRO is a retainer service — heatmap analysis, A/B tests, hypothesis → test → measure monthly.' },
      ],
    },

    testimonials: {
      tag:     'FROM FOUNDERS WE WORK WITH',
      heading: 'What clients [em]actually say.[/em]',
      items: [
        { quote: 'Built our forex capital management site from a Notion doc in 3 weeks. ', bold: 'Custom JS calculator works flawlessly.', name: 'Artaboon Shah', role: 'Founder, Piplytics', initials: 'AS' },
        { quote: 'Shopify build was pixel-perfect to the wireframe. Launched on time, no surprise charges, and', bold: ' the tracking was all live before we ran a single ad.', name: 'S. Raza', role: 'Founder, ApparelHub', initials: 'SR' },
        { quote: 'They audited our old site before touching a single line of code. ', bold: 'Found 12 conversion blockers. Fix list paid itself off in 9 days.', name: 'T. Mitchell', role: 'Owner, OutdoorCo', initials: 'TM' },
      ],
    },
  },

  // ── SOCIAL MEDIA ───────────────────────────────────────────────────────────
  'social-media': {
    slug: 'social-media', title: 'Social Media Management',

    hero: {
      tags: ['SOCIAL MEDIA', 'CONTENT', 'MANAGEMENT'],
      heading: 'Social media that [em]makes paid ads work better.[/em]',
      description: 'Organic social isn\'t going to print revenue on its own — but a dead Instagram makes every cold ad click bounce. We build the content presence that warms cold traffic, supports paid, and turns lurkers into buyers.',
      ctaPrimary:   'Get a Free Content Audit →',
      ctaSecondary: 'See Portfolio',
      checklist: [
        'Content strategy mapped to brand + audience',
        '20+ pieces/month (static + reels + carousels)',
        'Content calendar (planned a month ahead)',
        'Caption writing in your voice',
        'Community management (DMs, comments)',
        'Hashtag + posting time research',
        'Monthly engagement + follower growth report',
      ],
      stats: [
        { value: '3x',    label: 'AVG ENGAGEMENT LIFT' },
        { value: '20+',   label: 'POSTS/MONTH'         },
        { value: 'Multi', label: 'PLATFORM'            },
      ],
    },

    truth: {
      tag:        'THE HARD TRUTH',
      heading:    'Posting daily [em]isn\'t a strategy.[/em]',
      subheading: 'Most brands post for the sake of posting. That\'s not content — it\'s noise.',
      bad: {
        label:   '✗  TYPICAL SETUP',
        heading: 'What gets your account ignored',
        items: [
          'Product photo every other day, no story',
          'Captions written by an intern from a template',
          'Hashtag spam — same 30 hashtags every post',
          'Zero engagement on comments or DMs',
          'No content connection to paid ads',
          'Posting at random times based on "schedule"',
        ],
      },
      good: {
        label:   '✓  THE AT360 WAY',
        heading: 'Content with a purpose',
        items: [
          'Content mapped to brand pillars + funnel stage',
          'Captions in your voice, written by humans',
          'Hashtag research per post, not template',
          'Community managed in 24-hr response window',
          'Content reinforces what cold ads promise',
          'Posting times based on your audience data',
        ],
      },
    },

    prose: {
      heading: 'Social Media Management for Brands That Run Ads',
      blocks: [
        { type: 'p', text: 'Here\'s the truth nobody in social media marketing wants to say: **organic social rarely drives meaningful direct revenue** for most brands. But it does something else that\'s incredibly valuable — it makes your paid ads convert better.' },
        { type: 'p', text: 'When a cold visitor clicks your ad, the first thing they do is check your Instagram. If it\'s dead, sloppy, or fake-looking, they bounce. If it\'s alive, branded, and shows real customers using your product, they buy. That\'s the role of organic social in 2025: not a primary revenue channel — **a conversion enabler for everything else**.' },
        { type: 'h3', text: 'Platforms We Run' },
        { type: 'ul', items: [
          '**Instagram** — for almost every consumer brand. Where buyers actually validate before purchase.',
          '**TikTok** — when your audience skews 18–35 and you can produce native creator-style content.',
          '**Facebook** — community + older demographics + groups.',
          '**LinkedIn** — for B2B, SaaS, and professional services.',
          '**Twitter/X, YouTube Shorts, Pinterest** — as supporting channels where the audience exists.',
        ]},
        { type: 'h3', text: 'Our Approach' },
        { type: 'p', text: 'Every brand gets a content matrix built around 4–5 pillars (educational, social proof, behind-the-scenes, product, brand story). Each pillar has a posting cadence. Captions are written by humans who studied your voice. Hashtags are researched per post, not templated. Community management happens in a **24-hour response window** because Instagram\'s algorithm rewards engagement.' },
        { type: 'h3', text: 'Content for Reels' },
        { type: 'p', text: 'Short-form video is no longer optional. We produce native-style reels (not polished commercials) tested against the same angle framework we use for paid ads. **Best-performing organic reels often become paid ad creatives** — saves on UGC sourcing costs and stretches your content investment.' },
      ],
      related: [
        { text: 'Paid Ads',          href: '/services/meta-ads'        },
        { text: 'Email Marketing',   href: '/services/email-marketing'  },
        { text: 'CRO + Web Dev',     href: '/services/web-design'       },
      ],
    },

    deliverables: {
      tag:     'EXACTLY WHAT YOU GET',
      heading: 'Social media management [em]that pulls weight.[/em]',
      items: [
        { icon: '📅', title: 'Monthly Content Calendar',    desc: '20+ posts planned a month in advance across all platforms, mapped to your brand pillars.' },
        { icon: '🎨', title: 'Visual Content Production',   desc: 'Static graphics, carousels, and reels — designed in your brand voice, not template-stamped.', highlight: true },
        { icon: '✍️', title: 'Caption Writing',             desc: 'Captions written by humans, in your voice. Direct-response framework + brand storytelling.' },
        { icon: '💬', title: 'Community Management',        desc: 'DMs and comments answered within 24 hours. Spam filtered. Real conversations.' },
        { icon: '🎬', title: 'Reels Production',            desc: '4–8 reels/month produced or repurposed from existing assets. Tested for organic + paid use.' },
        { icon: '📊', title: 'Monthly Performance Report',  desc: 'Engagement, reach, follower growth, top-performing content, and what we\'re testing next.' },
      ],
    },

    faq: {
      badge:   'FAQ — SOCIAL MEDIA',
      tag:     'COMMON QUESTIONS',
      heading: 'Social media questions [em]founders ask us.[/em]',
      items: [
        { q: 'How many platforms should we be on?',       a: '2–3 max. We pick based on where your audience lives. Spreading across 5 platforms with 4 weak posts each beats nobody.' },
        { q: 'Will I get viral content?',                 a: 'Sometimes. Mostly we build consistent, on-brand presence. Viral is a bonus — not a strategy.' },
        { q: 'Do you film content or just edit ours?',    a: 'Both. We can source UGC creators, work with your existing footage, or pair with our Content Production service if you need filmed content monthly.' },
        { q: 'Will organic social drive sales directly?', a: 'For most brands, no — it supports paid ads, builds trust, and warms cold traffic. Brands relying purely on organic social for revenue usually have a long runway and a content-creator founder.' },
        { q: 'How fast will my follower count grow?',     a: 'Follower count is a vanity metric. We optimize for engagement and conversion from social → site. Followers grow as a byproduct.' },
        { q: 'Do you run paid ads on the same platforms?',a: 'Often yes — organic + paid working together usually outperforms either alone. Discounted bundle pricing available when both services run together.' },
      ],
    },

    testimonials: {
      tag:     'FROM FOUNDERS WE WORK WITH',
      heading: 'What clients [em]actually say.[/em]',
      items: [
        { quote: 'Their UGC pipeline is legit. ', bold: '10 creators sourced, briefed, and shipped in 12 days.', name: 'TrashedPunk', role: 'Streetwear Founder', initials: 'TP' },
        { quote: 'Iqrar walked me through every single change in a weekly Loom. ', bold: 'I actually understand my ad account now.', name: 'Jason M.', role: 'Lofty Creations · UK', initials: 'JM' },
        { quote: 'Honest, fast, and they actually pick up the phone. Other agencies treated us like a number. ', bold: 'AT360 treated us like a partner.', name: 'D. Khan', role: 'CEO, FreshCo', initials: 'DK' },
      ],
    },
  },
}
