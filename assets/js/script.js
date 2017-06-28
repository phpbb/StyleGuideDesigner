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
				configList: [
				{ id: 0, text: 'PORT' },
				{ id: 1, text: 'Variables' },
				{ id: 2, text: 'Extension' }
				]
			}
		},
		created () {
			this.loadConfig();
		},
		methods: {
			loadConfig: function() {
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						document.getElementById("configDemo").innerHTML = this.responseText;
					}
				};
				xhttp.open("GET", "/settings/configs", true);
				xhttp.send();
			}

		}
	})
}