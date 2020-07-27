<template>
  <v-card class="markdown-body" max-width="980">
    <h1 class="display-1 ma-2">
      {{ article.title }}
    </h1>
    <div class="grey--text subheading mx-2">
      {{ article.description }}
    </div>
    <v-container class="px-0">
      <v-row no-gutters>
        <v-col
          v-for="n in 2"
          :key="n"
          cols="12"
          sm="4"
        >
          <MemberCard name="Ron Graham" position="Tech Lead" description="architecture / back-end / DB / testing" avatar-url="https://i1.hdslb.com/bfs/face/76af262e214b1213bde5cc76a6be471e394da328.jpg_64x64.jpg" class="align-center ma-2" />
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="mb-4 mt-2 mx-2" />
    <article class="mx-2">
      <nuxt-content :document="article" />
    </article>
  </v-card>
</template>

<script>
import { MemberCard } from '~/components/MemberCard.vue'

export default {
  components: {
    MemberCard
  },
  async asyncData ({ $content, params }) {
    const article = await $content('projects', params.slug).fetch()

    return { article }
  },
  head () {
    return {
      title: this.article.title
    }
  }
}
</script>
