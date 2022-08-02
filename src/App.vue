<template>
  <div>
    <button @click="changeColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
    <br />
    <br />
    <br />
    <wgs-button round color="red">165165</wgs-button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
const { mapActions } = createNamespacedHelpers('changeSkin')

export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  created() {},
  methods: {
    changeColor() {
      let color = 'rgb('
      for (let i = 0; i <= 2; i++) {
        color += Math.floor(Math.random() * 256) + ','
      }
      color = color.slice(0, -1)
      color += ')'
      console.log(color)
      this.changeFontColor(color)
    },
    ...mapActions(['changeFontColor'])
  }
}
</script>

<style scoped></style>
