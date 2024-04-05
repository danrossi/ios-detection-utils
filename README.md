# IOS Detection Utils
 
 A static api to determine Iphone / Ipad and differentiate between VisionOS that also provides itself as an Ipad.

 The only way to determine visionOS is by a screen width of 1306 where Ipad is less. 

 An api is provided for requesting orientation permissions. 

 The reason why to seperate visionOS as an IOS mobile device is to not provide orientation VR controls and therefore not provide orientation permission dialogs it doesn't need. Making it look like an Ipad is short sighted and problematic. 

 `navigator.xr` can be used to determine visionOS further but it's not enabled by default so the only way is screen dimensions.
