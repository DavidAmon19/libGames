import { useState } from "react";

export default function App() {
  const [games, setGames] = useState([]);
  const [title, setTitle] = useState("");
  const [capa, setCapa] = useState("");

  // Função para adicionar jogos, ele precisa de um titulo e uma capa
  const handleAddGame = ({ title, capa }) => {
    // constante que cria um id aleatorio de 1 a 100
    // floor ele arredonda os numeros
    // random ele gera numeros aleatorios
    const id = parseInt(Math.random() * 100);
    const jogo = { id, title, capa };
    // Estou criando um callback com o nome state que pode ser qualquer nome,
    // Para que ele faça uma copia do array original e insira junto com o novo dado
    setGames((state) => [...state, jogo]);
  };

  const handleRemoveGame = (id) => {
    setGames((state) => state.filter((game) => game.id !== id));
  };

  // Se a gente usar um push a modificação sera feita no array original
  // o react não vai entender que o estado foi alterado

  // Essa função é acionada quando enviamos o formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddGame({ title, capa });
    setTitle("");
    setCapa("");
  };

  return (
    <>
      <div>
        <h1>Biblioteca de Jogos</h1>
        <form onSubmit={handleSubmit} action="">
          <div>
            <label htmlFor="title">Título do jogo:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="cover">Capa:</label>
            <input
              type="text"
              value={capa}
              onChange={(e) => setCapa(e.target.value)}
            />
          </div>
          <button>Adicionar</button>
        </form>
        <div>
          {games.map((cada) => (
            <div key={cada.id}>
              <img src={cada.capa} alt="Capa do jogo" />
              <div>
                <h2>{cada.title}</h2>
                <button onClick={() => handleRemoveGame(cada.id)}>Remover</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// let jogos = [
//   {},
//   {},
//   {}
// ]

// let novosJogos = []

// jogo.forEach((cada)=>{
//   novosJogos.push(<h2>{cada.jogo}</h2>)
// })

// useState
// spread operator
// eventos com react
// useRef e useEffect
