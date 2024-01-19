export default function PermNumber(props){
  const {permUser, permObj, setPermission} = props;
  const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7"];

  const permFromString = str => {
    switch(str){
      case "r": return 1;
      case "w": return 2;
      case "x": return 4;
      default: return 0;
    }
  };

  const arrayFromPerm = permNum => {
    switch(permNum){
      case 1: return ["r", "-", "-"];
      case 2: return ["-", "w", "-"];
      case 3: return ["r", "w", "-"];
      case 4: return ["-", "-", "x"];
      case 5: return ["r", "-", "x"];
      case 6: return ["-", "w", "x"];
      case 7: return ["r", "w", "x"];
      default: return ["-", "-", "-"];
    }
  };

  const permFromArray = user => {
    return permObj[user].map(str => permFromString(str)).reduce((nm, pm) => nm + pm);
  };

  return (
    <div style={{marginLeft: 20}}>
      <input type="number" min={0} max={7} disabled={permUser !== "user"}
        style={{paddingTop: 12, paddingBottom: 12, marginRight: 10, fontSize: 15, textAlign: "center"}}
        value={permFromArray("user")}
        onKeyPress={ev => {
          if(validKeys.includes(ev.key))
            setPermission({
              payload: {user: "user", perms: arrayFromPerm(+ev.key)}
            });
        }}
      />
      <input type="number" min={0} max={7} disabled={permUser !== "group"}
        style={{paddingTop: 12, paddingBottom: 12, marginRight: 10, fontSize: 15, textAlign: "center"}}
        value={permFromArray("group")}
        onKeyPress={ev => {
          if(validKeys.includes(ev.key))
            setPermission({
              payload: {user: "group", perms: arrayFromPerm(+ev.key)}
            });
        }}
      />
      <input type="number" min={0} max={7} disabled={permUser !== "others"}
        style={{paddingTop: 12, paddingBottom: 12, marginRight: 10, fontSize: 15, textAlign: "center"}}
        value={permFromArray("others")}
        onKeyPress={ev => {
          if(validKeys.includes(ev.key))
            setPermission({
              payload: {user: "others", perms: arrayFromPerm(+ev.key)}
            });
        }}
      />
    </div>
  );
}
