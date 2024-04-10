export function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const KEY_API = '?key=43320084-437e2eae51f81b3c91e609ed7';
  const PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINT + KEY_API + PARAMS;

  return fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(err.status);
    });
}
