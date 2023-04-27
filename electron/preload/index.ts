const { contextBridge, ipcRenderer } = require("electron");
console.log("reeee");
contextBridge.exposeInMainWorld("electron", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  addListener: () =>
    ipcRenderer.on("pong", (event, args) => console.log("pong", args)),
  // we can also expose variables, not just functions
});
