<template>
  <footer class="mb-16 mt-8 flex h-auto flex-col items-center" id="contact">
    <div
      class="container flex flex-col items-center gap-12 rounded-2xl bg-second px-4 py-12 shadow-sm dark:shadow-xl xl:p-12"
    >
      <div
        class="flex w-full max-w-4xl flex-col items-center justify-between gap-8 md:flex-row"
      >
        <div
          class="h-80 w-full max-w-xs shrink-0 rounded-full bg-white-second p-4"
        >
          <img
            class="h-full w-full rounded-full"
            v-lazy="'/src/assets/video/job.gif'"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-4">
          <p class="text-xl text-white">
            Wspólnie doszliśmy do końca strony, ale tutaj nie musi kończyć się
            ta historia.
          </p>
          <h2 class="text-2xl font-bold text-white">
            Podejmijmy współpracę z uśmiechem
          </h2>
        </div>
      </div>
      <div
        class="flex w-full max-w-4xl flex-col justify-between gap-8 xl:flex-row"
      >
        <form
          @submit.prevent="sendMessage"
          class="flex w-full max-w-xs flex-col gap-4 text-dark"
          v-if="!messageHasSent && !messageSentError"
        >
          <div class="flex flex-col gap-2">
            <label for="contactFormEmail" class="font-semibold text-white"
              >Twój email*</label
            >
            <input
              type="email"
              id="contactFormEmail"
              class="h-10 rounded-2xl px-4 shadow-md"
              placeholder="nazwa@email.pl"
              v-model="messageData.email"
              required
              name="email"
              autocomplete="email"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="contactFormText" class="font-semibold text-white"
              >Treść*</label
            >
            <textarea
              id="contactFormText"
              type="text"
              class="h-36 rounded-2xl px-4 py-2 shadow-md"
              placeholder="treść"
              minlength="3"
              name="text"
              v-model="messageData.text"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="group flex items-center justify-center gap-2 rounded-xl border border-white px-8 py-2 text-white transition hover:animate-pulse hover:bg-white hover:text-dark"
          >
            <span
              class="icon icon--send h-4 w-4 invert transition group-hover:invert-0"
            ></span
            >Wyślij
          </button>
        </form>
        <div
          v-if="messageHasSent"
          class="flex max-w-xs flex-col items-center justify-center"
        >
          <p class="mb-4 text-center text-xl font-bold text-white">
            Twoja wiadomość wyruszyła w drogę! Niedługo się odezwę 😉
          </p>
          <img
            class="h-52 w-52 rounded-full"
            v-lazy="'/src/assets/video/sent.gif'"
            alt="Animacja - Mężczynza wysyłający wiadomość z laptopa."
          />
        </div>
        <div
          v-if="messageSentError"
          class="flex max-w-xs flex-col items-center justify-center"
        >
          <p class="mb-4 text-center text-xl font-bold text-white">
            Ooopss... Coś nam nie poszło, wiadomość gdzieś utknęła 😲
          </p>
          <img
            class="h-52 w-52 rounded-full"
            v-lazy="'/src/assets/video/error.gif'"
            alt="Animacja - Zdziwiony mężczyzna trzymający gniazdko elektryczne. Obok niego znajduje się zdziwiona kobieta, która trzyma odłączonoą wtyczkę."
          />
        </div>
        <div class="flex flex-col gap-6 text-white">
          <div class="flex flex-col gap-2">
            <p v-if="!messageHasSent && !messageSentError">
              Nie lubisz formularzy? Nic, nie szkodzi skorzystaj z poniższych
              opcji!
            </p>
            <p v-if="messageHasSent">
              Wiadomość już poszła, ale możesz skorzystać jeszcze z poniższych
              opcji 😏
            </p>
            <p v-if="messageSentError">
              Coś nie zadziałało. Wypróbuj inny sposób do kontaktu 😅
            </p>
            <div class="flex flex-wrap gap-4">
              <template v-for="contact in otherContacts">
                <component
                  :is="contact.tag"
                  :key="contact.id"
                  class="group flex items-center gap-2 rounded-xl border border-white px-8 py-2 transition hover:animate-pulse hover:bg-white hover:text-dark"
                  :href="contact.URL"
                  @click="[contact.loadForm ? resetFormStatus() : '']"
                  v-if="
                    !contact.loadForm ||
                    (messageHasSent && contact.loadForm) ||
                    (messageSentError && contact.loadForm)
                  "
                  ><span
                    class="icon h-4 w-4 invert transition group-hover:invert-0"
                    :class="contact.icon"
                  ></span>
                  {{ contact.title }}</component
                >
              </template>
            </div>
          </div>
          <div class="flex w-fit flex-col gap-2">
            <p>Zgubiłeś CV?</p>
            <button
              class="group flex items-center justify-center gap-2 rounded-xl border border-white px-8 py-2 transition-all hover:font-bold"
            >
              <span
                class="icon icon--download h-4 w-4 invert group-hover:animate-bounce"
              ></span>
              Pobierz CV
            </button>
          </div>
        </div>
      </div>
      <div class="flex w-full justify-center text-white">
        <p>Copyright © 2022 FrontSmile. All rights reserved</p>
      </div>
    </div>
    <HomeGeekInfo />
  </footer>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';
import axios from 'axios';
import HomeGeekInfo from './HomeGeekInfo.vue';

const backendURL = inject('backendURL');
const otherContacts = [
  {
    tag: 'a',
    title: 'robert@frontsmile.pl',
    URL: 'mailto:robert@frontsmile.pl',
    icon: 'icon--mail',
  },
  {
    tag: 'a',
    title: 'Robert Hapka',
    URL: 'mailto:robert@frontsmile.pl',
    icon: 'icon--linkedin',
  },
  {
    tag: 'button',
    title: 'Formularz kontaktowy',
    URL: null,
    icon: 'icon--send',
    loadForm: true,
  },
];
const messageData = ref({
  email: '',
  text: '',
});
const isLockedSending = ref(false);
const messageHasSent = ref(false);
const messageSentError = ref(false);
const resetFormStatus = () => {
  isLockedSending.value = false;
  messageHasSent.value = false;
  messageSentError.value = false;
};
const sendMessage = () => {
  if (!isLockedSending.value) {
    isLockedSending.value = true;
    axios
      .post(backendURL + '/api/contact-forms', {
        data: {
          email: messageData.value.email,
          text: messageData.value.text,
        },
      })
      .then(() => {
        messageHasSent.value = true;
        messageData.value.text = '';
      })
      .catch((error) => {
        console.log(error);
        messageSentError.value = true;
      });
  }
};
</script>

<style lang="scss" scoped></style>
