Component({
  options:{
    multipleSlots:true //在组件定义时的选项中 启用多slot支持
  },
  // 组件的对外属性
  properties:{
    innerText:{
      type:String,
      value:"default value",
    },
    paramA: Number,
    paramB: String,
  },
  // 组件内部数据
  data:{
    setData:{
      dataFialdA:'eleOne',
      dataFieldB:'proB'
    }
  },
  // 组件的方法：事件响应函数和任意的自定义方法
  methods:{
    onLoad:function(){
      console.log("///");
    }
  }
})