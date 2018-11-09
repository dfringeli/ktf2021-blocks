/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__banner_block_js__ = __webpack_require__(/*! ./banner/block.js */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__text_block_js__ = __webpack_require__(/*! ./text/block.js */ 7);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9iYW5uZXIvYmxvY2suanMnO1xuaW1wb3J0ICcuL3RleHQvYmxvY2suanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!*****************************!*\
  !*** ./src/banner/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * ktf2021-blocks: Banner\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    ColorPalette = _wp$editor.ColorPalette;\nvar ToggleControl = wp.components.ToggleControl;\n\n/**\n * Register: Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   Banner   Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('ktf2021/ktf2021-banner', {\n\ttitle: __('KTF2021 Banner'),\n\ticon: 'editor-quote',\n\tcategory: 'common',\n\tkeywords: [__('ktf2021'), __('Banner')],\n\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: 'p'\n\t\t},\n\t\talignment: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'none'\n\t\t},\n\t\tcolor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'white'\n\t\t},\n\t\tfadeIn: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: true\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  */\n\tedit: function edit(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    content = _props$attributes.content,\n\t\t    alignment = _props$attributes.alignment,\n\t\t    color = _props$attributes.color,\n\t\t    fadeIn = _props$attributes.fadeIn,\n\t\t    className = props.className;\n\n\n\t\tvar colors = [{ name: 'Weiss', color: 'white' }, { name: 'Schwarz', color: 'black' }, { name: 'Grün', color: 'green' }, { name: 'Blau', color: 'blue' }];\n\n\t\tfunction onChangeContent(newContent) {\n\t\t\tprops.setAttributes({ content: newContent });\n\t\t}\n\n\t\tfunction onChangeAlignment(newAlignment) {\n\t\t\tprops.setAttributes({ alignment: newAlignment === undefined ? 'none' : newAlignment });\n\t\t}\n\n\t\tfunction onChangeColor(newColor) {\n\t\t\tprops.setAttributes({ color: newColor === undefined ? 'white' : newColor });\n\t\t}\n\n\t\tfunction onChangeFadeIn(newFadeIn) {\n\t\t\tprops.setAttributes({ fadeIn: newFadeIn === undefined ? true : newFadeIn });\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(AlignmentToolbar, { value: alignment, onChange: onChangeAlignment })\n\t\t\t),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tclassName: className,\n\t\t\t\tstyle: { textAlign: alignment },\n\t\t\t\ttagName: 'p',\n\t\t\t\tonChange: onChangeContent,\n\t\t\t\tvalue: content\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(ColorPalette, {\n\t\t\t\t\tvalue: color,\n\t\t\t\t\tcolors: colors,\n\t\t\t\t\tonChange: onChangeColor }),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tchecked: fadeIn,\n\t\t\t\t\tonChange: onChangeFadeIn,\n\t\t\t\t\tlabel: \"fade in effect\" })\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'ktf2021-container-' + props.attributes.color },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'ktf2021-content' + (props.attributes.fadeIn ? ' ktf2021-reveal' : '') },\n\t\t\t\twp.element.createElement(RichText.Content, {\n\t\t\t\t\tclassName: 'under-title ktf2021-blocks-align-' + props.attributes.alignment,\n\t\t\t\t\ttagName: 'p',\n\t\t\t\t\tvalue: props.attributes.content\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYW5uZXIvYmxvY2suanM/N2QzMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGt0ZjIwMjEtYmxvY2tzOiBCYW5uZXJcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIEFsaWdubWVudFRvb2xiYXIgPSBfd3AkZWRpdG9yLkFsaWdubWVudFRvb2xiYXIsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRlZGl0b3IuQmxvY2tDb250cm9scyxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQ29sb3JQYWxldHRlID0gX3dwJGVkaXRvci5Db2xvclBhbGV0dGU7XG52YXIgVG9nZ2xlQ29udHJvbCA9IHdwLmNvbXBvbmVudHMuVG9nZ2xlQ29udHJvbDtcblxuLyoqXG4gKiBSZWdpc3RlcjogR3V0ZW5iZXJnIEJsb2NrLlxuICpcbiAqIFJlZ2lzdGVycyBhIG5ldyBibG9jayBwcm92aWRlZCBhIHVuaXF1ZSBuYW1lIGFuZCBhbiBvYmplY3QgZGVmaW5pbmcgaXRzXG4gKiBiZWhhdmlvci4gT25jZSByZWdpc3RlcmVkLCB0aGUgYmxvY2sgaXMgbWFkZSBlZGl0b3IgYXMgYW4gb3B0aW9uIHRvIGFueVxuICogZWRpdG9yIGludGVyZmFjZSB3aGVyZSBibG9ja3MgYXJlIGltcGxlbWVudGVkLlxuICpcbiAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL1xuICogQHBhcmFtICB7c3RyaW5nfSAgIEJhbm5lciAgIEJsb2NrIG5hbWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgc2V0dGluZ3MgQmxvY2sgc2V0dGluZ3MuXG4gKiBAcmV0dXJuIHs/V1BCbG9ja30gICAgICAgICAgVGhlIGJsb2NrLCBpZiBpdCBoYXMgYmVlbiBzdWNjZXNzZnVsbHlcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkOyBvdGhlcndpc2UgYHVuZGVmaW5lZGAuXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2t0ZjIwMjEva3RmMjAyMS1iYW5uZXInLCB7XG5cdHRpdGxlOiBfXygnS1RGMjAyMSBCYW5uZXInKSxcblx0aWNvbjogJ2VkaXRvci1xdW90ZScsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0a2V5d29yZHM6IFtfXygna3RmMjAyMScpLCBfXygnQmFubmVyJyldLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRjb250ZW50OiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICdwJ1xuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdub25lJ1xuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ3doaXRlJ1xuXHRcdH0sXG5cdFx0ZmFkZUluOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICovXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgX3Byb3BzJGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjb250ZW50ID0gX3Byb3BzJGF0dHJpYnV0ZXMuY29udGVudCxcblx0XHQgICAgYWxpZ25tZW50ID0gX3Byb3BzJGF0dHJpYnV0ZXMuYWxpZ25tZW50LFxuXHRcdCAgICBjb2xvciA9IF9wcm9wcyRhdHRyaWJ1dGVzLmNvbG9yLFxuXHRcdCAgICBmYWRlSW4gPSBfcHJvcHMkYXR0cmlidXRlcy5mYWRlSW4sXG5cdFx0ICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcblxuXG5cdFx0dmFyIGNvbG9ycyA9IFt7IG5hbWU6ICdXZWlzcycsIGNvbG9yOiAnd2hpdGUnIH0sIHsgbmFtZTogJ1NjaHdhcnonLCBjb2xvcjogJ2JsYWNrJyB9LCB7IG5hbWU6ICdHcsO8bicsIGNvbG9yOiAnZ3JlZW4nIH0sIHsgbmFtZTogJ0JsYXUnLCBjb2xvcjogJ2JsdWUnIH1dO1xuXG5cdFx0ZnVuY3Rpb24gb25DaGFuZ2VDb250ZW50KG5ld0NvbnRlbnQpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBjb250ZW50OiBuZXdDb250ZW50IH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ2hhbmdlQWxpZ25tZW50KG5ld0FsaWdubWVudCkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogbmV3QWxpZ25tZW50ID09PSB1bmRlZmluZWQgPyAnbm9uZScgOiBuZXdBbGlnbm1lbnQgfSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25DaGFuZ2VDb2xvcihuZXdDb2xvcikge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGNvbG9yOiBuZXdDb2xvciA9PT0gdW5kZWZpbmVkID8gJ3doaXRlJyA6IG5ld0NvbG9yIH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ2hhbmdlRmFkZUluKG5ld0ZhZGVJbikge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGZhZGVJbjogbmV3RmFkZUluID09PSB1bmRlZmluZWQgPyB0cnVlIDogbmV3RmFkZUluIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmxvY2tDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEFsaWdubWVudFRvb2xiYXIsIHsgdmFsdWU6IGFsaWdubWVudCwgb25DaGFuZ2U6IG9uQ2hhbmdlQWxpZ25tZW50IH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuXHRcdFx0XHRzdHlsZTogeyB0ZXh0QWxpZ246IGFsaWdubWVudCB9LFxuXHRcdFx0XHR0YWdOYW1lOiAncCcsXG5cdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUNvbnRlbnQsXG5cdFx0XHRcdHZhbHVlOiBjb250ZW50XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDb2xvclBhbGV0dGUsIHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3IsXG5cdFx0XHRcdFx0Y29sb3JzOiBjb2xvcnMsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQ29sb3IgfSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG5cdFx0XHRcdFx0Y2hlY2tlZDogZmFkZUluLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUZhZGVJbixcblx0XHRcdFx0XHRsYWJlbDogXCJmYWRlIGluIGVmZmVjdFwiIH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAna3RmMjAyMS1jb250YWluZXItJyArIHByb3BzLmF0dHJpYnV0ZXMuY29sb3IgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgJ2NsYXNzJzogJ2t0ZjIwMjEtY29udGVudCcgKyAocHJvcHMuYXR0cmlidXRlcy5mYWRlSW4gPyAnIGt0ZjIwMjEtcmV2ZWFsJyA6ICcnKSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQuQ29udGVudCwge1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ3VuZGVyLXRpdGxlIGt0ZjIwMjEtYmxvY2tzLWFsaWduLScgKyBwcm9wcy5hdHRyaWJ1dGVzLmFsaWdubWVudCxcblx0XHRcdFx0XHR0YWdOYW1lOiAncCcsXG5cdFx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudFxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jhbm5lci9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./src/banner/style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYW5uZXIvc3R5bGUuc2Nzcz81Y2E4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmFubmVyL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************!*\
  !*** ./src/banner/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYW5uZXIvZWRpdG9yLnNjc3M/NDUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jhbm5lci9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***************************!*\
  !*** ./src/text/block.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * ktf2021-blocks: Text\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    PlainText = _wp$editor.PlainText,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    ColorPalette = _wp$editor.ColorPalette;\nvar _wp$components = wp.components,\n    ToggleControl = _wp$components.ToggleControl,\n    RangeControl = _wp$components.RangeControl;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   Banner   Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('ktf2021/ktf2021-text', {\n\ttitle: __('KTF2021 Text'),\n\ticon: 'editor-paragraph',\n\tcategory: 'common',\n\tkeywords: [__('ktf2021'), __('Text')],\n\n\tattributes: {\n\t\ttitle: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t},\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: 'p'\n\t\t},\n\t\tcolumns: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 2\n\t\t},\n\t\talignment: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'none'\n\t\t},\n\t\tcolor: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'white'\n\t\t},\n\t\tfadeIn: {\n\t\t\ttype: 'boolean',\n\t\t\tdefault: true\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    title = _props$attributes.title,\n\t\t    content = _props$attributes.content,\n\t\t    columns = _props$attributes.columns,\n\t\t    alignment = _props$attributes.alignment,\n\t\t    color = _props$attributes.color,\n\t\t    fadeIn = _props$attributes.fadeIn,\n\t\t    className = props.className;\n\n\n\t\tvar colors = [{ name: 'Weiss', color: 'white' }, { name: 'Schwarz', color: 'black' }, { name: 'Grün', color: 'green' }, { name: 'Blau', color: 'blue' }];\n\n\t\tfunction onChangeTitle(newTitle) {\n\t\t\tprops.setAttributes({ title: newTitle === undefined ? '' : newTitle });\n\t\t}\n\n\t\tfunction onChangeContent(newContent) {\n\t\t\tprops.setAttributes({ content: newContent });\n\t\t}\n\n\t\tfunction onChangeColumns(newColumns) {\n\t\t\tprops.setAttributes({ columns: newColumns === undefined ? 2 : newColumns });\n\t\t}\n\n\t\tfunction onChangeAlignment(newAlignment) {\n\t\t\tprops.setAttributes({ alignment: newAlignment === undefined ? 'none' : newAlignment });\n\t\t}\n\n\t\tfunction onChangeColor(newColor) {\n\t\t\tprops.setAttributes({ color: newColor === undefined ? 'white' : newColor });\n\t\t}\n\n\t\tfunction onChangeFadeIn(newFadeIn) {\n\t\t\tprops.setAttributes({ fadeIn: newFadeIn === undefined ? true : newFadeIn });\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(AlignmentToolbar, { value: alignment, onChange: onChangeAlignment })\n\t\t\t),\n\t\t\twp.element.createElement(PlainText, {\n\t\t\t\ttagName: 'h2',\n\t\t\t\tvalue: title,\n\t\t\t\tonChange: onChangeTitle,\n\t\t\t\tplaceholder: \"Titel...\"\n\t\t\t}),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tclassName: className,\n\t\t\t\tstyle: { textAlign: alignment },\n\t\t\t\ttagName: 'p',\n\t\t\t\tonChange: onChangeContent,\n\t\t\t\tvalue: content,\n\t\t\t\tplaceholder: \"Text...\"\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(ColorPalette, {\n\t\t\t\t\tvalue: color,\n\t\t\t\t\tcolors: colors,\n\t\t\t\t\tonChange: onChangeColor,\n\t\t\t\t\tlabel: __('Hintergrundfarbe')\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(ToggleControl, {\n\t\t\t\t\tchecked: fadeIn,\n\t\t\t\t\tonChange: onChangeFadeIn,\n\t\t\t\t\tlabel: \"fade in effect\"\n\t\t\t\t}),\n\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\tlabel: __('Spalten'),\n\t\t\t\t\tvalue: columns,\n\t\t\t\t\tonChange: onChangeColumns,\n\t\t\t\t\tmin: 1,\n\t\t\t\t\tmax: 3\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'ktf2021-container-' + props.attributes.color },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'ktf2021-content ' + (props.attributes.fadeIn ? ' ktf2021-reveal' : '') },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h2',\n\t\t\t\t\t{ className: 'ktf2021-text-title text-center' },\n\t\t\t\t\tprops.attributes.title\n\t\t\t\t),\n\t\t\t\twp.element.createElement(RichText.Content, {\n\t\t\t\t\tclassName: 'ktf2021-text ktf2021-blocks-align-' + props.attributes.alignment,\n\t\t\t\t\ttagName: 'p',\n\t\t\t\t\tstyle: 'column-count: ' + props.attributes.columns,\n\t\t\t\t\tvalue: props.attributes.content\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZXh0L2Jsb2NrLmpzP2ZhNTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBrdGYyMDIxLWJsb2NrczogVGV4dFxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBSaWNoVGV4dCA9IF93cCRlZGl0b3IuUmljaFRleHQsXG4gICAgUGxhaW5UZXh0ID0gX3dwJGVkaXRvci5QbGFpblRleHQsXG4gICAgQWxpZ25tZW50VG9vbGJhciA9IF93cCRlZGl0b3IuQWxpZ25tZW50VG9vbGJhcixcbiAgICBCbG9ja0NvbnRyb2xzID0gX3dwJGVkaXRvci5CbG9ja0NvbnRyb2xzLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scyxcbiAgICBDb2xvclBhbGV0dGUgPSBfd3AkZWRpdG9yLkNvbG9yUGFsZXR0ZTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgVG9nZ2xlQ29udHJvbCA9IF93cCRjb21wb25lbnRzLlRvZ2dsZUNvbnRyb2wsXG4gICAgUmFuZ2VDb250cm9sID0gX3dwJGNvbXBvbmVudHMuUmFuZ2VDb250cm9sO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgQmFubmVyICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgna3RmMjAyMS9rdGYyMDIxLXRleHQnLCB7XG5cdHRpdGxlOiBfXygnS1RGMjAyMSBUZXh0JyksXG5cdGljb246ICdlZGl0b3ItcGFyYWdyYXBoJyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogW19fKCdrdGYyMDIxJyksIF9fKCdUZXh0JyldLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHR0aXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0Y29udGVudDoge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAncCdcblx0XHR9LFxuXHRcdGNvbHVtbnM6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMlxuXHRcdH0sXG5cdFx0YWxpZ25tZW50OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdub25lJ1xuXHRcdH0sXG5cdFx0Y29sb3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ3doaXRlJ1xuXHRcdH0sXG5cdFx0ZmFkZUluOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICpcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqL1xuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIF9wcm9wcyRhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgdGl0bGUgPSBfcHJvcHMkYXR0cmlidXRlcy50aXRsZSxcblx0XHQgICAgY29udGVudCA9IF9wcm9wcyRhdHRyaWJ1dGVzLmNvbnRlbnQsXG5cdFx0ICAgIGNvbHVtbnMgPSBfcHJvcHMkYXR0cmlidXRlcy5jb2x1bW5zLFxuXHRcdCAgICBhbGlnbm1lbnQgPSBfcHJvcHMkYXR0cmlidXRlcy5hbGlnbm1lbnQsXG5cdFx0ICAgIGNvbG9yID0gX3Byb3BzJGF0dHJpYnV0ZXMuY29sb3IsXG5cdFx0ICAgIGZhZGVJbiA9IF9wcm9wcyRhdHRyaWJ1dGVzLmZhZGVJbixcblx0XHQgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuXG5cblx0XHR2YXIgY29sb3JzID0gW3sgbmFtZTogJ1dlaXNzJywgY29sb3I6ICd3aGl0ZScgfSwgeyBuYW1lOiAnU2Nod2FyeicsIGNvbG9yOiAnYmxhY2snIH0sIHsgbmFtZTogJ0dyw7xuJywgY29sb3I6ICdncmVlbicgfSwgeyBuYW1lOiAnQmxhdScsIGNvbG9yOiAnYmx1ZScgfV07XG5cblx0XHRmdW5jdGlvbiBvbkNoYW5nZVRpdGxlKG5ld1RpdGxlKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IG5ld1RpdGxlID09PSB1bmRlZmluZWQgPyAnJyA6IG5ld1RpdGxlIH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudChuZXdDb250ZW50KSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgY29udGVudDogbmV3Q29udGVudCB9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvbkNoYW5nZUNvbHVtbnMobmV3Q29sdW1ucykge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGNvbHVtbnM6IG5ld0NvbHVtbnMgPT09IHVuZGVmaW5lZCA/IDIgOiBuZXdDb2x1bW5zIH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ2hhbmdlQWxpZ25tZW50KG5ld0FsaWdubWVudCkge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGFsaWdubWVudDogbmV3QWxpZ25tZW50ID09PSB1bmRlZmluZWQgPyAnbm9uZScgOiBuZXdBbGlnbm1lbnQgfSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25DaGFuZ2VDb2xvcihuZXdDb2xvcikge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGNvbG9yOiBuZXdDb2xvciA9PT0gdW5kZWZpbmVkID8gJ3doaXRlJyA6IG5ld0NvbG9yIH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ2hhbmdlRmFkZUluKG5ld0ZhZGVJbikge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7IGZhZGVJbjogbmV3RmFkZUluID09PSB1bmRlZmluZWQgPyB0cnVlIDogbmV3RmFkZUluIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0QmxvY2tDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEFsaWdubWVudFRvb2xiYXIsIHsgdmFsdWU6IGFsaWdubWVudCwgb25DaGFuZ2U6IG9uQ2hhbmdlQWxpZ25tZW50IH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBsYWluVGV4dCwge1xuXHRcdFx0XHR0YWdOYW1lOiAnaDInLFxuXHRcdFx0XHR2YWx1ZTogdGl0bGUsXG5cdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZVRpdGxlLFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogXCJUaXRlbC4uLlwiXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSxcblx0XHRcdFx0c3R5bGU6IHsgdGV4dEFsaWduOiBhbGlnbm1lbnQgfSxcblx0XHRcdFx0dGFnTmFtZTogJ3AnLFxuXHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50LFxuXHRcdFx0XHR2YWx1ZTogY29udGVudCxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiVGV4dC4uLlwiXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDb2xvclBhbGV0dGUsIHtcblx0XHRcdFx0XHR2YWx1ZTogY29sb3IsXG5cdFx0XHRcdFx0Y29sb3JzOiBjb2xvcnMsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQ29sb3IsXG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdIaW50ZXJncnVuZGZhcmJlJylcblx0XHRcdFx0fSksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG5cdFx0XHRcdFx0Y2hlY2tlZDogZmFkZUluLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUZhZGVJbixcblx0XHRcdFx0XHRsYWJlbDogXCJmYWRlIGluIGVmZmVjdFwiXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmFuZ2VDb250cm9sLCB7XG5cdFx0XHRcdFx0bGFiZWw6IF9fKCdTcGFsdGVuJyksXG5cdFx0XHRcdFx0dmFsdWU6IGNvbHVtbnMsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdlQ29sdW1ucyxcblx0XHRcdFx0XHRtaW46IDEsXG5cdFx0XHRcdFx0bWF4OiAzXG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHQvKipcbiAgKiBUaGUgc2F2ZSBmdW5jdGlvbiBkZWZpbmVzIHRoZSB3YXkgaW4gd2hpY2ggdGhlIGRpZmZlcmVudCBhdHRyaWJ1dGVzIHNob3VsZCBiZSBjb21iaW5lZFxuICAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cbiAgKlxuICAqIFRoZSBcInNhdmVcIiBwcm9wZXJ0eSBtdXN0IGJlIHNwZWNpZmllZCBhbmQgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdrdGYyMDIxLWNvbnRhaW5lci0nICsgcHJvcHMuYXR0cmlidXRlcy5jb2xvciB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyAnY2xhc3MnOiAna3RmMjAyMS1jb250ZW50ICcgKyAocHJvcHMuYXR0cmlidXRlcy5mYWRlSW4gPyAnIGt0ZjIwMjEtcmV2ZWFsJyA6ICcnKSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2gyJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2t0ZjIwMjEtdGV4dC10aXRsZSB0ZXh0LWNlbnRlcicgfSxcblx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnRpdGxlXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAna3RmMjAyMS10ZXh0IGt0ZjIwMjEtYmxvY2tzLWFsaWduLScgKyBwcm9wcy5hdHRyaWJ1dGVzLmFsaWdubWVudCxcblx0XHRcdFx0XHR0YWdOYW1lOiAncCcsXG5cdFx0XHRcdFx0c3R5bGU6ICdjb2x1bW4tY291bnQ6ICcgKyBwcm9wcy5hdHRyaWJ1dGVzLmNvbHVtbnMsXG5cdFx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuY29udGVudFxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RleHQvYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*****************************!*\
  !*** ./src/text/style.scss ***!
  \*****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZXh0L3N0eWxlLnNjc3M/MWU1MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RleHQvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!******************************!*\
  !*** ./src/text/editor.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZXh0L2VkaXRvci5zY3NzPzQ5YmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZXh0L2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ })
/******/ ]);