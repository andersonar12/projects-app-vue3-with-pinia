<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <div class="border-b border-blue-500">
        <slot name="header" />
      </div>

      <div class="my-5">
        <slot name="body" />
      </div>

      <div class="border-t border-blue-500 pt-2">
        <slot name="actions" />
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-40 w-screen h-screen"
  ></div>
</template>
<script setup lang="ts">
interface Props {
  open?: boolean;
}
withDefaults(defineProps<Props>(), {
  open: false,
});

defineEmits<{
  (e: "close"): void;
}>();
</script>
<style></style>
