// component/com-header/com-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Object,
    current:Number,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    nav(e){
      wx.redirectTo({
        url:this.properties.data[e.currentTarget.dataset.index].page
      })
    }
  }
})
