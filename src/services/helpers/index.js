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
      payload?.response?.data?.message
        ? toast.error(payload.response.data.message)
        : toast.error(payload?.message || 'Something went wrong')
    }
  }

  isAuthenticated = (ctx) => {
    let is_authenticated = false
    const token = this.cookieGet({ ctx, name: 'token' })
    const token_verification = this.cookieGet({ ctx, name: 'token_verification' })

    if (token && token_verification && token === token_verification) {
      is_authenticated = true
    }

    return is_authenticated
  }

  /**
   * Helper function to format currency
   * @namespace currency
   * @function
   * @param {String} value - input value
   * @returns formated currency
   * @author Erland Nafid <efriskiawan@binar.co.id>
   * @example
   * currency('100000');
   * "Rp 100.000"
   */
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

  /**
   * Helper function to format date
   * @namespace date
   * @function
   * @param {String} date - input date
   * @param {String} format - input format
   * @returns formated date
   * @author Erland Nafid <efriskiawan@binar.co.id>
   * @example
   * date('2022-05-05', 'DD MMM YYYY');
   * "05 May 2022"
   */
  date = (date, format) =>
    format ? moment(date).format(format) : moment(date).format('YYYY-MM-DD')
}

const helper = new helpers()
export default helper
