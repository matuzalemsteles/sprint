'use strict';

import Ajax from '../ajax/Ajax';
import Parser from './Parser';

class Screen {
	constructor() {
		/**
		 * Stores the html code of the requested page in raw text.
		 * @type {string}
		 * @default null
		 * @protected
		 */
		this.html = null;

		/**
		 * Regex to extract the title from the page.
		 * @type {regex}
		 * @default /<title[^>]*>([^<]+)<\/title>/
		 * @protected
		 */
		this.titleRegex = /<title[^>]*>([^<]+)<\/title>/;

		/**
		 * Regex to extract the body from the page.
		 * @type {regex}
		 * @default /<body\b[^>]*>([\s\S]*?)<\/body>/gm
		 * @protected
		 */
		this.bodyRegex = /<body\b[^>]*>([\s\S]*?)<\/body>/gm;
	}

	/**
	 * Modify the title and body of the page.
	 * @chainable
	 */
	insertScreen() {
		document.title = this.extractTitle();
		document.body.innerHTML = this.extractBody();

		this.parserScript();
	}

	/**
	 * Scans the script and run.
	 * @chainable
	 */
	parserScript() {
		let bodyAlreadyLoaded = document.querySelector('body');
		Parser.runScripts(bodyAlreadyLoaded);
	}

	/**
	 * Extract title with regex.
	 * @return {string}
	 */
	extractTitle() {
		return this.titleRegex.exec(this.html)[1];
	}

	/**
	 * Extract body with regex.
	 * @return {string}
	 */
	extractBody() {
		return this.bodyRegex.exec(this.html)[1];
	}

	/**
	 * Requested page request.
	 * @param {string} path
	 * @chainable
	 */
	load(path) {
		let body = null;
		return Ajax
			.request(path, 'GET', body, true)
			.then(result => {
				this.html = result.responseText;
				this.insertScreen();
			})
			.catch(error => {
				console.log(error);
				throw error;
			})
	}
}

export default Screen;
