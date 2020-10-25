<template>
  <v-card class="markdown-body" max-width="936">
    <h1 class="display-1 ma-2">
      {{ article.title }}
    </h1>
    <div class="grey--text subheading mx-2">
      {{ article.description }}
    </div>
    <v-container v-if="article.team" class="px-0">
      <v-row no-gutters>
        <v-col
          v-for="(member, idx) in article.team.map(name => $store.getters.getMemberByName(name))"
          :key="idx"
          cols="12"
          xs="12"
          sm="6"
          md="4"
        >
          <v-row
            align="center"
            justify="center"
            class="ma-2"
          >
            <MemberCard
              :name="member.name"
              :position="member.position"
              :description="member.motto"
              :avatar-url="member.avatar"
              :links="{email: 'mailto:' + member.email, linkedin: member.linkedin, github: member.github}"
              :uuid="member.uuid"
              class="align-center"
            />
          </v-row>
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
  async fetch ({ store, params }) {
    await store.dispatch('SET_MEMBERLIST')
  },
  async asyncData ({ $content, params, store }) {
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
