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
  name: "PassRenew",
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
        singleProjectTitle: 'PassRenew',
        singleProjectDate: 'Febuari 2024 - Mei 2024',
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
          'Membangun fitur reset password oleh admin dengan otomatisasi pengiriman password acak melalui SendGrid, terintegrasi dengan sistem internal berbasis Laravel dan MySQL, untuk meningkatkan efisiensi pemulihan akun dan mengurangi beban tim support.',
        technologies: [
          { title: 'Tools & Technologies', techs: ['HTML','CSS','JavaScript','Vue.js','Laravel'] },
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
          { id: 1, details: 'Merancang mekanisme reset password yang aman dan terkontrol oleh admin.' },
          { id: 2, details: 'Mengintegrasikan pengiriman password acak secara otomatis ke email pengguna menggunakan SendGrid.' },
          { id: 3, details: 'Menjaga konsistensi keamanan dan validasi pengguna di seluruh sistem internal.' },
          { id: 4, details: 'Memastikan dokumentasi dan alur pengembangan terstruktur melalui pendekatan waterfall.' },
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
