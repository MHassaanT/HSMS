const AUTH_KEY = 'hsms_auth'
const VALID_EMAIL = 'admin@hsms.com'
const VALID_PASSWORD = 'admin123'

export function login(email: string, password: string): boolean {
  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(AUTH_KEY, '1')
    }
    return true
  }
  return false
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(AUTH_KEY)
  }
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return sessionStorage.getItem(AUTH_KEY) === '1'
}
