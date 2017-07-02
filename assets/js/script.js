window.onload = function() {
	Vue.component('config-list', {
		props: ['config'],
		template: `<li><input type="text" v-on:blur="changeConfig" v-model="config.text">{{ config.text }}</li>`, 
		data () {
			return {
				configList: {}
			}
		},
		methods: {
			changeConfig: function (e) {
				let newConfig = {
					text: e.target.value
				}
				this.$http.post('/settings/configs', newConfig)
					.then(function(response) {
						console.log(response);
					});
				// console.log(e.target.value);
			}
		}
	})
	var app = new Vue({
		el: '.app',
		data() {
			return {
				configList: []
			}
		},
		created () {
			this.loadConfig();
			// this.changeConfigu();
		},
		methods: {
			loadConfig() {
				this.$http.get('/settings/configs')
					.then(function(response){
						this.configList = response.body;
					});
			}
			// changeConfigu: function() {
			// 	this.text = "sahil505";
			// 	console.log(this.text);
			// }

		}
	})
}