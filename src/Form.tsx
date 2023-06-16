function Form(props: any) {
  const { onSubmit } = props;

  return (
    <div className="weather-form">
      <form method="get" onSubmit={onSubmit}>
        <label htmlFor="targetCity">City: </label>
        <input type="text" id="targetCity" name="city" placeholder="Enter your city" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Form