import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(bootstrap)
})
