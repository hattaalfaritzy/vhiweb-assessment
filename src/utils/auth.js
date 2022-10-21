import { parse } from 'cookie';
import jwtDecode from 'jwt-decode';
import initializeBasicAuth from 'nextjs-basic-auth';
import { Cookies } from 'react-cookie';
import { publicRuntimeConfig } from '../config/env';

const {
  NEXT_PUBLIC_JWT_EXPIRATION_IN_HOURS: envCookieExpirationInHours,
} = publicRuntimeConfig;

const cookies = new Cookies();
const cookieName = 'jwt';

const defaultCookieExpirationInHours = 7 * 24;
const cookieAgeInHours = Number(envCookieExpirationInHours || defaultCookieExpirationInHours);
const cookieAge = cookieAgeInHours * 60 * 60 * 1000;

/**
 * Auth utility
 * @module utils/auth
 */

/**
 * Dapetin cookie JWT.<br>
 * Apabila server-side maka ambil dari request header, apabila client-side maka ambil dari object window.
 *
 * @method
 * @category Utilities
 * @param {Object} [req] Object request header
 * @returns {string} String JWT
 */
export const getCookieJWT = (req) => {
  if (typeof window === 'undefined') {
    return parse(req?.headers.cookie || '')[cookieName];
  }
  return cookies.get(cookieName);
};

/**
 * Dapetin JWT yang sudah di-decode menjadi object.<br>
 * Contoh: { id: 12, name: "admin" }
 * Jika tidak terautentikasi maka return object kosong {}.
 *
 * @method
 * @category Utilities
 * @param {object} [req] Object request header
 * @returns {object} Object dari JWT yang telah di-decode
 */
export const getDecodedJWT = (req) => {
  let auth = {};
  try {
    auth = jwtDecode(getCookieJWT(req));
  } catch (err) {
    // Not authenticated
  }
  return auth;
  // IMPORTANT NOTE: if user is not authenticated, auth is equal to {}, NOT undefined or null
};

/**
 * Set cookie JWT
 *
 * @method
 * @category Utilities
 * @param {string} value JWT
 */
export const setCookieJWT = (value) => {
  cookies.set(cookieName, value, {
    secure: false,
    domain: window.location.hostname,
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
    expires: new Date(Date.now() + cookieAge),
  });
};

/**
 * Menghapus cookie JWT
 *
 * @method
 * @category Utilities
 */
export const removeCookieJWT = () => {
  cookies.remove(cookieName, {
    secure: false,
    domain: window.location.hostname,
    path: '/',
    httpOnly: false,
    sameSite: 'lax',
  });
};

const BASIC_AUTH_USERS = [
  { user: 'admin', password: process.env.PASSWORD },
];

/**
 * Mengecek apakah string mengandung "ECOMM_CONSULTANT_ADMIN"
 *
 * @method
 * @category Utilities
 * @param {string} roles Boolean
 * @returns {boolean} true or false
 */
export const isConsultantAdmin = (roles) => (
  !!roles?.includes('ECOMM_CONSULTANT_ADMIN')
);

/**
 * Mengecek apakah string mengandung "ECOMM_CONSULTANT"
 *
 * @method
 * @category Utilities
 * @param {string} roles Boolean
 * @returns {boolean} true or false
 */
export const isConsultantNonAdmin = (roles) => (
  !!roles?.includes('ECOMM_CONSULTANT')
);

/**
 * Mengecek apakah string mengandung "ECOMM_CONSULTANT_ADMIN" atau "ECOMM_CONSULTANT"
 *
 * @method
 * @category Utilities
 * @param {string} roles Boolean
 * @returns {boolean} true or false
 */
export const isConsultant = (roles) => (
  isConsultantAdmin(roles) || isConsultantNonAdmin(roles)
);

/**
 * Inisialisasi authorization"
 *
 * @method
 * @category Utilities
 * @returns {function} Function dengan tambahan req & res sebagai argumen
 */
export const httpAuthCheck = initializeBasicAuth({ users: BASIC_AUTH_USERS });
