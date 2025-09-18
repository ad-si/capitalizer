type CapitalizerInput = string | string[];

interface CapitalizerFunction {
  (value: CapitalizerInput): string | string[] | undefined;
  first: (value: string) => string;
  all: (value: CapitalizerInput) => string | string[] | undefined;
}

function capitalizeString(str: string): string {
	return str.charAt(0).toUpperCase() + str.substr(1);
}

function capitalizeArray(array: string[]): string[] {
	return array.map((str: string) => capitalizeString(str));
}

function capitalizer(value: CapitalizerInput): string | string[] | undefined {
	if (typeof value === 'string') {
		return capitalizeString(value);
	}

	if (Array.isArray(value)) {
		return capitalizeArray(value);
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