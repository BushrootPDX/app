
import { request } from './request';

const URL = '/gardens';

export default {
    getAll() {
        return request.get(URL);
    },

    get(id) {
        return request.get(`${URL}/${id}`);
    },



    add(garden) {
        return request.post(URL, garden);
    },

    update(garden) {
        return request.put(`${URL}/${garden._id}`, garden);
    },

    delete(garden) {
        return request.delete(`${URL}/${garden._id}`);
    }
};