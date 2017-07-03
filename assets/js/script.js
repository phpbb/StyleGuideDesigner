window.onload = function () {
	Vue.component('config-list', {
		props: ['config'],
		template: `<li><input type="text" v-on:blur="changeConfig" v-model="config.text">{{ config.text }}</li>`,
		data() {
			return {
				configList: {}
			};
		},
		methods: {
			// Method called on blur of the input
			changeConfig: function (e) {
				// This new object will record the value of the input
				let newConfig = {
					text: e.target.value
				};
				// Send the new object on the post route
				this.$http.post('/settings/configs', newConfig)
				.then(function (response) {
					console.log(response.body);
				});
			}
		}
	});
	new Vue({
		el: '.app',
		data() {
			return {
				configList: []
			};
		},
		created() {
			// Call the method as soon as the page loads
			this.loadConfig();
		},
		methods: {
			/* This method is called as soon as the page loads 
			and it makes a get request on the get route and gets the response*/
			loadConfig() {
				this.$http.get('/settings/configs')
				.then(function (response) {
					this.configList = response.body;
				});
			}
		}
	});
};
