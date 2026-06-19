import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'industryPage',
  title: 'Industry Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Industry Name', type: 'string', description: 'E.g. "Real Estate", "Fashion & Apparel"', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R) => R.required() }),
    defineField({ name: 'emoji', title: 'Emoji Icon', type: 'string', description: 'Shown on hub card and hero tag. E.g. 🏠 👗 🛍️', validation: (R) => R.required() }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Lower numbers show first on hub page' }),
    defineField({ name: 'hubCardDescription', title: 'Hub Card Description', type: 'text', rows: 2, description: 'Short description shown on the /industries card grid' }),

    defineField({ name: 'heroTag', title: 'Hero Tag Text', type: 'string', description: 'E.g. "Meta, TikTok, UGC, Shopify CRO"' }),
    defineField({ name: 'heroHeading', title: 'Hero Heading', type: 'string', description: 'E.g. "Fashion Brands" — appears after "Marketing Agency for"' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 3 }),
    defineField({ name: 'heroCtaText', title: 'Primary CTA Button Text', type: 'string', initialValue: 'Get My Free Audit →' }),
    defineField({ name: 'heroCta2Text', title: 'Secondary CTA Button Text (optional)', type: 'string' }),
    defineField({ name: 'nichePills', title: 'Niche Pills', type: 'array', of: [{ type: 'string' }], description: 'E.g. "DTC Brands", "Streetwear", "POD"' }),

    defineField({
      name: 'painCard', title: 'Pain Points Card', type: 'object', fields: [
        { name: 'heading', title: 'Heading', type: 'string', description: 'E.g. "Fashion brand problems we solve"' },
        { name: 'items', title: 'Pain Items', type: 'array', of: [{
          type: 'object', name: 'painItem', fields: [
            { name: 'boldPart', title: 'Bold Part', type: 'string' },
            { name: 'description', title: 'Rest of Description', type: 'string' },
          ],
          preview: { select: { title: 'boldPart' } },
        }] },
      ],
    }),

    defineField({
      name: 'whySection', title: 'Why Different Section', type: 'object', fields: [
        { name: 'label', title: 'Section Label', type: 'string', initialValue: 'Why this industry is different' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'cards', title: 'Cards', type: 'array', of: [{
          type: 'object', name: 'whyCard', fields: [
            { name: 'emoji', title: 'Emoji', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'note', title: 'Small Note Tag', type: 'string' },
          ],
          preview: { select: { title: 'title' } },
        }] },
      ],
    }),

    defineField({
      name: 'processSection', title: 'Process Section', type: 'object', fields: [
        { name: 'label', title: 'Section Label', type: 'string', initialValue: 'How we work' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'steps', title: 'Steps', type: 'array', of: [{
          type: 'object', name: 'processStep', fields: [
            { name: 'stepNumber', title: 'Step Number', type: 'string', description: 'E.g. "1"' },
            { name: 'tag', title: 'Tag', type: 'string', description: 'E.g. "Week 1"' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: { select: { title: 'title', subtitle: 'tag' } },
        }] },
      ],
    }),

    defineField({
      name: 'caseStudySection', title: 'Case Study / Proof Section', type: 'object', fields: [
        { name: 'label', title: 'Section Label', type: 'string', initialValue: 'Proof' },
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'caseTitle', title: 'Case Study Title', type: 'string' },
        { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
        { name: 'attribution', title: 'Attribution', type: 'string' },
        { name: 'stats', title: 'Stats', type: 'array', of: [{
          type: 'object', name: 'caseStat', fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        }] },
      ],
    }),

    defineField({
      name: 'seoBody', title: 'SEO Article Body', type: 'array',
      of: [{
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
        ],
        lists: [{ title: 'Bullet', value: 'bullet' }],
        marks: { decorators: [{ title: 'Bold', value: 'strong' }, { title: 'Italic', value: 'em' }] },
      }],
      description: 'Long-form SEO content with H2/H3 headings, paragraphs, and bullet lists',
    }),

    defineField({
      name: 'sidebar', title: 'Sidebar', type: 'object', fields: [
        { name: 'servicesTitle', title: 'Services List Title', type: 'string' },
        { name: 'servicesList', title: 'Services List', type: 'array', of: [{ type: 'string' }] },
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
      ],
    }),

    defineField({
      name: 'seo', title: 'SEO / Search Engine Listing', type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'metaTitle', title: 'Page Title', type: 'string', validation: (R) => R.max(60).warning('Keep under 60 characters') },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, validation: (R) => R.max(160).warning('Keep under 160 characters') },
        { name: 'keywords', title: 'Keywords', type: 'string', description: 'Comma-separated' },
        { name: 'ogImage', title: 'Social Share Image', type: 'image' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'heroHeading' },
    prepare: ({ title, subtitle }: any) => ({ title: `🏭 ${title}`, subtitle }),
  },
})
