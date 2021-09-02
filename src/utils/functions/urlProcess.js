const addHttp = (url) => {
  if (!url.startsWith('http')) {
    return `http://${url}`;
  }
  return url;
};

export default addHttp;
