import axios from "axios";

export const commonRequest = async (methods, url, body, header) => {
    let config = {
        method: methods,
        url,
        headers: header ? 
        header: {
            "Content-Type": "application/json",
            'key': localStorage.getItem('logged'),
            'auth': localStorage.getItem('authO'),
        },
        data: body
    }
    return axios(config).then((data)=>{
        return data
    }).catch((error)=>{
        return error.response
    })
}