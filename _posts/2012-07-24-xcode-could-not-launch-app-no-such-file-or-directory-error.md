---
layout:    post
title:     Xcode - Could not launch app - No such file or directory Error
---

 I found this really annoying problem with Xcode and fixed it. When you run a project on Xcode, you sometimes end up with a message like this:

	Could not launch app - No such file or directory

Thats really annoying. This error happens in a number of different situations. Sometime restarting the Xcode, fixes the problem. If not, follow these steps:

1. Disconnect your device.
2. Delete the app from your device.
3. Quit xcode (Don't just simply close the window, quit it)
4. Delete derived data folder (~/Library/Developer/Xcode/DerivedData/-gbrvhlvwmpiobxdujegtghggrffp - or something like that)
5. Now start Xcode, connect device and run the project. It should work fine.

Even theses steps are not helping me sometimes. I don't know what is causing this problem. When everything else fails, restarting both Mac and iOS device solved the issue in some situation. And what is weirder? Some times the app just runs fine the next day, without me changing anything.  I know I am not practicing an elegant solution, but this is the only working solution I found so far. If you have any Ideas, you can mail me. I ll update this post as necessary. BTW, this is the post with most hits on my blog. 20,000 and counting! :)

