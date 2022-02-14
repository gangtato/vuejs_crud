<template>
  <div>
    <Header/>
    <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/index.vue'
import Hero from '@/components/Hero/index.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero
  }
}
</script>
