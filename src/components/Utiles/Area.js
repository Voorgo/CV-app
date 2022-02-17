const Area = (props) => {
  let {placeholder, name, value, onChange} = props;
  return (
    <textarea placeholder={placeholder} rows={4} className="textArea" name={name} value={value} onChange={onChange}/>
  )
};

export default Area;