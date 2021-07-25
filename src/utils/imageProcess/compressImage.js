import imageCompression from 'browser-image-compression';

export default async function compressImage(imageFile, width, fileSize = 0.5) {
  const options = {
    maxSizeMB: fileSize,
    maxWidthOrHeight: width,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(imageFile, options);
    return compressedFile;
  } catch (error) {
    console.log(error);
    return null;
  }
}
