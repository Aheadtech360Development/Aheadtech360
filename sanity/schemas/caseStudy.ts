// export default {
//   name: 'caseStudy',
//   title: 'Case Studies',
//   type: 'document',
//   fields: [
//     { name: 'title', title: 'Title', type: 'string' },
//     { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
//     { name: 'badge', title: 'Industry Badge (e.g. Ecommerce)', type: 'string' },
//     {
//       name: 'clientImage',
//       title: 'Client Photo',
//       type: 'image',
//       options: { hotspot: true },
//       fields: [
//         {
//           name: 'alt',
//           title: 'Alt Text',
//           type: 'string',
//           description: 'Describe the image for accessibility and SEO.',
//           validation: (R: any) => R.warning('Alt text improves SEO — please fill this in'),
//         },
//         {
//           name: 'caption',
//           title: 'Caption',
//           type: 'string',
//           description: 'Optional short text shown below the image.',
//         },
//         {
//           name: 'description',
//           title: 'Description',
//           type: 'text',
//           rows: 2,
//           description: 'Longer description for context (not displayed on page).',
//         },
//       ],
//     },
//     { name: 'excerpt', title: 'Short Excerpt', type: 'text' },
//     { name: 'metrics', title: 'Metrics (2-4 items)', type: 'array',
//       of: [{ type: 'object', fields: [
//         { name: 'value', title: 'Value (e.g. 7.05x)', type: 'string' },
//         { name: 'label', title: 'Label (e.g. ROAS)', type: 'string' },
//       ]}]
//     },
//     { name: 'problem', title: 'The Problem', type: 'array', of: [{ type: 'block' }] },
//     { name: 'solution', title: 'What We Did', type: 'array', of: [{ type: 'block' }] },
//     { name: 'result', title: 'The Result', type: 'array', of: [{ type: 'block' }] },
//     { name: 'seo', title: 'SEO Meta', type: 'seoMeta' },
//   ],
// }


