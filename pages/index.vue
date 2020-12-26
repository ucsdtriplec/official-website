<template>
  <div>
    <!-- Subscription Dialog -->
    <!-- <v-dialog v-model="subscriptionOverlay" max-width="400">
      <v-card
        ref="form"
        color="#26c6da"
        dark
        :tile="$vuetify.breakpoint.md"
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
          <p class="headline font-weight-bold px-2">
            Subscribe to our weekly articles, be in touch with the team, and get
            involved in our community oppurtunities!
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
    </v-dialog> -->

    <section>
      <v-parallax
        id="homepage-pic"
        dark
        src="/homepage_cover_pic.jpg"
        :height="840"
        jumbotron
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" md="4" offset-md="0">
            <Logo class="float-center" />
          </v-col>
          <v-col class="text-center" md="6" offset="0">
            <h1
              id="title"
              class="text-h3 mb-4 text-left font-weight-bold"
              style="word-break: break-word"
            />
            <h4 class="text-h6 text-left fadeIn">
              This is UCSD Chinese Computer Community. A technology-driven
              business incubator at UC San Diego, we provide a niche fraught of
              professional spirit, technical collaboration, and mutual support.
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
              >"To build a community of innovation and collaboration. To share
                ideas and skills. To grow."</span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-start>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--darken-1">
                        mdi-book
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">
                        We learn.
                      </div>
                    </v-card-title>
                    <v-card-text
                      class="body-1 px-0 px-md-2"
                      style="hyphens: auto"
                    >
                      <h3 class="pt-2">
                        Mentorship Program (New!)
                      </h3>
                      An internal program dedicated to building close
                      connections between our existing members and those newly
                      joined. Topics include technical development, career path
                      selection, and tips for academic development.
                      <h3 class="pt-2">
                        Educational Program:
                      </h3>
                      A group of projects that aims at improving the technical
                      skills of entry-level members. Topics include Android
                      Development, Web development, and Product Design.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-center" style="hyphens: auto">
                      <v-icon
                        x-large
                        class="yellow--text text--darken-2 text--lighten-2"
                      >
                        mdi-xml
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">
                        We
                        <span
                          class="cursor"
                          style="
                            font-family: 'Fira Code', monospace !important;
                            color: #79a9ff;
                          "
                        >code()</span>
                      </div>
                    </v-card-title>
                    <v-card-text
                      class="body-1 px-0 px-md-2"
                      style="hyphens: auto"
                    >
                      <h3 class="pt-2">
                        A Project-Based Student Org
                      </h3>
                      A project-based student organization, we have proudly
                      finished
                      <i> more than twenty projects </i> in the last two years.
                      Our projects range from mobile apps to data analysis, from
                      deep learning to web apps. Check out our
                      <a href="#featured_projects">featured projects</a>!
                      <h3 class="pt-2">
                        Pragmatic Minds
                      </h3>
                      Our first priority is always to support our development
                      teams and ensure the engineering success of our projects.
                      We arm every project group with an arsenal of supporting
                      resources.
                      <br>
                      <b><i>In Code We Trust; In code we Make it happen.</i>
                      </b>
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
                    <v-card-text class="body-1 px-0 px-md-2">
                      <h3 class="pt-2">
                        Demo Day
                      </h3>
                      Our grand event for each quarter. We showcase our latest
                      achievement to our general members and industry partners.
                      <h3 class="pt-2">
                        Intern Panel
                      </h3>
                      Every fall quarter, we invite successful community members
                      to share their industry experience. They always give
                      wonderful insights.
                      <h3 class="pt-2">
                        Technical Workshops:
                      </h3>
                      We host technical workshops every quarter, with topics
                      including computer vision, product management, internship
                      experience, etc.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <div class="py-5">
        <section class="section-body">
          <v-layout column wrap class="my-5">
            <v-flex xs12 sm4 class="my-3">
              <div class="text-center">
                <h2 id="featured_projects" class="text-h4 font-weight-medium">
                  Featured Projects
                </h2>
                <span class="subtitle-1"> *PLACEHOLDER </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex xs12 md6 nuxt>
                    <v-card class="elevation-0 transparent">
                      <v-card-title
                        primary-title
                        class="layout justify-center featured_gold"
                        style="font-weight: 700"
                      >
                        <div
                          class="headline text-xs-center"
                          style="font-weight: 700"
                        >
                          ❇ Kaggle Team Competition ❇
                        </div>
                      </v-card-title>
                      <v-img
                        height="250"
                        src="https://picsum.photos/250/300"
                        class="mx-0 mx-md-2 rounded-lg"
                      />
                      <v-card-text class="body-1 px-0 px-md-2">
                        Triple C’s two data science teams compete in two Kaggle competitions every quarter. We collect, extract and clean specified datasets. We perform data analysis and then use visualization tools to present the results. We build machine learning models to perform predictions.
                        <a href="/projects/kaggle"> Learn More </a>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md6 nuxt>
                    <v-card class="elevation-0 transparent">
                      <v-card-title
                        primary-title
                        class="layout justify-center featured_gold"
                        style="font-weight: 700"
                      >
                        <div
                          class="headline text-xs-center"
                          style="font-weight: 700"
                        >
                          ❇ Xplore UCSD ❇
                        </div>
                      </v-card-title>
                      <v-img
                        height="250"
                        src="https://picsum.photos/250/600"
                        class="mx-0 mx-md-2 rounded-lg"
                      />
                      <v-card-text class="body-1 px-0 px-md-2">
                        Essentially, X-Plore UCSD is a mobile application that
                        aims to provide a pleasant, easy-to-use, and highly
                        customizable guided touring experience for all tourists
                        and prospective students visiting the UC San Diego
                        campus. Thus, a “virtual tour guide” for everyone.
                        <a href="/projects/xplore"> Learn More </a>
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
                  "It’s the time that I’ve wasted here that makes you a
                  masterpiece."
                  <!-- from "Hacking to the gate" -->
                </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-timeline :dense="$vuetify.breakpoint.mobile">
                <v-timeline-item
                  v-for="(item, index) in timeLineItems"
                  :key="index"
                  class="pb-0"
                >
                  <span slot="opposite">{{ item.date }}</span>
                  <v-card class="elevation-0 transparent">
                    <v-card-title class="headline">
                      <span
                        style="word-break: break-word"
                        :style="
                          !$vuetify.breakpoint.mobile &&
                            index % 2 == 1 &&
                            !item.body.children.length
                            ? 'width: 100%; text-align: right;'
                            : ''
                        "
                      >
                        {{ item.title }}
                      </span>
                    </v-card-title>
                    <v-card-text
                      v-if="item.body.children.length"
                      class="body-1 pb-0"
                    >
                      <nuxt-content :document="item" />
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-flex>
            <v-flex xs12 class="text-center">
