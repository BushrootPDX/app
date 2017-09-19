import { request } from './request';

const URL = '/plants';

export default {
    getByQuery(query) {
        return request.get(`${URL}/?n=${query}`);
    }
    ,
    getById(id) {
        return request.get(`${URL}/${id}`);
    }
};