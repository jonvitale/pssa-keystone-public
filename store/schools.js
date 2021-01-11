// import Vue from 'vue';

export const state = () => ({
  initialized: false,
  list: [],
})

export const getters = {
  list: (state) => {
    return state.list
  },
}

export const mutations = {
  initialized(state, val) {
    console.log('school initialized', this)
    state.initialized = val
  },
  add(state, data) {
    state.list.push(data)
  },
  replace(state, data) {
    state.list = data
  },
  empty(state) {
    state.list = []
  },
}

export const actions = {
  set_schools({ commit }, values) {
    const schools = values.school.map((s) => s.text)
    const slugs = values.slug.map((s) => s.text)
    console.log(
      'set_schools',
      schools.map((s, i) => s + ': ' + slugs[i])
    )
    commit('replace', values)
    commit('initialized', true)
  },

  lookup_slug_by_school({ state }, school) {
    // console.log("lookup_slugreport_by_schoolreport ", schoolReport, state.list)
    const slug = this.$qlik.lookupValueByFieldValue(
      state.list,
      'school',
      school,
      'slug'
    )
    if (slug) {
      return slug.text
    } else {
      return ''
    }
  },

  lookup_text_by_slug({ state }, { slug, target }) {
    // console.log("lookup_text_by_slugreport",  slugReport, target, state.list)
    const value = this.$qlik.lookupValueByFieldValue(
      state.list,
      'slug',
      slug,
      target
    )
    if (value) {
      return value.text
    } else {
      return ''
    }
  },
}
