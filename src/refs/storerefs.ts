// customRefs.ts
import { ref } from 'vue';

// Define your custom function that returns the ref
export const getSharedRef = () => {
  return ref<HTMLElement | null>(null);
};
