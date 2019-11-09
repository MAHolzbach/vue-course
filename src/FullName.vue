<template>
  <div>
    <label for="name">First Name</label>
    <input
      type="text"
      id="firstName"
      class="form-control"
      :value="firstName"
      @input="setName('first', $event)"
    >
    <label for="name">Last Name</label>
    <input
      type="text"
      id="lastName"
      class="form-control"
      :value="lastName"
      @input="setName('last', $event)"
    >
  </div>

</template>

<script>
export default {
  props: ["value"],
  methods: {
    setName(inputName, event) {
      let name = "";
      inputName === "first"
        ? (name = `${event.target.value} ${this.lastName}`)
        : (name = `${this.firstName} ${event.target.value}`);
      this.value = name;
      this.$emit("input", this.value);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>

<style>
</style>