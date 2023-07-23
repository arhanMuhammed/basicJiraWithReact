import axios from "axios";
import { createContext, useState } from "react";

const Metods = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("http://localhost:3003/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteData = async (id) => {
    await axios
      .delete("http://localhost:3003/posts/" + id)
      .then((res) => {
        //console.log("delete is success");
        getData();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addNewData = async (baslik, aciklama, callback) => {
    //const addTask = async () => {
    //setData({ baslik: baslik, aciklama: aciklama });
    await axios
      .post("http://localhost:3003/posts", {
        baslik: baslik,
        aciklama: aciklama,
      })
      .then((res) => {
        getData();
        callback();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateData = async (id, baslik, aciklama, callback) => {
    // callback input ları boşaltmak için
    await axios
      .put("http://localhost:3003/posts/" + id, {
        id: id,
        baslik: baslik,
        aciklama: aciklama,
      })
      .then((res) => {
        getData();
        callback();
      })
      .catch((error) => console.log(error));
  };

  const values = {
    tasks: data,
    getData,
    deleteData,
    addNewData,
    updateData,
  };

  return <Metods.Provider value={values}>{children}</Metods.Provider>;
}

export { Provider };

export default Metods;
