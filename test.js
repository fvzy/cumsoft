const cum = require('./main')
cum.download.tiktok('https://www.tiktok.com/@saidalwilizarmi/video/7187975805241216282?is_from_webapp=1&sender_device=pc')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
