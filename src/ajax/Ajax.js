'use strict';

class Ajax {
	/**
	 * Requests the url using XMLHttpRequest.
	 * @param {!string} url
	 * @param {!string} method
	 * @param {?string} body
	 * @param {?boolean=} optionSync
	 * @param {?boolean=} optionWithCredentials
	 * @return {Promise} Ajax request.
	 * @protected
	 */
	static request(url = '', method = 'GET', body, optionSync, optionWithCredentials) {
		const request = new XMLHttpRequest();

		const promise = new Promise(
			(resolve, reject) => {
				request.onload = () => {
					if (request.aborted) {
						request.onerror();
						return;
					}
					resolve(request);
				};
				request.onerror = () => {
					const error = new Error('Request error');
					error.request = request;
					reject(error);
				};
			}
		);

		request.open(method, url, optionSync);

		request.withCredentials = optionWithCredentials;

		request.send(body)

		return promise;
	}
}

export default Ajax;
