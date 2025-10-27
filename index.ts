type CapitalizedObject = { [key: string]: string | CapitalizedObject }
type CapitalizerInput = string | string[] | { [key: string]: unknown }

interface CapitalizerFunction {
  (value: CapitalizerInput): string | string[] | CapitalizedObject | undefined
  first: (value: string) => string
  all: (value: CapitalizerInput) => string | string[] | CapitalizedObject | undefined
}

function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function capitalizeArray(array: string[]): string[] {
  return array.map((str: string) => capitalizeString(str))
}

function capitalizeObject(obj: { [key: string]: unknown }): CapitalizedObject {
  const result: CapitalizedObject = {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]

      if (typeof value === "string") {
        // Capitalize all words in the string (like capitalize.all)
        result[key] = capitalizeArray(value.split(" ")).join(" ")
      }
      else if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        result[key] = capitalizeObject(value as { [key: string]: unknown })
      }
      else {
        // Skip non-string, non-object values
        continue
      }
    }
  }

  return result
}

function capitalizer(value: CapitalizerInput): string | string[] | CapitalizedObject | undefined {
  if (typeof value === "string") {
    return capitalizeString(value)
  }

  if (Array.isArray(value)) {
    return capitalizeArray(value)
  }

  if (typeof value === "object" && value !== null) {
    return capitalizeObject(value as { [key: string]: unknown })
  }
}

const capitalizerFunc = capitalizer as CapitalizerFunction
capitalizerFunc.first = capitalizeString
capitalizerFunc.all = function (value: CapitalizerInput): string | string[] | CapitalizedObject | undefined {
  if (typeof value === "string") {
    return capitalizeArray(value.split(" ")).join(" ")
  }

  if (Array.isArray(value)) {
    return capitalizeArray(value)
  }

  if (typeof value === "object" && value !== null) {
    return capitalizeObject(value as { [key: string]: unknown })
  }
}

export default capitalizerFunc
