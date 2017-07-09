window.onload = function () {
	Vue.component('config-list', {
		props: ['config'],
		template: `<li><label>{{config.name}}</label>
		<input type="text" v-on:blur="changeConfig" v-model="config.setting"></li>`,
		data() {
			return {
				configList: {}
			};
		},
		methods: {
			// Method called on blur of the input
			changeConfig(e) {
				// This new object will record the value of the input
				let newConfig = {
					setting: e.target.value
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
		created: function () {
			// Call the method as soon as the page loads
			this.fetchConfig();
		},
		methods: {
			/* This method is called as soon as the page loads
			and it makes a get request on the get route and gets the response*/
			fetchConfig() {
				this.$http.get('/settings/configs')
				.then(function (response) {
					this.configList = response.body;
				});
			}
		}
	});
};
