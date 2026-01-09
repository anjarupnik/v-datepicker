import type { App } from 'vue'
import VDatePicker from './VDatePicker.vue'

export { VDatePicker }

export default {
  install: (app: App) => {
    app.component('VDatePicker', VDatePicker)
  }
}
