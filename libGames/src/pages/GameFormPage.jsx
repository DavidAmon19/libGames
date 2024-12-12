import GameForm from "../components/GameForm";
import useGames from "../hooks/useGames";

const GameFormPage = () =>{
    const { addGame } = useGames();

    return(
        <div>
            <h1>Adicionando Jogos</h1>
            <GameForm onAdd={addGame} />
        </div>
    )
}


export default GameFormPage;