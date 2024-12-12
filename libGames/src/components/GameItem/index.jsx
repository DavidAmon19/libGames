
const GameItem = (props) => {
    return(
        <div>
            <img src={props.game.capa} alt={`Capa do jogo`} />
            <div>
                <h2>{props.game.title}</h2>
                <button onClick={() => props.onRemove(props.game.id)}> Remover </button>
            </div>
        </div>
    );
};

export default GameItem;