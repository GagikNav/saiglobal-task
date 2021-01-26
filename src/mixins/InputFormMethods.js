/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
export default {
  methods: {
    feelLucky() {
      // this is for test  get pictures form lorempisum
      this.formData.picUrl = `https://picsum.photos/1350/900?random=${this.$store.state.movies.length}`;
    },

    openModal() {
      // Opning confirmation modal
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    callFormAction() {
      this.modifyMovie();
    },

    handleNotification(status) {
      this.isNotificationOpen = status;
    },

    modifyMovie() {
      if (!this.isError) {
        // submit trough the action as a convention
        if (this.movieData) {
          this.$store.dispatch('editData', this.formData); //if edit mode
        } else {
          this.$store.dispatch('addData', this.formData); // if save mode
        }
        this.clearForm();
        this.closeModal();
        this.handleNotification(true);
      } else {
        console.log('Please correct the errors');
        return;
      }
    },

    clearForm() {
      this.formData = {
        genre: [],
        name: '',
        description: '',
        year: '',
        picUrl: '',
      };
    },
  },
};
