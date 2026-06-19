import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'cityPage',
  title: 'City Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'City Name', type: 'string', description: 'E.g. "New York", "Dubai", "Karachi"', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'emoji', title: 'Emoji/Flag Icon', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'region', title: 'Region Group', type: 'string', description: 'E.g. "US", "UK", "UAE", "PK" — used for grouping' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'hubCardDescription', title: 'Hub Card Description', type: 'text', rows: 2 }),

    defineField({ name: 'breadcrumbLabel', title: 'Breadcrumb Label', type: 'string', description: 'E.g. "Digital Marketing Agency in New York"' }),
    defineField({ name: 'heroTag', title: 'Hero Tag Text', type: 'string' }),
    defineField({ name: 'heroHeading', title: 'Hero Heading (city + state/country)', type: 'string', description: 'E.g. "New York, NY"' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 3 }),

    defineField({
      name: 'heroSignals', title: 'Hero Signal Cards (4)', type: 'array', of: [{
        type: 'object', name: 'signal', fields: [
          { name: 'emoji', title: 'Emoji', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'description', title: 'Description', type: 'string' },
        ],
      }],
    }),

    defineField({
      name: 'proofCard', title: 'Hero Proof Card', type: 'object', fields: [
        { name: 'title', title: 'Card Title', type: 'string', initialValue: 'Results from our portfolio' },
        { name: 'stats', title: 'Proof Stats', type: 'array', of: [{
          type: 'object', name: 'proofStat', fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Bold Label', type: 'string' },
            { name: 'sublabel', title: 'Sub Label', type: 'string' },
          ],
        }] },
        { name: 'pills', title: 'Pills', type: 'array', of: [{ type: 'string' }] },
      ],
    }),

    defineField({
      name: 'statsStrip', title: 'Stats Strip (4)', type: 'array', of: [{
        type: 'object', name: 'statStripItem', fields: [
          { name: 'value', title: 'Value', type: 'string' },
          { name: 'label', title: 'Label', type: 'string' },
        ],
      }],
    }),

    defineField({
      name: 'marketSection', title: 'Market Section', type: 'object', fields: [
        { name: 'label', title: 'Section Label', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text', rows: 3 }] },
        { name: 'cards', title: 'Market Cards (4)', type: 'array', of: [{
          type: 'object', name: 'marketCard', fields: [
            { name: 'emoji', title: 'Emoji', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        }] },
      ],
    }),

    defineField({
      name: 'servicesSection', title: 'Services Section', type: 'object', fields: [
        { name: 'label', title: 'Section Label', type: 'string' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'cards', title: 'Service Cards (6)', type: 'array', of: [{
          type: 'object', name: 'serviceCard', fields: [
            { name: 'emoji', title: 'Emoji', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'badge', title: 'Result Badge', type: 'string', description: 'E.g. "Avg 3.2x ROAS"' },
          ],
        }] },
      ],
    }),

    defineField({
      name: 'seoBody', title: 'SEO Article Body', type: 'array',
      of: [{
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }, { title: 'H2', value: 'h2' }, { title: 'H3', value: 'h3' }],
        lists: [{ title: 'Bullet', value: 'bullet' }],
        marks: { decorators: [{ title: 'Bold', value: 'strong' }, { title: 'Italic', value: 'em' }] },
      }],
    }),

    defineField({
      name: 'sidebar', title: 'Sidebar', type: 'object', fields: [
        { name: 'servicesTitle', title: 'Services List Title', type: 'string' },
        { name: 'servicesList', title: 'Services List', type: 'array', of: [{ type: 'string' }] },
        { name: 'industriesTitle', title: 'Industries List Title', type: 'string' },
        { name: 'industriesList', title: 'Industries List', type: 'array', of: [{ type: 'string' }] },
        { name: 'ctaHeading', title: 'CTA Heading', type: 'string' },
        { name: 'ctaText', title: 'CTA Text', type: 'text', rows: 2 },
      ],
    }),

    defineField({
      name: 'faqs', title: 'FAQs', type: 'array', of: [{
        type: 'object', name: 'faqItem', fields: [
          { name: 'question', title: 'Question', type: 'string' },
          { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
        ],
        preview: { select: { title: 'question' } },
      }],
    }),

    defineField({
      name: 'finalCta', title: 'Final CTA', type: 'object', fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'text', title: 'Subtext', type: 'text', rows: 2 },
        { name: 'buttonText', title: 'Button Text', type: 'string' },
        { name: 'smallText', title: 'Small Text Below Button', type: 'string' },
      ],
    }),

    defineField({
      name: 'seo', title: 'SEO / Search Engine Listing', type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'metaTitle', title: 'Page Title', type: 'string', validation: (R) => R.max(60).warning('Keep under 60 characters') },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, validation: (R) => R.max(160).warning('Keep under 160 characters') },
        { name: 'keywords', title: 'Keywords', type: 'string' },
        { name: 'ogImage', title: 'Social Share Image', type: 'image' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'region' },
    prepare: ({ title, subtitle }: any) => ({ title: `📍 ${title}`, subtitle }),
  },
})
