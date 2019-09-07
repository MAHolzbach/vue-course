<template lang="pug">
  //- div
  //-   p Server Status: {{status}}
  //-   hr
  //-   button(@click="changeStatus") Change Status
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5" v-bind:key="index">Server # {{ index }}</li>
    </ul>
  </div>

</template>

<script>
export default {
  // data: () => {
  //   return {
  //     status: "Critical"
  //   };
  // },
  // methods: {
  //   changeStatus() {
  //     this.status = "Normal";
  //   }
  // }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>