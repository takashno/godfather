import axios from 'axios'
import { Godfahter } from '../../Types'
import { Dispatch } from 'react'
import { Action } from 'redux'
import { registedWordsAction } from './actions'
import { backendHost } from '../utils/envUtils'

export const registedWordsOperation = (limit: number, page: number) => {
    return async (dispach: Dispatch<Action>, getState: () => Godfahter) => {
        const criteria = {
            limit: limit,
            page: page
        }
        const response = await axios.get(backendHost() + '/library/list?limit=' + limit + "&page=" + page);
        dispach(registedWordsAction(criteria, response.data));
    }
}