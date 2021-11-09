<template>
  <!-- <a
    href="#"
    class="py-5 px-3 md:hidden"
    @click="
      this.$i18n.locale = this.$i18n.locale === 'de' ? 'en' : 'de';
      switchLocale(this.$i18n.locale);
    "
    >{{ currentLocale }}</a
  > -->
  <ul>
    <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
      {{ locale }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "LocalSwitcher",
  data() {
    return {
      locales: ["en", "de"],
    };
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale != locale) {
        this.$i18n.locale = locale;
        // const to = this.$router.resolve({ params: { locale } });
        const to = this.$router.resolve({ params: { locale } });
        this.$router.push(to);
      }
    },
  },
};
</script>
