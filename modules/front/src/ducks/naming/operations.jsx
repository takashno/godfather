import { naming } from './actions'
import axios from 'axios'

export const namingOperation = (target, lowerCamelCase, lowerSnakeCase, upperCamelCase, upperSnakeCase) => {
    return async (dispach, getState) => {
        // const state = getState()
        // const namingState = state.naming;

        const targets = target.split(/\n/);
        const obj = {
            targets: targets,
            lowerCamelCase: lowerCamelCase === "on",
            lowerSnakeCase: lowerSnakeCase === "on",
            upperCamelCase: upperCamelCase === "on",
            upperSnakeCase: upperSnakeCase === "on"
        };
        // const method = "POST";
        // const body = JSON.stringify(obj);
        // const headers = {
        //     'Accept': 'application/json; charset=utf-8',
        //     'Content-Type': 'application/json; charset=utf-8'
        // };
        // const response = await fetch("http://localhost:3000/naming", { 
        //     method: 'POST', 
        //     headers: headers, 
        //     body: body 
        // })
        // .then((res) => {
        //     console.log(res);
        //     return res.json()
        // })
        // .then(console.log)
        // .catch(console.error);

        const res = await axios.post('http://localhost:3000/naming', obj);

        // const response = postData('http://localhost:3000/naming', obj)
        //     .then(data => {
        //         console.log(data); // `data.json()` の呼び出しで解釈された JSON データ
        //     });

        dispach(naming(target, res.data));   
    }
}

async function postData(url = '', data = {}) {
    // 既定のオプションには * が付いています
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    })
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then(console.log)
        .catch(console.error);
    return response.json(); // レスポンスの JSON を解析
}