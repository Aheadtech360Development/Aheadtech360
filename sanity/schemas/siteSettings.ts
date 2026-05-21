export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'topbarText', title: 'Topbar Text', type: 'string',
      description: 'E.g. "We helped 75+ brands generate $1.56M+ in revenue"'
    },
    { name: 'topbarHighlights', title: 'Topbar Bold Words (comma separated)', type: 'string' },
    { name: 'logoText', title: 'Logo Text', type: 'string' },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'address', title: 'Office Address', type: 'text' },
    { name: 'whatsapp', title: 'WhatsApp Number', type: 'string' },
    {
      name: 'navLinks', title: 'Navigation Links', type: 'array',
      of: [{
        type: 'object', fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'href', title: 'Link (e.g. /services)', type: 'string' },
        ]
      }]
    },
    { name: 'footerTagline', title: 'Footer Tagline', type: 'string' },
    { name: 'footerCopyright', title: 'Footer Copyright Text', type: 'string' },
    {
      name: 'blogSidebarFormUrl',
      title: 'Blog Sidebar GHL Form URL',
      type: 'url',
      description: 'This GHL form appears on the LEFT side of every blog post. Paste your GHL embed URL here.',
    },
  ],
}
