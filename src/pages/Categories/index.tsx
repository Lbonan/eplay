import { useEffect, useState } from 'react'
import { Game } from '../Home'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import fifa from '../../assets/images/fifa_23.png'
import starWars from '../../assets/images/star_wars.png'
import street from '../../assets/images/street_fighter.png'
import zelda from '../../assets/images/zelda.png'
import battlefild from '../../assets/images/battlefild.png'
import bloodborne from '../../assets/images/bloodborne.png'
import acBlackFlag from '../../assets/images/ac_Black_flag.png'

const Categories = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsportes, setGameEsportes] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])
  const [gameRpg, setGameRgp] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRgp(res))
  }, [])
  return (
    <>
      <ProductsList games={gameAcao} title="Ação" background="black" />
      <ProductsList games={gameEsportes} title="Esportes" background="gray" />
      <ProductsList games={gameLuta} title="Luta" background="black" />
      <ProductsList games={gameRpg} title="RPG" background="gray" />
      <ProductsList
        games={gameSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
