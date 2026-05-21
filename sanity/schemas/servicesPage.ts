export default {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    { name: 'pageHeading', title: 'Page Heading', type: 'string' },
    { name: 'pageSubheading', title: 'Page Subheading', type: 'string' },
    { name: 'services', title: 'Services List', type: 'array',
      of: [{ type: 'object', fields: [
        {
          name: 'icon',
          title: 'Icon Image',
          type: 'image',
          description: 'Upload SVG or PNG icon (64x64px recommended)',
          options: { hotspot: false },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
        {
          name: 'iconBg',
          title: 'Icon Background Color',
          type: 'string',
          options: {
            list: [
              { title: 'Blue', value: '#EEF2F9' },
              { title: 'Green', value: '#EDFBF3' },
              { title: 'Amber', value: '#FFFAEB' },
              { title: 'Red', value: '#FEF3F2' },
              { title: 'Purple', value: '#F3E8FF' },
            ],
            layout: 'radio',
          },
        },
        { name: 'title', title: 'Service Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'resultValue', title: 'Result Value (e.g. 3.2x)', type: 'string' },
        { name: 'resultLabel', title: 'Result Label (e.g. Avg ROAS)', type: 'string' },
        {
          name: 'slug',
          title: 'Inner Page Slug',
          type: 'string',
          description: 'e.g. "meta-ads" → links card to /services/meta-ads',
        },
      ]}]
    },
    { name: 'whyUsHeading', title: 'Why Us Heading', type: 'string' },
    { name: 'whyUsCards', title: 'Why Us Cards (3)', type: 'array',
      of: [{ type: 'object', fields: [
        {
          name: 'icon',
          title: 'Icon Image',
          type: 'image',
          description: 'Upload SVG or PNG icon (64x64px recommended)',
          options: { hotspot: false },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ]}]
    },
    { name: 'ctaHeading', title: 'CTA Heading', type: 'string' },
    { name: 'ctaSubtext', title: 'CTA Subtext', type: 'string' },
    { name: 'ctaGHLFormUrl', title: 'CTA GoHighLevel Form URL', type: 'url' },
    { name: 'seo', title: 'SEO Meta', type: 'seoMeta' },
  ],
}
