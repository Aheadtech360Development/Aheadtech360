export default {
  name: 'faqItem',
  title: 'FAQ Items',
  type: 'document',
  fields: [
    { name: 'question', title: 'Question', type: 'string' },
    { name: 'answer', title: 'Answer', type: 'text' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
}
