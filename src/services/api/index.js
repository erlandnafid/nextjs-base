import helper from '@services/helper'

class apis {
  host = () => process.env.NEXT_PUBLIC_API_HOST
  headers = () => {
    const res = {
      'api-key': process.env.NEXT_PUBLIC_API_KEY,
      'Content-Type': 'application/json',
    }
    return res
  }
  headersAuth = (ctx) => {
    const res = {
      'api-key': process.env.NEXT_PUBLIC_API_KEY,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${helper.cookieGet({ name: 'e12L4nd', ctx })}`,
    }
    return res
  }
}

const api = new apis()
export default api
