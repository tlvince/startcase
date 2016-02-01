const test = require('tape')

const startCase = require('./')

const assertions = [
  ['camelCase', 'Camel Case'],
  ['CAPS', 'Caps'],
  ['déjà vu', 'Déjà Vu'],
  ['kebab-case', 'Kebab Case'],
  ['Snake_case', 'Snake Case'],
  [' trimmed  ', 'Trimmed'],
  ['trimmed    between    words', 'Trimmed Between Words'],
  ['FOO/BAR BAZ', 'Foo/Bar Baz'],
  ['Fooo bargain/baz dollar', 'Fooo Bargain/Baz Dollar'],
  ['Multiple/slashes/again', 'Multiple/Slashes/Again'],
  ['Edward iv', 'Edward IV'],
  ['will IV ich', 'Will IV Ich'],
  ['hello henry IV/world', 'Hello Henry IV/World']
]

test('startCase', assert => {
  assertions.forEach(assertion => {
    const input = assertion[0]
    const expected = assertion[1]
    assert.equal(startCase(input), expected, `${input} -> ${expected}`)
  })
  assert.end()
})
