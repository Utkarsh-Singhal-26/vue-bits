import code from '@content/Components/ChromaGrid/ChromaGrid.vue?raw';
import { createCodeObject } from '../../../types/code';

export const chromaGrid = createCodeObject(code, 'Components/ChromaGrid', {
  installation: `npm install gsap`,
  usage: `<template>
  <div class="w-[600px] relative">
    <ChromaGrid
      :items="items"
      :radius="300"
      :damping="0.45"
      :fadeOut="0.6"
      ease="power3.out"
    />
  </div>
</template>

<script setup lang="ts">
  import ChromaGrid from "./ChromaGrid.vue";

  const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
]
</script>`
});
