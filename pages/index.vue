<template>
  <div>
    <v-dialog v-model="subscriptionOverlay" max-width="400">
      <v-card
        ref="form"
        color="#26c6da"
        dark
        :tile="$vuetify.breakpoint.mobile"
      >
        <v-card-title>
          <v-icon large left>
            mdi-email
          </v-icon>
          <span class="title font-weight-light">Follow Us!</span>
          <v-spacer />
          <v-btn icon class="mx-auto" @click="subscriptionOverlay = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text class="pb-0 mt-2 px-4">
          <p
            class="headline font-weight-bold px-2"
          >
            Subscribe to our weekly articles, be in touch with the team, and get involved in our community oppurtunities!
          </p>
          <v-text-field
            ref="name"
            v-model="subscriptionEmail"
            label="Email"
            placeholder="triplec@gmail.com"
            filled
          />
        </v-card-text>
        <v-card-actions class="mx-2">
          <v-btn
            block
            depressed
            :disabled="!subscriptionEmail"
            color="red lighten-1"
            class="mb-2 lighten"
            @click="submit"
          >
            Subscribe
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <section>
      <v-parallax id="homepage-pic" dark src="/homepage_cover_pic.jpg" :height="840" jumbotron>
        <v-row align="center" justify="center">
          <v-col class="text-center" md="4" offset-md="0">
            <Logo class="float-center" />
          </v-col>
          <v-col class="text-center" md="6" offset="0">
            <h1 class="text-h3 mb-4 text-left font-weight-bold">
              Innovate and Collaborate @ Triple C
            </h1>
            <h4
              class="text-h6 text-left"
            >
              A technology-driven business incubator at UC San Diego, we provide a niche fraught of professional spirit, technical collaboration, and mutual support.
            </h4>
          </v-col>
        </v-row>
      </v-parallax>
    </section>

    <div class="py-5">
      <section class="section-body">
        <v-layout column wrap class="my-5">
          <v-flex xs12 sm4 class="my-3">
            <div class="text-center">
              <h2 class="text-h4 font-weight-medium">
                What we do
              </h2>
              <span
                class="subtitle-1"
              >"If they look like a pro, if they work like a pro, if they code like a pro, if they team up like a pro, they are the pro, right?"</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-start>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="green--text text--darken-1 text--lighten-2">
                        mdi-cogs
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">
                        We work.
                      </div>
                    </v-card-title>
                    <v-card-text class="body-1">
                      We partner with employers to provide students networking and employment opportunities. We host both large and small scale events that provide intimate access to highly competitive and sought after employers.
                      <a
                        href="/workshop"
                        class="blue--text"
                      >Learn more</a>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="yellow--text text--darken-2 text--lighten-2">
                        mdi-xml
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">
                        We code.
                      </div>
                    </v-card-title>
                    <v-card-text class="body-1">
                      We are passionate about technology and service. We develop applications that benefit the Carnegie Mellon community at large.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon
                        x-large
                        class="red--text text--darken-1 text--lighten-2"
                      >
                        mdi-account-group
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">
                        We share.
                      </div>
                    </v-card-title>
                    <v-card-text class="body-1">
                      ACM regularly organizes a variety of talks ranging from social topics like “How to prepare for an interview” and technical topics from “An introduction to Rasberry Pi”, “Debugging Distributed Systems” to “Crossing Numbers, Humanity and Beauty of Math”.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section class="section-body color--red">
        <v-layout column wrap class="my-5">
          <v-flex xs12 sm4 class="my-3">
            <div class="text-center">
              <h2 class="text-h4 font-weight-medium">
                Time Line
              </h2>
              <span class="subtitle-1">
                "It's a confluence of small coincidences, stacked to into an astronomical miracle."
                <!-- from "Hacking to the gate" -->
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-timeline :dense="$vuetify.breakpoint.mobile">
              <v-timeline-item v-for="(item, index) in timeLineItems" :key="index">
                <span slot="opposite">{{ item.date }}</span>
                <v-card class="elevation-0 transparent">
                  <v-card-title class="headline">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-text class="body-1">
                    <nuxt-content :document="item" />
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-flex>
          <v-flex xs12 class="text-center">
            <v-btn
              class="ma-2"
              outlined
              @click="ExOrFold()"
            >
              {{ buttonText }}
            </v-btn>
          </v-flex>
        </v-layout>
      </section>

      <section class="section-body">
        <v-layout column wrap class="my-5">
          <v-flex xs12 sm4 class="my-3">
            <div class="text-center">
              <h2 class="text-h4 font-weight-medium">
                Photo Album
              </h2>
              <span class="subtitle-1">
                "Light snow covers my secret thoughts,
                and dyes the pages of this pure white album"
              </span>
              <!-- from "White Album" -->
            </div>
          </v-flex>
          <v-flex xs12 sm4 class="my-3">
            <v-card max-width="1200" class="mx-auto">
              <v-carousel hide-delimiters show-arrows-on-hover cycle>
                <v-carousel-item v-for="(item,i) in carouselItems" :key="i" :src="item.src" />
              </v-carousel>
            </v-card>
          </v-flex>
        </v-layout>
      </section>
    </div>
  </div>
