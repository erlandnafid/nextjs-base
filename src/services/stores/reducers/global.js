import { GLOBAL } from '@services/stores/types'

const initialState = {
  loading: false,
  menu: false,
  banks: [],
  menu_slider: false,
}

const global = (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL.LOADING:
      return { ...state, loading: action.payload }
    case GLOBAL.MENU:
      return { ...state, menu: action.payload }
    case GLOBAL.BANKS:
      return { ...state, banks: action.payload }
    case GLOBAL.MENU_SLIDER:
      return { ...state, menu_slider: action.payload }
    default:
      return state
  }
}

export default global
