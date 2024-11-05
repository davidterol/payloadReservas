import type { CollectionConfig } from 'payload'


export const Building: CollectionConfig = {
    slug: 'building',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}