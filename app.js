global.regeneratorRuntime = require('./vendor/regenerator/runtime-module')
const request=require('./_util/wx').request

App({
  async onLaunch() {
    console.log('lanuched 123')
    let r=await request()
  },
  onShow() {
    console.log('onShow 123')
  },
  onHide() {

  },
  onError(msg) {
    console.error("[APP ERROR]", msg)
  }
})