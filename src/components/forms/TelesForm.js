import React from "react";
import SelectForm from "./SelectForm";

class TelesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "controles_red": "no realizado",
      "mecanismo_seg": "no realizado",
      "segregacion_redes": "no realizado",
      "procedimientos": "No realizado",
      "intercambio": "No realizado",
      "mensajeria": "No realizado",
      "confidencialidad": "No realizado"
    };
  }
  handleSelect(key){
    return e => {
      this.setState({
      [key]: e.target.value
      });
    };
  }

  SelectConuntoPoliticas(e) {
    this.setState({
      conunto_politicas: e.target.value
    });
  }
  SelectRevisionPoliticas(e) {
    this.setState({
      revision_politica: e.target.value
    });
  }
  componentDidUpdate(){
    this.sendChanges();
  }

  sendChanges() {
    console.log(this.state);
  }
  render(){
    return(
      <React.Fragment>
        
        <SelectForm
          description="controles de red"
          value="no realizado"
          handleSelect={this.handleSelect("controles_redmecanismo_seg")}
        />
        <SelectForm
          description="mecanismos asociados en a servicios de red"
          value="no realizado"
          handleSelect={this.handleSelect("mecanismo_seg")}
        />
        <SelectForm
          description="segregacion redes"
          value="no realizado"
          handleSelect={this.handleSelect("segregacion_redes")}
        />
        <SelectForm
          description="procedimientos"
          value="no realizado"
          handleSelect={this.handleSelect("procedimientos")}
        />
        <SelectForm
          description="intercambio"
          value="no realizado"
          handleSelect={this.handleSelect("intercambio")}
        />
        <SelectForm
          description="mensajeria"
          value="no realizado"
          handleSelect={this.handleSelect("mensajeria")}
        />
        <SelectForm
          description="confidencialidad"
          value="no realizado"
          handleSelect={this.handleSelect("confidencialidad")}
        />

      </React.Fragment>
    );
  }
}
export default TelesForm;