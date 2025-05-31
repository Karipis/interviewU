import { useRef } from 'react';
import './App.css';

function App() {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset
      textarea.style.height = `${textarea.scrollHeight}px`; // Set to content height
    }
  };

  return (
    <div className="App">

      <h1 style={{textAlign: "center",display: "flex",justifyContent: "center",alignItems: "center",gap: "10px"}}>Hi, I'm the <div style={{width: "15px", height:"15px", backgroundColor: "rgb(76, 105, 250)",borderRadius: "50%",display: "inline-block"}}></div> interviewU AI assistant.</h1>
      <p style={{textAlign: "center"}}>You can tell me what position you want to interview for or give me an idea by uploading your CV.</p>

      <div style={{width: 800, display: "flex", flexDirection: "column", gap: "20px", fontSize: "15px"}}>
        <p className='message'>I want to prepare for a frontend developer internship.</p>
        <p className='message ai'>I’m excited to help you prepare for your frontend developer internship! To get started, tell me about your current experience and what areas you'd like to focus on—technical skills, interview questions, or resume tips. Let’s build your confidence together!</p>
      </div>
        
      <div id='input-container'>
        <textarea
          id="question-input"
          ref={textareaRef}
          onInput={handleInput}
          placeholder='What role are you interested in?'
          rows={1} // optional
        ></textarea>

        <div id="button-container">
          <div id='attach-button' className='button'>
            <input type="file" id="file-input" />
            <i className="fa-solid fa-address-card" id='clip-icon'/>
          </div>

          


          <button id='' className='button'>
           <i class="fa-solid fa-microphone"></i>
          </button>
          <button id='enter-button' className='button'>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
