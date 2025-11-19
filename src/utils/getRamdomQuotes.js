import { motivationalQuotes } from '~/utils/quotes'

export const getRandomMotivationalQuote = () => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length)
  return motivationalQuotes[randomIndex]
}
