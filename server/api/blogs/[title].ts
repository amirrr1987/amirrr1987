import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const { title }: any = event.context.params;

  const html: any = await $fetch(`https://css-tricks.com/${title}`);

  const $ = cheerio.load(html);

  // Define an array to store the articles' data
  const articles: any[] = [];

  $(".article-content").each((index, element) => {
    console.log("🚀 ~ $ ~ element:", element);
    const tag = $(element);
    console.log("🚀 ~ $ ~ tag:", tag);
  });

  return articles;
});
