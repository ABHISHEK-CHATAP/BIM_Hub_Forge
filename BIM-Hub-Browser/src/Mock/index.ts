export const hubs = [
  {
    type: "hubs",
    id: "b.47e894b9-4d04-44b9-8eb6-9564cbd3ade8",
    attributes: {
      name: "nCircle Tech",
      extension: {
        type: "hubs:autodesk.bim360:Account",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/hubs:autodesk.bim360:Account-1.0",
        },
        data: {},
      },
      region: "US",
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/project/v1/hubs/b.47e894b9-4d04-44b9-8eb6-9564cbd3ade8",
      },
    },
    relationships: {
      projects: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/project/v1/hubs/b.47e894b9-4d04-44b9-8eb6-9564cbd3ade8/projects",
          },
        },
      },
    },
  },
];

export const projects = [
  {
    type: "projects",
    id: "b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3",
    attributes: {
      name: "Training Project",
      scopes: [
        "b360project.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3",
        "O2tenant.3405903",
      ],
      extension: {
        type: "projects:autodesk.bim360:Project",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/projects:autodesk.bim360:Project-1.0",
        },
        data: {
          projectType: "BIM360",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/project/v1/hubs/b.47e894b9-4d04-44b9-8eb6-9564cbd3ade8/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3",
      },
    },
    relationships: {
      hub: {
        data: {
          type: "hubs",
          id: "b.47e894b9-4d04-44b9-8eb6-9564cbd3ade8",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/project/v1/hubs/b.47e894b9-4d04-44b9-8eb6-9564cbd3ade8",
          },
        },
      },
      rootFolder: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.JIXNZw6sRvi-LnXfzdbH3Q",
        },
        meta: {
          link: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.JIXNZw6sRvi-LnXfzdbH3Q",
          },
        },
      },
      topFolders: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/project/v1/hubs/b.47e894b9-4d04-44b9-8eb6-9564cbd3ade8/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/topFolders",
          },
        },
      },
      issues: {
        data: {
          type: "issueContainerId",
          id: "480ede71-3517-40c7-a6d8-2edce9490701",
        },
        meta: {
          link: {
            href: "https://developer.api.autodesk.com/issues/v1/containers/480ede71-3517-40c7-a6d8-2edce9490701/issues",
          },
        },
      },
      submittals: {
        data: {
          type: "submittalContainerId",
          id: "0feebdf6-6b26-4631-96e2-8da975b67730",
        },
        meta: {
          link: {
            href: "https://developer.api.autodesk.com/submittals/v1/containers/0feebdf6-6b26-4631-96e2-8da975b67730/items",
          },
        },
      },
      rfis: {
        data: {
          type: "rfisContainerId",
          id: "480ede71-3517-40c7-a6d8-2edce9490701",
        },
        meta: {
          link: {
            href: "https://developer.api.autodesk.com/bim360/rfis/v1/containers/480ede71-3517-40c7-a6d8-2edce9490701/rfis",
          },
        },
      },
      markups: {
        data: {
          type: "markupsContainerId",
          id: "480ede71-3517-40c7-a6d8-2edce9490701",
        },
        meta: {
          link: {
            href: "https://developer.api.autodesk.com/issues/v1/containers/480ede71-3517-40c7-a6d8-2edce9490701/markups",
          },
        },
      },
      checklists: {
        data: {
          type: "checklistsContainerId",
          id: "480ede71-3517-40c7-a6d8-2edce9490701",
        },
        meta: {
          link: {
            href: "https://developer.api.autodesk.com/bim360/checklists/v1/containers/480ede71-3517-40c7-a6d8-2edce9490701/instances",
          },
        },
      },
      cost: {
        data: {
          type: "costContainerId",
          id: "75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3",
        },
        meta: {
          link: {
            href: "https://developer.api.autodesk.com/cost/v1/containers/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/budgets",
          },
        },
      },
      locations: {
        data: {
          type: "locationsContainerId",
          id: "197dfefe-20a3-4660-bbb9-0d7ef4fb564c",
        },
        meta: {
          link: {
            href: "https://developer.api.autodesk.com/bim360/locations/v2/containers/197dfefe-20a3-4660-bbb9-0d7ef4fb564c/trees/default/nodes",
          },
        },
      },
    },
  },
];

