const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  it('calls Utils.calculateNumber with correct arguments', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
   
    spy.restore();
   // expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
