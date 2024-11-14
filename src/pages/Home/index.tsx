import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import fifa from '../../assets/images/fifa_23.png'
import starWars from '../../assets/images/star_wars.png'
import street from '../../assets/images/street_fighter.png'
import zelda from '../../assets/images/zelda.png'
import cod from '../../assets/images/call_of_duty.png'
import nioh from '../../assets/images/nioh2.png'

const promocoes: Game[] = [
  {
    id: 1,
    image: resident,
    title: 'Resident Evil 4 - Remake',
    infos: ['R$ 199,90', '-10%'],
    category: 'Ação',
    system: 'Ps5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 2,
    image: cod,
    title: 'Resident Evil 4 - Remake',
    infos: ['R$ 199,90', '-5%'],
    category: 'Ação',
    system: 'Ps5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 3,
    image: nioh,
    title: 'Resident Evil 4 - Remake',
    infos: ['R$ 199,90', '-10%'],
    category: 'Ação',
    system: 'Ps5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 4,
    image: fifa,
    title: 'Resident Evil 4 - Remake',
    infos: ['R$ 199,90', '-10%'],
    category: 'Ação',
    system: 'Ps5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    image: diablo,
    title: 'Diablo 4',
    infos: ['05/04'],
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.'
  },
  {
    id: 6,
    image: starWars,
    title: 'Star Wars Jedi Survivor',
    infos: ['05/04'],
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...'
  },
  {
    id: 7,
    image: street,
    title: 'Street Fighter 6',
    infos: ['05/04'],
    category: 'Luta',
    system: 'ps5',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.'
  },
  {
    id: 8,
    image: zelda,
    title: 'The Legend of Zelda - TOK',
    infos: ['05/04'],
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
