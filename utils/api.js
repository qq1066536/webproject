module.exports={
    touchStart: function (e) {
        touchDot = e.touches[0].pageX; // 获取触摸时的原点
        // 使用js计时器记录时间  
        interval = setInterval(function () {
          time++;
        }, 100);
      },
      // 触摸移动事件
      touchMove: function (e) {
        var touchMove = e.touches[0].pageX;
        console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
        // 向左滑动  
        if (touchMove - touchDot <= -40 && time < 10) {
          wx.switchTab({
            url: '../左滑页面/左滑页面'
          });
        }
        // 向右滑动
        if (touchMove - touchDot >= 40 && time < 10) {
          console.log('向右滑动');
          wx.switchTab({
            url: '../右滑页面/右滑页面'
          });
        }
      },
}