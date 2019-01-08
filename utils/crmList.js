const http = require('./http.js');

/**
 * 设置过滤区域各过滤项
 * @author   zhuwanchun
 * @DateTime 2017-08-24T17:29:28+0800
 * @param    {[type]}                 schema        [description]
 * @param    {[type]}                 newFilterItem [description]
 * @param    {[type]}                 append [description]
 */
function setFilterItem(schema, newFilterItem, append){

    if(typeof append == 'undefined'){
        append =  true;
    }

    // 非附加模式下,清空旧数据
    if(!append){
        clearFilterItem(schema);
    }
    
    var filterItem = wx.getStorageSync(schema);
    if (filterItem) {
        Object.assign(filterItem, newFilterItem);
    }else{
        filterItem = newFilterItem;
    }
    wx.setStorageSync(schema, filterItem);

    return true;
}

/**
 * 获取过滤项
 * @author   zhuwanchun
 * @DateTime 2017-08-24T17:30:01+0800
 * @param    {[type]}                 schema [description]
 * @param    {[type]}                 subKey [description]
 * @return   {[type]}                        [description]
 */
function getFilterItem(schema, subKey){
    var filterItem = wx.getStorageSync(schema);

    if (!filterItem) {
        return {};
    }

    if (subKey) {
         return filterItem[subKey];
    }
    return filterItem;
}

/**
 * 清除过滤框中的过滤数据
 * @author   zhuwanchun
 * @DateTime 2017-08-24T17:38:58+0800
 * @param    {[type]}                 schema [description]
 * @return   {[type]}                        [description]
 */
function clearFilterItem (schema){
    return wx.removeStorageSync(schema);
}

/**
 * 加载列表数据
 * @author   zhuwanchun
 * @DateTime 2017-08-24T17:54:11+0800
 * @param    {[type]}                 schema [description]
 * @param    {[type]}                 url    [description]
 * @return   {[type]}                        [description]
 */
function load(schema, url, cb, listPageNum){

  if(typeof listPageNum != 'undefined' && listPageNum > 1){
      
  }else{
      var curPage = parseInt(getFilterItem(schema, 'page'));
      if(isNaN(curPage)){
          curPage = 0;
      }
      listPageNum = curPage + 1;
  }
  setFilterItem(schema, {page : listPageNum});

  http.apiRequest(url, cb, 'post', getFilterItem(schema));

}

module.exports = {
    setFilterItem : setFilterItem,
    getFilterItem : getFilterItem,
    clearFilterItem : clearFilterItem,
    load: load
}
