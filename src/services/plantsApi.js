import { request } from './request';

const URL = '/plants';

export default {
    getByQuery(query) {
        // "n"?
        return request.get(`${URL}/?n=${query}`);
    }
    ,
    getById(id) {
        return request.get(`${URL}/${id}`);
    }
};