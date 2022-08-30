<template>
  <div class="home">


  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    showAlert() {
      this.$swal('Hello Vue world!!!');
    },
  }
};
</script>
