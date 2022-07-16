
# [函数式组件](https://cn.vuejs.org/v2/guide/render-function.html#函数式组件)

## vue2函数式组件
### 1.临时变量
>无状态,无实例.没有this上下文,无生命周期
```js
<TempVar
          :var1="`hello ${name}`"
          :var2="destroyClock ? 'hello vue' : 'hello world'"
        >
          <template v-slot="{ var1, var2 }">
            {{ var1 }} <br/>
            {{ var2 }}
          </template>
</TempVar>
<Functional :name="name" />
```
```js
//TempVar.js
export default {
  functional: true,
  render: (h, ctx) => {
    return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {});
  }
};
// Functional.vue
<template functional>
  <div>
    {{ props }}
  </div>
</template>
```
