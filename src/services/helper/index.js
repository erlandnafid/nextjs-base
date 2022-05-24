import moment from 'moment'
import nookies, { parseCookies, setCookie, destroyCookie } from 'nookies'
import { toast } from 'react-toastify'

class helpers {
  cookieGet = (req) => {
    if (process.browser) {
      const cookies = parseCookies()
      return cookies[req.name]
    } else {
      const cookies = nookies.get(req.ctx)
      return cookies[req.name]
    }
  }

  cookieSet = (req) => {
    if (process.browser) {
      setCookie(null, req.name, req.value, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
    } else {
      nookies.set(req.ctx, req.name, req.value, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
    }
  }

  cookieRemove = (req) => {
    if (process.browser) {
      destroyCookie(null, req.name)
    } else {
      destroyCookie(req.ctx, req.name, {
        path: '/',
      })
    }
  }

  notification = (type, payload) => {
    if (type === 'success') {
      toast.success(payload)
    } else {
      typeof payload === 'string' ? toast.error(payload) : toast.error(payload.message)
    }
  }

  isAuthenticated = (ctx) => {
    let is_authenticated = false
    const cookies = nookies.get(ctx)
    const token = cookies.e12L4nd
    const token_verification = cookies.n4f1D

    if (token && token_verification && token === token_verification) {
      is_authenticated = true
    }

    return is_authenticated
  }

  currency = (value) => {
    let v = value

    if (typeof value === 'string') {
      v = parseFloat(value)
    }

    const numberFormat = new Intl.NumberFormat(process.env.NEXT_PUBLIC_COUNTRY_CODE_CURRENCY, {
      style: 'currency',
      currency: process.env.NEXT_PUBLIC_COUNTRY_CURRENCY,
      currencyDisplay: 'code',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })

    return numberFormat.format(v)
  }

  date = (date, format) =>
    format ? moment(date).format(format) : moment(date).format('YYYY-MM-DD')
}

const helper = new helpers()
export default helper