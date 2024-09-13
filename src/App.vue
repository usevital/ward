<script setup lang="ts">
import { computed, ref } from "vue";
import QRCode from "qrcode";
import maps from "./assets/maps.json";

const regular = maps.regular;
const ud_map = maps.upside_down;
const enchant = maps.enchant;
const leet = maps.leet;
const zalgo_characters = maps.zalgo_characters;
const consonant_clusters = maps.consonant_clusters;
const morse_code = maps.morse_code;

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

const input_leet = computed(() => {
  return cypher(leet).join("");
});

const input_scrambled = computed(() => {
  let textArray = input.value.split("");
  for (let iter = input.value.split("").length - 1; iter > 0; iter--) {
    const randomIndex = Math.floor(Math.random() * (iter + 1));
    [textArray[iter], textArray[randomIndex]] = [
      textArray[randomIndex],
      textArray[iter],
    ];
  }
  return textArray.join("");
});

const input_piglatin = computed(() => {
  let finalReturn = input.value;
  const vowels = ["a", "e", "i", "o", "u", "y"];
  for (let word of finalReturn.split(" ")) {
    if (vowels.includes(word.toLowerCase().split("")[0])) {
      const found_vowel = vowels.indexOf(word.toLowerCase().split("")[0]);
      finalReturn = finalReturn.replace(
        word,
        word.slice(1) + vowels[found_vowel] + "way"
      );
    } else {
      let replacementConsonant = "";
      for (const consonant of consonant_clusters) {
        if (word.startsWith(consonant)) {
          replacementConsonant = consonant;
        }
      }
      if (consonant_clusters.some((consonant) => word.startsWith(consonant))) {
        finalReturn = finalReturn.replace(
          word,
          word.slice(replacementConsonant.length) + replacementConsonant + "ay"
        );
      } else if (word) {
        finalReturn = finalReturn.replace(
          word,
          word.slice(1) + word.split("")[0] + "ay"
        );
      }
    }
  }
  return finalReturn;
});

const input_caesar = computed(() => {
  let encrypted = [];
  for (const character of input.value.split("")) {
    if (character.match(/[a-z]/i)) {
      let shift_amt = 97;
      if (character === character.toUpperCase()) shift_amt = 65;
      encrypted.push(
        String.fromCharCode(
          ((character.charCodeAt(0) - shift_amt + 6) % 26) + shift_amt
        )
      );
    } else if (character === " ") {
      encrypted.push(" ");
    }
  }
  return encrypted.join("");
});

const input_zalgo_text = computed(() => {
  let zalgo_text = [];
  for (const character of input.value.split("")) {
    zalgo_text.push(
      character +
        zalgo_characters[Math.floor(Math.random() * zalgo_characters.length)]
    );
  }
  return zalgo_text.join("");
});

const input_morse_code = computed(() => {
  return cypher(morse_code).join("");
});

const input_binary = computed(() => {
  let binary_text = [];
  for (const character of input.value.split("")) {
    binary_text.push(character.charCodeAt(0).toString(2) + " ");
  }
  return binary_text.join("");
});

/*const input_qr = computed(() => {
  if (input.value != "") {
    QRCode.toDataURL(input.value).then((data) => {
      return data;
    });
  }
  return "";
}); */
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
        <li>Reversed: {{ input.split("").reverse().join("") }}</li>
        <li>Leetspeak: {{ input_leet }}</li>
        <li>Scrambled: {{ input_scrambled }}</li>
        <li>Pig Latin: {{ input_piglatin }}</li>
        <li>Caesar Cypher: {{ input_caesar }}</li>
        <li>Zalgo Text: {{ input_zalgo_text }}</li>
        <li>Morse Code: {{ input_morse_code }}</li>
        <li>Binary: {{ input_binary }}</li>
      </ul>
      <span
        >Word Count: {{ input.split(" ").filter((elm) => elm !== "").length }} |
        Character Count: {{ input.length }}</span
      >
      <span
        >Created by <a href="https://worldwidepixel.ca">WorldWidePixel</a> for
        the
        <a href="https://notessential.blurry.gay/">NotEssential</a> team</span
      >
      <span
        >Inspired by <a href="https://github.com/notessential/translator"
          ><code>notessential/translator</code></a
        ></span
      >
      <span
        >Want an offline or CLI version? You can find them in their
        <a href="https://github.com/notessentialsite/translator/releases"
          >GitHub releases.</a
        ></span
      >
    </div>
  </main>
</template>
