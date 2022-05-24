import endpoint from '@services/endpoints'
import helper from '@services/helpers'
import axios from 'axios'

class https {
  loginPost = async (body) => {
    try {
      const res = await axios.post(`${endpoint.host()}/auth/login`, body, {
        headers: endpoint.headers(),
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
}

const http = new https()
export default http
