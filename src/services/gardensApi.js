
import { request } from './request';

const URL = '/gardens';

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



    add(garden) {
        return request.post(URL, garden)
            .then(
                r => r.body,
                ({ response }) => {
                    const { body, text } = response;
                    const error = body ? body.message || body.error || body : text;
                    throw error;
                }
            );
    },

    update(garden) {
        return request.put(`${URL}/${garden._id}`, garden)
            .then(
                r => r.body,
                ({ response }) => {
                    const { body, text } = response;
                    const error = body ? body.message || body.error || body : text;
                    throw error;
                }
            );
    },

    delete(garden) {
        return request.delete(`${URL}/${garden._id}`)
            .then(
                r => r.body,
                ({ response }) => {
                    const { body, text } = response;
                    const error = body ? body.message || body.error || body : text;
                    throw error;       
                }
            );
    }
};