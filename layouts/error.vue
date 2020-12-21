<template>
  <v-app dark>
    <div class="center">
      <Logo />
      <h1 v-if="error.statusCode === 404" class="text-center">
        {{ pageNotFound }}
      </h1>
      <h1 v-else class="text-center">
        {{ otherError }}
      </h1>
    </div>
  </v-app>
</template>

<script>
import { Logo } from '../components/Logo'
export default {
  layout: 'empty',
  components: Logo,
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found :(',
      otherError: 'An error occurred :('
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
