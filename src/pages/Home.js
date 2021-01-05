import React from "react";
import "../assets/styles/HomeStyles.sass"
import * as empresasActions from "../actions/empresasActions"
import {connect} from "react-redux";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empresas: [],
    };
  }

  componentDidMount() {
   if(!this.props.data) this.props.loadData();
  }

  listEmpresas(){
    return this.state.empresas.map(empresa => {
      return(
        <div key={empresa.id} className="itemList-item">
          <h1>{empresa.name}</h1>
          {empresa.description}
        </div>
      );
    });
  }

  render(){
    return(
      <div className="App">
        <div className="itemList">{this.listEmpresas()}</div>
      </div>
    );
  }
}


const mapStateToProps = reducers => {
  return reducers.empresasReducer;
}

export default connect(mapStateToProps, empresasActions)(Home);