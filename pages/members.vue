<template>
  <div class="markdown-body">
    <v-img
      height="300"
      src="/team-cover.jpg"
      class="ma-2"
    />
    <h1 class="display-1 ma-2">
      Meet the team
    </h1>
    <div class="grey--text subheading mx-2">
      "They are all in the room where it happens."
      <!-- from "Hamilton" -->
    </div>
    <v-divider class="ma-2 mb-8" />
    <div v-for="(departmentMembers, departmentName) in $store.getters.getMembersByDepartment" :key="departmentName">
      <h6 class="text-h6 mx-2">
        {{ departmentName }}
      </h6>
      <v-container class="px-0">
        <v-row no-gutters>
          <v-col
            v-for="(member, idx) in departmentMembers"
            :key="idx"
            cols="12"
            xs="12"
            sm="6"
            md="4"
          >
            <v-row
              align="center"
              justify="center"
              class="ma-2"
            >
              <MemberCard
                :name="member.name"
                :position="member.position"
                :description="member.motto"
                :avatar-url="member.avatar"
                :links="{email: 'mailto:' + member.email, linkedin: member.linkedin, github: member.github}"
                :uuid="member.uuid"
                class="align-center"
              />
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  async fetch ({ store, params }) {
    await store.dispatch('SET_MEMBERLIST')
  },
  beforeDestroy () {
    this.$store.commit('closeSnackBar')
  }
}
</script>

<style>

</style>
