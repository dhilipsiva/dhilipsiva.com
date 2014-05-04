---
layout:    post
title:     Plugin Architecture - Programming Using Python
---

Python!!! She, is a beauty. I have been in love with her lately. At work, I was asked to write an application that supports a plugin architecture. After 4 days of mind-screwing thinking,  I came up with a model that supports plugin architecture. I honestly don't know if this is the efficient way. But, it works. So here is a tutorial for you. This is just a quick tutorial.

Consider an example : you need to write a program that gets a string input from console and perfoms a case-swap and returns back to you. So let us code three plugins for that. First plugin is to get a value from the console, then to swap case and the last plugin to print the result. Therefore let us divide the components into 5 parts.

1. A Class File : To hold all the data that are shared by the plugins at run-time
2. Plugin 1 : To get a string from console
3. Plugin 2 : To Swap Cases
4. Plugin 3 : To print the result
5. The Main Program

#### Implementation:

1.You need a class file to hold all the data that are share by the plugins and the main program. so lets deal with that file first. Lets call this file as AppData.py

```python
class AppDataClass:
    global ipString
    global opString
```

2.The First Plugin : ReadInput.py

```python
from AppData import AppDataClass
def init():
    AppDataClass.ipString = str(raw_input("EnTeR a StRiNg : "))
```

3.The next plugin : SwapCase.py

```python
from AppData import AppDataClass
def init():
    AppDataClass.opString = AppDataClass.ipString.swapcase()
```

4.The Final Plugin : PrintOutput.py

```python
from AppData import AppDataClass
def init():
    print AppDataClass.ipString.swapcase()
```
5.The main program : PluginExample.py

```python
import imp
from AppData import AppDataClass

def main():

    AppDataClass.ipString = ''
    AppDataClass.opString = ''
    ModuleNameList = ['ReadInput','SwapCase','PrintOutput']

    for ModuleName in ModuleNameList:
        mFile, mPath, mDescription = imp.find_module(ModuleName,['PLUGINS/'])
        mObject = imp.load_module(ModuleName, mFile, mPath, mDescription)
        mObject.init()


if __name__ == '__main__':
    main()
```

#### Points to ponder

I have used init() method as an entry point to all the plugins above. So that when we import modules, we know which is the entrypoint of the plugin.
