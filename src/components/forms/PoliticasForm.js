import React from "react";
import SelectForm from "./SelectForm";

class PoliticasForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "conunto_politicas": "123",
      "revision_politica": "hola"
    };
  }

  SelectConuntoPoliticas(e) {
    this.setState({
      conunto_politicas: e.target.value
    })
  }
  SelectRevisionPoliticas(e) {
    this.setState({
      revision_politica: e.target.value
    })
  }
  sendChanges() {
    console.log(this.state);
  }
  render(){
    return(
      <React.Fragment>
        <SelectForm
          description="conjunto de políticas  para la seguridad de la información"
          value="no realizado"
          handleSelect={this.SelectConuntoPoliticas.bind(this)}
        />
        <SelectForm
          description="revicion de las políticas de seguridad de la información"
          value="no realizado"
          handleSelect={this.SelectRevisionPoliticas.bind(this)}
        />
       <button onClick={this.sendChanges.bind(this)}>actualizar datos</button>
      </React.Fragment>
    );
  }
}
export default PoliticasForm;