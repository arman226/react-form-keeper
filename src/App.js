import "./App.css";
import validate, { isEmailAddress, isMobileNumber } from "hooks";

function App() {
  const fields = {
    name: {
      isRequired: true,
      validator: isEmailAddress,
      errorMessage: "invalid Email Address",
    },
    address: {
      isRequired: false,
      validator: isMobileNumber,
      errorMessage: "invalid Mobile Number",
    },
  };
  const { state, updateFieldValue, isDisabled } = validate(fields);

  const handleButtonClick = (e) => {};

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    updateFieldValue(id, value);
  };
  return (
    <div className='App'>
      <form>
        <input id='name' type='text' onChange={handleOnChange} /> <br />
        <p>{state["name"].error}</p>
        <input id='address' type='text' onChange={handleOnChange} />
        <br />
        <p>{state["address"].error}</p>
        <button type='button' title='check' onClick={handleButtonClick}>
          {isDisabled ? "disabled" : "Congrats"}
        </button>
      </form>
    </div>
  );
}

export default App;
