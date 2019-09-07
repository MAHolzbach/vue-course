<template lang="pug">
  <div class="row">
    <div class="col-xs-12">
      <header>
        <h1>Server Status</h1>
      </header>
    </div>
    div
      app-server-status
      server-details
      server-manager
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus";
import ServerDetails from "./ServerDetails";
import ServerManager from "./ServerManager";
export default {
  components: {
    "app-server-status": ServerStatus,
    "server-details": ServerDetails,
    "server-manager": ServerManager
  }
};
</script>

<style>
</style>