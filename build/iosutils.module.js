//#region src/IOSUtils.js
var visionOSWidth = 1306;
var visionOSHeight = 735;
var IOSUtils = class {
	static get isVisionOS() {
		return this.isIpad && screen.width >= visionOSWidth && screen.height <= visionOSHeight;
	}
	static get isIpad() {
		return navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
	}
	static get isIOS() {
		return /iP(hone|ad)/i.test(navigator.platform) || this.isIpad && screen.width < visionOSWidth && screen.height > visionOSHeight;
	}
	static requireOrientationPermission() {
		return window.DeviceOrientationEvent !== void 0 && typeof window.DeviceOrientationEvent.requestPermission === "function";
	}
	static requestOrientationPermissions() {
		return window.DeviceOrientationEvent.requestPermission();
	}
};
//#endregion
//#region index.js
var ios_detection_utils_default = IOSUtils;
//#endregion
export { ios_detection_utils_default as default };
