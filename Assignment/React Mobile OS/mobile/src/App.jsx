import logo from './logo.svg';
import './App.css';

function App() {
   let n = ["Mobile", "Blckberry", "iPhone", "Windos Phone"]
  let n2 = ["Sumsung", "HTC", "Micromaxx", "Apple"]
  return (
    <div className="">
    <h1>Mobile Operating System</h1>
    {n.map((e) => (
      <Listitems list={e} />
    ))}

    <h1>Mobile Manufacturers</h1>
    {n2.map((e) => (
      <Listitems list={e} />
    ))}
    
    </div>
  );
}

function Listitems({ list }) {
  return <ul><li> {list}</li></ul>
}

export default App;
