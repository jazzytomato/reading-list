# readinglist

> A simple Vuejs project that fetches some book data and displays it

## Notes
- Cross origin requests not allowed on the given url https://priceless-mestorf-883378.netlify.com/fe-data-2.json , also the JSON was malformated so I used https://www.mocky.io/v2/5c30dff23000006800e77ace instead.
- It may look like the data is being fetch every time because of the way lorem pixel works, but it isn't. The browser will reload the image beause the image come from lorempixel which returns a different image every time with response headers `Cache-Control: no-cache, no-store`, e.g. https://lorempixel.com/640/480/?6de7a88ea5ab
- I used Tachyons for fast css prototyping
- I wrote some e2e and unit tests but ran out of time, so it is not well tested

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# update jest snapshots
npm run unit -- -u

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# TASK

## Reading list

Create an application to display a recommended reading list using [Vue.js](https://vuejs.org/) and any suitable libraries.

### Acceptance criteria

* Fetch data from https://priceless-mestorf-883378.netlify.com/fe-data-2.json
* Display the list of books on a page, each book item showing
    - Book title
    - Author name
    - Cover image (thumbnail size)
    - 'More information' link
* Clicking on the 'More information' link should open another page showing
    - Book title
    - Author name
    - ISBN
    - Cover image (full size)
    - A list of book titles by the same Author (with links)
    - 'Back to list' link

### Requirements
A good solution will
* satisfy the acceptance criteria
* work on common web browsers
* have good test coverage
* have a functional user experience and design
* use _appropriate_ front end libraries
* be production ready

Please send us your solution or put it on a repository hosting service such as [GitHub](https://github.com) or [GitLab](https://gitlab.com) and don't forget to include a README file to tell us how to build and run the application.
