export default {
  name: 'resultsPage',
  title: 'Results Page',
  type: 'document',
  fields: [
    { name: 'pageHeading', title: 'Page Heading', type: 'string' },
    { name: 'pageStats', title: 'Top Stats (4 items)', type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'value', title: 'Value', type: 'string' },
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'colorClass', title: 'Color (blue or green)', type: 'string' },
      ]}]
    },
    { name: 'ctaHeading', title: 'CTA Heading', type: 'string' },
    { name: 'ctaSubtext', title: 'CTA Subtext', type: 'string' },
  ],
}
