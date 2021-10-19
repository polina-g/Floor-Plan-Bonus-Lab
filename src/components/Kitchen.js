import Oven from "./Oven";
import Sink from "./Sink";
import "./Kitchen.css";

function Kitchen(props) {
  return (
    <div className="Kitchen">
      <Oven />
      <Sink />
      <h1>Kitchen</h1>
    </div>
  );
}

export default Kitchen;
