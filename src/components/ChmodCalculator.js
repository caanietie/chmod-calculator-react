import { useState, useReducer } from "react";
import "../styles/chmodCalculator.css";
import { clone } from "lodash";
import { constant } from "../utils";
import PermUser from "./PermUser";
import PermValue from "./PermValue";
import PermScreen from "./PermScreen";
import PermNumber from "./PermNumber";

export default function ChmodCalculator(){
  const {USER, NO_PERM} = constant;
  const [permUser, setPermUser] = useState(USER);

  const [permObject, setPermObject] = useReducer(
    function(state, action){
      const _state = clone(state);
      const {user, perms} = action.payload;
      _state[user] = perms;
      return _state;
    },{
      user: [NO_PERM, NO_PERM, NO_PERM],
      group: [NO_PERM, NO_PERM, NO_PERM],
      others: [NO_PERM, NO_PERM, NO_PERM]
    });

  return (
    <div className="chmodCalculator">
      <h2>Chmod Calculator</h2>

      <PermScreen permObject={permObject}/>

      <div className="permCtl">
        <PermUser permUser={permUser} setPermission={user => setPermUser(user)} />

        <PermValue permUser={permUser} permObj={permObject} setPermission={setPermObject} />

        <PermNumber permUser={permUser} permObj={permObject} setPermission={setPermObject} />
      </div>

      <button className="clearPerm"
        onClick={() => {setPermObject({payload: {user: permUser, perms: [NO_PERM, NO_PERM, NO_PERM]}})}}
      >Clear {permUser} permissions</button>
    </div>
  );
}
