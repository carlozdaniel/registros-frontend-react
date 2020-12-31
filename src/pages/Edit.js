import React from "react";
import "../assets/styles/ViewStyles.sass";
import EditBox from "../components/edit/EditBox";
import FeatureList from "../components/edit/FeatureList";
class Edit extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      politicasvisible: false,
      telesVisible: false,
      desarrolloVisible: false
    };
  }
  toggleViews(currentkey){
    Object.keys(this.state).forEach (key => {
      this.setState({
        [key]: false
      });
    });
    this.setState({
      [currentkey]: !this.state[currentkey]
    })

  }

  render(){
    return(
      <div className="contend">
        <div className="feature-section">
          <FeatureList handleClick={this.toggleViews.bind(this)}/>
          <EditBox props={this.state}/>
        </div>
      </div>
    );
  }
}
export default Edit;