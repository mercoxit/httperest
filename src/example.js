import { request } from './index'

request.get(`https://exho.herokuapp.com?message=get`)
    .then(response => console.log('get: ', response))

request.delete(`https://exho.herokuapp.com?message=delete`)
    .then(response => console.log('delete: ', response))

request.post(`https://exho.herokuapp.com`, { message: 'post' })
    .then(response => console.log('post: ', response))

request.put(`https://exho.herokuapp.com`, { message: 'put' })
    .then(response => console.log('put: ', response))

request.patch(`https://exho.herokuapp.com`, { message: 'patch' })
    .then(response => console.log('patch: ', response))
