<template>
  <div class="header" :class="{[`bg-${type}`]: type}">
     <b-container fluid class="px-0">
      <div class="header-body">
        <slot></slot>
      </div>
     </b-container>
  </div>
</template>
<script>
  export default {
    name: 'base-header',
    props: {
      type: {
        type: String,
        default: 'light',
        description: 'Header background type'
      }
    }
  }
</script>
<style>
</style>
