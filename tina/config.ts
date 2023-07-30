import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.CLIENT_ID, // Get this from tina.io
  token: process.env.TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",  
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "create_at",  
            label: "Create At",
            ui: {
              component: "date",
              dateFormat: "MM DD YYYY",
            }
          },
          {
            type: "reference",
            collections: ["series"],
            label: "Add to Series",
            name: "series",
          },
          {
            type: "reference",
            collections: ["categories"],
            label: "Categories",
            name: "categories"
          }
        ],
      },
      {
        name: "series",
        label: "Series",
        path: "content/posts/series",
        fields: [
          {
            type: "string",
            name: "series_name",
            label: "Series Name",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Series Description",
            isBody: false,
            required: true,
          }
        ]
      },
      {
        name: "categories",
        label: "Categories",
        path: "content/categories",
        fields: [
          {
            name: "name",
            type: "string",
            label: "Category Name",
            required: true,
          }
        ]
      }
    ],
  },
});
