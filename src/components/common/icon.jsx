import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icon = ({ icon, ...rest }) => {
  return <FontAwesomeIcon icon={icon} {...rest} />;
};

export default Icon;
