import {constant} from "../utils";
import PermButton from "../elements/PermButton";

export default function PermValue(props){
  const {ZERO, ONE, TWO, R_PERM, W_PERM, X_PERM, NO_PERM} = constant;
  const {setPermission, permUser, permObj} = props;

  const isChecked = (idx, prm) => {
    return permObj[permUser][idx] === prm
  }

  return (
    <div className="permValue">
      <PermButton divStyle={{paddingLeft: 5}} inputName="rwx" inputType="checkbox"
        checked={isChecked(+ZERO, R_PERM)} labelText="Read Permission"
        onClick={() => {
          let r = isChecked(+ZERO, R_PERM) ? NO_PERM : R_PERM;
          setPermission({
            payload: {user: permUser, perms: [r, permObj[permUser][1], permObj[permUser][2]]}
          })}}
      />

      <PermButton divStyle={{paddingLeft: 5}} inputName="rwx" inputType="checkbox"
        checked={isChecked(+ONE, W_PERM)} labelText="Write Permission"
        onClick={() => {
          let w = isChecked(+ONE, W_PERM) ? NO_PERM : W_PERM;
          setPermission({
            payload: {user: permUser, perms: [permObj[permUser][0], w, permObj[permUser][2]]}
          })}}
      />

      <PermButton divStyle={{paddingLeft: 5}} inputName="rwx" inputType="checkbox"
        checked={isChecked(+TWO, X_PERM)} labelText="Execute Permission"
        onClick={() => {
          let x = isChecked(+TWO, X_PERM) ? NO_PERM : X_PERM;
          setPermission({
            payload: {user: permUser, perms: [permObj[permUser][0], permObj[permUser][1], x]}
          })}}
      />
    </div>
  );
}
