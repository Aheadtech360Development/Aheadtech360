export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // HERO
    { name: 'heroStats', title: 'Hero Stats (3 items)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'number', title: 'Number (e.g. 75+)', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ]}]
    },
    { name: 'heroHeading', title: 'Hero Heading', type: 'string',
      description: 'Use [em]text[/em] for green italic text. E.g. "We make your marketing [em]make money.[/em]"' },
    { name: 'heroSubheading', title: 'Hero Subheading', type: 'text' },
    { name: 'heroTags', title: 'Hero Industry Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'heroFormTitle', title: 'Hero Form Title', type: 'string' },
    { name: 'heroFormSubtitle', title: 'Hero Form Subtitle', type: 'string' },
    { name: 'heroFormScarcity', title: 'Hero Form Scarcity Text (e.g. 3 spots left)', type: 'string' },
    { name: 'heroGHLFormUrl', title: 'Hero Form — GoHighLevel Embed URL', type: 'url',
      description: 'Paste your GoHighLevel form embed URL here' },

    // PROOF BAR
    { name: 'proofBarStats', title: 'Proof Bar Stats (4 items)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Value (e.g. 3.2x)', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
      ]}]
    },

    // PAIN SECTION
    { name: 'painHeading', title: 'Pain Section Heading', type: 'string' },
    { name: 'painCards', title: 'Pain Cards (3)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'number', title: 'Big Number/Stat', type: 'string' },
        { name: 'title', title: 'Card Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ]}]
    },

    // SERVICES (home preview)
    { name: 'servicesHeading', title: 'Services Section Heading', type: 'string' },
    { name: 'servicesSubheading', title: 'Services Section Subheading', type: 'string' },

    // PROCESS
    { name: 'processHeading', title: 'Process Section Heading', type: 'string' },
    { name: 'processSubheading', title: 'Process Section Subheading', type: 'string' },
    { name: 'processSteps', title: 'Process Steps (4)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'step', title: 'Step Number', type: 'string' },
        { name: 'timing', title: 'Timing Tag (e.g. Week 1-2)', type: 'string' },
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'deliverable', title: 'Deliverable Arrow text', type: 'string' },
      ]}]
    },

    // FAQ
    { name: 'faqHeading', title: 'FAQ Section Heading', type: 'string' },

    // GUARANTEE
    { name: 'guaranteeHeading', title: 'Guarantee Heading', type: 'string' },
    { name: 'guaranteeSubtext', title: 'Guarantee Subtext', type: 'string' },
    { name: 'guaranteePills', title: 'Guarantee Pills (3)', type: 'array',
      of: [{ type: 'object', fields: [
        {
          name: 'icon',
          title: 'Icon Image',
          type: 'image',
          description: 'Upload an SVG or PNG icon (recommended: 64x64px, transparent background)',
          options: { hotspot: false },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
        { name: 'label', title: 'Label', type: 'string' },
      ]}]
    },

    // FINAL CTA
    { name: 'ctaHeading', title: 'Final CTA Heading', type: 'string' },
    { name: 'ctaSubtext', title: 'Final CTA Subtext', type: 'string' },
    { name: 'ctaGHLFormUrl', title: 'Final CTA — GoHighLevel Form URL', type: 'url' },
    { name: 'ctaScarcity', title: 'Final CTA Scarcity Text', type: 'string' },

    // STORY SECTION
    { name: 'storyHeading', title: 'Story Section Heading', type: 'string' },
    { name: 'storySubtext', title: 'Story Section Subtext', type: 'text' },
    { name: 'storyGHLFormUrl', title: 'Story Form — GoHighLevel URL', type: 'url' },

    // SEO
    { name: 'seo', title: 'SEO Meta', type: 'seoMeta' },
  ],
}
