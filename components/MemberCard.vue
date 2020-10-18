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
          <div class="overline single-line" style="letter-spacing: 0.15em !important;">
            {{ position }}
          </div>
          <p
            class="headline mb-1 text-end"
            :style="name.length < 17 ? 'font-size: 1.15rem !important;font-weight: 600;' : 'font-size: 0.9rem !important;font-weight: 600;'"
          >
            {{ name }}
          </p>
        </v-list-item-content>

        <v-list-item-avatar
          size="75"
        >
          <!-- TODO: add Lazy URL on server side -->
          <v-img
            :src="avatarUrl"
            lazy-src="data:image/jpeg;base64,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"
            :alt="name"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
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
