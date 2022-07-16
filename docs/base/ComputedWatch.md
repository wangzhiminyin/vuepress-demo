---
title: 条件类型
author: wzm
date: '2022-7-16'
---
> computed能做的，watch都能做，反之不行
> 能用computed的尽量用computed
## computed属性
> 减少模板中计算逻辑  
数据缓存  
依赖固定的数据类型(响应式数据)

```js
<template>
  <div>
    <p>num {{ num }}</p>
    <p>double1 {{ double1 }}</p>
    <input v-model="double2" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20,
    };
  },
  computed: {
    double1() {
      return this.num * 2;
    },
    double2: {
      get() {
        return this.num;
      },
      set(val) {
        this.num = val / 2;
      },
    },
  },
};
</script>
```
# 侦听器watch
> watch中可以执行任何逻辑，如函数节流，ajax异步获取数据，操作DOM

```
<template>
    <div>
        <input v-model="name"/>
        <input v-model="info.city"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'wzm',
            info: {
                city: 'fdn'
            }
        }
    },
    watch: {
        name(oldVal, val) {
            console.log('watch name', oldVal, val) // 值类型，可正常拿到 oldVal 和 val
        },
        info: {
            handler(oldVal, val) {
                console.log('watch info', oldVal, val) // 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
            },
            deep: true // 深度监听
        }
    }
}
</script>
```