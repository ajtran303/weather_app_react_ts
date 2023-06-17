import { useState } from "react";

function Form(props: any): JSX.Element {
  const { onSubmit } = props;

  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(): void {
    setIsFocused(true);
  }

  function handleBlur(): void {
    setIsFocused(false);
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "1.5em",
    marginTop: "1.5em",
    boxShadow: "0 0 5px rgba(0, 0, 0, 1)"
  }

  const labelStyle = {
    fontSize: "1.2em"
  }

  const inputStyle = {
    outline: isFocused ? "2px solid blue" : "1px solid black",
    marginBottom: "2px"
  }

  return (
    <form className="weather-form" method="get" onSubmit={onSubmit} style={containerStyle as React.CSSProperties}>
      <label htmlFor="target-city" style={labelStyle as React.CSSProperties}>City: </label>
      <input type="text" id="target-city" name="city" placeholder="Enter your city" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
      <button type="submit">Search</button>
    </form>
  )
}

export default Form