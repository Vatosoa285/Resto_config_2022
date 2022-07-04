import http from "../http-common";
class ActiviteDataService {
  getAll() {
    return http.get("/activites");
  }
  get(id) {
    return http.get(`/activites/${id}`);
  }
  create(data) {
    return http.post("/activites", data);
  }
  update(id, data) {
    return http.put(`/activites/${id}`, data);
  }
  delete(id) {
    return http.delete(`/activites/${id}`);
  }
  deleteAll() {
    return http.delete(`/activites`);
  }
  findByTitle(title) {
    return http.get(`/activites?title=${title}`);
  }
}
export default new ActiviteDataService();