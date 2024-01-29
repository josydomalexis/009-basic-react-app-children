import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Card>
        <h1>Welcome</h1>
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </Card>
    </div>
  );
}

function Button({children}){
  return(
    <button style={{border:"none", background:"#ccc", margin:"5px", padding:"5px 10px"}}>{children}</button>
  )
}

export default App;
