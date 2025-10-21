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
          items: [],
        },
        {
          label: "Mental Model",
          items: [
            {
              label: "목적 vs 도메인",
              slug: "guides/목적vs도메인",
            },
          ],
        },
      ],
    }),
  ],
});
