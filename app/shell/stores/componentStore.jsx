import { Store, toImmutable } from 'nuclear-js'
import PluginsManager from '../pluginManager/manager'
import {
  REGISTER_COMPONENT,
  MOUNT_COMPONENT,
} from '../actionTypes'

// import Plugin from '../../plugins/reactwithnuclear/pluginContent'

var RegisteredPlugins = PluginsManager.getRegisteredPlugins();
console.log("Registered Plugins " + JSON.stringify(RegisteredPlugins));
console.log("Plugins " + RegisteredPlugins);

/*var requiredPackages = function (plugins) {
  plugins.map(function(plugin) {
    import plugin from '../../plugins/' + plugin;
  })
}*/

export default Store({
  getInitialState() {
      return toImmutable({
        components:RegisteredPlugins
      })
    },

    initialize() {
      this.on(REGISTER_COMPONENT, registerComponent);
      this.on(MOUNT_COMPONENT, mountComponent);
    }
  })

  function registerComponent(state, { component }) {
    return state.concat(component);
  }

  function mountComponent(state) {
    return state.get('components');
  }
