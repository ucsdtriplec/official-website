<template>
  <!-- TODO: implement this hover effect -->
  <v-hover v-slot:default="{ hover }">
    <v-card width="344" outlined class="transition-swing">
      <v-fade-transition v-if="description || description.length">
        <v-overlay
          v-if="hover"
          absolute
          color="blue"
          style="backdrop-filter: blur(2px)"
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
                  :href="iconName == 'email' ? 'mailto: ' + url : url"
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
          <div
            class="overline single-line"
            style="letter-spacing: 0.15em !important"
          >
            {{ position }}
          </div>
          <p
            class="headline mb-1 text-end"
            :style="
              name.length < 17
                ? 'font-size: 1.15rem !important;font-weight: 600;'
                : 'font-size: 0.9rem !important;font-weight: 600;'
            "
          >
            {{ name }}
          </p>
        </v-list-item-content>

        <v-list-item-avatar size="75">
          <!-- TODO: add Lazy URL on server side -->
          <v-img :src="getCompressedImageUrl(avatarUrl, 75, 75)" :alt="name">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
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
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    avatarUrl: {
      type: String,
      default: '/default_avatar/avatar_d1'
    },
    links: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      imgLoaded: false,
      modifiedUrl: '',
      getCompressedImageUrl (url, width, height) {
        if (this.imgLoaded) {
          return this.modifiedUrl
        }
        this.imgLoaded = true
        if (url == null) {
          this.modifiedUrl =
            '/default_avatar/avatar-d' +
            Math.floor(Math.random() * 12 + 1) +
            '.png'
          return this.modifiedUrl
        }
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
        this.modifiedUrl = (
          config.IMAGE_HANDLER_ENDPOINT +
          '/' +
          Buffer.from(imageRequest).toString('base64')
        )
        return this.modifiedUrl
      }
    }
  }
}
</script>
