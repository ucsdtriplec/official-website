<template>
  <!-- TODO: implement this hover effect -->
  <v-hover v-slot:default="{ hover }">
    <v-card
      max-width="344"
      outlined
      class="transition-swing"
    >
      <v-fade-transition v-if="links.length">
        <v-overlay
          v-if="hover"
          absolute
          color="blue"
          style="backdrop-filter: blur(2px);"
        >
          <v-btn
            v-for="(item, idx) in links"
            :key="idx"
            :href="item.url"
            icon
          >
            <v-icon>
              {{ "mdi-" + item.icon }}
            </v-icon>
          </v-btn>
        </v-overlay>
      </v-fade-transition>
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
  </v-hover>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  }
}
</script>
