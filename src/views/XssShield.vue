<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <div v-if="project">
      <!-- Project header -->
      <ProjectHeader :singleProjectHeader="singleProjectHeader" />

      <!-- Project gallery -->
      <ProjectGallery :projectImages="projectImages" />

      <!-- Project information -->
      <ProjectInfo :projectInfo="projectInfo" />

      <!-- Related projects -->
      <ProjectRelatedProjects :relatedProject="relatedProject" />
    </div>
    <div v-else>
      <p>Project not found</p>
    </div>
  </div>
</template>

<script>
import projects from "@/data/projects";
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
  name: "SingleProject",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    project() {
      // Cari project berdasarkan slug (judul diubah ke lowercase + dash)
      return projects.find(p =>
        p.title.toLowerCase().replace(/\s+/g, '-') === this.slug
      ) || null;
    }
  },
  data() {
    return {
      singleProjectHeader: {
        singleProjectTitle: 'XSS SHIELD',
        singleProjectDate: 'Juni 2024 - Juli 2024',
        singleProjectTag: 'Frontend / Backend',
      },
      projectImages: [
        { id: 1, title: 'Kabul Project Management UI', img: require('@/assets/images/ui-project-1.jpg') },
        { id: 2, title: 'Kabul Project Management UI', img: require('@/assets/images/web-project-2.jpg') },
        { id: 3, title: 'Kabul Project Management UI', img: require('@/assets/images/mobile-project-2.jpg') },
      ],
      projectInfo: {
        clientHeading: 'About Client',
        companyInfos: [
          { id: 1, title: 'Name', details: 'PT Adira Multi Finance' },
          { id: 2, title: 'Services', details: 'Frontend Development & Backend Development' },
        ],
        objectivesHeading: 'Objective',
        objectivesDetails:
          'Membangun sistem keamanan berbasis Laravel dan MySQL untuk mencegah serangan XSS (Cross-Site Scripting) pada file PDF yang diunggah, dengan menerapkan mekanisme penyaringan dan pembersihan elemen HTML tersembunyi sebelum dokumen disimpan di server, sehingga tercapai kepatuhan standar keamanan aplikasi web dan perlindungan data pengguna.',
        technologies: [
          { title: 'Tools & Technologies', techs: ['HTML','CSS','JavaScript','Vue.js','.Net'] },
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
          { id: 1, details: 'Mencegah eksploitasi dari konten berbahaya dalam file PDF yang berpotensi menjadi celah XSS.' },
          { id: 2, details: 'Menjaga performa proses unggah file tetap lancar meskipun dilakukan filtering dan sanitasi data.' },
          { id: 3, details: 'Mengurangi risiko XSS hingga 90% pada modul unggah file tanpa mengurangi fungsionalitas sistem.' },
          { id: 4, details: 'Menyesuaikan penerapan keamanan dengan standar praktik terbaik untuk aplikasi web modern.' },
        ],
        socialSharingsHeading: 'Share This',
        socialSharings: [
          { id: 1, name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/awawangg' },
          { id: 2, name: 'Facebook', icon: 'facebook', url: 'https://facebook.com/' },
          { id: 3, name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/hariawan-fajri' },
        ],
      },
      relatedProject: {
        relatedProjectsHeading: 'Related Projects',
        relatedProjects: [
          { id: 1, title: 'Mobile UI', img: require('@/assets/images/mobile-project-1.jpg') },
          { id: 2, title: 'Web Application', img: require('@/assets/images/web-project-1.jpg') },
          { id: 3, title: 'UI Design', img: require('@/assets/images/ui-project-2.jpg') },
          { id: 4, title: 'Kabul Mobile App UI', img: require('@/assets/images/mobile-project-2.jpg') },
        ],
      },
    };
  },
  mounted() {
    import('feather-icons').then(feather => feather.replace());
  }
};
</script>

<style scoped></style>
