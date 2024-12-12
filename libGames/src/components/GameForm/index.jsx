import { useState } from "react";

// Capturar os dados do input, depois vai ser enviado para o cadastro,
// E por fim cadastrado na função com o hook personalizado

const GameForm = (props) => {
  const [title, setTitle] = useState("");
  const [capa, setCapa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd({ title: title, capa: capa });
    setTitle("");
    setCapa("");
  };

  return (
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
  );
};

export default GameForm;
