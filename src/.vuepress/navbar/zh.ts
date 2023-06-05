import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "Java", icon: "java", link: "/zh/Java/" },
  { text: "数据库", icon: "mysql", link: "/zh/DataBase/" },
  { text: "微服务", icon: "snow", link: "/zh/MicroService/" },
  { text: "前端", icon: "safari", link: "/zh/Front-end/" },
  {
    text: "指南",
    icon: "creative",
    prefix: "/zh/guide/",
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
    text: "V2 文档",
    icon: "note",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
