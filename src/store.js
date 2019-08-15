import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    push (state, list) {
      state.dataList.push(list)
    }
  },
  getters: {
    getAverage: (state) => {
      var allData = state.dataList
      var dataLength = 0
      var sum = []
      var average = 0
      for (var i = 0; i < allData.length; i++) {
        sum[i] = 0
      }
      for (var count1 = 0; count1 < allData.length; count1++) {
        for (var count2 = 0; count2 < allData[count1].length; count2++) {
          sum[count1] += allData[count1][count2].data
          dataLength = allData.length * 20
        }
      }
      function avera (array) {
        var sum = 0
        for (var i = 0, j = array.length; i < j; i++) {
          sum += array[i]
        }
        return sum
      }
      var all = avera(sum)
      average = (all / dataLength).toFixed(2)

      console.log(all)
      console.log(dataLength)
      console.log(average)
      return average
    },
    getData: state => state.dataList
  },
  actions: {
    getDataCall (context) {
      mockGenerator().then((res) => {
        context.commit('push', res)
      })
    }
  }
})
