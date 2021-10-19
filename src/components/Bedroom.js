import "./Bedroom.css";

function Bedroom(props) {
  return (
    <div className={`Bedroom${props.bedNum} Bedroom`}>
      <h1>Bedroom {props.bedNum}</h1>
    </div>
  );
}

export default Bedroom;
