const assert = require('assert');
const {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
} = require('./main.js');

describe('isEvenlyDivisible', () => {
  it('returns true if the first number is evenly divisible by the second', () => {
    assert.strictEqual(isEvenlyDivisible(6, 3), true);
    assert.strictEqual(isEvenlyDivisible(1000, 10), true);
    assert.strictEqual(isEvenlyDivisible(8, -4), true);
    assert.strictEqual(isEvenlyDivisible(-8, -4), true);
  });

  it(`returns false if the first number is not evenly divisible by the second`, () => {
    assert.strictEqual(isEvenlyDivisible(13, 3), false);
    assert.strictEqual(isEvenlyDivisible(-8, -3), false);
  });
});

describe('halfSquare', () => {
  it(`returns the half square of the given number`, () => {
    assert.strictEqual(halfSquare(6), 18);
    assert.strictEqual(halfSquare(7), 24.5);
    assert.strictEqual(halfSquare(-8), 32);
    assert.strictEqual(halfSquare(10), 50);
    assert.strictEqual(halfSquare(12), 72);
    assert.strictEqual(halfSquare(3), 4.5);
    assert.strictEqual(halfSquare(5), 12.5);
    assert.strictEqual(halfSquare(3.5), 6.125);
  });
});

describe('exclaim', () => {
  it(`given a string without exclamation marks at the end, returns the string with one appended.`, () => {
    assert.strictEqual(exclaim('hello'), 'hello!');
    assert.strictEqual(exclaim('yessir'), 'yessir!');
  });

  it(`given a string with an exclamation mark at the end, returns the string unchanged.`, () => {
    assert.strictEqual(exclaim('hello!'), 'hello!');
    assert.strictEqual(exclaim('yessir!'), 'yessir!');
  });

  it(`given a string with multiple exclamation marks at the end, returns the string with all but one removed from the end.`, () => {
    assert.strictEqual(exclaim('you friend!!'), 'you friend!');
    assert.strictEqual(exclaim('you fiend!!!!!!'), 'you fiend!');
  });
});

describe('isLong', () => {
  it(`returns true if the given string is longer than 15 characters`, () => {
    assert.strictEqual(isLong('the quick brown fox'), true);
  });

  it(`returns false if the given string is shorter than 15 characters`, () => {
    assert.strictEqual(isLong('the quick'), false);
  });

  it(`returns true if the given string is exactly 15 characters`, () => {
    assert.strictEqual(isLong('the quick brown'), true);
  });
});

describe('containsDigit', () => {
  it(`can determine that a string with only digits contains at least one digit`, () => {
    assert.strictEqual(containsDigit('1'), true);
    assert.strictEqual(containsDigit('31'), true);
    assert.strictEqual(containsDigit('315'), true);
    assert.strictEqual(containsDigit('1888'), true);
  });

  it(`can determine that a string with only non-numbers does not contain a digit`, () => {
    assert.strictEqual(containsDigit('ab'), false);
    assert.strictEqual(containsDigit('hello my weirdo'), false);
    assert.strictEqual(containsDigit('the quick brown fox begins a boring sentence'), false);
  });

  it(`can determine that a string that contains some numbers and some non-numbers does contain a digit`, () => {
    assert.strictEqual(containsDigit('ab3'), true);
    assert.strictEqual(containsDigit('35ab'), true);
    assert.strictEqual(containsDigit('35ab3'), true);
    assert.strictEqual(containsDigit('a3b'), true);
  });

  it(`can determine that an empty string does not contain a digit`, () => {
    assert.strictEqual(containsDigit(''), false);
  });
});

describe('containsLowerCase', () => {
  it(`can determine that a string with only lowercase characters contains at least one lowercase character`, () => {
    assert.strictEqual(containsLowerCase('a'), true);
    assert.strictEqual(containsLowerCase('ab'), true);
    assert.strictEqual(containsLowerCase('dki'), true);
    assert.strictEqual(containsLowerCase('weiorusd'), true);
  });

  it(`can determine that a string with only uppercase letters does not contain any lowercase characters`, () => {
    assert.strictEqual(containsLowerCase('AB'), false);
    assert.strictEqual(containsLowerCase('HELLO'), false);
    assert.strictEqual(containsLowerCase('WORDSAMIRITE'), false);
  });

  it(`can determine that a string with only non-letters does not contain any lowercase characters`, () => {
    assert.strictEqual(containsLowerCase('    '), false);
    assert.strictEqual(containsLowerCase('!!!'), false);
    assert.strictEqual(containsLowerCase('2382930'), false);
  });

  it(`can determine that a string that contains some lowercase letters and some uppercase does contain a lowercase letter`, () => {
    assert.strictEqual(containsLowerCase('abC'), true);
    assert.strictEqual(containsLowerCase('KDab'), true);
    assert.strictEqual(containsLowerCase('KWJabWI'), true);
    assert.strictEqual(containsLowerCase('aBc'), true);
  });

  it(`can determine that a string that contains some lowercase letters and some non-letters does contain a lowercase letter`, () => {
    assert.strictEqual(containsLowerCase('hello my good friends'), true);
    assert.strictEqual(containsLowerCase('I hate this @#(%'), true);
    assert.strictEqual(containsLowerCase('what even is this'), true);
    assert.strictEqual(containsLowerCase('what!'), true);
  });

  it(`can determine that an empty string does not contain a lowercase letter`, () => {
    assert.strictEqual(containsLowerCase(''), false);
  });
});

