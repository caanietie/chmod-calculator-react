import "../styles/permText.css";
import {constant} from "../utils";

export default function PermText(props) {
  const {disabled, keyPress, value} = props;
  const {ZERO, SEVEN} = constant;

  return (
    <div className="permText">
      <input type="number" min={+ZERO} max={+SEVEN} value={value}
        disabled={disabled} onKeyPress={ev => keyPress(ev.key)}
      />
    </div>
  );
}