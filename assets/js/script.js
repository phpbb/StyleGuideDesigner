window.onload = function () {
	var app = new Vue({
		el: '.app',
		data: function () {
			return {
				message: ""
			};
		},
		created: function () {
			console.log("hey");
			this.fetchData()
		},
		methods: {
			fetchData: function () {
				var apiURL = 'http://localhost:3000/test.json';
				console.log("hey!");
				this.$http.get(apiURL, function (data) {
					console.log('Yo!')
					this.$set('message', JSON.parse(data))
				})
			}
		}
	})
}