describe('containsUpperCase', () => {
  it(`can determine that a string with only uppercase characters contains at least one uppercase character`, () => {
    assert.strictEqual(containsUpperCase('A'), true);
    assert.strictEqual(containsUpperCase('AB'), true);
    assert.strictEqual(containsUpperCase('DKI'), true);
    assert.strictEqual(containsUpperCase('WEIORUSD'), true);
  });

  it(`can determine that a string with only lowercase letters does not contain any uppercase characters`, () => {
    assert.strictEqual(containsUpperCase('ab'), false);
    assert.strictEqual(containsUpperCase('hello'), false);
    assert.strictEqual(containsUpperCase('wordsamirite'), false);
  });

  it(`can determine that a string with only non-letters does not contain any uppercase characters`, () => {
    assert.strictEqual(containsUpperCase('    '), false);
    assert.strictEqual(containsUpperCase('!!!'), false);
    assert.strictEqual(containsUpperCase('2382930'), false);
  });

  it(`can determine that a string that contains some lowercase letters and some uppercase does contain an uppercase letter`, () => {
    assert.strictEqual(containsUpperCase('abC'), true);
    assert.strictEqual(containsUpperCase('KDab'), true);
    assert.strictEqual(containsUpperCase('KWJabWI'), true);
    assert.strictEqual(containsUpperCase('aBc'), true);
  });

  it(`can determine that a string that contains some uppercase letters and some non-letters does contain an uppercase letter`, () => {
    assert.strictEqual(containsUpperCase('hELLO MY GOOD FRIENDS'), true);
    assert.strictEqual(containsUpperCase('I HATE THIS @#(%'), true);
    assert.strictEqual(containsUpperCase('WHAT EVEN IS THIS'), true);
    assert.strictEqual(containsUpperCase('WHAT!'), true);
  });

  it(`can determine that an empty string does not contain an uppercase letter`, () => {
    assert.strictEqual(containsUpperCase(''), false);
  });
});

describe('containsNonAlphanumeric', () => {
  it(`can determine that a string with only non-alphanumeric characters contains at least one non-alphanumeric character`, () => {
    assert.strictEqual(containsNonAlphanumeric('#*('), true);
    assert.strictEqual(containsNonAlphanumeric('   '), true);
    assert.strictEqual(containsNonAlphanumeric('`??!`'), true);
  });

  it(`can determine that a string with only letters does not contain any non-alphanumeric characters`, () => {
    assert.strictEqual(containsNonAlphanumeric('ab'), false);
    assert.strictEqual(containsNonAlphanumeric('hello'), false);
    assert.strictEqual(containsNonAlphanumeric('HELLOYOU'), false);
  });

  it(`can determine that a string with only non-zero digits does not contain any non-alphanumeric characters`, () => {
    assert.strictEqual(containsNonAlphanumeric('3'), false);
    assert.strictEqual(containsNonAlphanumeric('33'), false);
    assert.strictEqual(containsNonAlphanumeric('238293'), false);
  });

  it(`can determine that a string with only zeros does not contain any non-alphanumeric characters`, () => {
    assert.strictEqual(containsNonAlphanumeric('0'), false);
    assert.strictEqual(containsNonAlphanumeric('00'), false);
    assert.strictEqual(containsNonAlphanumeric('0000'), false);
  });

  it(`can determine that a string that contains some alphanumeric characters and some non-alphanumeric characters does contain a non-alphanumeric character`, () => {
    assert.strictEqual(containsNonAlphanumeric('hello there'), true);
    assert.strictEqual(containsNonAlphanumeric('p@ssw03d'), true);
    assert.strictEqual(containsNonAlphanumeric('3249sdlfjks!230'), true);
    assert.strictEqual(containsNonAlphanumeric(' hi3 '), true);
  });

  it(`can determine that an empty string does not contain a non-alphanumeric character`, () => {
    assert.strictEqual(containsNonAlphanumeric(''), false);
  });
});

describe('containsSpace', () => {
  it(`can determine that a string with only spaces contains at least one space`, () => {
    assert.strictEqual(containsSpace(' '), true);
    assert.strictEqual(containsSpace('   '), true);
    assert.strictEqual(containsSpace('        '), true);
  });

  it(`can determine that a string with only letters does not contain any spaces`, () => {
    assert.strictEqual(containsSpace('ab'), false);
    assert.strictEqual(containsSpace('hello'), false);
    assert.strictEqual(containsSpace('HELLOYOU'), false);
  });

  it(`can determine that a string with only digits does not contain any non-alphanumeric characters`, () => {
    assert.strictEqual(containsSpace('3'), false);
    assert.strictEqual(containsSpace('33'), false);
    assert.strictEqual(containsSpace('2308293'), false);
  });

  it(`can determine that a string that contains some spaces and some non-spaces does contain a space`, () => {
    assert.strictEqual(containsSpace('hello there'), true);
    assert.strictEqual(containsSpace(' hi'), true);
    assert.strictEqual(containsSpace('hi '), true);
    assert.strictEqual(containsSpace(' hi3 '), true);
  });

  it(`can determine that an empty string does not contain any spaces`, () => {
    assert.strictEqual(containsSpace(''), false);
  });
});

describe('countWords', () => {
  it(`returns the count of words in a string with spaces between words`, () => {
    assert.strictEqual(countWords('hey you'), 2);
    assert.strictEqual(countWords('hello there sir'), 3);
    assert.strictEqual(countWords('greetings my good sir'), 4);
  });

  it(`returns the count of words when there is only one`, () => {
    assert.strictEqual(countWords('hello'), 1);
  });
});

describe('digits', () => {
  it(`can turn a positive number into an array of its digits`, () => {
    assert.deepStrictEqual(digits(0), [0]);
    assert.deepStrictEqual(digits(1), [1]);
    assert.deepStrictEqual(digits(12), [1, 2]);
    assert.deepStrictEqual(digits(12350), [1, 2, 3, 5, 0]);
  });

  it(`can turn a negative number into an array of its digits, ignoring the negative sign`, () => {
    assert.deepStrictEqual(digits(-0), [0]);
    assert.deepStrictEqual(digits(-1), [1]);
    assert.deepStrictEqual(digits(-12), [1, 2]);
    assert.deepStrictEqual(digits(-12350), [1, 2, 3, 5, 0]);
  });

  it(`can turn a floating point number into an array of its digits, ignoring the decimal point`, () => {
    assert.deepStrictEqual(digits(3.1519), [3, 1, 5, 1, 9]);
    assert.deepStrictEqual(digits(4.04), [4, 0, 4]);
  });
});

describe('truncate', () => {
  it(`shortens a title of at least 15 characters to one with 8 and 3 dots.`, () => {
    assert.strictEqual(truncate(`I'm so tired, my mind is set on you`), `I'm so t...`);
  });

  it(`shortens a string of exactly 15 characters`, () => {
    assert.strictEqual(truncate(`15 characters!!`), '15 chara...');
  });

  it(`does not shorten a sub-15-character string`, () => {
    assert.strictEqual(truncate(`tiny str`), 'tiny str');
  });
});

describe('isValidPassword', () => {
  it(`returns false if there are no uppercase characters in the given string`, () => {
    assert.strictEqual(isValidPassword('jelly22fi$h'), false);
  });

  it(`returns false if there are no lowercase characters in the given string`, () => {
    assert.strictEqual(isValidPassword('JELLY22FI$H'), false);
  });

  it(`returns false if there are no digits in the given string`, () => {
    assert.strictEqual(isValidPassword('Usher!'), false);
  });

  it(`returns false if there are no non-alphanumeric characters in the given string`, () => {
    assert.strictEqual(isValidPassword('Passw0rd'), false);
  });

  it(`returns false if there are any spaces in the given string`, () => {
    assert.strictEqual(isValidPassword('Passw0rd #(@$'), false);
  });

  it(`returns true if it contains a lowercase letter, an uppercase letter, a digit, a non-alphanumeric character, and no spaces`, () => {
    assert.strictEqual(isValidPassword('Lov3MyP!ano'), true);
    assert.strictEqual(isValidPassword('1Ki77$'), true);
    assert.strictEqual(isValidPassword('a11Black$'), true);
    assert.strictEqual(isValidPassword('BankLogin!3'), true);
  });
});

describe('onlyPunchy', () => {
  it(`returns only those titles that are shorter than 15 characters`, () => {
    assert.deepStrictEqual(onlyPunchy(['quarantine!', 'the lord of the rings', 'the matrix!']), ['quarantine!', 'the matrix!']);
  });

  it(`adds an exclamation point to any titles without exclamation points`, () => {
    assert.deepStrictEqual(onlyPunchy(['quarantine', 'the matrix']), ['quarantine!', 'the matrix!']);
  });

  it(`removes any excess exclamation points from any titles with multiple exclamation points`, () => {
    assert.deepStrictEqual(onlyPunchy(['quarantine!!', 'the matrix!!!']), ['quarantine!', 'the matrix!']);
  });

  it(`does not factor in excess exclamation points when deciding if the title is shorter than 15 characters`, () => {
    assert.deepStrictEqual(onlyPunchy(['quarantine!!!!!!!!!!!', 'the matrix!!!!!!!!!!!!!!!!!!!']), ['quarantine!', 'the matrix!']);
  });
});
