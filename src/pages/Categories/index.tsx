import ProductsList from '../../components/ProductsList'
import Game from '../../models/Games'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import fifa from '../../assets/images/fifa_23.png'
import starWars from '../../assets/images/star_wars.png'
import street from '../../assets/images/street_fighter.png'
import zelda from '../../assets/images/zelda.png'
import battlefild from '../../assets/images/battlefild.png'
import bloodborne from '../../assets/images/bloodborne.png'
import acBlackFlag from '../../assets/images/ac_Black_flag.png'

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
    image: acBlackFlag,
    title: 'Resident Evil 4 - Remake',
    infos: ['R$ 199,90', '-5%'],
    category: 'Ação',
    system: 'Ps5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 3,
    image: battlefild,
    title: 'Resident Evil 4 - Remake',
    infos: ['R$ 199,90', '-10%'],
    category: 'Ação',
    system: 'Ps5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 4,
    image: bloodborne,
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

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
