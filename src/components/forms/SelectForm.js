import React from 'react';

const SelectForm = ({description,value, handleSelect}) => ( 
   <div className="item-info">
      <p>{description}</p>
        <select defaultValue={value} onChange={handleSelect}>
          <option value="no realizado">no realizado</option>
          <option value="realizado informalmente">realizado informalmente</option>
          <option value="planificado">planificado</option>
          <option value="bien definido">bien definido</option>
          <option value="cuantitativamente controlado">cuantitatibnamente controlado </option>
          <option value="meora continua">mejora continua</option>
        </select>
    </div>
);

export default SelectForm;