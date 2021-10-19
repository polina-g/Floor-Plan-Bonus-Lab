import "./Bath.css";

function Bath(props) {
  return (
    <div className={`${props.size}Bath Bath`}>
      <h1>{props.size} Bath</h1>
    </div>
  );
}

export default Bath;
