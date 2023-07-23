import "bulma/css/bulma.css";
import { useContext, useEffect } from "react";
import "./App.css";
import CardList from "./components/cardList";
import CreateTask from "./components/createTask";
import Metods from "./context/metods";

function App() {
  const { getData } = useContext(Metods);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="notification is-primary">
        <CreateTask />
      </div>
      <div>
        <div>
          <h2>GÖREVLER</h2>
        </div>
        <CardList />
      </div>
    </div>
  );
}

export default App;
