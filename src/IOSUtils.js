/**
 * IOSUtils
 * IOS utils methods for IOS detection and requesting orientation permissions. 
 * @author danrossi / https://github.com/danrossi
 */

let visionOSWidth = 1306,
visionOSHeight = 735;

export default class IOSUtils {
    /**
     * Only way to detect visionOS is detect for MacIntel Ipad and screen width greater than 1306
     * xr detection for visionOS is only possible if the flag is enabled.
     * Need to use width instead of availWidth as Ipad is more, and do a height check as Ipad height is more.
     */
    static get isVisionOS() {
        return this.isIpad && screen.width >= visionOSWidth && screen.height <= visionOSHeight; 
    }

    /**
     * Modern Ipad detection
     */
    static get isIpad() {
        return (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    }

    /**
     * Iphone and Ipad detection and filter for visionOS screens. 
     * We don't want to detect visionOS as iOS to prevent including mobile features like orientation controls.
     * Need to use width instead of availWidth as Ipad is more, and do a height check as Ipad height is more.
     * 
     */
    static get isIOS() {
        return ((/iP(hone|ad)/i).test(navigator.platform) || (this.isIpad && screen.width < visionOSWidth && screen.height > visionOSHeight));
    }

    static requireOrientationPermission() {
        return window.DeviceOrientationEvent !== undefined && typeof window.DeviceOrientationEvent.requestPermission === 'function';
    }

    static requestOrientationPermissions() {
        return window.DeviceOrientationEvent.requestPermission();
    }
}