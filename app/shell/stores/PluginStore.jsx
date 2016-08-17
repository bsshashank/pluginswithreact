import { Store, toImmutable } from 'nuclear-js'
import PluginsManager from '../pluginManager/manager'
import {
  MOUNT_REGISTERED_PLUGINS,
  REGISTER_MOUNT_PLUGIN,
} from '../types/actionTypes'

var RegisteredPlugins = PluginsManager.getRegisteredPlugins();
console.log('registered plugins ' + JSON.stringify(RegisteredPlugins));

export default Store({
  getInitialState() {
    return toImmutable([])
  },

  initialize() {
    this.on(MOUNT_REGISTERED_PLUGINS, mountRegisteredPlugins);
    this.on(REGISTER_MOUNT_PLUGIN, registerMountPlugin);
  }
})

function mountRegisteredPlugins(state) {
  return toImmutable(PluginsManager.getRegisteredPlugins());
}

function registerMountPlugin(state, { newPlugin }) {
  return state.concat(newPlugin);
}