<<<<<<< HEAD
              <v-btn
              class="ma-2"
              outlined
              @click="ExOrFold()"
              >
                {{ this.validTitem ? "Load More" : "Fold" }}
=======
              <v-btn class="ma-2" outlined @click="ExOrFold()">
                {{ buttonText }}
>>>>>>> bad18e932bcaf5c787235b91564e6dad428eb597
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
                  "Toast to the ones here today. Toast to the ones that we met
                  on the way."
                </span>
                <!-- from "White Album" -->
              </div>
            </v-flex>
            <v-flex xs12 sm4 class="my-3">
              <v-card max-width="1200" class="mx-auto">
                <v-carousel hide-delimiters show-arrows-on-hover cycle>
                  <v-carousel-item
                    v-for="(item, i) in images"
                    :key="i"
                    :src="item.src"
                  />
                </v-carousel>
              </v-card>
            </v-flex>
          </v-layout>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit'
import Logo from '~/components/Logo.vue'
export default {
  components: { Logo },
  async asyncData ({ $content }) {
    const timeLineItems = await $content('timeline')
      .sortBy('index', 'desc')
      .limit(3)
      .fetch()
    return {
      timeLineItems
    }
  },
  data: () => ({
    timeLineItems: [],
    images: [],
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
    validTitem: true
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
    new TypeIt('#title', {
      speed: 60,
      strings: 'Innovate and Collaborate @ Triple C'
    }).go()
    // import all images in the gallery folder
    this.importAll(require.context('@/static/gallery', true, /\.jpeg$/))
  },
  methods: {
    async fetchCheck () {
      const data = await this.$content('timeline').sortBy('index', 'desc').skip(this.timelineItemCounter).limit(3).fetch()
      if (data.length === 0) {
        this.validTitem = false
      } else {
        this.validTitem = true
      }
    },
    async ExOrFold () {
      const data = await this.$content('timeline').sortBy('index', 'desc').skip(this.timelineItemCounter).limit(3).fetch()
      if (data.length !== 0) {
        this.timeLineItems = this.timeLineItems.concat(data)
        this.timelineItemCounter += data.length
      } else {
        this.timeLineItems = this.timeLineItems.slice(0, 3)
        this.timelineItemCounter = 3
      }
      this.fetchCheck()
    },
<<<<<<< HEAD
=======
    importAll (r) {
      r.keys().forEach(key => (this.images.push({ src: '/gallery/' + key.substring(1) })))
    },
>>>>>>> bad18e932bcaf5c787235b91564e6dad428eb597
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
