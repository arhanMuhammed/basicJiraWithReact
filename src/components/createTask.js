import React, { useContext, useState } from "react";
import Metods from "../context/metods";

export function CreateTask(props) {
  const { addNewData } = useContext(Metods);

  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");

  const resetInput = () => {
    setBaslik("");
    setAciklama("");
  };

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Lütfen Görev Oluşturun..!</p>
      </header>
      <div className="card-content">
        <div className="content">
          <form>
            <label>
              <span> Görev Başlığı </span>
              <input
                className="input is-primary"
                type="text"
                placeholder="Primary input"
                value={baslik}
                onChange={(e) => setBaslik(e.target.value)}
              />
            </label>
            <label>
              <span> Görev Açıklaması </span>
              <textarea
                className="textarea is-primary"
                placeholder="e.g. Hello world"
                value={aciklama}
                onChange={(e) => setAciklama(e.target.value)}
              ></textarea>
            </label>
          </form>
        </div>
      </div>
      <footer className="card-footer">
        <button
          className="button is-success is-rounded is-fullwidth"
          style={{ margin: "10px" }}
          onClick={() => {
            addNewData(baslik, aciklama, resetInput);
          }}
        >
          KAYDET
        </button>
        {/* <button
          className="button is-success is-rounded is-fullwidth"
          style={{ margin: "10px" }}
          onClick={getServerData}
        >
          GET
        </button>
        <button
          className="button is-success is-rounded is-fullwidth"
          style={{ margin: "10px" }}
          onClick={postServerData}
        >
          POST
        </button> */}
      </footer>
    </div>
  );
}

export default CreateTask;
