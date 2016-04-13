var songView = Backbone.View.extend({

	el : $("#container"),

	render : function(){
		this.$el.append("<h1>Hello Vinay</h1>");
		return this;
	}

});

var BookView = Backbone.View.extend({

	el : '#container',

	render : function(){
		this.$el.append("<h1>Hello Vinay</h1>");
		return this;
	}

});

var book = new BookView();
book.render();