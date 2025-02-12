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



(lib.BG_300x600_2 = function() {
	this.initialize(img.BG_300x600_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.visual_300x600_2 = function() {
	this.initialize(img.visual_300x600_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,514,476);// helper functions:

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


(lib.Visual = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.visual_300x600_2();
	this.instance.setTransform(-38,-91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Visual, new cjs.Rectangle(-38,-91,514,476), null);


(lib.remeliamas = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgDAEQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgEACQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape.setTransform(188.475,12.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAXQgEgEgCgGIAHgDQABAEADACQADACADAAQADAAACgCQACgCABgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgCgDgBIgFgDQgFgCgDgDQgCgEAAgEQAAgGAEgEQAEgDAGAAQAEAAAEACQAEADACAFIgHADQgBgDgCgBQgCgCgDAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAgBABQAAAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIABADIAEAEIAFACQAGADACACQADAEAAAFQAAAGgEAFQgFAEgHAAQgGAAgFgDg");
	this.shape_1.setTransform(184.5,10.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAUQgFgFAAgKIAAgeIAJAAIAAAeQAAAGACAEQADADAFAAQAGAAACgDQADgEAAgGIAAgeIAJAAIAAAeQAAAKgGAFQgFAGgJAAQgIAAgGgGg");
	this.shape_2.setTransform(179.575,10.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_3.setTransform(175.325,8.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAaIAAgfQAAgFgDgEQgCgDgFAAQgFAAgDADQgDAEAAAFIAAAfIgJAAIAAgxIAJAAIAAAFQACgDAEgCQAEgCADABQAIAAAFAEQAEAGAAAJIAAAfg");
	this.shape_4.setTransform(171.15,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_5.setTransform(166.875,8.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAqIgVgZIAAAZIgJAAIAAhTIAJAAIAAAzIAUgRIALAAIgYAUIAZAdg");
	this.shape_6.setTransform(163.45,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAXQgGgEgDgFQgDgGAAgIQAAgHADgGQADgGAGgDQAFgDAHAAQAEAAAFACQAFACADAEIAAgHIAIAAIAAAxIgIAAIAAgHQgDAEgFACQgFACgEAAQgHAAgFgDgAgIgPQgDACgCAEQgCAEAAAFQAAAIAFAFQAEAFAGAAQAIAAAEgFQAFgFAAgIQAAgFgCgEQgCgEgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_7.setTransform(157.1,10.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgDgGIAIgDQABAEADACQADACACAAQAEAAADgCQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBgCgDgBIgEgDQgGgCgCgDQgDgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAEACQAEADACAFIgHADQgBgDgCgBQgCgCgDAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIACADIACAEIAGACQAGADADACQACAEAAAFQAAAGgEAFQgFAEgIAAQgFAAgEgDg");
	this.shape_8.setTransform(149.1,10.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAUQgFgFAAgKIAAgeIAJAAIAAAeQAAAGACAEQADADAFAAQAGAAACgDQADgEAAgGIAAgeIAJAAIAAAeQAAAKgGAFQgFAGgJAAQgIAAgGgGg");
	this.shape_9.setTransform(144.175,10.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_10.setTransform(139.925,8.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALAaIAAgfQAAgFgCgEQgDgDgFAAQgEAAgEADQgDAEAAAFIAAAfIgJAAIAAgxIAJAAIAAAFQACgDADgCQAFgCADABQAIAAAFAEQAEAGAAAJIAAAfg");
	this.shape_11.setTransform(135.75,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_12.setTransform(131.475,8.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAXQgGgEgEgGQgDgFAAgIQAAgHADgGQAEgGAGgDQAGgDAGAAIAIABIAIADIAAAKQgDgDgEgCQgEgCgFAAQgFAAgDADQgEACgCAEQgCAEAAAFQAAAIAFAFQAEAFAHAAQAFAAAEgCQAEgBADgEIAAAKIgHAEQgEABgFAAQgGAAgGgDg");
	this.shape_13.setTransform(127.525,10.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAKAqIgVgZIAAAZIgIAAIAAhTIAIAAIAAAzIAUgRIALAAIgYAUIAYAdg");
	this.shape_14.setTransform(122.7,8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAXQgGgDgDgGQgDgGAAgIQAAgHADgGQADgGAGgDQAFgDAHAAQALAAAGAHQAGAHAAALIAAACIgmAAQAAAIAFAEQAEAEAGAAQAFAAAEgCQAEgCACgFIAHAEQgDAHgGADQgGADgHAAQgHAAgFgDgAAQgEQgBgGgEgEQgEgEgGAAQgFAAgEAEQgEAEgCAGIAeAAIAAAAg");
	this.shape_15.setTransform(116.775,10.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAaIAAgxIAIAAIAAAFIAFgFQADgCADABIADAAIADABIAAAIIgDgBIgEAAQgFAAgCADQgDADAAAGIAAAeg");
	this.shape_16.setTransform(112.15,10.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgNAXQgFgEgEgGQgEgGABgHQgBgHAEgGQAEgGAFgDQAHgDAGAAQAIAAAFADQAGADAEAGQAEAGAAAHQAAAHgEAGQgEAGgGAEQgFADgIAAQgGAAgHgDgAgIgPQgEACgCAEQgCAEAAAFQAAAIAEAFQAFAFAHAAQAFAAAEgCQAEgCACgEQACgFABgFQgBgFgCgEQgCgEgDgCQgEgDgGAAQgEAAgEADg");
	this.shape_17.setTransform(106.75,10.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAJAqIgUgZIAAAZIgIAAIAAhTIAIAAIAAAzIATgRIALAAIgWAUIAXAdg");
	this.shape_18.setTransform(101.4,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAeQgEgEAAgHIAAgbIgHAAIAAgIIAHAAIAAgRIAIAAIAAARIAMAAIAAAIIgMAAIAAAbQAAADACACQACACADAAIADAAIACgBIAAAIIgDABIgEAAQgGAAgDgEg");
	this.shape_19.setTransform(93.95,9.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AALAaIAAgfQAAgFgCgEQgDgDgFAAQgEAAgEADQgEAEAAAFIAAAfIgIAAIAAgxIAIAAIAAAFQADgDADgCQAEgCAEABQAIAAAEAEQAFAGAAAJIAAAfg");
	this.shape_20.setTransform(89.3,10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgNAXQgEgEgEgFQgDgGAAgIQAAgHADgGQADgGAFgDQAGgDAHAAQAFAAAEACQAFACADAEIAAgHIAIAAIAAAxIgIAAIAAgHQgDAEgFACQgEACgFAAQgHAAgGgDgAgHgPQgEACgCAEQgCAEAAAFQAAAIAEAFQAFAFAGAAQAIAAAEgFQAFgFAAgIQAAgFgCgEQgDgEgDgCQgEgDgFAAQgDAAgEADg");
	this.shape_21.setTransform(83,10.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAKAqIgVgZIAAAZIgIAAIAAhTIAIAAIAAAzIAUgRIAKAAIgXAUIAYAdg");
	this.shape_22.setTransform(77.8,8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgMAXQgFgEgEgFQgDgGAAgIQAAgHADgGQADgGAGgDQAFgDAHAAQAFAAAEACQAEACADAEIAAgHIAJAAIAAAxIgJAAIAAgHQgDAEgEACQgEACgFAAQgHAAgFgDgAgIgPQgDACgCAEQgCAEAAAFQAAAIAEAFQAFAFAGAAQAIAAAFgFQAEgFAAgIQAAgFgCgEQgDgEgDgCQgEgDgFAAQgDAAgFADg");
	this.shape_23.setTransform(71.45,10.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKAXQgEgEgCgGIAHgDQABAEADACQADACADAAQADAAACgCQACgCABgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgCgDgBIgFgDQgFgCgDgDQgCgEAAgEQAAgGAEgEQAEgDAGAAQAEAAAEACQAEADACAFIgHADQgBgDgCgBQgCgCgDAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAgBABQAAAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIABADIAEAEIAFACQAGADACACQADAEAAAFQAAAGgEAFQgFAEgHAAQgGAAgFgDg");
	this.shape_24.setTransform(66.15,10.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAnIAbgpIgXAAIAAgIIAmAAIgcApIAcAAIAAAIgAgDgWIgPgQIAJAAIAJAJIAHgJIAJAAIgNAQg");
	this.shape_25.setTransform(61.35,8.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgOAUQgFgFAAgKIAAgeIAJAAIAAAeQAAAGACAEQADADAFAAQAGAAACgDQADgEAAgGIAAgeIAJAAIAAAeQAAAKgGAFQgFAGgJAAQgIAAgGgGg");
	this.shape_26.setTransform(56.125,10.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgDgGIAIgDQABAEADACQADACACAAQAEAAADgCQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBgCgDgBIgEgDQgGgCgCgDQgDgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAEACQAEADACAFIgHADQgBgDgCgBQgCgCgDAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIACADIACAEIAGACQAGADADACQACAEAAAFQAAAGgEAFQgFAEgIAAQgFAAgEgDg");
	this.shape_27.setTransform(48.3,10.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAYAaIAAgfQAAgFgCgEQgCgDgFAAQgFAAgDADQgDAEAAAFIAAAfIgHAAIAAgfQAAgFgDgEQgCgDgEAAQgFAAgDADQgDAEAAAGIAAAeIgJAAIAAgxIAJAAIAAAFQACgDADgCQADgCAEABQAEAAAEABQADACABAFQAFgJALABQAIAAAEAEQAEAFAAAJIAAAgg");
	this.shape_28.setTransform(42.025,10.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAXQgFgEgEgFQgDgGAAgIQAAgHADgGQADgGAGgDQAFgDAHAAQAEAAAFACQAEACADAEIAAgHIAJAAIAAAxIgJAAIAAgHQgDAEgEACQgFACgEAAQgHAAgFgDgAgIgPQgDACgCAEQgCAEAAAFQAAAIAEAFQAFAFAGAAQAIAAAFgFQAEgFAAgIQAAgFgCgEQgDgEgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_29.setTransform(34.45,10.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_30.setTransform(30.025,8.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAqIAAhTIAHAAIAABTg");
	this.shape_31.setTransform(27.425,8.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAXQgGgDgDgGQgDgGAAgIQAAgHADgGQADgGAGgDQAFgDAHAAQALAAAGAHQAGAHAAALIAAACIgmAAQAAAIAFAEQAEAEAGAAQAFAAAEgCQAEgCACgFIAHAEQgDAHgGADQgGADgHAAQgHAAgFgDgAAQgEQgBgGgEgEQgEgEgGAAQgFAAgEAEQgEAEgCAGIAeAAIAAAAg");
	this.shape_32.setTransform(23.125,10.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAYAaIAAgfQAAgFgCgEQgCgDgFAAQgFAAgDADQgDAEAAAFIAAAfIgHAAIAAgfQAAgFgDgEQgCgDgEAAQgFAAgDADQgDAEAAAGIAAAeIgJAAIAAgxIAJAAIAAAFQACgDADgCQADgCAEABQAEAAAEABQADACABAFQAFgJALABQAIAAAEAEQAEAFAAAJIAAAgg");
	this.shape_33.setTransform(15.975,10.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLAjQgGgDgDgGQgDgGAAgIQAAgHADgFQADgHAGgDQAFgDAHAAQALAAAGAHQAGAGAAAMIAAADIgmAAQAAAHAFAEQAEAFAGgBQAFAAAEgCQAEgCACgFIAHAFQgDAGgGADQgGAEgHgBQgHABgFgEgAAQAHQgBgGgEgDQgEgDgGgBQgFABgEADQgEADgCAGIAeAAIAAAAgAgCgbQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_34.setTransform(8.825,8.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMAaIAAgxIAJAAIAAAFIADgFQADgCAEABIADAAIADABIAAAIIgEgBIgDAAQgFAAgCADQgCADAAAGIAAAeg");
	this.shape_35.setTransform(4.2,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.4,17.4);


(lib.pasiulymas = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAAAiQgDgDAAgFIABgGIADgFIgBAAQgIAAgGgGQgFgFAAgJIAAgfIAJAAIAAAfQAAAFACAEQADADAFAAQAGAAACgDQADgEAAgFIAAgfIAJAAIAAAfQAAAFgCADQgCAEgDADIgHAJQgCADAAADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQACACADAAIACgBIACAAIAAAGIgDABIgEABQgFAAgDgDg");
	this.shape.setTransform(242.075,11.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_1.setTransform(237.825,8.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAaIAAgfQAAgFgDgEQgDgDgFAAQgFAAgDADQgEAEAAAFIAAAfIgIAAIAAgxIAIAAIAAAFQADgDADgCQAEgCAEABQAIAAAEAEQAFAGAAAJIAAAfg");
	this.shape_2.setTransform(233.65,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_3.setTransform(229.375,8.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAJAqIgUgZIAAAZIgIAAIAAhTIAIAAIAAAzIAUgRIAKAAIgWAUIAXAdg");
	this.shape_4.setTransform(225.95,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAXQgFgEgEgFQgDgGAAgIQAAgHADgGQADgGAGgDQAFgDAHAAQAFAAAEACQAEACADAEIAAgHIAJAAIAAAxIgJAAIAAgHQgDAEgEACQgEACgFAAQgHAAgFgDgAgHgPQgEACgCAEQgCAEAAAFQAAAIAEAFQAFAFAGAAQAIAAAFgFQAEgFAAgIQAAgFgCgEQgDgEgDgCQgEgDgFAAQgDAAgEADg");
	this.shape_5.setTransform(219.6,10.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNAXQgFgEgDgFQgDgGAAgIQAAgHADgGQADgGAFgDQAGgDAHAAQAEAAAFACQAEACAEAEIAAgHIAIAAIAAAxIgIAAIAAgHQgEAEgEACQgFACgEAAQgHAAgGgDgAgHgPQgEACgCAEQgCAEAAAFQAAAIAFAFQAEAFAGAAQAIAAAEgFQAFgFAAgIQAAgFgCgEQgCgEgEgCQgEgDgFAAQgEAAgDADg");
	this.shape_6.setTransform(210.45,10.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAoQgFgCgDgEIAAAHIgIAAIAAhSIAIAAIAAAoQADgEAFgCQAFgCAEAAQAHAAAGADQAFAEADAEQADAGAAAIQAAAIgDAFQgDAGgFAEQgGADgHAAQgFAAgEgCgAgIAAQgDACgDAEQgCAEAAAGQAAAIAFAFQAEAFAHAAQAHAAAEgFQAFgFAAgIQAAgFgCgFQgCgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_7.setTransform(204.35,8.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAaIAAgxIAIAAIAAAFIAEgFQADgCAEABIADAAIADABIAAAIIgEgBIgDAAQgFAAgBADQgDADgBAGIAAAeg");
	this.shape_8.setTransform(199.3,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNAXQgEgEgEgFQgDgGAAgIQAAgHADgGQADgGAFgDQAGgDAHAAQAFAAAEACQAFACADAEIAAgHIAIAAIAAAxIgIAAIAAgHQgDAEgFACQgEACgFAAQgHAAgGgDgAgHgPQgEACgCAEQgCAEAAAFQAAAIAEAFQAFAFAGAAQAIAAAEgFQAFgFAAgIQAAgFgCgEQgDgEgDgCQgEgDgFAAQgDAAgEADg");
	this.shape_9.setTransform(193.7,10.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA1IA5hqIAKAAIg5Bqg");
	this.shape_10.setTransform(187,8.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMAaIAAgxIAJAAIAAAFIADgFQADgCAEABIADAAIADABIAAAIIgEgBIgDAAQgFAAgCADQgCADAAAGIAAAeg");
	this.shape_11.setTransform(181.7,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_12.setTransform(178.125,8.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAXQgEgEgCgGIAHgDQABAEADACQADACADAAQADAAACgCQACgCABgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgCgDgBIgFgDQgFgCgDgDQgCgEAAgEQAAgGAEgEQAEgDAGAAQAEAAAEACQAEADACAFIgHADQgBgDgCgBQgCgCgDAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAgBABQAAAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIABADIAEAEIAFACQAGADACACQADAEAAAFQAAAGgEAFQgFAEgHAAQgGAAgFgDg");
	this.shape_13.setTransform(171.9,10.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYAaIAAgfQAAgFgCgEQgCgDgFAAQgFAAgDADQgDAEAAAFIAAAfIgHAAIAAgfQAAgFgDgEQgCgDgEAAQgFAAgDADQgDAEAAAGIAAAeIgJAAIAAgxIAJAAIAAAFQACgDADgCQADgCAEABQAEAAAEABQADACABAFQAFgJALABQAIAAAEAEQAEAFAAAJIAAAgg");
	this.shape_14.setTransform(165.625,10.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAXQgEgEgEgFQgDgGAAgIQAAgHADgGQADgGAFgDQAGgDAHAAQAFAAAEACQAEACADAEIAAgHIAJAAIAAAxIgJAAIAAgHQgDAEgEACQgEACgFAAQgHAAgGgDgAgHgPQgEACgCAEQgCAEAAAFQAAAIAEAFQAFAFAGAAQAIAAAFgFQAEgFAAgIQAAgFgCgEQgDgEgDgCQgEgDgFAAQgDAAgEADg");
	this.shape_15.setTransform(158.05,10.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_16.setTransform(153.625,8.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALAaIAAgfQAAgFgCgEQgDgDgFAAQgFAAgDADQgEAEABAFIAAAfIgJAAIAAgxIAJAAIAAAFQACgDADgCQAFgCADABQAIAAAFAEQAEAGAAAJIAAAfg");
	this.shape_17.setTransform(149.45,10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_18.setTransform(145.175,8.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAKAqIgVgZIAAAZIgJAAIAAhTIAJAAIAAAzIATgRIAMAAIgXAUIAYAdg");
	this.shape_19.setTransform(141.75,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNAXQgFgEgDgFQgDgGAAgIQAAgHADgGQADgGAFgDQAGgDAHAAQAEAAAFACQAFACADAEIAAgHIAIAAIAAAxIgIAAIAAgHQgDAEgFACQgFACgEAAQgHAAgGgDgAgHgPQgEACgCAEQgCAEAAAFQAAAIAFAFQAEAFAGAAQAIAAAEgFQAFgFAAgIQAAgFgCgEQgCgEgEgCQgEgDgFAAQgEAAgDADg");
	this.shape_20.setTransform(135.4,10.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgDgGIAIgDQABAEADACQADACACAAQAEAAADgCQACgCAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgCgDgBIgEgDQgGgCgCgDQgDgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAEACQAEADACAFIgHADQgBgDgCgBQgCgCgDAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIACADIACAEIAGACQAGADADACQACAEAAAFQAAAGgFAFQgEAEgIAAQgFAAgEgDg");
	this.shape_21.setTransform(127.4,10.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAjQgGgDgDgGQgDgGAAgIQAAgHADgFQADgHAGgDQAFgDAHAAQALAAAGAHQAGAGAAAMIAAADIgmAAQAAAHAFAEQAEAFAGgBQAFAAAEgCQAEgCACgFIAHAFQgDAGgGADQgGAEgHgBQgHABgFgEgAAQAHQgBgGgEgDQgEgDgGgBQgFABgEADQgEADgCAGIAeAAIAAAAgAgCgbQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_22.setTransform(122.325,8.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgDAqIAAhTIAHAAIAABTg");
	this.shape_23.setTransform(118.025,8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgOAUQgFgFAAgKIAAgeIAJAAIAAAeQAAAGACAEQADADAFAAQAGAAACgDQADgEAAgGIAAgeIAJAAIAAAeQAAAKgGAFQgFAGgJAAQgIAAgGgGg");
	this.shape_24.setTransform(113.875,10.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMAXQgGgEgDgFQgDgGAAgIQAAgHADgGQADgGAGgDQAFgDAHAAQAEAAAFACQAFACADAEIAAgHIAIAAIAAAxIgIAAIAAgHQgDAEgFACQgFACgEAAQgHAAgFgDgAgIgPQgDACgCAEQgCAEAAAFQAAAIAFAFQAEAFAGAAQAIAAAEgFQAFgFAAgIQAAgFgCgEQgCgEgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_25.setTransform(107.6,10.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgDgGIAIgDQABAEADACQADACACAAQAEAAADgCQACgCAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBgCgDgBIgEgDQgGgCgCgDQgDgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAEACQAEADACAFIgHADQgBgDgCgBQgCgCgDAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIACADIACAEIAGACQAGADADACQACAEAAAFQAAAGgEAFQgFAEgIAAQgFAAgEgDg");
	this.shape_26.setTransform(102.3,10.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgMAXQgGgEgDgFQgDgGAAgIQAAgHADgGQADgGAGgDQAFgDAHAAQAEAAAFACQAFACADAEIAAgHIAIAAIAAAxIgIAAIAAgHQgDAEgFACQgFACgEAAQgHAAgFgDgAgIgPQgDACgCAEQgCAEAAAFQAAAIAFAFQAEAFAGAAQAIAAAEgFQAFgFAAgIQAAgFgCgEQgCgEgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_27.setTransform(94.1,10.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGAyIgCgBIAAgIIABAAIACABQABAAAAgBQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg7IAJAAIAAA7QAAAHgEADQgDAEgGAAIgCAAgAAAgmQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAg");
	this.shape_28.setTransform(89.3,10.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAXQgHgEgDgGQgDgGgBgHQABgHADgGQADgGAHgDQAFgDAHAAQAHAAAHADQAFADAEAGQADAGAAAHQAAAHgDAGQgEAGgFAEQgHADgHAAQgHAAgFgDgAgIgPQgEACgDAEQgCAEAAAFQAAAIAGAFQAEAFAHAAQAFAAAEgCQAEgCADgEQACgFAAgFQAAgFgCgEQgDgEgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_29.setTransform(85.2,10.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_30.setTransform(80.625,8.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAqIAAhTIAHAAIAABTg");
	this.shape_31.setTransform(78.025,8.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgNAXQgFgEgDgFQgDgGAAgIQAAgHADgGQADgGAFgDQAGgDAHAAQAEAAAFACQAFACADAEIAAgHIAIAAIAAAxIgIAAIAAgHQgDAEgFACQgFACgEAAQgHAAgGgDgAgIgPQgDACgCAEQgCAEAAAFQAAAIAFAFQAEAFAGAAQAIAAAEgFQAFgFAAgIQAAgFgCgEQgCgEgEgCQgEgDgFAAQgEAAgEADg");
	this.shape_32.setTransform(73.3,10.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAhQgGgFgCgIIAIgCQAAAGAFACQAEADAFAAQAIAAAFgFQADgEAAgJIAAgEQgDAEgEACQgFACgEAAQgHAAgFgDQgGgEgDgFQgDgFAAgIQAAgIADgGQADgGAGgDQAFgDAHAAQAEAAAFACQAEACADAEIAAgHIAJAAIAAAtQAAAIgDAGQgDAGgFAEQgGADgHAAQgIAAgHgEgAgIgaQgDACgCAEQgCAEAAAGQAAAIAEAEQAFAFAGAAQAIAAAFgFQAEgEAAgIQAAgGgCgEQgDgEgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_33.setTransform(66.85,11.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKAXQgEgEgDgGIAIgDQABAEADACQADACACAAQAEAAACgCQACgCABgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgCgDgBIgFgDQgFgCgDgDQgCgEAAgEQAAgGAEgEQAEgDAGAAQAEAAAEACQAEADACAFIgHADQgBgDgCgBQgCgCgDAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAgBABQAAAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIABADIADAEIAGACQAGADACACQADAEAAAFQAAAGgEAFQgFAEgIAAQgFAAgFgDg");
	this.shape_34.setTransform(58.85,10.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMAXQgFgEgEgFQgDgGAAgIQAAgHADgGQADgGAGgDQAFgDAHAAQAEAAAFACQAEACADAEIAAgHIAJAAIAAAxIgJAAIAAgHQgDAEgEACQgFACgEAAQgHAAgFgDgAgIgPQgDACgCAEQgCAEAAAFQAAAIAFAFQAEAFAGAAQAIAAAFgFQAEgFAAgIQAAgFgCgEQgDgEgDgCQgEgDgFAAQgEAAgEADg");
	this.shape_35.setTransform(53.35,10.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAYAaIAAgfQAAgFgCgEQgCgDgFAAQgFAAgDADQgDAEAAAFIAAAfIgHAAIAAgfQAAgFgDgEQgCgDgEAAQgFAAgDADQgDAEAAAGIAAAeIgJAAIAAgxIAJAAIAAAFQACgDADgCQADgCAEABQAEAAAEABQADACABAFQAFgJALABQAIAAAEAEQAEAFAAAJIAAAgg");
	this.shape_36.setTransform(46.125,10.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgPAkIAMgaIgXgtIAKAAIARAjIAQgjIAKAAIghBHg");
	this.shape_37.setTransform(39.225,11.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDAqIAAhTIAHAAIAABTg");
	this.shape_38.setTransform(35.175,8.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgOAgQgFgFAAgKIAAgeIAJAAIAAAeQAAAGACADQADADAFAAQAGAAACgDQADgDAAgGIAAgeIAJAAIAAAeQAAAKgGAFQgFAGgJgBQgIABgGgGgAgOgdIAAgHIAdAAIAAAHg");
	this.shape_39.setTransform(31.025,9.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDAmIAAgxIAIAAIAAAxgAgDgbQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_40.setTransform(26.775,8.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJAXQgFgEgCgGIAHgDQABAEADACQADACADAAQADAAADgCQABgCABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgCgDgBIgEgDQgGgCgCgDQgDgEAAgEQAAgGAEgEQAEgDAFAAQAFAAAEACQAEADACAFIgHADQgBgDgCgBQgCgCgDAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgBAAgBABQAAAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIABADIAEAEIAFACQAGADACACQAEAEAAAFQgBAGgFAFQgEAEgHAAQgGAAgEgDg");
	this.shape_41.setTransform(23.25,10.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNAXQgEgEgEgFQgDgGAAgIQAAgHADgGQADgGAFgDQAGgDAHAAQAFAAAEACQAFACADAEIAAgHIAIAAIAAAxIgIAAIAAgHQgDAEgFACQgEACgFAAQgHAAgGgDgAgHgPQgEACgCAEQgCAEAAAFQAAAIAEAFQAFAFAGAAQAIAAAEgFQAFgFAAgIQAAgFgCgEQgDgEgDgCQgEgDgFAAQgDAAgEADg");
	this.shape_42.setTransform(17.75,10.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYAkIAAhGIAIAAIAAAHQADgFAFgCQAFgBAEAAQAHAAAFADQAFADADAGQAEAGAAAIQAAAHgEAFQgDAGgFADQgFAEgHAAQgEAAgFgDQgFgCgDgDIAAAcgAgIgZQgEACgCAEQgCAEAAAGQAAAIAFAEQAEAFAHAAQAHAAAEgFQAFgEAAgIQAAgGgCgEQgCgEgEgCQgEgDgEAAQgEAAgEADg");
	this.shape_43.setTransform(11.65,11.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAAAGIgKAQIgGgFIALgPIgQgEIADgHIAPAFIAAgRIAHAAIAAARIAQgFIACAHIgQAEIAMAPIgHAFg");
	this.shape_44.setTransform(5.125,6.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.1,17.4);


(lib.Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#020203").s().p("AgPA4QgGgGAAgKQAAgJAGgGQAHgGAIAAQAJAAAHAGQAGAGAAAJQAAAKgGAGQgHAHgJAAQgIgBgHgGgAgPgYQgGgGAAgKQAAgJAGgGQAHgHAIAAQAJAAAHAHQAGAGAAAJQAAAKgGAGQgHAGgJABQgIgBgHgGg");
	this.shape.setTransform(70.95,19.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020203").s().p("AgQBXIAAh6IAhAAIAAB6gAgNg1QgFgGAAgJQAAgHAFgFQAGgFAHgBQAIABAFAFQAGAFAAAHQAAAJgGAFQgFAGgIAAQgHgBgGgEg");
	this.shape_1.setTransform(64.1,17.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#020203").s().p("AglAvQgJgRAAgfQAAgeAJgQQAIgQARAAQAIAAAGAEQAGAFAEAIIAAgPIAjAAIAAB6IgjAAIAAgOQgFAJgGAEQgEAEgIAAQgRAAgJgRgAALAZQADgIAAgRQAAgQgDgIQgDgIgHAAQgFAAgEAIQgDAIAAAQQAAARADAIQAEAIAFAAQAHAAADgIg");
	this.shape_2.setTransform(55.075,19.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#020203").s().p("AgQBXIAAh6IAhAAIAAB6gAgNg1QgFgGAAgJQAAgHAFgFQAGgFAHgBQAIABAFAFQAFAFABAHQgBAJgFAFQgFAGgIAAQgIgBgFgEg");
	this.shape_3.setTransform(46.45,17.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#020203").s().p("AAKA/IAAhLQAAgIgCgEQgCgEgFAAQgEAAgDAEQgDAEAAAIIAABLIgjAAIAAh6IAjAAIAAATQAFgMAGgFQAHgFAKAAQANAAAHAJQAGAJAAASIAABZg");
	this.shape_4.setTransform(37.625,19.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#020203").s().p("AgQBXIAAh6IAhAAIAAB6gAgNg1QgFgGAAgJQAAgHAFgFQAGgFAHgBQAIABAFAFQAFAFABAHQgBAJgFAFQgFAGgIAAQgIgBgFgEg");
	this.shape_5.setTransform(28.8,17.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#020203").s().p("AAMBgIgag8IAAA8IgiAAIAAi/IAiAAIAAB3IAagyIAkAAIgeA1IAfBFg");
	this.shape_6.setTransform(20.65,16.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#020203").s().p("AAbBbIgGgeIgoAAIgHAeIglAAIAti1IAlAAIAtC1gAAPAhIgPhGIgNBGIAcAAg");
	this.shape_7.setTransform(7.625,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("ArqC/IAAgTIWBAAIAAATgABkAfQAAgoALgaQAPgmAjAAQAbAAASAhIAAgfIA1AAIAADMIg1AAIAAgeQgSAigcAAQg8AAAAhqgACcAbQAAA7AZAAQAZAAAAg7QAAg2gbAAQgXAAAAA2gAnBBnQgTgcAAgsQAAgsATgdQAWghAqAAQBSAAAABvIAAAJIhuAAIAAACQAAAwAgAAQASAAAJgYIAxAAQgHAfgVARQgVASgfAAQgqAAgWgigAmdANIA9AAQgCgrgdAAQgeAAAAArgAKsB9QgKgLAAgQQAAgQAKgKQALgLAPAAQAQAAALALQAKAKAAAQQAAAQgKALQgLAKgQAAQgPAAgLgKgAJMCFIAAh8QAAgegTAAQgUAAAAAgIAAB6Ig5AAIAAjMIA1AAIAAAfQAWghAiAAQAcAAAJAVQAGANAAAhIAACLgAGNCFIAAh8QAAgegTAAQgVAAAAAgIAAB6Ig4AAIAAjMIA0AAIAAAfQAWghAjAAQAcAAAJAVQAGANAAAhIAACLgAAMCFIAAh8QAAgegQAAQgVAAAAAgIAAB6Ig3AAIAAh8QAAgfgRAAQgVAAAAAhIAAB6Ig3AAIAAjMIA0AAIAAAfQAWghAgAAQAiAAAHAhQAYghAdAAQAcAAAIAcQAEAOAAAkIAACAgAkQCFIAAlDIA4AAIAAFDgAotCFIAAjMIA5AAIAADMgArSCFIAAkxICEAAIAAA5IhJAAIAAA/IBCAAIAAA4IhCAAIAACBgAoohnQgJgJAAgOQAAgOAJgKQALgJANAAQANAAAKAKQAJAJAAAOQAAAOgJAJQgLAJgMAAQgOAAgKgJg");
	this.shape_8.setTransform(124.5432,17.8678,0.5984,0.5984);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,169.3,33.3), null);


(lib.kainos = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAAAzIgwBPIg5gqIA7hIIhcgaIAXhEIBWAmIgHhZIBHAAIgGBZIBXgmIAXBEIhdAYIA7BKIg6Aqg");
	this.shape.setTransform(244.475,27.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag+DaQgTgFgPgLIAAhSQATAMARAGQARAFAPAAQAagBAOgLQAOgMABgWQAAgPgLgOQgLgPgcgUIgTgNQgigZgRgeQgSgdAAgkQABgkAPgcQAPgbAcgRQAcgPAjAAQAXgBATAHQAUAFANALIAABSQgTgMgRgGQgQgFgQAAQgTAAgMALQgMALAAASQAAAPAJAOQAJAOASANIASAOQAfAVASATQASATAIAWQAIAUAAAZQAAAngRAdQgQAdgeARQgdAQgnAAQgXABgUgHg");
	this.shape_1.setTransform(216.325,38.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhzCmQgog5AAhsQAAhuAog5QAog5BLAAQBMAAAoA5QAoA5AABuQAABsgoA5QgoA5hMABQhLgBgog5gAguhsQgRAmAABHQAABIAQAkQAQAlAfAAQAfAAARglQAPgkAAhIQAAhHgQgmQgQgkgfgBQgeABgQAkg");
	this.shape_2.setTransform(186.1,38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA2DaIhmjtIAADtIhWAAIAAmzIBSAAIBkDpIgBjpIBYAAIAAGzg");
	this.shape_3.setTransform(152.225,38.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqDaIAAmzIBVAAIAAGzg");
	this.shape_4.setTransform(128.575,38.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABADaIgPhJIhgAAIgQBJIhZAAIBtmzIBXAAIBsGzgAAjBNIgjioIghCoIBEAAg");
	this.shape_5.setTransform(106.1,38.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAoDaIhVjbIAADbIhWAAIAAmzIBWAAIAADBIBQjBIBXAAIhWDJIBgDqg");
	this.shape_6.setTransform(78.35,38.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiaDaIDfmzIBKAAIjgGzgAA9DZIBGhvQAPgZAHgPQAGgPABgLQAAgJgFgFQgEgFgHAAQgHAAgEAFQgDAFAAALIAAASIhFAAIAAgSQAAgnAWgUQAVgWAnAAQAnAAAWATQAWATAAAgQABATgJAZQgJAZgTAhIgNAXIAuAAIAAA9gAjBAjIAAi8IghAAIASg/IBaAAIAAD7g");
	this.shape_7.setTransform(25.8,38.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,262.7,77.4);


(lib.BlueBG = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#50636E").s().p("A1oDzIAAnlMArRAAAIAAHlg");
	this.shape.setTransform(138.525,24.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.1,48.6);


(lib.BG = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BG_300x600_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,300,600), null);


(lib.antri = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AiLERICXlfIiEAAIAAhTIEEAAIibFhICOAAIAABRgAghjAIhChQIBIAAIAbAdIAcgdIBIAAIhDBQg");
	this.shape.setTransform(190.775,33.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhgC6QgjgiAAg+IAAk2IBWAAIAAExQAAAeALAOQALAOAXgBQAXABAMgOQALgOAAgeIAAkxIBWAAIAAE2QAAA+gjAiQgiAig/ABQg+gBgigig");
	this.shape_1.setTransform(160.175,39.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqDaIAAmzIBVAAIAAGzg");
	this.shape_2.setTransform(125.225,38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAmDaIhNiyIgEAAIAACyIhWAAIAAmzIBpAAQBDABAjAgQAjAgAAA/QAAAsgRAeQgSAcgiAPIBWC+gAgrghIATAAQAZAAANgOQAMgOAAgdQAAgcgMgOQgNgOgZgBIgTAAg");
	this.shape_3.setTransform(104.55,38.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrDaIAAlhIhHAAIAAhSIDlAAIAABSIhIAAIAAFhg");
	this.shape_4.setTransform(77,38.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA2DaIhmjtIAADtIhWAAIAAmzIBSAAIBkDpIgBjpIBYAAIAAGzg");
	this.shape_5.setTransform(48.925,38.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABADaIgPhJIhgAAIgQBJIhZAAIBtmzIBXAAIBsGzgAAjBNIgjioIghCoIBEAAg");
	this.shape_6.setTransform(17.25,38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,207.4,77.4);


(lib.Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// kainos
	this.instance = new lib.kainos("synched",0);
	this.instance.setTransform(131.3,-51.05,1,1,0,0,0,131.3,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:94.95},17,cjs.Ease.cubicInOut).wait(38).to({startPosition:0},0).to({scaleX:1.1142,scaleY:1.1142,x:131.35},8,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,x:131.3},13,cjs.Ease.bounceOut).wait(17).to({startPosition:0},0).to({scaleX:1.1142,scaleY:1.1142,x:131.35},8,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,x:131.3},13,cjs.Ease.bounceOut).wait(55).to({startPosition:0},0).wait(1).to({regX:130.8,regY:38,x:130.8,y:93.05},0).wait(1).to({y:90.4},0).wait(1).to({y:85.9},0).wait(1).to({y:78.95},0).wait(1).to({y:68.35},0).wait(1).to({y:52.35},0).wait(1).to({y:29.1},0).wait(1).to({y:1.55},0).wait(1).to({y:-21.25},0).wait(1).to({y:-36.5},0).wait(1).to({y:-46.3},0).wait(1).to({y:-52.5},0).wait(1).to({regX:131.3,regY:38.6,x:131.3,y:-55.6},0).to({_off:true},1).wait(107));

	// antri
	this.instance_1 = new lib.antri("synched",0);
	this.instance_1.setTransform(103.7,-107.4,1,1,0,0,0,103.7,38.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:38.6},17,cjs.Ease.cubicInOut).wait(33).to({startPosition:0},0).to({scaleX:1.1254,scaleY:1.1254,x:103.75,y:38.65},8,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,x:103.7,y:38.6},13,cjs.Ease.bounceOut).wait(17).to({startPosition:0},0).to({scaleX:1.1254,scaleY:1.1254,x:103.75,y:38.65},8,cjs.Ease.cubicInOut).to({scaleX:1,scaleY:1,x:103.7,y:38.6},13,cjs.Ease.bounceOut).wait(55).to({startPosition:0},0).to({y:-113.4},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(107));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-152,292.59999999999997,290.1);


(lib.footer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo
	this.instance = new lib.Logo();
	this.instance.setTransform(199.45,25.45,1,1,0,0,0,84.6,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AXcj5IAAHzMgu3AAAIAAnz");
	this.shape.setTransform(150,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3bD6IAAnzMAu3AAAIAAHzg");
	this.shape_1.setTransform(150,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,302,52);


(lib.Disclaimer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Blue_BG (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1oHjIAAnlMArRAAAIAAHlg");
	var mask_graphics_1 = new cjs.Graphics().p("A1oHgIAAnkMArRAAAIAAHkg");
	var mask_graphics_2 = new cjs.Graphics().p("A1oHZIAAnkMArRAAAIAAHkg");
	var mask_graphics_3 = new cjs.Graphics().p("A1oHNIAAnlMArRAAAIAAHlg");
	var mask_graphics_4 = new cjs.Graphics().p("A1oG8IAAnlMArRAAAIAAHlg");
	var mask_graphics_5 = new cjs.Graphics().p("A1oGmIAAnlMArRAAAIAAHlg");
	var mask_graphics_6 = new cjs.Graphics().p("A1oGLIAAnlMArRAAAIAAHlg");
	var mask_graphics_7 = new cjs.Graphics().p("A1oFrIAAnlMArRAAAIAAHlg");
	var mask_graphics_8 = new cjs.Graphics().p("A1oFLIAAnlMArRAAAIAAHlg");
	var mask_graphics_9 = new cjs.Graphics().p("A1oEwIAAnlMArRAAAIAAHlg");
	var mask_graphics_10 = new cjs.Graphics().p("A1oEaIAAnlMArRAAAIAAHlg");
	var mask_graphics_11 = new cjs.Graphics().p("A1oEJIAAnlMArRAAAIAAHlg");
	var mask_graphics_12 = new cjs.Graphics().p("A1oD8IAAnkMArRAAAIAAHkg");
	var mask_graphics_13 = new cjs.Graphics().p("A1oD1IAAnkMArRAAAIAAHkg");
	var mask_graphics_14 = new cjs.Graphics().p("A1oDzIAAnlMArRAAAIAAHlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:138.525,y:48.275}).wait(1).to({graphics:mask_graphics_1,x:138.525,y:48.025}).wait(1).to({graphics:mask_graphics_2,x:138.525,y:47.3}).wait(1).to({graphics:mask_graphics_3,x:138.525,y:46.075}).wait(1).to({graphics:mask_graphics_4,x:138.525,y:44.35}).wait(1).to({graphics:mask_graphics_5,x:138.525,y:42.15}).wait(1).to({graphics:mask_graphics_6,x:138.525,y:39.45}).wait(1).to({graphics:mask_graphics_7,x:138.525,y:36.275}).wait(1).to({graphics:mask_graphics_8,x:138.525,y:33.1}).wait(1).to({graphics:mask_graphics_9,x:138.525,y:30.4}).wait(1).to({graphics:mask_graphics_10,x:138.525,y:28.2}).wait(1).to({graphics:mask_graphics_11,x:138.525,y:26.475}).wait(1).to({graphics:mask_graphics_12,x:138.525,y:25.25}).wait(1).to({graphics:mask_graphics_13,x:138.525,y:24.525}).wait(1).to({graphics:mask_graphics_14,x:138.525,y:24.275}).wait(11));

	// remeliamas
	this.instance = new lib.remeliamas("synched",0);
	this.instance.setTransform(115.2,-11.8,1,1,0,0,0,96.2,8.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({y:30.2},14,cjs.Ease.quadInOut).wait(10));

	// pasiulymas
	this.instance_1 = new lib.pasiulymas("synched",0);
	this.instance_1.setTransform(142.5,-27.15,1,1,0,0,0,123.5,8.7);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:14.85},14,cjs.Ease.quadInOut).wait(8));

	// Blue_BG
	this.instance_2 = new lib.BlueBG("synched",0);
	this.instance_2.setTransform(138.5,72.2,1,1,0,0,0,138.5,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:24.2},14,cjs.Ease.quadInOut).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.1,96.6);


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

	this.actionFrames = [167];
	// timeline functions:
	this.frame_167 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(167).call(this.frame_167).wait(16));

	// Footer
	this.instance = new lib.footer("synched",0,false);
	this.instance.setTransform(150,575,1,1,0,0,0,150,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(183));

	// Blue
	this.instance_1 = new lib.Disclaimer("synched",0,false);
	this.instance_1.setTransform(129.4,527.15,1,1,0,0,0,138.5,24.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(149).to({startPosition:24},0).to({y:577.15},14,cjs.Ease.cubicInOut).wait(1));

	// Visual
	this.instance_2 = new lib.Visual();
	this.instance_2.setTransform(152,808.5,0.9676,0.9676,0,0,0,185,167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:381.5},19,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:382.5},148,cjs.Ease.quadInOut).to({y:810.45},15,cjs.Ease.quadInOut).wait(1));

	// Text
	this.instance_3 = new lib.Text("synched",0,false);
	this.instance_3.setTransform(146.3,79.2,1,1,0,0,0,131.3,66.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(183));

	// BG
	this.instance_4 = new lib.BG();
	this.instance_4.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(183));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79,160.4,364.1,867.6);
// library properties:
lib.properties = {
	id: 'C1C8538364101F4F9E20AD95A23E1557',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG_300x600_2.jpg", id:"BG_300x600_2"},
		{src:"images/visual_300x600_2.png", id:"visual_300x600_2"}
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
an.compositions['C1C8538364101F4F9E20AD95A23E1557'] = {
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