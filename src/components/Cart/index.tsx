import Button from '../Button'
import {
  Overlay,
  CartContainer,
  SideBar,
  Price,
  Quantity,
  CartItem
} from './styles'
import cod from '../../assets/images/call_of_duty.png'
import Tag from '../Tag'
const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src={cod} alt="cod" />
          <div>
            <h3>nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={cod} alt="cod" />
          <div>
            <h3>nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Price>
        Total de R$250,00 <span>Em até 6x sem juros</span>
      </Price>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart
