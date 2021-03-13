const test = require('ava')
const { toNumeric } = require('./index.js')

// single roman numeral

test('single roman numeral I', t => {
  t.is(toNumeric('I'), 1)
})

test('single roman numeral V', t => {
  t.is(toNumeric('V'), 5)
})

test('single roman numeral X', t => {
  t.is(toNumeric('X'), 10)
})

// multiple roman numerals

test('multiple roman numerals XXXVIII', t => {
  t.is(toNumeric('XXXVIII'), 38)
})

test('multiple roman numerals II', t => {
  t.is(toNumeric('II'), 2)
})

test('multiple roman numerals VI', t => {
  t.is(toNumeric('VI'), 6)
})

test('multiple roman numerals XI', t => {
  t.is(toNumeric('XI'), 11)
})

// subtractive notation

test('subtractive notation IV', t => {
  t.is(toNumeric('IV'), 4)
})

test('subtractive notation IX', t => {
  t.is(toNumeric('IX'), 9)
})

test('subtractive notation XIX', t => {
  t.is(toNumeric('XIX'), 19)
})

test('subtractive notation XXXIV', t => {
  t.is(toNumeric('XXXIV'), 34)
})
