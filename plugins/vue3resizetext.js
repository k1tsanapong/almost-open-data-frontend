import VueResizeText from "vue3-resize-text"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('ResizeText', VueResizeText.ResizeText);
});
