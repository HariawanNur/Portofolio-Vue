<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'IT Developer berpengalaman dengan spesialisasi pada pengembangan sistem digital end-to-end yang aman, efisien, dan scalable. Memiliki track record sukses dalam membangun dan mengoptimalkan aplikasi yang digunakan oleh ratusan ribu pengguna aktif, termasuk integrasi sistem dengan core system perusahaan dan peningkatan performa aplikasi hingga 40%.',
				},
				{
					id: 2,
					bio:
						'Menguasai teknologi seperti Laravel, Spring Boot, .NET, dan Vue.js, serta handal dalam pengelolaan database menggunakan MySQL dan PostgreSQL. Berpengalaman dalam integrasi API, pengembangan antarmuka UI/UX yang intuitif, dan penanganan sistem dengan performa tinggi.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile-awang.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
