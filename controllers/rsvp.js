var reserve = require('../services/reserve');
var crypt = require('../services/crypt');

exports.addEventForCurrentUser = function(req, res, next) {
	var userId = req.user.id;
	reserve.addEvent(req.params.eventId, userId, function(result) {
		res.json({result: result});
	});
}

exports.removeEventFromCurrentUser = function(req, res, next) {
	var userId = req.user.id;
	reserve.removeEvent(req.params.eventId, userId, function(result) {
		res.json({result: result});
	});
}

exports.addEventFromEmail = function(req, res, next) {
	var eventId = crypt.decrypt(req.params.eventId);
	var userId = crypt.decrypt(req.params.userId);
	reserve.addEvent(eventId, userId, function() { res.status(200).end(); });
}
