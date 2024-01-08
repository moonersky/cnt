Page({
    
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    swpiers:[],
    menus:[],
    topServs:[]
    },
onLoad(){
    this.getSwiper()
    this.getmenu()
    this.getTopservs()
},
// 获取轮播图
getSwiper(){
    var that=this;
    wx.request({
        url: 'https://www.0793pc.cn/weixin/api/', 
        data: {
            "act":"getSwiper"
        },
        success (res) {
        //  console.log(res.data)
            that.setData({
                swpiers:res.data.res
            })
        }
      })
},
// 获取图标导航栏，宫格
getmenu(){
    var that=this;
    wx.request({
        url: 'https://www.0793pc.cn/weixin/api/', 
        data: {
            "act":"getMenu"
        },
        success (res) {
            that.setData({
                menus:res.data.res
            })
        }
      })
},
// 获取首页推荐服务
getTopservs(){
    var that=this;
    wx.request({
        url: 'https://www.0793pc.cn/weixin/api/', 
        data: {
            "act":"getTopgoods"
        },
        success (res) {
            that.setData({
                topServs:res.data.res
            })
        }
      })
}



});