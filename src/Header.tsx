function Header(): JSX.Element {
  const containerStyle = {
    display: "flex",
    color: "green",
    backgroundColor: "lightgrey"
  }

  const headingStyle = {
    paddingLeft: ".5em"
  }

  return (
    <header style={containerStyle}>
      <h1 style={headingStyle}>Weather</h1>
    </header>
  )
}

export default Header