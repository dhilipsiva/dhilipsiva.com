---
layout:    post
title:     Install PostgreSQL on OS X using Homebrew
---

**Strong advice**: DO NOT use any "installers" for you development purpose. And by installers, I mean GUI based wizards / drag and drop ones. always rely on command-line. If you are not using [Homebrew](http://brew.sh/) yet, Start using it immediately. For those who have never used it, is it like an "apt-get" for mac. Technically speaking, it is a package-manager. There is an other alternative to Homebrew called [MacPorts](http://www.macports.org/). But I have never user MacPorts. I am happy with Homebrew. So I dont know much about MacPorts.

So before installing through Homebrew make sure that you uninstalled the old version completely and restarted (Just to make sure there are no startup items related to postgres) your mac. Open "Activity Monitor" and ensure there are no "postgres" processes. And follow commands. If required run command "brew doctor" just to make sure that everything is OK with Homebrew.

```sh
brew update
brew install postgresql
initdb /usr/local/var/postgres
cp /usr/local/Cellar/postgresql/(your-pg-version)/homebrew.mxcl.postgresql.plist ~/Library/LaunchAgents/
launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
```

Note: When you use Homebrew to install Postgresql, It does not create a "postgres" user for you. If you really need it, you can create one yourself. But normally the user that you are currently logged in as will  have super-user privileges. It comes in handy during development.
