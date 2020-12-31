import React from "react";
import "../assets/styles/ViewStyles.sass";
import {ReactComponent as PoliticasImg } from "../assets/styles/images/img1.svg";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empresas: []
    }
  }
  handleClick(){

  }

  render(){
    return(
      <div className="contend">
        <div className="feature-section">
          <div className="feature-list">
            <div className="feature-item" onClick={this.handleClick}>
              <PoliticasImg className="feature-item.img"/>
              <div className="feature-item-text">piliticas de seguridad</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Edit;