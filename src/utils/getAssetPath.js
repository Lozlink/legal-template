export function getAssetPath(relativePath) {


  const basePath = isLocal
    ? "/public/assets/"
    : "/public/assets/";

  return `${basePath}${relativePath}`;
}