import React from "react";
import axios from "axios";

class Ejemplo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empresas: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:1500/api/v1/empresas").then(response => {
      this.setState({
        empresas: response.data
      });
    });
  }

  listEmpresas(){
    return this.state.empresas.map(empresa => {
      return(
        <div key={empresa.id}>
          <h1>{empresa.name}</h1>
          {empresa.description}
        </div>
      );
    });
  }

  render(){
    return(
      <div className="App">{this.listEmpresas()}</div>
    );
  }
}
export default Ejemplo;