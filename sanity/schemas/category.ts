import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'parentCategory',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'category' }],
      options: {
        filter: 'slug.current != $currentSlug',
        filterParams: { currentSlug: 'undefined' },
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      parent: 'parentCategory.name',
    },
    prepare({ title, parent }) {
      return {
        title: title,
        subtitle: parent ? `Parent: ${parent}` : 'Root category',
      }
    },
  },
})