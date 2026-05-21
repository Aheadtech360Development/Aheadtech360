export default {
  name: 'resource',
  title: 'Resources (Free Downloads)',
  type: 'document',
  fields: [
    { name: 'title', title: 'Resource Title', type: 'string' },
    { name: 'emoji', title: 'Emoji Icon', type: 'string' },
    { name: 'description', title: 'Short Description', type: 'text' },
    { name: 'downloadLabel', title: 'Download Button Text (e.g. Download PDF →)', type: 'string' },
    { name: 'ghlFormUrl', title: 'GHL Form URL for download gate', type: 'url' },
  ],
}
