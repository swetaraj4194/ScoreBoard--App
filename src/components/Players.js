import "../App.css";
export default function Players(props) {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };

  return (
    <li className="Players">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />

      <p>
        {" "}
        <b>{props.name}</b>
      </p>
      <p>(score: {props.score})</p>
      <p>
        {" "}
        <button class="pushable" onClick={onClickIncrement}>
          <span class="front">Increment</span>
        </button>
      </p>
    </li>
  );
}
