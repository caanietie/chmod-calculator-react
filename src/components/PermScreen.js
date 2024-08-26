import "../styles/permScreen.css";
import {constant}  from "../utils";

export default function PermScreen(props){
  const {permObject} = props;
  const {USER, GROUP, OTHERS} = constant;

  const permScreen = [USER, GROUP, OTHERS].map((ele, k1) => (
    <div key={k1}>{
        permObject[ele].map((perm, k2) => (
          <span key={k2}>{perm}</span>
        ))
    }</div>
  ));

  return (
    <div className="permScreen">
      {permScreen}
    </div>
  );
}