// sanity/schemas/caseStudy.ts
export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    // ── Core ──────────────────────────────────────────────────────────
    {
      name: 'title',
      title: 'Card Title (short)',
      type: 'string',
      description: 'E.g. "EZDTFMaker: $35K → $163K revenue in 13 months"',
      validation: (R: any) => R.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R: any) => R.required(),
    },
    {
      name: 'badge',
      title: 'Industry Badge',
      type: 'string',
      description: 'E.g. "E-Commerce · DTF Printing"',
    },
    {
      name: 'description',
      title: 'Card Description (short)',
      type: 'text',
      rows: 2,
      description: 'Short summary shown on the hub card',
    },
    {
      name: 'image',
      title: 'Card / Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    },

    // ── Hub card metrics (shown on image overlay) ──────────────────────
    {
      name: 'metrics',
      title: 'Key Metrics (shown on card image overlay)',
      type: 'array',
      description: 'Max 3–4. These appear overlaid on the card image.',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string', description: 'E.g. "+363%" or "7.70x"' },
          { name: 'label', title: 'Label', type: 'string', description: 'E.g. "Revenue" or "Best ROAS"' },
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    },

    // ── Service tags on card ───────────────────────────────────────────
    {
      name: 'serviceTags',
      title: 'Service Tags (shown on card)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g. ["Meta Ads", "Google Ads", "CRO", "Email"]',
      options: { layout: 'tags' },
    },

    // ── Detail page: client info bar ───────────────────────────────────
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      description: 'E.g. "EZDTFMaker"',
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      description: 'E.g. "E-Commerce / DTF Printing"',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'E.g. "Chicago, USA"',
    },
    {
      name: 'engagementPeriod',
      title: 'Engagement Period',
      type: 'string',
      description: 'E.g. "Dec 2024 – Present"',
    },
    {
      name: 'servicesRendered',
      title: 'Services (for info bar)',
      type: 'string',
      description: 'E.g. "Meta Ads, Google Ads, CRO, Email"',
    },

    // ── Detail page: hero ──────────────────────────────────────────────
    {
      name: 'heroTitle',
      title: 'Hero Title (detail page)',
      type: 'string',
      description: 'Big bold headline on detail page. E.g. "$35K → $163K revenue. 508% more orders. 13 months."',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      description: 'Sentence below the hero title',
    },
    {
      name: 'heroMetrics',
      title: 'Hero Metrics (detail page)',
      type: 'array',
      description: 'Metrics shown in the dark hero section of the detail page. Can differ from card metrics.',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    },

    // ── Detail page: situation ─────────────────────────────────────────
    {
      name: 'situation',
      title: 'The Situation',
      type: 'text',
      rows: 5,
      description: 'Opening paragraph — context before we got involved',
    },

    // ── Detail page: strategy blocks ──────────────────────────────────
    {
      name: 'strategyBlocks',
      title: 'What We Did (Strategy Blocks)',
      type: 'array',
      description: 'Each block = one strategy/service we applied',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Block Title', type: 'string', description: 'E.g. "Full-Funnel Meta Ads Strategy"' },
          { name: 'description', title: 'Block Description', type: 'text', rows: 3 },
        ],
        preview: { select: { title: 'title', subtitle: 'description' } },
      }],
    },

    // ── Detail page: results grid (before → after) ─────────────────────
    {
      name: 'resultsGrid',
      title: 'Results Grid (Before → After)',
      type: 'array',
      description: 'Before/after metric cards. Max 4.',
      of: [{
        type: 'object',
        fields: [
          { name: 'before', title: 'Before Value', type: 'string', description: 'E.g. "$35.2K" (leave empty if not applicable)' },
          { name: 'after', title: 'After Value', type: 'string', description: 'E.g. "$163K"' },
          { name: 'change', title: 'Change Badge', type: 'string', description: 'E.g. "+363%" (optional green badge)' },
          { name: 'label', title: 'Metric Label', type: 'string', description: 'E.g. "Revenue"' },
        ],
        preview: { select: { title: 'label', subtitle: 'after' } },
      }],
    },

    // ── Detail page: performance table ────────────────────────────────
    {
      name: 'performanceTable',
      title: 'Performance Table (optional)',
      type: 'object',
      description: 'Optional data table (e.g. ad spend breakdown, hourly ROAS)',
      fields: [
        {
          name: 'title',
          title: 'Table Title',
          type: 'string',
          description: 'E.g. "Advertising performance" or "Hourly performance"',
        },
        {
          name: 'headers',
          title: 'Column Headers',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'E.g. ["Metric", "Full Period", "Best Campaign"]',
        },
        {
          name: 'rows',
          title: 'Table Rows',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'col1', title: 'Column 1', type: 'string' },
              { name: 'col2', title: 'Column 2', type: 'string' },
              { name: 'col3', title: 'Column 3', type: 'string' },
              { name: 'col4', title: 'Column 4 (optional)', type: 'string' },
              { name: 'highlight', title: 'Highlight this row?', type: 'boolean', initialValue: false },
            ],
            preview: { select: { title: 'col1', subtitle: 'col2' } },
          }],
        },
      ],
    },

    // ── Detail page: peak box ─────────────────────────────────────────
    {
      name: 'peakBox',
      title: 'Peak Performance Box (optional)',
      type: 'object',
      description: 'Green gradient highlight box — e.g. best single month',
      fields: [
        { name: 'label', title: 'Label', type: 'string', description: 'E.g. "Peak Performance — May 2025"' },
        { name: 'title', title: 'Title', type: 'string', description: 'E.g. "Best single month in company history"' },
        {
          name: 'metrics',
          title: 'Peak Metrics',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'value', title: 'Value', type: 'string' },
              { name: 'label', title: 'Label', type: 'string' },
            ],
          }],
        },
      ],
    },

    // ── Detail page: key insight ──────────────────────────────────────
    {
      name: 'keyInsight',
      title: 'Key Insight (dark box)',
      type: 'text',
      rows: 4,
      description: 'The main lesson / most important takeaway from this case study',
    },

    // ── Detail page: CTA ──────────────────────────────────────────────
    {
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
      description: 'E.g. "Want results like these?"',
      initialValue: 'Want results like these?',
    },
    {
      name: 'ctaSubtext',
      title: 'CTA Subtext',
      type: 'string',
      description: 'E.g. "We build full-funnel growth systems for e-commerce brands."',
    },

    // ── SEO ───────────────────────────────────────────────────────────
    {
      name: 'seo',
      title: 'SEO Meta',
      type: 'seoMeta',
    },
  ],

  preview: {
    select: { title: 'title', subtitle: 'badge', media: 'image' },
  },
}