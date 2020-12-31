import React from "react";
import { ReactComponent as PoliticasImg } from "../../assets/styles/images/img1.svg";
import { ReactComponent as teleImg } from "../../assets/styles/images/img2.svg";
import { ReactComponent as desarrolloImg } from "../../assets/styles/images/img3.svg";
import FeatureItem from "../edit/FeatureItem"

const FeatureList = ({handleClick}) => {

  return(
    <div className="feature-list">
      <FeatureItem
        text="Politicas de seguridad"
        ImgComponent={PoliticasImg}
        handleClick={handleClick.bind(this, "politicasVisible")}
      />
      <FeatureItem
        text="seguridad de las telecuminicaciones"
        ImgComponent={teleImg}
        handleClick={handleClick.bind(this, "telesVisible")}
      />
      <FeatureItem
        text="adquisición, desarrollo, mantenimiento"
        ImgComponent={desarrolloImg}
        handleClick={handleClick.bind(this, "desarrollosVisible")}
      />
    </div>
  );
}
export default FeatureList;