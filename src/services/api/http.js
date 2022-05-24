import api from '@services/api'
import helper from '@services/helper'

class https {
  login = (req) => {
    const res = fetch(`${api.host()}/login`, {
      method: 'POST',
      headers: api.headers(),
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((data) => {
        if (Number(data.status_code) === 200) {
          helper.cookieSet({ name: 'token', value: data.data.access_token })
        } else {
          helper.notification('error', data.message)
        }
        return data
      })
      .catch((error) => {
        helper.notification('error', error?.message || 'Sorry, Something went wrong')
      })

    return res
  }
}

const http = new https()
export default http
