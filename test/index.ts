import * as assert from "assert"
import capitalize from "../index.js"

describe("Capitalizer", () => {

  it("Capitalizes the first letter of a string", () => {
    assert.equal(capitalize("test"), "Test")
    assert.equal(capitalize.first("test"), "Test")
  })


  it("Capitalizes all words in a string", () => {
    assert.equal(
      capitalize.all("this is a test sentence"),
      "This Is A Test Sentence"
    )
  })


  it("Capitalizes all words in an array", () => {
    assert.deepEqual(
      capitalize(["this", "is", "a", "test", "sentence"]),
      ["This", "Is", "A", "Test", "Sentence"]
    )
  })


  it("Recursively capitalizes all strings in an object", () => {
    assert.deepEqual(
      capitalize({
        name: "john",
        hobby: "chillin",
        address: {
          country: "australia",
          street: "wayne boulevard"
        }
      }),
      {
        name: "John",
        hobby: "Chillin",
        address: {
          country: "Australia",
          street: "Wayne Boulevard"
        }
      }
    )
  })
})
