import { Fragment, useState } from "react";
interface props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const modit = items.map((item, index) => (
    <li
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      key={item}
      onClick={() => {
        setSelectedIndex(index);
        onSelectedItem(item);
      }}
    >
      {item}
    </li>
  ));
  if (modit.length == 0) {
    return <p>there is no paragrph!!</p>;
  }
  return (
    <Fragment>
      <h1>{heading}</h1>
      <ul className="list-group">{modit}</ul>
    </Fragment>
  );
}

export default ListGroup;
