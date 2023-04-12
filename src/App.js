

import hotBg from "./assets/hot.jpg";
import coldBg from "./assets/cold.jpg";


function App() {
  

  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        
          <div className="container">
            <div className="section section__inputs">
              <input
                
                type="text"
                name="city"
                placeholder="Enter City..."
              />
              <button>°F</button>
            </div>

            <div className="section section__temperature">
              <div className="icon">
                <h3>London,GB</h3>
                <img src="data:image/png;base64,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" alt="weatherIcon" />
                <h3>Sunny</h3>
              </div>

              <div className="temperature">
                <h1> 34°C </h1>
              </div>
            </div>

            {/* bottom description */}
            
          </div>
        
      </div>
    </div>
  );
}

export default App;
