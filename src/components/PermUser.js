import PermType from "../elements/PermElement";

export default function PermUser(props){
  const {permUser, setPermission} = props;

  return (
    <div>
      <PermType divStyle={{marginRight: 20}} inputName="ugo" labelText="User Permission"
        inputType="radio" checked={permUser === "user"} onClick={() => setPermission("user")}
      />

      <PermType divStyle={{marginRight: 20}} inputName="ugo" labelText="Group Permission"
        inputType="radio" checked={permUser === "group"} onClick={() => setPermission("group")}
      />

      <PermType divStyle={{marginRight: 20}} inputName="ugo" labelText="Others Permission"
        inputType="radio" checked={permUser === "others"} onClick={() => setPermission("others")}
      />
    </div>
  );
}
