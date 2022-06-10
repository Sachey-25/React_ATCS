import './App.css';
import Welcome from './Components/Check';
import Technical from './Components/Example';
import Website from './Components/Website';
import Classimpl from './ClassComponent/Welcome';
import Hellojsx from './JSXImpl/JsxHello';
import Greet from './ReactProps/Props';

function App() {
  return (
    <div className="App">
      <h3>Welcome all, My name is React, Lets design something...</h3>
      <Welcome />
      <Technical />
      <Website />
      <Classimpl />
      <Hellojsx />

      <Greet name="Sachin" StyleName="RHBatsman" > 
      <p> Sachin Tendulkar is the god of cricket </p> 
      <button> ClickMe </button></Greet>

      <Greet name="Rohit" StyleName="RHBatsman"> <p>
      Rohit Sharma holds record of hitting double century </p> 
      <button> ClickMe </button></Greet>

      <Greet name="Rahul" StyleName="RHBatsman" > <p>
      Rahul Dravid was the most dependable batsman of Indian cricket team </p> 
      <button> ClickMe </button> </Greet>

      <Greet name="Sourav" StyleName="RHBatsman" > <p>
      Sourav Ganguly was the captain behind the Indian cricker recoginization. </p> 
      <button> ClickMe </button></Greet>

    </div>
  )}

export default App;
