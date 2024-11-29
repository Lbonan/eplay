import { useEffect, useState } from 'react'
import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'

import { formataPreco } from '../ProductsList'
import { useGetFeatureGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeatureGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span>
            <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`product/${game.id}`}
          title="Clique para ver as ofertas"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
