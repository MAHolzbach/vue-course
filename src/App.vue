<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button
          class="btn btn-primary"
          @click="displayed = 'appBlue'"
        >Load Blue Template</button>
        <button
          class="btn btn-success"
          @click="displayed = 'appGreen'"
        >Load Green Template</button>
        <button
          class="btn btn-danger"
          @click="displayed = 'appRed'"
        >Load Red Template</button>
        <hr>
        <component :is="displayed">
          <p slot="content">{{defaultText}}</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: function() {
    return {
      defaultText: "DERP!",
      displayed: "appBlue"
    };
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
