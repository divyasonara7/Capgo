import{W as t}from"./index.cbb0f783.js";const e={status:"success",version:"",downloaded:"1970-01-01T00:00:00.000Z",id:"builtin",checksum:""};class o extends t{async download(n){return console.warn("Cannot download version in web",n),e}async next(n){return console.warn("Cannot set next version in web",n),e}async isAutoUpdateEnabled(){return console.warn("Cannot get isAutoUpdateEnabled in web"),{enabled:!1}}async set(n){console.warn("Cannot set active bundle in web",n)}async getDeviceId(){return console.warn("Cannot get ID in web"),{deviceId:"default"}}async getPluginVersion(){return console.warn("Cannot get plugin version in web"),{version:"default"}}async delete(n){console.warn("Cannot delete bundle in web",n)}async list(){return console.warn("Cannot list bundles in web"),{bundles:[]}}async reset(n){console.warn("Cannot reset version in web",n)}async current(){return console.warn("Cannot get current bundle in web"),{bundle:e,native:"0.0.0"}}async reload(){console.warn("Cannot reload current bundle in web")}async getLatest(){return console.warn("Cannot getLatest current bundle in web"),{version:"0.0.0",message:"Cannot getLatest current bundle in web"}}async setChannel(n){return console.warn("Cannot setChannel in web",n),{status:"error",error:"Cannot setChannel in web"}}async setCustomId(n){console.warn("Cannot setCustomId in web",n)}async getChannel(){return console.warn("Cannot getChannel in web"),{status:"error",error:"Cannot getChannel in web"}}async notifyAppReady(){return console.warn("Cannot notify App Ready in web"),e}async setMultiDelay(n){console.warn("Cannot setMultiDelay in web",n==null?void 0:n.delayConditions)}async setDelay(n){console.warn("Cannot setDelay in web",n)}async cancelDelay(){console.warn("Cannot cancelDelay in web")}}export{o as CapacitorUpdaterWeb};
