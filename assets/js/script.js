import message from '/test.json';
window.onload = function () {
	var app = new Vue({
		el: '.app',
		data: function () {
			return {
				message: message
			};
		},
		created: function () {
			this.fetchData()
		},
		methods: {
			fetchData: function () {
				var apiURL = 'http://localhost:3000/test.json'
				this.$http.get(apiURL, function (data) {
					console.log('Yo!')
					this.$set('message', JSON.parse(data))
				})
			}
		}
	})
}