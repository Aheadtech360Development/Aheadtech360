export default {
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string' },
    { name: 'role', title: 'Role/Title', type: 'string' },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'E.g. "Ikrash Ovais, CEO of AheadTech360"',
          validation: (R: any) => R.warning('Alt text improves SEO — please fill this in'),
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional text shown below the photo.',
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
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}
