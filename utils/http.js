function apiRequest(url, cb, method, data){
    
    var data = data || {};
    
    var method = method || 'post';

    wx.request({
      url: url,
      
      method : method,

      data: data,
      
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'api-usign' : 'oDikTMZq0PYe-JZnLKf7rwYW_4FguF0yy8StbWHT_0WoEXk8TvOILwpcLhLBbQo8',
        'client-type' : 'mxmp',
      },
      
      success(res) {
        cb(res.data)
      }
    });

}


module.exports = {
  apiRequest: apiRequest
}