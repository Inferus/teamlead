

export default function routes(app, addon) {
    // Redirect root path to /atlassian-connect.json,
    // which will be served by atlassian-connect-express.
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    // This is an example route used by "generalPages" module (see atlassian-connect.json).
    // Verify that the incoming request is authenticated with Atlassian Connect.
    app.get('/teamleadtask', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params: the name of the component or template file, and its props.
        // Handlebars and jsx are both supported, but please note that jsx changes require `npm run watch-jsx` in order to be picked up by the server.
        res.render(
          'teamleadtask.jsx', // change this to 'hello-world.jsx' to use the Atlaskit & React version
          {
            title: 'Atlassian Connect'
            //, issueId: req.query['issueId']
            //, browserOnly: true // you can set this to disable server-side rendering for react views
          }
        );
    });
    app.get('/settings', addon.authenticate(), (req, res) => {
      // Rendering a template is easy; the render method takes two params: the name of the component or template file, and its props.
      // Handlebars and jsx are both supported, but please note that jsx changes require `npm run watch-jsx` in order to be picked up by the server.
      res.render(
        'settings.jsx', // change this to 'hello-world.jsx' to use the Atlaskit & React version
        {
          title: 'Atlassian Connect'
          //, issueId: req.query['issueId']
          //, browserOnly: true // you can set this to disable server-side rendering for react views
        }
      );
  });
  app.get('/web-panel', addon.authenticate(), (req, res) => {
    // Rendering a template is easy; the render method takes two params: the name of the component or template file, and its props.
    // Handlebars and jsx are both supported, but please note that jsx changes require `npm run watch-jsx` in order to be picked up by the server.
    res.render(
      'web-panel.jsx', // change this to 'hello-world.jsx' to use the Atlaskit & React version
      {
        title: 'Atlassian Connect'
        //, issueId: req.query['issueId']
        //, browserOnly: true // you can set this to disable server-side rendering for react views
      }
    );
});
app.post('/installed', addon.authenticate(), (req, res) => {
  // Rendering a template is easy; the render method takes two params: the name of the component or template file, and its props.
  // Handlebars and jsx are both supported, but please note that jsx changes require `npm run watch-jsx` in order to be picked up by the server.
  res.status(200).json(JSON.parse({
    "key": "installed-addon-key",
    "clientKey": "unique-client-identifier",
    "sharedSecret": "a-secret-key-not-to-be-lost",
    "serverVersion": "server-version",
    "pluginsVersion": "version-of-connect",
    "baseUrl": "https://moonlization.atlassian.net",
    "displayUrl": "https://issues.example.com",
    "displayUrlServicedeskHelpCenter": "https://support.example.com",
    "productType": "jira",
    "description": "Atlassian Jira at https://moonlization.atlassian.net",
    "serviceEntitlementNumber": "SEN-number",
    "eventType": "installed"
  }))
});

    // Add additional route handlers here...
}
