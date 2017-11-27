import 'promise-polyfill'
import fetch from 'react-native-fetch-polyfill'

export default class Request {
    options = {
        cache: 'default',
        credentials: 'same-origin',
        timeout: 30000,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }

    constructor({ cache, timeout, credentials, headers, mode } = {}) {
        this.options = {
            cache: cache || this.options.cache,
            credentials: credentials || this.options.credentials,
            timeout: timeout || this.options.timeout,
            headers: { ...this.options.headers, ...headers },
            mode: mode || this.options.mode
        }
    }

    get(url = '/', { cache, credentials, timeout, headers, mode } = {}) {
        return fetch(url, {
            cache: cache || this.options.cache,
            credentials: credentials || this.options.credentials,
            timeout: timeout || this.options.timeout,
            headers: { ...this.options.headers, ...headers },
            mode: mode || this.options.mode,
            method: 'GET'
        }).then(response => this._handleResponse(response))
    }

    delete(url = '/', { cache, credentials, timeout, headers, mode } = {}) {
        return fetch(url, {
            cache: cache || this.options.cache,
            credentials: credentials || this.options.credentials,
            timeout: timeout || this.options.timeout,
            headers: { ...this.options.headers, ...headers },
            mode: mode || this.options.mode,
            method: 'DELETE',
        }).then(response => this._handleResponse(response))
    }

    post(url = '/', data = {}, { cache, credentials, timeout, headers, mode } = {}) {
        return fetch(url, {
            cache: cache || this.options.cache,
            credentials: credentials || this.options.credentials,
            timeout: timeout || this.options.timeout,
            headers: { ...this.options.headers, ...headers },
            mode: mode || this.options.mode,
            body: JSON.stringify(data),
            method: 'POST'
        }).then(response => this._handleResponse(response))
    }

    put(url = '/', data = {}, { cache, credentials, timeout, headers, mode } = {}) {
        return fetch(url, {
            cache: cache || this.options.cache,
            credentials: credentials || this.options.credentials,
            timeout: timeout || this.options.timeout,
            headers: { ...this.options.headers, ...headers },
            mode: mode || this.options.mode,
            body: JSON.stringify(data),
            method: 'PUT'
        }).then(response => this._handleResponse(response))
    }

    patch(url = '/', data = {}, { cache, credentials, timeout, headers, mode } = {}) {
        return fetch(url, {
            cache: cache || this.options.cache,
            credentials: credentials || this.options.credentials,
            timeout: timeout || this.options.timeout,
            headers: { ...this.options.headers, ...headers },
            mode: mode || this.options.mode,
            body: JSON.stringify(data),
            method: 'PATCH'
        }).then(response => this._handleResponse(response))
    }

    _handleResponse(response) {
        return response.status > 399 ? Promise.reject({
            status: response.status,
            message: response.statusText,
        }) : this._parseJson(response)
    }

    _parseJson(response) {
        return Promise.resolve()
            .then(() => response.json())
            .then(data => data)
            .catch(error => {
                return {
                    response: response.blob(),
                    status: 415,
                    message: `Unnable to parse response body`,
                }
            })
    }
}

export const request = new Request()
