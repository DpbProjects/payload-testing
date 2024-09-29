import type { Block } from "payload";

export const testimonials: Block = {
    slug: 'testimonials',
    fields: [
      {
        name: 'title',
        type: 'text',
        required: true,
      },
      {
        name: 'description',
        type: 'richText',
        required: true,
      },
    ],
  
}