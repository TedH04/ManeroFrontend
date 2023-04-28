//Denna component är för backbutton "<", som används på många olika sidor, därför ingen egen partial.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react"
const BackButton = () => {
    return(
        <div className="back-button">
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </div>
    )
};

export default BackButton;
