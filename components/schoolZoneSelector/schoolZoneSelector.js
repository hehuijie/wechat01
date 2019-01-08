// components/schoolZoneSelector/schoolZoneSelector.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    allSchool:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataStatus:'default'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectSchool:function(e){
      // console.log(e);
      var mySchoolArr =[];
      var that = this;
      var index = e.target.id;
      if (that.data.allSchool[index].status == 1) {
        that.data.allSchool[index].status = 0;
      } else if (that.data.allSchool[index].status == 0) {
        that.data.allSchool[index].status = 1;
      }
      /**
       * 选中的校区
       */
      for (var i = 0; i < that.data.allSchool.length;i++){
        if (that.data.allSchool[i].status == 1){
          mySchoolArr.push(that.data.allSchool[i]);
        }
      }
      // console.log(mySchoolArr);
      that.setData({
        allSchool: that.data.allSchool,
        mySchoolArr: mySchoolArr
      });

      // var myEventDetail  = {};
      // console.log('校区的ID' + e.target.dataset.sindex + '校区的name' + e.target.dataset.sname);
      /**
       * triggerEvent()  自定义组件触发事件时,需要该方法指定事件名,detaild对象和事件选项
       */
      that.triggerEvent('actiontap', mySchoolArr)
    }
  }
})
