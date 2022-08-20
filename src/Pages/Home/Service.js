import React from 'react';
import "../../Styles/Service.css"
const Service = ({service}) => {
  const {img,name,des} = service ;
  return (
    <div className="col-lg-3 g-4">
      <div className="shadow rounded p-3">
        <div className="card-background">
          <img className="image-service" src={img} alt=""   />
          <div className="card-body">
            <h5 className="tainer-heading">{name}</h5>
            <p className="tainer-sub-heading">{des}</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Service;