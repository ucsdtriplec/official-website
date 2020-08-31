export const state = () => ({
  projectList: [],
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
  }
}
