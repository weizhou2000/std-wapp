const regeneratorRuntime=global.regeneratorRuntime;



const getStorage = (key) => new Promise((r,j)=>{
  wx.getStorage({key,
    success:function(rs){
      r(rs.data)
    },
    fail:function(rs){
      j(rs.errMsg)
    }
  }) 
})

module.exports = {
  getStorage: getStorage
}
