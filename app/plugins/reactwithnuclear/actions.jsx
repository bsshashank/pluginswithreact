import reactor from './reactor'
import {
    ADD_ITEM,
    GET_ITEMS,
} from './actionTypes'

export default {
  addItem(item) {
      reactor.dispatch(ADD_ITEM,{item})
    },

  getItems() {
    reactor.dispatch(GET_ITEMS)
  },
}
