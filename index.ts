type CapitalizerInput = string | string[] | Record<string, any>;

interface CapitalizerFunction {
  (value: CapitalizerInput): string | string[] | Record<string, any> | undefined;
  first: (value: string) => string;
  all: (value: CapitalizerInput) => string | string[] | Record<string, any> | undefined;
}

function capitalizeString(str: string): string {
	return str.charAt(0).toUpperCase() + str.substr(1);
}

function capitalizeArray(array: string[]): string[] {
	return array.map((str: string) => capitalizeString(str));
}

function capitalizeObject(obj: Record<string, any>): Record<string, any> {
	const result: Record<string, any> = {};

	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const value = obj[key];

			if (typeof value === 'string') {
				// Capitalize all words in the string (like capitalize.all)
				result[key] = capitalizeArray(value.split(' ')).join(' ');
			}
			else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
				result[key] = capitalizeObject(value);
			}
			else {
				result[key] = value;
			}
		}
	}

	return result;
}

function capitalizer(value: CapitalizerInput): string | string[] | Record<string, any> | undefined {
	if (typeof value === 'string') {
		return capitalizeString(value);
	}

	if (Array.isArray(value)) {
		return capitalizeArray(value);
	}

	if (typeof value === 'object' && value !== null) {
		return capitalizeObject(value);
	}
}

(capitalizer as CapitalizerFunction).first = capitalizeString;

(capitalizer as CapitalizerFunction).all = function (value: CapitalizerInput): string | string[] | undefined {
	if (typeof value === 'string') {
		return capitalizeArray(value.split(' ')).join(' ');
	}

	if (Array.isArray(value)) {
		return capitalizeArray(value);
	}
};

export = capitalizer as CapitalizerFunction;
