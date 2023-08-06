import Message from "./message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const items = ["Addis Abeba", "Adama", "Hawasa", "BaherDar", "Gonder"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [colour, setcolor] = useState("primary");
  const [alert, setAlert] = useState(false);
  const clicked = () => {
    alert == false ? setAlert(true) : setAlert(false);
    alert == true ? setcolor("primary") : setcolor("secondary");
  };
  const closeAlert = () => {
    setAlert(false);
    alert == true ? setcolor("primary") : setcolor("secondary");
  };
  return (
    <div>
      <Message />
      <ListGroup
        items={items}
        heading="akrem"
        onSelectedItem={handleSelectItem}
      />
      <Alert alert={alert} closeAlert={closeAlert}>
        <h1>akrem</h1>
      </Alert>
      <Button onClick={clicked} color={colour}>
        My Button
      </Button>
    </div>
  );
}
export default App;
