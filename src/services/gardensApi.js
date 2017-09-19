
import { request } from './request';

const URL = '/gardens';

export default {
    add(plant) {
        return request.post(`${URL}/${plant._id}`);
    }
}