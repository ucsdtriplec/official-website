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
      They are all in the room where it happens.
    </div>
    <v-divider class="ma-2 mb-8" />
    <div v-for="(i, idx) in team" :key="idx">
      <h6 class="text-h6 mx-2">
        {{ i.groupName }}
      </h6>
      <v-container class="px-0">
        <v-row no-gutters>
          <v-col
            v-for="(member, idx) in i.members"
            :key="idx"
            cols="12"
            xs="12"
            sm="6"
            md="4"
          >
            <v-row
              align="center"
              justify="center"
              class=" ma-2"
            >
              <MemberCard
                :name="member.name"
                :position="member.position"
                :description="member.description"
                :avatar-url="member.avatarUrl"
                :links="member.links"
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
  data () {
    return {
      // fake data
      team: [
        {
          groupName: 'Bussiness Administration',
          members: [
            {
              name: 'Aki',
              position: 'Boxer',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/85/87',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' }
              ]
            },
            {
              name: 'Billy',
              position: 'Werewolf',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/88/85',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' },
                { icon: 'email', url: 'mailto: x3shao@ucsd.edu' },
                { icon: 'telegram', url: 'https://github.com/xiyan128' }
              ]
            },
            {
              name: 'Catherine',
              position: 'Whooper',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/86/89',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' }
              ]
            }
          ]
        },
        {
          groupName: 'Human Resource',
          members: [
            {
              name: 'Alice',
              position: 'Sender',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/85/84',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' }
              ]
            },
            {
              name: 'Bob',
              position: 'Receiver',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/84/85',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' }
              ]
            },
            {
              name: 'Cynthia',
              position: 'Fire fighter',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/86/84',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' }
              ]
            },
            {
              name: 'Dolly',
              position: 'Researcher',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/86/86',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' }
              ]
            }
          ]
        },
        {
          groupName: 'Technical',
          members: [
            {
              name: 'Abby',
              position: 'Clerk',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/86/88',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' }
              ]
            },
            {
              name: 'Benny',
              position: 'Custodian',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/88/86',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' }
              ]
            },
            {
              name: 'Cook',
              position: 'cook',
              description: 'This is the description',
              avatarUrl: 'https://picsum.photos/89/85',
              links: [
                { icon: 'github', url: 'https://github.com/xiyan128' }
              ]
            }
          ]
        }
      ]
    }
  }
}

</script>

<style>

</style>
