import endpoint from '@services/endpoints'
import helper from '@services/helpers'
import axios from 'axios'

class https {
  todoPost = async (body) => {
    try {
      const res = await axios.post(`${endpoint.host()}/todo`, body, {
        headers: endpoint.headersAuth(),
      })

      if (res.status === 200) {
        helper.cookieSet({ name: 'token', value: res.data.data.result.token })
        helper.cookieSet({ name: 'token_verification', value: res.data.data.result.token })
      }

      return res.data
    } catch (error) {
      helper.notification('error', error)
      return error
    }
  }

  todoGet = async () => {
    try {
      const res = await axios.post(`${endpoint.host()}/todo`, {
        headers: endpoint.headers(),
      })

      return res.data
    } catch (error) {
      helper.notification('error', error)
      return error
    }
  }
}

const http = new https()
export default http
