import React from "react";
import { connect } from "react-redux";
import ExpencesListItem from "./ExpenceListItem";
import selectExpences from "../selectors/expenses";
import expenses from "../selectors/expenses";

const ExpenceList = (props) => (
  <div>
    <h1>Expence list</h1>
   
    {props.troskovi.map((trosak) => {
      return <ExpencesListItem key={trosak.id} {...trosak}/>//<li key={trosak.id}>{trosak.description}</li>;
    })}
    
  </div>
);

const mapStateToProps=(state) => {
  return {
    troskovi: selectExpences(state.expenses,state.filters)
  };
}
//const ConnectedExpenceList = connect(mapStateToProps)(ExpenceList);

export default connect(mapStateToProps)(ExpenceList);
