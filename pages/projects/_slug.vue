<template>
  <v-card class="markdown-body" max-width="980">
    <h1 class="display-1 ma-2">
      {{ article.title }}
    </h1>
    <div class="grey--text subheading mx-2">
      {{ article.description }}
    </div>
    <v-container v-if="article.team" class="px-0">
      <v-row no-gutters>
        <v-col
          v-for="(member, idx) in article.team"
          :key="idx"
          cols="12"
          sm="4"
        >
          <MemberCard
            :name="member.name"
            :position="member.position"
            :description="member.description"
            :avatar-url="member.avatarUrl"
            :links="member.links"
            class="align-center ma-2"
          />
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
