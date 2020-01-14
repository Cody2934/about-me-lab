// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../src/is-yes.js';
const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, false);
});


test('yep is true', assert => {
    const input = 'yep';
    const expected = true;
    const reslut = isYes(input);
    assert.equal(result, expected)
  }



test('Yes is true', assert => {
  // arrange
  const input = 'Yes';
  const expected = true;
  // act
  
  const result = isYes(input);

  // assert
  assert.equal(result, expected);
});

test('No is false', assert => {
  // arrange
  const input = 'No';
  const expected = false;
  // act
  
  const result = isYes(input);

  // assert
  assert.equal(result, expected);
});

test('Y is true', assert => {
  // arrange
  const input = 'Y';
  const expected = true;
  // act
  
  const result = isYes(input);

  // assert
  assert.equal(result, expected);
});


