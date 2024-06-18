import "./App.css";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import { Routerprovider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <Routerprovider router={route}></Routerprovider>
    </div>
  );
}

export default App;
