<template>
  <div>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
</script>


<style scoped>

</style>