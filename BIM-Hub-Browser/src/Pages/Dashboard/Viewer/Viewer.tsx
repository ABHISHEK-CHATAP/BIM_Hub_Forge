import React, { useEffect } from "react";
import launchViewer from "./InitializeViewer";

const urn =
  "dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLkRiMzdOWDAwUXJXbFRrOXZFSHdmTFE_dmVyc2lvbj0x";
const Viewer = () => {
 
  useEffect(() => {
    launchViewer("viewerDiv", urn);
  },[]);

  return <div style={{ position:"relative",width: "75%", height: "92vh" }} id="viewerDiv" />;
};

export default Viewer;
