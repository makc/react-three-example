// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// mock WebGL

HTMLCanvasElement.prototype.getContext = function() {
	return {
		getShaderPrecisionFormat: function() { return { precision: 23 } },
		getParameter: function() { return { indexOf: function() { return -1 } } },
		getExtension: function() { return {} },
		canvas: { width: 1, height: 1 },
		createTexture: function() { return {} },
		bindTexture: function() {},
		texParameteri: function() {},
		texImage2D: function() {},
		clearColor: function() {},
		clearDepth: function() {},
		clearStencil: function() {},
		enable: function() {},
		depthFunc: function() {},
		frontFace: function() {},
		cullFace: function() {},
		viewport: function() {},
	}
};
