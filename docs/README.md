# [vue官方文档](https://cn.vuejs.org/)

## 1.特点
> 简单小巧的核心，  
> 渐进式技术栈，  
> 足以应付任何规模的应用  
1. 易用
2. 灵活
3. 高效

## 2.是什么
1. 一套构建用户界面的渐进式框架，
2. 被设计为可以自底向上逐层应用
3. 声明式渲染
4. 响应式
5. 组件化应用构建

## 3.高级功能
1. 解耦视图与数据
2. 可复用组件
3. 前端路由
4. 状态管理
5. 虚拟DOM

## 4.vue实例与数据
```js
var app=new Vue({
 // el:"#app",
  el:"document.querySelector('#app')",
  data(){
    return{
      msg:'demo'
    }
  }
})
```
```js
var app=new Vue({
  data(){
    return{
      msg:'demo'
    }
  }
}).mount('#app')
```

## 5. 生命周期

### vue2生命周期
[vue2生命周期](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)  
[vue2生命周期图](https://cn.vuejs.org/images/lifecycle.png)

### vue3生命周期
[vue3生命周期](https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html#beforecreate)  
[vue3生命周期图](https://v3.cn.vuejs.org/images/lifecycle.svg)
## 6. 基础指令
[vue3指令](https://v3.cn.vuejs.org/api/directives.html)

## 7.vue组件的核心概念
### 1.属性
### 2.事件
### 3.插槽

## 8.vue的高级特性
### 1. keepalive
### 2. mixin
### 3. slot
