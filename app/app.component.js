(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'app',
      template: `
			<h1>Template</h1>
			<h2>Nathan's edit!</h2>
      <p>Now we get to go the other way!</p>
		`
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
