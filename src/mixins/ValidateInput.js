/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
export default {
  methods: {
    validate(data) {
      let { name, description, picUrl, year, genre } = data;
      let errors = {};
      //  url validation
      const expression = /^(.+)\/.*$/gi;
      let isUrl = expression.test(picUrl) ? true : false;
      if (picUrl.length === 0) {
        errors.picUrl = 'Picture url required';
      } else if (!isUrl) {
        errors.picUrl = 'Please enter valid URL';
      }
      // name
      if (name.length === 0) {
        errors.name = 'Name is required';
      } else if (name.length > 0 && name.length < 3) {
        errors.name = 'Name should be more than 3 characters';
      } else if (name.length > 20) {
        errors.name = 'Name should be less than 20 characters';
      }
      // description
      if (description.length === 0) {
        errors.description = 'Description is required';
      } else if (description.length > 0 && description.length < 10) {
        errors.description = 'Description should be more than 10 characters';
      } else if (description.length > 550) {
        errors.description = 'Description should be less than 150 characters';
      }
      //..
      // Year validation
      if (year.length === 0) {
        errors.year = 'Please select a movie year';
      }

      //..
      // genre
      if (genre.length === 0) errors.genre = 'Please select genre';

      // ..
      this.errorObject = { ...errors };
    },
  },
};
