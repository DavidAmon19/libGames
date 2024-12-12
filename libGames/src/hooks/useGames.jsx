import { useState } from "react";

const useGames = () => {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("jogo");
    // if(!storedGames) return []
    // return JSON.parse(storedGames)
    return storedGames ? JSON.parse(storedGames) : [];
  });

  const handleAddGame = (gameProps) => {
    const id = parseInt(Math.random() * 100);
    const jogo = { id: id, title: gameProps.title, capa: gameProps.capa };
    setGames((state) => {
      const newState = [...state, jogo];
      localStorage.setItem("jogo", JSON.stringify(newState));
      return newState;
    });
  };

  const handleRemoveGame = (id) => {
    // Pega os jogos que eu quero que continue na lista e joga dentro de game, e o ID diferente remove
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("jogo", JSON.stringify(newState));
      return newState;
    });
  };

  return {
    games: games,
    addGame: handleAddGame,
    removeGame: handleRemoveGame,
  };
};

export default useGames;
