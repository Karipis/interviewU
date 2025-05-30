
import './App.css';


function App() {
  return (
    <div className="App">

      <h3>Hi, I'm the interviewU AI assistant.</h3>

      <div id='input-container'>
        <input type="text" name="" id="question-input"/>
        <button id='enter-button' className='button'><i class="fa-solid fa-arrow-up"></i></button> 

        <div id='attach-button' className='button'>
          <i class="fa-solid fa-address-card" id='clip-icon'/>
          <input type="file" name="" id="file-input"  style={{opacity : 0,cursor : "pointer"}}/>
        </div> 
      </div>
      
    </div>
  );
}

export default App;
