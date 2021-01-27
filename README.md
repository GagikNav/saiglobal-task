# SAI-Global-Movie-Time

## Description

### This is an front end movie database, which supports the following use cases:

- View the list of all movies
- View each movie in a separate page
- Insert new movie
- Edit existing movie

## Demo

For demo click [Demo](https://saiglobal-movie-time.netlify.app)

## Licence

- MIT

## Contacts

- Reach out to me at: gagik.n@gmail.com
- My portfolio: [Gagik.me](https://www.gagik.me)

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Project’s main requirements:

- Showing the full list of movie records in a user friendly way
- Each movie record has 5 field, using required field validation, min length validation and correct format for URLs
- Each item can be opened in a new page where it can be edited and deleted
- Uses veu.js and vuex
- Routing is done via vue-router,
- UI is built from scratch
- Uses Tailwind for styling

## Extra features:

- It’s fully responsive
- Some basic UI components such as header, footer, hero image, etc are also implemented to provide a smoother look and feel from UI/UX perspective
- Items can be listed based on the movie’s genre, via clicking on the respective link in the footer
- In the “Add movie” page, if the user doesn't have an image URL in hand, they can click on the” Im feeling lucky” section and an automatic image will be used for that card. This saves the time for the user so they can take their time to find the most suitable image at their own pace.
- Modals: The website displays a reusable modal every time the user prompts to delete an item. It also displays a proper message after the action has completed successfully.
- Application is deployed in [Netlify](https://saiglobal-movie-time.netlify.app)
- Edit and Add are using the same component In order to increase efficiency and reusability

## API

- [Lorem Picsum](https://picsum.photos/)
