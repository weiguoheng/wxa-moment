module.exports = {
  format: function (d, str) {
    if (!d) {
      return;
    }
    let date = new Date(d);
    let YYYY = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM > 9 ? MM : "0" + MM;
    let DD = date.getDate();
    DD = DD > 9 ? DD : "0" + DD;
    let hh = date.getHours();
    hh = hh > 9 ? hh : "0" + hh;
    let mm = date.getMinutes();
    mm = mm > 9 ? mm : "0" + mm;
    let ss = date.getSeconds();
    ss = ss > 9 ? ss : "0" + ss;
    return str
      .replace("YYYY", YYYY)
      .replace("MM", MM)
      .replace("DD", DD)
      .replace("hh", hh)
      .replace("mm", mm)
      .replace("ss", ss);
  },
  // 时间戳转时间
  timestampToTime(timestamp) {
        const date = new Date(timestamp * 1000),//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + '-',
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
        D = date.getDate() + ' ',
        h = date.getHours() + ':',
        m = date.getMinutes() + ':',
        s = date.getSeconds()
        return Y+M+D+h+m+s;
    },
  // 计算时间差
  dif(start, end, type) {
    const start_time = this.format(start, "YYYY-MM-DD hh:mm:ss");
    const end_time = this.format(end, "YYYY-MM-DD hh:mm:ss");
    const start_time_date = new Date(
      start_time.replace(/\-/g, "/")
    ).getTime();
    const end_time_date = new Date(end_time.replace(/\-/g, "/")).getTime();
    let timeType = 0;
    switch (type) {
      case "second":
        timeType = 1000;
        break;
      case "minute":
        timeType = 1000 * 60;
        break;
      case "hour":
        timeType = 1000 * 3600;
        break;
      case "day":
        timeType = 1000 * 3600 * 24;
        break;
      default:
        timeType = 0;
        break;
    }
    let time_dif = parseInt(end_time_date) - parseInt(start_time_date);
    if (timeType) {
      time_dif =
        (parseInt(start_time_date) - parseInt(end_time_date)) /
        timeType;
    } else {
      let dif_date = parseInt(start_time_date) - parseInt(end_time_date);
      const dif_day = parseInt(dif_date / (1000 * 3600 * 24));
      if (parseInt(dif_day)) {
        dif_date -= dif_day * 1000 * 3600 * 24;
      }
      const dif_hour = parseInt(dif_date / (1000 * 3600));
      if (parseInt(dif_hour)) {
        dif_date -= dif_hour * 1000 * 3600;
      }
      const dif_minute = parseInt(dif_date / (1000 * 60));
      if (parseInt(dif_minute)) {
        dif_date -= dif_minute * 1000 * 60;
      }
      const dif_second = parseInt(dif_date / 1000);
      time_dif = [dif_day, dif_hour, dif_minute, dif_second];
    }
    return time_dif;
  },
  // 秒数转换倒计时
  secondToCountdown(seconds, str) {
    const days = parseInt(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    const hours = parseInt(seconds / 3600);
    seconds -= hours * 3600;
    const minute = parseInt(seconds / 60);
    seconds -= minute * 60;
    // const countdown = [days, hours, minute, seconds];
    const countdown = str
      .replace("DD", days)
      .replace("hh", hours)
      .replace("mm", minute)
      .replace("ss", seconds);
    return countdown;
  },
  // 获取时间
  getAimsDate(date, time = 0, time_type = "day") {
    const start_date = new Date(date.replace(/\-/g, "/")).getTime();
    let timeType = 0;
    switch (time_type) {
      case "second":
        timeType = 1000;
        break;
      case "minute":
        timeType = 1000 * 60;
        break;
      case "hour":
        timeType = 1000 * 3600;
        break;
      case "day":
        timeType = 1000 * 3600 * 24;
        break;
      default:
        timeType = 0;
        break;
    }
    const aims_date = start_date + timeType * time;
    var date = this.timestampToTime(aims_date / 1000);
    return date;
  }
};
