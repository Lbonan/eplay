import Section from '../Section'
import { Item, Items } from './styles'
import aranha from '../../assets/images/banner-homem-aranha.png'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={aranha} alt="imagem da link" />
      </Item>
      <Item>
        <img src={aranha} alt="imagem da link" />
      </Item>
      <Item>
        <img src={aranha} alt="imagem da link" />
      </Item>
      <Item>
        <img src={aranha} alt="imagem da link" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
