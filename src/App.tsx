import Message from "./message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const items = ["Addis Abeba", "Adama", "Hawasa", "BaherDar", "Gonder"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Message />
      <ListGroup
        items={items}
        heading="akrem"
        onSelectedItem={handleSelectItem}
      />
      <Alert>
        <h1>akrem</h1>
       </Alert>
    </div>
  );
}
export default App;
