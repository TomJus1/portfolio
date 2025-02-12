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



(lib.Chip = function() {
	this.initialize(img.Chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,39);


(lib.Image1_300x250 = function() {
	this.initialize(img.Image1_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,375);


(lib.Image2_300x250 = function() {
	this.initialize(img.Image2_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,375);


(lib.Image3_300x250 = function() {
	this.initialize(img.Image3_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,375);


(lib.Image4_300x250 = function() {
	this.initialize(img.Image4_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,375);// helper functions:

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


(lib.Travel = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AhRCXIAAksIBRAAIAADbIBSAAIAABRg");
	this.shape.setTransform(125.325,29.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVCXIAAksICrAAIAABPIhZAAIAAAjIBTAAIAABHIhTAAIAAAiIBZAAIAABRg");
	this.shape_1.setTransform(106.575,29.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2CXIg/ksIBVAAIAiDIIAkjIIBQAAIg+Esg");
	this.shape_2.setTransform(84.675,29.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoCXIgIgxIhDAAIgIAxIhRAAIBAksIB6AAIA/EsgAgWAgIAqAAIgUh7g");
	this.shape_3.setTransform(59.35,29.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXCXIAAhLQAAgQgIgJQgJgIgQAAIgMAAIAABsIhSAAIAAksIBfAAQA4gBAdAWQAdAUAAApQAAAagLASQgMASgUAIQAUAHAMARQALARAAAcIAABPgAgWgTIAKAAQAQAAAKgIQAJgJAAgNQAAgOgJgJQgJgHgRgBIgKAAg");
	this.shape_4.setTransform(35,29.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoCXIAAjdIg7AAIAAhPIDHAAIAABPIg7AAIAADdg");
	this.shape_5.setTransform(12.65,29.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.8,55.6);


(lib.theCard = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AiBCXIAAksIBTAAQA8AAAnAUQAoAUATAhQARAhABAoQAAApgTAjQgSAkgoAVQgoAUg7ABgAgvBJIANAAQAlAAAWgTQAWgSAAglQAAghgXgUQgWgTgmAAIgLAAg");
	this.shape.setTransform(164.7,29.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXCXIAAhLQAAgQgIgJQgJgIgPAAIgNAAIAABsIhSAAIAAksIBgAAQA3gBAdAWQAdAUAAApQAAAagLASQgMASgTAIQATAHALARQAMARAAAcIAABPgAgWgTIALAAQAPAAAKgIQAKgJAAgNQAAgOgKgJQgJgHgSgBIgJAAg");
	this.shape_1.setTransform(139.45,29.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApCXIgJgxIhDAAIgIAxIhRAAIBAksIB5AAIBAEsgAgVAgIApAAIgVh7g");
	this.shape_2.setTransform(114.9,29.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggCKQgjgTgWgiQgVgkAAgxQAAgwAVgjQAWgjAjgTQAjgRApgBQARAAASADQASAEAOAGIAABgQgKgNgRgHQgRgJgVABQgXAAgQAJQgQAKgJASQgJARAAAUQAAAVAJASQAJARAQAKQAQAKAXAAQAVAAARgIQARgJAKgNIAABgQgOAHgSADQgSAEgRAAQgpAAgjgSg");
	this.shape_3.setTransform(89.725,29.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhVCXIAAksICrAAIAABPIhZAAIAAAjIBTAAIAABHIhTAAIAAAiIBZAAIAABRg");
	this.shape_4.setTransform(59.925,29.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAqCXIAAhxIhTAAIAABxIhSAAIAAksIBSAAIAABtIBTAAIAAhtIBSAAIAAEsg");
	this.shape_5.setTransform(36.925,29.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoCXIAAjdIg7AAIAAhPIDHAAIAABPIg7AAIAADdg");
	this.shape_6.setTransform(12.65,29.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240.9,55.6);


(lib.spendInThe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZA+QgJgGgFgMQgGgMAAgQQAAgQAFgLQAFgMAKgGQAJgGANAAQAHAAAGADQAHADADAEIAFAIIABAAIAAgyIATAAIABCFIgTAAIAAgPIgBAAIgGAHQgCAEgHADQgGADgHAAQgNAAgKgGgAgOgOQgGAFgDAIQgCAHgBAKQAAAKADAIQAEAIAFAFQAHAEAHAAQAIAAAHgEQAFgFAEgIQACgHAAgLQABgQgIgJQgGgJgNAAQgJAAgFAEg");
	this.shape.setTransform(52.7,13.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXAzIAAg9QAAgLgHgGQgFgGgLAAQgIAAgGAHQgIAGABAMIAAA7IgTAAIgBhkIATAAIAAARIABAAQAEgIAHgFQAHgFAKAAQALAAAHAEQAIAFAEAIQAFAJAAAMIAAA/g");
	this.shape_1.setTransform(41.65,14.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape_2.setTransform(30.675,14.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBGIgBiKIATAAIAAARIACAAIAFgIQADgEAFgDQAGgDAIAAQANAAAKAGQAJAGAGAMQAFAMAAAQQAAAQgFALQgFAMgKAGQgJAGgMAAQgIAAgGgDQgGgDgEgEIgEgHIgCAAIAAA1gAgTgrQgHAKAAAQQAAALAEAGQADAIAGAFQAGAEAHAAQAJAAAGgEQAGgFADgIQACgHAAgKQAAgKgDgIQgDgIgGgFQgGgEgIAAQgNAAgGAJg");
	this.shape_3.setTransform(19.725,16.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiA6QgOgKgBgSIAUAAQABAHAEAFQAEAFAHACQAHACAHAAQAIAAAHgDQAHgCADgFQAEgFAAgHQAAgFgDgEQgEgEgGgDIgNgEIgPgEQgQgFgJgHQgKgJAAgOQAAgMAGgIQAHgJAKgEQALgGAMAAQAOAAALAGQAKAEAGAJQAGAIABALIgUAAQgCgKgHgEQgHgGgMAAQgLABgHAFQgIAFABAJQAAAGADAEQAFAEAFADIALADIAMAEIANAEQAHADAGADQAGAEAEAHQADAHAAAJQAAALgGAJQgFAJgLAFQgLAFgQAAQgWAAgNgLg");
	this.shape_4.setTransform(7.875,13.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,0,204.79999999999998,26.4);


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
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.51,1],-597,0,597.2,0).s().p("EhdTCucMAAAlc3MC6mAAAMAAAFc3g");
	this.shape.setTransform(597.15,1116.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Shine, new cjs.Rectangle(0,0,1194.3,2232.8), null);


(lib.seeOnGoogle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape.setTransform(122.925,-8.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBDIgBiFIASAAIABCFg");
	this.shape_1.setTransform(115.15,-9.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTBEQgIgDgFgFQgHgFgCgHIARgHIAEAHQADADAGACQAEACAIAAQAHAAAGgCQAGgCADgFQADgFABgIIgBgUIgBAAIgFAHQgDAEgGADQgGADgIAAQgMAAgJgGQgKgFgFgMQgGgKgBgQQABgQAFgLQAGgMAJgGQAJgGANAAQAIAAAGADQAGADADAEIAFAIIABAAIAAgRIATAAIACBnQgBAMgFAJQgHAIgKAEQgKAEgMAAQgMAAgJgDgAgOgxQgHAFgCAIQgDAHAAAKQABAPAGAIQAHAJAMAAQANAAAHgIQAHgIgBgQQABgKgEgIQgDgIgGgEQgGgEgIAAQgIAAgGAEg");
	this.shape_2.setTransform(107,-6.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAuQgLgHgGgMQgGgMAAgPQAAgPAFgMQAGgLALgHQAKgGANAAQAOAAALAHQALAGAFAMQAHAMAAAPQAAAQgGALQgGAMgKAGQgJAGgOAAQgOAAgLgGgAgOgdQgGAFgEAIQgCAIAAAJQAAAKADAHQACAIAHAFQAFAFAJAAQAJAAAGgFQAGgFADgIQAEgJgBgJQAAgJgDgIQgDgIgGgFQgGgEgIgBQgJABgGAFg");
	this.shape_3.setTransform(95.95,-8.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAuQgLgHgGgMQgGgMAAgPQAAgPAGgMQAFgLAKgHQAKgGAOAAQAOAAALAHQAKAGAHAMQAFAMABAPQAAAQgGALQgFAMgLAGQgKAGgOAAQgOAAgKgGgAgOgdQgHAFgDAIQgCAIgBAJQAAAKAEAHQACAIAHAFQAGAFAIAAQAJAAAGgFQAHgFACgIQADgJAAgJQAAgJgDgIQgDgIgFgFQgGgEgKgBQgIABgGAFg");
	this.shape_4.setTransform(84.85,-8.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcA9QgOgJgIgPQgHgQAAgVQgBgVAIgPQAHgPAOgJQANgIARAAQAOAAAMAGQAMAFAIAKQAIAKACANIgVAAQgDgMgJgHQgIgGgNgBQgLAAgJAGQgKAGgFALQgFAMAAAPQAAAQAFAMQAFALAJAGQAJAGALAAQALAAAIgFQAIgEAFgIQAFgIAAgLIghAAIAAgQIA0AAIAAAPQAAARgGAMQgHANgNAGQgMAHgRAAQgRAAgOgIg");
	this.shape_5.setTransform(72.3234,-9.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXAzIgBg9QABgLgHgGQgFgGgKAAQgKAAgFAHQgIAGAAAMIABA7IgUAAIAAhkIASAAIABARIABAAQAEgIAGgFQAIgFAKAAQALAAAHAEQAIAFAFAIQAEAJAAAMIAAA/g");
	this.shape_6.setTransform(55,-8.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAuQgKgHgGgMQgGgMAAgPQAAgPAFgMQAGgLAKgHQALgGAOAAQANAAALAHQALAGAFAMQAHAMAAAPQAAAQgGALQgGAMgJAGQgLAGgOAAQgNAAgMgGgAgPgdQgFAFgEAIQgDAIABAJQAAAKACAHQAEAIAFAFQAHAFAIAAQAJAAAGgFQAGgFAEgIQACgJAAgJQAAgJgDgIQgDgIgFgFQgGgEgJgBQgJABgHAFg");
	this.shape_7.setTransform(43.95,-8.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape_8.setTransform(28.025,-8.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape_9.setTransform(17.125,-8.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAtQgKgHgDgOIATgDQACAIAFAEQAFADAJAAQAJAAAGgEQAGgEAAgGQAAgFgDgDQgEgDgHgBIgQgEQgPgDgHgGQgHgIABgKQAAgJAEgHQAFgHAJgDQAIgEALAAQAQAAAKAHQAJAHADAMIgRADQgCgFgFgEQgEgEgJAAQgIAAgFADQgGAEAAAGQAAAFAEADQADADAJACIAPAEQAOADAHAGQAHAHAAAKQAAAKgFAHQgFAGgKAEQgIAEgMAAQgRAAgLgHg");
	this.shape_10.setTransform(6.775,-8.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-23,186.60000000000002,26.4);


(lib.need = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBFIgFgCIAFgQQAIADAFgDQAFgCAEgKIACgGIglhmIAUAAIAaBOIAAAAIAZhOIAWAAIgoByQgFAMgHAGQgIAGgMABIgIgBg");
	this.shape.setTransform(183.525,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBDIgBiFIASAAIABCFg");
	this.shape_1.setTransform(176,13.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBDIgBiFIASAAIABCFg");
	this.shape_2.setTransform(171.4,13.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAwQgIgDgEgGQgFgIAAgJQAAgMAGgGQAFgFAJgDQAJgDAJAAIAOgDQAFAAADgCQADgCgBgDIAAAAQABgJgFgFQgFgEgJAAQgJAAgGAEQgGAEgCAFIgTgDQAEgKAGgFQAGgGAIgDQAJgCAIAAIANABQAGACAHAEQAGADADAHQAEAHAAALIABBCIgTAAIgBgOIAAAAQgBAEgEADQgFAFgFABQgGADgIAAQgKAAgHgEgAAQADIgKACIgHABQgJABgGAEQgGADAAAIQABAHAFADQAEAFAJAAQAIAAAFgEQAGgDADgFQADgGAAgGIAAgMIgGACg");
	this.shape_3.setTransform(163.65,14.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAvQgHgFgEgIQgEgIgBgNIAAg/IAUAAIAAA9QAAAKAGAGQAFAGAKAAQAEAAAGgDQAFgCADgGQAEgFAAgJIAAg6IATAAIABBkIgTAAIAAgSIgBAAQgEAJgHAFQgIAFgLAAQgJAAgIgEg");
	this.shape_4.setTransform(153.075,14.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAtQgKgHgDgOIATgDQACAIAFAEQAFADAJAAQAJAAAGgEQAGgEAAgGQAAgFgDgDQgEgDgHgBIgQgEQgPgDgHgGQgHgIABgKQAAgJAEgHQAFgHAJgDQAIgEALAAQAQAAAKAHQAJAHADAMIgRADQgCgFgFgEQgEgEgJAAQgIAAgFADQgGAEAAAGQAAAFAEADQADADAJACIAPAEQAOADAHAGQAHAHAAAKQAAAKgFAHQgFAGgKAEQgIAEgMAAQgRAAgLgHg");
	this.shape_5.setTransform(142.675,14.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAvQgHgFgEgIQgEgIgBgNIAAg/IAUAAIAAA9QAAAKAGAGQAFAGAKAAQAEAAAGgDQAFgCADgGQAEgFAAgJIAAg6IATAAIABBkIgTAAIAAgSIgBAAQgEAJgHAFQgIAFgLAAQgJAAgIgEg");
	this.shape_6.setTransform(132.175,14.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBDIgBiFIATAAIABCFg");
	this.shape_7.setTransform(119.45,13.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIBDIgCiFIAUAAIABCFg");
	this.shape_8.setTransform(114.85,13.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAYIgBgvIAQAAIAAAvg");
	this.shape_9.setTransform(110.5,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAvQgHgFgEgIQgEgIgBgNIAAg/IAUAAIAAA9QAAAKAGAGQAFAGAKAAQAEAAAGgDQAFgCADgGQAEgFAAgJIAAg6IATAAIABBkIgTAAIAAgSIgBAAQgEAJgHAFQgIAFgLAAQgJAAgIgEg");
	this.shape_10.setTransform(103.075,14.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXAuQgLgHgGgMQgGgMAAgPQAAgPAGgMQAFgLAKgHQAKgGAOAAQAOAAALAHQAKAGAHAMQAFAMABAPQAAAQgGALQgFAMgLAGQgKAGgOAAQgOAAgKgGgAgOgdQgHAFgDAIQgCAIgBAJQAAAKAEAHQACAIAHAFQAGAFAIAAQAJAAAGgFQAHgFADgIQACgJAAgJQAAgJgDgIQgDgIgGgFQgFgEgKgBQgIABgGAFg");
	this.shape_11.setTransform(92.05,14.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghBFIgFgCIAFgQQAIADAFgDQAFgCAEgKIACgGIglhmIAUAAIAaBOIAAAAIAZhOIAWAAIgoByQgFAMgHAGQgIAGgMABIgIgBg");
	this.shape_12.setTransform(81.175,16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape_13.setTransform(65.625,14.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AABA8QgGgDgDgGQgEgGgBgJIgBg6IgOAAIAAgQIAPAAIgBgYIATAAIABAYIAUAAIAAAQIgUAAIAAA2QAAAIAEADQADADAFAAIAEgBIADAAIAEAQIgFABIgIABQgIAAgHgDg");
	this.shape_14.setTransform(56.65,13.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAwQgIgDgFgGQgEgIAAgJQAAgMAGgGQAFgFAJgDQAIgDAKAAIAOgDQAGAAACgCQADgCAAgDIAAAAQgBgJgEgFQgEgEgKAAQgJAAgGAEQgGAEgCAFIgTgDQADgKAHgFQAGgGAJgDQAHgCAJAAIANABQAHACAGAEQAGADADAHQAEAHAAALIABBCIgTAAIgBgOIAAAAQgCAEgEADQgDAFgHABQgFADgHAAQgKAAgIgEgAAQADIgKACIgHABQgJABgGAEQgGADAAAIQAAAHAGADQAEAFAJAAQAHAAAGgEQAGgDADgFQADgGAAgGIAAgMIgGACg");
	this.shape_15.setTransform(47.8,14.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAzIgBhkIATAAIAAAQIABAAQADgIAGgEQAGgFAJAAIAFAAIAEAAIAAATIgEgBIgGAAQgKAAgHAGQgGAHAAAKIAAA8g");
	this.shape_16.setTransform(39.55,14.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape_17.setTransform(25.225,14.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAYBDIgBg+QAAgKgGgGQgGgGgKAAQgKAAgGAHQgHAGAAALIABA8IgUAAIgBiFIATAAIABAyIABAAQAEgJAHgEQAHgFALAAQAPAAAKAKQAJAJABASIAABAg");
	this.shape_18.setTransform(14.225,13.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AABA8QgFgDgEgGQgFgGAAgJIgBg6IgOAAIAAgQIAPAAIgBgYIATAAIAAAYIAVAAIAAAQIgVAAIABA2QABAIADADQADADAFAAIAEgBIADAAIAEAQIgFABIgJABQgGAAgIgDg");
	this.shape_19.setTransform(5.15,13.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,0,221.70000000000002,26.4);


(lib.MadeFor = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAXCXIAAhLQAAgQgJgJQgIgIgPAAIgNAAIAABsIhSAAIAAksIBgAAQA3gBAdAWQAdAUAAApQAAAagLASQgMASgTAIQATAHALARQAMARAAAcIAABPgAgWgTIAKAAQAQAAAKgIQAKgJgBgNQABgOgKgJQgJgHgSgBIgJAAg");
	this.shape.setTransform(179.4,29.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPCHQgjgUgVgkQgUgiAAgtQAAgsAUgjQAVgjAjgVQAjgTAsgBQAtABAjATQAjAVAVAjQAUAjAAAsQAAAtgUAiQgVAkgjAUQgjAVgtAAQgsAAgjgVgAg0g2QgVAVABAhQgBAhAVAVQAUAWAgAAQAhAAAUgWQAVgVgBghQABghgVgVQgUgUghAAQggAAgUAUg");
	this.shape_1.setTransform(151.7,29.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhUCXIAAksICqAAIAABPIhYAAIAAAjIBSAAIAABHIhSAAIAABzg");
	this.shape_2.setTransform(126.05,29.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhVCXIAAksICrAAIAABPIhZAAIAAAjIBTAAIAABHIhTAAIAAAiIBZAAIAABRg");
	this.shape_3.setTransform(98.375,29.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiACXIAAksIBSAAQA8AAAnAUQAoAUASAhQATAhgBAoQAAApgSAjQgSAkgoAVQgnAUg8ABgAguBJIAMAAQAlAAAWgTQAWgSAAglQAAghgWgUQgXgTgmAAIgKAAg");
	this.shape_4.setTransform(75.2,29.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApCXIgJgxIhDAAIgIAxIhRAAIBAksIB6AAIA/EsgAgVAgIApAAIgUh7g");
	this.shape_5.setTransform(48.2,29.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABMCXIAAjOIgxDOIg4AAIgxjPIAADPIhOAAIAAksIB7AAIAhCGIAfiGIB+AAIAAEsg");
	this.shape_6.setTransform(18.475,29.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.1,55.6);


(lib.LogoWhite = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AMJDOQhChFAAh1QAAiABMhTQBOhSB4AAQBqAAA/BCQA/BBAABvQAAAjgJAoIlkAAQACA0AdAfQAdAgAtAAQBEAAAthIIB4A2QgfA+g+AjQg/AkhQAAQhuAAhDhEgAONiDQgjAdgJAtIDSAAQAAgugZgcQgXgbgrAAQgrAAggAbgAEiDfIAViZQA/BYBdAAQAdAAASgMQASgMAAgTQAAgTgPgMQgOgMgrgSIgfgOQhmgrAAhdQAAhNA2gwQA6g0BhAAQBhAAA8ApIgWCXQg/hNhLAAQgfAAgQAMQgRAMAAATQAAAQAOALQAMAKAlAQIAgAQQA7AZAZAjQAZAjAAAzQAABNg3AwQg4AxhfAAQhtAAhEgzgAA/ELIBLoUICWAAIhMIUgAjeELIg1lQIiUFQIh5AAIgyoUICRAAIARExICDkxIBqAAIAtEzIBkkzICOAAIjDIUgAu9ELICim5IjRAAIAuBPIAAADIhHBSIB0AAIgeBSIkRAAICYiwIhdihIH7AAIjEIUg");
	this.shape.setTransform(121.7,27.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.4,54.8);


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
	this.shape.graphics.f("#23381C").s().p("AMJDOQhChFAAh1QAAiABMhTQBOhSB4AAQBqAAA/BCQA/BBAABvQAAAjgJAoIlkAAQACA0AdAfQAdAgAtAAQBEAAAthIIB4A2QgfA+g+AjQg/AkhQAAQhuAAhDhEgAONiDQgjAdgJAtIDSAAQAAgugZgcQgXgbgrAAQgrAAggAbgAEiDfIAViZQA/BYBdAAQAdAAASgMQASgMAAgTQAAgTgPgMQgOgMgrgSIgfgOQhmgrAAhdQAAhNA2gwQA6g0BhAAQBhAAA8ApIgWCXQg/hNhLAAQgfAAgQAMQgRAMAAATQAAAQAOALQAMAKAlAQIAgAQQA7AZAZAjQAZAjAAAzQAABNg3AwQg4AxhfAAQhtAAhEgzgAA/ELIBLoUICWAAIhMIUgAjeELIg1lQIiUFQIh5AAIgyoUICRAAIARExICDkxIBqAAIAtEzIBkkzICOAAIjDIUgAu9ELICim5IjRAAIAuBPIAAADIhHBSIB0AAIgeBSIkRAAICYiwIhdihIH7AAIjEIUg");
	this.shape.setTransform(121.7,27.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.4,54.8);


(lib.image4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image4_300x250();
	this.instance.setTransform(0,0,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,500);


(lib.image3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image3_300x250();
	this.instance.setTransform(-15,0,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,0,640,500);


(lib.image2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image2_300x250();
	this.instance.setTransform(12,0,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12,0,640,500);


(lib.image1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image1_300x250();
	this.instance.setTransform(0,0,1.3333,1.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,500);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjxDyIAAnjIHjAAIAAHjg");
	mask.setTransform(24.175,24.175);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0E0F0C").ss(1.2,0,0,4).p("AAAjrQBhAABFBFQBGBFAABhQAABihGBFQhFBFhhAAQhhAAhFhFQhFhFAAhiQAAhhBFhFQBFhFBhAAg");
	this.shape.setTransform(24.15,24.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,48.4,48.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjxDyIAAnjIHjAAIAAHjg");
	mask.setTransform(24.175,24.175);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNgCIAXgHIAEAFIgOAOg");
	this.shape.setTransform(17.95,1.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAEIAQgNIAFAFIgOAOg");
	this.shape_1.setTransform(9.45,5.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAGIAKgSIALALIgOAPg");
	this.shape_2.setTransform(3.375,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMADIANgPIALALIgNAOg");
	this.shape_3.setTransform(6.15,9.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_4.setTransform(21.025,5.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_5.setTransform(14.975,5.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_6.setTransform(21.025,13.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_7.setTransform(14.975,13.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_8.setTransform(9.05,13.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_9.setTransform(21.025,21.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_10.setTransform(14.975,21.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_11.setTransform(9.05,21.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_12.setTransform(3,21.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_13.setTransform(17.85,9.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_14.setTransform(11.8,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_15.setTransform(17.85,17.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_16.setTransform(11.8,17.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAAIAOgOIAPAOIgPAPg");
	this.shape_17.setTransform(5.875,17.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0263C").s().p("AiEgTIEKAAQg8AnhKAAQhJAAg7gng");
	this.shape_18.setTransform(24.15,46.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiEAUQgagRgVgWIFnAAQgUAWgaARg");
	this.shape_19.setTransform(24.15,42.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F0263C").s().p("AizAUQgRgTgMgUIGhAAQgMAUgRATg");
	this.shape_20.setTransform(24.15,38.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjQAUQgNgVgGgSIHHAAQgHASgMAVg");
	this.shape_21.setTransform(24.15,34.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F0263C").s().p("AjjAUQgGgTgFgUIHcAAQgEAUgGATg");
	this.shape_22.setTransform(24.15,30.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjuAUQgDgUAAgTIHjAAQAAARgEAWg");
	this.shape_23.setTransform(24.175,26.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F0263C").s().p("Ah4AUIAAgnIDtAAQAEAWAAARg");
	this.shape_24.setTransform(36.25,22.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ah2AUIAAgnIDjAAQAGATAEAUg");
	this.shape_25.setTransform(36.075,18.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0263C").s().p("AhxAUIAAgnIDQAAQAMAVAHASg");
	this.shape_26.setTransform(35.55,14.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhoAUIAAgnICzAAQARASANAVg");
	this.shape_27.setTransform(34.625,10.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F0263C").s().p("AhZAUIAAgnICFAAQAaARAUAWg");
	this.shape_28.setTransform(33.15,6.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhCAUIAAgnQBIAAA9Ang");
	this.shape_29.setTransform(30.825,2.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#191977").s().p("Ah4B5QAAg2AXgxIAHAIIAPgQIgMgKIAQgYIAKAKIAPgPIgLgMQAIgJANgLIAHAHIAPgQIgFgEQAdgWAjgLIANAMIAPgOIgEgFQAcgGAYAAIAADxg");
	this.shape_30.setTransform(12.075,12.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,48.4,48.4), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjxDyIAAnjIHjAAIAAHjg");
	mask_1.setTransform(24.175,24.175);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0E0F0C").ss(1.2,0,0,4).p("AAAjrQBhAABFBFQBGBFAABhQAABihGBFQhFBFhhAAQhhAAhFhFQhFhFAAhiQAAhhBFhFQBFhFBhAAg");
	this.shape_1.setTransform(24.15,24.2);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,48.4,48.4), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjxDyIAAnjIHjAAIAAHjg");
	mask_1.setTransform(24.175,24.175);

	// Layer_3
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFD400").s().p("AgVgMIAigJIAJAhIgiAKg");
	this.shape_31.setTransform(33.475,8.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFD400").s().p("AgVANIAKgiIAhAJIgJAig");
	this.shape_32.setTransform(40.275,14.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFD400").s().p("AgYAAIAYgYIAZAYIgZAZg");
	this.shape_33.setTransform(42.775,24.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFD400").s().p("AgVgMIAigJIAJAiIghAJg");
	this.shape_34.setTransform(40.275,33.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFD400").s().p("AgVANIAJgiIAiAKIgJAhg");
	this.shape_35.setTransform(33.475,40.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFD400").s().p("AgYAAIAYgYIAZAYIgZAZg");
	this.shape_36.setTransform(24.15,42.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFD400").s().p("AgVgLIAigKIAJAiIgiAJg");
	this.shape_37.setTransform(14.825,40.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFD400").s().p("AgVANIAJgiIAiAJIgKAig");
	this.shape_38.setTransform(8.025,33.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFD400").s().p("AgYAAIAYgYIAZAYIgZAZg");
	this.shape_39.setTransform(5.525,24.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFD400").s().p("AgVgMIAhgJIAKAiIgiAJg");
	this.shape_40.setTransform(8.025,14.875);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFD400").s().p("AgVAMIAJghIAiAJIgJAig");
	this.shape_41.setTransform(14.825,8.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFD400").s().p("AgYAAIAYgYIAZAYIgZAZg");
	this.shape_42.setTransform(24.15,5.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#191977").s().p("AiqCrQhHhHAAhkQAAhjBHhHQBHhGBjAAQBkAABHBGQBHBHAABjQAABkhHBHQhHBGhkAAQhjAAhHhGg");
	this.shape_43.setTransform(24.175,24.2);

	var maskedShapeInstanceList = [this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0.1,48.4,48.3), null);


(lib.currency = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape.setTransform(107.775,-8.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYBDIgBg+QAAgKgGgGQgGgGgKAAQgKAAgGAHQgHAGAAALIABA8IgUAAIgBiFIATAAIABAyIABAAQAEgJAHgEQAHgFALAAQAPAAAKAKQAJAJABASIAABAg");
	this.shape_1.setTransform(96.775,-10.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABA8QgGgDgDgGQgEgGgBgJIgBg6IgOAAIAAgQIAPAAIgBgYIATAAIABAYIAUAAIAAAQIgUAAIAAA2QAAAIAEADQADADAFAAIAEgBIADAAIAEAQIgFABIgIABQgIAAgHgDg");
	this.shape_2.setTransform(87.7,-9.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXAzIgBg9QABgLgHgGQgFgGgKAAQgKAAgFAHQgIAGAAAMIABA7IgUAAIAAhkIASAAIABARIABAAQAEgIAGgFQAIgFAKAAQALAAAHAEQAIAFAFAIQAEAJAAAMIAAA/g");
	this.shape_3.setTransform(73.9,-8.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBGIgBhkIATAAIABBkgAgHgxQgEgEgBgFQAAgEADgEQADgDAFAAQAFAAADADQAFAEAAAEQABAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_4.setTransform(66.0036,-10.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABA8QgFgDgFgGQgDgGAAgJIgBg6IgPAAIAAgQIAPAAIAAgYIASAAIABAYIAUAAIAAAQIgUAAIAAA2QABAIADADQADADAFAAIAEgBIADAAIAEAQIgFABIgJABQgGAAgIgDg");
	this.shape_5.setTransform(186.2,13.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAwQgIgDgEgGQgEgIgBgJQAAgMAFgGQAGgFAJgDQAJgDAKAAIANgDQAFAAADgCQADgCgBgDIAAAAQABgJgFgFQgEgEgKAAQgJAAgGAEQgGAEgCAFIgSgDQADgKAGgFQAGgGAIgDQAJgCAIAAIANABQAHACAGAEQAFADAEAHQAEAHABALIAABCIgTAAIAAgOIgBAAQgCAEgDADQgEAFgGABQgGADgIAAQgKAAgHgEgAAQADIgKACIgHABQgJABgGAEQgGADAAAIQABAHAEADQAFAFAJAAQAHAAAGgEQAGgDADgFQADgGAAgGIAAgMIgGACg");
	this.shape_6.setTransform(177.35,14.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYA+QgKgGgGgMQgFgMAAgQQgBgQAGgLQAGgMAJgGQAJgGAMAAQAIAAAHADQAFADAEAEIAFAIIABAAIAAgyIATAAIACCFIgUAAIAAgPIgBAAIgGAHQgDAEgGADQgFADgJAAQgMAAgJgGgAgOgOQgGAFgDAIQgDAHABAKQAAAKACAIQAEAIAFAFQAHAEAHAAQAJAAAFgEQAHgFACgIQAEgHAAgLQgBgQgGgJQgIgJgMAAQgJAAgFAEg");
	this.shape_7.setTransform(161.3,13.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape_8.setTransform(150.325,14.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape_9.setTransform(139.425,14.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXAzIgBg9QAAgLgFgGQgGgGgKAAQgKAAgFAHQgIAGAAAMIABA7IgUAAIgBhkIATAAIABARIABAAQAEgIAGgFQAIgFALAAQAJAAAJAEQAHAFAFAIQAEAJAAAMIAAA/g");
	this.shape_10.setTransform(128.45,14.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAvQgHgFgEgIQgEgIgBgNIAAg/IAUAAIAAA9QAAAKAGAGQAFAGAKAAQAEAAAGgDQAFgCADgGQAEgFAAgJIAAg6IATAAIABBkIgTAAIAAgSIgBAAQgEAJgHAFQgIAFgLAAQgJAAgIgEg");
	this.shape_11.setTransform(112.525,14.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXAuQgLgHgGgMQgGgMAAgPQAAgPAGgMQAFgLAKgHQAKgGAOAAQAOAAALAHQAKAGAHAMQAFAMABAPQAAAQgGALQgFAMgLAGQgKAGgOAAQgOAAgKgGgAgOgdQgHAFgDAIQgCAIgBAJQAAAKAEAHQACAIAHAFQAGAFAIAAQAJAAAGgFQAHgFACgIQADgJAAgJQAAgJgDgIQgDgIgGgFQgFgEgKgBQgIABgGAFg");
	this.shape_12.setTransform(101.5,14.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghBFIgFgCIAFgQQAIADAFgDQAFgCAEgKIACgGIglhmIAUAAIAaBOIAAAAIAZhOIAWAAIgoByQgFAMgHAGQgIAGgMABIgIgBg");
	this.shape_13.setTransform(90.625,16.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AghBFIgFgCIAFgQQAIADAFgDQAFgCAEgKIACgGIglhmIAUAAIAaBOIAAAAIAZhOIAWAAIgoByQgFAMgHAGQgIAGgMABIgIgBg");
	this.shape_14.setTransform(75.225,16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVAuQgLgHgFgMQgGgLAAgQQgBgOAGgMQAGgMAKgGQALgHANAAQARAAAMAJQALAJACAQIgTAAQgCgHgFgFQgGgFgKAAQgLAAgIAJQgGAJgBAQQABAQAHAKQAIAKALAAQAJAAAFgFQAGgEACgJIATAAQgBAKgFAIQgFAHgJAFQgJAEgMAAQgNAAgLgGg");
	this.shape_15.setTransform(64.8231,14.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXAzIAAg9QAAgLgHgGQgFgGgKAAQgKAAgFAHQgIAGAAAMIABA7IgTAAIgBhkIATAAIAAARIABAAQAEgIAGgFQAIgFAKAAQALAAAHAEQAIAFAFAIQAEAJAAAMIAAA/g");
	this.shape_16.setTransform(54,14.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAFgMALgGQAKgHANAAQAMAAAKAFQAKAFAHALQAGAMABASIgBAGIhGAAQAAAQAIAHQAHAHANAAQAIAAAGgEQAGgDADgHIASADQgDANgLAHQgKAHgRAAQgOAAgLgGgAAagIQAAgMgHgHQgHgIgLAAQgHAAgGAEQgGAEgDAGQgEAGgBAHIA0AAIAAAAg");
	this.shape_17.setTransform(43.025,14.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAzIgBhkIATAAIAAAQIABAAQADgIAGgEQAGgFAKAAIAEAAIAEAAIAAATIgEgBIgGAAQgLAAgGAGQgGAHAAAKIABA8g");
	this.shape_18.setTransform(34.4,14.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAzIgBhkIATAAIAAAQIABAAQADgIAGgEQAHgFAIAAIAFAAIAEAAIAAATIgEgBIgGAAQgKAAgHAGQgGAHAAAKIABA8g");
	this.shape_19.setTransform(27.25,14.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZAvQgHgFgEgIQgEgIgBgNIAAg/IAUAAIAAA9QAAAKAGAGQAFAGAKAAQAEAAAGgDQAFgCADgGQAEgFAAgJIAAg6IATAAIABBkIgTAAIAAgSIgBAAQgEAJgHAFQgIAFgLAAQgJAAgIgEg");
	this.shape_20.setTransform(17.775,14.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVAuQgLgHgFgMQgGgLAAgQQgBgOAGgMQAGgMAKgGQALgHANAAQARAAAMAJQALAJACAQIgTAAQgCgHgFgFQgGgFgKAAQgLAAgIAJQgGAJgBAQQABAQAHAKQAIAKALAAQAJAAAFgFQAGgEACgJIATAAQgBAKgFAIQgFAHgJAFQgJAEgMAAQgNAAgLgGg");
	this.shape_21.setTransform(7.0731,14.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-23.3,266.90000000000003,49.7);


(lib.CTA_TEXT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#163300").s().p("AAOAjIgOguIAAAAIgNAuIgRAAIgUhGIARAAIAMAyIABAAIANgyIAQAAIAMAxIABAAIAMgxIARAAIgUBGg");
	this.shape.setTransform(122.575,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#163300").s().p("AgRAgQgIgFgEgIQgEgIAAgLQAAgKAEgIQAEgJAIgEQAHgFAKAAQAKAAAIAFQAIAFADAIQAFAIAAALQAAAKgEAJQgEAIgIAEQgIAFgKAAQgKAAgHgFgAgIgTQgEADgCAFQgCAGAAAFIABAMQACAFAEADQAEADAFAAQAFAAAEgDQAEgDACgFQACgGAAgGQAAgGgCgFQgCgFgDgDQgEgDgGAAQgEAAgEADg");
	this.shape_1.setTransform(113.175,10.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#163300").s().p("AAPAkIAAgqQAAgHgEgDQgEgFgGAAQgGAAgEAFQgEAEAAAHIAAApIgRAAIAAhGIAQAAIAAAMIABAAQADgGAFgEQAFgDAHAAQALAAAHAHQAGAHAAANIAAAsg");
	this.shape_2.setTransform(105.225,10.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#163300").s().p("AgTAsQgFgFgEgIQgEgIgBgMQABgLAEgIQADgIAHgEQAHgEAIgBQAFABAEACQAEACADADQACACABAEIABAAIAAgkIARAAIAABdIgRAAIAAgKIgBAAIgEAFIgGAEQgFACgEABQgJgBgHgDgAgIgIQgEADgBAFQgDAEAAAHQAAAGACAGQACAFAEADQADADAFAAQAIAAAFgHQAEgFAAgLQAAgKgEgGQgFgFgIAAQgFAAgDACg");
	this.shape_3.setTransform(93.75,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#163300").s().p("AgTAkIAAhGIAQAAIAAAMIABAAQACgHAEgDQAEgDAHAAIACAAIAEABIAAAPIgEgBIgEAAQgHAAgFAFQgDAEAAAGIAAApg");
	this.shape_4.setTransform(87.55,10.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#163300").s().p("AgSAiQgGgCgDgFQgDgFAAgHQAAgIAEgEQAEgDAGgDQAGgCAHAAIAJgBQAEgBACgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgFgDgDQgDgDgGAAQgFAAgEADQgDACgCAEIgPgCQADgKAHgFQAJgFAKAAQAFAAAFACQAFABAEADQAEACADAFQACAFABAHIgBAuIgQAAIAAgJIAAAAQgDAEgFADQgFAEgHAAQgHAAgFgDgAAKADIgGABIgFABIgJADQgEACAAAFQAAAFAEACQADACAFAAQAEAAAEgCQAEgCACgDQACgDAAgEIAAgJIgEACg");
	this.shape_5.setTransform(80.825,10.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#163300").s().p("AgPAgQgIgFgEgIQgEgIAAgLQAAgKAEgIQAFgIAHgFQAIgEAJgBQANABAIAGQAIAHABAMIgQAAQgBgFgDgEQgEgDgGAAQgHAAgEAGQgFAGAAAKQAAALAFAGQAEAGAHAAQAGAAADgDQAEgDABgGIAQAAQAAAIgEAFQgEAGgHADQgGAEgJAAQgKAAgHgFg");
	this.shape_6.setTransform(73.4975,10.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#163300").s().p("AgTAkIAAhGIAQAAIAAAMIABAAQACgHADgDQAGgDAFAAIAEAAIACABIAAAPIgDgBIgFAAQgGAAgFAFQgEAEAAAGIAAApg");
	this.shape_7.setTransform(64.2,10.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#163300").s().p("AgYAdQgGgHAAgNIAAgsIARAAIAAAqQgBAGAEAFQAEADAGAAQADAAADgCQADgCADgDQACgEAAgFIAAgoIARAAIAABGIgQAAIAAgNIgBAAQgDAHgFADQgGAEgHAAQgLAAgGgHg");
	this.shape_8.setTransform(57.4,10.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#163300").s().p("AgRAgQgIgFgEgIQgEgIAAgLQAAgKAEgIQAEgJAIgEQAHgFAKAAQAKAAAIAFQAIAFADAIQAFAIAAALQAAAKgEAJQgEAIgIAEQgIAFgKAAQgKAAgHgFgAgIgTQgEADgCAFQgCAGAAAFIABAMQACAFAEADQAEADAFAAQAFAAAEgDQAEgDACgFQACgGAAgGQAAgGgCgFQgCgFgDgDQgEgDgGAAQgEAAgEADg");
	this.shape_9.setTransform(49.475,10.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#163300").s().p("AgZAwIgEgBIAEgNQAFACAEgBQAEgCADgGIABgDIgahIIARAAIARA1IAAAAIAQg1IATAAIgdBPQgDAIgFAFQgGAFgKAAIgHgBg");
	this.shape_10.setTransform(41.8,11.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#163300").s().p("AAAAqQgEgCgDgEQgDgEAAgHIAAgmIgKAAIAAgOIAKAAIAAgRIAPAAIABARIAOAAIAAAOIgPAAIAAAjQABAFACACQACABADABIAEgBIACAAIACANIgEABIgGAAQgGAAgFgCg");
	this.shape_11.setTransform(32.25,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#163300").s().p("AgQAgQgHgEgFgIQgEgJAAgLQAAgKAEgIQAFgIAHgFQAIgEAJgBQAJAAAHAEQAHAEAFAIQAEAIAAAMIAAAEIgwAAIAAABQAAAJAFAFQAEAFAIAAQAFAAAEgDQAEgCACgFIAPACQgCAKgIAFQgIAGgNAAQgKAAgHgFgAARgGQAAgHgFgFQgEgEgHgBQgEABgDACQgFACgCAEQgCAEAAAEIAgAAIAAAAg");
	this.shape_12.setTransform(25.9975,10.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#163300").s().p("AgVArQgJgGgGgLQgFgLAAgPQAAgOAFgLQAHgLAJgGQAKgGALAAQALAAAIAEQAJAEAFAIQAGAHABAJIgRAAQgCgIgGgEQgFgEgJAAQgHAAgFAEQgHADgDAIQgEAHAAAKQAAAQAHAJQAGAIALAAQAIAAAGgDQAFgCADgFQACgFABgHIgWAAIABgMIAmAAIAAAKQgBAMgFAJQgFAJgIAFQgKAFgMAAQgMgBgKgFg");
	this.shape_13.setTransform(17.25,9.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_TEXT, new cjs.Rectangle(-2,-0.4,144.1,19.7), null);


(lib.CTA_BG = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9FE870").s().p("Ap3DQQhWAAg8g9Qg+g9AAhWQAAhVA+g9QA8g9BWAAITuAAQBWAAA+A9QA8A9ABBVQgBBWg8A9Qg+A9hWAAg");
	this.shape.setTransform(83.95,20.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_BG, new cjs.Rectangle(0,0,167.9,41.6), null);


(lib.Chip_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E1E1E").s().p("ABECpQgFgDgBgGQgCgGADgFQArhJABhKQAAhKgshMQgDgFACgGQABgGAGgDQAFgDAGABQAGACADAFQAxBTgBBSQAABSgwBQQgDAFgGACIgEAAQgEAAgEgCgAABCGQgEgDgCgGQgCgGAEgFQAdg1ABg7QAAg8gdg3QgDgGACgGQABgGAFgDQAFgDAGACQAGACADAFQAjA+gBBEQAABDgjA8QgEAFgGACIgEAAQgDAAgEgCgAhBBjQgFgDgCgGQgCgGAEgFQASghAAgtQABgtgSgjQgDgFACgGQACgGAFgDQAGgDAGACQAFACADAFQAWAqgBA1QgBA1gVAnQgEAFgFACIgEAAQgEAAgEgCgAh9BCQgGgDgBgGQgBgGADgGQAIgOAAgfQAAgdgKgOQgFgFABgGQABgGAFgEQAEgEAHABQAGAAAEAFQARAUAAAqQAAAqgNATQgDAFgGACIgEAAQgEAAgDgCg");
	this.shape.setTransform(106.1974,26.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.Chip();
	this.instance.setTransform(0,0,1.4713,1.4713);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.9,57.4);


(lib.c_f_22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgsVAeYQhoABhJhKQhJhJAAhoMAAAg07QAAhoBJhKQBJhIBogBMBYrAAAQBoABBJBIQBJBKAABoMAAAA07QAABohJBJQhJBKhogBg");
	this.shape.setTransform(308.825,194.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_22, new cjs.Rectangle(0,0,617.7,388.9), null);


(lib.c_f_21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgwGAaaMAAFg1iQAIj5EPANMBYAAA5QD9ARgNE/MAACAtJIgHGZQAEAYgTAiQgPAbgcAiQgRAUgWANQg9AnhlgNMhXkABMQkvgRAPkKg");
	this.shape.setTransform(307.9897,197.3154);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_21, new cjs.Rectangle(0,0,616,394.7), null);


(lib.c_f_20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgukAcnMAAAg5pQAQjQDNABMBWdADgQDQAUgCDUMAABAyZQgCCoisAiMhW0AD5QjogrABjBg");
	this.shape.setTransform(298.0748,206.6498);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_20, new cjs.Rectangle(0,0,596.2,413.3), null);


(lib.c_f_19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgqzAfQMgAKg8zQgJkiDrgLMBPNAG4QDBAUAEDmIAHc8IgBADIABPzIAAA9IgCB+QgECjipAiMhPqAG9QjWgZgCiog");
	this.shape.setTransform(275.0084,219.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_19, new cjs.Rectangle(0,0,550,438.7), null);


(lib.c_f_18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgkZAgJMAAAhAbQgHkGD4AaMBBwAJjQDMASADDfMAAEAocIABACIAAFhQgQCtinAUMhBrAJpQgcACgaAAQjxAAAUj4g");
	this.shape.setTransform(233.1458,230.571);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_18, new cjs.Rectangle(0,0,466.3,461.1), null);


(lib.c_f_17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgbqAiJMAAAhD0QgDkZDIAfMAxtALvQCkAegPC/IAAWTIAOW9QgICZhwAQMgxtAMBQgkAIgfAAQisAAgBjgg");
	this.shape.setTransform(177.1228,240.8582);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_17, new cjs.Rectangle(0,0,354.3,481.7), null);


(lib.c_f_16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgRSAj7MAAAhHjQAOkICbBIIeWNSQBwA7gKCjMAAAArwQACC9hkASI+CNcQgvAVgjAAQhpAAgGi9g");
	this.shape.setTransform(110.741,248.8209);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_16, new cjs.Rectangle(0,0,221.5,497.7), null);


(lib.c_f_15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EgGwAlLMAAAhKTQAMjfBVB0ILANYQA8BCAEBnIAAbKIgBAEIgER9QgBCMgnAcIrKNwQglArgZAAQgsAAAAiRg");
	this.shape.setTransform(43.2745,252.3883);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_15, new cjs.Rectangle(0,0,86.6,504.8), null);


(lib.c_f_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-305.7,-172.7,5.9,6).s().p("EABWAlOIjdr9QgagxAKh8MAAAgtUQgHhiAqhyIDesCQA0i+gID5MAAAAwAQgqImAvImIAAKBQgMBXgOAAQgTAAgYiLg");
	this.shape.setTransform(15.476,252.1391);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_14, new cjs.Rectangle(0,0,31,504.3), null);


(lib.c_f_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-332.7,-173.8,-21.1,4.9).s().p("EARrAmQMglOgNKQhBgdgIiQMAAAgsIQgVjEBsgeMAkjgM2QDDhjAfEHMAAAArhQjOIRDJKyIgJIOQAPDUh0AAQgjAAgvgTg");
	this.shape.setTransform(132.8547,246.7071);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_13, new cjs.Rectangle(0,0,265.7,493.4), null);


(lib.c_f_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-342,-173.2,-30.4,5.5).s().p("EAetAkVMg/IgKPQitgmAcjLMAAAgsuQgEjTCtgUMA+igKTQENg+AFFGMAAAAntQlRI8FRI7IgTIdQgQCoiVAAQgiAAgqgJg");
	this.shape.setTransform(222.4735,233.4055);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_12, new cjs.Rectangle(0,0,445,466.8), null);


(lib.c_f_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-334.6,-173.2,-23,5.5).s().p("EgoeAbXQi8g7AYi2MAAAgvaQgHjBCwgcMBQPgG4QDAAEAPD2MAAAAlZQlEHtFEJfIAAGgQgsDDieARg");
	this.shape.setTransform(275.7142,218.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_11, new cjs.Rectangle(0,0,551.5,437.2), null);


(lib.c_f_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-320.3,-173.9,-8.7,4.8).s().p("EgrdAcmQj+gRAcjpMAAAgxSQgHjqDHgeMBW+gDcQEEAMgPDpMAAAAiaQlGIcFVILIgPF5QACDOjtAYg");
	this.shape.setTransform(301.0815,205.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_10, new cjs.Rectangle(0,0,602.2,411.9), null);


(lib.c_f_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-307.3,-173.5,4.3,5.3).s().p("EgstAd3QjngqATjoMgAFgzcQgGjwDtgPMBZcgA+QDTAfgKDXMgAJAhlQkgHqEqG2IgBGRQgCC0jDApg");
	this.shape.setTransform(307.8663,197.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_9, new cjs.Rectangle(0,0,615.8,394.6), null);


(lib.c_f_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-301.5,-173,10.1,5.7).s().p("EgsVAeYQhoABhJhKQhJhJAAhoMAAAg07QAAhoBJhKQBJhIBogBMBYrAAAQBoABBJBIQBJBKAABoMAAAAg1QiTDCAAEMQAAEKCTDDIAAFrQAABohJBJQhJBKhogBg");
	this.shape.setTransform(308.825,194.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_8, new cjs.Rectangle(0,0,617.7,388.9), null);


(lib.c_f_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-296.2,-173.9,15.4,4.8).s().p("EgwKAaaMAAFg1iQAIj5EPANMBYAAA5QD9ARgNE/IAAerQh1C9gQECQgPEDCeDoIgPGNQAEAYgTAiQgPAbgcAiQgRAUgWANQg9AnhlgNMhXkABMQkvgRAPkKg");
	this.shape.setTransform(308.3647,197.3154);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_7, new cjs.Rectangle(0,0,616.8,394.7), null);


(lib.c_f_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-281.2,-174.2,30.4,4.6).s().p("EgukAcnMAAAg5pQAQjQDNABMBWdADgQDQAUgCDUIAAeuQj1GrD2HZIAAFnQgCCoisAiMhW0AD5QjogrABjBg");
	this.shape.setTransform(298.0748,206.6498);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_6, new cjs.Rectangle(0,0,596.2,413.3), null);


(lib.c_f_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-267.8,-173.5,43.8,5.3).s().p("Egq1AfQMgAJg8zQgJkiDrgLMBPMAG4QDCAUADDmIAHc8QjOGhDRGgIgFFwQgECjipAiMhPpAG9QjXgZgCiog");
	this.shape.setTransform(275.1584,219.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_5, new cjs.Rectangle(0,0,550.3,438.7), null);


(lib.c_f_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-262,-173.5,49.6,5.2).s().p("EgkZAgJMAAAhAbQgHkGD4AaMBBwAJjQDsAHgdDqIAAcDQidGWCiGFIAAFhQgQCtinAUMhBrAJpQgcACgaAAQjxAAAUj4g");
	this.shape.setTransform(233.1458,230.571);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_4, new cjs.Rectangle(0,0,466.3,461.1), null);


(lib.c_f_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-264.9,-173.2,46.7,5.5).s().p("EgbqAiJMAAAhD0QgDkZDIAfMAxtALvQCkAegPC/IAAcXQiDFjCRF0IAAFiQgICZhwAQMgxtAMBQgkAIgfAAQisAAgBjgg");
	this.shape.setTransform(177.1228,240.8582);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_3, new cjs.Rectangle(0,0,354.3,481.7), null);


(lib.c_f_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-276,-173.8,35.6,5).s().p("EgRSAj7MAAAhHjQAOkICbBIIeWNSQBwA7gKCjIAAayQhZFsBZF+IAAFUQACC9hkASI+CNcQgvAVgjAAQhpAAgGi9g");
	this.shape.setTransform(110.741,248.8209);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_2, new cjs.Rectangle(0,0,221.5,497.7), null);


(lib.c_f_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#C3EB9E","#A0DE74"],[0,1],-291.3,-173.4,20.3,5.4).s().p("EgGwAlLMAAAhKTQAMjfBVB0ILANYQA8BCAEBnIAAbKQglFRAgFRIAAHfQgBCMgnAcIrKNwQglArgZAAQgsAAAAiRg");
	this.shape.setTransform(43.2745,252.3883);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c_f_1, new cjs.Rectangle(0,0,86.6,504.8), null);


(lib.Text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// seeOnGoogle
	this.instance = new lib.seeOnGoogle("synched",0);
	this.instance.setTransform(65.2,105.8,1,1,0,0,0,65.2,13.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({alpha:1},26,cjs.Ease.cubicInOut).wait(79).to({startPosition:0},0).to({_off:true},1).wait(126));

	// need
	this.instance_1 = new lib.need("synched",0);
	this.instance_1.setTransform(74.8,59.5,1,1,0,0,0,74.8,13.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).to({alpha:1},24,cjs.Ease.cubicInOut).wait(105).to({startPosition:0},0).to({_off:true},1).wait(126));

	// currency
	this.instance_2 = new lib.currency("synched",0);
	this.instance_2.setTransform(60.1,36.35,1,1,0,0,0,60.1,13.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({alpha:1},32,cjs.Ease.cubicInOut).wait(129).to({startPosition:0},0).to({_off:true},1).wait(126));

	// spendInThe
	this.instance_3 = new lib.spendInThe("synched",0);
	this.instance_3.setTransform(91,13.2,1,1,0,0,0,91,13.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},25,cjs.Ease.cubicInOut).wait(154).to({startPosition:0},0).to({_off:true},1).wait(126));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-0.1,266.90000000000003,96.1);


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

	// Travel
	this.instance = new lib.Travel("synched",0);
	this.instance.setTransform(68.4,101,1,1,0,0,0,68.4,27.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({alpha:1},28,cjs.Ease.cubicInOut).wait(82).to({startPosition:0},0).to({alpha:0},25,cjs.Ease.cubicInOut).wait(137));

	// MadeFor
	this.instance_1 = new lib.MadeFor("synched",0);
	this.instance_1.setTransform(96.5,64.4,1,1,0,0,0,96.5,27.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({alpha:1},28,cjs.Ease.cubicInOut).wait(83).to({startPosition:0},0).to({alpha:0},25,cjs.Ease.cubicInOut).wait(141));

	// TheCard
	this.instance_2 = new lib.theCard("synched",0);
	this.instance_2.setTransform(120.5,27.8,1,1,0,0,0,120.5,27.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},28,cjs.Ease.cubicInOut).wait(111).to({startPosition:0},0).to({alpha:0},25,cjs.Ease.cubicInOut).wait(145));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240.9,128.8);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(24.2,24.2,1,1,0,0,0,24.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,48.4,48.4), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjxDxIAAnhIHjAAIAAHhg");
	mask.setTransform(24.15,24.2);

	// Layer_3
	this.instance = new lib.Group();
	this.instance.setTransform(24.2,24.2,1,1,0,0,0,24.2,24.2);
	this.instance.alpha = 0.1211;

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(24.2,24.2,1,1,0,0,0,24.2,24.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0.1,48.3,48.3), null);


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
	mask.graphics.p("AjxDyIAAnjIHjAAIAAHjg");
	mask.setTransform(24.175,24.175);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(24.2,24.2,1,1,0,0,0,24.2,24.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,48.4,48.4), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.ClipGroup_2_1();
	this.instance_1.setTransform(24.2,24.2,1,1,0,0,0,24.2,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,48.4,48.4), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjxDxIAAnhIHjAAIAAHhg");
	mask_1.setTransform(24.15,24.2);

	// Layer_3
	this.instance_2 = new lib.Group_1();
	this.instance_2.setTransform(24.2,24.2,1,1,0,0,0,24.2,24.2);
	this.instance_2.alpha = 0.1211;

	this.instance_3 = new lib.ClipGroup_1_1();
	this.instance_3.setTransform(24.2,24.2,1,1,0,0,0,24.2,24.2);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0.1,48.3,48.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
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
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjxDyIAAnjIHjAAIAAHjg");
	mask_1.setTransform(24.175,24.175);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.setTransform(24.2,24.2,1,1,0,0,0,24.2,24.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,48.4,48.4), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance_4 = new lib.ClipGroup_3();
	this.instance_4.setTransform(24.2,24.15,1,1,0,0,0,24.2,24.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0F0C").s().p("Ah9CWQgmggAAg9IAAjuIBiAAIAADhQAAAYAMAMQAMANAVAAQAVAAAKgNQAMgNAAgZIAAjfIBfAAIAADqQAAA/gmAhQgnAhg/AAQhAAAgngggAEhCwIAAhZQAAgUgLgJQgJgJgUAAIgPAAIAAB/IhiAAIAAllIByAAQBDAAAiAZQAjAZAAAwQAAAfgNAWQgNAVgYAJQAXAKANATQAOATAAAjIAABdgADqgaIANAAQATAAAMgJQAMgLAAgQQAAgQgMgKQgLgKgVAAIgMAAgAmBCwIAAllIDNAAIAABfIhsAAIAAApIBlAAIAABVIhlAAIAAApIBsAAIAABfg");
	this.shape.setTransform(100.875,23.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(0,0,139.5,48.3), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance_2 = new lib.ClipGroup_0_2();
	this.instance_2.setTransform(69.8,24.5,1,1,0,0,0,69.8,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,139.5,48.3), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance_3 = new lib.Group();
	this.instance_3.setTransform(24.2,24.15,1,1,0,0,0,24.2,24.2);
	this.instance_3.alpha = 0.1211;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFDFE").s().p("ABuCwIAZgZIAaAZIgaAagAiQCgIAngnIApAnIgpApgACNAYIAPgPIAQAPIgQAQgAhaALIAAhgIBfAAIAAAKIgiAAIAiAXIAAAMIg1gkIghAAIAAABIBWA5IAAAMIhWg4IAABJgAAogaIAZgZIAaAZIgaAagACrgjIAZgZIAaAZIgaAagAjagVIBSg3IgjAAIgmAZIAFgLIADgEIAOgKIgJAAIADgGIACgDIA+AAIAAAPIgKAGIhSA2IADgLgABuhqIAZgZIAaAZIgaAagAhah8IAAgRIAJgGIBRg2IAFAAIAAAHIhWA6IAAADIAeAAIA4gmIAAANIgmAZIAmAAIAAAJgAiah8IgFgDIAGgGIAOAAIAAgDIgGgEIACgCIAOgLIAAAdg");
	this.shape.setTransform(22.7125,20.1875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF273C").s().p("AgWBnIAAhSIAAgPIg+AAIAOgUIAOgQIABgCIADgDIAFADIAZAAIAAgdIAEgDQARgMARgJIAAAAIAAAkIAAARIBgAAIAAAmIhgAAIAABhgAAZAPIAAAAIAhAAIA2AkIAAAWgAhlAoIAlgZIAjAAIhSA2QAEgOAGgPgAAZgpIAAgDIBXg6IAAAXIg4AmgAgugpIAIgHIAGAEIAAADg");
	this.shape_1.setTransform(11.9875,11.0125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231E99").s().p("AiFDKQgagRgUgYQgRgSgNgWQgMgWgGgSQgHgTgEgVQgDgUAAgVQAAgNACgOIADgXIBSg1IAABMIAKAAIAnAAIAJAAIAAhKIBXA4IAAgMIAAgXIAAgLIgjgXIAjAAIAAgKIAAgnIAAgJIgnAAIAngaIAAgMIAAgXIAAgIIAJAAIACAAQAQAAAPACQA2AIAuAfIATANIAQAPIAMAMQARATAMAVQAMAXAHASQAGATAEAVQAEAXAAAQQAAARgEAYQgEAVgGATQgHASgMAWQgMAWgRASQgUAYgbARQg7AohKAAQhJAAg8gogABgCJIAZAaIAagaIgagZgAifB5IAoApIApgpIgpgogAB+gOIAQAPIAQgPIgQgPgAAZhCIAZAaIAagaIgagZgACchKIAZAaIAagaIgagZgABgiRIAZAaIAagaIgagZgAjYhqIAFgJIAJAAIgOAJgAhgjdIAVgHIAYgHQATgEASgBIhSA2g");
	this.shape_2.setTransform(24.175,24.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0E0F0C").s().p("Ah3CWQgmgiAAg7IAAjuIBiAAIAADiQAAAWALANQANANAUAAQAVAAALgNQALgNAAgYIAAjgIBgAAIAADqQAAA+gnAiQgmAhg/AAQhBAAgmgggACOCwIAAllIBiAAQBJAAAvAYQAuAYAWAoQAWAoAAAuQAAAxgWArQgXAqguAYQgvAZhIAAgADvBUIAPAAQAtAAAagWQAbgWAAgsQAAgngbgYQgagXguAAIgNAAgAj9CwIgKg7IhQAAIgKA7IhgAAIBMllICSAAIBLFlgAlIAiIAzAAIgZiRg");
	this.shape_3.setTransform(106.775,23.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,151.8,48.3), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ON:9,OFF:23};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(21).call(this.frame_22).wait(14).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.CTA_TEXT();
	this.instance.setTransform(83.3,20.2,1,1,0,0,0,70.5,9.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regY:9.9,scaleX:1.2039,scaleY:1.2039,x:83.25,y:20.25},13,cjs.Ease.cubicInOut).wait(1).to({regY:9.8,scaleX:1,scaleY:1,x:83.3,y:20.2},13,cjs.Ease.cubicInOut).wait(1));

	// Layer_1
	this.instance_1 = new lib.CTA_BG();
	this.instance_1.setTransform(84,20.8,1,1,0,0,0,84,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:1.0965,scaleY:1.0965,x:84.05},13,cjs.Ease.cubicInOut).wait(1).to({scaleX:1,scaleY:1,x:84},13,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-2,184.1,45.7);


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

	// image4
	this.instance = new lib.image4("synched",0);
	this.instance.setTransform(-502.75,300,1,1,0,0,0,177,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(232).to({_off:false},0).to({x:143.1},20,cjs.Ease.cubicInOut).wait(81).to({x:150},0).wait(1));

	// image3
	this.instance_1 = new lib.image3("synched",0);
	this.instance_1.setTransform(798.9,300,1,1,0,0,0,177,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(151).to({_off:false},0).to({x:152.25},20,cjs.Ease.cubicInOut).wait(61).to({startPosition:0},0).to({x:793.9},20,cjs.Ease.cubicInOut).to({_off:true},1).wait(81));

	// image2
	this.instance_2 = new lib.image2("synched",0);
	this.instance_2.setTransform(-478.8,300,1,1,0,0,0,177,300);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).to({x:131.9},20,cjs.Ease.cubicInOut).wait(61).to({startPosition:0},0).to({x:-502.2},20,cjs.Ease.cubicInOut).to({_off:true},1).wait(162));

	// image1
	this.instance_3 = new lib.image1("synched",0);
	this.instance_3.setTransform(154.8,300,1,1,0,0,0,177,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({startPosition:0},0).to({x:778.35},20,cjs.Ease.cubicInOut).to({_off:true},1).wait(243));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-679.7,0,1926.6000000000001,500);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance_4 = new lib.ClipGroup();
	this.instance_4.setTransform(24.2,24.15,1,1,0,0,0,24.2,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0E0F0C").s().p("AhMCyQgagHgVgOIAAhsQAYAaAYANQAYAMAdAAQAPAAAHgGQAIgHAAgLQABgJgJgHQgFgGgXgKIgdgMQglgQgPgWQgQgXgBgnQAAghAQgaQAQgbAbgPQAbgPAhAAQAaAAAaAFQAaAHANAJIAABtQgQgXgVgLQgWgLgZAAQgPAAgJAGQgJAGAAAKQABAIAHAJQAJAHATAIIAVAJQAnARASAZQASAZAAAnQAAAjgPAZQgOAbgaAOQgaAOgiAAQghAAgbgHgAmACZQgmggAAg9IAAjuIBiAAIAADhQAAAXAMANQAMANAVAAQAWAAAKgNQAMgMAAgaIAAjfIBfAAIAADqQAAA/gmAhQgnAhhAAAQhBAAgmgggAByCzIAAllIBiAAQBJAAAvAYQAuAYAXAnQAVAoAAAvQAAAxgVAqQgXAqgvAZQguAZhIAAgADUBXIAOAAQAuAAAZgWQAbgXAAgrQAAgogbgXQgbgXgtAAIgNAAg");
	this.shape_4.setTransform(104.45,23.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,146.7,48.3), null);


(lib.Card_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {open:1,"static":8,close:140,OpenWhite:146};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("EgsVAeYQhoABhJhKQhJhJAAhoMAAAg07QAAhoBJhKQBJhIBogBMBYrAAAQBoABBJBIQBJBKAABoMAAAAg1QiTDCAAEMQAAEKCTDDIAAFrQAABohJBJQhJBKhogBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:308.825,y:194.45}).wait(120).to({graphics:null,x:0,y:0}).wait(165));

	// Layer_11
	this.instance = new lib.Shine();
	this.instance.setTransform(-738.7,39.7,1,1,28.4805,0,0,597.1,1116.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:1185.3,y:610.9},119,cjs.Ease.cubicInOut).to({_off:true},1).wait(165));

	// Layer_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_142 = new cjs.Graphics().p("EgsVAeYQhoABhJhKQhJhJAAhoMAAAg07QAAhoBJhKQBJhIBogBMBYrAAAQBoABBJBIQBJBKAABoMAAAA07QAABohJBJQhJBKhogBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(142).to({graphics:mask_1_graphics_142,x:308.825,y:194.45}).wait(158));

	// AUD
	this.instance_1 = new lib.ClipGroup_5();
	this.instance_1.setTransform(199.45,454.75,2.1732,2.1732,0,0,0,75.9,24.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(148).to({_off:false},0).to({scaleX:1.4328,scaleY:1.4328,x:148.35,y:76.3},19,cjs.Ease.quadInOut).wait(133));

	// EUR
	this.instance_2 = new lib.ClipGroup_4();
	this.instance_2.setTransform(186.2,570.45,2.1732,2.1732,0,0,0,69.8,24.6);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(151).to({_off:false},0).to({scaleX:1.4328,scaleY:1.4328,x:139.6,y:194.45},19,cjs.Ease.quadInOut).wait(130));

	// USD
	this.instance_3 = new lib.ClipGroup_6();
	this.instance_3.setTransform(194,685.3,2.1732,2.1732,0,0,0,73.4,24.6);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({scaleX:1.4328,scaleY:1.4328,x:144.75,y:312.05},19,cjs.Ease.quadInOut).wait(127));

	// Layer_3
	this.instance_4 = new lib.Logo("synched",0);
	this.instance_4.setTransform(313.15,44.5,0.1423,1,0,0,42.7278,6.2,1.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({regX:7.1,regY:0.7,scaleX:0.2907,skewY:18.5529,x:318.6,y:43.55},0).wait(1).to({regX:7.2,regY:0.6,scaleX:0.4645,scaleY:0.9419,skewY:10.1803,x:324.9,y:43.05},0).wait(1).to({regX:7.4,regY:0.9,scaleX:0.6398,scaleY:0.9752,skewY:6.8538,x:329.6,y:42.15},0).wait(1).to({regX:7.5,regY:1.1,scaleX:0.7861,skewY:3.8978,x:334.5,y:41.7},0).wait(1).to({scaleX:0.9034,skewY:1.8797,x:337.25,y:41.25},0).wait(1).to({regX:7.7,regY:1.2,scaleX:0.9782,skewY:0.5711,x:338.3,y:40.55},0).wait(1).to({regX:121.7,regY:27.4,scaleX:1,scaleY:1,skewY:0,x:452,y:66.55},0).wait(132).to({regX:7.7,regY:1.4,scaleX:1.0097,scaleY:0.9993,skewY:-0.7256,x:338.55,y:40.75},0).wait(1).to({regX:7.8,regY:1.6,scaleX:1.0281,skewY:-1.6695,x:338.15,y:39.9},0).wait(1).to({regX:7.9,regY:1.7,scaleX:0.9898,skewY:-3.9311,x:335.45,y:39.4},0).wait(1).to({regX:8,regY:2,scaleX:0.8441,scaleY:1.0221,skewY:-7.4304,x:330.1,y:38.7},0).wait(1).to({regX:8.1,regY:2.2,scaleX:0.5396,scaleY:1.0396,skewY:-16.1911,x:320.65,y:37.9},0).wait(1).to({regX:9.2,regY:2.5,scaleX:0.1814,skewY:-70.7723,x:310,y:40.6},0).to({_off:true},1).wait(154));

	// Layer_7
	this.instance_5 = new lib.Chip_1("synched",0);
	this.instance_5.setTransform(270.6,121.95,0.1857,1.1642,0,0,26.685,3.9,3.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1).to({regY:3.9,scaleX:0.4603,scaleY:1.1469,skewY:10.9375,x:207.85,y:122.5},0).wait(1).to({scaleX:0.728,scaleY:1.1362,skewY:4.0635,x:146.95,y:125.2},0).wait(1).to({regY:4,scaleX:0.9342,scaleY:1.0841,skewY:3.6718,x:98.8,y:126.7},0).wait(1).to({regX:4,scaleX:1.0244,scaleY:1.0601,skewY:1.5543,x:69.8,y:132.1},0).wait(1).to({regY:3.9,scaleX:1.0437,scaleY:1.084,skewY:0.4414,x:57.95,y:133.9},0).wait(1).to({regX:3.9,regY:3.8,scaleX:1.0241,scaleY:1,skewY:0.8793,x:58.8,y:136.45},0).wait(1).to({scaleX:1,skewY:0,x:61.9,y:137.8},0).wait(132).to({scaleX:0.9724,x:66.05},0).wait(1).to({regY:3.9,scaleX:0.8979,skewY:-0.2473,x:80.5,y:139.8},0).wait(1).to({regY:3.8,scaleX:0.7646,scaleY:0.9151,skewY:0,x:110.15,y:141.5},0).wait(1).to({regX:4,regY:3.9,scaleX:0.5536,scaleY:0.8809,skewY:-2.452,x:159.7,y:144.25},0).wait(1).to({regY:4,scaleX:0.3023,scaleY:0.8727,skewY:-2.4502,x:225.2,y:145.2},0).wait(1).to({regX:4.2,regY:4.2,scaleX:0.0471,scaleY:0.8342,skewY:-2.4339,x:299.3,y:145.8},0).to({_off:true},1).wait(154));

	// Layer_10
	this.instance_6 = new lib.c_f_1();
	this.instance_6.setTransform(298.5,194.75,1,1,0,0,0,43.2,252.3);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_7 = new lib.c_f_2();
	this.instance_7.setTransform(283.35,195.2,1,1,0,0,0,110.8,248.8);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_8 = new lib.c_f_3();
	this.instance_8.setTransform(272.2,194.6,1,1,0,0,0,177.1,240.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_9 = new lib.c_f_4();
	this.instance_9.setTransform(269.35,195,1,1,0,0,0,233.2,230.6);
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_10 = new lib.c_f_5();
	this.instance_10.setTransform(275.15,194.9,1,1,0,0,0,275.2,219.3);
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_11 = new lib.c_f_6();
	this.instance_11.setTransform(288.55,195.7,1,1,0,0,0,298.1,206.7);
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_12 = new lib.c_f_7();
	this.instance_12.setTransform(303.55,195.35,1,1,0,0,0,308.4,197.3);
	this.instance_12.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_13 = new lib.c_f_8();
	this.instance_13.setTransform(308.8,194.5,1,1,0,0,0,308.8,194.5);
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_14 = new lib.c_f_9();
	this.instance_14.setTransform(314.6,194.9,1,1,0,0,0,307.9,197.3);
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_15 = new lib.c_f_10();
	this.instance_15.setTransform(327.6,195.35,1,1,0,0,0,301.1,205.9);
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_16 = new lib.c_f_11();
	this.instance_16.setTransform(341.9,194.7,1,1,0,0,0,275.7,218.6);
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_17 = new lib.c_f_12();
	this.instance_17.setTransform(349.3,194.65,1,1,0,0,0,222.5,233.4);
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_18 = new lib.c_f_13();
	this.instance_18.setTransform(339.9,195.25,1,1,0,0,0,132.8,246.7);
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_19 = new lib.c_f_14();
	this.instance_19.setTransform(313,194.25,1,1,0,0,0,15.5,252.2);
	this.instance_19.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_20 = new lib.c_f_15();
	this.instance_20.setTransform(298.5,194.75,1,1,0,0,0,43.2,252.3);
	this.instance_20.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_21 = new lib.c_f_16();
	this.instance_21.setTransform(283.35,195.2,1,1,0,0,0,110.8,248.8);
	this.instance_21.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_22 = new lib.c_f_17();
	this.instance_22.setTransform(272.2,194.6,1,1,0,0,0,177.1,240.8);
	this.instance_22.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_23 = new lib.c_f_18();
	this.instance_23.setTransform(269.35,195,1,1,0,0,0,233.2,230.6);
	this.instance_23.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_24 = new lib.c_f_19();
	this.instance_24.setTransform(274.95,194.9,1,1,0,0,0,275,219.3);
	this.instance_24.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_25 = new lib.c_f_20();
	this.instance_25.setTransform(288.55,195.7,1,1,0,0,0,298.1,206.7);
	this.instance_25.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_26 = new lib.c_f_21();
	this.instance_26.setTransform(303.15,195.35,1,1,0,0,0,308,197.3);
	this.instance_26.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.instance_27 = new lib.c_f_22();
	this.instance_27.setTransform(308.8,194.5,1,1,0,0,0,308.8,194.5);
	this.instance_27.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",1,1,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},132).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).wait(147));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-61.9,652,518.4);


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

	this.actionFrames = [0];
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(334));

	// Logo
	this.instance = new lib.LogoWhite("synched",0);
	this.instance.setTransform(9.55,13.15,0.2346,0.2346,0,0,0,6.8,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(334));

	// BG
	this.instance_1 = new lib.BG("single",0);
	this.instance_1.setTransform(403.1,150,0.5,0.5,0,0,0,177.1,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(313).to({_off:false},0).to({regX:177,x:88.5},20,cjs.Ease.cubicInOut).wait(1));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.name = "CTA";
	this.CTA.setTransform(59.05,229.25,0.9343,0.9343,0,0,0,83.9,21);
	this.CTA.alpha = 0;
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(50).to({_off:false},0).to({regX:84,regY:20.9,scaleX:0.6209,scaleY:0.6209,x:59.1,y:229.2,alpha:1},17,cjs.Ease.cubicInOut).wait(37).to({scaleX:0.6908,scaleY:0.6908},9,cjs.Ease.quadInOut).to({scaleX:0.6209,scaleY:0.6209},15,cjs.Ease.bounceOut).wait(124).to({scaleX:0.6908,scaleY:0.6908},9,cjs.Ease.quadInOut).to({scaleX:0.6209,scaleY:0.6209},15,cjs.Ease.bounceOut).wait(37).to({x:-248.45},20,cjs.Ease.cubicInOut).wait(1));

	// Text2
	this.instance_2 = new lib.Text2("synched",0);
	this.instance_2.setTransform(9.1,94.1,0.6304,0.6304,0,0,0,4.1,9.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(154).to({_off:false},0).wait(159).to({startPosition:159},0).to({regX:4,x:-298.55,startPosition:179},20,cjs.Ease.cubicInOut).wait(1));

	// Text1
	this.instance_3 = new lib.Text1("synched",0,false);
	this.instance_3.setTransform(8.05,87.55,0.5944,0.5944,0,0,0,2.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(313).to({startPosition:308},0).to({x:-299.5},20,cjs.Ease.cubicInOut).wait(1));

	// Card
	this.instance_4 = new lib.Card_BG("synched",0,false);
	this.instance_4.setTransform(219.8,124.55,0.2009,0.2009,0,0,0,309.1,194.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:309.2,regY:194.8,scaleX:0.2269,scaleY:0.2269,startPosition:72},72,cjs.Ease.quadInOut).to({regX:309.1,regY:194.6,scaleX:0.2009,scaleY:0.2009,startPosition:92},20,cjs.Ease.backOut).wait(221).to({startPosition:299},0).to({regX:308.8,x:-87.8},20,cjs.Ease.cubicInOut).wait(1));

	// BG
	this.instance_5 = new lib.BG("synched",0,false);
	this.instance_5.setTransform(88.5,150,0.5,0.5,0,0,0,177,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(313).to({startPosition:313},0).to({x:-219.05,startPosition:333},20,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-189.9,125,813.4,125);
// library properties:
lib.properties = {
	id: '70B1CA772F6B9E4E80F62148930EF67D',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Chip.png", id:"Chip"},
		{src:"images/Image1_300x250.jpg", id:"Image1_300x250"},
		{src:"images/Image2_300x250.jpg", id:"Image2_300x250"},
		{src:"images/Image3_300x250.jpg", id:"Image3_300x250"},
		{src:"images/Image4_300x250.jpg", id:"Image4_300x250"}
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
an.compositions['70B1CA772F6B9E4E80F62148930EF67D'] = {
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