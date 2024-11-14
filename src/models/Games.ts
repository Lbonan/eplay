class Game {
  image: string
  title: string
  infos: string[]
  category: string
  system: string
  description: string
  id: number

  constructor(
    image: string,
    title: string,
    infos: string[],
    category: string,
    system: string,
    description: string,
    id: number
  ) {
    this.image = image
    this.title = title
    this.infos = infos
    this.category = category
    this.system = system
    this.description = description
    this.id = id
  }
}

export default Game
