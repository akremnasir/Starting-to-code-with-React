import { Fragment } from "react";

function ListGroup() {
  const items = ["Addis Abeba", "Adama", "Hawasa", "BaherDar", "Gonder"];
  const modit = items.map((item) => (
    <li className="list-group-item" key={item}>
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
