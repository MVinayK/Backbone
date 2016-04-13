var BookView = Backbone.View.extend({

	el : $("#container"),

	render : function(){
		console.log("hello");
		this.$el.append('<h1>Hello Vinay </h1>');
		return this;
	}
});

var book = new BookView();
book.render();