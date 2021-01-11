import React from "react";

import { Link } from "react-router-dom";
const EditPage = (props) => {
  console.log(props);
  return (
    <div>
      Edit page
      {/* {props.match.params.id && <span> with id={props.match.params.id}</span>} */}
      <Link to="/edit/1">Item One</Link>
      <Link to="/edit/2">Item Two</Link>
    </div>
  );
};
export default EditPage;
