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
  name: "Cloudinary-Powered Media Uploader",
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
        singleProjectTitle: 'Cloudinary-Powered Media Uploader',
        singleProjectDate: 'Agustus 2024 - September 2024',
        singleProjectTag: 'UI / Frontend',
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
          'Mengembangkan sistem unggah media berbasis Cloudinary dengan fitur optimasi file (resize/compress) sebelum dikirim, untuk memastikan efisiensi penyimpanan, kepatuhan terhadap validasi pihak ketiga, serta menjaga kualitas media yang diunggah.',
        technologies: [
          { title: 'Tools & Technologies', techs: ['HTML','CSS','JavaScript','Vue.js','Laravel'] },
        ],
        projectDetailsHeading: 'Challenge',
        projectDetails: [
          { id: 1, details: 'Merancang integrasi uploader dengan Cloudinary menggunakan API pihak ketiga.' },
          { id: 2, details: 'Menyediakan fitur file resize/compress otomatis sebelum proses unggah untuk menghindari penolakan validasi.' },
          { id: 3, details: 'Menjamin kualitas media tetap optimal meskipun ukuran file diperkecil.' },
          { id: 4, details: 'Mengelola metadata file (ukuran, format, dan path penyimpanan) agar sesuai standar Cloudinary.' },
          { id: 5, details: 'Memastikan pengalaman pengguna tetap cepat dan mulus saat proses unggah file.' },
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
