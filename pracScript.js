console.log("hello vinay");

var Music = Backbone.Model.extend({
	"artist" : "",
	"genere" : "",
	"title" : ""
});

var MusicColl = Backbone.Collection.extend({});

var m1 = new Music({
	"artist" : "vinay",
	"genere" : "tragic",
	"title" : "gone is gone"
});

var m2 = new Music({
	"artist" : "prabhat",
	"genere" : "comic",
	"title" : "home is gone"
});

var m3 = new Music({
	"artist" : "amit",
	"genere" : "romantic",
	"title" : "done is gone"
});

var musics = new MusicColl([m1,m2,m3]);

var MusicView = Backbone.View.extend({
	tagName : 'li',

	render : function(){
		var content = "artist : " + this.model.get("artist") + "  genere : " + this.model.get("genere") + "   title : " + this.model.get("title") ;
		this.$el.html(content);
		return this;
	}
});

var MusicViews = Backbone.View.extend({

	el : $('#container'),
	render : function(){
		var that = this;
		this.collection.each(function(music){
			that.$el.append((new MusicView({model : music})).render().$el);
		});

		return this;
	}
});

var myMusic = new MusicViews({collection : musics});
myMusic.render();

















