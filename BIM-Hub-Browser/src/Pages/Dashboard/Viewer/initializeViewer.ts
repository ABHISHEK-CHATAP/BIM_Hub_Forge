import { getCookie } from "../../../utils/getCookiesData";

let viewer: any;

const token = JSON.parse(getCookie("sessionData") || "{}");

function launchViewer(div: string, urn: string) {
  console.log(urn);
  
  const options = {
    env: "AutodeskProduction",
    accessToken: token.public_token,
  };

  // eslint-disable-next-line no-undef
  Autodesk.Viewing.Initializer(options, function () {
   
    viewer = new Autodesk.Viewing.GuiViewer3D(
      document.getElementById(div),
    );
    viewer.start();

    Autodesk.Viewing.Document.load(
      "urn:" + urn,
      function (document:any) {
        const defaultModel = document.getRoot().getDefaultGeometry();
        if (defaultModel) {
          viewer
            .loadDocumentNode(document, defaultModel)
            .then(function (model:any) {
             console.log("Intializing viewer, trying to load next model");
             
            });
        } else {
          console.error("No default geometry found");
        }
      },
      function (error:any) {
        console.error("Error loading document: " + error);
      }
    );
  });
}

export default launchViewer;
