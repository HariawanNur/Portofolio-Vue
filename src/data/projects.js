// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'AccountCheck',
		category: 'Web Application',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'XSS Shield',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'FortiPass',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 4,
		title: 'PassRenew',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
	},
	{
		id: 5,
		title: 'AuthShield',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 6,
		title: 'Cloudinary-Powered Media Uploader',
		category: 'Web Application',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
];

export default projects;
