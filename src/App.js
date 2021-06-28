import './App.css';
import validate from 'hooks/useValidator'

function App() {

  const fields = {
    name: {
      isRequired: true,
    },
    address: {
      isRequired:false
    }
  }
  const {state, updateFieldValue, isDisabled} =validate(fields)

 
const handleButtonClick =(e)=>{

}


const handleOnChange=(e)=>{
  const {id, value} = e.target
  updateFieldValue(id, value)
}
  return (
    <div className="App">
      <form>
        <input id="name" type="text" onChange={handleOnChange} /> <br/>
        <input id="address" type="text" onChange={handleOnChange} /><br/>
        <button type='button' title="check" onClick={handleButtonClick}>{isDisabled?'disabled':'Congrats'}</button>
      </form>
      {JSON.stringify(state)}

    </div>
  );
}

export default App;
