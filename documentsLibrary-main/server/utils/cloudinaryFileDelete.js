export function extractPublicId(url) {
  const parts = url.split("/");
  const uploadIndex = parts.indexOf("upload");

  if (uploadIndex >= 0 && uploadIndex < parts.length - 1) {
    const publicIdWithVersion = parts[uploadIndex + 2];
    const publicIdParts = publicIdWithVersion.split(".");
    return publicIdParts[0]; // Return the public ID without extension
  }
  return null; // Return null if upload segment is not found
}

// call this way
// const publicId = extractPublicId(url);
