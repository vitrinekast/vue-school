<template>
<div class="col-full">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories" />
</div>
</template>

<script>
import { mapActions } from 'Vuex'
import CategoryList from '@/components/CategoryList'

export default {

  components: {
    CategoryList
  },
  computed: {
    categories () {
      return Object.values(this.$store.state.categories)
    }
  },

  methods: {
    ...mapActions(['fetchAllCategories', 'fetchForums'])
  },

  created () {
    this.fetchAllCategories()
      .then((categories) => {
        categories.forEach(category => this.fetchForums({ids: Object.values(category.forums)}))
      })
  }
}
</script>
