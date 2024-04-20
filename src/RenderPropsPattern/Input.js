import { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState(null);
  const handleChange = () => {
    setValue();
  };
  return (
    <>
      <input value={value} onChange={handleChange} />
      <br />
      {props.renderTextBelow(value)}
    </>
  );
};

export default Input;
