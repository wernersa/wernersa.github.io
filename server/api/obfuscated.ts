
import { scramble } from 'botex'
// obfuscate the contents of email and phone
const key = import.meta.env.VITE_KEY
const email = import.meta.env.EMAIL
const phone = import.meta.env.PHONE_NUMBER

export default defineEventHandler((event) => {
  return {
    obfuscatedMail: scramble('mailto:' + email, key),
    obfuscatedPhone: scramble('https://wa.me/' + phone + '?text=', key)
  }
})
