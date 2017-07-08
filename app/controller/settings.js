var exports = module.exports = {};
	

exports.config = function (configData, req) {
// Assign the configData variable to the post request body that we get from vue component
	configData.push({
		"id": configData.length + 1,
		"name": "new addition",
		"setting": req.body.setting
	});
	return configData;
};
