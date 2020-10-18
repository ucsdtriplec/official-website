import config from '../config'

export const state = () => ({
  projectList: [],
  memberList: [],
  snackBar: {
    isOpen: false,
    text: '',
    color: 'success'
  }
})

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
    state.memberList = data.members.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue.department] = result[currentValue.department] || []).push(
        currentValue
      )
      return result
    }, {})
  }

}

export const actions = {
  // automatically fetches the project markdown list when the server inits, to be used for navigation
  // putting the code here because layout pages do not allow asyncDatas
  async nuxtServerInit ({ commit }, { $content }) {
    const data = await $content('projects')
      .only(['title', 'path'])
      .sortBy('date', 'asc')
      .fetch()
    commit('updateProjectList', data)
  },

  async SET_MEMBERLIST ({ commit }) {
    await this.$axios.$post(`${config.API_PREFIX}/members/all`)
      .then((res) => {
        commit('setMemberList', res)
      })
      .catch((error) => {
        commit('showSnackBar', { text: error.message, color: 'error' })
        return { team: [] }
      })
  }
}
