<template>
  <div class="markdown-body">
    <v-img
      height="300"
      src="/newsletter.jpg"
      class="ma-2 rounded"
    />
    <h1 class="display-1 ma-2">
      Newsletters
    </h1>
    <div class="grey--text subheading mx-2">
      *PLACEHOLDER*
    </div>
    <v-divider class="ma-2 mb-8" />
    <div class="px-2">
      <v-card v-for="(letter, index) in $store.state.newsletters" :key="index" class="my-4" flat outlined>
        <v-card-title style="word-break: break-word;">
          <a :href="letter.archive_url" class="letter-title"> {{ letter.settings.title }} </a>
        </v-card-title>
        <v-card-text> {{ letter.settings.preview_text }} </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .letter-title {
    color: unset;
    text-decoration: none;
  }
  .letter-title:hover {
    color: #1976d2;
  }
</style>
