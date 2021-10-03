import { registedWordsAction } from './actions'
import axios from 'axios'

export const registedWordsOperation = (limit, page) => {
    return async (dispach, getState) => {
        const criteria = {
            limit: limit,
            page: page
        }
        const response = await axios.get('http://localhost:3000/library/list?limit='+limit+"&page="+page);
        dispach(registedWordsAction(criteria, response.data)); 
    }
}