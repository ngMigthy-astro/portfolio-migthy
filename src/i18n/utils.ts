import { ui } from "./ui";
import { getData as getLocaleData } from "./data";

export type { Lang } from "./ui";

export function getLang(locale: string | undefined): Lang {
  return locale === "en" ? "en" : "es";
}

/** Returns the UI translation object for the given locale. */
export function useTranslations(locale: string | undefined) {
  return ui[getLang(locale)];
}

/** Returns the content data object for the given locale. */
export function useData(locale: string | undefined) {
  return getLocaleData(getLang(locale));
}

/**
 * Given the current pathname and lang, returns the URL for the alternate locale.
 * e.g. /en/cv → /cv  |  /cv → /en/cv
 */
export function getAlternatePath(pathname: string, lang: Lang): string {
  if (lang === "en") {
    // Strip the /en prefix
    const stripped = pathname.replace(/^\/en/, "");
    return stripped === "" ? "/" : stripped;
  } else {
    // Add the /en prefix
    return "/en" + pathname;
  }
}
