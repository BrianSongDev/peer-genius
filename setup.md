# Setup
Here is an extended guide on how to successfully open and view the development website on a local "server."  
This guide may be too specific to be functional for every device, so this is mainly for those who have difficulty because of Windows and such.
## Windows:  
- Install Git from [here](https://github.com/git-for-windows/git/releases/download/v2.22.0.windows.1/Git-2.22.0-64-bit.exe)
- Install npm (the compiler we will use) and Node.js from [here](https://nodejs.org/dist/v10.16.0/node-v10.16.0-x86.msi)
- Open Command Prompt (win key + q and type "cmd")
- In cmd, type "npm install -g parcel-bundler"
- In cmd, "cd" into your preferred directory where you wish to install this project. 
- In cmd, type "git clone https://github.com/BrianSongDev/peer-genius.git"
- In cmd, "cd" into your folder containing the project you just cloned.
- In cmd, type "npm start" and wait for npm to compile the files.
- When it gives success and you are given a url, probably "localhost:1234," copy and paste that into your browser.
- You should now be able to view the website.
## Mac:
- Install npm (the compiler we will use) and Node.js here:
  - Open Terminal
  - Type "brew update"
  - Type "brew install node"
- Stay in Terminal and type "npm install -g parcel-bundler"
- In Terminal, type "git clone https://github.com/BrianSongDev/peer-genius.git" in the preferred directory of installation
- In Terminal, "cd" into your folder containing the project you just cloned.
- In Terminal, type "npm start" and wait for npm to compile the files.
- When it gives success and you are given a url, probably "localhost:1234," copy and paste that into your browser.
- You should now be able to view the website.
