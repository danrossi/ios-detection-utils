export default class IOSUtils {
    /**
     * Only way to detect visionOS is detect for MacIntel Ipad and screen width greater than 1306
     * xr detection for visionOS is only possible if the flag is enabled.
     * Need to use width instead of availWidth as Ipad is more, and do a height check as Ipad height is more.
     */
    static get isVisionOS(): boolean;
    /**
     * Modern Ipad detection
     */
    static get isIpad(): boolean;
    /**
     * Iphone and Ipad detection and filter for visionOS screens.
     * We don't want to detect visionOS as iOS to prevent including mobile features like orientation controls.
     * Need to use width instead of availWidth as Ipad is more, and do a height check as Ipad height is more.
     *
     */
    static get isIOS(): boolean;
    static requireOrientationPermission(): boolean;
    static requestOrientationPermissions(): any;
}
