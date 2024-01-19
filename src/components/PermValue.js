import PermType from "../elements/PermElement";

export default function PermValue(props){
  const {setPermission, permUser, permObj} = props;

  return (
    <div>
      <PermType divStyle={{paddingLeft: 5}} inputName="rwx" inputType="checkbox"
        checked={permObj[permUser][0] === "r"} labelText="Read Permission"
        onClick={() => {
          let r = permObj[permUser][0] === "-" ? "r" : "-";
          setPermission({
            payload: {user: permUser, perms: [r, permObj[permUser][1], permObj[permUser][2]]}
          })}}
      />

      <PermType divStyle={{paddingLeft: 5}} inputName="rwx" inputType="checkbox"
        checked={permObj[permUser][1] === "w"} labelText="Write Permission"
        onClick={() => {
          let w = permObj[permUser][1] === "-" ? "w" : "-";
          setPermission({
            payload: {user: permUser, perms: [permObj[permUser][0], w, permObj[permUser][2]]}
          })}}
      />

      <PermType divStyle={{paddingLeft: 5}} inputName="rwx" inputType="checkbox"
        checked={permObj[permUser][2] === "x"} labelText="Execute Permission"
        onClick={() => {
          let x = permObj[permUser][2] === "-" ? "x" : "-";
          setPermission({
            payload: {user: permUser, perms: [permObj[permUser][0], permObj[permUser][1], x]}
          })}}
      />
    </div>
  );
}
