export default function PermElement(props){
  const {divStyle, inputName, checked, onClick, labelText, inputType} = props;

  return (
    <div style={divStyle}>
      <input style={{marginRight: 10}} type={inputType} name={inputName}
        checked={checked} onClick={ev => onClick()}/>
      <label htmlfor={inputName}>{labelText}</label>
    </div>
  );
}
