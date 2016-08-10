import reactor from './reactor'
import {
    REGISTER_COMPONENT,
    MOUNT_COMPONENT,
} from './actionTypes'

export default {
  registerComponent(component) {
      reactor.dispatch(REGISTER_COMPONENT, { component })
  },

  mountComponent(compoment) {
    reactor.dispatch(MOUNT_COMPONENT)
  },
}
