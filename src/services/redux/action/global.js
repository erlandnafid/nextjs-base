import { GLOBAL } from '@services/redux/type'

const setLoading = (status) => {
  return {
    type: GLOBAL.LOADING,
    payload: status,
  }
}

const setMenu = (status) => {
  return {
    type: GLOBAL.MENU,
    payload: status,
  }
}

const setBanks = (status) => {
  return {
    type: GLOBAL.BANKS,
    payload: status,
  }
}

const setMenuSlider = (status) => {
  return {
    type: GLOBAL.MENU_SLIDER,
    payload: status,
  }
}

export default {
  setLoading,
  setMenu,
  setBanks,
  setMenuSlider,
}
