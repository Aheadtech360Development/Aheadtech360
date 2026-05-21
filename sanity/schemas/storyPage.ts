// sanity/schemas/storyPage.ts

export default {
  name: 'storyPage',
  title: 'Share Your Story Page',
  type: 'document',
  // Only one document of this type should exist
  __experimental_actions: ['update', 'publish'],
  fields: [
    // ── Hero (left column) ─────────────────────────────────────────────
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'E.g. "We\'re collecting real stories from real business owners."',
      initialValue: "We're collecting real stories from real business owners.",
    },
    {
      name: 'subheading',
      title: 'Subheading / Description',
      type: 'text',
      rows: 3,
      description: 'Paragraph below the heading.',
      initialValue: "Not case studies. Not testimonials. Just real stories from real people — what's working, what's not, and what you wish you knew sooner. We read every single one.",
    },

    // ── 4 "What happens" steps ─────────────────────────────────────────
    {
      name: 'steps',
      title: 'What Happens With Your Story (4 steps)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Step Number', type: 'string', description: '1, 2, 3, 4' },
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'description', title: 'Step Description', type: 'text', rows: 2 },
            {
              name: 'color',
              title: 'Icon Background Color',
              type: 'string',
              options: {
                list: [
                  { title: 'Green', value: '#EDFBF3' },
                  { title: 'Blue', value: '#EEF2F9' },
                  { title: 'Amber', value: '#FFFAEB' },
                  { title: 'Purple', value: '#F3E8FF' },
                ],
                layout: 'radio',
              },
              initialValue: '#EDFBF3',
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
      initialValue: [
        { _type: 'object', number: '1', title: 'We read it personally', description: 'Not a bot. Iqrar or Ikrash read every story within 48 hours.', color: '#EDFBF3' },
        { _type: 'object', number: '2', title: 'We send you a free tip', description: 'One specific, actionable recommendation based on your situation.', color: '#EEF2F9' },
        { _type: 'object', number: '3', title: 'You might get featured', description: 'Best stories (with your permission) become blog posts or podcast episodes.', color: '#FFFAEB' },
        { _type: 'object', number: '4', title: 'Patterns become guides', description: 'We analyze every story to find patterns and publish free guides that help everyone.', color: '#F3E8FF' },
      ],
    },

    // ── Founders Quote ─────────────────────────────────────────────────
    {
      name: 'foundersQuote',
      title: "Founders' Quote",
      type: 'text',
      rows: 4,
      initialValue: "We started AheadTech360 because we saw too many good businesses wasting money on bad marketing. We built this story collection to understand what's really happening on the ground — not what marketing Twitter says, but what actual business owners are dealing with every day.",
    },
    {
      name: 'foundersNames',
      title: 'Founders Attribution',
      type: 'string',
      initialValue: '— Iqrar & Ikrash, Founders',
    },

    // ── Social proof counter ───────────────────────────────────────────
    {
      name: 'storiesCount',
      title: 'Stories Collected Count',
      type: 'string',
      description: 'Shows on the form card. E.g. "47 stories collected so far"',
      initialValue: '47 stories collected so far',
    },

    // ── Form headline ──────────────────────────────────────────────────
    {
      name: 'formHeading',
      title: 'Form Heading',
      type: 'string',
      initialValue: 'Your story matters',
    },
    {
      name: 'formSubheading',
      title: 'Form Subheading',
      type: 'string',
      initialValue: "3 minutes. We'll send you a personalized tip back.",
    },

    // ── GHL Form URL ───────────────────────────────────────────────────
    {
      name: 'ghlFormUrl',
      title: 'GoHighLevel Form URL',
      type: 'url',
      description: 'The GHL embed URL for the story collection form. Paste from your GHL funnel settings.',
    },

    // ── SEO ─────────────────────────────────────────────────────────────
    { name: 'seo', title: 'SEO Meta', type: 'seoMeta' },
  ],

  preview: {
    prepare: () => ({ title: 'Share Your Story Page' }),
  },
}