const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  it('stub Utils.calculateNumber and log correct message', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    const print = sinon.spy(console, 'log');
    
    const result = sendPaymentRequestToApi(100, 20);
    expect(result).to.be.equal(10);
    expect(print.calledWith('The total is: 10')).to.be.true;

    stub.restore();
  });
});
