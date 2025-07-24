<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-4">{{ subtitle }}</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            ref="inputRef"
            type="text"
            placeholder="Nombre de proyecto"
            class="input input-bordered input-primary w-full flex-1"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button type="button" class="btn mr-4" @click="$emit('close')">
              Cerrar
            </button>
            <button class="btn btn-primary">Acpetar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black opacity-40 w-screen h-screen"
  ></div>
</template>
<script setup lang="ts">
import { nextTick, ref, watch } from "vue";

interface Props {
  open: boolean;
  title?: string;
  subtitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
});

const emit = defineEmits<{ close: [void]; value: [text: string] }>();

const inputValue = ref("");
const inputRef = ref<HTMLInputElement | null>(null);
watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.value?.focus();
      }, 100); // Pequeño delay
    }
  },
);

const submitValue = () => {
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }
  emit("value", inputValue.value.trim());
  emit("close");

  inputValue.value = "";
};
</script>
<style></style>
