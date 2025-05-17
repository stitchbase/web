<script setup lang="ts">
const props = defineProps({
  isSmall: {
    type: Boolean,
    default: false,
  },
});

const sizeClass = props.isSmall ? "small" : "large";
</script>

<template>
  <p :class="`logo ${sizeClass}`">
      <span class="text-red">S</span>
      <span class="text-orange">t</span>
      <span class="text-yellow">i</span>
      <span class="text-green">t</span>
      <span class="text-blue">c</span>
      <span class="text-purple">h</span>
    <span :class="`base ${sizeClass} text-gray`">base</span>
  </p>
</template>

<style lang="css" scoped>
.logo.large {
  font-size: 37px;
}

.logo-small {
  font-size: 24px;
}

.script {
  font-family: "Playwrite CL", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.base {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.base.large {
  vertical-align: -0.5px;
  margin-left: -3px;
  font-size: 150%;
}

.base.small {
  vertical-align: -0.5px;
  margin-left: -2px;
  font-size: 150%;
}
</style>
