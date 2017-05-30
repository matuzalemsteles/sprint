import App from '../../src/app/App';

describe('App', () => {
  it('should enabled false', () => {
    let options = {
      routes: ['*.html'],
      enabled: false
    };
    let app = new App(options);
    expect(app).toMatchObject({"enabled": false, "path": null, "routes": ["*.html"]});
  })

  it('should enabled success', () => {
    let options = {
      routes: ['*.html'],
      enabled: true
    };
    let app = new App(options);
    expect(app).toMatchObject({"enabled": true, "path": null, "routes": ["*.html"]});
  })
})
