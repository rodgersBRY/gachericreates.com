const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export function cloudinaryUrl(
  publicId: string,
  width?: number,
  height?: number
): string {
  const transforms = [
    "f_auto",
    "q_auto",
    width ? `w_${width}` : null,
    height ? `h_${height}` : null,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`;
}
