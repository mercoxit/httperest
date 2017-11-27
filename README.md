# httperest
fetch wrapper

### Installation
```bash
npm install --save httperest
```

### Usage
```javascript
import { request } from 'httperest'

request.get('http://example.com')
	.then(response => console.log(response)) // response as JSON
	.catch(error => console.log(error)) // error object { status, message }

```

or

```javascript
import Request from 'httperest'

const request = new Request(options)
request.get('http://example.com')
    .then(response => console.log(response)) // response as JSON
    .catch(error => console.log(error)) // error object { status, message }

```

### Methods
```javascript
request.get(url, options)
request.delete(url, options)
request.post(url, data, options)
request.put(url, data, options)
request.patch(url, data, options)
```

### Options
```javascript
const options = {
    cache: 'default', // default, no-store, reload, no-cache, force-cache, only-if-cached
    credentials: 'same-origin', // same-origin, omit, include
    timeout: 30000, // request timeout 30s by default
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    mode: 'cors' // same-origin, no-cors, cors
}
```

### TODO
* Canceling request
* Tests coverage
