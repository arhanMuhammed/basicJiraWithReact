import { useContext, useState } from "react";
import Metods from "../context/metods";

export function TaskCard(props) {
  const { deleteData, updateData } = useContext(Metods);

  const updatePageOn = () => {
    setBaslik(props.task.baslik);
    setAciklama(props.task.aciklama);
    setShowEdit(true);
  };

  const updatePageOff = () => {
    setBaslik("");
    setAciklama("");
    setShowEdit(false);
  };

  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  const info = (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>{props.task.baslik}</h3>
          <h4>Açiklama</h4>
          <p> {props.task.aciklama} </p>
        </div>
        <div className="card-footer">
          <button
            className="button is-success is-rounded is-fullwidth"
            style={{ margin: "10px" }}
            onClick={() => {
              updatePageOn();
            }}
          >
            GÜNCELLE
          </button>
          <button
            className="button is-success is-rounded is-fullwidth"
            style={{ margin: "10px" }}
            onClick={() => {
              deleteData(props.task.id);
            }}
          >
            SİL
          </button>
        </div>
      </div>
    </div>
  );

  const edit = (
    <div className="card">
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
        <div className="card-footer">
          <button
            className="button is-success is-rounded is-fullwidth"
            style={{ margin: "10px" }}
            onClick={() => {
              updateData(props.task.id, baslik, aciklama, updatePageOff);
            }}
          >
            GÜNCELLE
          </button>
        </div>
      </div>
    </div>
  );
  return showEdit ? edit : info;
}

export default TaskCard;
