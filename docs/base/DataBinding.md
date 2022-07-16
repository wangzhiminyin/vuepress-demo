
## 数据绑定
[v-model](https://cn.vuejs.org/v2/api/#v-model)
[v-model-参数vue3](https://v3.cn.vuejs.org/guide/migration/v-model.html#v-model-参数)

> vue是单向数据流，不是双向绑定  
> vue的双向绑定不过是语法糖  
> Object.defineProperty是用来做响应式更新的，和双向绑定没关系  

vue3使用v-model不兼容vue2
```js
<CustomVModel v-model="name"/>
<CustomVModel2 v-model="name" :name="name"/>
<CustomVModel3 @customChange="customChange" :name="name"/>
<!---async-->
<CustomVModel4 :name="name" @update:namec="name = $event"/>
<CustomVModel4 :namec.sync="name"/>
<!--vue写法-->
<CustomVModel4 v-model:namec=="name"/>
<script>
export default {
  data(){
    return:{
      name:'ndf'
    }
  }
    methods: {
        customChange(val) {
            this.name=val
        }
    },
}
</script>
```

```js
// CustomVModel.vue，可以对应上父组件传过来的值，props名可以在model中任意定义
<template>
    <input type="text"
        :value="text1"
        @input="$emit('change1', $event.target.value)"
    >
    <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
</template>

<script>
export default {
    model: {
        prop: 'text1', // 对应 props text1
        event: 'change1'
    },
    props: {
        text1: String,
        default() {
            return ''
        }
    }
}
</script>
// CustomVModel2.vue 
<template>
<div>
    <input type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
    >
    <button @click="handleEmit">
     父元素v-model传值
    </button>
</div>
</template>

<script>
export default {
    props: {
        value: String,
        modelValue: String, //vue3写法
        default() {
            return ''
        }
    },
    methods: {
        handleEmit() {
            this.$emit('input', this.value+'1')
        }
    },
}
</script>
// CustomVModel3.vue 无法初始化父组件传过来的值,需要单独传
<template>
<div>
    <input type="text"
        :value="name"
        @input="$emit('input', $event.target.value)"
    >
    <button @click="handleEmit">
     父元素v-model传值
    </button>
</div>
</template>

<script>
export default {
    props: {
        name: String,
        default() {
            return ''
        }
    },
    methods: {
        handleEmit() {
            this.$emit('customChange', this.name+'1')
        }
    },
}
</script>
//CustomVModel4.vue
<template>
    <div>
    <input type="text"
        :value="name"
        @input="$emit('update:namec', $event.target.value)"
    >
    <button @click="handleEmit">
     父元素v-model传值
    </button>
    <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        default() {
            return ''
        }
    },
    methods: {
        handleEmit() {
            this.$emit('update:namec', this.name+'1')
        }
    },
}
</script>
//CustomVModel5.vue   vue3使用
<template>
    <div>
    <input type="text"
        :value="name"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <button @click="handleEmit">
     父元素v-model传值
    </button>
    <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        default() {
            return ''
        }
    },
    methods: {
        handleEmit() {
            this.$emit('update:modelValue', this.name+'1')
        }
    },
}
</script>
```