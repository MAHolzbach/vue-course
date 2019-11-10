<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 v-highlight.delayed="'red'">Directives</h1>
        <h1
          v-local-highlight.delayed.blink="{mainColor: 'red', secondColor:'green', delay: 500}"
        >Local Directive</h1>
        <button class="btn btn-primary" v-myon:click="showAlert">Show Alert!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      alert("Clicked!");
    }
  },
  directives: {
    myon: {
      bind(el, binding, vnode) {
        // el.onclick = () => {
        //   binding.value();
        // };
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    },
    "local-highlight": {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor === secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);

              binding.arg === "background"
                ? (el.style.backgroundColor = currentColor)
                : (el.style.color = currentColor);
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            binding.arg === "background"
              ? (el.style.backgroundColor = binding.value.mainColor)
              : (el.style.color = binding.value.mainColor);
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
