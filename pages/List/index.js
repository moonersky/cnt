const app = getApp()
Page({
  data: {
  defaultisp:1,
  dataList:[]
  },

  onLoad: function() {
    this.getgoods(1);
  },


//拨打电话
  freeTell: function(){
    wx.makePhoneCall({
      phoneNumber: '18970388477',
    })
},

// 根据ISP,获取该分类下的所有服务列表
getgoods:function(isp){
    var that=this;
    wx.request({
        url: 'https://www.0793pc.cn/weixin/api/', 
        data: {
            "act":"getgoods",
            "isp":isp
        },
        success (res) {
            that.setData({
                dataList:res.data.res
            })
        }
      })
},





 
 
})

