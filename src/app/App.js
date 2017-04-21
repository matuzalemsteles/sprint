'use strict';

import Route from '../route/Route';
import Event from '../event/Event';

class App {
	constructor(props) {
		/**
		 * Maintains SPA routes
		 * @type {array}
		 * @default receive props routes
		 * @protected
		 */
		this.routes = props.routes;

		/**
		 * When enabled, routes are passed through the spa.
		 * @type {boolean}
		 * @protected
		 */
		this.enabled = props.enabled;

		/**
		 * Save the path name
		 * @type {string}
		 * @default null
		 * @protected
		 */
		this.path = null;

		/**
		 * Keeps all nodes tagged.
		 * @type {array}
		 * @default node list tag 'a'
		 * @protected
		 */
		this.nodeListTags = this.addTagsToArray();

		if (props.enabled) { 
			this.init();
			this.onPopState();
		}
	}

	/**
	 * Starts the engine.
	 * @chainable
	 */
	init() {
		const initListen = this.addClickTags(this.nodeListTags, this.eventButton);
	}

	/**
	 * A NodeList object.
	 * @return {object}
	 */
	addTagsToArray() {
		return document.querySelectorAll('a');
	}

	/**
	 * Adds click event to all objects.
	 * @param {object} tags - Nodelist
	 * @param {function} func - Reference to function
	 * @chainable
	 */
	addClickTags(tags, func) {
		const self = this;
		const events = [].map.call(tags, element => {
			Event.addEventListenerClick(element, func, self);
		});
	}

	/**
	 * Adds click event to all objects.
	 * @param {object} event - Object of the event
	 * @chainable
	 */
	eventButton(event) {
		this.path = event.target.pathname;
		if (!event.target.attributes['data-no-spa']) {
			const router = new Route();

			router.checkRoutes(event, this.path, this.routes);
		}
	}

	/**
	 * Monitor history and update content when you return.
	 * @chainable
	 */
	onPopState() {
		window.onpopstate = (event) => {
			const router = new Route();

			router.checkRoutes(event, document.location.pathname, this.routes, true);
		}
	}
}

export default App;
