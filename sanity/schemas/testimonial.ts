export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'quote', title: 'Quote Text', type: 'text' },
    { name: 'boldPart', title: 'Bold Part of Quote', type: 'string',
      description: 'The part that should appear bold in the quote' },
    { name: 'clientName', title: 'Client Name', type: 'string' },
    { name: 'clientRole', title: 'Client Role/Company', type: 'string' },
    { name: 'resultTag', title: 'Result Tag (e.g. 📈 0.4x → 7x ROAS)', type: 'string' },
    { name: 'avatar', title: 'Client Photo', type: 'image', options: { hotspot: true } },
    { name: 'avatarInitial', title: 'Avatar Initial (if no photo)', type: 'string' },
  ],
}
