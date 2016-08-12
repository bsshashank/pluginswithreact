  import { Store, toImmutable } from 'nuclear-js'
  import {
      ADD_ITEM,
      GET_ITEMS,
  } from '../actionTypes'

  export default Store({
    getInitialState() {
      return toImmutable({ items: [] })
    },

    initialize() {
      this.on(ADD_ITEM, addItem)
      this.on(GET_ITEMS, getItems)
    }
  })

  function addItem(state, { item }) {
    return state.concat(item);
  }

  function getItems(state) {
    return state.get('items');
  }
