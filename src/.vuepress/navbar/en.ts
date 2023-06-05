import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Java", icon: "java", link: "/Java/" },
  { text: "Database", icon: "mysql", link: "/DataBase/" },
  { text: "MicroService", icon: "snow", link: "/MicroService/" },
  { text: "Front-end", icon: "safari", link: "/Front-end/" },
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.press/",
  },
]);
