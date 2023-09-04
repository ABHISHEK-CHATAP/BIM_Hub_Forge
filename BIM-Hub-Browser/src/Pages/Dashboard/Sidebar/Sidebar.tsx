import React from "react";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { hubs, projects, contents, versions } from "../../../Mock";


const renderTree = (node: any) => (
  <TreeItem key={node.id} nodeId={node.id} label={node.attributes.name || node.attributes.displayName}>
    {node.children.map((child: any) =>
      Array.isArray(child.children) ? (
        renderTree(child)
      ) : (
        <TreeItem
          key={child.id}
          nodeId={child.id}
          label={child.attributes.name || child.attributes.displayName}
        />
      )
    )}
  </TreeItem>
);

function CustomTreeView() {
  const treeData = hubs.map((hub) => ({
    id: hub.id,
    attributes: hub.attributes,
    children: projects
      .filter((project) => project.relationships.hub.data.id === hub.id)
      .map((project) => ({
        id: project.id,
        attributes: project.attributes,
        relationships: project.relationships.rootFolder,
        children: contents
          .filter(
            (content) =>
              content.relationships.parent.data.id ===
              project.relationships.rootFolder.data.id
          )
          .map((content) => ({
            id: content.id,
            attributes: content.attributes,

            children: versions
              .filter(
                (item) => item.relationships.parent.data.id === content.id
              )
              .map((item) => ({
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
    >
      {treeData.map((node) => renderTree(node))}
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
