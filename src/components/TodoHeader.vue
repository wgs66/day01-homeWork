<template>
  <header class="header">
    <h1 :style="{ color: color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="addItem"
      v-model="value"
    />
  </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('todoMain')
const { mapState } = createNamespacedHelpers('changeSkin')

export default {
  data() {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState(['color'])
  },
  methods: {
    addItem() {
      if (this.value.trim() === '') {
        alert('请正确输入内容！')
      }
      this.addItems(this.value)
      this.value = ''
    },
    ...mapActions(['addItems'])
  }
}
</script>
