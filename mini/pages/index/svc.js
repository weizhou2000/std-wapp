const util = require('../../utils/util.js')


class Svc{
  constructor(vm,aw) {
    this.vm=vm
    this.wx=aw
  }

	service(sname,opt){
		console.log(sname,opt)
		switch(sname){
			case 'jump':
				console.log(sname,opt,'--->')
				wx.navigateTo({
      				url: opt.url
    			})
				break;
			case 't2':
				console.log(sname,opt,'--->>>>>>>')
				break;
			case 'init':
				console.log(sname,opt,'---********')
				const {app}=opt
				this.init(app);
				break;
			default:
				break;
		}
	}

	init(app){
	  if (app.globalData.userInfo) {
      this.vm.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.vm.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.vm.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      this.aw.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.vm.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

	}

}

module.exports=Svc