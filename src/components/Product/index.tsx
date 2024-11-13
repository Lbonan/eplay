import Tag from '../Tag'

import { Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non dolorem
      sit laboriosam voluptate perspiciatis modi molestiae, nisi itaque! Eius
      enim ducimus excepturi voluptas, illum consequuntur quis perferendis modi
      asperiores.
    </Descricao>
  </Card>
)

export default Product
