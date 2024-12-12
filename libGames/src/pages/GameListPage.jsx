import GameList from "../components/GameList/index";
import useGames from "../hooks/useGames";


const GameListPage = () => {
  const { games, removeGame } = useGames();
  return (
    <div>
      <h1>Biblioteca de jogos</h1>
      <GameList games={games} onRemove={removeGame} />
    </div>
  );
};

export default GameListPage;
// useRef e useEffect vamos ver dois hooks
