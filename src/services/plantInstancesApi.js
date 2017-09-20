
import { request } from './request';

const URL = '/plantInstances';

export default {
    getAll() {
        return request.get(URL)
            .then(
                r => r.body,
                ({ response }) => {
                    const { body, text } = response;
                    const error = body ? body.message || body.error || body : text;
                    throw error;
                }
            );
    },

    get(id) {
        return request.get(`${URL}/${id}`)
            .then(
                r => r.body,
                ({ response }) => {
                    const { body, text } = response;
                    const error = body ? body.message || body.error || body : text;
                    throw error;
                }
            );
    },

    add(plantInstance) {
        return request.post(URL, plantInstance)
            .then(
                r => r.body,
                ({ response }) => {
                    const { body, text } = response;
                    const error = body ? body.message || body.error || body : text;
                    throw error;
                }
            );
    },

    update(plantInstance) {
        return request.put(`${URL}/${plantInstance._id}`, plantInstance)
            .then(
                r => r.body,
                ({ response }) => {
                    const { body, text } = response;
                    const error = body ? body.message || body.error || body : text;
                    throw error;
                }
            );
    },

    delete({gardenId, plantId}) {
        return request.delete(`${URL}/${plantId}`)
            .then(
                r => r.body,
                ({ response }) => {
                    const { body, text } = response;
                    const error = body ? body.message || body.error || body : text;
                    throw error;
                }
            );
    },
};