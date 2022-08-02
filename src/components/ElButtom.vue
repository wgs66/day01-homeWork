<template>
  <button :class="type" ref="btn" :disabled="disabled"><slot /></button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    color: {
      type: String
    },

    size: {
      type: String,
      default: 'small'
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.$refs.btn.style.backgroundColor = this.color
    this.$refs.btn.classList.add(this.size)
    if (this.round) this.$refs.btn.classList.add('round')
    if (this.disabled) {
      this.$refs.btn.classList.add('disabled')
      this.$refs.btn.style.cursor = 'not-allowed'
    }
  },
  created() {},

  methods: {}
}
</script>

<style scoped>
button {
  font-size: 16px;
  cursor: pointer;
}
.disabled {
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.6;
}
.round {
  border-radius: 999px;
}
.small {
  height: 50px;
  width: 100px;
}
.mini {
  height: 25px;
  width: 50px;
  font-size: 8px;
}
.large {
  height: 75px;
  width: 150px;
  font-size: 24px;
}
.default {
  color: #333;
  border: 1px solid #999;
  background-color: #fff;
}
.primary {
  color: #fff;
  background-color: #07c160;
}
.info {
  color: #fff;
  background-color: #1989fa;
}
.warning {
  color: #fff;
  background-color: red;
}
.danger {
  color: #fff;
  background-color: #ff976a;
}
</style>
