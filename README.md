# Peer Genius Web App (1.0)

Made with ReactJS

### Files so far:

- Landing page
- Login page
- Signup page

### Some notes recorded during development:

- Code may be a bit messy: with the implementation of multiple CSS files rather than just one, I observed test runs where the second CSS file wouldn't load. I'm not sure why this happens, which is why I compiled all the CSS code in my main file.
- My code may need a bit of refractoring and some necessary functions might not be so "necessary."
- Some size constraints were used solely based on judgement (i.e. not percentages but rather "this looks about 50%") because there were some text-align issues.
- Need help on issue found on 8.1

**Here is a link to a more comprehensive set-up guide. Simply opening the HTML file will not activate the other files as they need to be compiled first.** [Link](https://github.com/BrianSongDev/peer-genius/blob/master/setup.md)

- Make sure you have git, npm, and parcel installed (npm install parcel-bundler)
- Clone the folder
- Go into Terminal
- `cd FOLDERNAME`
- `npm start`
- Go into the localhost URL the terminal window gives you.

### Issues

- **7.16** No icons for social media redirects in the footer of the page
- **7.16** Size constraints not fully functional for mobile and other platforms; tested on iMac 27-in 2017 model. **FIXED 7.23**
- **7.16** Header buttons overlap when at a skinnier resolution
- **7.16** Links are not functional yet **FIXED 7.24**
- **7.23** Constraint locking for width of 1056 px **FIXED 7.23**
- **8.1** An issue popped up with dynamically changing the element of class name "descripp" in the SignUp page. My attempts to change the text were in lines 216-219 and in lines 236-239.

### More issues

- Post in "Issues" tab
