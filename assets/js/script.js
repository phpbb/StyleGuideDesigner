window.onload = function() {
	Vue.component('config-list', {
		props: ['config'],
		template: `<li><input type="text" v-on:keyup="pressKey" v-model="config.text">{{ config.text }}</li>`, 
		methods: {
			pressKey: function (e) {
				console.log(e.target.value);
			}
		}
	})
	var app = new Vue({
		el: '.app',
		data() {
			return {
				configList: [
				{ id: 0, text: 'PORT' },
				{ id: 1, text: 'Variables' },
				{ id: 2, text: 'Extension' }
				]
			}
		}
	})
}