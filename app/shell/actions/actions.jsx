import reactor from '../dispatcher/reactor'
import {
    MOUNT_REGISTERED_PLUGINS,
    REGISTER_MOUNT_PLUGIN,
} from '../types/actionTypes'

export default {
  mountRegisteredPlugins(plugins) {
      reactor.dispatch(MOUNT_REGISTERED_PLUGINS, { plugins })
  },

  registerMountPlugin(newPlugin) {
    reactor.dispatch(REGISTER_MOUNT_PLUGIN, {newPlugin})
  },
}
