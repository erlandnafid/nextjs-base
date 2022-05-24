import helper from '@services/helpers'

class endpoints {
  host = () => process.env.NEXT_PUBLIC_API_HOST
  headers = () => {
    const res = {
      'Content-Type': 'application/json',
    }
    return res
  }
  headersAuth = (ctx) => {
    const res = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${helper.cookieGet({ name: 'token', ctx })}`,
    }
    return res
  }
}

const endpoint = new endpoints()
export default endpoint
