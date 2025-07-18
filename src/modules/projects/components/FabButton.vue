<template>
  <button
    :class="['btn btn-circle btn-secondary p-1 fixed', position]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
interface Props {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const props = withDefaults(defineProps<Props>(), {
  position: "bottom-right",
});

defineEmits(["click"]);
</script>
<style scoped>
@reference "tailwindcss";

.top-left {
  @apply top-9 left-9;
}
.top-right {
  @apply top-9 right-9;
}
.bottom-left {
  @apply bottom-9 left-9;
}
.bottom-right {
  @apply bottom-9 right-9;
}
</style>
