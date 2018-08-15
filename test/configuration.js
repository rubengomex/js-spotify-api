import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import chaiPromise from 'chai-as-promised'

global.expect = chai.expect
global.sinon = sinon

chai.should()
chai.use(sinonChai)
chai.use(chaiPromise)
