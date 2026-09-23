export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";

/**
 * Runs in <head> before first paint: the stored choice wins, otherwise follow
 * the OS preference, defaulting to dark.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}var c=document.documentElement.classList;c.toggle("dark",t==="dark");c.toggle("light",t==="light")}catch(e){}})()`;
