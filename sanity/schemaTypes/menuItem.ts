import { defineField, defineType } from "sanity";

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nama Makanan",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(80),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Main", value: "Main" },
          { title: "Side Dish", value: "Side Dish" },
          { title: "Drink", value: "Drink" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(10).max(300),
    }),
    defineField({
      name: "price",
      title: "Harga (RM)",
      type: "number",
      validation: (Rule) => Rule.required().positive().precision(2),
    }),
    defineField({
      name: "image",
      title: "Gambar",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      price: "price",
      media: "image",
    },
    prepare({ title, price, media }) {
      return {
        title,
        subtitle: price ? `RM ${price}` : "No price",
        media,
      };
    },
  },
});
