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
        <ProductsList games={Actiongame} title="Ação" background="black" />
        <ProductsList games={Sportgame} title="Esportes" background="gray" />
        <ProductsList games={Fightgame} title="Luta" background="black" />
        <ProductsList games={Rpggame} title="RPG" background="gray" />
        <ProductsList
          games={Simulationgame}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
