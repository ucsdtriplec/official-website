<template>
  <!-- TODO: implement this hover effect -->
  <!-- <v-hover v-slot:default="{ hover }"> -->
  <v-card
    max-width="344"
    outlined
  >
    <!-- <v-fade-transition>
        <v-overlay
          v-if="hover"
          absolute
          color="blue"
        >
          <v-btn>See more info</v-btn>
        </v-overlay>
      </v-fade-transition> -->
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{ position }}
        </div>
        <v-list-item-title class="headline mb-1">
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle> {{ description }} </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        size="80"
        color="blue"
      >
        <img
          :src="avatarUrl"
          :alt="name"
        >
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
  <!-- </v-hover> -->
</template>

<script>
export default {
  props: ['name', 'position', 'description', 'avatarUrl'],
  data () {
    return {
    //   hover: false
    }
  }
}
</script>
