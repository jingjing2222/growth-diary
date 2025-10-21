// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Growth Diary",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jingjing2222/growth-diary",
        },
      ],
      sidebar: [
        {
          label: "Engineering",
          items: [
            // Each item here is one entry in the navigation menu.
          ],
        },
        {
          label: "Mental Model",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "목적 지향 사고", slug: "guides/example" },
          ],
        },
        {
          label: "Others",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
