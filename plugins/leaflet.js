import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
export default defineNuxtPlugin((nuxtApp) => {
nuxtApp.vueApp.component('LMap',LMap)
nuxtApp.vueApp.component('LTileLayer',LTileLayer)

})