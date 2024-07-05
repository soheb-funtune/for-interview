import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [checkbox, setCheckbox] = useState("");
  const [curdList, setCurdList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editActive, setEditActive] = useState("");

  // console.log({ arr });

  useEffect(() => {
    const fethData = async () => {
      const res = await fetch("https://fakestoreapi.com/products").then((res) =>
        res.json()
      );
      setList(res);
      console.log({ res });
    };
    fethData();
  }, []);

  const handleAdd = () => {
    inputText && setCurdList((pre) => [inputText, ...pre]);
    setInputText("");
  };

  console.log({ editActive });
  return (
    <>
      <h1>APP js file</h1>
      <div>
     

      </div>
    </>
  );
}

export default App;
