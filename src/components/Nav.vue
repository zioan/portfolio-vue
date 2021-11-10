<template>
  <!--  -->
  <!-- navbar goes here -->
  <nav class="bg-gray-100">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <!-- <div>
            <a
              href="#"
              class="
                flex
                items-center
                py-5
                px-2
                text-gray-700
                hover:text-gray-900
              "
            >
              <svg
                class="h-6 w-6 mr-1 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span class="font-bold">Better Dev</span>
            </a>
          </div> -->

          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <router-link
              class="py-5 px-3 text-gray-700 hover:text-gray-900"
              :to="{ name: 'Home', params: { locale: this.$i18n.locale } }"
              >{{ $t("menu.home") }}</router-link
            >
            <router-link
              class="py-5 px-3 text-gray-700 hover:text-gray-900"
              :to="{ name: 'About', params: { locale: this.$i18n.locale } }"
              >{{ $t("menu.about") }}</router-link
            >
            <router-link
              class="py-5 px-3 text-gray-700 hover:text-gray-900"
              :to="{ name: 'Resume', params: { locale: this.$i18n.locale } }"
              >{{ $t("menu.resume") }}</router-link
            >
            <router-link
              class="py-5 px-3 text-gray-700 hover:text-gray-900"
              :to="{ name: 'Portfolio', params: { locale: this.$i18n.locale } }"
              >{{ $t("menu.portfolio") }}</router-link
            >
            <router-link
              class="py-5 px-3 text-gray-700 hover:text-gray-900"
              :to="{ name: 'Contact', params: { locale: this.$i18n.locale } }"
              >{{ $t("menu.contact") }}</router-link
            >
          </div>
        </div>

        <!-- secondary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="#" class="py-5 px-3" @click.prevent="changeLanguage">{{
            languageSelector
          }}</a>
        </div>

        <!-- mobile button goes here -->
        <a
          href="#"
          class="py-5 px-3 md:hidden"
          @click.prevent="changeLanguage"
          >{{ languageSelector }}</a
        >
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <router-link
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        :to="{ name: 'Home', params: { locale: this.$i18n.locale } }"
        >{{ $t("menu.home") }}</router-link
      >
      <router-link
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        :to="{ name: 'About', params: { locale: this.$i18n.locale } }"
        >{{ $t("menu.about") }}</router-link
      >
      <router-link
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        :to="{ name: 'Resume', params: { locale: this.$i18n.locale } }"
        >{{ $t("menu.resume") }}</router-link
      >
      <router-link
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        :to="{ name: 'Portfolio', params: { locale: this.$i18n.locale } }"
        >{{ $t("menu.portfolio") }}</router-link
      >
      <router-link
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        :to="{ name: 'Contact', params: { locale: this.$i18n.locale } }"
        >{{ $t("menu.contact") }}</router-link
      >
    </div>
  </nav>

  <!-- content goes here -->
  <router-view />
</template>

<script>
export default {
  name: "Nav",
  components: {},
  language: null,

  methods: {
    changeLanguage() {
      this.$i18n.locale = this.$i18n.locale === "de" ? "en" : "de";
      if (this.$i18n.locale) {
        localStorage.setItem("language", this.$i18n.locale);
        const locale = localStorage.getItem("language");
        const to = this.$router.resolve({ params: { locale } });
        this.$router.push(to);
      }
    },
  },
  computed: {
    languageSelector() {
      return this.$i18n.locale === "de" ? "Deutsch" : "English";
    },
  },
};
</script>

<style>
@layer base {
  #nav {
    @apply flex justify-between py-4 px-10;
  }
}
.btn-animation {
  background: linear-gradient(to right, red 50%, transparent 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
}

.btn-animation:hover {
  background-position: left bottom;
}
</style>
