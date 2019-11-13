<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <iframe src="https://app.yinxiang.com/fx/7049c30c-2f03-4e51-81b4-8aba0f25a622"
           width="100%" height="900px" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
