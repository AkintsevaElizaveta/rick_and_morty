export default class RmApi {
  static URL = 'https://rickandmortyapi.com/api/character/';

  static request(url = '', method = 'GET', body) {
    return fetch(RmApi.URL + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-type': 'application/json',
      },
    })
      .catch((e) => {
        throw new Error(` ${e.message}`);
      });
  }

  static getList(pageNum) {
    return RmApi
      .request(`?page=${pageNum}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can\'t get list');
      });
  }

  static getOne(id) {
    return RmApi
      .request(`${id}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Can\'t get item');
      });
  }

  static getByName(name) {
    return RmApi
      .request(`?name=${name}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error('Items not found');
      });
  }
}