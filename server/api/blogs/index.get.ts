import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const html: any = await $fetch("https://css-tricks.com/category/articles/");

  const $ = cheerio.load(html);

  // Define an array to store the articles' data
  const articles: any[] = [];

  $(".article-card").each((index, element) => {
    const img = $(element).find(".article-thumbnail-wrap img").attr("src");
    const title = $(element).find(".article-article h2 a").text().trim();
    const excerpt = $(element)
      .find(".article-article .card-content")
      .text()
      .trim();

    articles.push({ img, title, excerpt });
  });

  return articles;
});
