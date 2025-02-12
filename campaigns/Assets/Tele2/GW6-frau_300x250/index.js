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



(lib.frau = function() {
	this.initialize(img.frau);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,392);


(lib.watch_1 = function() {
	this.initialize(img.watch_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,400);// helper functions:

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


(lib.Watch = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.watch_1();
	this.instance.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Watch, new cjs.Rectangle(0,-30,300,400), null);


(lib.text = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgfBuIAAg9IA/AAIAAA9gAgTAhIgNhMIAAhCIBBAAIAABCIgNBMg");
	this.shape.setTransform(244.6,20.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBoQgQgIgIgRQgIgQAAgaIAAhiIgNAAIAAgyIBUAAIAAAyIgKAAIAABjQgBAJAFAGQAEAFAIAAQAJAAAEgFQAFgGgBgJIAAhjIgLAAIAAgyIBVAAIAAAyIgOAAIAABiQABAmgTATQgTASgoAAQgcAAgRgIg");
	this.shape_1.setTransform(230.675,20.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKBuIAAgyIAMAAIgCgOIgpAAIgDAOIALAAIAAAyIhPAAIAAgyIAKAAIAfh3IgMAAIAAgyICAAAIAAAyIgNAAIAfB3IAKAAIAAAygAALADIgLg7IgNA7IAYAAg");
	this.shape_2.setTransform(211.25,20.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrBuIAAgyIAOAAIAAh3IgOAAIAAgyIBXAAIAAAyIgOAAIAAB3IAOAAIAAAyg");
	this.shape_3.setTransform(196.45,20.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBjQgRgNgIgaQgJgZAAgjQAAg2AWgdQAWgeAmAAQAPAAAKAEQALAFAGAGIABgMIAuAAIAABLIgyAAQgCgPgIgGQgGgHgLAAQgJABgGAFQgHAGgEAOQgEAPAAAWQAAAhAIAPQAHAPARAAQAFAAAFgCQAEAAAEgDIAAgaIgYAAIAAgxIBRAAIAAB/Ig0AAIAAgOQgHAIgKAFQgKAEgOABQgbgBgRgOg");
	this.shape_4.setTransform(182.25,20.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBuIAAgyIAOAAIAAh3IgOAAIAAgyIBXAAIAAAyIgOAAIAAB3IAOAAIAAAyg");
	this.shape_5.setTransform(168.05,20.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhUBuIAAgyIAOAAIAAh3IgOAAIAAgyIBjAAQAUABAQAIQAQAIAJAQQAJAQAAAVQAAAWgJAQQgJAOgQAKQgQAIgUAAIgZAAIAAAdIAPAAIAAAygAgKgSIAPAAQAFAAAEgCQAFgBADgGQADgEAAgIQAAgHgDgEQgDgFgFgCQgEgCgFAAIgPAAg");
	this.shape_6.setTransform(154.425,20.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpBdQgVgUgGgnIgPAAIAAgeIAMAAIAAgEIAAgGIgMAAIAAgfIAPAAQAHgkAVgUQAVgUAiAAQAXAAAQAIQAPAIAIAPQAIAPgBATIguAAQgBgGgFgFQgFgFgKAAQgKAAgGAGQgFAHgDAOIAxAAIAAAfIgzAAIAAAGIAAACIAAACIAzAAIAAAeIgxAAQACAQAFAIQAHAHALAAQAJAAAEgFQAFgFABgGIAvAAQABATgIAOQgHAPgQAJQgPAIgYAAQgjAAgVgVg");
	this.shape_7.setTransform(130.4266,20.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BWQgVgcAAg6QAAg4AVgdQAVgcApAAQAqAAAVAcQAVAdAAA4QAAA6gVAcQgVAdgqgBQgpABgVgdgAgLg5QgFAGgBAOQgCAPAAAWQAAAYACAOQABANAFAHQAEAFAHAAQAIAAAEgFQAFgHACgNQACgOAAgYQAAgWgCgPQgCgOgFgGQgEgFgIgBQgHABgEAFg");
	this.shape_8.setTransform(105.925,20.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8BZQgXgaAAg1QAAgnAKgbQAKgcAVgPQAUgOAeAAQANAAANAEQAOADAKAJQALAJAFAOQAHAOgBAUIgwAAQgDgKgFgGQgEgGgMAAQgLgBgIALQgHALgDAaQAFgGALgFQAJgEAQAAQAUAAANAIQAPAIAIAOQAIAQAAAUQAAAYgKASQgKARgRAKQgSAJgYAAIgCAAQgoAAgXgZgAgMAMQgGACgEAEQAAAWAFAMQAGANAMAAQALAAAFgIQAFgIAAgMQAAgMgGgHQgGgHgLgBQgGAAgFACg");
	this.shape_9.setTransform(88.1,20.1755);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BuIAAgyIAcAAIAAhoIgcAOIAAg1IAugaIApAAIAACpIAaAAIAAAyg");
	this.shape_10.setTransform(72.925,20.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AguBuIAAgyIARAAIAAh3IgQAAIgDAuIgtAAIAAhgIC7AAIAABgIgtAAIgEguIgPAAIAAB3IARAAIAAAyg");
	this.shape_11.setTransform(50.125,20.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhOBuIAAgyIAOAAIAAh3IgOAAIAAgyICdAAIAABTIgvAAIgDghIghAAIAAAlIAgAAIAAAsIggAAIAAAmIAhAAIADgkIAvAAIAABWg");
	this.shape_12.setTransform(31.575,20.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaBuIg5h9IAABLIAPAAIAAAyIhSAAIAAgyIANAAIAAh3IgNAAIAAgyIBSAAIAwBvIAAg9IgOAAIAAgyIBSAAIAAAyIgPAAIAACpg");
	this.shape_13.setTransform(12.55,20.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,251.1,41.2);


(lib.samsung = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjNAdQgHgFAAgJIAAgFIAQAAIAAAGQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQABAAAAABQAFgBABgDIAAgFQgBgDgNgHQgMgGgBgHQgBgEABgEQACgOATAAQAUABAAAPIAAAEIgPAAIAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgFAAgBAFIAAADQABADANAHQAMAGACAHIAAAKQgCAOgUgBQgKABgFgEgAArARIAAgvIAPAAIAAAuQABAFAFAAQAFAAABgFIAAguIAQAAIAAArIAAAEQgCAPgUAAQgTAAgCgPgAgHAdQgHgFAAgKIAAgEIAPAAIAAAGQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAAAABQAFgBABgDIAAgFQgBgEgMgGQgLgGgCgHIAAgIQACgOASAAQAUAAAAAQIAAAEIgPAAIAAgDQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgFAAgBAEIAAADQABADAMAHQANAFABAIQABADgBAHQgCANgTAAQgJAAgFgDgACxAcQgGgEgBgIIAAgDIAAgaIAAgDQACgPATgBQAUABACAPIAAAFIgPAAIAAgDIgBgCQAAgEgGgBQgFABgBAEIAAADIAAAdIACADQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIACgDIAAgLIgHAAIAAgIIAWAAIAAATQgBAIgGAEQgGADgJAAQgJAAgFgDgAgsAeIAAg3IgLA3IgPAAIgLg3IAAA3IgPAAIABg8IAZAAIAHAvIAIgvIAZAAIABA8gAh9AeIgIg3IgJA3IgQAAIALg8IAbAAIALA8gACEAeIgPgyIABAyIgPAAIAAg8IAWAAIAPAxIgBgxIAPAAIAAA8g");
	this.shape.setTransform(21.325,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,6.5);


(lib.price2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF3F3F").s().p("AilGaQhahUggifIhIAAIAAiPIA6AAIABg/Ig7AAIAAiQIBNAAQAgiWBZhRQBahQCLAAQCMAABLA8QBLA8ABB4IixAOQgIgigcgUQgbgVglAAQg2AAgdAgQgeAigNBCIDVAAIAACQIjiAAIAAA/IDiAAIAACPIjYAAQALBKAgAmQAeAlA4AAQAkAAAcgUQAegWAFggICxANQgBB4hLA8QhKA8iMAAQiPAAhahVg");
	this.shape.setTransform(72.2868,12.3693,0.25,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3F3F").s().p("AjoGyQhbg8gLiVIC6gUQAQA1AdAcQAeAbA1AAQCIAAAMj2QhEBLh+AAQhUAAhCgmQhBgmgjhCQgjhEAAhYQAAhgAqhNQAphNBMgsQBMgrBhAAQCtAABjBxQBjBwAADmQAAD+hdCLQhdCLi4AAQh6AAhcg8gAhekOQgeApAAA1QAAA+AaAuQAbAsBHAAQBTAAAvgyQgFh9gfg5Qggg4hGAAQg3AAgfAqg");
	this.shape_1.setTransform(47.2525,12.3505,0.25,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3F3F").s().p("AlbCoIDAgSQAHBMAnArQAmAsBAAAQA3AAAigfQAiggAAg5QAAhEgwgeQgxgdhgAAIAAicQBegCApgeQAqgfAAg8QAAgwgdgZQgdgagtAAQg4AAgkAkQgkAkgMBHIi1gYQACiTBchMQBbhNCSAAQBqAABHAjQBHAiAjA7QAiA7AABIQAACbiOA5QCmA3AACsQAABQglBBQglBChOAnQhOAnh2AAQlfAAAElGg");
	this.shape_2.setTransform(28.0432,12.3505,0.25,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3F3F").s().p("AlbCoIDAgSQAHBMAmArQAnAsBAAAQA2AAAjgfQAiggAAg5QAAhEgxgeQgwgdhhAAIAAicQBfgCApgeQAqgfAAg8QAAgwgdgZQgdgagtAAQg4AAgkAkQgkAkgMBHIi2gYQADiTBchMQBahNCTAAQBqAABGAjQBIAiAiA7QAjA7AABIQAACbiPA5QCnA3AACsQAABQglBBQgmBChOAnQhNAnh2AAQlfAAAElGg");
	this.shape_3.setTransform(8.6974,12.3505,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.3,24.8);


(lib.oldPrice = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF3F3F").s().p("AhdDnQg1g4gMhqIg1AAIAAguIAyAAIAAg7IgyAAIAAguIA3AAQAPhjA0g0QAzgzBSAAQBHAAArAgQArAiAKA+IgwANQgPgvgcgVQgdgXgxAAQhuAAgWCYIC3AAIAAAuIi8AAIAAA7IC8AAIAAAuIi4AAQASClB0AAQAwAAAdgVQAdgWAPgvIAwANQgKA9gsAhQgtAjhGAAQhUAAg0g3g");
	this.shape.setTransform(43.6399,7.1412,0.25,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3F3F").s().p("AiDD2QgsglgFhDIAygMQANAwAYAYQAeAeAzABQBGAAAkhFQAfg5AFhoQg1BHhgAAQhMABgxgvQgxguAAhMQAAhUAxg0QAyg2BVAAQBcAAA2A/QA5BFgBCCQABCRg3BRQg2BRhhAAQhLAAgsgngAhijDQghAkAAA8QAAA8AlAiQAgAcA1AAQAtABAmgWQAggTAYghQgEhYglgvQgkguhBAAQg2AAggAkg");
	this.shape_1.setTransform(27.1442,7.1287,0.25,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3F3F").s().p("AiDD2QgrglgGhDIAygMQANAwAYAYQAeAeAzABQBGAAAlhFQAfg5ADhoQg0BHhgAAQhNABgwgvQgwgugBhMQABhUAwg0QAyg2BVAAQBcAAA2A/QA5BFgBCCQAACRg2BRQg2BRhhAAQhLAAgsgngAhijDQghAkAAA8QAAA8AkAiQAiAcA0AAQAtABAmgWQAggTAXghQgDhYglgvQglguhAAAQg2AAggAkg");
	this.shape_2.setTransform(15.9178,7.1287,0.25,0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3F3F").s().p("AgJESIAAgyIA+AAIAAhrIj6AAIAAg9IDalKIBcAAIAAFVIBVAAIAAAyIhVAAIAABrIA3AAIAAAygAiPBDIDEAAIAAkog");
	this.shape_3.setTransform(4.9602,7.1287,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49,14.3);


(lib.moteris = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.frau();
	this.instance.setTransform(9,5,0.8745,0.8745);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.moteris, new cjs.Rectangle(9,5,144.3,342.8), null);


(lib.Line = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF3F3F").s().p("Ag6AXIAAgtIB1AAIAAAtg");
	this.shape.setTransform(54.3408,0.5851,0.25,0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3F3F").s().p("AvlAUIAAgnIfLAAIAAAng");
	this.shape_1.setTransform(27.9,0.7289,0.25,0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3F3F").s().p("Ag6AXIAAgtIB1AAIAAAtg");
	this.shape_2.setTransform(1.4593,0.5851,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.8,1.2);


(lib.galaxy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjcAtIAJgWIgVgvIANAAIAOAhIANghIANAAIgdBFgAHAATQgIgIAAgKQAAgKAIgJQAIgHALAAQAIAAAHAEQAGAEADAHIgLAFQgBgEgEgDQgEgCgEAAQgHAAgEAEQgEAFAAAGQAAAGAEAFQAEAEAHAAQAFAAADgDQAEgCACgFIAKAFQgDAHgGAFQgHAEgIAAQgMAAgHgIgAFzAOIALgEQAEAHAIAAQAEAAADgCQACgCAAgCQAAgDgEgBIgIgCQgIgCgEgCQgGgEAAgHQAAgGAGgFQAFgEAJAAQAPAAAGALIgKAEQgDgFgIAAQgEAAgCACQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABABIAJACQAIACAEACQAGADAAAIQAAAGgFAFQgGAFgKAAQgQAAgHgNgAFDAOIALgEQAEAHAJAAQAEAAACgCQACgCAAgCQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgJgCQgIgCgEgCQgGgEAAgHQAAgGAGgFQAGgEAIAAQAPAAAGALIgKAEQgDgFgIAAQgDAAgDACQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQABAAAAABIAJACQAIACAEACQAGADAAAIQAAAGgFAFQgGAFgKAAQgQAAgHgNgAERAUQgIgIAAgLQAAgMAIgHQAHgHAKAAQAFAAAFACIAHAFIAAgGIALAAIAAAyIgLAAIAAgGQgDADgEACQgFACgFAAQgKAAgHgHgAEZgKQgEAEAAAHQAAAGAEAFQAFAEAGAAQAGAAAFgEQAEgFAAgGQAAgGgEgFQgFgEgGAAQgGgBgFAFgAC9ARQgJgJAAgNQAAgOAJgJQAKgKANAAQAJABAIAEQAHAEAEAHIgKAHQgGgLgMAAQgJAAgFAGQgGAHAAAIQAAAIAFAGQAGAGAJAAQAHAAAEgDQAFgDACgGIALAFQgEAJgIAFQgHAFgKAAQgOAAgJgKgAB9AVQgHgHAAgJQAAgIAFgHIARgbIANAAIgNAWIADAAQAJAAAFAFQAGAHAAAIQAAAJgGAHQgGAGgKAAQgKAAgGgGgACFgCQgDACAAAFQAAAEADAEQADADAFAAQAEAAADgDQAEgEAAgEQAAgFgEgCQgDgDgEAAQgFAAgDADgAAQATQgHgIAAgKQAAgKAHgJQAIgHALAAQAJAAAGAEQAGAEAEAHIgLAFQgCgEgDgDQgEgCgFAAQgGAAgEAEQgFAFAAAGQAAAGAFAFQAEAEAGAAQAFAAAEgDQADgCACgFIALAFQgDAHgHAFQgGAEgJAAQgLAAgIgIgAhMAUQgIgIAAgLQAAgMAIgHQAHgHAKAAQAFAAAFACIAHAFIAAgGIALAAIAAAyIgLAAIAAgGQgDADgFACQgEACgFAAQgKAAgHgHgAhEgKQgEAEAAAHQAAAGAEAFQAEAEAHAAQAGAAAFgEQAEgFAAgGQAAgGgEgFQgFgEgGAAQgHgBgEAFgAlOAUQgIgIAAgLQAAgMAIgHQAHgHALAAQAKAAAGAHIAAgGIAMAAIAAAyIgMAAIAAgHQgGAIgLAAQgJAAgIgHgAlGgKQgEAFAAAFQAAAHAEAFQAFAEAGAAQAHAAAEgEQAFgFAAgHQAAgFgFgFQgEgFgHABQgGgBgFAFgAmdAUQgIgIAAgLQAAgMAIgHQAHgHAKAAQALAAAGAHIAAgGIALAAIAAAyIgLAAIAAgHQgGAIgLAAQgKAAgHgHgAmVgKQgEAFAAAFQAAAHAEAFQAEAEAHAAQAGAAAFgEQAEgFAAgHQAAgFgEgFQgFgFgGABQgHgBgEAFgAnhARQgJgJAAgNQAAgOAJgJQAJgKAOAAQAKABAIAEQAHAFAEAHIgKAGQgGgLgNAAQgIAAgGAGQgGAHAAAIQAAAIAGAGQAGAGAJAAQAHAAAFgDQAEgEACgGIgUAAIAAgLIAhAAIAAAFQAAAMgIAJQgJAKgOAAQgPAAgJgKgAGlAaIAAgyIAMAAIAAAygAD2AaIAAhAIAMAAIAABAgABlAaIAAgcQAAgGgDgEQgDgDgFAAQgGAAgDADQgDAEAAAHIAAAbIgMAAIAAhAIAMAAIAAAUQAGgHAJAAQAJAAAGAGQAFAFAAAKIAAAegAADAaQgLAAgEgEQgEgFAAgNIAAgRIgJAAIAAgLIAJAAIAAgHIALgJIAAAQIAKAAIAAALIgKAAIAAARQAAAIACABQACACAGAAIAAALgAhvAaIgNgsIgNAsIgMAAIgTg/IANAAIAMAsIANgsIAMAAIANArIAMgrIAMAAIgSA/gAj2AaIgNgRIgMARIgOAAIATgaIgSgYIAOAAIAMAQIALgQIAOAAIgSAYIATAagAloAaIAAhAIAMAAIAABAgAGmgfQgCgCAAgEQAAgDACgCQACgCADAAQAEAAACACQACACAAADQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(49.125,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.3,9);


(lib.BGPrice = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AlYAAIFYlYIFZFYIlZFZg");
	this.shape.setTransform(99.5229,48.6585,0.25,0.25,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnyHyIAAvjIPlAAIAAPjg");
	this.shape_1.setTransform(49.85,49.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.2,99.7);


(lib.Price = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BGPrice (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AGpFjIAAg4IA4AAIAAA4g");
	var mask_graphics_1 = new cjs.Graphics().p("ACwGmIAAk1IE2AAIAAE1g");
	var mask_graphics_2 = new cjs.Graphics().p("AgcHeIAAoGIIGAAIAAIGg");
	var mask_graphics_3 = new cjs.Graphics().p("AjEILIAAqxIKyAAIAAKxg");
	var mask_graphics_4 = new cjs.Graphics().p("AlIIuIAAs3IM4AAIAAM3g");
	var mask_graphics_5 = new cjs.Graphics().p("AmsJKIAAueIOeAAIAAOeg");
	var mask_graphics_6 = new cjs.Graphics().p("An0JeIAAvoIPpAAIAAPog");
	var mask_graphics_7 = new cjs.Graphics().p("AoMJrIAAwaIQZAAIAAQag");
	var mask_graphics_8 = new cjs.Graphics().p("AobJyIAAw1IQ3AAIAAQ1g");
	var mask_graphics_9 = new cjs.Graphics().p("AogJ1IAAxAIRBAAIAARAg");
	var mask_graphics_10 = new cjs.Graphics().p("AofJ0IAAw+IQ/AAIAAQ+g");
	var mask_graphics_11 = new cjs.Graphics().p("AoZJxIAAwyIQzAAIAAQyg");
	var mask_graphics_12 = new cjs.Graphics().p("AoQJsIAAwfIQhAAIAAQfg");
	var mask_graphics_13 = new cjs.Graphics().p("AoFJnIAAwLIQLAAIAAQLg");
	var mask_graphics_14 = new cjs.Graphics().p("An8JiIAAv4IP5AAIAAP4g");
	var mask_graphics_15 = new cjs.Graphics().p("An0JeIAAvpIPpAAIAAPpg");
	var mask_graphics_16 = new cjs.Graphics().p("AnyJbIAAvjIPlAAIAAPjg");
	var mask_graphics_194 = new cjs.Graphics().p("AnyJbIAAvjIPlAAIAAPjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:48.0582,y:35.4568}).wait(1).to({graphics:mask_graphics_1,x:48.5625,y:42.2048}).wait(1).to({graphics:mask_graphics_2,x:49.0255,y:47.7874}).wait(1).to({graphics:mask_graphics_3,x:49.3584,y:52.3161}).wait(1).to({graphics:mask_graphics_4,x:49.6198,y:55.8491}).wait(1).to({graphics:mask_graphics_5,x:49.8481,y:58.5998}).wait(1).to({graphics:mask_graphics_6,x:49.979,y:60.5788}).wait(1).to({graphics:mask_graphics_7,x:47.698,y:61.8717}).wait(1).to({graphics:mask_graphics_8,x:46.3674,y:62.6403}).wait(1).to({graphics:mask_graphics_9,x:45.8727,y:62.9453}).wait(1).to({graphics:mask_graphics_10,x:45.9995,y:62.8472}).wait(1).to({graphics:mask_graphics_11,x:46.5856,y:62.5086}).wait(1).to({graphics:mask_graphics_12,x:47.4145,y:62.0379}).wait(1).to({graphics:mask_graphics_13,x:48.3739,y:61.4729}).wait(1).to({graphics:mask_graphics_14,x:49.251,y:60.9755}).wait(1).to({graphics:mask_graphics_15,x:49.9307,y:60.5805}).wait(1).to({graphics:mask_graphics_16,x:49.85,y:60.35}).wait(178).to({graphics:mask_graphics_194,x:49.85,y:60.35}).wait(1).to({graphics:null,x:0,y:0}).wait(20));

	// Line
	this.instance = new lib.Line("synched",0);
	this.instance.setTransform(8.85,57.1,0.0655,1,0,0,0,0,0.6);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({regX:0.1,scaleX:1},16,cjs.Ease.backOut).wait(161).to({startPosition:0},0).to({_off:true},1).wait(20));

	// oldPrice
	this.instance_1 = new lib.oldPrice("synched",0);
	this.instance_1.setTransform(36.05,140.35,1,1,0,0,0,24.4,7.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:36.9,y:55.55},16,cjs.Ease.backOut).wait(178).to({startPosition:0},0).to({_off:true},1).wait(20));

	// price2
	this.instance_2 = new lib.price2("synched",0);
	this.instance_2.setTransform(49.45,165.75,1,1,0,0,0,40.6,12.3);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:50.3,y:80.95},16,cjs.Ease.backOut).wait(38).to({startPosition:0},0).to({scaleX:1.214,scaleY:1.214,x:50.35,y:81},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:50.3,y:80.95},11,cjs.Ease.bounceOut).wait(46).to({startPosition:0},0).to({scaleX:1.214,scaleY:1.214,x:50.35,y:81},5,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:50.3,y:80.95},11,cjs.Ease.bounceOut).wait(57).to({startPosition:0},0).to({_off:true},1).wait(20));

	// BGPrice
	this.instance_3 = new lib.BGPrice("synched",0);
	this.instance_3.setTransform(93.3,71.4,0.0558,0.0558,0,0,0,49.2,108.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:49.6,regY:108.5,scaleX:1,scaleY:1,x:49.6,y:129.55},16,cjs.Ease.backOut).wait(178).to({startPosition:0},0).to({_off:true},1).wait(20));

	// samsung
	this.instance_4 = new lib.samsung("synched",0);
	this.instance_4.setTransform(23.3,27.2,1,1,0,0,0,21.3,3.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({y:3.2},16,cjs.Ease.backOut).wait(170).to({startPosition:0},0).to({_off:true},1).wait(20));

	// galaxy
	this.instance_5 = new lib.galaxy("synched",0);
	this.instance_5.setTransform(50.6,37.85,1,1,0,0,0,49.1,4.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({y:13.85},16,cjs.Ease.backOut).wait(167).to({startPosition:0},0).to({_off:true},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-2.4,118.19999999999999,128.3);


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

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA9B6IAAgyICjgFIAAA3gAgXB6IAAgvIBEgDIAAAygAhQB6IAAjMIAwgHIAADTgAiZB6IAAgsIA8gBIAAAtgAjLB6IAAi7IAqgGIAADBgAkNB6IAAgoIA1gCIAAAqgAk5B6IAAisIAlgFIAACxgAmGB6IAAh5IAjgCIAAB7gABlAiQAhgfAOgPQAKgMAEgMQAEgMgFgJQgCgFgGgDQgFgCgIAAIAAg0QATgDAQAEQAQAEALALQAKAKAFANQAFAOgBAOQgCAbgQAZQgPAZglAkIhQACgAECA6IAAgmIgUgUIAUgTIAAgmICjAAIAABzgAFggaQgGAEgCAHQgEAHAAAIQAAAOAGAIQAFAIAKAAQAHAAAEgGIAAAFIANAAIAAgXIADAAIAAgJIgYAAIAAAJIAHAAIAAAMIgFAAQgKAAAAgSQAAgIACgFQACgFAGAAQAFAAACAIIAMgBQAAgIgFgFQgFgFgKAAQgHAAgGADgAEqAZQAGAFAKAAQAKAAAHgGQAEgGAAgIQAAgIgEgFQgFgFgJAAQgFAAgEADIABgLIANAAIAAAGIAMAAIAAgTIglAAIgDAgIANACQACgDAEAAQADAAACACQABACAAADQAAAEgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgHAAgBgIIgNAAQAAALAGAFgAkNAMIAjgDIAAAqIgjACgAgXgIIAtgEIAAAxIgtACgAmkgjIBfgNIAAAmIhfAKgAkNg4IA1gHIAAApIg1AGgABOhVQARgaAkgHIAAA1QgKAEgDAIQgGAKACAWIgzAEQgCgqARgagAgXhbIBEgJIAAAxIhEAHg");
	this.shape.setTransform(34.95,223.6,0.7151,0.7151,0,0,0,-32.3,-5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(207));

	// text
	this.instance = new lib.text("synched",0);
	this.instance.setTransform(150.05,30.05,1.1756,1.1756,0,0,0,125.5,20.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:20.7,scaleX:0.7216,scaleY:0.7216,x:152.4,y:27.15,alpha:1},14,cjs.Ease.backOut).wait(35).to({startPosition:0},0).to({regX:125.6,regY:20.8,scaleX:0.8047,scaleY:0.8047,x:152.5,y:27.25},6).to({regX:125.5,regY:20.7,scaleX:0.7216,scaleY:0.7216,x:152.4,y:27.15},12,cjs.Ease.bounceOut).wait(47).to({startPosition:0},0).to({regX:125.6,regY:20.8,scaleX:0.8047,scaleY:0.8047,x:152.5,y:27.25},6).to({regX:125.5,regY:20.7,scaleX:0.7216,scaleY:0.7216,x:152.4,y:27.15},12,cjs.Ease.bounceOut).wait(60).to({startPosition:0},0).to({alpha:0},14).wait(1));

	// price
	this.instance_1 = new lib.Price("synched",0,false);
	this.instance_1.setTransform(57.85,116.05,0.7996,0.7996,0,0,0,49.9,65);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(180).to({startPosition:180},0).to({alpha:0,startPosition:194},14).wait(1));

	// moteris
	this.instance_2 = new lib.moteris();
	this.instance_2.setTransform(389.05,243.05,1,1,0,0,0,82.7,196.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:239.05},14,cjs.Ease.cubicInOut).wait(159).to({alpha:0},14).wait(1));

	// Watch
	this.instance_3 = new lib.Watch();
	this.instance_3.setTransform(-70.7,138.95,0.4477,0.4477,0,0,0,150.1,200.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:139.3},14,cjs.Ease.quadInOut).wait(176).to({alpha:0},14).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3F3F").s().p("A5BU0MAAAgpnMAyDAAAMAAAApng");
	this.shape_1.setTransform(149.475,125.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(207));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(12.1,117.8,447.59999999999997,277);
// library properties:
lib.properties = {
	id: '1C6D79318DB9C34A8ECD6CB080F3B70B',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FF3F3F",
	opacity: 1.00,
	manifest: [
		{src:"images/frau.png", id:"frau"},
		{src:"images/watch_1.png", id:"watch_1"}
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
an.compositions['1C6D79318DB9C34A8ECD6CB080F3B70B'] = {
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