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



(lib.BG_300x400_big = function() {
	this.initialize(img.BG_300x400_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,706,800);// helper functions:

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


(lib.Shape = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(12,43,55,0.847)").s().p("EgmQA5rMAAAhkSIJeoKQFdktG4hiQHChhHAB9MAosALgMAAABmvg");
	this.shape.setTransform(258.5,673.1809);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.6,304.1,489.79999999999995,738.1999999999999);


(lib.pilnai = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDFDFD").s().p("AjVBfQgKgDgGgHQgGgIgDgJIAVgCQACAEAEAFQAEADAFACQAFACAHAAQAOAAAHgHQAIgHgBgNIAAgSIAAAAQgEAGgEAEQgFAEgGACQgHADgHAAQgOgBgLgGQgKgHgHgMQgFgOgBgQQABgQAFgNQAHgMAKgIQALgHAOAAQAHAAAHACQAGADAFAEQAFAFADAFIAAgRIAWAAIAABtQAAAQgHAJQgGAKgMAFQgLAFgOAAQgNgBgKgEgAjPggQgGAEgEAIQgDAJAAALQAAAMADAIQAEAJAGADQAIAFAIAAQAJAAAHgFQAHgEAEgIQAEgJAAgLQAAgLgEgIQgEgJgHgEQgHgFgJAAQgIAAgIAFgApvBdQgGgFAAgKQAAgHAFgHQADgFAHgFIAAhsIAWAAIAABtQgJAHgDAEQgDAEAAAFQAAADABACQACACAFAAIADAAIAEgBIABAQIgHABIgIAAQgKABgHgGgALEBiIgHgBIACgSIAJAAIAHgBQADgBACgCIAEgIIAFgMIgrhtIAYAAIAVA8IAHASIACAHIACgHIAGgSIAWg8IAXAAIgxCAQgDAHgFAGQgEAFgGADQgHADgIAAIgHAAgAEABiIAAiYIAVAAIAAAQIABAAQADgFAFgEQAFgEAGgDQAHgCAHAAQAPAAAKAHQAKAIAHAMQAFANAAAQQAAARgFANQgHANgKAHQgKAHgPAAQgHAAgHgCQgGgCgFgFQgFgEgDgFIAAA7gAEjggQgHAFgEAIQgDAIgBALQABAMADAIQAEAJAHAEQAGAGAKAAQAJgBAGgEQAHgFADgIQAEgJAAgMQAAgLgEgJQgDgIgHgEQgGgFgJAAQgKAAgGAFgASWBWIAJg2IAXAAIgPA2gARAA1QgJgEgGgHQgHgIgBgLIAVgBQACAJAGAEQAGAFALAAQAKAAAGgEQAGgFAAgGQAAgGgEgDQgFgDgGgCIgTgEQgQgDgHgHQgIgIAAgMQAAgKAFgHQAGgHAJgEQAKgFAMAAQAMAAAJAFQAKAEAGAHQAFAIABAKIgVABQAAgIgGgEQgGgGgJAAQgKABgGAEQgFAEAAAHQgBAFAFAEQAEACAIACIASAFQAQADAHAGQAIAIAAALQAAALgGAHQgFAJgLADQgJAFgNAAQgNAAgKgFgAPGAyQgMgHgHgNQgGgNgBgQQABgRAGgNQAHgMAMgIQALgHAQAAQAPAAANAHQALAIAHAMQAGANAAARQAAAQgGANQgHANgLAHQgNAIgPAAQgQAAgLgIgAPRggQgHAEgDAJQgEAJgBALQABALAEAJQADAIAHAFQAGAEAKABQAKgBAGgEQAGgFAFgIQADgKAAgKQAAgLgDgJQgFgIgGgFQgGgFgKAAQgJAAgHAFgAHiAyQgNgHgGgNQgGgNAAgQQAAgRAGgMQAHgNAMgIQALgHAPAAQALAAAJAEQAJAEAHAIQAHAGAEAMQAEAKAAAMIAAAGIhQAAQAAAJADAIQAEAIAHAEQAHAEAJAAQAIAAAFgCQAFgCAEgEQADgDACgGIAVABQgCALgHAHQgHAIgJAEQgKAEgNABQgQgBgLgHgAHjgLIA4AAQgDgbgZgBIgCAAQgSAAgIAcgABrA1QgJgEgGgHQgHgIgBgLIAVgBQACAJAGAEQAGAFALAAQAKAAAGgEQAGgFAAgGQAAgGgEgDQgFgDgGgCIgTgEQgQgDgHgHQgIgIAAgMQAAgKAFgHQAGgHAJgEQAKgFAMAAQAMAAAJAFQAKAEAGAHQAFAIABAKIgVABQAAgIgGgEQgGgGgJAAQgKABgGAEQgFAEAAAHQgBAFAFAEQAEACAIACIASAFQAQADAIAGQAHAIAAALQAAALgGAHQgFAJgLADQgJAFgNAAQgNAAgKgFgAgOAyQgMgHgHgNQgGgNgBgQQABgRAGgNQAHgMAMgIQALgHAPAAQAPAAANAHQALAIAHAMQAGANAAARQAAAQgGANQgHANgLAHQgNAIgPAAQgPAAgLgIgAgEggQgGAEgDAJQgEAJgBALQABALAEAJQADAIAGAFQAGAEAKABQAKgBAGgEQAGgFAFgIQADgKAAgKQAAgLgDgJQgFgIgGgFQgGgFgKAAQgJAAgHAFgAnQAyQgMgHgGgNQgGgNgBgQQABgRAGgMQAGgNAMgIQAMgHAPAAQALAAAJAEQAJAEAHAIQAHAGADAMQAEAKAAAMIAAAGIhQAAQAAAJAEAIQAEAIAGAEQAIAEAJAAQAHAAAFgCQAGgCADgEQAEgDACgGIAUABQgBALgIAHQgGAIgKAEQgKAEgMABQgRgBgLgHgAnPgLIA4AAQgCgbgagBIgBAAQgTAAgIAcgANbA3QgGgCgFgFQgFgEgDgGIgBAAIAAARIgVAAIAAiYIAWAAIAAA7QAEgFAEgEQAFgEAGgDQAHgCAIAAQAOAAAKAHQALAIAFAMQAHANAAAQQAAARgHANQgFANgLAHQgKAHgOAAQgIAAgHgCgANUggQgGAFgEAIQgEAIABALQgBAMAEAIQAEAJAGAEQAIAGAJAAQAIgBAIgEQAGgFAEgIQADgJAAgMQAAgLgDgJQgEgIgGgEQgIgFgIAAQgJAAgIAFgAs8A1QgIgEgFgHQgFgIAAgLQAAgJAEgGQADgGAGgCQAGgDAIgCIAQgEIAQgBQAGgBADgCQADgBgBgFIAAgBQABgFgDgEQgDgEgFgDQgFgCgGAAQgIAAgFACQgFADgDADQgDAEgBAFIgVgBQABgKAGgIQAGgHAKgEQAKgFANAAQAJAAAIACQAIADAGAFQAGAEADAIQADAGAAAJIAABKIgWAAIAAgPIAAAAQgCAEgEAEQgEAEgHADQgGACgJAAQgLAAgJgEgAsLADIgHABIgIACIgIABIgLADQgFABgEAEQgCADAAAGQgBAFADADQADAEAFACQAEACAGAAQAJgBAHgDQAHgDADgHQACgFAAgHIAAgNIgDACgAheAxQgHgHgBgNIAAhBIgTAAIAAgSIATAAIAAgdIAWAAIAAAdIAWAAIAAASIgWAAIAAA+QAAAGADACQADADAGAAIAFAAIAFAAIABASIgHAAIgHABQgPgBgIgGgAKPA3IgmgyIgLALIAAAnIgWAAIAAiYIAWAAIAABaIABAAIAtgvIAbAAIgtAwIAwA9gAGAA3IAAhtIAVAAIAAASIABAAQADgJAGgFQAHgFAKAAIAFAAIADAAIAAAVIgEAAIgHgBQgGAAgGADQgFADgDAGQgDAFAAAJIAABAgAkiA3IAAhBQAAgNgGgHQgGgGgLgBQgIAAgGAEQgGADgDAGQgDAHAAAKIAAA+IgXAAIAAhtIAWAAIAAASQAEgIAGgFQAKgHANAAQALAAAJAGQAJAEAFAJQAFAKAAAPIAABDgAoyA3IAAhtIAVAAIAAASIABAAQADgJAGgFQAIgFAJAAIAGAAIADAAIAAAVIgEAAIgIgBQgGAAgFADQgGADgCAGQgDAFgBAJIAABAgArTA3IAAhtIAWAAIAABtgAt+A3IAAhBQAAgNgGgHQgGgGgMgBQgHAAgGAEQgGADgDAGQgDAHAAAKIAAA+IgXAAIAAhtIAVAAIAAASQAFgIAGgFQAKgHANAAQAMAAAIAGQAJAEAFAJQAFAKAAAPIAABDgAv6A3IAAiYIAWAAIAACYgAwvA3IAAhtIAXAAIAABtgAy1A3IAAiYIA5AAQAQAAAMAGQAMAGAGALQAHAKAAAPQAAAPgHALQgGALgMAGQgNAFgQAAIghAAIAAA4gAydhPIgBA8QBGAIAAglQAAgggzAAIgSABgAplhMQgEgEAAgFQAAgGAEgEQAEgEAGAAQAFAAAEAEQAFAEAAAGQAAAFgFAEQgEAEgFAAQgGAAgEgEgArShMQgEgEAAgFQAAgGAEgEQAEgEAGAAQAFAAAEAEQAFAEAAAGQAAAFgFAEQgEAEgFAAQgGAAgEgEgAwthMQgFgEAAgFQAAgGAFgEQADgEAHAAQAFAAAEAEQAEAEAAAGQAAAFgEAEQgEAEgFAAQgHAAgDgEg");
	this.shape.setTransform(111.15,6.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-3.2,241.20000000000002,19.9);


(lib.patalpos = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDFDFD").s().p("Ak8BkIAAibIAWAAIAAASIABAAIAHgJQADgEAHgDQAGgEAKAAQAOAAALAHQALAHAGAOQAGANAAARQAAASgGANQgGANgKAHQgMAIgOAAQgJAAgHgEQgGgDgEgEIgHgJIgBAAIAAA8gAkYghQgIAFgCAJQgEAJAAALQAAAMAEAIQADAJAHAFQAGAFAJAAQAKAAAHgFQAGgFAEgJQADgJABgLQgBgLgDgJQgEgIgGgFQgHgGgKAAQgJAAgGAFgAshBkIAAibIAVAAIAAASIACAAIAGgJQAEgEAGgDQAHgEAKAAQAOAAALAHQALAHAGAOQAFANAAARQAAASgFANQgHANgKAHQgLAIgOAAQgKAAgGgEQgHgDgEgEIgGgJIgBAAIAAA8gAr+ghQgHAFgDAJQgDAJgBALQABAMADAIQADAJAHAFQAHAFAJAAQAKAAAGgFQAHgFADgJQAEgJAAgLQAAgLgEgJQgDgIgHgFQgGgGgKAAQgJAAgHAFgAKgA4QgJgEgFgIQgEgIAAgLQAAgJADgHQAEgGAGgDQAHgDAHgCIAQgDIAQgCQAHgBACgBQADgCABgEIAAgBQAAgGgDgEQgDgFgEgCQgFgCgIAAQgGAAgGACQgFACgDAEQgEAEgCAEIgUgFQACgKAHgGQAIgHAJgDQAJgEALAAQAIAAAIACQAIACAGAFQAHAEAEAIQAEAHAAAMIAABKIgWAAIAAgPIAAAAQgDAEgEAEQgFAEgGADQgHADgJAAQgLAAgJgEgALRAEIgHACIgJABIgGABIgMADQgFACgEADQgCAEAAAFQAAAGACADQADAEAEACQAFACAGAAQAKAAAGgEQAHgEADgFQADgGABgHIAAgOQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAgAFyA0QgMgHgHgNQgHgNAAgSQAAgQAHgOQAHgNAMgHQAMgIAPAAQAQAAAMAIQAMAHAHANQAGAOABAQQgBASgGANQgHANgMAHQgMAIgQAAQgPAAgMgIgAF8ggQgGAFgEAJQgDAJAAAKQAAALADAJQAEAJAGAFQAHAGAKAAQAKAAAIgGQAGgFADgJQAEgJAAgLQAAgKgEgJQgDgJgGgFQgIgGgKAAQgKAAgHAGgAgsA4QgKgEgGgHQgHgHgBgLIAVgDQACAJAHAEQAGAFAKAAQAKAAAHgFQAFgEABgHQAAgFgDgEQgFgDgIgCIgTgEQgPgEgIgHQgIgIAAgMQAAgKAFgIQAGgHAKgEQAKgFAMAAQANAAAJAEQAIAEAFAHQAGAGACAJIgUAEQgBgHgGgEQgFgFgKAAQgKAAgFAEQgHAEAAAHQAAAGAFADQAEAEAJACIASAEQAPADAIAHQAIAIAAAMQgBAKgFAIQgHAIgKAEQgJAFgOAAQgMAAgKgEgAioA0QgMgHgHgNQgGgNgBgSQABgQAGgOQAHgNAMgHQAMgIAQAAQAQAAAMAIQAMAHAGANQAHAOAAAQQAAASgHANQgGANgMAHQgMAIgQAAQgQAAgMgIgAidggQgHAFgDAJQgDAJAAAKQAAALADAJQADAJAHAFQAGAGALAAQAKAAAHgGQAHgFADgJQAEgJAAgLQAAgKgEgJQgDgJgHgFQgHgGgKAAQgLAAgGAGgAnZA4QgIgEgFgIQgFgIAAgLQAAgJAEgHQADgGAHgDQAGgDAHgCIAQgDIARgCQAHgBACgBQADgCAAgEIAAgBQAAgGgCgEQgDgFgFgCQgEgCgIAAQgHAAgGACQgFACgDAEQgDAEgCAEIgVgFQADgKAHgGQAHgHAKgDQAJgEALAAQAIAAAIACQAHACAHAFQAGAEAEAIQAFAHAAAMIAABKIgXAAIAAgPIAAAAQgDAEgEAEQgEAEgHADQgHADgIAAQgLAAgKgEgAmnAEIgIACIgIABIgHABIgLADQgGACgDADQgDAEAAAFQAAAGACADQADAEAFACQAFACAGAAQAJAAAHgEQAHgEADgFQADgGAAgHIAAgOQAAAAgBAAQAAABAAAAQgBAAgBAAQAAABgBAAgAqVA4QgJgEgEgIQgFgIgBgLQAAgJAEgHQAEgGAGgDQAGgDAIgCIAQgDIAQgCQAHgBADgBQACgCAAgEIAAgBQAAgGgCgEQgDgFgEgCQgFgCgHAAQgIAAgFACQgFACgDAEQgEAEgBAEIgVgFQACgKAIgGQAGgHAKgDQAKgEALAAQAHAAAIACQAIACAGAFQAHAEAEAIQAEAHAAAMIAABKIgWAAIAAgPIgBAAQgCAEgEAEQgFAEgGADQgHADgJAAQgLAAgJgEgApjAEIgIACIgJABIgHABIgLADQgGACgDADQgCAEAAAFQgBAGADADQADAEAFACQAFACAFAAQAKAAAHgEQAGgEAEgFQACgGAAgHIAAgOQAAAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAgAD0A2QgJgFgEgKQgGgJABgOIAAhHIAWAAIAABEQAAAMAGAHQAHAHALAAQAHAAAHgDQAFgDAEgHQADgGAAgJIAAhCIAXAAIAABwIgWAAIAAgVQgEAKgHAGQgKAHgOAAQgLAAgJgFgAofAzQgJgIABgOIAAhCIgRAAIAAgSIARAAIAAgcIAWAAIAAAcIAXAAIAAASIgXAAIAABAQAAAGADAEQADADAGAAIAFgBIAFAAIAEASIgIABIgIAAQgPAAgJgHgAMJA5IAAhwIAXAAIAABwgAJgA5IAAhIQAAgMgGgFQgHgFgJAAQgGAAgGADQgFADgDAFQgCAFAAAHIAABHIgXAAIAAhKQABgJgHgGQgGgFgIAAQgHAAgFADQgFADgEAFQgDAGAAAIIAABFIgWAAIAAhwIAVAAIAAAUQADgGADgEQAGgGAGgDQAHgDAIAAQAMAAAIAIQAGAGADAJQADgGAEgEQAFgGAHgEQAIgDAJAAQAKAAAIAEQAJAFAEAJQAGAIAAANIAABLgACuA5IAAhEQABgMgHgHQgHgHgKAAQgIAAgGADQgGAEgEAGQgDAGAAAKIAABBIgXAAIAAhwIAWAAIAAAUQAFgJAHgFQAJgIAOAAQALAAAKAFQAIAFAFAKQAFAJAAAPIAABGgAlwA5IAAiYIAXAAIAACYgAMKhNQgEgEAAgFQAAgGAEgEQAFgDAFAAQAGAAAEADQAEAEAAAGQAAAFgEAEQgEAEgGAAQgFAAgFgEg");
	this.shape.setTransform(76.45,1.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-8.4,160.5,20);


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
	mask.graphics.p("AoWCuIAAlbIQtAAIAAFbg");
	mask.setTransform(53.475,17.425);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAhIgFgRIgcAAIgGARIgGAAIAXhBIAFAAIAXBBgAANAMIgNglIgMAlIAZAAg");
	this.shape.setTransform(67.725,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUAhIAAgBIgFgQIgcAAIgGARIgGAAIAXhBIAFAAIAXBBgAANAMIgNglIgMAlIAZAAg");
	this.shape_1.setTransform(89.45,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAdQgGgEAAgIIAAgDIAGAAIAAADQAAAMAPAAQAOAAAAgLQAAgIgGgDIgSgIQgKgFAAgKQABgHAEgFQAGgFAHAAIABABQAIgBAFAFQAHAEAAAHIAAAEIgGAAIAAgCQAAgGgDgDQgEgEgHAAQgOAAAAAMQABAHAHAEIASAIQAJAEAAAKQAAAIgGAEQgGAFgJAAQgIAAgGgFg");
	this.shape_2.setTransform(96.5,27.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAhIgagiIAZgfIAGAAIgZAfIAbAigAgUAhIAAhBIAGAAIAABBg");
	this.shape_3.setTransform(82.625,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAhIgQgcIgPAAIAAAcIgFAAIAAhBIATAAQAIAAAGAFQAGAFAAAIIAAADQAAAGgEAEQgEAFgHAAIARAdgAgPABIAOAAQAOAAAAgMIAAgEQAAgFgEgDQgEgEgGAAIgOAAg");
	this.shape_4.setTransform(75.225,28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAhIAAhBIAUAAQAJAAAFAFQAGAFABAIIAAADQgBAHgGAFQgFAEgJAAIgNAAIAAAcgAgNABIANAAQAPAAgBgMIAAgEQABgMgPAAIgNAAg");
	this.shape_5.setTransform(61.1,28);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRARIAAgiIAgAAIAAAFIgaAAIAAAZIAdAAIAAAEg");
	this.shape_6.setTransform(67.525,20.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRACIAAgDIAiAAIAAADg");
	this.shape_7.setTransform(67.55,15.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAcQgGgEAAgIIAAggQAAgHAGgFQAGgEAJgBQAKABAGAEQAGAFAAAHIAAAgQAAAIgGAEQgHAGgJAAQgJAAgGgGgAgLgZQgEAEAAAFIAAAgQAAAGAEADQAFAEAGAAQAHAAAFgEQAEgDAAgGIAAggQAAgFgEgEQgFgDgHAAQgGAAgFADg");
	this.shape_8.setTransform(95.075,18.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAhIAAhBIAFAAIAAA8IAcAAIAAAFg");
	this.shape_9.setTransform(88.55,18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAdQgGgFAAgHIAAgDIAGAAIAAADQAAAMAOAAQAQAAAAgMQAAgIgIgCIgSgIQgJgFAAgKQAAgHAFgFQAFgFAIAAIABABQAHgBAGAEQAGAFAAAHIABABIAAADIgGAAIABgDQgBgFgEgEQgEgDgFAAIgBAAQgOAAAAAMQABAHAGAEIATAIQAJAEAAAKQAAAIgGAEQgGAFgJAAQgIAAgGgFg");
	this.shape_10.setTransform(81.5,18.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAhIgPgcIgOAAIgBAcIgGAAIAAhBIAUAAQAIAAAGAFQAGAEAAAIIAAAEQAAAGgEAEQgEAEgGACIARAcgAgPAAIAOAAQAGABAEgDQAFgDAAgGIAAgEQAAgMgPgBIgOAAg");
	this.shape_11.setTransform(74.6,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgCAhIgWhBIAGAAIASA6IAUg6IAFAAIgWBBg");
	this.shape_12.setTransform(60.325,18.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUAhIgFgQIgdAAIgFAQIgGAAIAXhBIAFAAIAXBBgAANAMIgNgmIgMAmIAZAAg");
	this.shape_13.setTransform(90.175,9.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOAdQgGgFAAgHIAAgDIAGAAIAAADQAAANAOAAQAPAAAAgNQAAgHgHgDIgSgJQgJgEAAgKQAAgHAFgFQAGgFAHAAIABAAQAHAAAGAEQAGAFABAHIAAABIAAADIgGAAIAAgCQAAgFgEgEQgEgDgGAAQgNAAAAALQAAAIAHACIASAJQAJAEAAAKQAAAHgGAFQgGAFgJAAQgIAAgGgFg");
	this.shape_14.setTransform(104.875,9.1225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAdQgHgFABgIIAAgwIAFAAIAAAxQAAAFAEAEQAFADAGAAQAHAAAFgDQAEgEAAgFIAAgxIAGAAIAAAwQAAAIgHAFQgFAEgKAAQgJAAgFgEg");
	this.shape_15.setTransform(97.55,9.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_16.setTransform(84.525,9.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAhIgfg2IAAA2IgFAAIAAhBIAEAAIAgA3IAAg3IAGAAIAABBg");
	this.shape_17.setTransform(78.55,9.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAhIAAhBIAFAAIAAA8IAcAAIAAAFg");
	this.shape_18.setTransform(71.55,9.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAhIAAhBIAFAAIAABBg");
	this.shape_19.setTransform(66.075,9.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCAhIgWhBIAGAAIASA6IAUg6IAFAAIgWBBg");
	this.shape_20.setTransform(60.325,9.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00D4B5").s().p("AhUBIQgHgFAAgJIAAiLQAAgFADgEQAEgGAGgBQAHgCAGAEICdBoIiHBag");
	this.shape_21.setTransform(9.2,15.6795);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0A96A6").s().p("AiGAlIDzigQAEgDAFAAQAHAAAFAFQAFAFAAAHIAACLQAAAJgIAFIh+BTg");
	this.shape_22.setTransform(34.375,12.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAABYQgEAAgEgCIh/hUICHhZICIBZIh/BUQgDACgFAAg");
	this.shape_23.setTransform(19.6,26.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,107,34.9), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#021526").s().p("AgUAoQgJgHABgNIAAgBIAMAAQAAAKAFAEQAFAFAHAAQAHAAAEgEQAEgEAAgHQAAgHgDgEQgEgEgJgDQgMgEgHgGQgHgGAAgLQAAgKAHgIQAIgHAMAAQAMAAAIAJQAIAIAAALIgNAAQAAgIgEgFQgEgFgIAAQgGAAgEAFQgEAEAAAGQAAAGAFAEQAEAEAJAEQAMADAHAGQAGAHAAALQAAALgHAHQgIAHgNAAQgLAAgKgIg");
	this.shape.setTransform(128.3737,10.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#021526").s().p("AgWAmQgIgJAAgQIAAgZQAAgQAIgJQAIgKAOAAQAOAAAIAKQAJAJAAAQIAAAZQAAAQgJAJQgIAKgOAAQgOAAgIgKgAgNgeQgFAGABAMIAAAZQgBAMAFAGQAFAHAIAAQAIAAAFgHQAFgGAAgMIAAgZQAAgMgFgGQgFgGgIAAQgIAAgFAGg");
	this.shape_1.setTransform(121.25,10.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#021526").s().p("AgRAoQgHgHAAgNIAAgBIANAAQAAAKADAEQAEAEAFAAQAFAAADgFQAEgEAAgJIAAhBIAMAAIAABBQAAANgHAIQgHAHgKAAQgLAAgHgHg");
	this.shape_2.setTransform(114.1483,11.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#021526").s().p("AgFAuIAAhbIALAAIAABbg");
	this.shape_3.setTransform(109.625,10.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#021526").s().p("AgUAmQgIgJAAgQIAAgZQAAgQAIgJQAIgKANAAQANAAAHAIQAIAHAAAPIAAAAIgMAAQgBgKgEgFQgEgFgHAAQgIAAgEAHQgEAGAAAMIAAAZQAAAMAEAGQAFAHAHAAQAIAAADgFQAEgFABgKIAMAAIAAABQAAANgIAIQgHAIgNAAQgNAAgIgKg");
	this.shape_4.setTransform(104.6,10.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#021526").s().p("AAVAuIgGgXIgdAAIgGAXIgOAAIAdhbIALAAIAdBbgAgLANIAXAAIgMgoIAAAAg");
	this.shape_5.setTransform(97.525,10.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#021526").s().p("AAZAuIAAgjIACgjIAAAAIgXBGIgIAAIgVhGIgBAAIACAjIAAAjIgOAAIAAhbIARAAIAVBKIAWhKIARAAIAABbg");
	this.shape_6.setTransform(89.2,10.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#021526").s().p("AARAuQgCgCgBgEIgBgJIAAgIQAAgIgDgEQgDgFgGAAIgRAAIAAAoIgNAAIAAhbIAcAAQANAAAHAHQAHAGAAANQAAAHgDAGQgEAFgGACQAHADADAFQADAGAAAIIAAAIIABAIQABAEACACIAAABgAgQgCIAPAAQAHAAAEgFQADgEAAgIQAAgIgDgEQgEgEgHAAIgPAAg");
	this.shape_7.setTransform(81,10.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#021526").s().p("AgWAmQgIgJAAgQIAAgZQAAgQAIgJQAIgKAOAAQANAAAJAKQAJAJAAAQIAAAZQAAAQgJAJQgIAKgOAAQgOAAgIgKgAgNgeQgFAGABAMIAAAZQgBAMAFAGQAFAHAIAAQAIAAAFgHQAFgGAAgMIAAgZQAAgMgFgGQgFgGgIAAQgIAAgFAGg");
	this.shape_8.setTransform(73.45,10.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#021526").s().p("AgZAuIAAhbIAzAAIAAAKIgmAAIAAAfIAhAAIAAAJIghAAIAAApg");
	this.shape_9.setTransform(66.825,10.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#021526").s().p("AASAuIgjhDIAABDIgMAAIAAhbIAMAAIAjBDIAAAAIAAhDIAMAAIAABbg");
	this.shape_10.setTransform(59.35,10.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#021526").s().p("AgFAuIAAhbIALAAIAABbg");
	this.shape_11.setTransform(53.775,10.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#021526").s().p("AgVAnQgHgHgBgPIAAg/IANAAIAAA/QAAAKAEAFQAFAFAHAAQAHAAAFgFQAFgFAAgKIAAg/IAMAAIAAA/QAAAPgIAHQgIAIgNAAQgMAAgJgIg");
	this.shape_12.setTransform(45.65,11.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#021526").s().p("AAVAuIgGgXIgdAAIgGAXIgOAAIAdhbIALAAIAdBbgAgLANIAXAAIgMgoIAAAAg");
	this.shape_13.setTransform(38.375,10.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#021526").s().p("AgFAuIAAhbIALAAIAABbg");
	this.shape_14.setTransform(33.125,10.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#021526").s().p("AgUAnQgKgJABgQIAAgbQAAgQAIgJQAJgJAMAAQAPAAAHAIQAIAHAAANIAAAAIgNAAQAAgJgEgEQgEgFgJAAQgHAAgFAGQgEAGgBAMIAAAbQAAALAGAHQAFAGAIAAQAGAAAEgCQADgDACgDIAAgVIgQAAIAAgJIAeAAIAAAhQgEAGgHAEQgHAFgLAAQgOAAgIgJg");
	this.shape_15.setTransform(27.6,10.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#021526").s().p("AgVAnQgHgHgBgPIAAg/IANAAIAAA/QAAAKAEAFQAFAFAHAAQAIAAAEgFQAFgFgBgKIAAg/IAOAAIAAA/QAAAPgJAHQgIAIgNAAQgNAAgIgIg");
	this.shape_16.setTransform(20.25,11.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#021526").s().p("AAVAuIgGgXIgdAAIgGAXIgOAAIAdhbIALAAIAdBbgAgLANIAXAAIgMgoIAAAAg");
	this.shape_17.setTransform(12.975,10.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#021526").s().p("AgcAuIAAhbIAZAAQAOAAAJALQAJALAAASIAAAMQAAARgJALQgJALgOAAgAgPAkIAMAAQAIAAAGgIQAGgIAAgNIAAgNQAAgNgGgIQgGgIgIAAIgMAAg");
	this.shape_18.setTransform(5.825,10.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_TEXT, new cjs.Rectangle(0,0,133.8,21.1), null);


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
	this.shape.graphics.f("#00D4B6").s().p("AoYD6QhoAAhJhJQhJhJAAhoIAAAAQAAhnBJhJQBJhJBoAAIQxAAQBoAABJBJQBJBJAABnIAAAAQAABohJBJQhJBJhoAAg");
	this.shape.setTransform(78.675,24.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_BG, new cjs.Rectangle(0,0,157.4,50), null);


(lib.biuru = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDFDFD").s().p("Ao0BgQgHgGAAgJQAAgIAFgHQAEgGAIgFIAAgUQgFALgHAFQgKAHgOAAQgLAAgJgFQgIgEgGgKQgEgKAAgOIAAhGIAWAAIAABDQAAANAHAHQAGAHALAAQAIAAAFgDQAHgEADgGQADgHABgJIAAhBIAWAAIAABwIgMAJQgFAFABAGQAAADACACQABACAEAAIAFAAIAEgCIAFAPIgIADIgKABQgLAAgHgFgAOjA0QgMgIgHgNQgGgNgBgRQABgRAGgNQAHgNAMgIQAMgHAQAAQAQAAAMAHQAMAIAGANQAHANAAARQAAARgHANQgGANgMAIQgMAHgQAAQgQAAgMgHgAOughQgHAGgDAJQgDAIAAALQAAALADAJQADAJAHAFQAGAFALAAQAKAAAHgFQAHgFADgJQAEgJAAgLQAAgLgEgIQgDgJgHgGQgHgFgKAAQgLAAgGAFgAHEA3QgJgEgFgHQgFgIAAgLQAAgKADgGQAFgGAFgDQAHgEAIgBIAQgDIAQgCQAGgBADgCQADgCAAgEIAAAAQAAgGgCgFQgDgEgEgCQgGgDgHAAQgHAAgFADQgGACgDADQgEAEgBAEIgVgEQADgKAHgHQAHgHAJgDQAKgDALAAQAIAAAHACQAIACAHAEQAHAEAEAIQADAIAAALIAABLIgVAAIAAgQIgBAAQgDAFgEAEQgEAEgGACQgIADgJAAQgKAAgJgEgAH1ADIgHACIgJACIgHAAIgLADQgGACgDAEQgDADAAAGQAAAFADAEQADADAEACQAFACAGAAQAJAAAHgDQAGgEAEgGQADgGAAgGIAAgPQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAgADrA0QgMgHgHgOQgHgNAAgRQAAgRAHgNQAGgNAMgIQAMgHAQAAQAKAAAJADQAJAEAHAHQAIAHADALQAEAKAAAPIAAAHIhRAAQABAKAEAHQAEAIAGAEQAIAFAJAAQAHAAAFgCQAGgCADgEQAEgEACgFIAUAEQgCAJgHAHQgGAHgKAEQgJAEgNAAQgQAAgMgHgADrgLIA4AAQgDgbgZgCIgCAAQgTAAgHAdgABoA0QgKgHgHgNQgGgNAAgTQAAgRAGgNQAHgNAKgHQALgHAOAAQAKAAAHADQAGADAEAFIAGAIIABAAIAAg5IAWAAIAACYIgVAAIAAgSIgCAAIgHAJQgDAFgHADQgHADgJAAQgOAAgLgHgAB2ghQgHAFgDAJQgEAJAAAKQAAAMAEAJQADAJAHAFQAGAFAKAAQAJAAAHgFQAGgFAEgJQADgJABgMQgBgLgDgIQgEgJgGgFQgHgFgJAAQgKAAgGAFgAiNA3QgJgEgFgHQgFgIAAgLQAAgKADgGQAFgGAFgDQAHgEAIgBIAQgDIAQgCQAGgBADgCQADgCAAgEIAAAAQAAgGgCgFQgDgEgEgCQgGgDgHAAQgHAAgFADQgGACgDADQgEAEgBAEIgVgEQADgKAHgHQAHgHAJgDQAKgDALAAQAIAAAHACQAIACAHAEQAHAEAEAIQADAIAAALIAABLIgVAAIAAgQIgBAAQgDAFgEAEQgEAEgGACQgIADgJAAQgKAAgJgEgAhcADIgHACIgJACIgHAAIgLADQgGACgDAEQgDADAAAGQAAAFADAEQADADAEACQAFACAGAAQAJAAAHgDQAGgEAEgGQADgGAAgGIAAgPQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAj3A4QgJgEgGgHQgGgIgCgKIAVgEQACAJAHAFQAGAEAKAAQALAAAGgEQAHgFgBgGQAAgGgDgDQgEgEgIgCIgUgEQgPgDgIgHQgIgIAAgMQAAgLAGgHQAFgIAKgEQAKgEANAAQAMAAAJAEQAJADAGAHQAFAHACAJIgVADQgBgGgFgFQgGgEgKAAQgJAAgHAEQgFAEgBAHQABAFAEAEQAEADAJACIASAEQAQAEAIAGQAHAIABAMQAAAKgHAIQgFAIgLAFQgLAEgNAAQgNAAgKgDgAvKA4QgHgDgEgFIgGgJIgCAAIAAASIgWAAIAAiYIAXAAIAAA5IABAAIAGgIQAEgFAGgDQAHgDAKAAQAOAAAKAHQALAHAGANQAGANAAARQAAATgGANQgGANgLAHQgKAHgOAAQgKAAgGgDgAvQghQgGAFgEAJQgDAIAAALQAAAMADAJQAEAJAGAFQAHAFAJAAQAKAAAHgFQAHgFADgJQAEgJgBgMQABgKgEgJQgDgJgHgFQgGgFgLAAQgJAAgHAFgAstA1QgJgEgEgKQgGgKAAgOIAAhGIAXAAIAABDQAAANAGAHQAHAHALAAQAHAAAHgDQAFgEAEgGQAEgHgBgJIAAhBIAXAAIAABwIgWAAIAAgWQgEALgIAFQgJAHgNAAQgMAAgJgFgANbA5IAAhJQAAgMgGgFQgGgFgJAAQgHAAgGADQgEADgDAFQgDAGAAAHIAABHIgWAAIAAhLQAAgJgGgFQgGgGgJAAQgGAAgGADQgFADgEAGQgCAFAAAJIAABFIgXAAIAAhwIAWAAIAAATQACgFADgEQAGgGAHgDQAGgEAIAAQAMAAAJAIQAGAGADAKQACgGAEgEQAFgHAIgDQAIgEAJAAQAKAAAIAFQAIAEAFAJQAFAJAAANIAABLgAKjA5IAAhwIAWAAIAABwgAJNA5IgrhwIAYAAIAXA+IAGAVIACAIIADgIIAGgVIAWg+IAYAAIgqBwgAGEA5IAAhwIAWAAIAABwgAFQA5IAAiYIAXAAIAACYgAAkA5IAAhEQAAgNgHgHQgGgHgLAAQgIAAgFAEQgGADgEAGQgDAHAAAJIAABCIgWAAIAAhwIAVAAIAAAUQAFgKAHgFQAIgHAOAAQALAAAJAFQAJAFAFAJQAFAKAAAOIAABHgAmPA5IAAhwIAWAAIAAASIABAAQAEgKAHgFQAHgFAKAAIAGAAIAEABIAAAVIgFgBIgHAAQgHAAgHADQgGADgDAGQgDAGAAAHIAABEgAnCA5IAAhwIAWAAIAABwgArEA5IAAhwIAWAAIAAASIABAAQAEgKAHgFQAIgFAKAAIAEAAIAFABIAAAVIgFgBIgHAAQgIAAgFADQgHADgCAGQgEAGAAAHIAABEgAtzA5IAAhwIAWAAIAABwgAKkhNQgFgEAAgGQAAgFAFgEQAEgEAGAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgGAAgEgEgAGFhNQgFgEAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAFQAAAGgFAEQgEAEgGAAQgFAAgEgEgAD7hNQgEgEAAgGQAAgFAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgGAAgEgEgAnAhNQgFgEAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAFAEgBAFQABAGgFAEQgEAEgGAAQgFAAgEgEgAtxhNQgFgEAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAFAEgBAFQABAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(94.25,4.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6,202.4,20.2);


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

	// Layer_2
	this.instance = new lib.BG_300x400_big();
	this.instance.setTransform(65,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65,0,353,400);


(lib._8eur = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDFDFD").s().p("AHFCXIBQkqIAgAAIhQEqgAAGBqQgTgMgKgWQgLgVAAgdQAAgbALgWQAKgWASgMQAUgNAaAAQAQAAAPAGQAPAFAMAMQAMAMAHASQAGARAAAYIAAAMIiEAAQAAAQAGAMQAGAOAMAGQAMAHAQAAQAKAAAJgDQAJgDAFgGQAHgGACgJIAjAHQgEAPgLALQgKAMgRAGQgPAHgVAAQgcAAgTgMgAAHACIBbAAQgCgpgrgDQgkADgKApgAofBqQgUgMgLgWQgLgWAAgcQAAgcALgWQALgVAUgMQATgNAaAAQAaAAAUANQAUAMAKAVQALAWAAAcQAAAcgLAWQgKAWgUAMQgUAMgaAAQgaAAgTgMgAoNghQgMAIgFAPQgGANAAATQAAASAGAOQAFAPAMAJQALAIAQAAQARAAALgIQALgJAGgPQAFgOABgSQgBgTgFgNQgGgPgLgIQgLgJgRAAQgQAAgLAJgAkNBsQgUgJgLgQQgLgQAAgUQgBgQAHgNQAHgOAMgIQAMgJAOgCIAAgBQgTgEgMgQQgLgQAAgUQAAgTAKgPQAKgQATgIQARgJAYAAQAXAAASAJQARAIALAQQALAPgBATQAAAUgMAQQgLAQgTAEIAAABQAOACANAJQALAIAHAOQAHANgBAQQAAAUgLAQQgLAQgUAJQgVAJgZAAQgaAAgVgJgAj4AGQgMAFgGALQgHAKAAAMQAAANAGAJQAGAKAMAFQALAFAQAAQAPAAALgFQAMgFAGgKQAGgJAAgNQAAgMgHgKQgGgLgMgFQgLgGgOAAQgPAAgLAGgAj1hnQgKAFgFAJQgFAIAAAMQAAAMAFAJQAFAJAKAFQAKAFANAAQAMAAAKgFQAJgFAGgJQAGgJgBgMQABgMgGgIQgFgJgKgFQgKgFgMAAQgNAAgKAFgADABsQgPgIgIgPQgIgQAAgYIAAh0IAkAAIAABwQAAAVALALQALALASAAQAMAAAKgFQAKgFAGgLQAFgKABgQIAAhsIAkAAIAAC5IgjAAIAAgiQgIAQgMAJQgQALgVAAQgTAAgOgIgArhBsQgPgIgHgPQgJgQAAgYIAAh0IAlAAIAABwQAAAVAKALQALALASAAQANAAAKgFQAKgFAFgLQAGgKAAgQIAAhsIAkAAIAAC5IgjAAIAAgiQgIAQgMAJQgPALgWAAQgSAAgPgIgAMjByIAAh4QAAgTgLgIQgKgJgPAAQgMAAgIAFQgJAFgEAJQgEAIgBAMIAAB1IgkAAIAAh7QAAgPgKgJQgJgJgPAAQgKAAgKAFQgIAFgFAJQgFAJgBAOIAAByIglAAIAAi5IAjAAIABAiQAEgKAGgHQAIgKALgFQAMgFAMAAQAUAAAOAMQAKAKAFAQQAEgJAGgHQAJgLAMgGQANgFAOAAQARAAANAHQAOAHAIAPQAIAOAAAVIAAB8gAFhByIAAi5IAjAAIAAAeIACAAQAEgPANgIQAMgJARAAIAIAAIAHAAIAAAjIgIgBIgLgBQgMAAgKAGQgKAFgGAJQgEAKAAAMIAABwgAtIByIAAhxQAAgUgKgLQgLgLgSAAQgMAAgLAFQgJAFgGALQgFAKAAAOIAABuIglAAIAAi5IAjAAIAAAiQAIgQAMgJQAPgMAWAAQATAAAPAJQAOAIAIAQQAIAPAAAXIAAB1gANfgEIAAgQIAzgyIAMgOIAIgLQADgGAAgHQAAgHgEgGQgDgFgGgDQgFgDgIAAQgIAAgGAEQgGADgDAGQgEAGABAIIgWAAQAAgNAHgLQAGgKALgGQAKgFAPAAQANAAAKAFQAKAGAHAJQAFAJABANQgBAIgCAHQgDAIgIAKQgHAJgNAMIgeAfIAAABIBCAAIAAASg");
	this.shape.setTransform(136.7,7.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.7,-7.7,192,30.3);


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

	// _eur
	this.instance = new lib._8eur("synched",0);
	this.instance.setTransform(135.55,129.4,1.3395,1.3395,0,0,0,135.5,29.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({regY:29.7,scaleX:1,scaleY:1,x:135.5,y:129.25,alpha:1},19,cjs.Ease.backOut).wait(42).to({startPosition:0},0).to({regX:135.4,scaleX:1.1624,scaleY:1.1624,x:135.4},6,cjs.Ease.quadInOut).to({regX:135.5,scaleX:1,scaleY:1,x:135.5},12,cjs.Ease.bounceOut).wait(101).to({startPosition:0},0).to({_off:true},1).wait(18));

	// patalpos
	this.instance_1 = new lib.patalpos("synched",0);
	this.instance_1.setTransform(136.1,91.9,1,1,0,0,0,75.7,17.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:71.9,alpha:1},19,cjs.Ease.cubicInOut).wait(50).to({startPosition:0},0).to({scaleX:1.3699,scaleY:1.3699,y:71.95},6,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:71.9},12,cjs.Ease.bounceOut).wait(103).to({startPosition:0},0).to({_off:true},1).wait(18));

	// biuru
	this.instance_2 = new lib.biuru("synched",0);
	this.instance_2.setTransform(136.15,64.55,1,1,0,0,0,94.2,17.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({y:44.55,alpha:1},19,cjs.Ease.cubicInOut).wait(50).to({startPosition:0},0).to({scaleX:1.2443,scaleY:1.2443,y:44.6},6,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,y:44.55},12,cjs.Ease.bounceOut).wait(105).to({startPosition:0},0).to({_off:true},1).wait(18));

	// pilnai
	this.instance_3 = new lib.pilnai("synched",0);
	this.instance_3.setTransform(136.05,37.2,1,1,0,0,0,111,17.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:17.2,alpha:1},19,cjs.Ease.cubicInOut).wait(50).to({startPosition:0},0).to({regY:17.1,scaleX:1.2162,scaleY:1.2162,x:136.1,y:17.1},6,cjs.Ease.quadInOut).to({regY:17.2,scaleX:1,scaleY:1,x:136.05,y:17.2},12,cjs.Ease.bounceOut).wait(107).to({startPosition:0},0).to({_off:true},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-19.5,346.8,151.5);


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
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(104.95,5.4,1.9739,1.9739,0,0,0,53.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-28.9,211.1,68.8);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ON:14,OFF:26};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(13).call(this.frame_38).wait(1));

	// CTA_TEXT
	this.instance = new lib.CTA_TEXT();
	this.instance.setTransform(78.65,23.9,1,1,0,0,0,66.9,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({regX:67,regY:10.7,scaleX:1.1264,scaleY:1.1264,x:78.75,y:23.95},11,cjs.Ease.cubicInOut).wait(1).to({regX:66.9,regY:10.6,scaleX:1,scaleY:1,x:78.65,y:23.9},12,cjs.Ease.cubicInOut).wait(1));

	// cta_BG
	this.instance_1 = new lib.cta_BG();
	this.instance_1.setTransform(78.7,24.9,1,1,0,0,0,78.7,24.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({scaleX:1.0673,scaleY:1.0673,x:78.75,y:24.95},11,cjs.Ease.cubicInOut).wait(1).to({scaleX:1,scaleY:1,x:78.7,y:24.9},12,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-1.6,167.89999999999998,53.4);


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

	this.actionFrames = [0,198];
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
	this.frame_198 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(198).call(this.frame_198).wait(18));

	// Text
	this.instance = new lib.Text("synched",0,false);
	this.instance.setTransform(148.5,249.85,1,1,0,0,0,135.5,79.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(183).to({startPosition:183},0).to({alpha:0,startPosition:194},11).wait(1));

	// Logo
	this.instance_1 = new lib.Logo("synched",0);
	this.instance_1.setTransform(149.8,-288.2,1,1,0,0,0,104,33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:81.8},23,cjs.Ease.cubicInOut).wait(181).to({startPosition:0},0).to({alpha:0},11).wait(1));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.name = "CTA";
	this.CTA.setTransform(148.8,351.2,1.4522,1.4522,0,0,0,78.7,25);
	this.CTA.alpha = 0;
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(44).to({_off:false},0).to({scaleX:1.0959,scaleY:1.0959,x:149.8,y:351.45,alpha:1},12,cjs.Ease.backOut).wait(13).to({regX:78.8,regY:25.1,scaleX:1.2946,scaleY:1.2946,x:149.9,y:351.55},8,cjs.Ease.quadInOut).to({regX:78.7,regY:25,scaleX:1.0959,scaleY:1.0959,x:149.8,y:351.45},12,cjs.Ease.bounceOut).wait(51).to({regX:78.8,regY:25.1,scaleX:1.2946,scaleY:1.2946,x:149.9,y:351.55},8,cjs.Ease.quadInOut).to({regX:78.7,regY:25,scaleX:1.0959,scaleY:1.0959,x:149.8,y:351.45},12,cjs.Ease.bounceOut).wait(44).to({alpha:0},11).wait(1));

	// Shape
	this.instance_2 = new lib.Shape("synched",0);
	this.instance_2.setTransform(137,401.3,1,1,0,0,0,244.9,298.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:98.2},23,cjs.Ease.cubicInOut).wait(181).to({startPosition:0},0).to({y:398.2},11,cjs.Ease.cubicInOut).wait(1));

	// BG
	this.instance_3 = new lib.BG("synched",0);
	this.instance_3.setTransform(122,300,1,1,0,0,0,237,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(204).to({_off:false},0).to({alpha:1},11).wait(1));

	// BG
	this.instance_4 = new lib.BG("synched",0);
	this.instance_4.setTransform(122,300,1,1,0,0,0,237,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:172},215).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(55.7,-151,339.8,1296.5);
// library properties:
lib.properties = {
	id: '3E0686DCF9A49D46AECD5179005DF11C',
	width: 300,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG_300x400_big.jpg", id:"BG_300x400_big"}
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
an.compositions['3E0686DCF9A49D46AECD5179005DF11C'] = {
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