<template>
  <router-link
    :to="`/projects/${slug}`"
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark block"
    aria-label="Single Project"
  >
    <div>
      <img
        :src="project.img"
        :alt="`Image of ${project.title}`"
        class="rounded-t-xl border-none w-full"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light mb-2">
        {{ project.title }}
      </p>
      <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">
        {{ project.category }}
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    slug() {
      // Buat slug dari title, aman jika title kosong
      return this.project?.title
        ? this.project.title.toLowerCase().replace(/\s+/g, '-')
        : '';
    }
  }
};
</script>

<style scoped lang="scss">
/* Kamu bisa tambahkan styling tambahan di sini jika perlu */
</style>
