'use strict';

class Event {
	/**
	 * Adds click tracking event to element.
	 * @param {object} element - Node
	 * @param {function} func - Reference to function
	 * @param {this} self - Reference to this
	 * @chainable
	 */
	static addEventListenerClick(element, func, self) {
		return element.addEventListener('click', (event) => {
			func.call(self, event);
		});
	}
}

export default Event;