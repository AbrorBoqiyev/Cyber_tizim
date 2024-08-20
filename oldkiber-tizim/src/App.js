import AllComponents from "./AllComponents";
import { BrowserRouter } from "react-router-dom"
 

function App({title}) {
  return (
    <div className="App">
      <BrowserRouter>
        <AllComponents/>
      </BrowserRouter>
    </div>
  );
}

export default App;
