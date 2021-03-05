// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try {
    const result = await cloud.openapi.wxacode.getUnlimited({
      scene: 'a=1'
    })
    const upload = await cloud.uploadFile({
      cloudPath: `qrcode/${Date.now()}-${Math.random() * 100000}.jpg`,
      fileContent: result.buffer
    })
    return upload.fileID
  } catch (err) {
    return err
  }
}