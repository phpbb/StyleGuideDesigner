'use strict';

window.onload = function () {
	Vue.component('sidebar-list', {
		props: ['sidebar'],
		template: `<li class="c-sidebar-menu-item"><a class="c-sidebar-menu-link" href="#">
		<span class="c-sidebar-menu-text">{{sidebar}}</span></a></li>`,
	});
	new Vue({
		el: '.sidebar-app',
		data() {
			return {
				sidebarList: []
			};
		},
		created: function () {
			// Call this method as soon as the page loads
			this.fetchSideContent();
		},
		methods: {
			/* This method is called as soon as the page loads
			and it makes a get request on the get route */
			fetchSideContent() {
				this.$http.get('/editor/sidebar')
				.then(function (res) {
					this.sidebarList = res.body;
				});
			}
		}
	});
};
