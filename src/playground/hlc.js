import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div style={{color:"blue",fontSize:"2rem"}}>
    <h1>Info (unutrasnja com..)</h1>
    <p> This is {props.info}</p>
  </div>
);

const withAdminLoging = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p style={{color:"red",fontSize:"5rem"}}>Ovo su privatne informacije</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo1 = withAdminLoging(Info);
const AdminInfo = withAdminLoging(AdminInfo1);
ReactDOM.render(
  <AdminInfo isAdmin={true} info="Ovo su informacije iz info komponente" />,
  document.getElementById("app")
);
