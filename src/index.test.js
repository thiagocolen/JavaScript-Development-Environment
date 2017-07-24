import { expect } from 'chai';
import fs from 'fs';
import { JSDOM } from 'jsdom';


describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});


describe('index.html', () => {
  it('should say hello', (done) => {

    const file = fs.readFileSync('./src/index.html', 'utf-8');
    const jsdom = new JSDOM(file);

    const h1 = jsdom.window.document.getElementsByTagName('h1')[0];    
    expect(h1.innerHTML).to.equal('Hello Everybody!');

    done();
  });
});
