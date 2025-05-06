export function getAssetPath(relativePath) {
  const isLocal = window.location.hostname === "localhost" || window.location.hostname.startsWith('127.0.0');

  const basePath = isLocal
    ? "/public/assets/"
    : "/public/assets/";

  return `${basePath}${relativePath}`;
}