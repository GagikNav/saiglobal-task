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
        this.notifyType = 'Submit';
        this.handleNotification(true);
        setTimeout(() => {
          this.$router.push('/');
        }, 2000);
      } else {
        this.notifyType = 'warning';
        this.handleNotification(true);
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
