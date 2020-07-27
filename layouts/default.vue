<template>
  <v-app>
    <v-app-bar fixed app>
      <v-img class="mx-2" src="/logo.png" max-height="40" max-width="40" contain />
      <v-toolbar-title nuxt to="/">
        <nuxt-link to="/" class="font-weight-bold logo">
          Triple C
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <!-- App bar items -->
      <v-toolbar-items>
        <HelloCarousel />
        <v-btn text nuxt to="about" class="hidden-sm-and-down">
          About
        </v-btn>
        <!-- <v-btn text nuxt to="events" class="hidden-sm-and-down">
          Events
        </v-btn>
        <v-btn text nuxt to="photos" class="hidden-sm-and-down">
          Photos
        </v-btn> -->
        <v-btn text nuxt to="members" class="hidden-sm-and-down">
          Members
        </v-btn>
        <v-menu v-ripple="false" offset-y nudge-bottom="10" transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              class="hidden-sm-and-down"
              v-bind="attrs"
              v-on="on"
            >
              Projects
              <v-icon right>
                mdi-menu-down
              </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in $store.state.projectList"
              :key="index"
              nuxt
              :to="item.path"
            >
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-divider
        class="mr-4"
        vertical
      />
      <v-btn id="nav_contact_button" class="blue" text nuxt to="register">
        Contact Us
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title>
          <strong class="subheading">Get connected with us on social networks!</strong>
          <v-spacer />
          <v-btn
            v-for="(item, idx) in socialMediaIcons"
            :key="idx"
            class="mx-4"
            :href="item.link"
            icon
          >
            <v-icon size="24px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 text-center">
          &copy; {{ new Date().getFullYear() }} — <strong>UCSD Triple C</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { HelloCarousel } from '~/components/HelloCarousel.vue'
export default {
  components: {
    HelloCarousel
  },
  data () {
    return {
      fixed: false,
      title: 'Triple C',
      socialMediaIcons: [
        { icon: 'mdi-facebook', link: 'https://www.facebook.com/ucsdtriplec' },
        { icon: 'mdi-github', link: 'https://github.com/ucsdtriplec' },
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/company/ucsd-chinese-computer-community/' },
        // TODO: Not completed
        { icon: 'mdi-wechat', link: '' }
      ]
    }
  }
}
</script>
