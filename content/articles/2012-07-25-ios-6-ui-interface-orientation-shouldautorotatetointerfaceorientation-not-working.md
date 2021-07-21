---
layout:    post
title:     iOS 6 UI Interface Orientation - shouldAutorotateToInterfaceOrientation - Not Working
---

The method shouldAutorotateToInterfaceOrientation: is NOT supported in iOS 6. Its deprecated. Just in case if you are a newbie, who just stared working in cocoa, and wondering why is your view controller messed up in iOS 6 and perfect in iOS 5, just know that shouldAutorotateToInterfaceOrientation: is not supported anymore. Even though it may work well with Xcode 4 to 4.3 it will NOT work on Xcode 4.5.

Apple provides a new method to get this thing done, in a much cleaner fashion. You use supportedInterfaceOrientations instead. It returns all of the interface orientations that the view controller supports, a mask of interface orientation values.

#### UIInterfaceOrientationMask Enum

These constants are mask bits for specifying a view controller's supported interface orientations.

```objective-c
typedef enum {
    UIInterfaceOrientationMaskPortrait = (1 << UIInterfaceOrientationPortrait),
    UIInterfaceOrientationMaskLandscapeLeft = (1 << UIInterfaceOrientationLandscapeLeft),
    UIInterfaceOrientationMaskLandscapeRight = (1 << UIInterfaceOrientationLandscapeRight),
    UIInterfaceOrientationMaskPortraitUpsideDown = (1 << UIInterfaceOrientationPortraitUpsideDown),
    UIInterfaceOrientationMaskLandscape =
        (UIInterfaceOrientationMaskLandscapeLeft | UIInterfaceOrientationMaskLandscapeRight),
    UIInterfaceOrientationMaskAll =
        (UIInterfaceOrientationMaskPortrait | UIInterfaceOrientationMaskLandscapeLeft |
    UIInterfaceOrientationMaskLandscapeRight | UIInterfaceOrientationMaskPortraitUpsideDown),
    UIInterfaceOrientationMaskAllButUpsideDown =
        (UIInterfaceOrientationMaskPortrait | UIInterfaceOrientationMaskLandscapeLeft |
    UIInterfaceOrientationMaskLandscapeRight),
} UIInterfaceOrientationMask;
```

Example:

Again, if you are newbie searching for an example, let me give you an example. Consider that you have to set your interface orientation to both left and right landscape orientations

#### Using shouldAutorotateToInterfaceOrientation: method

```objective-c
-(BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation {
    return UIInterfaceOrientationIsPortrait(toInterfaceOrientation);
}
```

#### Using supportedInterfaceOrientations method

I am always glad to help anybody, if I have the time for it. Well from iOS 6.0, the system never asks for the supported interface orientations with the view controllers. It only asks the parent. In most of the cases, AppDelegate is always the parent. This is a line of code from the ReWire (http://www.rewireapp.com/) app that I have been working lately. I had a specific requirement. I had to set landscape mode only to VideoMeditationViewController. The rest of the video controllers should only support portrait orientation. So here is a solution:

```objective-c
-(NSUInteger)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window{
    if([rwNavigationController.topViewController isMemberOfClass:[VideoMeditationViewController class]]){
        return UIInterfaceOrientationMaskLandscape;
    }
    else{
        return UIInterfaceOrientationMaskPortrait;
    }
}
```

Yes, I know this is a hack. And I know this is not an elegant way of doing things. But trust me, this is the easiest.
