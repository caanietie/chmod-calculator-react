import React, { useState, useReducer } from "react";
import { clone } from "lodash";
import PermUser from "./components/PermUser";
import PermValue from "./components/PermValue";
import PermNumber from "./components/PermNumber";

export default function App(){
  const [permUser, setPermUser] = useState("user");

  const [permObject, setPermObject] = useReducer(
    function(state, action){
      const _state = clone(state);
      const {user, perms} = action.payload;
      _state[user] = perms;
      return _state;
    },
    {user: ["-", "-", "-"], group: ["-", "-", "-"], others: ["-", "-", "-"]}
  );

  const permScreen = ["user", "group", "others"].map((ele, k) => (
    <div key={k}>
      {
        permObject[ele].map((perm, x) => (
          <span key={x} style={{fontSize: 20, padding: 4}}>{perm}</span>
        ))
      }
    </div>
  ));

  return (
    <div className="App">
      <h2 style={{textAlign: "center"}}>Chmod Calculator</h2>

      <div style={{display: "flex", gap: 10, justifyContent: "center", marginBottom: 15}}>
        {permScreen}
      </div>

      <div style={{display: "flex", gap: 20, justifyContent: "center", alignItems: "center"}}>
        <PermUser permUser={permUser}
          setPermission={user => setPermUser(user)}
        />

        <PermValue permUser={permUser} permObj={permObject}
          setPermission={setPermObject}
        />

        <PermNumber permUser={permUser} permObj={permObject}
          setPermission={setPermObject}
        />
      </div>

      <button style={{display: "block", paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, fontSize: 18, borderRadius: 5, border: "none", marginTop: 15, marginLeft: "auto", marginRight: "auto"}}
        onClick={() => {setPermObject({payload: {user: permUser, perms: ["-", "-", "-"]}})}}
      >Clear {permUser} permissions</button>
    </div>
  );
}
