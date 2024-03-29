import axios, { headerConfig } from '../../utils/baseUrl'

export const getUserId= (successfulFunction, errorFunction,id) => {
    axios.get(`users/${id}/todos`, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}
export const createUserReq = (url, data, successfulFunction, errorFunction) => {
    axios.post(
        url,
        data,
        {
            headers: headerConfig(),
        }
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}