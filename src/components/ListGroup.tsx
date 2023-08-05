import { Fragment, useState } from "react";

function ListGroup() {
  // let selectedIndex = 0;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = ["Addis Abeba", "Adama", "Hawasa", "BaherDar", "Gonder"];
  const modit = items.map((item, index) => (
    <li
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      key={item}
      onClick={() => setSelectedIndex(index)}
    >
      {item}
    </li>
  ));
  if (modit.length == 0) {
    return <p>there is no paragrph!!</p>;
  }
  return (
    <Fragment>
      <ul className="list-group">{modit}</ul>
    </Fragment>
  );
}

export default ListGroup;
