export default {
  name: 'seoMeta',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Shown in browser tab and Google search. Ideal: 50–60 characters.',
      validation: (R: any) => R.max(60).warning('Keep under 60 characters'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Shown in Google search results. Ideal: 150–160 characters.',
      validation: (R: any) => R.max(160).warning('Keep under 160 characters'),
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Comma-separated. E.g. "meta ads agency, facebook ads, ecommerce marketing"',
    },
    {
      name: 'ogImage',
      title: 'Social Share Image (OG Image)',
      type: 'image',
      description: 'Image shown when shared on Facebook/LinkedIn/Twitter. Ideal: 1200x630px.',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    },
  ],
}
