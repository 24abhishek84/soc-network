import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardBadge = ({icon, name, counts, classAdd, onClick, addShadow}) => {
  return (
    <div className={`col-lg-3 col-md-6 col-sm-6 col-xs-12 p-4`}>
      <div className={`card card-height border-${classAdd} mx-sm-1 p-3 ${addShadow} add-scale-effect`} style={{ cursor: 'pointer' }} onClick={onClick}>
        <div className={`card border-${classAdd} shadow text-${classAdd} p-3 my-card`} >
          <FontAwesomeIcon
            icon={icon}
          />
        </div>
        <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
          <div className={`text-${classAdd} text-center mt-3`}>
            <h4>{name}</h4>
          </div>
          <div className={`text-${classAdd} text-center mt-2`}>
            <h1>{counts}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardBadge;