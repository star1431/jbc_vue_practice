<template>
  <div>
    <h1>{{ greeting }}</h1>
    <p>{{ message }}</p>
    <button @click="changeMessage">메시지 변경</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      message: '안녕하세요!',
      sampleNumber: 1
    };
  },
  computed: {
    greeting() {
      return `안녕하세요, ${this.name}님!`;
    },
  },
  methods: {
    changeMessage() {
      this.message = '반갑습니다!';
      this.sampleNumber = 3
    },
  },
  watch: {
    sampleNumber(newNum, oldNum) {
      console.log('숫자변경! => 현재:' + newNum + ' / 이전:' + oldNum)
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>