window.onload = function() {
	Vue.component('config-list', {
		props: ['config'],
		template: `<li><input type="text" v-on:blur="changeConfig" v-model="config.text">{{ config.text }}</li>`, 
		methods: {
			changeConfig: function (e) {
				console.log(e.target.value);
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
						console.log(response.body);
					});
			}
			// changeConfigu: function() {
			// 	this.text = "sahil505";
			// 	console.log(this.text);
			// }

		}
	})
}