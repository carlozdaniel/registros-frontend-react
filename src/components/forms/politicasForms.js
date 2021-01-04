import React from "react";

class politicasForm extends React.Component {
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
export default politicasForm;