export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'heroHeading', title: 'Hero Heading', type: 'string' },
    { name: 'heroParagraph1', title: 'Hero Paragraph 1', type: 'text' },
    { name: 'heroParagraph2', title: 'Hero Paragraph 2', type: 'text' },
    {
      name: 'heroImage',
      title: 'Team Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO. E.g. "AheadTech360 team at the office"',
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
    { name: 'valuesHeading', title: 'Values Section Heading', type: 'string' },
    { name: 'values', title: 'Values (3)', type: 'array',
      of: [{ type: 'object', fields: [
        {
          name: 'icon',
          title: 'Icon Image',
          type: 'image',
          description: 'Upload SVG or PNG icon for this value (64x64px)',
          options: { hotspot: false },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ]}]
    },
    { name: 'teamHeading', title: 'Team Section Heading', type: 'string' },
    { name: 'ctaHeading', title: 'CTA Heading', type: 'string' },
    { name: 'ctaSubtext', title: 'CTA Subtext', type: 'string' },
    { name: 'seo', title: 'SEO Meta', type: 'seoMeta' },
  ],
}
