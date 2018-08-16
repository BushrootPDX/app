
import { request } from './request';

const URL = '/plantInstances';

export default {
    getAll() {
        return request.get(URL);
    },

    get(id) {
        return request.get(`${URL}/${id}`);
    },

    add(plantInstance) {
        return request.post(URL, plantInstance);
    },

    update(plantInstance) {
        return request.put(`${URL}/${plantInstance._id}`, plantInstance);
    },

    delete({gardenId, plantId}) {
        return request.delete(`${URL}/${plantId}`);
    }
};