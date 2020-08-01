<template>
  <!-- TODO: implement this hover effect -->
  <v-hover v-slot:default="{ hover }">
    <v-card
      width="344"
      outlined
      class="transition-swing"
    >
      <v-fade-transition v-if="description.length | links!={}">
        <v-overlay
          v-if="hover"
          absolute
          color="blue"
          style="backdrop-filter: blur(2px);"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <p class="text-subtitle-2 text-center">
                {{ description }}
              </p>
              <div class="text-center">
                <v-btn
                  v-for="(url, iconName) in links"
                  :key="iconName"
                  :href="url"
                  :disabled="!url"
                  icon
                >
                  <v-icon>
                    {{ "mdi-" + iconName }}
                  </v-icon>
                </v-btn>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-overlay>
      </v-fade-transition>
      <v-list-item two-line>
        <v-list-item-content>
          <div class="overline">
            {{ position }}
          </div>
          <p class="headline mb-1 text-end">
            {{ name }}
          </p>
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
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  }
}
</script>
