<template>
  <div class="test">
    <div>
      平均值: {{average}}
    </div>
    <button @click="update">加载更多</button>
    <div v-for="(items,index) in dataList" :key="index">
      <div class="datalist"  v-for="item in  items" :key="item.id">
        <div class="list">
            <div class="horizontal">{{item.id}}</div>
            <div class="horizontal">{{item.data}}</div>
        </div>
        <div class="text">{{item.time}}</div>
       </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'test',
  data () {
    return {
      dataList: this.$store.state.dataList
    }
  },
  created () {
    this.getState()
  },
  computed: {
    average () {
      return this.$store.getters.getAverage
    }
  },
  methods: {
    ...mapActions({
      getDataCall: 'getDataCall'
    }),
    getState () {
      this.getDataCall()
    },
    update () {
      this.getState()
    }
  }
}
</script>

<style scoped lang="less">

.test{
  .datalist:nth-child(odd) {
    background:rgba(234,234,234,.5);
  }
  .datalist:hover{
    background:rgba(234,234,234,.9);
  }
  .datalist{
    padding:15px 0;
    .list{
      display: flex;
      flex-direction: row;
      justify-content:center;
      .horizontal{
        width:30%;
      }
    }
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}

</style>
