import React, { useEffect, useState } from "react";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import axios from "axios";
import { getCookie } from "../../../utils/getCookiesData";
import launchViewer from "../Viewer/initializeViewer";

// const renderTree = (node: any) => (
//   <TreeItem
//     key={node.id}
//     nodeId={node.id}
//     label={node.attributes.name || node.attributes.displayName}
//   >
//     {node.children.map((child: any) =>
//       Array.isArray(child.children) ? (
//         renderTree(child)
//       ) : (
//         <TreeItem
//           key={child.id}
//           nodeId={child.id}
//           label={child.attributes.name || child.attributes.displayName}
//           icon={<FolderOpenRoundedIcon />}
//         />
//       )
//     )}
//   </TreeItem>
// );

function CustomTreeView() {
  const [data, setData] = useState<any>([]);

  const myCookieValue = JSON.parse(getCookie("sessionData") || "{}");

  useEffect(() => {
    // Fetch the initial data (root nodes) on page load
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
        const rootNodes = response.data.data.map((hub: any) => ({
          type: hub?.type,
          id: hub?.id,
          attributes: hub?.attributes,
          children: null, // Initialize as null
          // isExpanded: false, // Initially not expanded
          // isLoading: false,
        }));
        setData(rootNodes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(data, "treedata");

  const handleNodeExpand = (event: any, nodeId: any) => {
    

    const headers = {
      Authorization: `Bearer ${myCookieValue.public_token}`,
      "Content-Type": "application/json",
    };
    // Find the node to expand in the data
    const nodeToUpdate = data.find((node: any) => node.id === nodeId);
    if (!nodeToUpdate) return;

    if (nodeToUpdate.children === null) {
      // Fetch data from your API here based on the nodeId
      // nodeToUpdate.isLoading = true;

      axios
        .get(
          `https://developer.api.autodesk.com/project/v1/hubs/${nodeId}/projects`,
          { headers }
        )
        .then((response) => {
          // Update the children of the expanded node
          nodeToUpdate.children = response.data.data.map((project: any) => ({
            type: project?.type,
            id: project?.id,
            attributes: project?.attributes,
            children: [], // Initialize an empty children array for projects
          }));
          // nodeToUpdate.isLoading = false;
          // nodeToUpdate.isExpanded = true;
          setData([...data]); // Update the state to trigger a re-render
        })
        .catch((error) => {
          console.error(error);
          // nodeToUpdate.isLoading = false;
        });
    } else {
      // Toggle the expanded state if children are already present
      // nodeToUpdate.isExpanded = !nodeToUpdate.isExpanded;
      setData([...data]); // Update the state to trigger a re-render
    }
  };

  const handleChildNodeExpand = (event: any, childNodeId: any) => {
    // Make an API call to fetch data for the child node based on childNodeId
    const headers = {
      Authorization: `Bearer ${myCookieValue.public_token}`,
      "Content-Type": "application/json",
    };

    // Find the child node to expand in the data
    const parentNode = data.find(
      (node: any) =>
        node.children &&
        node.children.some((child: any) => child.id === childNodeId)
    );
    

    if (!parentNode) return;

    // Find the child node within the parent node
    const childNodeToUpdate = parentNode.children.find(
      (child: any) => child.id === childNodeId
    );

    if (!childNodeToUpdate) return;

    if (childNodeToUpdate.children.length === 0) {
      // Fetch data from your API here based on the childNodeId
      axios
        .get(
          `https://developer.api.autodesk.com/project/v1/hubs/${parentNode.id}/projects/${childNodeId}/topFolders`,
          { headers }
        )
        .then((response) => {

          // Update the children of the child node
          childNodeToUpdate.children = response.data.data.map((item: any) => ({
            type: item?.type,
            id: item?.id,
            attributes: item?.attributes,
            children: [], // Initialize an empty children array if necessary
          }));

          // Update the state to trigger a re-render
          setData([...data]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Toggle the expanded state if children are already present
      childNodeToUpdate.isExpanded = !childNodeToUpdate.isExpanded;

      // Update the state to trigger a re-render
      setData([...data]);
    }
  };

  const handleSubchildNodeExpand = (subchildNodeId: any) => {
    // Make an API call to fetch data for the subchild node based on subchildNodeId
    const headers = {
      Authorization: `Bearer ${myCookieValue.public_token}`,
      "Content-Type": "application/json",
    };

    // Find the parent node of the subchild node
    const parentNode = data.find(
      (node: any) =>
        node.children &&
        node.children.some(
          (child: any) =>
            child.children &&
            child.children.some(
              (subchild: any) => subchild.id === subchildNodeId
            )
        )
    );

    if (!parentNode) return;

    // Find the child node containing the subchild node
    const childNode = parentNode.children.find(
      (child: any) =>
        child.children &&
        child.children.some((subchild: any) => subchild.id === subchildNodeId)
    );

    if (!childNode) return;

    // Find the subchild node within the child node
    const subchildNodeToUpdate = childNode.children.find(
      (subchild: any) => subchild.id === subchildNodeId
    );

    if (!subchildNodeToUpdate) return;

    if (subchildNodeToUpdate.children.length === 0) {
      // Fetch data from your API here based on the subchildNodeId
      axios
        .get(
          `https://developer.api.autodesk.com/data/v1/projects/${childNode.id}/folders/${subchildNodeId}/contents`,
          { headers }
        ) // Replace YOUR_API_ENDPOINT with the actual endpoint for fetching subchild node data
        .then((response) => {
          // Update the children of the subchild node
          subchildNodeToUpdate.children = response.data.data.map(
            (item: any) => ({
              type: item?.type,
              id: item?.id,
              attributes: item?.attributes,
              children: [], // Initialize an empty children array if necessary
            })
          );

          // Set the subchild node as expanded
          subchildNodeToUpdate.isExpanded = true;

          // Update the state to trigger a re-render
          setData([...data]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Toggle the expanded state if children are already present
      subchildNodeToUpdate.isExpanded = !subchildNodeToUpdate.isExpanded;

      // Update the state to trigger a re-render
      setData([...data]);
    }
  };

  const handleSuperSubchildNodeExpand = (superSubchildNodeId: any) => {
    // Make an API call to fetch data for the super subchild node based on superSubchildNodeId
    const headers = {
      Authorization: `Bearer ${myCookieValue.public_token}`,
      "Content-Type": "application/json",
    };

    // Find the parent node of the super subchild node
    const parentNode = data.find(
      (node: any) =>
        node.children &&
        node.children.some(
          (child: any) =>
            child.children &&
            child.children.some(
              (subchild: any) =>
                subchild.children &&
                subchild.children.some(
                  (superSubchild: any) =>
                    superSubchild.id === superSubchildNodeId
                )
            )
        )
    );
    

    if (!parentNode) return;

    // Find the child node containing the subchild node
    const childNode = parentNode.children.find(
      (child: any) =>
        child.children &&
        child.children.some(
          (subchild: any) =>
            subchild.children &&
            subchild.children.some(
              (superSubchild: any) => superSubchild.id === superSubchildNodeId
            )
        )
    );

    if (!childNode) return;

    // Find the subchild node containing the super subchild node
    const subchildNode = childNode.children.find(
      (subchild: any) =>
        subchild.children &&
        subchild.children.some(
          (superSubchild: any) => superSubchild.id === superSubchildNodeId
        )
    );

    if (!subchildNode) return;

    // Find the super subchild node within the subchild node
    const superSubchildNodeToUpdate = subchildNode.children.find(
      (superSubchild: any) => superSubchild.id === superSubchildNodeId
    );

    if (!superSubchildNodeToUpdate) return;

    if (superSubchildNodeToUpdate.children.length === 0) {
      // Fetch data from your API here based on the superSubchildNodeId
      
      axios
        .get(`https://developer.api.autodesk.com/data/v1/projects/${childNode.id}/items/${superSubchildNodeId}/versions`, { headers }) // Replace YOUR_API_ENDPOINT with the actual endpoint for fetching super subchild node data
        .then((response) => {
          // Update the children of the super subchild node
          superSubchildNodeToUpdate.children = response.data.data.map(
            (item: any) => ({
              type: item?.type,
              id: item?.id,
              attributes: item?.attributes,
              children: [], // Initialize an empty children array if necessary
            })
          );

          // Set the super subchild node as expanded
          superSubchildNodeToUpdate.isExpanded = true;

          // Update the state to trigger a re-render
          setData([...data]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Update the state to trigger a re-render
      setData([...data]);
    }
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeToggle={handleNodeExpand}
    >
      {/* Render your tree nodes here */}
      {data.map((node: any) => (
        <TreeItem
          key={node.id}
          nodeId={node.id}
          label={node.attributes.name} // Adjust this based on your data structure
          onClick={(event) => handleNodeExpand(event, node.id)}
          // endIcon={node.isLoading && 'loading...'}
        >
          {node.children &&
            node.children.map((childNode: any) => (
              <TreeItem
                key={childNode.id}
                nodeId={childNode.id}
                label={childNode.attributes.name} // Adjust this based on your data structure
                onClick={(event) => handleChildNodeExpand(event, childNode.id)}
              >
                {childNode.children &&
                  childNode.children.map((subchildNode: any) => (
                    <TreeItem
                      key={subchildNode.id}
                      nodeId={subchildNode.id}
                      label={subchildNode.attributes.name}
                      onClick={(event) =>
                        handleSubchildNodeExpand(subchildNode.id)
                      }
                    >
                      {subchildNode.children &&
                        subchildNode.children.map((subchildNode: any) => (
                          <TreeItem
                            key={subchildNode.id}
                            nodeId={subchildNode.id}
                            label={
                              subchildNode.attributes.name ||
                              subchildNode.attributes.displayName
                            }
                            onClick={(event) =>
                              handleSuperSubchildNodeExpand(subchildNode.id)
                            }
                          >
                            {subchildNode.children &&
                              subchildNode.children.map(
                                (superSubchildNode: any) => (
                                  <TreeItem
                                    key={superSubchildNode.id}
                                    nodeId={superSubchildNode.id}
                                    label={
                                      superSubchildNode.attributes.createTime ||
                                      superSubchildNode.attributes.createTime
                                    }
                                    onClick={()=>launchViewer('viewerDiv',btoa(superSubchildNode.id))}
                                  />
                                )
                              )}
                          </TreeItem>
                        ))}
                    </TreeItem>
                  ))}
              </TreeItem>
            ))}
        </TreeItem>
      ))}
    </TreeView>
  );
}

const Sidebar = () => {
  return (
    <div
      style={{
        width: "30%",
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
