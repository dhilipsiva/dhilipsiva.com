---
layout:    post
title:     Enable NTFS write support on Mac OS X
---

That is really annoying, isn't it? I mean, you plug-in your Disk into your mac, and all you know is you cannot write anything on it. Anyways, I have found an utility to enable mac to write on your NTFS Hard disk. It's called ntfs-3g. Here are the steps to install it:

```sh
brew info fuse4x-kext
sudo /bin/cp -rfX /usr/local/Cellar/fuse4x-kext/0.9.2/Library/Extensions/fuse4x.kext /Library/Extensions
sudo chmod +s /Library/Extensions/fuse4x.kext/Support/load_fuse4x
mount -t fuse4x
sudo mv /sbin/mount_ntfs /sbin/mount_ntfs.orig
sudo rm /sbin/mount_ntfs
brew install fuse4x sshfs
sudo kextunload /System/Library/Extensions/fuse4x.kext/
sudo kextload /System/Library/Extensions/fuse4x.kext/
brew install ntfs-3g
sudo ln -s /usr/local/Cellar/ntfs-3g/2012.1.15/sbin/mount_ntfs /sbin/mount_ntfs
```
Yes, I know I did not give much of explanation here. Thats because I doubt if this is going to useful for some one. If you are reading this and need some explanation, let me know. I ll update this post as needed. But for now. This is for my future reference.
