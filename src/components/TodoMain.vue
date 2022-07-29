<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: obj.done }"
      v-for="(obj, index) in list"
      :key="obj.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="obj.done" />
        <label>{{ obj.name }}</label>
        <button class="destroy" @click="del(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('todoMain')
export default {
  computed: {
    // list() {
    //   return this.$store.state.todoMain.list
    // },
    // ...mapGetters(['todoMain'])
    ...mapState(['list'])
  },

  methods: {
    del(id) {
      // console.log(id)
      this.delItem(id)
    },
    ...mapActions(['delItem'])
  }
}
</script>
