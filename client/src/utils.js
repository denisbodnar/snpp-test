const extractMedia = (list, type) => {
  const [mediaLink] = list.filter((entry) => entry.type === type);
  return mediaLink.url;
};

export default extractMedia;
