import "../styles/permNumber.css";
import PermText from "../elements/PermText";
import { constant, permNumFromArray, permArrayFromNum } from "../utils";

export default function PermNumber(props){
  const {USER, GROUP, OTHERS, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN} = constant;
  const {permUser, permObj, setPermission} = props;

  const keyPress = (key, usr) => {
    if([ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN].includes(key))
      setPermission({payload: {user: usr, perms: permArrayFromNum(+key)}});
  };

  const isDisabled = usr => { return permUser !== usr };

  return (
    <div className="permNumber">
      <PermText disabled={isDisabled(USER)} keyPress={key => keyPress(key, USER)}
        value={permNumFromArray(permObj, USER)}
      />

      <PermText disabled={isDisabled(GROUP)} keyPress={key => keyPress(key, GROUP)}
        value={permNumFromArray(permObj, GROUP)}
      />

      <PermText disabled={isDisabled(OTHERS)} keyPress={key => keyPress(key, OTHERS)}
        value={permNumFromArray(permObj, OTHERS)}
      />
    </div>
  );
}
