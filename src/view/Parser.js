'use strict';

class Parser {
	/**
	 * Runs an array of async functions in sequential order.
	 * @param {array} array
	 * @param {function} callback
	 * @param {number} index
	 * @chainable
	 */
	static sequentialOrder(array, callback, index) {
		let self = this;

	  // first call, without an index
	  if (typeof index === 'undefined') {
	    index = 0;
	  }

	  array[index](() => {
	    index++
	    if (index === array.length) {
	      callback();
	    } else {
	      self.sequentialOrder(array, callback, index);
	    }
	  });
	}

	/**
	 * Triggering the event manually at the end.
	 * @chainable
	 */
	static scriptsDone () {
	  let DOMContentLoadedEvent = document.createEvent('Event');
	  DOMContentLoadedEvent.initEvent('DOMContentLoaded', true, true);
	  document.dispatchEvent(DOMContentLoadedEvent);
	}

	/**
	 * Script runner
	 * @param {object} script
	 * @param {function} callback
	 * @chainable
	 */
	static insertScript (script, callback) {
	  let elementScript = document.createElement('script');
	  elementScript.type = 'text/javascript';
	  if (script.src) {
	    elementScript.onload = callback;
	    elementScript.onerror = callback;
	    elementScript.src = script.src;
	  } else {
	    elementScript.textContent = script.innerText;
	  }

	  // re-insert the script tag so it executes.
	  document.head.appendChild(elementScript);

	  // clean-up
	  script.parentNode.removeChild(script);

	  // run the callback immediately for inline scripts
	  if (!script.src) {
	    callback();
	  }
	}

	/**
	 * @param {object} container
	 * @chainable
	 */
	static runScripts (container) {
	  let self = this;
	  let scripts = container.querySelectorAll('script');
	  let runList = [];
	  let typeAttr;
	  let runScriptTypes = [
		  'application/javascript',
		  'application/ecmascript',
		  'application/x-ecmascript',
		  'application/x-javascript',
		  'text/ecmascript',
		  'text/javascript',
		  'text/javascript1.0',
		  'text/javascript1.1',
		  'text/javascript1.2',
		  'text/javascript1.3',
		  'text/javascript1.4',
		  'text/javascript1.5',
		  'text/jscript',
		  'text/livescript',
		  'text/x-ecmascript',
		  'text/x-javascript'
		];

	  [].map.call(scripts, (script) => {
	    typeAttr = script.getAttribute('type');

	    // only run script tags without the type attribute
	    // or with a javascript mime attribute value
	    if (!typeAttr || runScriptTypes.indexOf(typeAttr) !== -1) {
	      runList.push((callback) => {
	        self.insertScript(script, callback);
	      });
	    }
	  });

	  this.sequentialOrder(runList, this.scriptsDone);
	}
}

export default Parser;
