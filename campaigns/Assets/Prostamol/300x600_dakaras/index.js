(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg_300x600jpgcopy = function() {
	this.initialize(img.bg_300x600jpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,600);


(lib.car_300x600 = function() {
	this.initialize(img.car_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,153);


(lib.logo_300x600 = function() {
	this.initialize(img.logo_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,57);


(lib.pakuote_300x600 = function() {
	this.initialize(img.pakuote_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,141);


(lib.shadow_300x600 = function() {
	this.initialize(img.shadow_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,220);


(lib.smoke1_300x600 = function() {
	this.initialize(img.smoke1_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,82);


(lib.smoke2_300x600 = function() {
	this.initialize(img.smoke2_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,120);


(lib.smoke3_300x600 = function() {
	this.initialize(img.smoke3_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,76);


(lib.wheels_300x600_1 = function() {
	this.initialize(img.wheels_300x600_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,97);


(lib.wheels_300x600_2 = function() {
	this.initialize(img.wheels_300x600_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,98);


(lib.wheels_300x600_3 = function() {
	this.initialize(img.wheels_300x600_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,100);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Smoke3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.smoke2_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,120);


(lib.Shine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.698)","rgba(255,255,255,0)"],[0,0.518,1],-67,0,88,0).s().p("EgNbAoyMAAAhRjIa3AAMAAABRjg");
	this.shape.setTransform(85.975,260.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shine, new cjs.Rectangle(0,0,172,522), null);


(lib.ratas3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wheels_300x600_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,100);


(lib.ratas2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wheels_300x600_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,98);


(lib.ratas1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wheels_300x600_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189,97);


(lib.prostatosProblemu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDCAQgIgGAAgMQAAgJAIgMQADgGAEgEQAQgBANgEIABgBIgTgCQgHADgEAFIgEAAQgjAAgTgRQgUgRAAgeIAAiLQAAgKASAAIALAAQARAAAAAKIAACHQABANAHAIQAIAHAMAAQANAAAIgHQAIgIgBgNIAAiHQAAgKASAAIALAAQASAAAAAKIAACLQAAAegUARQgJAIgNAEQgIAFgFAIQgGAJABAFQgBAJAKAAQAGAAAEgCIAGgCQADAAACAFIABAKQABAFgJAEQgJAFgLAAQgOAAgHgHgAAPBHIATACIgBABQgNAEgQABQAEgFAHgDg");
	this.shape.setTransform(251.7,26.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA9BpQgSABAAgKIAAhZIAAgHIABgIIgBAAIgDAGIgEAGIgQAnQgDAHgPAAIgDAAQgPAAgDgHIgRgnIgCgGIgEgGIgBAAIABAIIAAAHIAABZQABAKgTgBIgGAAQgTABABgKIAAi/QgBgKATAAIAJAAQAKAAAFACQAEACACAFIAeBDIAFAMIABAJIACgJIAFgMIAdhDQACgFAFgCQAFgCALAAIAJAAQASAAAAAKIAAC/QAAAKgSgBg");
	this.shape_1.setTransform(232.8,23.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBpQgLAAAAgMIAAi5QAAgMALAAIBXAAQAJAAAAAPIAAAKQAAAOgJAAIg0AAIAAAsIAuAAQAJAAAAAPIAAAIQAAAPgJAAIguAAIAAAwIA0AAQAJABAAAPIAAAJQAAAPgJAAg");
	this.shape_2.setTransform(216.875,23.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmBpQgLAAAAgMIAAi7QAAgKASAAIALAAQASAAAAAKIAACgIArAAQAJAAAAAPIAAAJQAAAPgJAAg");
	this.shape_3.setTransform(204.825,23.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BpQgLAAABgMIAAi5QgBgMALAAIAwAAQAgAAAPAQQAOAQAAAZQAAAPgIAMQgIAMgMAEIAAABQAQAEAJANQAKAOAAATQAAA6hEAAgAgRBBIANAAQALAAAFgFQAFgGAAgNQAAgNgFgGQgFgGgLAAIgNAAgAgRgUIANAAQAJAAAEgFQAFgGgBgMQABgMgFgEQgEgFgJgBIgNAAg");
	this.shape_4.setTransform(192,23.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag6BSQgUgbAAg3QAAg2AUgaQATgaAnAAQAoAAATAaQAUAaAAA2QAAA3gUAbQgTAagoAAQgnAAgTgagAgXgzQgHAQAAAjQAAAkAHARQAIAPAPAAQARAAAHgPQAHgRAAgkQAAgjgHgQQgHgQgRAAQgPAAgIAQg");
	this.shape_5.setTransform(175.425,23.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmBpQgHAAgFgBQgFgCgBgFIgOg4QgCgIgEgDQgDgDgJAAIgHAAIAABFQAAAJgSAAIgKAAQgTAAABgJIAAi8QAAgMALAAIA0AAQAfAAAQAQQAQAQABAiQAAAOgGALQgEAKgIAFQgHAFgJABIAAABQAHACAEAGQAGAGACAIIASA8IABAHQAAAEgDACQgEABgLAAgAgTgMIARAAQAKAAAEgGQAFgGAAgOQAAgOgFgHQgEgGgKAAIgRAAg");
	this.shape_6.setTransform(159.8,23.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBpQgSAAAAgJIAAi8QAAgMALAAIA0AAQAgAAAQAQQAQARAAAhQAAAggQAQQgQARggAAIgRAAIAABFQAAAJgRAAgAgRgMIARAAQALAAAEgGQAEgGAAgOQAAgOgEgHQgEgGgLAAIgRAAg");
	this.shape_7.setTransform(144.85,23.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBoQgLgCgIgEIgKgGQgFgEAAgFIABgJQABgGADgFQADgGAEAAQADAAAGADIAPAGQAIADAJAAQAHAAAHgEQAHgEAAgNQAAgJgEgFQgEgFgHgFIgNgIQgOgIgJgIQgKgIgFgKQgFgMAAgQQAAgTAIgNQAIgOAPgHQAOgHARAAQAKgBALADQALADAHAFIAGADQADAEAAADIgBAKQgCAHgCAEQgCAGgEAAIgIgCIgMgFQgHgCgHAAQgJAAgEADQgFADgCAFIgBAIQAAAJAFAGQAFAFAGAEIAQAJQAOAHAIAJQAJAHAEALQAFALAAAQQAAAQgHAOQgHAPgPAJQgOAIgWABQgKAAgKgEg");
	this.shape_8.setTransform(126.625,23.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6BSQgUgbAAg3QAAg2AUgaQATgaAnAAQAoAAATAaQAUAaAAA2QAAA3gUAbQgTAagoAAQgnAAgTgagAgXgzQgHAQAAAjQAAAkAHARQAIAPAPAAQARAAAHgPQAHgRAAgkQAAgjgHgQQgHgQgRAAQgPAAgIAQg");
	this.shape_9.setTransform(111.575,23.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEBpQgSAAAAgJIAAihIgiAAQgJAAAAgPIAAgJQAAgPAJAAIBxAAQAJAAAAAPIAAAJQAAAPgJAAIgiAAIAAChQAAAJgSAAg");
	this.shape_10.setTransform(96.225,23.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAuBpQgGAAgFgBQgEgCgBgEIgHgjIgtAAIgGAjQgBAEgFACQgFABgFAAIgRAAQgHAAgCgCQgDgBAAgDIAAgDIABgFIAri4QABgHAFgCQAFgCAIgBIAVAAQAIABAFACQAEACACAHIArC4IABAFIAAADQAAADgCABQgDACgHAAgAgBgwIgDAMIgMA+IAgAAIgMg+IgCgMIgCgLIAAAAIgBALg");
	this.shape_11.setTransform(82.3,23.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEBpQgSAAAAgJIAAihIgiAAQgJAAAAgPIAAgJQAAgPAJAAIBxAAQAJAAAAAPIAAAJQAAAPgJAAIgiAAIAAChQAAAJgSAAg");
	this.shape_12.setTransform(68.375,23.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZBoQgLgCgIgEIgKgGQgFgEAAgFIABgJQABgGADgFQADgGAEAAQADAAAGADIAPAGQAIADAJAAQAHAAAHgEQAHgEAAgNQAAgJgEgFQgEgFgHgFIgNgIQgOgIgJgIQgKgIgFgKQgFgMAAgQQAAgTAIgNQAIgOAPgHQAOgHARAAQAKgBALADQALADAHAFIAGADQADAEAAADIgBAKQgCAHgCAEQgCAGgEAAIgIgCIgMgFQgHgCgHAAQgJAAgEADQgFADgCAFIgBAIQAAAJAFAGQAFAFAGAEIAQAJQAOAHAIAJQAJAHAEALQAFALAAAQQAAAQgHAOQgHAPgPAJQgOAIgWABQgKAAgKgEg");
	this.shape_13.setTransform(55.575,23.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag6BSQgUgbAAg3QAAg2AUgaQATgaAnAAQAoAAATAaQAUAaAAA2QAAA3gUAbQgTAagoAAQgnAAgTgagAgXgzQgHAQAAAjQAAAkAHARQAIAPAPAAQARAAAHgPQAHgRAAgkQAAgjgHgQQgHgQgRAAQgPAAgIAQg");
	this.shape_14.setTransform(40.525,23.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAmBpQgIAAgEgBQgFgCgBgFIgOg4QgCgIgEgDQgDgDgJAAIgHAAIAABFQAAAJgSAAIgKAAQgTAAABgJIAAi8QgBgMAMAAIA0AAQAfAAAQAQQAQAQAAAiQABAOgGALQgFAKgHAFQgHAFgJABIAAABQAHACAFAGQAFAGACAIIASA8IACAHQgBAEgEACQgDABgKAAgAgTgMIARAAQAKAAAFgGQADgGAAgOQAAgOgDgHQgFgGgKAAIgRAAg");
	this.shape_15.setTransform(24.9,23.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtBpQgSAAAAgJIAAi8QAAgMALAAIA0AAQAgAAAQAQQAQARAAAhQAAAggQAQQgQARggAAIgRAAIAABFQAAAJgSAAgAgRgMIARAAQALAAAEgGQAEgGAAgOQAAgOgEgHQgEgGgLAAIgRAAg");
	this.shape_16.setTransform(9.95,23.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262.6,43.6);


(lib.patikima = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BSQgUgbAAg3QAAg2AUgaQATgaAnAAQAoAAATAaQAUAaAAA2QAAA3gUAbQgTAagoAAQgnAAgTgagAgXgzQgHAQAAAjQAAAkAHARQAIAPAPAAQARAAAHgPQAHgRAAgkQAAgjgHgQQgHgQgRAAQgPAAgIAQg");
	this.shape.setTransform(318.125,23.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BaQgUgRAAgeIAAiLQAAgKASAAIALAAQARAAABAKIAACHQAAANAHAIQAIAHAMAAQANAAAIgHQAHgIAAgNIAAiHQABgKARAAIALAAQASAAAAAKIAACLQAAAegUARQgUARgjAAQgiAAgUgRg");
	this.shape_1.setTransform(300.55,23.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtBpQgJAAgGgCQgEgCgDgFIguhfIgDgHIgEgJIgBAAIABAJIAAAKIAABcQABAKgTgBIgGAAQgTABABgKIAAi/QgBgKATAAIAKAAQAKAAAEACQAGADACAFIAuBdIAEAHIACAKIACAAIgBgKIgBgKIAAhaQABgKARAAIAHAAQASAAABAKIAAC/QgBAKgSgBg");
	this.shape_2.setTransform(282.9,23.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuBpQgHAAgEgBQgFgCAAgEIgHgjIgtAAIgHAjQgBAEgEACQgEABgHAAIgQAAQgGAAgEgCQgDgBAAgDIAAgDIABgFIAsi4QABgHAFgCQAFgCAHgBIAWAAQAJABAEACQAFACACAHIAqC4IACAFIAAADQgBADgDABQgDACgGAAgAgBgwIgDAMIgMA+IAgAAIgMg+IgCgMIgCgLIAAAAIgBALg");
	this.shape_3.setTransform(262.6,23.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BpQgLAAABgMIAAi5QgBgMALAAIAwAAQAgAAAPAQQAOAQAAAZQAAAPgIAMQgIAMgMAEIAAABQAPAEAKANQAJAOAAATQAAA6hDAAgAgRBBIANAAQALAAAFgFQAFgGAAgNQAAgNgFgGQgFgGgLAAIgNAAgAgRgUIANAAQAJAAAEgFQAFgGAAgMQAAgMgFgEQgEgFgJgBIgNAAg");
	this.shape_4.setTransform(248.9,23.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBpQgLAAAAgMIAAi7QAAgKASAAIALAAQASAAAAAKIAACgIArAAQAJAAAAAPIAAAJQAAAPgJAAg");
	this.shape_5.setTransform(235.925,23.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBpQgHAAgEgBQgFgCAAgEIgHgjIgtAAIgHAjQgBAEgEACQgEABgHAAIgQAAQgGAAgEgCQgDgBAAgDIAAgDIABgFIAsi4QABgHAFgCQAFgCAHgBIAWAAQAJABAEACQAFACACAHIAqC4IACAFIAAADQgBADgDABQgDACgGAAgAgCgwIgCAMIgMA+IAgAAIgMg+IgCgMIgCgLIAAAAIgCALg");
	this.shape_6.setTransform(222.1,23.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBRQgUgaAAg3QAAg1AVgbQAVgbAsABIASABQAIABAEABQAFACACACQACADAAAFIgBAMQgBAGgDAFQgCAFgEAAIgKgCQgHgBgJAAQgUAAgKAQQgKAPAAAjQAAAZAEAPQAEAPAIAHQAHAGAPAAIAIgBIAAguIgQAAQgIAAAAgQIAAgHQAAgPAIAAIAyAAQALAAAAAMIAABZQAAAHgJAFQgKAFgMADQgNAEgPAAQgpAAgTgbg");
	this.shape_7.setTransform(206.975,23.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAuBpQgGAAgFgBQgEgCgBgEIgHgjIgtAAIgGAjQgCAEgEACQgFABgFAAIgRAAQgGAAgDgCQgDgBAAgDIAAgDIABgFIAqi4QACgHAFgCQAFgCAIgBIAVAAQAIABAFACQAEACACAHIArC4IABAFIAAADQAAADgCABQgDACgHAAgAgBgwIgDAMIgMA+IAgAAIgMg+IgCgMIgBgLIgBAAIgBALg");
	this.shape_8.setTransform(191.55,23.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBpQgSAAAAgJIAAi8QAAgMALAAIA0AAQAgAAAQAQQAQARAAAhQAAAggQAQQgQARggAAIgQAAIAABFQAAAJgSAAgAgQgMIAQAAQAKAAAFgGQAEgGAAgOQAAgOgEgHQgFgGgKAAIgQAAg");
	this.shape_9.setTransform(177.4,23.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuBpQgGAAgFgBQgFgCAAgEIgHgjIgtAAIgHAjQAAAEgFACQgEABgGAAIgRAAQgGAAgDgCQgEgBAAgDIAAgDIABgFIAri4QACgHAFgCQAFgCAHgBIAWAAQAIABAFACQAEACACAHIAsC4IABAFIAAADQAAADgDABQgEACgGAAgAgCgwIgCAMIgLA+IAfAAIgMg+IgCgMIgBgLIgBAAIgCALg");
	this.shape_10.setTransform(158.05,23.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA8BpQgRABgBgKIAAhZIAAgHIACgIIgCAAIgCAGIgEAGIgQAnQgDAHgOAAIgFAAQgPAAgDgHIgQgnIgCgGIgDgGIgCAAIACAIIAAAHIAABZQAAAKgSgBIgHAAQgTABABgKIAAi/QgBgKATAAIAJAAQALAAAEACQAEACACAFIAfBDIADAMIACAJIACgJIAFgMIAdhDQACgFAFgCQAEgCAMAAIAJAAQARAAABAKIAAC/QgBAKgRgBg");
	this.shape_11.setTransform(140.65,23.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgEBpQgSABAAgKIAAi/QAAgKASAAIAJAAQASAAAAAKIAAC/QAAAKgSgBg");
	this.shape_12.setTransform(126.775,23.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlBpQgGAAgEgBQgEgCgDgFIgnhSIgBAAIAABRQAAAKgSgBIgLAAQgSABAAgKIAAi/QAAgKASAAIALAAQASAAAAAKIAABRIABAAIAohSQADgFAEgCQADgBAJgBIAIAAQALAAAEACQAEACAAAEIgBADIgBADIguBbIAuBcIACAGIAAACQAAAEgDAAIgLABg");
	this.shape_13.setTransform(116.5,23.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBpQgSABAAgKIAAi/QAAgKASAAIAJAAQASAAAAAKIAAC/QAAAKgSgBg");
	this.shape_14.setTransform(104.425,23.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEBpQgSAAAAgJIAAihIgiAAQgJAAAAgPIAAgJQAAgPAJAAIBxAAQAJAAAAAPIAAAJQAAAPgJAAIgiAAIAAChQAAAJgSAAg");
	this.shape_15.setTransform(94.025,23.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAuBpQgGAAgFgBQgEgCgBgEIgHgjIgtAAIgHAjQgBAEgEACQgEABgHAAIgQAAQgGAAgDgCQgEgBAAgDIAAgDIABgFIAri4QACgHAFgCQAFgCAHgBIAWAAQAIABAFACQAFACACAHIArC4IABAFIAAADQAAADgEABQgDACgGAAgAgCgwIgCAMIgLA+IAfAAIgMg+IgCgMIgBgLIgBAAIgCALg");
	this.shape_16.setTransform(80.1,23.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtBpQgSAAAAgJIAAi8QAAgMALAAIA0AAQAgAAAQAQQAQARAAAhQAAAggQAQQgQARggAAIgRAAIAABFQABAJgTAAgAgRgMIARAAQALAAAEgGQAEgGAAgOQAAgOgEgHQgEgGgLAAIgRAAg");
	this.shape_17.setTransform(65.95,23.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,385,43.6);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,167,57);


(lib.klinikiniais = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgOAxQgGgBgEgEQgDgCAAgDIABgFIADgEIADgCIADACIAGADQADABAFAAQAGAAADgDQADgDAAgFQAAgGgEgEIgLgIQgIgEgGgFQgFgHAAgLQAAgNAIgHQAIgIAMAAIAKABIAIADQAEACAAADIgCAEIgCAFIgDACIgEgBQgEgDgFAAQgFAAgDADQgDADAAAEQAAAHAEADIAJAHQAKAEAFAGQAGAHAAAMQAAANgJAIQgIAIgMAAQgHAAgGgCg");
	this.shape.setTransform(135.675,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgBBDQgEAAgCgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhZQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAGgBIACAAIAHABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAABZQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABgFAAgAgGgtQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBQACgBAEAAQAGAAABABQABABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBABIgHABIgGgBg");
	this.shape_1.setTransform(130.15,15.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgbArQgIgIAAgOQAAgNAHgHQAGgHALgDQALgDAOgBIAAgHQAAgGgDgEQgEgEgHAAQgHAAgGACIgJACIgFACQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgCgEIAAgFQAAgCAFgCQAEgDAIgCQAHgCAHAAQARAAAIAIQAJAIAAAOIAAAoIABASIABAGQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAABQgDABgDAAIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCgIQgFAEgGAEQgFAEgIAAQgMAAgHgIgAgIAFQgHAEAAAMQAAAGADAEQADAEAGAAQAFAAAEgDQAFgCADgGIAAgXQgPgBgHAFg");
	this.shape_2.setTransform(123.375,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAuAzQgEAAgCgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhBQAAgHgDgDQgDgEgGAAQgFAAgEAEQgEADgCAEIAAACIAABCQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgCACgFAAIgCAAQgEAAgCgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhBQAAgHgDgDQgDgEgFAAQgEAAgEACIgFAFIgDAEIAABEQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgCACgFAAIgCAAQgFAAgCgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhAIgBgSIgBgIQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAIAGgCIAFAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAABIADAKQAEgHAGgDQAGgFAIAAQAHAAAFAEQAHADACAIQAEgGAHgEQAGgFAIAAQAKABAHAFQAHAHAAANIAABGQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgCACgFAAg");
	this.shape_3.setTransform(112.175,17.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAABDQgFAAgCgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhZQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAHgBIABAAIAHABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAABZQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABgFAAgAgGgtQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBQACgBAEAAQAFAAADABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgIABIgGgBg");
	this.shape_4.setTransform(103.25,15.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgNAzQgIgBAAgEIAAhAIgBgSIgBgIQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAGgCIAGAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAABIADAKQADgGAGgEQAHgFAFAAQABAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAEIAAAGIgCAFQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgEgBIgFgBQgFAAgDADQgDACgCAFIAABDQAAAEgIABg");
	this.shape_5.setTransform(98.875,17.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgKBGQgIgBAAgDIAAgDIALggIgbheIgBgCQABgDAHgBIAFAAIAFABIACADIAPBGIABAAIAQhGQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIAGgBIADAAQAHABAAADIAAABIAAABIgjCBQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAABIgGABg");
	this.shape_6.setTransform(91.5,19.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgBA8QgEgCgEgFQgDgGAAgJIAAg7IgHAAQgEAAAAgHIAAgDQAAgGAEgBIAHAAIACgTQABgEAHAAIACAAIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABABAAIAAATIALAAQAEABABAGIAAADQgBAHgEAAIgLAAIAAA5QAAAFABADQACACADAAIAEAAIADgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAIABAFIAAAEQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgGADIgHABQgGAAgEgDg");
	this.shape_7.setTransform(84.85,15.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgOAxQgGgBgEgEQgDgCAAgDIABgFIADgEIADgCIADACIAGADQADABAFAAQAGAAADgDQADgDAAgFQAAgGgEgEIgLgIQgIgEgGgFQgFgHAAgLQAAgNAIgHQAIgIAMAAIAKABIAIADQAEACAAADIgCAEIgCAFIgDACIgEgBQgEgDgFAAQgFAAgDADQgDADAAAEQAAAHAEADIAJAHQAKAEAFAGQAGAHAAAMQAAANgJAIQgIAIgMAAQgHAAgGgCg");
	this.shape_8.setTransform(76.225,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AAABDQgFAAgCgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhZQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIAHgBIABAAIAHABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAABZQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABgFAAgAgHgtQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBAFAAQAGAAACABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgIABIgHgBg");
	this.shape_9.setTransform(70.7,15.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgbArQgIgIAAgOQAAgNAHgHQAGgHALgDQALgDAOgBIAAgHQAAgGgDgEQgEgEgHAAQgHAAgGACIgJACIgFACQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgCgEIAAgFQAAgCAFgCQAEgDAIgCQAHgCAHAAQARAAAIAIQAJAIAAAOIAAAoIABASIABAGQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgDABgDAAIgFAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBIgCgIQgFAEgGAEQgFAEgIAAQgMAAgHgIgAgIAFQgHAEAAAMQAAAGADAEQADAEAGAAQAFAAAEgDQAFgCADgGIAAgXQgPgBgHAFg");
	this.shape_10.setTransform(63.925,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgBBDQgEAAgCgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhZQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAGgBIACAAIAHABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAABZQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABgFAAgAgGgtQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBQABgBAFAAQAFAAACABQABABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBABIgHABIgGgBg");
	this.shape_11.setTransform(57.5,15.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AAYAzQgEAAgCgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhBQAAgHgDgDQgDgEgHAAQgDAAgEACIgFAFIgEAEIAABEQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgCACgFAAIgDAAQgEAAgCgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAhAIgBgSIgBgIQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAHgCIAFAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABABIACAKQAFgHAGgDQAGgFAIAAQAKABAHAFQAHAHAAANIAABGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgDACgEAAg");
	this.shape_12.setTransform(50.625,17.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAABDQgFAAgCgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhZQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAHgBIABAAIAHABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAABZQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABgFAAgAgGgtQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBQACgBAEAAQAGAAACABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgIABIgGgBg");
	this.shape_13.setTransform(43.95,15.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAWBIQgFAAgCgBQgCgBgBgDIgZgqIgBAAIAAAqQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgCACgEAAIgDAAQgEAAgCgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAiFQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAABgBIAGgBIADAAIAGABQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAABQIABAAIAaglIADgEIAIAAIADAAQAIAAgBADIgBAEIgcAnIAcAuIABADQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgHABg");
	this.shape_14.setTransform(38.05,14.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AAABDQgFAAgCgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhZQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBIAHgBIABAAIAHABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAABZQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABgFAAgAgGgtQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABgBQACgBAEAAQAFAAADABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgIABIgGgBg");
	this.shape_15.setTransform(31.25,15.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAYAzQgEAAgCgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhBQAAgHgDgDQgDgEgHAAQgDAAgEACIgFAFIgEAEIAABEQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgCACgFAAIgDAAQgEAAgCgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAhAIgBgSIgBgIQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAHgCIAFAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAABIACAKQAFgHAGgDQAGgFAIAAQAKABAHAFQAHAHAAANIAABGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgDACgEAAg");
	this.shape_16.setTransform(24.375,17.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgBBDQgEAAgCgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhZQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAGgBIACAAIAHABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAABZQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABgFAAgAgHgtQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBAFAAQAFAAACABQABABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBABIgHABIgHgBg");
	this.shape_17.setTransform(17.7,15.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgGBGQgFgCgDgGQgEgFAAgJIAAhyQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBABAAIAGgBIADAAIAGABQAAAAAAABQAAAAABAAQAAABAAABQAAAAAAABIAABvQAAAGACADQABACADAAIAGgBIABAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAIABAFIABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAIgGACIgGABQgFAAgFgCg");
	this.shape_18.setTransform(13.5,14.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AAWBIQgFAAgCgBQgCgBgBgDIgZgqIgBAAIAAAqQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQgCACgFAAIgDAAQgEAAgCgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAiFQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBIAGgBIADAAIAHABQAAABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAABQIABAAIAaglIADgEIAHAAIAFAAQAGAAAAADIgCAEIgcAnIAcAuIACADQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgHABg");
	this.shape_19.setTransform(6.75,14.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.1,29.1);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkCApIAAhSIIFAAIAABSg");
	mask.setTransform(25.925,4.15);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABsARIgWgaIAAAUIABADIADACIABAAIAAABIgMAAIAAgBIAEgCIABgDIAAgXIgBgBIgCgBIgCgBIAAgBIAMAAIAQAUIAAgNIgBgEQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgBIALAAIAAABIgDABIgBABIAAAEIAAAagAgXARIgWgaIAAAUIABADIADACIABAAIAAABIgMAAIAAgBIAEgCIABgDIAAgXIAAgBIgCgBIgDgBIAAgBIAMAAIAQAUIAAgNIAAgEQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAgBIAKAAIAAABIgCABIgBABIgBAEIAAAagABzARIAAgBIABAAIADgBIABgBIAAgbIgCgBIgCgBIgBAAIAAgBIARAAIAAABIgBAAIgCABIgBABIAAAbIABABIACABIABAAIAAABgAA8ARIAAgBIABAAIACgBIABgBIABgDIAAgVIgBgDIgBgBIgCgBIgBAAIAAgBIARAAIAAABIgBAAIgCABIgBABIgBADIAAAVIABADIABABIACABIABAAIAAABgAAxARIgLgQIgCAAIAAAKIABADIABABIADABIAAABIgRAAIAAgBIADgBIABgBIAAgbIgBgBIgDgBIAAgBIAPAAIAJABQADABABACQACADAAACQAAAEgCADIgFABIAKAOIACABIAAABgAAkAAIACAAIAFAAIACgCIABgFQAAgDgCgCQgBgBgEgBIgDAAgAACARIAAgBIABAAIACgBIABgBIAAgBIgBgCIgCgEIgKAAIgCAEIAAACIABACIADABIAAABIgLAAIAAgBQABAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAQABAAACgFIALgZIAMAaQABAEACAAIACACIAAABgAgGAFIAIAAIgDgKgAhUARIAAgBIABAAIACgBIABgBIAAgDIAAgYIgBgBIgCgBIgBAAIAAgBIAbAAIAAAKIgBAAIgCgFIgDgCIgJgBIAAAOIABAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIACgGIABAAIAAARIgBAAIgBgGIgCgCIgEAAIAAAMIABABIAEAAQAFAAADgCQADgCABgEIABAAIgCALgAhoARIAAgBIACAAIACgBIABgBIAAgDIAAgYIgMAeIgBAAIgNgeIAAAaQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABAAIADABIAAABIgLAAIAAgBIAAAAIACgBIABgBIABgCIAAgZIgBgBIgCgBIgBAAIAAgBIANAAIAJAVIAJgVIAOAAIAAABIgBAAIgDABIgBABIAAAbIABABIADABIABAAIAAABg");
	this.shape.setTransform(31.275,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42868A").s().p("AAHAOQgEgEABgHQABgIAFgGQAGgGAIAAQAGAAAEAEQAEADgBAGIgIAAQAAgGgFAAQgFAAgDAFQgDADgBAFQAAAEACACQABACAEAAQAFAAACgGIAJAAQgCAGgEADQgFAEgHAAQgGAAgEgEgACsARIAKghIAYAAIgCAHIgPAAIgCAGIAOAAIgCAGIgOAAIgCAHIAQAAIgCAHgACaARIAKghIAJAAIgKAhgACKARIAIgYIgPAYIgIAAIABgYIgIAYIgIAAIAKghIAMAAIAAAXIAOgXIAMAAIgKAhgABKARIAKghIAYAAIgCAHIgPAAIgCAGIAOAAIgCAGIgOAAIgCAHIAQAAIgCAHgAA4ARIAEgOIgMAAIgEAOIgJAAIAKghIAJAAIgEAMIAMAAIAEgMIAJAAIgKAhgAgmARIgHgVIgGAVIgJAAIAKghIAJAAIAHAVIAGgVIAJAAIgKAhgAhKARIAKghIAJAAIgKAhgAhoARIAKghIAJAAIgIAaIARAAIgCAHgAh2ARQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgGQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgEgBIgEAAIgEANIgJAAIAKghIANAAQAGAAAEADQADACAAAFQAAAGgIACQADABAAAEIgBAGQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAAABgAh9gBIAGAAQAHAAAAgFQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAgBIgEAAIgFAAgAiqARIAKghIAZAAIgCAHIgQAAIgCAGIAPAAIgCAGIgPAAIgCAHIARAAIgCAHgAjDgQIAOAAQALAAgBAJQAAAGgHABQAFABgBAFQAAAFgEADIgFACIgWABgAjDAKIAEAAIAGgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBABAAQAAgEgEAAIgGAAgAi/gDIAEAAIAGgBIACgDQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIgGAAgAgRAIIACgHIAPAAIgCAHg");
	this.shape_1.setTransform(31.225,1.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A18").s().p("AgZAUIAAgnIABACIAYAiIAZgiIABgCIAAAngAABATIAYAAIAAgigAgYATIAYAAIgYgig");
	this.shape_2.setTransform(4.125,6.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB303A").s().p("AgZATIAAgkIAZAjIAagjIAAAkg");
	this.shape_3.setTransform(4.1,6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCAAIAAAAIAFAAIAAAAg");
	this.shape_4.setTransform(4.125,0.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCABIAAgBIAFAAIAAABg");
	this.shape_5.setTransform(4.125,0.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCADIAAgBIAFAAIAAABgAgCgBIAAgBIAFAAIAAABg");
	this.shape_6.setTransform(4.125,0.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgCADIAAgBIADgCIgDAAIAAgCIAFAAIAAACIgDACIADAAIAAABg");
	this.shape_7.setTransform(4.125,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCAAIAAAAIAFAAIAAAAg");
	this.shape_8.setTransform(4.125,1.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCABIAAgBIAFAAIAAABg");
	this.shape_9.setTransform(4.125,1.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIgBAAIAAAAIABAAIAAAAIAAAAIACAAIAAAAIgCAAIAAABIAAAAg");
	this.shape_10.setTransform(4.175,1.6625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCADIAAgDIABgBIAAAAIABgBIAAABIAAAAIABAAIABAAIABgBIAAACIgCAAIAAAAIAAABIACAAIAAACgAgBAAIAAABIABAAIAAgBIAAAAg");
	this.shape_11.setTransform(4.125,1.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCABIAAgBIAFgCIAAABIgBABIAAABIABAAIAAACgAgBAAIACABIAAgBg");
	this.shape_12.setTransform(4.125,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCADIAAgCIADgCIgDAAIAAgBIAFAAIAAABIgDACIADAAIAAACg");
	this.shape_13.setTransform(4.125,3.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAAIAAAAIAFAAIAAAAg");
	this.shape_14.setTransform(4.125,3.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCACIAAgDIABAAIAAACIABAAIAAgCIAAAAIAAACIACAAIAAgCIABAAIAAADg");
	this.shape_15.setTransform(4.125,3.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCABIAEgBIgEgBIAAAAIABAAIAEABIAAAAIgEABIgBABg");
	this.shape_16.setTransform(4.125,4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCADIAAgCIAEgBIgEAAIAAgCIAFAAIAAABIgEAAIAEABIAAAAIgEABIAEAAIAAACg");
	this.shape_17.setTransform(4.125,4.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(1.5,0,50.4,8.3), null);


(lib.efektyvumas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgOAxQgGgBgEgEQgDgCAAgDIABgFIADgEIADgCIADACIAGADQADABAFAAQAGAAADgDQADgDAAgFQAAgGgEgEIgLgIQgIgEgGgFQgFgHAAgLQAAgNAIgHQAIgIAMAAIAKABIAIADQAEACAAADIgCAEIgCAFIgDACIgEgBQgEgDgFAAQgFAAgDADQgDADAAAEQAAAHAEADIAJAHQAKAEAFAGQAGAHAAAMQAAANgJAIQgIAIgMAAQgHAAgGgCg");
	this.shape.setTransform(196.925,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgbArQgIgIAAgOQAAgNAHgHQAGgHALgDQALgDAOgBIAAgHQAAgGgDgEQgEgEgHAAQgHAAgGACIgJACIgFACQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgCgEIAAgFQAAgCAFgCQAEgDAIgCQAHgCAHAAQARAAAIAIQAJAIAAAOIAAAoIABASIABAGQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAABQgDABgDAAIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCgIQgFAEgGAEQgFAEgIAAQgMAAgHgIgAgIAFQgHAEAAAMQAAAGADAEQADAEAGAAQAFAAAEgDQAFgCADgGIAAgXQgPgBgHAFg");
	this.shape_1.setTransform(188.975,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAAA8QgFgCgEgFQgDgGAAgJIAAg7IgHAAQgEAAAAgHIAAgDQAAgGAEgBIAHAAIACgTQABgEAHAAIACAAIAFABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIAAATIALAAQAFABAAAGIAAADQAAAHgFAAIgLAAIAAA5QgBAFACADQACACADAAIAEAAIADgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAIABAFIAAAEQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgGADIgHABQgGAAgDgDg");
	this.shape_2.setTransform(181.95,15.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAYAzQgEAAgCgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhBQAAgHgDgDQgDgEgHAAQgDAAgEACIgFAFIgEAEIAABEQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgCACgFAAIgDAAQgEAAgCgCQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAhAIgBgSIgBgIQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAHgCIAFAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAABIACAKQAFgHAGgDQAGgFAIAAQAKABAHAFQAHAHAAANIAABGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgDACgEAAg");
	this.shape_3.setTransform(174.575,17.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAABDQgFAAgCgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhZQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIAHgBIABAAIAHABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAABZQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABgFAAgAgHgtQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBAFAAQAGAAACABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgIABIgHgBg");
	this.shape_4.setTransform(167.9,15.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAAA8QgFgCgEgFQgDgGAAgJIAAg7IgHAAQgEAAAAgHIAAgDQAAgGAEgBIAHAAIADgTQAAgEAHAAIACAAIAFABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIAAATIALAAQAFABAAAGIAAADQAAAHgFAAIgLAAIAAA5QgBAFACADQACACADAAIAEAAIADgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAIABAFIAAAEQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBAAIgFADIgHABQgGAAgDgDg");
	this.shape_5.setTransform(162.95,15.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgNAzQgIgBAAgEIAAhAIgBgSIgBgIQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAIAGgCIAGAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAABIADAKQADgGAGgEQAHgFAFAAQABAAABABQABAAAAAAQABAAAAAAQABABAAAAQABABAAAEIAAAGIgCAFQAAABAAAAQgBABAAAAQAAAAgBAAQAAABAAAAIgEgBIgFgBQgFAAgDADQgDACgCAFIAABDQAAAEgIABg");
	this.shape_6.setTransform(158.075,17.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAABDQgFAAgCgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhZQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIAHgBIABAAIAHABQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAABZQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgCABgFAAgAgHgtQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQACgBAFAAQAGAAACABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAMQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgIABIgHgBg");
	this.shape_7.setTransform(152.5,15.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgDAyIgFgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgXhZIgBgDQAAgDAIAAIAFAAIAFAAIACADIAPBNIABAAIAPhNIADgDIAFAAIAEAAQAIAAAAADIAAABIgBACIgXBZQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgFABg");
	this.shape_8.setTransform(146.375,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AAAA8QgGgCgDgFQgDgGAAgJIAAg7IgHAAQgEAAAAgHIAAgDQAAgGAEgBIAHAAIADgTQAAgEAGAAIADAAIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAATIAMAAQAFABgBAGIAAADQABAHgFAAIgMAAIAAA5QAAAFACADQABACAEAAIAFAAIACgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIABAFIABAEQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBAAIgGADIgGABQgFAAgEgDg");
	this.shape_9.setTransform(139.7,15.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgbArQgIgIAAgOQAAgNAHgHQAGgHALgDQALgDAOgBIAAgHQAAgGgDgEQgEgEgHAAQgHAAgGACIgJACIgFACQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgCgEIAAgFQAAgCAFgCQAEgDAIgCQAHgCAHAAQARAAAIAIQAJAIAAAOIAAAoIABASIABAGQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgDABgDAAIgFAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBIgCgIQgFAEgGAEQgFAEgIAAQgMAAgHgIgAgIAFQgHAEAAAMQAAAGADAEQADAEAGAAQAFAAAEgDQAFgCADgGIAAgXQgPgBgHAFg");
	this.shape_10.setTransform(132.425,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgZBGQgIAAAAgFIAAhnIgBgSIgBgHQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAHgCIAFAAQABABAAAAQABAAAAAAQABAAAAABQABAAAAABIACAJQAJgNAMAAQAOAAAIANQAIAPAAAWQAAAYgIAOQgJANgOAAQgFAAgFgDQgFgDgEgEIAAArQAAAFgIAAgAgOgqIAAAxQAHAIAHAAQAQAAAAgiQAAgigPAAQgIAAgHALg");
	this.shape_11.setTransform(123.775,19);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgOAxQgGgBgEgEQgDgCAAgDIABgFIADgEIADgCIADACIAGADQADABAFAAQAGAAADgDQADgDAAgFQAAgGgEgEIgLgIQgIgEgGgFQgFgHAAgLQAAgNAIgHQAIgIAMAAIAKABIAIADQAEACAAADIgCAEIgCAFIgDACIgEgBQgEgDgFAAQgFAAgDADQgDADAAAEQAAAHAEADIAJAHQAKAEAFAGQAGAHAAAMQAAANgJAIQgIAIgMAAQgHAAgGgCg");
	this.shape_12.setTransform(113.225,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgbArQgIgIAAgOQAAgNAHgHQAGgHALgDQALgDAOgBIAAgHQAAgGgDgEQgEgEgHAAQgHAAgGACIgJACIgFACQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBIgCgEIAAgFQAAgCAFgCQAEgDAIgCQAHgCAHAAQARAAAIAIQAJAIAAAOIAAAoIABASIABAGQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAABQgDABgDAAIgFAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCgIQgFAEgGAEQgFAEgIAAQgMAAgHgIgAgIAFQgHAEAAAMQAAAGADAEQADAEAGAAQAFAAAEgDQAFgCADgGIAAgXQgPgBgHAFg");
	this.shape_13.setTransform(105.275,17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAuAzQgEAAgCgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhBQAAgHgDgDQgDgEgGAAQgFAAgEAEQgEADgCAEIAAACIAABCQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgCACgFAAIgCAAQgEAAgCgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhBQAAgHgDgDQgDgEgFAAQgEAAgEACIgFAFIgDAEIAABEQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgCACgFAAIgCAAQgFAAgCgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAIAAhAIgBgSIgBgIQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAIAGgCIAFAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAABIADAKQAEgHAGgDQAGgFAIAAQAHAAAFAEQAHADACAIQAEgGAHgEQAGgFAIAAQAKABAHAFQAHAHAAANIAABGQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgCACgFAAg");
	this.shape_14.setTransform(94.075,17.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgcAsQgGgHAAgMIAAhGQAAgFAIAAIADAAQAJAAAAAFIAABCQAAAHADACQACAEAGAAQAEAAAFgEQAEgDADgEIAAhEQAAgFAJAAIADAAQAJAAAAAFIAABAIAAARIABAIQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgGABIgGABQgCAAgCgDIgCgKQgFAGgGAEQgGAFgHAAQgMgBgHgGg");
	this.shape_15.setTransform(82.75,17.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgDAyIgFgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgXhZIgBgDQAAgDAIAAIAFAAIAFAAIACADIAPBNIABAAIAPhNIADgDIAFAAIAEAAQAIAAAAADIAAABIgBACIgXBZQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIgFABg");
	this.shape_16.setTransform(74.175,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgKBGQgIgBAAgDIAAgDIALggIgbheIgBgCQABgDAHgBIAFAAIAFABIACADIAPBGIABAAIAPhGQABgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIAGgBIADAAQAHABAAADIAAABIAAABIgjCBQAAAAAAABQAAAAAAABQAAAAAAAAQgBAAAAABIgGABg");
	this.shape_17.setTransform(66.3,19.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgBA8QgEgCgEgFQgDgGAAgJIAAg7IgHAAQgEAAAAgHIAAgDQAAgGAEgBIAHAAIACgTQABgEAHAAIACAAIAFABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAATIAMAAQAEABABAGIAAADQgBAHgEAAIgMAAIAAA5QABAFABADQACACADAAIAEAAIADgBQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAIABAFIAAAEQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgGADIgHABQgGAAgEgDg");
	this.shape_18.setTransform(59.65,15.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AAWBIQgFAAgBgBQgCgBgCgDIgZgqIgBAAIAAAqQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQgCACgEAAIgDAAQgFAAgBgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAiFQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAABgBIAGgBIADAAIAGABQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAABQIABAAIAaglIADgEIAIAAIADAAQAIAAAAADIgCAEIgcAnIAcAuIABADQAAABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgHABg");
	this.shape_19.setTransform(53.25,14.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgjABQAAgaAKgNQAKgMARAAQASAAAIANQAIANAAAYQAAAIgHgBIgrAAQAAAPAFAHQAFAFAJAAQAGAAAGgBIAHgDIAFgCQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIACAEIAAAFQABACgFACQgEAEgHACQgHACgHAAQgnAAAAgygAgKgcQgEAHAAAPIAfAAQAAgcgPAAQgIAAgEAGg");
	this.shape_20.setTransform(44.3,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgEBIQgEAAgCgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhNIgHAAQgEAAAAgHIAAgDQAAgHAEAAIAHAAIAAgUQAAgJADgFQADgGAFgCQAFgCAFAAIAGABIAGACQABAAABAAQAAABAAAAQABAAAAABQAAAAAAABIgBAEIgBAFQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAIgFgBQgEAAgBACQgCACAAAGIAAASIAMAAQAEAAAAAHIAAADQAAAHgEAAIgMAAIAABNQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgBABgEAAg");
	this.shape_21.setTransform(37.45,14.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgaBCQgFAAAAgGIAAh3QAAgGAFgBIA2AAQAEAAABAHIAAAEQgBAHgEAAIgnAAIAAAnIAjAAQAEAAAAAGIAAAEQAAAGgEAAIgjAAIAAAqIAnAAQAEAAABAHIAAADQgBAIgEgBg");
	this.shape_22.setTransform(31.3,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227,29.1);


(lib.Dumai2Animated = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.smoke3_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,76);


(lib.Dumai1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.smoke1_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,82);


(lib.daugiau = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcA0QgKgJAAgRIAAhRQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQACgBAEAAIADAAQAEAAACABQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABRQAAAJAFAFQAGAFAIAAQAJAAAGgFQAFgFAAgJIAAhRQAAgEAIAAIADAAQAEAAACABQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAIAABRQAAARgKAJQgKAIgTAAQgSAAgKgIg");
	this.shape.setTransform(59.075,14.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAeA8IgFgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgGgZIghAAIgGAZQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgEABIgFAAQgGAAAAgEIAAgCIAdhtQABgEAHAAIAHAAQAGAAACAEIAdBtIAAABIAAABQAAAEgGAAgAAAggIgCAFIgKArIAZAAIgLgrIgBgFIgBgGIAAAAIAAAGg");
	this.shape_1.setTransform(49.475,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAA8IgGgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAhtQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQABgCAFAAIABAAQAFAAABACQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAABtQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgGABg");
	this.shape_2.setTransform(42.725,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAuQgLgPABgfQAAgeALgPQAMgPAWAAIAKABIAIACQAEABABAEIgCAHQAAAAgBABQAAABAAAAQgBABAAAAQgBAAgBAAIgGgBIgLgBQgNAAgHAKQgHALAAAXQAAAYAHALQAGAKANAAIAGgBIAFAAIAAgjIgOAAQgEAAAAgGIAAgDQAAgFAEgBIAbAAQAFAAAAAGIAAAvIgBAEIgDADQgFADgHACIgPACQgVAAgLgPg");
	this.shape_3.setTransform(35.6,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcA0QgKgJAAgRIAAhRQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQACgBAEAAIADAAQAEAAACABQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAIAABRQAAAJAFAFQAGAFAIAAQAJAAAGgFQAFgFAAgJIAAhRQAAgEAIAAIADAAQAEAAACABQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABRQAAARgKAJQgKAIgTAAQgSAAgKgIg");
	this.shape_4.setTransform(25.725,14.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeA8IgFgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIgGgZIghAAIgGAZQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgEABIgFAAQgGAAAAgEIAAgCIAdhtQABgEAHAAIAHAAQAGAAACAEIAdBtIAAABIAAABQAAAEgGAAgAAAggIgCAFIgKArIAZAAIgLgrIgBgFIgBgGIAAAAIAAAGg");
	this.shape_5.setTransform(16.125,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfA8QgGAAAAgGIAAhrQAAgGAGAAIAbAAQAVAAAKAPQALAOAAAeQAAAegLAPQgKAPgVAAgAgTAsIAPAAQALAAAHgKQAFgMABgWQgBgWgFgLQgHgKgLAAIgPAAg");
	this.shape_6.setTransform(7.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.daugiau, new cjs.Rectangle(0,0,66.6,26.5), null);


(lib.cta_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF2F33").s().p("ApSCrQhHAAgygyQgygyAAhHQAAhGAygyQAygyBHAAISlAAQBHAAAyAyQAyAyAABGQAABHgyAyQgyAyhHAAg");
	this.shape.setTransform(76.575,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_BG, new cjs.Rectangle(0,0,153.2,34.2), null);


(lib.BG_white = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3E1CB").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.BG_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3E1CB").s().p("A/8R0MAAAgjnMA/5AAAMAAAAjng");
	this.shape.setTransform(204.5,114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,409,228);


(lib.text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// klinikiniais
	this.instance = new lib.klinikiniais("synched",0);
	this.instance.setTransform(113.5,36.7,1.2693,1.2693,0,0,0,70.5,14.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regY:14.5,scaleX:1,scaleY:1,y:36.55,alpha:1},15,cjs.Ease.backOut).wait(54));

	// efektyvumas
	this.instance_1 = new lib.efektyvumas("synched",0);
	this.instance_1.setTransform(113.55,14.55,1.2379,1.2379,0,0,0,113.5,14.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:113.5,y:14.5,alpha:1},15,cjs.Ease.backOut).wait(57));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-3.4,280.9,58.4);


(lib.Text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// prostatosProblemu
	this.instance = new lib.prostatosProblemu("synched",0);
	this.instance.setTransform(192.55,88.35,1,1,0,0,0,131.3,21.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({y:58.35,alpha:1},14,cjs.Ease.cubicInOut).wait(54).to({startPosition:0},0).to({scaleX:1.0838,scaleY:1.0838,x:192.6,y:58.4},6,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,x:192.55,y:58.35},11,cjs.Ease.bounceOut).wait(69).to({startPosition:0},0).to({scaleX:1.0838,scaleY:1.0838,x:192.6,y:58.4},6,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,x:192.55,y:58.35},11,cjs.Ease.bounceOut).wait(54).to({startPosition:0},0).to({_off:true},1).wait(11));

	// patikima
	this.instance_1 = new lib.patikima("synched",0);
	this.instance_1.setTransform(192.5,51.8,1,1,0,0,0,192.5,21.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:21.8,alpha:1},14,cjs.Ease.cubicInOut).wait(54).to({startPosition:0},0).to({regY:21.7,scaleX:1.0883,scaleY:1.0883,x:192.55,y:21.7},6,cjs.Ease.cubicInOut).to({regY:21.8,scaleX:1,scaleY:1,x:192.5,y:21.8},11,cjs.Ease.bounceOut).wait(69).to({startPosition:0},0).to({regY:21.7,scaleX:1.0883,scaleY:1.0883,x:192.55,y:21.7},6,cjs.Ease.cubicInOut).to({regY:21.8,scaleX:1,scaleY:1,x:192.5,y:21.8},11,cjs.Ease.bounceOut).wait(57).to({startPosition:0},0).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-1.9,418.9,112);


(lib.Prostamol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_82 = new cjs.Graphics().p("ArsEYIgIr0IQWhqIHUCpIAAL/IxXDlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(82).to({graphics:mask_graphics_82,x:115.4,y:58.0375}).wait(48).to({graphics:null,x:0,y:0}).wait(110));

	// Layer_3
	this.instance = new lib.Shine();
	this.instance.setTransform(-91.95,51.05,1,1,29.9992,0,0,86,260.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({_off:false},0).to({x:276.05,y:125.05},47,cjs.Ease.cubicInOut).to({_off:true},1).wait(110));

	// Layer_1
	this.instance_1 = new lib.pakuote_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:true},1).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,191.2,141.2);


(lib.Dumai2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Dumai2Animated("synched",0);
	this.instance.setTransform(78.9,66,1,1,0,0,0,78.9,66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88,76);


(lib.disclaimer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(3.4,73,0.8848,0.8848,-90,0,0,25.8,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A18").s().p("AgogbIBRAAIgpA3g");
	this.shape.setTransform(1.7718,92.2,0.8848,0.8848,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoApIAAhRIBRAAIAABRg");
	this.shape_1.setTransform(2.9442,92.2,0.8848,0.8848,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAHIAAgFIACAAIgBgDIgBgDIAAgBIAAgBIAFAAIAAACQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQAAAAAAAAQABAAAAABQABAAABAAQAAAAAAAAIANAAIAAAGg");
	this.shape_2.setTransform(5.1,-21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGALQgCgCgCgDQgCgDAAgDQAAgDACgDIAEgEQADgBACAAIACAAIABAAIAAARIAEgDQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgEIgCgDIAEgDIADAEIABAGQAAADgCADIgEAFQgDABgEAAQgDAAgDgBgAgEgEIgCACIgBACQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAIAEADIAAgLIgDABg");
	this.shape_3.setTransform(5.1,-18.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLALIAAgGIACAAIgCgDIgBgDIACgFQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAFgBIAPAAIAAAGIgOAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIgCACIACADQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAOAAIAAAGg");
	this.shape_4.setTransform(5.075,-15.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLALIAAgGIACAAIgCgDIgBgDIACgFQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAFgBIAPAAIAAAGIgOAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIgCACIACADQAAABABAAQAAAAAAAAQABABAAAAQABAAAAAAIAOAAIAAAGg");
	this.shape_5.setTransform(5.075,-12.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAJQgBgDAAgEIAAgGIAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgBADIABACIADAEIgFAEQgDgDAAgDQgCgCAAgDQAAgDACgCQABgDACgBIAGgBIAOAAIAAAGIgDAAIADAEIAAACIgBAGIgDACIgDABQgDAAgDgCgAADABIABACIACABIABgBIABgCIgBgDQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_6.setTransform(5.1,-9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSANIAAgGIAPAAIgCgEIgBgDQAAgEACgCQACgDACgBQACgCAEAAQAEAAADACIAEAEQACACAAAEIgBADIgDAEIAEAAIAAAGgAADgFIgDADIAAACIAAADIADADIADABIAEgBIADgDIAAgDIgBgCIgCgDIgEAAIgDAAg");
	this.shape_7.setTransform(4.5,-6.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCALIAAgVIAFAAIAAAVg");
	this.shape_8.setTransform(6.925,-3.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAIAKIAAgHIgPAAIAAAHIgFAAIAAgNIAUAAIAAgGIAGAAIAAATg");
	this.shape_9.setTransform(5,-0.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAIIATgIIgTgIIAAgHIAhAPIAAABIghAPg");
	this.shape_10.setTransform(4.725,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgCALIAAgVIAFAAIAAAVg");
	this.shape_11.setTransform(6.925,5.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAIANIgXgKIAAgFIAUAHIAAgHIgIAAIAAgGIAIAAIAAgFIAGAAIAAAFIAFAAIAAAGIgFAAIAAAPg");
	this.shape_12.setTransform(5.3,8.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAMAMIgHgKIgEgEQgBAAAAAAQAAgBAAAAQAAAAgBAAQgBAAAAAAIgDABIgCACIACADIADACIABAAIABgBIAAAHIgBAAIgCAAIgFgBIgDgEQgCgDAAgDQAAgCACgDQABgCACgCQACgBADAAQADAAACACIAFAFIABABIAAgJIAGAAIAAAXg");
	this.shape_13.setTransform(4.975,11.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGAMIgFgEQgCgEAAgEQAAgDACgDQACgDADgDQADgCADAAQAEAAAEACQADADABADQACADAAADQAAAEgCAEQgBACgDACQgEACgEAAQgDAAgDgCgAgDgGIgDADIgBADIABAEIADADIADABIAEgBIADgDIABgEIgBgDIgDgDIgEgBIgDABg");
	this.shape_14.setTransform(5,14.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAMAMIgHgKIgEgEQgBAAAAAAQAAgBAAAAQAAAAgBAAQgBAAAAAAIgDABIgCACIACADIADACIABAAIABgBIAAAHIgBAAIgCAAIgFgBIgDgEQgCgDAAgDQAAgCACgDQABgCACgCQACgBADAAQADAAACACIAFAFIABABIAAgJIAGAAIAAAXg");
	this.shape_15.setTransform(4.975,18.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCALIAAgVIAFAAIAAAVg");
	this.shape_16.setTransform(6.925,20.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAIANIgXgKIAAgFIAUAHIAAgHIgIAAIAAgGIAIAAIAAgFIAGAAIAAAFIAFAAIAAAGIgFAAIAAAPg");
	this.shape_17.setTransform(5.3,23.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAIAKIAAgHIgPAAIAAAHIgFAAIAAgNIAUAAIAAgGIAGAAIAAATg");
	this.shape_18.setTransform(5,26.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgCALIAAgVIAFAAIAAAVg");
	this.shape_19.setTransform(6.925,29.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGALQgCgBgCgDQgCgDAAgEQAAgDACgDQACgDACgBQADgCADAAQAEAAADACQACABACADQACADAAADQAAAEgCADIgEAFQgDABgEAAQgDAAgDgCgAgDgEQgCACgBACQAAABABAAQAAABAAABQAAAAABABQAAAAABABQAAAAAAAAQABABAAAAQABAAABAAQAAAAAAAAQADAAACgBQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgCgCgCQgCgBgDAAQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_20.setTransform(5.1,32.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLAIIAAgHIACAAIgBgBIgBgFIAAgBIAAgBIAFAAIAAACQAAABABABQAAABAAAAQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAQABABABAAQAAAAAAAAIANAAIAAAHg");
	this.shape_21.setTransform(5.1,35.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPAMIAAgMQgBgDACgDQABgCACgBQADgCADAAQAEAAABACIADADQACADAAADIAAAFIAMAAIAAAHgAgIgDQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAFIAJAAIAAgFQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgDgBIgDABg");
	this.shape_22.setTransform(4.7,37.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCALIAAgVIAFAAIAAAVg");
	this.shape_23.setTransform(6.925,40.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgPAOIAAgbIAGAAIAAALIAaAAIAAAFIgaAAIAAALg");
	this.shape_24.setTransform(4.7,43.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPAKIAAgGIAaAAIAAgNIAGAAIAAATg");
	this.shape_25.setTransform(4.7,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-198.9,10.299999999999999,294.8);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ON:9,OFF:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// daugiau
	this.instance = new lib.daugiau();
	this.instance.setTransform(76.8,15.3,1,1,0,0,0,33.3,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:33.4,regY:13.1,scaleX:1.2161,scaleY:1.2161,x:76.9,y:15.1},10,cjs.Ease.cubicInOut).wait(1).to({regX:33.3,regY:13.2,scaleX:1,scaleY:1,x:76.8,y:15.3},9,cjs.Ease.cubicInOut).wait(1));

	// cta_BG
	this.instance_1 = new lib.cta_BG();
	this.instance_1.setTransform(76.5,17.1,1,1,0,0,0,76.5,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:1.1018,scaleY:1.1018,x:76.55,y:17.15},10,cjs.Ease.cubicInOut).wait(1).to({scaleX:1,scaleY:1,x:76.5,y:17.1},9,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-1.7,168.79999999999998,37.800000000000004);


(lib.CAR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Wheel3
	this.instance = new lib.ratas3();
	this.instance.setTransform(116,107.75,1,1,0,0,0,95,50);
	this.instance.alpha = 0.6992;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// Wheel2
	this.instance_1 = new lib.ratas2();
	this.instance_1.setTransform(115.75,106,1,1,0,0,0,95,49);
	this.instance_1.alpha = 0.6992;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// Wheel1
	this.instance_2 = new lib.ratas1();
	this.instance_2.setTransform(113.5,105.5,1,1,0,0,0,93.5,48.5);
	this.instance_2.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(4));

	// Layer_1
	this.instance_3 = new lib.car_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211,157.8);


(lib.BG2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Car
	this.instance = new lib.CAR("synched",0);
	this.instance.setTransform(121.55,329.5,0.9425,0.9425,0,0,0,50.5,107.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:50.6,scaleX:1.1304,scaleY:1.1304,x:121.65},228).to({_off:true},1).wait(11));

	// Dumai3
	this.instance_1 = new lib.Smoke3("synched",0);
	this.instance_1.setTransform(232,192.1,0.8723,0.8723,0,0,0,47,120.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:120,scaleX:1.2334,scaleY:1.2334,x:232.05,y:192},228).to({_off:true},1).wait(11));

	// Dumai2
	this.instance_2 = new lib.Dumai2("synched",0);
	this.instance_2.setTransform(83.5,335.4,0.6418,0.6418,0,0,0,86.5,74.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:74.4,scaleX:1.3263,scaleY:1.3263,x:92.6,y:344.35},228).to({_off:true},1).wait(11));

	// Dumai1
	this.instance_3 = new lib.Dumai1("synched",0);
	this.instance_3.setTransform(137.55,236.7,0.64,0.64,0,0,0,72.6,81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:72.7,scaleX:1.295,scaleY:1.295,x:142.8,y:252.65},228).to({_off:true},1).wait(11));

	// BG
	this.instance_4 = new lib.bg_300x600jpgcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(228).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,0,374.4,600);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,203];
	// timeline functions:
	this.frame_0 = function() {
		//Mouse interactions  
		  
		canvas.addEventListener("mouseover", over.bind(this));
		canvas.addEventListener("mouseout", out.bind(this)); 
		
		function over(){  
			this.CTA.gotoAndPlay("ON");
		};
		
		function out(){  
			this.CTA.gotoAndPlay("OFF");
		};
	}
	this.frame_203 = function() {
		if(!this.alreadyExecuted){
		  this.alreadyExecuted=true;
		  loopNum=1;
		 } 
		 else {
		  loopNum++;
		  if(loopNum>=3){
		   this.stop();
		  }
		 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(203).call(this.frame_203).wait(26));

	// BG
	this.instance = new lib.BG_white("synched",0);
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).to({_off:true},1).wait(214).to({_off:false},0).to({alpha:1},9).wait(1));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.name = "CTA";
	this.CTA.setTransform(149.65,570.1,1.7226,1.7226,0,0,0,76.7,17.2);
	this.CTA.alpha = 0;
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(28).to({_off:false},0).to({regX:76.5,regY:17.1,scaleX:1,scaleY:1,x:149.35,y:569.9,alpha:1},15,cjs.Ease.backOut).wait(34).to({regX:76.6,scaleX:1.1116,scaleY:1.1116,x:149.5},7,cjs.Ease.quadInOut).to({regX:76.5,scaleX:1,scaleY:1,x:149.35},10,cjs.Ease.bounceOut).wait(84).to({regX:76.6,scaleX:1.1116,scaleY:1.1116,x:149.5},7,cjs.Ease.quadInOut).to({regX:76.5,scaleX:1,scaleY:1,x:149.35},10,cjs.Ease.bounceOut).wait(34));

	// logo
	this.instance_1 = new lib.logo("synched",0);
	this.instance_1.setTransform(150.5,52.5,1,1,0,0,0,76.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229));

	// Disclaimer
	this.instance_2 = new lib.disclaimer("synched",0);
	this.instance_2.setTransform(295,317,1,1,0,0,0,4,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229));

	// Text1
	this.instance_3 = new lib.Text1("synched",0,false);
	this.instance_3.setTransform(149.55,129.75,1,1,0,0,0,192.5,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(229));

	// Text2
	this.instance_4 = new lib.text2("synched",0,false);
	this.instance_4.setTransform(150,518.95,1,1,0,0,0,113.5,25.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).wait(209));

	// Product
	this.instance_5 = new lib.Prostamol("synched",0);
	this.instance_5.setTransform(406.5,443.5,1,1,0,0,0,95.5,70.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:135.5,loop:false},23,cjs.Ease.cubicInOut).wait(200));

	// BGYellow
	this.instance_6 = new lib.BG_2("synched",0);
	this.instance_6.setTransform(146.5,724,1,1,0,0,0,204.5,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:524},23,cjs.Ease.cubicInOut).wait(206));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-6.5,-163.7,7.6,188.2).s().p("Egh0AfpMAAAg/RMBDpAAAMAAAA/Rg");
	this.shape.setTransform(142.55,101.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(229));

	// Layer_2
	this.instance_7 = new lib.shadow_300x600();
	this.instance_7.setTransform(-30,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(229));

	// BG
	this.instance_8 = new lib.BG2("synched",0);
	this.instance_8.setTransform(136,300,1,1,0,0,0,175,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:146,startPosition:228},228).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(76.1,199.1,425.9,638.9);
// library properties:
lib.properties = {
	id: '28EBF9ABD067824F81AA935CF6782EB8',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_300x600jpgcopy.jpg", id:"bg_300x600jpgcopy"},
		{src:"images/car_300x600.png", id:"car_300x600"},
		{src:"images/logo_300x600.png", id:"logo_300x600"},
		{src:"images/pakuote_300x600.png", id:"pakuote_300x600"},
		{src:"images/shadow_300x600.png", id:"shadow_300x600"},
		{src:"images/smoke1_300x600.png", id:"smoke1_300x600"},
		{src:"images/smoke2_300x600.png", id:"smoke2_300x600"},
		{src:"images/smoke3_300x600.png", id:"smoke3_300x600"},
		{src:"images/wheels_300x600_1.png", id:"wheels_300x600_1"},
		{src:"images/wheels_300x600_2.png", id:"wheels_300x600_2"},
		{src:"images/wheels_300x600_3.png", id:"wheels_300x600_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['28EBF9ABD067824F81AA935CF6782EB8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;