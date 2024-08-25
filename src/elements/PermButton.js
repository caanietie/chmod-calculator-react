export default function PermButton(props){
  const {divStyle, inputName, checked, onClick, labelText, inputType} = props;

  return (
    <div className="permButton" style={divStyle}>
      <input style={{marginRight: 10}} type={inputType} name={inputName}
        checked={checked} onClick={ev => onClick()}/>
      <label htmlfor={inputName}>{labelText}</label>
    </div>
  );
}
