import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://noeye69.com/",
    title: "ごちログ",
    description: "",
    author: "Shingo Kuromoto",
    profile: "",
    ogImage: "/gochilog-og.jpg",
    lang: "ja",
    timezone: "Asia/Tokyo",
    dir: "ltr",
  },

  posts: {
    perPage: 10,
    perIndex: 10,
    scheduledPostMargin: 15 * 60 * 1000,
  },

   features: {
     lightAndDarkMode: true,
     dynamicOgImage: false,
     showArchives: true,
     showBackButton: true,
    
    editPost: {
    enabled: false,
  },

  search: "pagefind",
},

  socials: [],

  shareLinks: [],
});