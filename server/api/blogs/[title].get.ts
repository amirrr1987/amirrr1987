import * as cheerio from 'cheerio'

export default defineEventHandler(async (event) => {
  const title = getRouterParam(event, 'title')
  if (!title) {
    throw createError({ statusCode: 400, statusMessage: 'Missing title' })
  }

  const html = await $fetch<string>(`https://css-tricks.com/${title}`)
  const $ = cheerio.load(html)
  const article: string[] = []

  $('.article-content').each((_index, element) => {
    article.push($(element).html() ?? '')
  })

  return article
})
