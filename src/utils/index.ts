import { Game } from '../pages/Home'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accmulator, currentItem) => {
    if (currentItem.prices.current) {
      return (accmulator += currentItem.prices.current)
    }
    return 0
  }, 0)
}
