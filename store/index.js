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
  getAllMembersInAllDepartments(state) {
    let result = {}
    for (let member of state.memberList) {
      for (let department of member.departments) {
        (result[department] = result[department] || []).push(
          member
        )
      }
    }
    return result;
  },
  getMembersByDepartment: state => department => {
    let result = []
    for (let member of state.memberList) {
      for (let d of member.departments) {
        if (d === department) result.push(member)
      }
    }
    return result;
  },
  getMemberByName: state => name => {
    const nullMemberResult = {
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

    const front_parentheses_idx = name.indexOf("(")
    const back_parentheses_idx = name.indexOf(")")

    // handle chinese parentheses
    let begin = front_parentheses_idx < 0 ? name.indexOf("（") : front_parentheses_idx
    let end = back_parentheses_idx < 0 ? name.indexOf("）") : back_parentheses_idx

    let position = null

    // contains "(position)" in "name"
    if (begin > 0 && end > 0) {
      position = name.substring(begin + 1, end).trim()
      name = name.substring(0, begin).trim()
    }

    let result = state.memberList.filter(member => member.name === name)[0] ?? nullMemberResult

    if (position) result.position = position
    if (name) result.name = name
    return result
  }

}
export const mutations = {
  updateProjectList(state, data) {
    state.projectList = data
  },

  updateDepartmentList(state, data) {
    state.departmentList = data
  },

  toggleSnackBar(state) {
    state.snackBar.isOpen = !state.snackBar.isOpen
  },

  closeSnackBar(state) {
    state.snackBar.isOpen = false
  },

  showSnackBar(state, { text, color }) {
    state.snackBar.text = text
    state.snackBar.color = color
    state.snackBar.isOpen = true
  },

  setMemberList(state, data) {
    state.memberList = data.members
  },

  setNewsletters(state, data) {
    data = data.campaigns.filter(letter => letter.settings.folder_id === config.MAILCHIMP_FOLDER_ID)
    data.sort((a, b) => new Date(b.send_time) - new Date(a.send_time))
    state.newsletters = data
  }
}

export const actions = {
  // automatically fetches the project markdown list when the server inits, to be used for navigation
  // putting the code here because layout pages do not allow asyncDatas
  async nuxtServerInit({ commit }, { $content }) {
    const projectData = await $content('projects')
      .only(['title', 'path', 'description'])
      .sortBy('date', 'asc')
      .fetch()

    const departmentData = await $content('departments')
      .only(['title', 'path', 'description'])
      .sortBy('date', 'asc')
      .fetch()

    commit('updateProjectList', projectData)
    commit('updateDepartmentList', departmentData)
    const newsletterData = await mailchimp.campaigns.list({ count: 100 })
    commit('setNewsletters', newsletterData)
    const membersData = await this.$axios.$get(`${config.API_PREFIX}/members`)
    commit('setMemberList', membersData)
  },

  async SET_MEMBERLIST({ commit }) {
    await this.$axios.$get(`${config.API_PREFIX}/members`)
      .then((res) => {
        console.log(res.members)
        commit('setMemberList', res.members)
      })
      .catch((error) => {
        console.log('errored')
        commit('showSnackBar', { text: error.message, color: 'error' })
      })
  }
}
