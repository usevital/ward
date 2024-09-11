<script setup lang="ts">
import { computed, ref } from "vue";
import maps from "./assets/maps.json";

const regular = maps.regular;
const ud_map = maps.upside_down;
const enchant = maps.enchant;

function cypher(cypher: Array<String>) {
  let final = [];
  for (const char of Array.from(input.value)) {
    if (char !== " " && regular.includes(char)) {
      const it = regular.indexOf(char);
      const newChar = cypher[it];
      final.push(newChar);
    } else if (char === " ") {
      final.push(" ");
    } else {
      final.push(char);
    }
  }
  return final;
}

const input = ref("");

const input_ud = computed(() => {
  return cypher(ud_map).reverse().join("");
});

const input_enchant = computed(() => {
  return cypher(enchant).join("");
});
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="title">
        <span class="titlerow">
          <h1>ward</h1>
          <img class="icon" src="/favicon.png" />
        </span>
        <h3>simple text operations</h3>
      </div>
      <input v-model="input" placeholder="Type your text here..." />
      <ul>
        <li>Original Input: {{ input }}</li>
        <li>Upside Down: {{ input_ud }}</li>
        <li>Enchanted: {{ input_enchant }}</li>
        <li>Uppercase: {{ input.toUpperCase() }}</li>
        <li>Lowercase: {{ input.toLowerCase() }}</li>
      </ul>
      <span
        >Created by <a href="https://worldwidepixel.ca">WorldWidePixel</a> for
        the
        <a href="https://notessential.blurry.gay/">NotEssential</a> team</span
      >
      <span>Inspired by <code>notessential/translator</code></span>
    </div>
  </main>
</template>
