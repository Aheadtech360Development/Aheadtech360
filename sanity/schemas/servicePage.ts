export default {
  name: 'servicePage',
  title: 'Service Inner Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Name',
      type: 'string',
      description: 'e.g. "Meta Ads"',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'e.g. "meta-ads" → /services/meta-ads',
    },

    // ── Section 1: Hero ──────────────────────────────────────────
    {
      name: 'heroTagline',
      title: 'Hero Tag (small label above heading)',
      type: 'string',
      description: 'e.g. "Paid Social & PPC"',
    },
    {
      name: 'heroHeading',
      title: 'Hero Heading (h1)',
      type: 'string',
      description: 'Wrap words in [em]...[/em] for green italic',
    },
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 3,
    },

    // ── Section 2: What's Included ───────────────────────────────
    {
      name: 'featuresHeading',
      title: "Features Section Heading",
      type: 'string',
      initialValue: "What's included",
    },
    {
      name: 'features',
      title: "Features / What's Included",
      type: 'array',
      of: [{
        type: 'object',
        preview: { select: { title: 'title' } },
        fields: [
          {
            name: 'icon',
            title: 'Icon Image',
            type: 'image',
            options: { hotspot: false },
          },
          {
            name: 'iconBg',
            title: 'Icon Background Color',
            type: 'string',
            options: {
              list: [
                { title: 'Blue',   value: '#EEF2F9' },
                { title: 'Green',  value: '#EDFBF3' },
                { title: 'Amber',  value: '#FFFAEB' },
                { title: 'Red',    value: '#FEF3F2' },
                { title: 'Purple', value: '#F3E8FF' },
              ],
              layout: 'radio',
            },
          },
          { name: 'title',       title: 'Feature Title',  type: 'string' },
          { name: 'description', title: 'Description',    type: 'text', rows: 3 },
        ],
      }],
    },

    // ── Section 3: Process ───────────────────────────────────────
    {
      name: 'processHeading',
      title: 'Process Section Heading',
      type: 'string',
      initialValue: 'How we do it',
    },
    {
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [{
        type: 'object',
        preview: { select: { title: 'title' } },
        fields: [
          { name: 'title',       title: 'Step Title',       type: 'string' },
          { name: 'description', title: 'Step Description', type: 'text', rows: 3 },
        ],
      }],
    },

    // ── Section 4: Results ───────────────────────────────────────
    {
      name: 'resultsHeading',
      title: 'Results Section Heading',
      type: 'string',
      initialValue: 'Real results for real businesses.',
    },
    {
      name: 'resultsSubheading',
      title: 'Results Subheading',
      type: 'string',
    },
    {
      name: 'resultStats',
      title: 'Result Stats (3–4 recommended)',
      type: 'array',
      of: [{
        type: 'object',
        preview: { select: { title: 'value', subtitle: 'label' } },
        fields: [
          { name: 'value', title: 'Stat Value (e.g. 3.2x)',       type: 'string' },
          { name: 'label', title: 'Stat Label (e.g. Avg ROAS)',   type: 'string' },
        ],
      }],
    },

    // ── Section 5: FAQ ───────────────────────────────────────────
    {
      name: 'faqHeading',
      title: 'FAQ Section Heading',
      type: 'string',
      initialValue: 'Frequently asked questions',
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{
        type: 'object',
        preview: { select: { title: 'question' } },
        fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer',   title: 'Answer',   type: 'text', rows: 4 },
        ],
      }],
    },

    // ── Bottom CTA ───────────────────────────────────────────────
    {
      name: 'ctaGHLFormUrl',
      title: 'CTA GHL Form URL (optional)',
      type: 'url',
    },

    // ── SEO ──────────────────────────────────────────────────────
    { name: 'seo', title: 'SEO Meta', type: 'seoMeta' },
  ],

  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return {
        title:    title    || 'Untitled Service',
        subtitle: subtitle ? `/services/${subtitle}` : 'No slug set',
      }
    },
  },
}
