<template>
  <div>
    <p>hello vue : {{ number }}</p>
    <button @click="onClick">상위 컴포넌트로 이벤트</button>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    number: {
      type: Number,
      required: false,
      default: () => 0
    }
  },
  methods: {
    onClick() {
      this.$emit('child-event', this.number);
    }
  }
}
</script>
