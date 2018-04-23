const moment = require("../../utils/moment.js")
Page({
  data:{},
  onLoad(){
    const time1='2018-03-31T07:10:56.000Z',
      time2 = '2018-04-02T07:10:56.000Z',
      time3 = '2018-03-31T07:11:56.000Z',
      time4= '4852'
    const format_time = moment.format(time1,'YYYY-MM-DD hh:mm:ss');
    const dif_time = moment.dif(time2,time3);
    const second_str = moment.secondToCountdown(time4,'DD天hh小时mm分钟ss秒');
    this.setData({
      format_time: format_time,
      dif_time: dif_time,
      second_str: second_str
    })
  }
})