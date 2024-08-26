import {constant} from "../utils";
import PermButton from "../elements/PermButton";

export default function PermUser(props){
  const {permUser, setPermission} = props;
  const {USER, GROUP, OTHERS} = constant;

  const isChecked = usr => {
    return permUser === usr;
  }

  return (
    <div className="permUser">
      <PermButton divStyle={{marginRight: 20}} inputName="ugo" labelText="User Permission"
        inputType="radio" checked={isChecked(USER)} onClick={() => setPermission(USER)}
      />

      <PermButton divStyle={{marginRight: 20}} inputName="ugo" labelText="Group Permission"
        inputType="radio" checked={isChecked(GROUP)} onClick={() => setPermission(GROUP)}
      />

      <PermButton divStyle={{marginRight: 20}} inputName="ugo" labelText="Others Permission"
        inputType="radio" checked={isChecked(OTHERS)} onClick={() => setPermission(OTHERS)}
      />
    </div>
  );
}
