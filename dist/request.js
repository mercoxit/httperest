'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.request = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

require('promise-polyfill');

var _reactNativeFetchPolyfill = require('react-native-fetch-polyfill');

var _reactNativeFetchPolyfill2 = _interopRequireDefault(_reactNativeFetchPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Request = function () {
    function Request() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            cache = _ref.cache,
            timeout = _ref.timeout,
            credentials = _ref.credentials,
            headers = _ref.headers,
            mode = _ref.mode;

        (0, _classCallCheck3.default)(this, Request);
        this.options = {
            cache: 'default',
            credentials: 'same-origin',
            timeout: 30000,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        };

        this.options = {
            cache: cache || this.options.cache,
            credentials: credentials || this.options.credentials,
            timeout: timeout || this.options.timeout,
            headers: (0, _extends3.default)({}, this.options.headers, headers),
            mode: mode || this.options.mode
        };
    }

    (0, _createClass3.default)(Request, [{
        key: 'get',
        value: function get() {
            var _this = this;

            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                cache = _ref2.cache,
                credentials = _ref2.credentials,
                timeout = _ref2.timeout,
                headers = _ref2.headers,
                mode = _ref2.mode;

            return (0, _reactNativeFetchPolyfill2.default)(url, {
                cache: cache || this.options.cache,
                credentials: credentials || this.options.credentials,
                timeout: timeout || this.options.timeout,
                headers: (0, _extends3.default)({}, this.options.headers, headers),
                mode: mode || this.options.mode,
                method: 'GET'
            }).then(function (response) {
                return _this._handleResponse(response);
            });
        }
    }, {
        key: 'delete',
        value: function _delete() {
            var _this2 = this;

            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

            var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                cache = _ref3.cache,
                credentials = _ref3.credentials,
                timeout = _ref3.timeout,
                headers = _ref3.headers,
                mode = _ref3.mode;

            return (0, _reactNativeFetchPolyfill2.default)(url, {
                cache: cache || this.options.cache,
                credentials: credentials || this.options.credentials,
                timeout: timeout || this.options.timeout,
                headers: (0, _extends3.default)({}, this.options.headers, headers),
                mode: mode || this.options.mode,
                method: 'DELETE'
            }).then(function (response) {
                return _this2._handleResponse(response);
            });
        }
    }, {
        key: 'post',
        value: function post() {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

            var _this3 = this;

            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                cache = _ref4.cache,
                credentials = _ref4.credentials,
                timeout = _ref4.timeout,
                headers = _ref4.headers,
                mode = _ref4.mode;

            return (0, _reactNativeFetchPolyfill2.default)(url, {
                cache: cache || this.options.cache,
                credentials: credentials || this.options.credentials,
                timeout: timeout || this.options.timeout,
                headers: (0, _extends3.default)({}, this.options.headers, headers),
                mode: mode || this.options.mode,
                body: (0, _stringify2.default)(data),
                method: 'POST'
            }).then(function (response) {
                return _this3._handleResponse(response);
            });
        }
    }, {
        key: 'put',
        value: function put() {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

            var _this4 = this;

            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                cache = _ref5.cache,
                credentials = _ref5.credentials,
                timeout = _ref5.timeout,
                headers = _ref5.headers,
                mode = _ref5.mode;

            return (0, _reactNativeFetchPolyfill2.default)(url, {
                cache: cache || this.options.cache,
                credentials: credentials || this.options.credentials,
                timeout: timeout || this.options.timeout,
                headers: (0, _extends3.default)({}, this.options.headers, headers),
                mode: mode || this.options.mode,
                body: (0, _stringify2.default)(data),
                method: 'PUT'
            }).then(function (response) {
                return _this4._handleResponse(response);
            });
        }
    }, {
        key: 'patch',
        value: function patch() {
            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';

            var _this5 = this;

            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                cache = _ref6.cache,
                credentials = _ref6.credentials,
                timeout = _ref6.timeout,
                headers = _ref6.headers,
                mode = _ref6.mode;

            return (0, _reactNativeFetchPolyfill2.default)(url, {
                cache: cache || this.options.cache,
                credentials: credentials || this.options.credentials,
                timeout: timeout || this.options.timeout,
                headers: (0, _extends3.default)({}, this.options.headers, headers),
                mode: mode || this.options.mode,
                body: (0, _stringify2.default)(data),
                method: 'PATCH'
            }).then(function (response) {
                return _this5._handleResponse(response);
            });
        }
    }, {
        key: '_handleResponse',
        value: function _handleResponse(response) {
            return response.status > 399 ? _promise2.default.reject({
                status: response.status,
                message: response.statusText
            }) : this._parseJson(response);
        }
    }, {
        key: '_parseJson',
        value: function _parseJson(response) {
            return _promise2.default.resolve().then(function () {
                return response.json();
            }).then(function (data) {
                return data;
            }).catch(function (error) {
                return {
                    response: response.blob(),
                    status: 415,
                    message: 'Unnable to parse response body'
                };
            });
        }
    }]);
    return Request;
}();

exports.default = Request;
var request = exports.request = new Request();