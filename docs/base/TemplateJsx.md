
```js
<template>
  <div>
    <span>Message: {{ msg }}</span>
    <br />
    <VNodes :vnodes="getJSXSpan()" />
    <anchored-heading1 :level="1">Hello world!</anchored-heading1>
    <anchored-heading2 :level="2">Hello world!</anchored-heading2>
    <anchored-heading3 :level="3">Hello world!</anchored-heading3>
    <VNodes :vnodes="getAnchoredHeading(4)" />
  </div>
</template>
<script>
import AnchoredHeading1 from "./AnchoredHeading.vue";
import AnchoredHeading2 from "./AnchoredHeading.js";
import AnchoredHeading3 from "./AnchoredHeading.jsx";

export default {
  components: {
    AnchoredHeading1,
    AnchoredHeading2,
    AnchoredHeading3,
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  data() {
    return {
      msg: "hello vue"
    };
  },
  methods: {
    getJSXSpan() {
      return <span>Message: {this.msg}</span>;
    },
    getAnchoredHeading(level) {
      const Tag = `h${level}`;
      return <Tag>Hello world!</Tag>;
    }
  }
};
</script>
```

```js
// AnchoredHeading.js
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function(createElement) {
    return createElement(
      "h" + this.level, // 标签名称
      this.$slots.default // 子元素数组
    );
  }
};

// AnchoredHeading.jsx
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  render: function(h) {
    const Tag = `h${this.level}`;
    return <Tag>{this.$slots.default}</Tag>;
  }
};

// AnchoredHeading.vue
<template>
  <h1 v-if="level === 1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2">
    <slot></slot>
  </h2>
  <h3 v-else-if="level === 3">
    <slot></slot>
  </h3>
  <h4 v-else-if="level === 4">
    <slot></slot>
  </h4>
  <h5 v-else-if="level === 5">
    <slot></slot>
  </h5>
  <h6 v-else-if="level === 6">
    <slot></slot>
  </h6>
</template>
<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1
    }
  }
};
</script>

```
