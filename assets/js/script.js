window.onload = function() {
	Vue.component('config-list', {
		props: ['config'],
		template: `<li><input type="text" v-model="config.text">{{ config.text }}</li>`
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