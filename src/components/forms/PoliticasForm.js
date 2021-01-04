import React from "react";
import SelectForm from "./SelectForm";

class PoliticasForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  handleSelect() {

  }
  render(){
    return(
      <React.Fragment>
        <SelectForm
          description="conjunto de políticas  para la seguridad de la información"
          value="no realizado"
          handleSelect={this.handleSelect}
        />
        <SelectForm
          description="revicion de las políticas de seguridad de la información"
          value="no realizado"
          handleSelect={this.handleSelect}
        />
      </React.Fragment>
    );
  }
}
export default PoliticasForm;