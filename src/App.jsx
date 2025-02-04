import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="container-fluid p-0">
      <MyNav></MyNav>
      <div className="container mt-3">
        <Welcome></Welcome>
        <AllTheBooks genre="fantasy"></AllTheBooks>
      </div>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
