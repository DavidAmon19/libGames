import GameItem from "../GameItem";

const GameList = (props) => {
    return(
        <div>
            {props.game.map((game)=>(
            <GameItem key={game.id} game={game} onRemove={props.onRemove} />
            ))}
        </div>
    )

}

export default GameList;