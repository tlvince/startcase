'use strict'

const words = require('lodash.words')
const toLower = require('lodash.tolower')
const indicesOf = require('indicesof')
const upperFirst = require('lodash.upperfirst')
const deromanize = require('deromanize')

// Yuck
const restoreOutlier = (outlierIndex, outlier, words) => {
  let chars = -1
  let result = []

  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    chars += word.length + 1

    if (chars === outlierIndex) {
      const joined = [word + outlier + words[i + 1]]
      result = result.concat(joined, words.splice(i + 2))
      break
    }
    result.push(word)
  }

  return result
}

const restoreRomanNumerals = words => (
  words.map(word => {
    if (!word.match(/[IVXLCDM][ivxlcdm]+/)) {
      return word
    }
    const maybeDeromanized = deromanize(word)
    if (isNaN(maybeDeromanized)) {
      return word
    }
    return word.toUpperCase()
  })
)

const restoreSlashes = (str, words) => {
  const slashesIndicies = indicesOf('/', str)
  if (!slashesIndicies.length) {
    return words
  }
  slashesIndicies.forEach(index => {
    words = restoreOutlier(index, '/', words)
  })
  return words
}

module.exports = str => {
  let result = words(str)
    .map(toLower)
    .map(upperFirst)

  result = restoreRomanNumerals(result)
  result = restoreSlashes(str, result)

  return result.join(' ')
}