export const contents = [
  {
    type: "folders",
    id: "urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ",
    attributes: {
      name: "Plans",
      displayName: "Plans",
      createTime: "2020-01-09T10:20:36.0000000Z",
      createUserId: "",
      createUserName: "",
      lastModifiedTime: "2023-03-01T06:35:50.0000000Z",
      lastModifiedUserId: "BRH25D7AMVRQMPP8",
      lastModifiedUserName: "test user",
      lastModifiedTimeRollup: "2023-03-01T06:37:29.0000000Z",
      objectCount: 9,
      hidden: false,
      extension: {
        type: "folders:autodesk.bim360:Folder",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/folders:autodesk.bim360:Folder-1.0",
        },
        data: {
          visibleTypes: ["items:autodesk.bim360:Document"],
          actions: ["CONVERT", "SPLIT", "OCR"],
          allowedTypes: [
            "folders:autodesk.bim360:Folder",
            "items:autodesk.bim360:File",
            "items:autodesk.bim360:Document",
            "items:autodesk.bim360:TitleBlock",
            "items:autodesk.bim360:ReviewDocument",
          ],
          isRoot: true,
          folderType: "plan",
          namingStandardIds: [],
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.C5re1UAxQTCypkALgXFelQ",
      },
    },
    relationships: {
      contents: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ/contents",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.JIXNZw6sRvi-LnXfzdbH3Q",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "folders",
    id: "urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw",
    attributes: {
      name: "Project Files",
      displayName: "Project Files",
      createTime: "2020-01-09T10:20:37.0000000Z",
      createUserId: "",
      createUserName: "",
      lastModifiedTime: "2023-06-16T09:05:14.0000000Z",
      lastModifiedUserId: "WSXYL6SZ93WF",
      lastModifiedUserName: "Varun Bhartiya",
      lastModifiedTimeRollup: "2023-06-16T09:08:22.0000000Z",
      objectCount: 29,
      hidden: false,
      extension: {
        type: "folders:autodesk.bim360:Folder",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/folders:autodesk.bim360:Folder-1.0",
        },
        data: {
          visibleTypes: ["items:autodesk.bim360:File"],
          actions: ["CONVERT"],
          allowedTypes: [
            "items:autodesk.bim360:File",
            "folders:autodesk.bim360:Folder",
          ],
          isRoot: true,
          folderType: "normal",
          namingStandardIds: [],
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.S8mriCe7RUKIQVLh5E74Yw",
      },
    },
    relationships: {
      contents: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw/contents",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.JIXNZw6sRvi-LnXfzdbH3Q",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw/relationships/links",
          },
        },
      },
    },
  },
];

