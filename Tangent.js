/*
	Utility functions used by the library..
*/

var copyProps = function(source, destination){
	$.extend(true ,source, destination);
}

/*
	sets the el property to $el a jquery version of el

	gets the event object and binds it to the dom element el
	can be given either as string or inline function.
*/

var setAllElements = function(parent){
	console.log(parent);
	if(parent.el.trim()){
		parent.$el = $(parent.el);
	}
	var evts = parent.events;
	if(Object.keys(parent.events).length > 0){
		for(var props in evts){
			try{
				if(evts.hasOwnProperty(props) && (typeof evts[props] === 'string') ){
					parent.$el.on( props , parent[evts[props]]);
				}
				else if(evts.hasOwnProperty(props) && (typeof evts[props] === 'function')){
					parent.$el.on( props , evts[props]);
				}
			}catch(e){
				console.log(e);
			}

		}
	}
}

window.Tangent = {
	Class : {},
	View: {}
};
/* can use the extend method of Class to create a new class*/

var Class = Tangent.Class = function(attrs){
	
	this.def = attrs || {};
	var self = this;
	//return this;
};

/*underscore's method to copy the destinatin methods to source object*/

copyProps(Class.prototype, {
	get : function(key){
			return this.def[key];
		},

	set : function(key , value){
		if(def[key] && value){
			def[key] = value;
			return this;
		}
	}
});


Tangent.View = function(options) {
    
    console.log(options);
    var $el;
    copyProps(this, _.pick(options, viewOptions));
    setAllElements(this);
    this.initialize();

 };

var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];


copyProps(Tangent.View.prototype, {

    tagName: 'div',

    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){

    },

    events : {

    },

    render: function() {
      return this;
    },


    remove: function() {
      this.$el.remove();
      return this;
    }

  });





/*extend method to set the initial properties and returns a function*/
  var extend = function(protoProps) {
    var parent = this;
    var child;
    //making a constructor for obj creation
    child = function(options){
    	return parent.apply(this, arguments);
    };
    console.log(parent.prototype);
    child.prototype = parent.prototype;

	copyProps(child.prototype, protoProps);    

    return child;
  };

Tangent.Class.extend = Tangent.View.extend = extend;	


var personView = Tangent.View.extend({
	tagName : 'li',

	el : "#container",

	initialize : function(){
		this.render();
	},

	events : {
		"click" : "showAlert"
	},

	showAlert : function(){
			alert("clicked");
	},

	render : function(){
		
		this.$el.append('<li>4th element</li>');

	},

	show : function(){
		console.log("hello !!!!");
	}
});

var perview  = new  personView();






