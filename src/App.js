//import routes
import { Routes, Route, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

//components
import MainNav from "./components/layouts/MainNav";
import AllRoutes from "./pages/Routes";

function App() {
  return (
    <>
      <MainNav />
      <AllRoutes />
    </>
  );
}

export default App;
