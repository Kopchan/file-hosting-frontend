<script setup>
import {RouterLink} from "vue-router";

defineProps({
  onSubmit: Function,
  header    : String,
  switchPath: String,
  switchText: String,
  switchLink: String,
  submitText: String,
})

</script>

<template>
  <div class="cardOut d-flex parent100 jc-c ai-c fd-c">
    <form class="card" @submit.prevent="$emit('onSubmit')">
      <h2 class="mb-a mt-a ta-c">
        {{header}}
      </h2>

      <slot/>

      <input type="submit" class="btnPrimary mt-a" :value="submitText"/>
    </form>
    <p class="ta-c">
      {{switchText}}
      <RouterLink :to="switchPath" class="link">
        {{switchLink}}
      </RouterLink>
    </p>
  </div>
</template>

<style scoped>
.cardOut {
  gap: 10px;
  padding: 5px;
}
.card {
  background: var(--color-background-2);
  max-width: 350px;
  min-height: 400px;
  padding: 15px;
  display: flex;
  width: 92%;
  flex-direction: column;
  justify-content: center;
  border-radius: var(--border-radius-block);
  gap: 20px;
  border: 1px var(--color-border) solid;
}
</style>
