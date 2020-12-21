<template>
  <v-app>
    <v-app-bar app dense elevation="2" class="rounded">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="nav=!nav" />
      <v-img class="mx-1" src="/logo.png" max-height="30" max-width="30" contain />
      <v-toolbar-title nuxt to="/">
        <nuxt-link to="/" class="font-weight-bold logo">
          Triple C
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <!-- App bar items -->
      <v-toolbar-items>
        <HelloCarousel />
        <v-btn text nuxt to="/newsletters" class="hidden-sm-and-down">
          Newsletter
        </v-btn>
        <v-btn text nuxt to="/members" class="hidden-sm-and-down">
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
      <v-btn id="nav_contact_button" class="blue" text @click="contactNav = true">
        Contact Us
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-if="$vuetify.breakpoint.mobile" v-model="nav" app clipped>
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="/logo.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> Triple C Official Website </v-list-item-title>
            <v-list-item-subtitle> Navigation </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
        <v-list dense nav>
          <v-list-item nuxt to="/">
            <v-list-item-icon>
              <v-icon> mdi-home </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> Home </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- <v-list-item nuxt to="/about">
            <v-list-item-icon>
              <v-icon> mdi-book </v-icon>
            </v-list-item-icon> -->

          <!-- <v-list-item-content>
            <v-list-item-title> About </v-list-item-title>
          </v-list-item-content>
          </v-list-item> -->

          <v-list-item nuxt to="/newsletters">
            <v-list-item-icon>
              <v-icon> mdi-account-multiple </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> Newsletter </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item nuxt to="/members">
            <v-list-item-icon>
              <v-icon> mdi-account-multiple </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> Members </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-subheader>Projects</v-subheader>

          <v-list-item
            v-for="(item, index) in $store.state.projectList"
            :key="index"
            nuxt
            :to="item.path"
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-content>
              <v-list-item-title> Members </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>

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
          <v-layout row wrap align-start>
            <v-flex xs12 md4 class="text-md-left text-center hidden-sm-and-down">
              <p
                class="text-h6 mx-8 my-0"
                style="word-break: break-word;"
              >
                Get connected with us on social networks!
              </p>
            </v-flex>
            <v-flex xs12 md4 class="text-md-left text-center">
              <v-card-text class="py-2 text-center">
                &copy; {{ new Date().getFullYear() }} — <strong>UCSD Triple C</strong> ▸ <a @click="$vuetify.theme.dark = !$vuetify.theme.dark"> {{ ! $vuetify.theme.dark ? 'Dark Mode' : 'Light Mode' }} </a>
              </v-card-text>
            </v-flex>
            <v-flex xs12 md4 class="text-md-right text-center">
              <div class="mx-4">
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
              </div>
            </v-flex>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-footer>

    <v-dialog v-model="contactNav" max-width="400px">
      <v-card>
        <v-img
          src="/contact-cover.jpg"
          class="white--text align-end mb-6 px-2"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title>
            Contact us
          </v-card-title>
          <v-card-subtitle class="text--white">
            Let's make progress together
          </v-card-subtitle>
        </v-img>
        <v-card-text class="pb-0">
          <div class="d-flex flex-column">
            <v-btn class="mb-2 white--text" outlined>
              <v-icon left>
                mdi-account-group
              </v-icon> Join the team
            </v-btn>
            <v-btn class="mb-2 white--text" outlined>
              <v-icon left>
                mdi-file-document-edit
              </v-icon> Submit a proposal
            </v-btn>
            <v-btn class="mb-6 white--text" outlined>
              <v-icon left>
                mdi-handshake
              </v-icon> Support us
            </v-btn>
          </div>
          <v-divider />
        </v-card-text>
        <v-card-actions>
          <div class="text-center mx-auto">
            <v-btn
              v-for="(item, idx) in socialMediaIcons"
              :key="idx"
              class="mx-2"
              :href="item.link"
              icon
            >
              <v-icon size="24px">
                {{ item.icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="$store.state.snackBar.isOpen"
      :color="$store.state.snackBar.color"
      timeout="-1"
      top
    >
      {{ $store.state.snackBar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="$store.commit('toggleSnackBar')"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import HelloCarousel from '~/components/HelloCarousel.vue'
export default {
  components: {
    HelloCarousel
  },
  data () {
    return {
      nav: false,
      title: 'Triple C',
      socialMediaIcons: [
        { icon: 'mdi-facebook', link: 'https://www.facebook.com/ucsdtriplec' },
        { icon: 'mdi-github', link: 'https://github.com/ucsdtriplec' },
        { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/company/ucsd-chinese-computer-community/' },
        // TODO: Not completed
        { icon: 'mdi-wechat', link: '' }
      ],
      contactNav: false
    }
  }
}
</script>
