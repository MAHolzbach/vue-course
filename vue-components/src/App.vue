<template>
  <!-- <app-servers></app-servers> -->
  <div class="container">
    <server-control-panel></server-control-panel>
  </div>
</template>

<script>
import ServerPanel from "./components/Home";
export default {
  components: {
    "server-control-panel": ServerPanel
  }
};
</script>

<style>
</style>
