
import { request } from './request';

const URL = '/garden';

export default {
    add(plant) {
        return request.post(`${URL}/${plant._id}`);
    }
}