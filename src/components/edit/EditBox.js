import React from 'react';
import PoliticasForm from "../forms/PoliticasForm"
const EditBox = ({props}) => {

  const toggleForms = () => {
  if(props.politicasVisible === true) return <PoliticasForm/>;
  else if(props.telesVisible === true) return <h1>telesvisible es true</h1>
  else if(props.desarrollosVisible === true)
    return <h1>desarrollos visible es true</h1>
    else return "";
  };
  return (
    <div className="feature-banner">
      <div className="feature-banner-box">{toggleForms()}

      </div>
    </div>
  )
}

export default EditBox;