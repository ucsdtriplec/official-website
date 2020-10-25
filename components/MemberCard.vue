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
            :src="getCompressedImageUrl(avatarUrl, 75, 75)"
            :lazy-src="getCompressedImageUrl(avatarUrl, 10, 10)"
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
import config from '../config'
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
      default: '/default-avatar.jpg'
    },
    links: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      getCompressedImageUrl (url, width, height) {
        if (url == null) { return '/default-avatar.jpg' }
        const imageRequest = JSON.stringify({
          bucket: config.AWS_BUCKET_NAME,
          key: url.substring(url.lastIndexOf('/') + 1),
          edits: {
            resize: {
              width,
              height,
              fit: 'cover'
            }
          }
        })
        return config.IMAGE_HANDLER_ENDPOINT + '/' + Buffer.from(imageRequest).toString('base64')
      }
    }
  }
}
</script>
