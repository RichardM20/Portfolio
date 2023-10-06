export function parseBase64(base64Image) {
  const imageBuffer = Buffer.from(base64Image, "base64");
  return URL.createObjectURL(imageBuffer);
}
