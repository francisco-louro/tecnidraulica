import Cookies from "js-cookie";

export const COOKIE_CONSENT = "cookie_consent";

export const getCookieConsent = () => {
  const consent = Cookies.get(COOKIE_CONSENT);
  return consent ? JSON.parse(consent) : null;
};

export const setCookieConsent = (preferences) => {
  Cookies.set(COOKIE_CONSENT, JSON.stringify(preferences), {
    expires: 365,
    sameSite: "Lax",
  });
};
