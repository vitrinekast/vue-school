<template lang="html">
  <div class="col-full" :class="$style.centered">
    <h1 :class="$style.headerLarge">Not Found</h1>
    <p :class="$style.textLarge">Oops. we couldnt find what you're looking for. Why don't you go
      <router-link :to="{ name: 'home'}">home</router-link>
       instead.</p>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" module>
.headerLarge  {
  font-size: 4rem;
}

.textLarge {
  font-size: 2rem;
}

.centered {
  text-align: center;
}
</style>
