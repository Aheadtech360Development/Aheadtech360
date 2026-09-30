export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: readonly string[] }
  | { type: 'ol'; items: readonly string[] }

export interface LegalSection {
  title: string
  blocks: readonly LegalBlock[]
}

export interface LegalDocumentMeta {
  title: string
  effective: string
  /** Paragraphs shown in the grey intro band above the sections */
  intro: readonly string[]
}
