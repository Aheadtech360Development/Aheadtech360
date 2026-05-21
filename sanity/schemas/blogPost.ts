export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // ── Core fields ────────────────────────────────────────────────────
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'category',
      title: 'Category Tag',
      type: 'string',
      description: 'E.g. "Digital Marketing", "Meta Ads", "CRO"',
      options: {
        list: [
          { title: 'SEO', value: 'SEO' },
          { title: 'Paid Ads', value: 'Paid Ads' },
          { title: 'Google Ads', value: 'Google Ads' },
          { title: 'Meta Ads', value: 'Meta Ads' },
          { title: 'Development', value: 'Development' },
          { title: 'Email Marketing', value: 'Email Marketing' },
          { title: 'Social Media', value: 'Social Media' },
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      options: { dateFormat: 'MMMM D, YYYY' },
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'E.g. "9 minutes" or "5 min read"',
      initialValue: '5 minutes',
    },
    {
      name: 'excerpt',
      title: 'Excerpt (short description)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO. E.g. "Business owner reviewing Facebook Ads dashboard"',
          validation: (R: any) => R.warning('Alt text improves SEO — please fill this in'),
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional short text shown below the image on the website.',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          description: 'Longer description for context and structured data (not displayed on page).',
        },
      ],
    },

    // ── Body (Portable Text with inline images) ────────────────────────
    {
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
        // Inline CTA box block
        {
          type: 'object',
          name: 'ctaBox',
          title: 'CTA Box',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
              initialValue: 'Want us to look at your ads?',
            },
            {
              name: 'subtext',
              title: 'Subtext',
              type: 'string',
              initialValue: "Free audit. No contracts. We find what's broken and tell you how to fix it in 24 hours.",
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Get My Free Audit →',
            },
            {
              name: 'buttonUrl',
              title: 'Button URL',
              type: 'string',
              initialValue: '/contact',
            },
            {
              name: 'theme',
              title: 'Theme',
              type: 'string',
              initialValue: 'green',
              options: {
                list: [
                  { title: 'Green (default)', value: 'green' },
                  { title: 'Dark', value: 'dark' },
                  { title: 'Blue', value: 'blue' },
                ],
                layout: 'radio',
              },
            },
          ],
          preview: {
            select: { title: 'heading', subtitle: 'theme' },
            prepare: ({ title, subtitle }: any) => ({
              title: title || 'CTA Box',
              subtitle: `Theme: ${subtitle || 'green'}`,
            }),
          },
        },

        // Table block
        {
          type: 'object',
          name: 'table',
          title: 'Table',
          fields: [
            {
              name: 'caption',
              title: 'Table Caption (optional)',
              type: 'string',
              description: 'Short label shown above the table',
            },
            {
              name: 'headers',
              title: 'Column Headers',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'E.g. ["", "Local SEO", "Regular SEO"]  — leave first cell empty for row-label tables',
              validation: (R: any) => R.required().min(1),
            },
            {
              name: 'rows',
              title: 'Rows',
              type: 'array',
              of: [{
                type: 'object',
                name: 'tableRow',
                title: 'Row',
                fields: [
                  { name: 'col1', title: 'Column 1', type: 'string' },
                  { name: 'col2', title: 'Column 2', type: 'string' },
                  { name: 'col3', title: 'Column 3', type: 'string' },
                  { name: 'col4', title: 'Column 4 (optional)', type: 'string' },
                  { name: 'col5', title: 'Column 5 (optional)', type: 'string' },
                  {
                    name: 'firstCellBold',
                    title: 'Bold first cell?',
                    type: 'boolean',
                    description: 'Make the first column cell bold (for row labels like "Target", "Goal" etc.)',
                    initialValue: true,
                  },
                ],
                preview: {
                  select: { title: 'col1', subtitle: 'col2' },
                },
              }],
              validation: (R: any) => R.required().min(1),
            },
          ],
          preview: {
            select: { title: 'caption', subtitle: 'headers' },
            prepare: ({ title, subtitle }: any) => ({
              title: `📊 Table${title ? ': ' + title : ''}`,
              subtitle: subtitle ? subtitle.join(' | ') : '',
            }),
          },
        },

        // Info Box block
        {
          type: 'object',
          name: 'infoBox',
          title: 'Info Box',
          fields: [
            {
              name: 'emoji',
              title: 'Emoji Icon',
              type: 'string',
              description: 'E.g. 🔵 📘 ✅',
              initialValue: '📘',
            },
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (R: any) => R.required(),
            },
            {
              name: 'subtitle',
              title: 'Italic Subtitle (optional)',
              type: 'string',
              description: 'Shown in italic below the heading',
            },
            {
              name: 'content',
              title: 'Content (text + bullets)',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'paragraph',
                  title: 'Rich Text',
                  fields: [
                    {
                      name: 'body',
                      title: 'Text',
                      type: 'array',
                      of: [
                        {
                          type: 'block',
                          styles: [{ title: 'Normal', value: 'normal' }],
                          lists: [
                            { title: 'Bullet', value: 'bullet' },
                            { title: 'Numbered', value: 'number' },
                          ],
                          marks: {
                            decorators: [
                              { title: 'Bold', value: 'strong' },
                              { title: 'Italic', value: 'em' },
                            ],
                            annotations: [
                              {
                                name: 'textColor',
                                title: 'Text Color',
                                type: 'object',
                                fields: [
                                  {
                                    name: 'color',
                                    title: 'Color',
                                    type: 'string',
                                    options: {
                                      list: [
                                        { title: 'Default (dark gray)', value: '#374151' },
                                        { title: 'Blue', value: '#1E40AF' },
                                        { title: 'Purple', value: '#6B21A8' },
                                        { title: 'Green', value: '#1C8F5A' },
                                        { title: 'Red', value: '#DC2626' },
                                        { title: 'Orange', value: '#D97706' },
                                        { title: 'Light gray', value: '#6E8098' },
                                      ],
                                      layout: 'dropdown',
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                  preview: {
                    select: { title: 'body' },
                    prepare: ({ title }: any) => ({
                      title: '¶ Rich Text Block',
                      subtitle: title?.[0]?.children?.[0]?.text?.slice(0, 60) || '',
                    }),
                  },
                },
                {
                  type: 'object',
                  name: 'bulletList',
                  title: 'Bullet Points',
                  fields: [{ name: 'items', title: 'Items', type: 'array', of: [{ type: 'string' }] }],
                  preview: { select: { title: 'items' }, prepare: ({ title }: any) => ({ title: '• ' + title?.join(', ')?.slice(0, 60) }) },
                },
              ],
            },
          ],
          preview: {
            select: { title: 'heading', subtitle: 'subtitle' },
            prepare: ({ title, subtitle }: any) => ({
              title: `📦 Info Box: ${title || ''}`,
              subtitle: subtitle || '',
            }),
          },
        },

        // Insight Box block
        {
          type: 'object',
          name: 'insightBox',
          title: 'Insight Box',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Insight Text',
              type: 'text',
              rows: 3,
              validation: (R: any) => R.required(),
            },
          ],
          preview: {
            select: { title: 'label', subtitle: 'text' },
            prepare: ({ title, subtitle }: any) => ({
              title: `${title || ''}`,
              subtitle: subtitle ? subtitle.slice(0, 60) + '...' : '',
            }),
          },
        },

        // Inline image block
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe the image for accessibility and SEO.',
              validation: (R: any) => R.warning('Alt text improves SEO — please fill this in'),
            },
            {
              name: 'caption',
              title: 'Image Caption (optional)',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              description: 'Longer description for context (not displayed on page).',
            },
          ],
        },
      ],
    },

    // ── Share links ────────────────────────────────────────────────────
    {
      name: 'shareLinks',
      title: 'Share Links',
      type: 'object',
      description: 'Social share links. Facebook, X, LinkedIn auto-use page URL. Custom link is optional.',
      fields: [
        {
          name: 'customLabel',
          title: 'Custom Link Label',
          type: 'string',
          placeholder: 'E.g. "View on our site"',
        },
        {
          name: 'customUrl',
          title: 'Custom Link URL',
          type: 'url',
        },
      ],
    },

    // ── FAQ (per-blog) ──────────────────────────────────────────────────
    {
      name: 'faqs',
      title: 'FAQ Section',
      type: 'array',
      description: 'Questions & answers shown below the article.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (R: any) => R.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
              validation: (R: any) => R.required(),
            },
          ],
          preview: {
            select: { title: 'question', subtitle: 'answer' },
          },
        },
      ],
    },

    // ── Tags / Keywords ──────────────────────────────────────────────────
    {
      name: 'tags',
      title: 'Tags / Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'E.g. "meta ads", "facebook ads for ecommerce", "ROAS improvement"',
      options: { layout: 'tags' },
    },

    // ── SEO ─────────────────────────────────────────────────────────────
    { name: 'seo', title: 'SEO Meta', type: 'seoMeta' },
  ],

  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
}
