import config from '../config'
const mailchimp = require('@mailchimp/mailchimp_marketing')

mailchimp.setConfig({
  apiKey: config.MAILCHIMP_API_KEY,
  server: config.MAILCHIMP_SERVER
})

export const state = () => ({
  projectList: [],
  memberList: [],
  snackBar: {
    isOpen: false,
    text: '',
    color: 'success'
  },
  newsletters: []
})

export const getters = {
  getMembersByDepartment (state) {
    return state.memberList.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue.department] = result[currentValue.department] || []).push(
        currentValue
      )
      return result
    }, {})
  },
  getMemberByName: state => name => state.memberList.filter(member => member.name === name)[0] ??
  {
    avatar: null,
    department: '',
    email: null,
    github: null,
    id: null,
    linkedIn: '',
    motto: '',
    name,
    position: '',
    project: '',
    uuid: ''
  }
}
export const mutations = {
  updateProjectList (state, data) {
    state.projectList = data
  },

  toggleSnackBar (state) {
    state.snackBar.isOpen = !state.snackBar.isOpen
  },

  closeSnackBar (state) {
    state.snackBar.isOpen = false
  },

  showSnackBar (state, { text, color }) {
    state.snackBar.text = text
    state.snackBar.color = color
    state.snackBar.isOpen = true
  },

  setMemberList (state, data) {
    state.memberList = data.members
  },

  setNewsletters (state, data) {
    data = data.campaigns.filter(letter => letter.settings.folder_id === config.MAILCHIMP_FOLDER_ID)
    data.sort((a, b) => new Date(b.send_time) - new Date(a.send_time))
    state.newsletters = data
  }
}

export const actions = {
  // automatically fetches the project markdown list when the server inits, to be used for navigation
  // putting the code here because layout pages do not allow asyncDatas
  async nuxtServerInit ({ commit }, { $content }) {
    const data = await $content('projects')
      .only(['title', 'path', 'description'])
      .sortBy('date', 'asc')
      .fetch()
    commit('updateProjectList', data)
    const response = await mailchimp.campaigns.list({ count: 100 })
    commit('setNewsletters', response)
  },

  async SET_MEMBERLIST ({ commit }) {
    await this.$axios.$post(`${config.API_PREFIX}/members/all`)
      .then((res) => {
        commit('setMemberList', res)
      })
      .catch((error) => {
        commit('showSnackBar', { text: error.message, color: 'error' })
      })
  }
}
