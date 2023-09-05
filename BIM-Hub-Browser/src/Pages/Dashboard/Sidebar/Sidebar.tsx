import React, { useEffect, useState } from "react";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { projects, contents, versions } from "../../../Mock";
import axios from "axios";
import { getCookie } from "../../../utils/getCookiesData";

const renderTree = (node: any) => (
  <TreeItem
    key={node.id}
    nodeId={node.id}
    label={node.attributes.name || node.attributes.displayName}
  >
    {node.children.map((child: any) =>
      Array.isArray(child.children) ? (
        renderTree(child)
      ) : (
        <TreeItem
          key={child.id}
          nodeId={child.id}
          label={child.attributes.name || child.attributes.displayName}
          icon={<FolderOpenRoundedIcon />}
        />
      )
    )}
  </TreeItem>
);

function CustomTreeView() {
  const [expanded, setExpanded] = useState<any>([]);
  const [projectsData, setProjectsData] = useState<any>([]);
  const [hubs, sethubs] = useState<any>([]);

  const myCookieValue = JSON.parse(getCookie("sessionData") || "{}");

  useEffect(() => {
    // Define the headers with the authorization token
    const headers = {
      Authorization: `Bearer ${myCookieValue.public_token}`,
      "Content-Type": "application/json",
    };

    // Define the API endpoint
    const apiUrl = "https://developer.api.autodesk.com/project/v1/hubs";

    // Make the API call with the headers
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        // Handle the response
        sethubs(response.data.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, []);

  const handleNodeToggle = (event: any, nodeId: any) => {
    console.log(nodeId, "node");

    if (expanded.includes(nodeId)) {
      setExpanded(expanded.filter((item: any) => item !== nodeId));
    } else {
      setExpanded([...expanded, nodeId]);
    }
  };

  useEffect(() => {
    // Define the headers with the authorization token
    const headers = {
      Authorization: `Bearer ${myCookieValue.public_token}`,
      "Content-Type": "application/json",
    };

    // Define the API endpoint
    const apiUrl = `https://developer.api.autodesk.com/project/v1/hubs/${expanded[0]}/projects`;

    // Make the API call with the headers
    if (expanded.length > 0) {
      axios
        .get(apiUrl, { headers })
        .then((response) => {
          // Handle the response
          setProjectsData(response.data.data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
    }
  }, [expanded, myCookieValue.public_token]);

  const treeData = hubs?.map((hub: any) => ({
    type: hub?.type,
    id: hub?.id,
    attributes: hub?.attributes,
    children: projectsData
      ?.filter(
        (project: any) => project?.relationships?.hub?.data?.id === hub?.id
      )
      ?.map((project: any) => ({
        type: project?.type,
        id: project?.id,
        attributes: project?.attributes,
        relationships: project?.relationships.rootFolder,
        children: contents
          .filter(
            (content) =>
              content.relationships.parent.data.id ===
              project.relationships.rootFolder.data.id
          )
          .map((content) => ({
            type: content.type,
            id: content.id,
            attributes: content.attributes,

            children: versions
              .filter(
                (item) => item.relationships.parent.data.id === content.id
              )
              .map((item) => ({
                type: item.type,
                id: item.id,
                attributes: item.attributes,
              })),
          })),
      })),
  }));

  console.log(treeData, "treeData");

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeToggle={handleNodeToggle}
    >
      {treeData?.map((node: any) => renderTree(node))}
    </TreeView>
  );
}

const Sidebar = () => {
  return (
    <div
      style={{
        width: "25%",
        height: "92vh",
        left: 0,
        top: "3em",
        bottom: 0,
        overflowY: "scroll",
        border: "1px solid #3f3f3f",
        overflowX: "hidden",
      }}
    >
      <CustomTreeView />
    </div>
  );
};

export default Sidebar;
