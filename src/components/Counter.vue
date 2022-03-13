<template>
  <h2>{{ customTitles }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
  <div>
    <button @click="counter--">-1</button>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      required: true,
      default: 10,
      validator(value) {
        return value >= 0;
      },
    },
  },
  // name: "counter",
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter;
    },
  },
  computed: {
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitles() {
      return this.title || "Counter";
    },
  },
};
</script>


<style>
button {
  background-color: #64bb87;
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0, 3s ease-in-out;
}

button:hover {
  background-color: #fff;
  color: #64bb87;
  border: 1px solid #64bb87;
}
</style>