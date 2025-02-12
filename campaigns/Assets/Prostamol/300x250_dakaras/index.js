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



(lib._300x250075x = function() {
	this.initialize(img._300x250075x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,508,375);


(lib.car_300x25005x = function() {
	this.initialize(img.car_300x25005x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,79);


(lib.logo_300x25005x = function() {
	this.initialize(img.logo_300x25005x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,39);


(lib.product_300x25005x = function() {
	this.initialize(img.product_300x25005x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,87);


(lib.smoke1_300x25005x = function() {
	this.initialize(img.smoke1_300x25005x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,41);


(lib.smoke2_300x25005x = function() {
	this.initialize(img.smoke2_300x25005x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,61);


(lib.smoke3_300x25005x = function() {
	this.initialize(img.smoke3_300x25005x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,40);


(lib.wheels_300x250_105x = function() {
	this.initialize(img.wheels_300x250_105x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,50);


(lib.wheels_300x250_205x = function() {
	this.initialize(img.wheels_300x250_205x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,50);


(lib.wheels_300x250_305x = function() {
	this.initialize(img.wheels_300x250_305x);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,50);// helper functions:

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
	this.instance = new lib.smoke2_300x25005x();
	this.instance.setTransform(87,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87,-101,48,61);


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
	this.instance = new lib.wheels_300x250_305x();
	this.instance.setTransform(126,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126,-183,97,50);


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
	this.instance = new lib.wheels_300x250_205x();
	this.instance.setTransform(126,-183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(126,-183,97,50);


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
	this.instance = new lib.wheels_300x250_105x();
	this.instance.setTransform(128,-182);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(128,-182,97,50);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgCBoQgHgFAAgJQAAgIAGgJQADgFADgEQANAAALgEIABgBIgQgBQgFACgEAEIgDAAQgcAAgQgOQgQgOAAgYIAAhxQAAgIAOAAIAJAAQAPAAAAAIIAABvQAAAKAGAGQAGAGAKAAQALAAAGgGQAGgGAAgKIAAhvQAAgIAPAAIAJAAQAOAAAAAIIAABxQAAAYgQAOQgIAHgKADQgHAFgEAGQgEAHAAAFQAAAHAHAAQAFAAADgCIAGgCQACAAACAFIABAIQAAAEgHAEQgHADgJAAQgMAAgFgGgAAMA6IAQABIgBABQgLAEgNAAQAEgEAFgCg");
	this.shape.setTransform(55.075,67.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyBWQgQAAABgIIAAhIIAAgGIABgHIgBAAIgCAGIgDAFIgOAfQgCAGgMAAIgDAAQgMAAgDgGIgNgfIgCgFIgDgGIgBAAIABAHIAAAGIAABIQAAAIgOAAIgGAAQgPAAAAgIIAAibQAAgIAPAAIAIAAQAIAAAEABQADACACAEIAYA3IAEAJIABAHIACgHIADgJIAZg3QABgEAEgCQAEgBAJAAIAHAAQAPAAAAAIIAACbQAAAIgPAAg");
	this.shape_1.setTransform(39.65,65.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBWQgJAAAAgKIAAiXQAAgKAJAAIBHAAQAHAAAAANIAAAHQAAAMgHAAIgqAAIAAAkIAlAAQAIAAAAAMIAAAHQAAAMgIAAIglAAIAAAoIAqAAQAHAAAAAMIAAAIQAAAMgHAAg");
	this.shape_2.setTransform(26.625,65.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBWQgKAAAAgKIAAiZQAAgIAPAAIAJAAQAOAAAAAIIAACDIAjAAQAIAAAAAMIAAAIQAAAMgIAAg");
	this.shape_3.setTransform(16.775,65.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBWQgKAAAAgKIAAiXQAAgKAKAAIAmAAQAaAAAMANQAMAOAAAUQAAAMgHAKQgGAKgLADIABABQAMACAIAMQAIALAAAPQAAAwg3AAgAgOA2IALAAQAIAAAFgFQAEgFAAgKQAAgLgEgFQgFgFgIAAIgLAAgAgOgQIALAAQAHAAADgFQAEgEAAgKQAAgJgEgEQgDgFgHAAIgLAAg");
	this.shape_4.setTransform(6.3,65.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBCQgPgVAAgtQAAgsAPgVQAQgWAgAAQAhAAAPAWQAQAVAAAsQAAAtgQAVQgPAWghAAQggAAgQgWgAgSgqQgGANAAAdQAAAeAGANQAGANAMAAQAOAAAGgNQAFgNAAgeQAAgdgFgNQgGgNgOAAQgMAAgGANg");
	this.shape_5.setTransform(-7.225,65.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBWQgGAAgEgCQgEgBgBgEIgLgtQgCgIgDgCQgCgCgIAAIgGAAIAAA4QAAAIgOAAIgIAAQgPAAgBgIIAAiZQABgKAJAAIAqAAQAaAAANANQAOAOAAAbQAAALgFAJQgEAIgGAFQgGAEgHAAIAAABQAFADAFAEQADAFADAGIAOAxIABAFQABAEgEACIgLABgAgQgKIAOAAQAJAAADgEQADgGABgLQgBgLgDgGQgDgFgJAAIgOAAg");
	this.shape_6.setTransform(-20,65.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBWQgQAAABgIIAAiZQAAgKAJAAIAqAAQAaAAANAOQAOANAAAbQAAAbgOAMQgNAOgaAAIgOAAIAAA4QAAAIgOAAgAgOgKIAOAAQAIAAAEgEQADgGAAgLQAAgLgDgGQgEgFgIAAIgOAAg");
	this.shape_7.setTransform(-32.2,65.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUBWIgQgGIgIgFQgEgDABgEIAAgIQABgFACgEQADgEAEAAIAHACIALAFQAHACAIAAQAFAAAGgDQAGgDAAgLQgBgHgDgEQgDgEgGgEIgKgHQgMgGgHgHQgIgGgFgJQgEgJABgNQAAgQAGgLQAHgLAMgGQALgGAOAAQAIAAAJACQAJACAGAEIAFAEQACACAAADIgBAJIgDAJQgCAEgDAAIgGgCIgKgEIgLgBQgIAAgDACQgEADgCAEIgBAGQAAAIAEAEIAKAIIANAHQAKAGAHAHQAHAGAEAJQAEAJAAAMQAAAOgGALQgFAMgNAHQgLAIgRAAQgJAAgIgCg");
	this.shape_8.setTransform(63.15,36.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBCQgPgVAAgtQAAgsAPgVQAQgWAgAAQAhAAAPAWQAQAVAAAsQAAAtgQAVQgPAWghAAQggAAgQgWgAgSgqQgGANAAAdQAAAeAGANQAGANAMAAQAOAAAGgNQAFgNAAgeQAAgdgFgNQgGgNgOAAQgMAAgGANg");
	this.shape_9.setTransform(50.875,36.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDBWQgPAAAAgIIAAiDIgbAAQgIAAAAgMIAAgHQAAgNAIAAIBbAAQAIAAAAANIAAAHQAAAMgIAAIgbAAIAACDQAAAIgPAAg");
	this.shape_10.setTransform(38.325,36.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlBWIgJgBQgDgBAAgEIgGgdIglAAIgFAdQgBAEgDABIgJABIgOAAQgFAAgDgBQgCgCAAgDIAAgCIABgEIAjiWQABgFAFgCQADgCAHAAIARAAQAHAAAEACQADACACAFIAjCWIABAEIAAACQAAADgDACQgCABgFAAgAgBgnIgCAJIgKAzIAaAAIgKgzIgCgJIAAgJIgBAAIgBAJg");
	this.shape_11.setTransform(26.95,36.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDBWQgPAAAAgIIAAiDIgbAAQgIAAAAgMIAAgHQAAgNAIAAIBbAAQAIAAAAANIAAAHQAAAMgIAAIgbAAIAACDQAAAIgPAAg");
	this.shape_12.setTransform(15.575,36.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUBWIgPgGIgJgFQgDgDgBgEIABgIQABgFADgEQACgEADAAIAHACIAMAFQAHACAIAAQAFAAAGgDQAFgDAAgLQAAgHgCgEQgEgEgFgEIgMgHQgKgGgJgHQgHgGgEgJQgEgJgBgNQAAgQAHgLQAHgLALgGQAMgGAOAAQAIAAAJACQAJACAGAEIAEAEQADACAAADIgBAJIgDAJQgCAEgDAAIgGgCIgKgEIgLgBQgIAAgDACQgEADgBAEIgCAGQAAAIAEAEIAKAIIANAHQALAGAGAHQAIAGADAJQADAJAAAMQAAAOgFALQgGAMgMAHQgLAIgSAAQgHAAgJgCg");
	this.shape_13.setTransform(5.05,36.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBCQgPgVAAgtQAAgsAPgVQAQgWAgAAQAhAAAPAWQAQAVAAAsQAAAtgQAVQgPAWghAAQggAAgQgWgAgSgqQgGANAAAdQAAAeAGANQAGANAMAAQAOAAAGgNQAFgNAAgeQAAgdgFgNQgGgNgOAAQgMAAgGANg");
	this.shape_14.setTransform(-7.225,36.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAfBWQgGAAgEgCQgEgBgBgEIgLgtQgCgHgDgCQgCgDgIAAIgGAAIAAA4QAAAIgOAAIgIAAQgPAAgBgIIAAiZQABgKAJAAIAqAAQAaAAANANQAOANAAAcQAAAMgFAIQgEAJgGADQgGAFgHABIAAABQAFACAFAEQADAFADAGIAOAxIABAGQABADgEACIgLABgAgQgJIAOAAQAJAAADgGQADgEABgMQgBgMgDgEQgDgGgJAAIgOAAg");
	this.shape_15.setTransform(-20,36.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkBWQgQAAABgIIAAiZQAAgKAJAAIAqAAQAaAAANANQAOAOAAAbQAAAagOANQgNAOgaAAIgOAAIAAA4QAAAIgOAAgAgOgJIAOAAQAIAAAEgGQADgEAAgMQAAgMgDgEQgEgGgIAAIgOAAg");
	this.shape_16.setTransform(-32.2,36.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.6,16.8,262.6,65.60000000000001);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgwBCQgPgVAAgtQAAgsAPgVQAQgWAgAAQAhAAAPAWQAQAVAAAsQAAAtgQAVQgPAWghAAQggAAgQgWgAgSgqQgGANAAAdQAAAeAGANQAGANAMAAQAOAAAGgNQAFgNAAgeQAAgdgFgNQgGgNgOAAQgMAAgGANg");
	this.shape.setTransform(143.675,43.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgsBJQgQgNAAgZIAAhxQAAgIAOAAIAJAAQAPAAAAAIIAABvQAAAKAGAGQAGAGAKAAQALAAAGgGQAGgGAAgKIAAhvQAAgIAPAAIAJAAQAOAAAAAIIAABxQAAAZgQANQgQAOgdAAQgcAAgQgOg");
	this.shape_1.setTransform(129.275,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBWQgIAAgEgBQgEgCgCgFIgmhNIgCgGIgDgIIgBABIABAIIAAAHIAABLQAAAIgOAAIgGAAQgPAAAAgIIAAibQAAgIAPAAIAIAAQAIAAAEACQAEABACAFIAmBMIACAGIADAIIABgBIgBgIIAAgHIAAhKQAAgIAOAAIAGAAQAPAAAAAIIAACbQAAAIgPAAg");
	this.shape_2.setTransform(114.825,43.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlBWIgJgBQgDgBAAgEIgGgdIglAAIgFAdQgBAEgDABIgKABIgMAAQgGAAgCgBQgDgCAAgDIAAgCIABgEIAjiWQACgFADgCQAFgCAFAAIASAAQAHAAAEACQADACACAFIAjCWIABAEIAAACQAAADgCACQgDABgFAAgAgBgnIgCAJIgJAzIAZAAIgKgzIgCgJIgBgJIAAAAIgBAJg");
	this.shape_3.setTransform(98.25,43.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBWQgJAAAAgKIAAiXQAAgKAJAAIAnAAQAaAAAMANQAMAOAAAUQAAAMgHAKQgHAKgKADIABABQAMACAIAMQAIALAAAPQAAAwg3AAgAgOA2IALAAQAIAAAFgFQAEgFAAgKQAAgLgEgFQgFgFgIAAIgLAAgAgOgQIALAAQAHAAAEgFQADgEAAgKQAAgJgDgEQgEgFgHAAIgLAAg");
	this.shape_4.setTransform(87.05,43.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBWQgKAAAAgKIAAiZQAAgIAPAAIAJAAQAOAAAAAIIAACDIAjAAQAIAAAAAMIAAAIQAAAMgIAAg");
	this.shape_5.setTransform(76.425,43.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmBWIgJgBQgEgBgBgEIgFgdIglAAIgFAdQgBAEgEABIgJABIgMAAQgGAAgCgBQgDgCAAgDIAAgCIABgEIAkiWQABgFADgCQAFgCAFAAIASAAQAHAAAEACQADACACAFIAjCWIABAEIAAACQAAADgCACQgDABgGAAgAgBgnIgCAJIgJAzIAZAAIgKgzIgBgJIgCgJIAAAAIgBAJg");
	this.shape_6.setTransform(65.15,43.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBCQgQgVAAgtQAAgrARgWQARgWAjAAIAQABQAGABAEABQADABADADQABACAAAEIgBAKIgDAJQgCAEgDAAIgIgBQgGgCgIAAQgQAAgIANQgIANAAAcQAAAVADAMQADAMAHAFQAGAGALAAIAIgBIAAgmIgOAAQgGAAAAgMIAAgGQAAgNAGAAIApAAQAJAAAAAKIAABIQAAAHgIADQgHAEgLADQgKADgMAAQghAAgQgWg");
	this.shape_7.setTransform(52.75,43.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBWIgJgBQgEgBgBgEIgFgdIglAAIgFAdQgBAEgEABIgJABIgNAAQgFAAgDgBQgCgCAAgDIAAgCIABgEIAkiWQABgFADgCQAFgCAGAAIARAAQAHAAAEACQAEACABAFIAjCWIABAEIAAACQAAADgDACQgCABgGAAgAgBgnIgCAJIgKAzIAaAAIgKgzIgBgJIgBgJIgBAAIgBAJg");
	this.shape_8.setTransform(40.15,43.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBWQgPAAAAgIIAAiZQAAgKAKAAIAqAAQAaAAANANQANAOAAAbQAAAagNANQgNAOgaAAIgNAAIAAA4QAAAIgPAAgAgNgKIANAAQAIAAAEgEQADgGAAgLQAAgMgDgEQgEgGgIAAIgNAAg");
	this.shape_9.setTransform(28.6,43.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAlBWIgIgBQgEgBAAgEIgGgdIglAAIgFAdQgBAEgDABIgJABIgOAAQgFAAgDgBQgCgCAAgDIAAgCIABgEIAjiWQABgFAFgCQADgCAHAAIARAAQAHAAAEACQAEACABAFIAjCWIABAEIAAACQAAADgDACQgCABgGAAgAgBgnIgCAJIgKAzIAaAAIgKgzIgCgJIAAgJIgBAAIgBAJg");
	this.shape_10.setTransform(103.8,14.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyBWQgQAAABgIIAAhIIAAgGIABgHIgBAAIgCAGIgDAFIgOAfQgCAGgMAAIgDAAQgMAAgDgGIgNgfIgCgFIgDgGIgBAAIABAHIAAAGIAABIQAAAIgOAAIgGAAQgPAAAAgIIAAibQAAgIAPAAIAIAAQAIAAAEABQADACACAEIAYA3IAEAJIABAHIACgHIADgJIAZg3QABgEAEgCQAEgBAJAAIAHAAQAPAAAAAIIAACbQAAAIgPAAg");
	this.shape_11.setTransform(89.6,14.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDBWQgPAAAAgIIAAibQAAgIAPAAIAHAAQAPAAAAAIIAACbQAAAIgPAAg");
	this.shape_12.setTransform(78.25,14.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeBWIgIgBQgDgBgDgFIgfhDIgBAAIAABCQAAAIgPAAIgIAAQgPAAAAgIIAAibQAAgIAPAAIAIAAQAPAAAAAIIAABCIABAAIAghDQACgFAEgBQADgBAHAAIAHAAQAJAAADACQADABAAADIAAACIgBADIgmBKIAmBLIABAFIAAACQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIgJABg");
	this.shape_13.setTransform(69.875,14.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgDBWQgPAAAAgIIAAibQAAgIAPAAIAIAAQAOAAAAAIIAACbQAAAIgOAAg");
	this.shape_14.setTransform(60,14.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDBWQgPAAAAgIIAAiDIgbAAQgIAAAAgMIAAgHQAAgNAIAAIBbAAQAIAAAAANIAAAHQAAAMgIAAIgbAAIAACDQAAAIgPAAg");
	this.shape_15.setTransform(51.525,14.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAmBWIgJgBQgEgBgBgEIgFgdIglAAIgFAdQgBAEgEABIgJABIgNAAQgFAAgDgBQgCgCAAgDIAAgCIABgEIAkiWQABgFADgCQAFgCAGAAIARAAQAHAAAEACQAEACABAFIAjCWIABAEIAAACQAAADgDACQgCABgGAAgAgBgnIgCAJIgKAzIAaAAIgKgzIgBgJIgBgJIgBAAIgBAJg");
	this.shape_16.setTransform(40.15,14.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AglBWQgPAAAAgIIAAiZQAAgKAKAAIAqAAQAaAAANAOQANANAAAbQAAAbgNAMQgNAOgaAAIgNAAIAAA4QAAAIgPAAgAgNgJIANAAQAIgBAEgFQADgEAAgMQAAgLgDgGQgEgFgIAAIgNAAg");
	this.shape_17.setTransform(28.6,14.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.2,-5,384.90000000000003,65.6);


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
	this.instance = new lib.logo_300x25005x();
	this.instance.setTransform(-63,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-15,114,39);


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
	this.instance = new lib.smoke3_300x25005x();
	this.instance.setTransform(241,-281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(241,-281,46,40);


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
	this.instance = new lib.smoke1_300x25005x();
	this.instance.setTransform(199,-223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199,-223,69,41);


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
	this.shape.graphics.f("#F3E1CB").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


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
	this.shape.setTransform(204.5,-113.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-227.9,409,228);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({y:58.35,alpha:1},14,cjs.Ease.cubicInOut).wait(54).to({startPosition:0},0).to({scaleX:1.0838,scaleY:1.0838,x:202.35,y:55.9},6,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,x:192.55,y:58.35},11,cjs.Ease.bounceOut).wait(69).to({startPosition:0},0).to({scaleX:1.0838,scaleY:1.0838,x:202.35,y:55.9},6,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,x:192.55,y:58.35},11,cjs.Ease.bounceOut).wait(54).to({startPosition:0},0).to({_off:true},1).wait(11));

	// patikima
	this.instance_1 = new lib.patikima("synched",0);
	this.instance_1.setTransform(192.5,51.8,1,1,0,0,0,192.5,21.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:21.8,alpha:1},14,cjs.Ease.cubicInOut).wait(54).to({startPosition:0},0).to({regY:21.7,scaleX:1.0883,scaleY:1.0883,x:202.55,y:21.2},6,cjs.Ease.cubicInOut).to({regY:21.8,scaleX:1,scaleY:1,x:192.5,y:21.8},11,cjs.Ease.bounceOut).wait(69).to({startPosition:0},0).to({regY:21.7,scaleX:1.0883,scaleY:1.0883,x:202.55,y:21.2},6,cjs.Ease.cubicInOut).to({regY:21.8,scaleX:1,scaleY:1,x:192.5,y:21.8},11,cjs.Ease.bounceOut).wait(57).to({startPosition:0},0).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,-7.9,418.9,156.8);


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
	var mask_graphics_82 = new cjs.Graphics().p("AoXDJIgGodILthNIFOB5IAAIlIsbClg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(82).to({graphics:mask_graphics_82,x:33.925,y:-169.2}).wait(48).to({graphics:null,x:0,y:0}).wait(110));

	// Layer_3
	this.instance = new lib.Shine();
	this.instance.setTransform(-62.05,-191.95,0.3215,0.3215,29.9989,0,0,85.8,260.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({_off:false},0).to({regX:85.9,regY:261,scaleX:0.3279,scaleY:0.3279,x:113.75,y:-128},47,cjs.Ease.cubicInOut).to({_off:true},1).wait(110));

	// Layer_1
	this.instance_1 = new lib.product_300x25005x();
	this.instance_1.setTransform(-42,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:true},1).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-210.9,130.2,87.9);


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
	this.shape.setTransform(1.7718,92.2001,0.8848,0.8848,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoApIAAhRIBRAAIAABRg");
	this.shape_1.setTransform(2.9442,92.2001,0.8848,0.8848,-90);

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
	this.instance.setTransform(116.85,108.95,1,1,0,0,0,95,50);
	this.instance.alpha = 0.6992;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2));

	// Wheel2
	this.instance_1 = new lib.ratas2();
	this.instance_1.setTransform(116.85,107.35,1,1,0,0,0,95,49);
	this.instance_1.alpha = 0.6992;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},2).wait(2));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AMTgkIAApdIIcAAIAAJdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:132.675,y:-64.15}).wait(2).to({graphics:null,x:0,y:0}).wait(4));

	// Wheel1
	this.instance_2 = new lib.ratas1();
	this.instance_2.setTransform(113.5,105.5,1,1,0,0,0,93.5,48.5);
	this.instance_2.alpha = 0.6992;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(4));

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AkNEuIAApbIIbAAIAAJbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:158.95,y:-103.875}).wait(2).to({graphics:null,x:0,y:0}).wait(4));

	// Wheel1
	this.instance_3 = new lib.ratas1();
	this.instance_3.setTransform(114,106,1,1,0,0,0,93.5,48.5);
	this.instance_3.alpha = 0.6992;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},2).wait(4));

	// Layer_1
	this.instance_4 = new lib.car_300x25005x();
	this.instance_4.setTransform(137,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137,-155,108,81);


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
	this.instance.setTransform(258.05,127.7,1,1,0,0,0,191.8,-100.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0952,scaleY:1.0952,x:260.8,y:127.6},228).to({_off:true},1).wait(11));

	// Dumai3
	this.instance_1 = new lib.Smoke3("synched",0);
	this.instance_1.setTransform(286.95,50.2,0.8723,0.8723,0,0,0,110,-42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:110.1,scaleX:1.2314,scaleY:1.2314,x:287.2,y:50.25},228).to({_off:true},1).wait(11));

	// Dumai2
	this.instance_2 = new lib.Dumai2("synched",0);
	this.instance_2.setTransform(211.5,129.35,0.6418,0.6418,0,0,0,285.9,-246.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.0463,scaleY:1.0463,x:211.45,y:129.4},228).to({_off:true},1).wait(11));

	// Dumai1
	this.instance_3 = new lib.Dumai1("synched",0);
	this.instance_3.setTransform(240.6,67.75,0.64,0.64,0,0,0,233.6,-182.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:233.5,regY:-182.2,scaleX:0.9417,scaleY:0.9417,x:240.7,y:67.85},228).to({_off:true},1).wait(11));

	// BG
	this.instance_4 = new lib._300x250075x();
	this.instance_4.setTransform(17,0,0.6666,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(228).to({_off:true},1).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17,-22.8,338.7,272.8);


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
	this.CTA.setTransform(217.1,225.35,0.8491,0.8491,0,0,0,76.8,17.3);
	this.CTA.alpha = 0;
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(28).to({_off:false},0).to({regX:76.6,regY:17.2,scaleX:0.6839,scaleY:0.6839,x:216.8,y:225.55,alpha:1},15,cjs.Ease.backOut).wait(34).to({regX:76.7,scaleX:0.7701,scaleY:0.7701,x:216.85},7,cjs.Ease.cubicInOut).to({regX:76.6,scaleX:0.6839,scaleY:0.6839,x:216.8},10,cjs.Ease.bounceOut).wait(84).to({regX:76.7,scaleX:0.7701,scaleY:0.7701,x:216.85},7,cjs.Ease.cubicInOut).to({regX:76.6,scaleX:0.6839,scaleY:0.6839,x:216.8},10,cjs.Ease.bounceOut).wait(34));

	// logo
	this.instance_1 = new lib.logo("synched",0);
	this.instance_1.setTransform(150.5,52.5,1,1,0,0,0,76.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229));

	// Disclaimer
	this.instance_2 = new lib.disclaimer("synched",0);
	this.instance_2.setTransform(212.05,243.65,0.4586,0.4586,90,0,0,3.1,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(229));

	// Text1
	this.instance_3 = new lib.Text1("synched",0,false);
	this.instance_3.setTransform(10.9,65,0.8455,0.8455,0,0,0,22.6,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(229));

	// Text2
	this.instance_4 = new lib.text2("synched",0,false);
	this.instance_4.setTransform(216.35,192.45,0.8169,0.8169,0,0,0,113.7,25.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).wait(209));

	// Product
	this.instance_5 = new lib.Prostamol("synched",0);
	this.instance_5.setTransform(-2.1,443.5,1,1,0,0,0,95.5,70.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:135.5,loop:false},23,cjs.Ease.cubicInOut).wait(200));

	// BGYellow
	this.instance_6 = new lib.BG_2("synched",0);
	this.instance_6.setTransform(146.5,604,1,1,0,0,0,204.5,114);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:514.55},23,cjs.Ease.cubicInOut).wait(206));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-104.5,4.4,120,-5.1).s().p("A0LW5MAAAgtxMAoXAAAMAAAAtxg");
	this.shape.setTransform(26.975,136.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(229));

	// BG
	this.instance_7 = new lib.BG2("synched",0);
	this.instance_7.setTransform(136,300,1,1,0,0,0,175,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:139,startPosition:228},228).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(10.4,103.4,348.3,386.70000000000005);
// library properties:
lib.properties = {
	id: '28EBF9ABD067824F81AA935CF6782EB8',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_300x250075x.jpg", id:"_300x250075x"},
		{src:"images/car_300x25005x.png", id:"car_300x25005x"},
		{src:"images/logo_300x25005x.png", id:"logo_300x25005x"},
		{src:"images/product_300x25005x.png", id:"product_300x25005x"},
		{src:"images/smoke1_300x25005x.png", id:"smoke1_300x25005x"},
		{src:"images/smoke2_300x25005x.png", id:"smoke2_300x25005x"},
		{src:"images/smoke3_300x25005x.png", id:"smoke3_300x25005x"},
		{src:"images/wheels_300x250_105x.png", id:"wheels_300x250_105x"},
		{src:"images/wheels_300x250_205x.png", id:"wheels_300x250_205x"},
		{src:"images/wheels_300x250_305x.png", id:"wheels_300x250_305x"}
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