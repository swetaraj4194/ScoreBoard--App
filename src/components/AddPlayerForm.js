import { useState } from "react";
import "../App.css";
export default function AddPlayerForm(props) {
  const [name, setName] = useState(" ");

  return (
    <div className="AddPlayerForm">
      <p>
        <b>New player</b>:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
        <button
          onClick={() => {
            props.addPlayer(name);
            setName(" ");
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
