// Convert text arg into kebab-case. Lake House => lake-house
export function makeKebab(text) {
  return text.replace(/\s+/g, '-').toLowerCase();
}

// Removes the metadata from a Strapi API response object.
export function removeMeta(resObj) {
  delete resObj.createdAt;
  delete resObj.publishedAt;
  delete resObj.updatedAt;
  return resObj;
}
