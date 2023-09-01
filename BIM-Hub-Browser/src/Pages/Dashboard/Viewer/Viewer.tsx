import React from 'react'
import { ForgeViewer } from "@lagarsoft/forge-viewer-react"
import { getCookie } from '../../../utils/getCookiesData';

const urn = '';
const Viewer = () => {
  const myCookieValue = JSON.parse(getCookie("sessionData") || "{}");
  return (
    <div>
       {myCookieValue.public_token  && (
         <ForgeViewer urn={urn} accessToken={myCookieValue.public_token} />
      )}
    </div>
  )
}

export default Viewer