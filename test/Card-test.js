const expect = require('chai').expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card');

describe('Card', function() {
  const card = new Card(prototypeQuestions[0]);

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an object instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('object');
  });
});