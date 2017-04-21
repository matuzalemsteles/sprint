'use strict';

import Screen from '../screen/Screen';

class Route {
	constructor(path) {
		/**
		 * @type {regex}
		 * @default /[\-{}\[\]+?.,\\\^$|#\s]/g
		 * @protected
		 */
		this.escapeRegex = /[\-{}\[\]+?.,\\\^$|#\s]/g;

		/**
		 * @type {regex}
		 * @default /\((.*?)\)/g
		 * @protected
		 */
		this.optionalParam = /\((.*?)\)/g;

		/**
		 * @type {regex}
		 * @protected
		 */
		this.splatParam = /\*/g;
	}

	/**
	 * Check defined routes with path.
	 * @param {object} event - Event Node
	 * @param {string} path - Path name
	 * @param {object} routes - List of routes
	 * @param {boolean=} noNavigate
	 * @chainable
	 */
	checkRoutes(event, path, routes, noNavigate = false) {
		const screen = new Screen();

		const mapRoutes = [].map.call(routes, route => {
			if (this.routeToRegex(route).exec(path) !== null) {
				event.preventDefault();
				if (!noNavigate) {
					this.navigate(path);
				}
				screen.load();
			}
		});
	}

	/**
	 * Creates the regexp of the route.
	 * @param {object} route - Path name of route
	 * @return {regexp}
	 */
	routeToRegex(route) {
		route = route.replace(this.escapeRegex, '\\$&')
    	.replace(this.optionalParam, '(?:$1)?')
    	.replace(this.splatParam, '(.*)');

   	return new RegExp(`${route}`);
	}

	/**
	 * Remove bar if it has path.
	 * @param {string} route - Path name
	 * @return {string}
	 */
	clearSlashes(path) {
		return path.toString().replace(/\/$/, '').replace(/^\//, '');
	}

	/**
	 * Calls pushState.
	 * @param {string} path - Path name
	 * @return {this}
	 */
	navigate(path = '') {
		history.pushState(null, null, '/' + this.clearSlashes(path));

		return this;
	}
}

export default Route;
