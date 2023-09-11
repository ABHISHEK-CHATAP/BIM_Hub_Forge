import { useEffect, useState } from "react";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import axios from "axios";
import API from "../../../api";
import { getCookie } from "../../../utils/getCookiesData";
import launchViewer from "../Viewer/initializeViewer";
import { useNavigate } from "react-router-dom";

function CustomTreeView() {
  const [data, setData] = useState<any>([]);
  const [expanded, setExpanded] = useState<string[]>([]);
  const myCookieValue = JSON.parse(getCookie("sessionData") || "{}");
  const navigate = useNavigate();

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${myCookieValue.public_token}`,
      "Content-Type": "application/json",
    };

    const apiUrl = "https://developer.api.autodesk.com/project/v1/hubs";
    localStorage.setItem("tokens", JSON.stringify(myCookieValue));
    axios
      .get(apiUrl, { headers })
      .then((response) => {
        if (response.status === 200) {
          const rootNodes = response.data.data.map((hub: any) => ({
            type: hub?.type,
            id: hub?.id,
            attributes: hub?.attributes,
            children: null,
          }));
          setData(rootNodes);
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          localStorage.removeItem("tokens");
          navigate("/");
        }
        console.error(error);
      });
  }, []);

  const handleExpandedNode = (id: string) => {
    if (expanded.includes(id)) {
      setExpanded(
        expanded.filter((item: any) => {
          return item !== id;
        })
      );
    } else {
      setExpanded([...expanded, id]);
    }
  };

  const handleNodeExpand = (event: any, nodeId: any) => {
    handleExpandedNode(nodeId);

    const nodeToUpdate = data.find((node: any) => node.id === nodeId);
    if (!nodeToUpdate) return;
    if (nodeToUpdate.children === null) {
      API.get(
        `https://developer.api.autodesk.com/project/v1/hubs/${nodeId}/projects`
      )
        .then((response) => {
          nodeToUpdate.children = response.data.data.map((project: any) => ({
            type: project?.type,
            id: project?.id,
            attributes: project?.attributes,
            children: [],
          }));
          setData([...data]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setData([...data]);
    }
  };

  const handleChildNodeExpand = (event: any, childNodeId: any) => {
    handleExpandedNode(childNodeId);

    const parentNode = data.find(
      (node: any) =>
        node.children &&
        node.children.some((child: any) => child.id === childNodeId)
    );

    if (!parentNode) return;
    const childNodeToUpdate = parentNode.children.find(
      (child: any) => child.id === childNodeId
    );
    if (!childNodeToUpdate) return;
    if (childNodeToUpdate.children.length === 0) {
      API.get(
        `https://developer.api.autodesk.com/project/v1/hubs/${parentNode.id}/projects/${childNodeId}/topFolders`
      )
        .then((response) => {
          childNodeToUpdate.children = response.data.data.map((item: any) => ({
            type: item?.type,
            id: item?.id,
            attributes: item?.attributes,
            children: [],
          }));
          setData([...data]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setData([...data]);
    }
  };

  const handleSubchildNodeExpand = (subchildNodeId: any) => {
    handleExpandedNode(subchildNodeId);

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
    const childNode = parentNode.children.find(
      (child: any) =>
        child.children &&
        child.children.some((subchild: any) => subchild.id === subchildNodeId)
    );
    if (!childNode) return;
    const subchildNodeToUpdate = childNode.children.find(
      (subchild: any) => subchild.id === subchildNodeId
    );

    if (!subchildNodeToUpdate) return;
    if (subchildNodeToUpdate.children.length === 0) {
      API.get(
        `https://developer.api.autodesk.com/data/v1/projects/${childNode.id}/folders/${subchildNodeId}/contents`
      )
        .then((response) => {
          subchildNodeToUpdate.children = response.data.data.map(
            (item: any) => ({
              type: item?.type,
              id: item?.id,
              attributes: item?.attributes,
              children: [],
            })
          );
          subchildNodeToUpdate.isExpanded = true;
          setData([...data]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      subchildNodeToUpdate.isExpanded = !subchildNodeToUpdate.isExpanded;
      setData([...data]);
    }
  };

  const handleSuperSubchildNodeExpand = (superSubchildNodeId: any) => {
    handleExpandedNode(superSubchildNodeId);

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
    const subchildNode = childNode.children.find(
      (subchild: any) =>
        subchild.children &&
        subchild.children.some(
          (superSubchild: any) => superSubchild.id === superSubchildNodeId
        )
    );
    if (!subchildNode) return;
    const superSubchildNodeToUpdate = subchildNode.children.find(
      (superSubchild: any) => superSubchild.id === superSubchildNodeId
    );
    if (!superSubchildNodeToUpdate) return;
    if (superSubchildNodeToUpdate.children.length === 0) {
      API.get(
        `https://developer.api.autodesk.com/data/v1/projects/${childNode.id}/items/${superSubchildNodeId}/versions`
      )
        .then((response) => {
          superSubchildNodeToUpdate.children = response.data.data.map(
            (item: any) => ({
              type: item?.type,
              id: item?.id,
              attributes: item?.attributes,
              children: [],
            })
          );
          setData([...data]);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setData([...data]);
    }
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleNodeExpand}
    >
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
                                      superSubchildNode.attributes.name ||
                                      superSubchildNode.attributes.displayName
                                    }
                                    onClick={() =>
                                      launchViewer(
                                        "viewerDiv",
                                        btoa(superSubchildNode.id)
                                      )
                                    }
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
