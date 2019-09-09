// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    // 开放数据 ,又称属性
    // 必须是一个对象:类型、value、boserver
    like:{
      type:Boolean,
      // 默认值是false、那么就不用写value：false value:false
    },
    count:{
      type:Number,
      // value 不需要写 默认是0      
    }

  },

  /**
   * 组件的初始数据
   */
  // 封装内部、方法出来
  // 非常简单功能
  data: {
    // 开放数据就是从组件外部来进行设置数据
    // like:false, 放到 proper
    // count:9, 放到proper
    // 图片属于内部数据、不需要开放
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    OnLike:function(e){
      // 【访问 state数据和react一样 this.state.text】
      let like = this.properties.like
      let count = this.properties.count
      count = like ? count-1:count+1
      // 【这个和react的一样呀 this.setState】
      this.setData({
        count:count,
        like:!like
      })
    }
  }
})
