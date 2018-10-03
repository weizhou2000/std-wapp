const regeneratorRuntime=global.regeneratorRuntime;


exports.formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

exports.initSvc=(vm)=>{
  console.log('injecting...')
  vm.trigSvc=async function(e) {
    const data=e.target.dataset 
    console.log('['+data.svc+']-------------------------------------------------')
    await vm.svc().service(data.svc,data)
  }
  vm.linkSvc=async function(data){
    console.log('['+data.svc+']-------------------------------------------------')
    await vm.svc().service(data.svc,data)
  } 
  console.log(vm)
}

