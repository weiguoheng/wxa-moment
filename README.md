# wxa-moment
# 小程序端格式化时间  
#### 小程序端引入utils下面的moment.js
### 方法1：format
##### moment.format(date,str)   
用来格式化new Date()或者node获取mysql后端的时间为YYYY-MM-DD hh:mm:ss格式
# 
#####  moment.timestampToTime(timestamp, str)   
用来把时间戳转换为YYYY-MM-DD hh:mm:ss格式#####moment.timestampToTime()   
# 

#####  moment.dif(start, end)   
用来计算时间差 
# 

#####  moment.secondToCountdown(seconds, str)   
秒数差转换成倒计时 x天x小时x分x秒
# 

#####  moment.getAimsDate(date, time)   
获取指定时间。time>0指定后n天，time<0指定前n天
