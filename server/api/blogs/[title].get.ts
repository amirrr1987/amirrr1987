import * as cheerio from "cheerio";

export default defineEventHandler(async (event) => {
    const { title }: any = event.context.params;

    const html: any = await $fetch(`https://css-tricks.com/${title}`);

    const $ = cheerio.load(html);

    // Define an array to store the articles' data
    const article: any[] = [];

    $(".article-content").each((index, element) => {
        const tag = $(element);
        article.push(tag);
    });

    console.log("🚀 ~ defineEventHandler ~ article:", article);
    return article;
});