export const versions = [
  {
    type: "folders",
    id: "urn:adsk.wipprod:fs.folder:co.pwbV5akSTNSH16W2bMND2Q",
    attributes: {
      name: "Plans",
      displayName: "Plans",
      createTime: "2020-03-27T16:00:41.0000000Z",
      createUserId: "WSXYL6SZ93WF",
      createUserName: "Varun Bhartiya",
      lastModifiedTime: "2020-11-20T15:17:52.0000000Z",
      lastModifiedUserId: "WSXYL6SZ93WF",
      lastModifiedUserName: "Varun Bhartiya",
      lastModifiedTimeRollup: "2022-01-18T11:10:51.0000000Z",
      objectCount: 6,
      hidden: false,
      extension: {
        type: "folders:autodesk.bim360:Folder",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/folders:autodesk.bim360:Folder-1.0",
        },
        data: {
          visibleTypes: ["items:autodesk.bim360:Document"],
          actions: ["CONVERT", "SPLIT", "OCR"],
          allowedTypes: [
            "folders:autodesk.bim360:Folder",
            "items:autodesk.bim360:File",
            "items:autodesk.bim360:Document",
            "items:autodesk.bim360:TitleBlock",
            "items:autodesk.bim360:ReviewDocument",
          ],
          namingStandardIds: [],
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.pwbV5akSTNSH16W2bMND2Q",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.pwbV5akSTNSH16W2bMND2Q",
      },
    },
    relationships: {
      contents: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.pwbV5akSTNSH16W2bMND2Q/contents",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.pwbV5akSTNSH16W2bMND2Q/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.pwbV5akSTNSH16W2bMND2Q/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.pwbV5akSTNSH16W2bMND2Q/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn:adsk.wipprod:fs.folder:co.pwbV5akSTNSH16W2bMND2Q/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:DMnj17U6TeGphNCD-wX_0w",
    attributes: {
      displayName: "A1 - Floor Plan",
      createTime: "2023-03-01T06:35:50.0000000Z",
      createUserId: "BRH25D7AMVRQMPP8",
      createUserName: "test user",
      lastModifiedTime: "2023-03-01T06:35:50.0000000Z",
      lastModifiedUserId: "BRH25D7AMVRQMPP8",
      lastModifiedUserName: "test user",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:Document",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:Document-1.0",
        },
        data: {
          sourceFileName: "racadvancedsampleproject.rvt",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:DMnj17U6TeGphNCD-wX_0w",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.C5re1UAxQTCypkALgXFelQ/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3ADMnj17U6TeGphNCD-wX_0w",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.DMnj17U6TeGphNCD-wX_0w?version=1",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:DMnj17U6TeGphNCD-wX_0w/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:DMnj17U6TeGphNCD-wX_0w/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:DMnj17U6TeGphNCD-wX_0w/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:DMnj17U6TeGphNCD-wX_0w/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:DMnj17U6TeGphNCD-wX_0w/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:DMnj17U6TeGphNCD-wX_0w/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:O5eRaaJSQtaH2zvL02ADwA",
    attributes: {
      displayName: "A2 - Sections",
      createTime: "2023-03-01T06:35:50.0000000Z",
      createUserId: "BRH25D7AMVRQMPP8",
      createUserName: "test user",
      lastModifiedTime: "2023-03-01T06:35:50.0000000Z",
      lastModifiedUserId: "BRH25D7AMVRQMPP8",
      lastModifiedUserName: "test user",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:Document",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:Document-1.0",
        },
        data: {
          sourceFileName: "racadvancedsampleproject.rvt",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:O5eRaaJSQtaH2zvL02ADwA",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.C5re1UAxQTCypkALgXFelQ/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3AO5eRaaJSQtaH2zvL02ADwA",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.O5eRaaJSQtaH2zvL02ADwA?version=1",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:O5eRaaJSQtaH2zvL02ADwA/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:O5eRaaJSQtaH2zvL02ADwA/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:O5eRaaJSQtaH2zvL02ADwA/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:O5eRaaJSQtaH2zvL02ADwA/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:O5eRaaJSQtaH2zvL02ADwA/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:O5eRaaJSQtaH2zvL02ADwA/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:E9OW4JQOS7q4RpXaXJuOsw",
    attributes: {
      displayName: "New Construction_racadvancedsampleproject.rvt",
      createTime: "2023-03-01T06:35:50.0000000Z",
      createUserId: "BRH25D7AMVRQMPP8",
      createUserName: "test user",
      lastModifiedTime: "2023-03-01T06:35:50.0000000Z",
      lastModifiedUserId: "BRH25D7AMVRQMPP8",
      lastModifiedUserName: "test user",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:Document",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:Document-1.0",
        },
        data: {
          sourceFileName: "racadvancedsampleproject.rvt",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:E9OW4JQOS7q4RpXaXJuOsw",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.C5re1UAxQTCypkALgXFelQ/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3AE9OW4JQOS7q4RpXaXJuOsw",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.E9OW4JQOS7q4RpXaXJuOsw?version=1",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:E9OW4JQOS7q4RpXaXJuOsw/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:E9OW4JQOS7q4RpXaXJuOsw/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:E9OW4JQOS7q4RpXaXJuOsw/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:E9OW4JQOS7q4RpXaXJuOsw/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:E9OW4JQOS7q4RpXaXJuOsw/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:E9OW4JQOS7q4RpXaXJuOsw/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:Db37NX00QrWlTk9vEHwfLQ",
    attributes: {
      displayName: "racadvancedsampleproject.rvt",
      createTime: "2023-03-01T06:34:13.0000000Z",
      createUserId: "BRH25D7AMVRQMPP8",
      createUserName: "test user",
      lastModifiedTime: "2023-03-01T06:34:14.0000000Z",
      lastModifiedUserId: "BRH25D7AMVRQMPP8",
      lastModifiedUserName: "test user",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:File",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:File-1.0",
        },
        data: {
          sourceFileName: "racadvancedsampleproject.rvt",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:Db37NX00QrWlTk9vEHwfLQ",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.C5re1UAxQTCypkALgXFelQ/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3ADb37NX00QrWlTk9vEHwfLQ",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.Db37NX00QrWlTk9vEHwfLQ?version=1",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:Db37NX00QrWlTk9vEHwfLQ/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:Db37NX00QrWlTk9vEHwfLQ/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:Db37NX00QrWlTk9vEHwfLQ/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:Db37NX00QrWlTk9vEHwfLQ/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:Db37NX00QrWlTk9vEHwfLQ/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:Db37NX00QrWlTk9vEHwfLQ/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:REEyyeHPSB6DrsLUBd-7mw",
    attributes: {
      displayName: "{3D}_racadvancedsampleproject.rvt",
      createTime: "2023-03-01T06:35:50.0000000Z",
      createUserId: "BRH25D7AMVRQMPP8",
      createUserName: "test user",
      lastModifiedTime: "2023-03-01T06:35:50.0000000Z",
      lastModifiedUserId: "BRH25D7AMVRQMPP8",
      lastModifiedUserName: "test user",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:Document",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:Document-1.0",
        },
        data: {
          sourceFileName: "racadvancedsampleproject.rvt",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:REEyyeHPSB6DrsLUBd-7mw",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.C5re1UAxQTCypkALgXFelQ/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3AREEyyeHPSB6DrsLUBd-7mw",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.REEyyeHPSB6DrsLUBd-7mw?version=1",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:REEyyeHPSB6DrsLUBd-7mw/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:REEyyeHPSB6DrsLUBd-7mw/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.C5re1UAxQTCypkALgXFelQ",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:REEyyeHPSB6DrsLUBd-7mw/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:REEyyeHPSB6DrsLUBd-7mw/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:REEyyeHPSB6DrsLUBd-7mw/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:REEyyeHPSB6DrsLUBd-7mw/relationships/links",
          },
        },
      },
    },
  },

  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:ismDEdI_QYqSZoFAs5QuqQ",
    attributes: {
      displayName: "Autodesk Sample.ifc",
      createTime: "2020-03-26T08:17:38.0000000Z",
      createUserId: "WSXYL6SZ93WF",
      createUserName: "Varun Bhartiya",
      lastModifiedTime: "2020-03-26T08:17:39.0000000Z",
      lastModifiedUserId: "WSXYL6SZ93WF",
      lastModifiedUserName: "Varun Bhartiya",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:File",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:File-1.0",
        },
        data: {
          sourceFileName: "Autodesk Sample.ifc",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:ismDEdI_QYqSZoFAs5QuqQ",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.S8mriCe7RUKIQVLh5E74Yw/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3AismDEdI_QYqSZoFAs5QuqQ",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.ismDEdI_QYqSZoFAs5QuqQ?version=1",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:ismDEdI_QYqSZoFAs5QuqQ/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:ismDEdI_QYqSZoFAs5QuqQ/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:ismDEdI_QYqSZoFAs5QuqQ/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:ismDEdI_QYqSZoFAs5QuqQ/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:ismDEdI_QYqSZoFAs5QuqQ/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:ismDEdI_QYqSZoFAs5QuqQ/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:4bznITxbT4C6ngue-ardUA",
    attributes: {
      displayName: "RAC_basic_sample_project.rvt",
      createTime: "2023-06-16T09:05:14.0000000Z",
      createUserId: "WSXYL6SZ93WF",
      createUserName: "Varun Bhartiya",
      lastModifiedTime: "2023-06-16T09:05:41.0000000Z",
      lastModifiedUserId: "WSXYL6SZ93WF",
      lastModifiedUserName: "Varun Bhartiya",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:C4RModel",
        version: "1.0.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:C4RModel-1.0.0",
        },
        data: {},
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:4bznITxbT4C6ngue-ardUA",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.S8mriCe7RUKIQVLh5E74Yw/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3A4bznITxbT4C6ngue-ardUA",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.4bznITxbT4C6ngue-ardUA?version=2",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:4bznITxbT4C6ngue-ardUA/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:4bznITxbT4C6ngue-ardUA/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:4bznITxbT4C6ngue-ardUA/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:4bznITxbT4C6ngue-ardUA/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:4bznITxbT4C6ngue-ardUA/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:4bznITxbT4C6ngue-ardUA/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:we54pjR0Q8SCzxA4ctXNpA",
    attributes: {
      displayName: "Sample Project_A.nwd",
      createTime: "2022-01-21T13:38:11.0000000Z",
      createUserId: "WSXYL6SZ93WF",
      createUserName: "Varun Bhartiya",
      lastModifiedTime: "2022-01-21T13:38:12.0000000Z",
      lastModifiedUserId: "WSXYL6SZ93WF",
      lastModifiedUserName: "Varun Bhartiya",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:File",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:File-1.0",
        },
        data: {
          sourceFileName: "Sample Project_A.nwd",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:we54pjR0Q8SCzxA4ctXNpA",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.S8mriCe7RUKIQVLh5E74Yw/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3Awe54pjR0Q8SCzxA4ctXNpA",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.we54pjR0Q8SCzxA4ctXNpA?version=1",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:we54pjR0Q8SCzxA4ctXNpA/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:we54pjR0Q8SCzxA4ctXNpA/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:we54pjR0Q8SCzxA4ctXNpA/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:we54pjR0Q8SCzxA4ctXNpA/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:we54pjR0Q8SCzxA4ctXNpA/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:we54pjR0Q8SCzxA4ctXNpA/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:88Eg5CgjTZ-mlt2WZyudLg",
    attributes: {
      displayName: "TestProject.rvt",
      createTime: "2023-03-15T15:05:45.0000000Z",
      createUserId: "WSXYL6SZ93WF",
      createUserName: "Varun Bhartiya",
      lastModifiedTime: "2023-03-15T16:34:49.0000000Z",
      lastModifiedUserId: "WSXYL6SZ93WF",
      lastModifiedUserName: "Varun Bhartiya",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:C4RModel",
        version: "1.0.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:C4RModel-1.0.0",
        },
        data: {},
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:88Eg5CgjTZ-mlt2WZyudLg",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.S8mriCe7RUKIQVLh5E74Yw/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3A88Eg5CgjTZ-mlt2WZyudLg",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.88Eg5CgjTZ-mlt2WZyudLg?version=3",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:88Eg5CgjTZ-mlt2WZyudLg/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:88Eg5CgjTZ-mlt2WZyudLg/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:88Eg5CgjTZ-mlt2WZyudLg/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:88Eg5CgjTZ-mlt2WZyudLg/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:88Eg5CgjTZ-mlt2WZyudLg/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:88Eg5CgjTZ-mlt2WZyudLg/relationships/links",
          },
        },
      },
    },
  },
  {
    type: "items",
    id: "urn:adsk.wipprod:dm.lineage:dWM4hZw5Qky2yCstkXhasw",
    attributes: {
      displayName: "rac_advanced_sample_project.rvt",
      createTime: "2020-10-12T04:40:12.0000000Z",
      createUserId: "WSXYL6SZ93WF",
      createUserName: "Varun Bhartiya",
      lastModifiedTime: "2020-10-12T04:40:12.0000000Z",
      lastModifiedUserId: "WSXYL6SZ93WF",
      lastModifiedUserName: "Varun Bhartiya",
      hidden: false,
      reserved: false,
      extension: {
        type: "items:autodesk.bim360:File",
        version: "1.0",
        schema: {
          href: "https://developer.api.autodesk.com/schema/v1/versions/items:autodesk.bim360:File-1.0",
        },
        data: {
          sourceFileName: "rac_advanced_sample_project.rvt",
        },
      },
    },
    links: {
      self: {
        href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:dWM4hZw5Qky2yCstkXhasw",
      },
      webView: {
        href: "https://docs.b360.autodesk.com/projects/75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/folders/urn%3Aadsk.wipprod%3Afs.folder%3Aco.S8mriCe7RUKIQVLh5E74Yw/detail/viewer/items/urn%3Aadsk.wipprod%3Adm.lineage%3AdWM4hZw5Qky2yCstkXhasw",
      },
    },
    relationships: {
      tip: {
        data: {
          type: "versions",
          id: "urn:adsk.wipprod:fs.file:vf.dWM4hZw5Qky2yCstkXhasw?version=1",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:dWM4hZw5Qky2yCstkXhasw/tip",
          },
        },
      },
      versions: {
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:dWM4hZw5Qky2yCstkXhasw/versions",
          },
        },
      },
      parent: {
        data: {
          type: "folders",
          id: "urn:adsk.wipprod:fs.folder:co.S8mriCe7RUKIQVLh5E74Yw",
        },
        links: {
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:dWM4hZw5Qky2yCstkXhasw/parent",
          },
        },
      },
      refs: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:dWM4hZw5Qky2yCstkXhasw/relationships/refs",
          },
          related: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:dWM4hZw5Qky2yCstkXhasw/refs",
          },
        },
      },
      links: {
        links: {
          self: {
            href: "https://developer.api.autodesk.com/data/v1/projects/b.75f14eb8-f19f-49bd-a1e3-0da8fa5f65d3/items/urn:adsk.wipprod:dm.lineage:dWM4hZw5Qky2yCstkXhasw/relationships/links",
          },
        },
      },
    },
  },
];
