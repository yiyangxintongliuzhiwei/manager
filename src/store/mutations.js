const mutations = {
  ['LOGININFO'] (state, data) {
    console.log(data)
    state.logininfo = data
  }
}
export default mutations
