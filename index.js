function capitalizeString (string) {
	return string.charAt(0).toUpperCase() + string.substr(1)
}

function capitalizeArray (array) {
	return array.map(function (string) {
		return capitalizeString(string)
	})
}

function capitalizer (value) {
	if (typeof value === 'string')
		return capitalizeString(value)

	if (Array.isArray(value))
		return capitalizeArray(value)
}


capitalizer.first = capitalizeString

capitalizer.all = function (value) {
	if (typeof value === 'string')
		return capitalizeArray(value.split(' ')).join(' ')

	if (Array.isArray(value))
		return capitalizeArray(value)
}


module.exports = capitalizer
