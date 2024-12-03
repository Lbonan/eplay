import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'
import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const { data: Actiongame } = useGetActionGamesQuery()
  const { data: Sportgame } = useGetSportGamesQuery()
  const { data: Fightgame } = useGetFightGamesQuery()
  const { data: Rpggame } = useGetRpgGamesQuery()
  const { data: Simulationgame } = useGetSimulationGamesQuery()

  if (Actiongame && Sportgame && Fightgame && Rpggame && Simulationgame) {
    return (
      <>
        <ProductsList
          games={Actiongame}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={Sportgame}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={Fightgame}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={Rpggame} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={Simulationgame}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
