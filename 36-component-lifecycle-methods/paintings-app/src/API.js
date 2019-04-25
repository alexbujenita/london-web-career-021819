class API {
  static init() {
    this.baseUrl = 'http://localhost:3001';
    this.paintingsUrl = this.baseUrl + '/paintings';
  }

  static getPaintings() {
    return fetch(this.paintingsUrl).then(resp => resp.json());
  }

  static deletePainting(id) {
    return fetch(`${this.paintingsUrl}/${id}`, {
      method: 'DELETE'
    }).then(resp => resp.json());
  }
}

API.init();

export default API;
