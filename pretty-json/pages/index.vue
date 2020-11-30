<template>
  <div class="container">
    <Navigation />
    <Main />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Main from '@/components/Main.vue';

export default {
  components: {
    Navigation,
    Main,
  },
  mounted: function() {
  },
}
</script>

<style>
</style>