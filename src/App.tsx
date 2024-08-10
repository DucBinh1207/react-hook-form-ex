// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Form from "./components/Form";
import Step from "./components/Step";
import Register from "./pages/Register";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Step />
      <Register />
    </>
  );
}

export default App;
