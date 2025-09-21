<template>
  <div class="grid grid-cols-3 gap-6">
    <div v-for="project in projects" :key="project.id">
      <!-- router-link pakai slug project -->
      <router-link
        :to="`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`"
        class="block"
      >
        <div class="rounded shadow p-4 text-center">
          <img :src="project.img" :alt="project.title" class="mb-2"/>
          <h3 class="font-bold">{{ project.title }}</h3>
          <p>{{ project.category }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import projects from "@/data/projects";

export default {
  name: "Projects",
  data() {
    return { projects };
  }
};
</script>
