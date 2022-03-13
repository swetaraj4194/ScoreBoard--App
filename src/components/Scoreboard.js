import { useState } from "react";
import Player from "./Players";
import AddPlayerForm from "./AddPlayerForm";


export default function Scoreboard() {
  const [playerDetail, setPlayerDetails] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  //comapring score

  function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
  }

  //comparing name
  function compare_name(player_a, player_b) {
    return player_a.name.localeCompare(player_b.name);
  }

  //increasing score
  const incrementScore = (id) => {
    const new_players_array = playerDetail.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });

    setPlayerDetails(new_players_array);
  };

  //reset the value
  const resetScores = () => {
    const new_players_array = playerDetail.map((player) => ({
      ...player,

      score: 0,
    }));

    setPlayerDetails(new_players_array);
  };

  //randomize value
  const randomizeScores = () => {
    const new_players_array = playerDetail.map((player) => ({
      ...player,

      score: Math.floor(Math.random() * 101),
    }));

    setPlayerDetails(new_players_array);
  };

  const addPlayer = (name) => {
    console.log("Let's add a new player with the name:", name);
    setPlayerDetails([
      ...playerDetail,
      {
        id: Math.random(),
        name,
        score: 0,
      },
    ]);
  };

  //sorting
  const [sort_by, setsort] = useState("score");

  //sorting condition
  const player_sorted = [...playerDetail].sort(
    sort_by === "name" ? compare_name : compare_score
  );

  //adding event listner
  const change_sorting = (event) => {
    console.log("new sort order: ", event.target.value);
    setsort(event.target.value);
  };

  //returning data
  return (
    <div className="Scorebord">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>{" "}
        <button onClick={resetScores}>Reset</button>{" "}
        <button onClick={randomizeScores}>Randomize</button>
      </p>
      <p>Player's scores:</p>
      <ul>
        {player_sorted.map((player) => {
          return (
            <Player
              key={player.id}
              id={player.id}
              name={player.name}
              score={player.score}
              incrementScore={incrementScore}
            />
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
}
