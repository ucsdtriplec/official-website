export const state = () => ({
  projectList: []
})

export const mutations = {
  updateProjectList (state, data) {
    state.projectList = data
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
