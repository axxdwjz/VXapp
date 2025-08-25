// index.ts
// 获取应用实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    src:'/images/logo.png',
    name:''
  },
  onChooseAvatar(e:any){
      //获取头像
      const { avatarUrl } = e.detail;
      this.setData({
          src:avatarUrl,
        })
    },
  getName(e:any) {
    //获取昵称
    const {value} = e.detail;
    this.setData({
      name: value
    }) 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  },

  
})