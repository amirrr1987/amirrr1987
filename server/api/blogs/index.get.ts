import * as cheerio from 'cheerio'

interface BlogArticle {
  img?: string
  title: string
  excerpt: string
}

export default defineEventHandler(async () => {
  const html = await $fetch<string>('https://css-tricks.com/category/articles/')
  const $ = cheerio.load(html)
  const articles: BlogArticle[] = []

  $('.article-card').each((_index, element) => {
    const img = $(element).find('.article-thumbnail-wrap img').attr('src')
    const title = $(element).find('.article-article h2 a').text().trim()
    const excerpt = $(element)
      .find('.article-article .card-content')
      .text()
      .trim()

    articles.push({ img, title, excerpt })
  })

  return articles
})
