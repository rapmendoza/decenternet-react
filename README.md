# Welcome to my application.
This is a small application made mainly with React.
# Available Scripts
In the project directory, you can run:
#### `yarn start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Process in creating the App:

1. Create local repository using [create-react-app](https://github.com/facebook/create-react-app):
### `yarn create react-app decenternet-react.`
2. Create remote repository. I've chosen Github.
3. Set remote repo for the local repo:
### `git remote add origin https://github.com/rapmendoza/decenternet-react.git`
4.	Set default branch:
### `git branch -M master`
5.	Push local to remote repository:
### `git push -u origin master`
6. You can now start developing and push commits into `develop` branch.

## Linting Details:
I've always appreciated these rules that have been enfored in all eslint's recommended style-guides:
 -   Tabs: Two-spaces.
 -   Quotes: Single.
 -   Brace style for control blocks: Same line.
 -   Prefer  `const`/`let`  over  `var` : True.
 -   No trailing spaces: True.
 -   Array bracket spacing: No spaces.

With a few exceptions, I configured the following rules for the project:

    'linebreak-style':  0

 -- inconsistent line breaks are produced between different OS  
 
    'react/react-in-jsx-scope':  'off'

 -- for simpler syntax
 
    radix:  'off'

 -- for simpler syntax in using parseInt()
 
    'import/prefer-default-export':  'off'
                 
-- to use named export when exporting from a single module

     'no-console':  'off'

-- to use console logging in development