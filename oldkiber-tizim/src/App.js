import Blog from "./Blog";

function App({title}) {
  return (
    <div className="App">
     <h1 style={{'text-align': 'center'}}>All blogs</h1>
     <Blog message='hello world' number={42} />
     
    </div>
  );
}

export default App;
