# Learn Vue.js

## Requirements
- virtualenvwrapper
- yarn
- python3.5 and higher

## Getting started
1. Create a virtualenv and switch to it `mkvirtualenv learn-vuejs`
2. Install pip packages `pip install -r requirements.txt`
3. Install NPM packages `yarn`
4. Copy `.env.example` to `.env` file and fill up database connection information
5. Run migrations `./manage.py migrate`
6. Run django server with 8007 port `./manage.py runserver 8007`
7. Run webpack-dev-server `yarn dev`



## Stack
- webpack 4 (with hot reload)
- postcss
- babel
- django 2.1
- django rest framework
- dynamic imports (code split)