</template>

<script>
import { Logo } from '~/components/Logo.vue'
export default {
  components: { Logo },
  async asyncData ({ $content }) {
    const timeLineItems = await $content('timeline').sortBy('date').limit(3).fetch()
    return {
      timeLineItems
    }
  },
  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    },
    timelineItemCounter: 3,
    // dummy data
    // TODO: collect these data through API call
    // timeLineItems: [
    //   {
    //     date: '06/03/2019',
    //     name: 'Spring Quarter Demo Day',
    //     info:
    //       "Triple C welcomes everyone to come to our Demo Day on June 3rd. Here, we'll share you with our interesting stories about projects. Here, we'll let you to join projects that interest you. And the most important thing: we'll provide you with DRINKS AND SNACKS. Valued Guest: Professor Thomas Powell, Professor Sicun Gao, Professor Yingjun Cao, Alumni from ServiceNow and AppFolio."
    //   },
    //   {
    //     date: '05/04/2019',
    //     name: 'Spring Quarter Team Bonding',
    //     info:
    //       "Triple C welcomes everyone to come to our Demo Day on June 3rd. Here, we'll share you with our interesting stories about projects. Here, we'll let you to join projects that interest you. And the most important thing: we'll provide you with DRINKS AND SNACKS. Valued Guest: Professor Thomas Powell, Professor Sicun Gao, Professor Yingjun Cao, Alumni from ServiceNow and AppFolio."
    //   },
    //   {
    //     date: '04/09/2019',
    //     name: 'Spring Quarter 2019 GBM',
    //     info:
    //       "On April 4th, Triple C (Chinese Computer Community) had a 'Spring 2019 General Body Meeting' with our incoming staff and our new project contributors. We had 50 students coming for joining our group. By here, we introduced our origination's culture and goals, recruiting talented new staff, showed two of our Website Projects proudly completed by the end of last quarter. We all had a delightful night and finally found where our dream is at together. For further inquiries or if you intend to join our organization, feel free to contact with us via Triple C official email: ucsdtriplec@gmail.com."
    //   }
    // ],
    carouselItems: [
      { src: '/activity1.jpeg' },
      { src: '/activity2.jpeg' },
      { src: '/activity3.jpeg' },
      { src: '/activity4.jpeg' },
      { src: '/activity5.jpeg' },
      { src: '/activity6.jpeg' },
      { src: '/activity7.jpeg' },
      { src: '/activity8.jpeg' },
      { src: '/activity9.jpeg' }
    ],
    loading: false,
    loader: null,
    subscriptionOverlay: false,
    subscriptionEmail: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    validEmail: true,
    expand: false,
    buttonText: 'Load More'
  }),
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  mounted () {
    this.subscriptionOverlay = true // debug
    // set subscriptionOverlay flag if the page is openned for on first time
    if (!window.localStorage.getItem('visited')) {
      this.subscriptionOverlay = true
      window.localStorage.setItem('visited', 'true')
    }
  },
  methods: {
    async ExOrFold () {
      if (!this.expand) {
        const data = await this.$content('timeline').sortBy('date').skip(this.timelineItemCounter).limit(3).fetch()
        this.timeLineItems = this.timeLineItems.concat(data)
        this.timelineItemCounter += data.length
        this.expand = true
        this.buttonText = 'Fold'
      } else {
        this.timeLineItems = this.timeLineItems.slice(0, this.timeLineItems.length - 3)
        this.timelineItemCounter -= 3
        this.expand = false
        this.buttonText = 'Load More'
      }
    },

    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    validate () {
      this.$refs.form.validate()
    },
    submit () {}
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
