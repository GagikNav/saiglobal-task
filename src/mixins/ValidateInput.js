/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
export default {
  computed: {
    validate(values) {
      let { movieName, description, year, picUrl } = values;
      let errors = {};

      const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      let regex = new RegExp(expression);
      let isUrl = picUrl.match(regex) ? true : false;

      // name
      if (movieName.length === 0) {
        errors.movieName = 'Name is required';
      } else if (movieName.length > 0 && movieName.length < 3) {
        errors.movieName = 'Name should be more than 3 characters';
      } else if (movieName.length > 20) {
        errors.movieName = 'Name should be less than 20 characters';
      }
      // ..

      // description

      if (description.length === 0) {
        errors.description = 'Description is required';
      } else if (description.length > 0 && description.length < 10) {
        errors.description = 'Description should be more than 10 characters';
      } else if (description.length > 150) {
        errors.description = 'Description should be less than 150 characters';
      }
      // ..
      // Year

      //
      if (picUrl.length === 0) {
        errors.picUrl = 'Picture url required';
      }
      if (!isUrl) {
        errors.picUrl = 'Please enter valid URL';
      }

      return errors;
    },
  },
};
