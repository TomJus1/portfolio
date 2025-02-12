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



(lib._1_lines = function() {
	this.initialize(img._1_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,477,202);


(lib._2_lines = function() {
	this.initialize(img._2_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,225);


(lib._3_lines = function() {
	this.initialize(img._3_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,178);


(lib._4_lines = function() {
	this.initialize(img._4_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,477,202);


(lib.Geltonas = function() {
	this.initialize(img.Geltonas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,247,333);


(lib.Line5_lines = function() {
	this.initialize(img.Line5_lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,143);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,82);


(lib.Melynas = function() {
	this.initialize(img.Melynas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,337);


(lib.Meskutis = function() {
	this.initialize(img.Meskutis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,116);


(lib.Meskutis2 = function() {
	this.initialize(img.Meskutis2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,252,347);// helper functions:

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


(lib.uzkandis = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,82);


(lib.meskutis2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Meskutis2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,347);


(lib.meskutis = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Meskutis();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.meskutis, new cjs.Rectangle(0,0,101,116), null);


(lib.line4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._4_lines();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,477,202);


(lib.line3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._3_lines();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,178);


(lib.line2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._2_lines();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,540,225);


(lib.line1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._1_lines();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,477,202);


(lib.Line_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Line5_lines();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324,143);


(lib.ClipGroup_13 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A2BI4IAAxwMAsDAAAIAARwg");
	mask.setTransform(141,56.85);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/ENQgLAAgKgDQgbgEgQgaQgKgOAHghIAiigQAoi6AMgzIAAgBIABgBQAGgaATgPQATgPAdgBQASgDAYADQAbABAPAVQAJAMAHAWIB7F3QAGASACAKQACAQgGALQgKATgcALQgfAJgRgDQgXgCgLgKQgMgLgKgdIgSgyIhGAEIgOA/QgGAYgVANQgSAMgZAAgAhcjOIgBABQgIAjgsDKIgcCBIgGAfQgFAaAFAKQAOAUAUADQAMADAHAAQAVABAQgJQATgKAEgTIAPhFQACgGAFAAIBSgFQAFAAADAFIAUA4QAJAbAJAIQAHAFARACIABAAIALAAQAOgBAQgFQAWgIAIgPQADgGgCgNIgGgYIh7lzIgBgEQgGgUgHgKQgMgOgTgBIAAAAQgUgCgUACIAAAAQgxADgKArgAgnAZQgDAAgDgDQgCgDAAgDIAZiAQABgGAHAAQAGAAABAFIAfB9QABAEgDADQgCADgEAAIg3ADgAgeAJIAkgCIgThSg");
	this.shape.setTransform(219.1032,41.8682);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkEIQgOgMgDgTIg2mtQgCgSALgPQAMgPASgCIDKgaQARgCAOALQAOAKACARIAFAlQACARgLANQgLAOgRACIhkANIAKBSIBlgNQARgDANALQAOAKACASIAFAjQACASgLANQgKANgRADIhmANIAKBRIBmgNQAQgDAHAHQAGAFgBAQQgBALABAFQACAKAHAHIALAKQADACAAADQACARgKAOQgLANgRACIjQAaQgPAAgNgJgAiCjnQgMABgIAKQgHAKABANIA2GsQACANAKAHQAKAIAMgBIDKgaQAKgBAHgIQAGgHAAgKIgKgJQgQgRADgcIAAgJIgLAAIhuAOQgDABgCgCQgDgCAAgDIgLhhQgBgDACgDQACgCADgBIBtgNQAKgCAHgIQAHgJgCgLIgEgjQgBgKgJgIQgIgGgLABIhtAOQgHABgBgIIgNhhQAAgDACgCQADgDACAAIBsgOQALgBAHgJQAHgIgCgLIgEglQgBgKgIgGQgHgHgKAAIgEAAg");
	this.shape_1.setTransform(186.0267,46.934);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhJECQgQgLgFgSIhllgQgGgSgEgXQgKgyA2gRQAQgGA+gRIAqgLIAAAAIAGgBQAJgEAUABQAiAAAcAPQAuAcASA0QARA1gTA0QAlARAZAnQAcAsgBA5QAAAxgYAmQgcAug1APIgQAEIg5APIgBAAIg4AOQgFACgHAAQgSgBgPgMgAhPjvQgvAMgeAKQgpAOAHAkQAEAXAGAPIAAABIBlFhQAEAMALAJQALAJANAAIAIgBIA5gPIAAAAIBJgTQAvgNAZgoQAVgjABgsQAAgugWgoQgYgsgpgPQgDAAgBgEIAAgGQAUgxgPgyQgPgxgrgZQgXgOgeAAIgBAAQgOAAgMADIgEABIAAAAg");
	this.shape_2.setTransform(153.2538,53.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhFABQgShsBCgNQAagGAUAOQAfAVALBCQAIAygCAeQgBAegMAQQgOASgbAEIgIAAQg7AAgVh6gAgShsQgVAEgJAPQgSAbAKA+QAUB2A2gIQAVgDAKgNQAUgcgPhZQgJg9gbgSQgLgHgNAAIgMABg");
	this.shape_3.setTransform(65.85,72.885);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBHQgEAAgCgFIghhwQgCgGAGgDIADAAIAsgNQAUgGATAOQATAOAIAcQARA8g0APIgpAOgAgFg3IgpALIAeBkIAigMIAAAAQAVgGAGgOQAGgPgHgYQgGgUgMgMQgLgJgMAAIgIABg");
	this.shape_4.setTransform(155.5527,62.6122);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTA9QgFAAgBgFIgcheIABgFQABgCADgBIANgFQATgGAKgCQARgCAMAGQARAIAIAYQALAhgLATQgOAXg0AJgAgFgtQgIABgSAGIgHACIAYBTQApgIAJgQQAJgOgKgcQgGgTgMgFQgFgDgIAAIgJABg");
	this.shape_5.setTransform(149.3625,42.2882);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOBGQgEAAgBgEIgohuQgDgFAGgDIApgOQAbgJASARQAIAGAFAKIAIATIADAFQAMAegJAUQgGAOgSAGIgtASgAgKg3IgiAMIAjBhIAngPQALgEAFgKQAHgPgKgYIgCgGQgKgXgIgHQgIgIgLAAQgGAAgIADg");
	this.shape_6.setTransform(28.3061,69.6047);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1DyIhylJQgOgggMgqQgFgPALgRQAJgQAOgFQBJgeAwgQQAngMAcAAQAdgBAaAMQAfAPAcAfQAbAfAOAlQAQAqAAArQABAwgUAcQgRAXgYAPQgSAKggALIgnAPIAkBsQAGAUgJARQgOAZg0ANQgKADgHAAQgmAAgLgggAgnj4QgsAOhMAfQgKAEgHAMQgIANADAKQAMApANAfIBzFKQAGAQAPAFQAOAEAPgEQAvgNAMgTQAHgMgFgQIgmhxQgCgGAGgCIAYgJIAUgIQAfgLAQgJQAYgOAOgUQATgagBgtQgBgngPgoQgNgigagdQgZgdgegOQgWgLgaAAQgaAAgmAMg");
	this.shape_7.setTransform(26.6098,77.849);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhYEVQgdgCgSgNQgTgNgCgVIgQi7IAAgBQgLhtgFhNQgCgIAAgRQgBgaAGgTQAMgsA/gJQAXgDAtgCIABAAIAUgBQAPgBATABIAKABQAtAGAiAiQAnAoAJA+QAHAygHAmQgKA2gkAYIAGAPQAPAhASAbIAMAQQAfAqAEAMQAGAYgSAWQgOAQgXAKQgXAKgWgCQghgBgTgWQgYgZgYgwIAEA4QABATgNAPQgLALgSAGQgTAHgVAAgAgpkDQgsACgXADQg1AIgKAiQgIAdAGAiIAAABIAQC7IAAABIAQC7QACAOAOAKQAPAJAXABQATABASgFQASgFAJgKQAKgKgBgMIgIhjQgBgHAHgBQAGgCACAGQAfBLAgAiQAQARAZABQAUABATgIQAUgIALgOQANgQgEgQQgCgIgegoIgMgRQgSgagRglIgJgUQgDgHAGgDQAjgUAKgzQAGglgHgvQgHg4gjgkQgfgggogFIgJgBgAgxgdIgKh6QAAgHAHgBIApgDQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAUABANAYQAMAVABAdQAAAXgJARQgLAUgTACIgMABIgBAAIgcACQgIAAAAgHgAgriQIAJBrIAUgCIABAAIALgBQANgBAHgQQAGgMgBgSQAAgWgIgSQgKgTgNgBIgCAAg");
	this.shape_8.setTransform(253.0729,35.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Aj8EsQhMAAg1g5Qg1g5gShmQgThpAghJQAfhJBMgXQBXgcA/AnQAwAeAdBDQAUAuAJA5IACAMIgSkNQgBgPALgMQALgMAUgFQAbgHAZAHQAcAIALAXIBMCeIA4ioQAHgWAZgLQAYgKAbADQAXADAOALQAPALABAQIAKCcIAEgIQAIgMANgCIBFgSQANgCALAHQALAHADAOIAJAsQADANgIALQgHALgNADIhFARIgHABQgJAAgJgGQgLgHgDgOIgGgeIAODRQACAXgWAOQgSANgbACQgbACgUgKQgXgLgBgWIgJiJIgNAlQgMAmgkACQgQABgOgJQgNgJgJgSIgIgRIgKgUIAKCNQABAWgVAOQgTAOgdAAQgVAAgRgJQgagMgBgbIgEguQgBBWgyA0QgUAWghANQghANglACgAlJiyQhGAWgeBFQgdBFASBkQAXB9BGAzQAuAgA5gCQAjgCAfgMQAegNATgTQAigkAKg0QAKg0gNhPQgJg3gTgsQgbhAgugcQghgVgrAAQgeAAgiALgAgvkMQgOAEgJAHQgKAJAAALIAbGLQABATAUAJQAQAIAVgBQAWgBAOgKQAQgKgCgPIgKiVQgBgIAJgBQAJgDAEAHIAVArQAPAeAagCQAbgBAKgeIAPgvIACgDQAFgFAHACQAGADAAAGIAKCTQACAQAQAHQAQAIAYgCQAYgCAPgKQAQgLgBgPIgbmKQgBgNgNgIQgLgGgRgCQgXgDgTAIQgWAIgFASIg9C2QAAAEgFABQgEAAgCgEIhUisQgHgNgPgIQgNgGgSAAQgMAAgKADgAGeiBIhEARQgJABgEAIQgFAHACAIIAJArQABAJAHAEQAHAFAIgCIBFgRQAIgCAFgHQAFgHgCgIIgJgrQgCgJgHgEQgGgEgFAAg");
	this.shape_9.setTransform(91.8523,67.364);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(7.1,7.7,265.09999999999997,97.5), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgvA1QgJgGgCgLIgJgqQgCgLAGgJQAGgJALgDIBJgSIAFAAQAKAAAHAGQAHAGACAJIAKArQACAKgGAJQgGAJgLACIhKATIgGAAQgHAAgHgEg");
	mask.setTransform(11.525,11.0868);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD01B","#FFD01B","#FDB920","#F58023","#EF3E23","#EF3E23"],[0,0.286,0.392,0.62,0.824,1],-9.9,-21.8,7,15.3).s().p("AhyglICghKIBFCVIihBKg");
	this.shape.setTransform(11.5,11.225);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(4.7,5.4,13.7,11.4), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A2BI4IAAxwMAsDAAAIAARwg");
	mask.setTransform(141,56.85);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0,0,0,0), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AhWEOQgbgBgRgLQgQgLgDgTQgHhUgLhrIgSi/QgGgeAJgeQALgoA7gJQASgDAygDIBCgBQAsAGAgAeQAmAjAJA8QAKBJgSAuQgNAfgbAPIAKAVQAPAjAUAcIAMARQAdAkADAOQAGAUgQAUQgMAQgVAKQgVAJgVgBQgdgBgSgUQgjgjgghNIAJBlQABAQgMANQgLALgTAGQgQAGgSAAIgHgBgAg0ifIAKB9IAqgEQAQgCAJgSQAHgPAAgVQgBgagLgUQgLgWgRAAIgDAAg");
	mask.setTransform(22.5577,29.5571);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD01B","#FFD01B","#FFC71E","#FCAF21","#F68A23","#F05123","#EF3E23","#EF3E23"],[0,0.22,0.29,0.42,0.592,0.8,0.847,1],2.6,-40.9,-1.6,26.7).s().p("AjgEOIAjo1IGeAaIgjI1g");
	this.shape.setTransform(22.5,29.575);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(3.8,2.5,37.6,54.1), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AghEGQgMgIgFgOIhzlHQgNgfgMgqQgFgPALgQQAJgPANgFQBDgcA1gSQAngMAcAAIAAAAQAbAAAZALQAgAPAbAeQAaAfAOAkQAQAqABAqQAAAvgTAcQgQAWgZAPQgRAKggALIgnAPIAkBsQAGAVgJAPQgOAYgzAOQgJACgIAAQgRAAgMgIgAAIiJIgjANIAkBkIApgQQAMgFAFgKQAGgQgKgZIgCgFQgJgWgJgJQgKgIgKAAQgGAAgJADg");
	mask.setTransform(30.2331,34.775);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD01B","#FFD01B","#FDB920","#F58023","#EF3E23","#EF3E23"],[0,0.173,0.302,0.576,0.824,1],-6.5,-32.1,4.1,20.3).s().p("Akwj4IHohjIB5JUInoBjg");
	this.shape.setTransform(30.45,34.775);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(11,7.8,38.5,54), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhFD9QgNgLgEgPIhllhQgDgCgIglQgHgrAugQQAcgJAygNIAvgMQAHgEAVAAIABAAQAhAAAYAPQAuAbAQA1QAQA0gWAzQArAPAaAvQAXApAAAxQgBAvgWAkQgaArgzAOIgQAFIg5AOIg5AOQgEACgGAAIgBAAQgPAAgNgKgAAXAfIgoANIAeBnIAkgNQAVgGAHgPQAGgPgHgZQgGgUgMgLQgMgMgOAAIgJABgAhBiZIgIADIAZBVQAsgIAIgRQAJgPgKgdQgJgcgXAAQgLAAgZAJg");
	mask.setTransform(26.7734,31.2761);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD01B","#FFD01B","#FDB920","#F58023","#EF3E23","#EF3E23"],[0,0.247,0.365,0.624,0.847,1],-4.9,-39.6,3.5,27.3).s().p("AkKj+IHNg6IBHI3InMA6g");
	this.shape.setTransform(26.65,31.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(6.8,5,40,52.6), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhZDYQhJg1gYh/QgUhoAfhJQAfhJBLgYQAkgLAfAAIACAAQBYAAA0BVQAiA4ANBPQAOBSgKA2QgKA2gkAmQgUAWghANQghAOgkACIgJAAIgCAAQg4AAgtgigAgPhnQg3AMARBgQAUBxAyAAIAHgBQAVgDALgOQAUgcgQhaQgPhXgvAAIgNACg");
	mask.setTransform(23.4456,26.7504);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD01B","#FFD01B","#FDB920","#F58023","#EF3E23","#EF3E23"],[0,0.267,0.376,0.612,0.824,1],-1.3,-33.3,0.7,16.5).s().p("Ajlj5IG1gSIAWIEIm1ATg");
	this.shape.setTransform(23,26.775);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(4,1.8,39,50), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AijDxQgUgNgCgWIgamLQgBgPAKgLQAJgJAPgFQAPgGASAAQAWAAARAJQARAJAIAQIBOCgIA3iqQAHgUAWgLQASgJAXAAQAYAAATALQAUALABASIAbGLQAAAQgLAMQgVAWgpAAQgbAAgQgLQgRgKgBgTIgKiPIgOArQgMAlgkACIgDAAQgfAAgPgiIgJgRIgMgZIAKCSQABAQgMAMQgIAKgPAFQgPAGgSAAQgZAAgSgLg");
	mask.setTransform(25.2997,28.525);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD01B","#FFD01B","#FDB920","#F58023","#EF3E23","#EF3E23"],[0,0.188,0.322,0.608,0.859,1],-2.6,-32.3,1.8,22.7).s().p("Aj8j4IHOglIArIVInPAlg");
	this.shape.setTransform(25.3,28.55);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(4.1,3.4,42.5,50.300000000000004), null);


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
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah8EFIgUgCQgYgEgPgXQgHgMAGgdIAGggIAliqQAiieAJglQAEgQAIgLQASgYAlgCIAVgBIAUABQAZAAAOAWQAFAHAIAZIB6F1QAEAOAAAPQgBAQgFAKQgMAVgQAEQgJAEgUABIgOABQgSABgNgMQgNgNgFgXIgVg+IhSAEIgPBFQgFAXgVAMQgQAIgTAAIgHAAgAgjANIAwgCIgZhyg");
	mask.setTransform(23.1266,29.141);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD01B","#FFD01B","#F37223","#EF3E23","#EF3E23"],[0,0.212,0.592,0.769,1],-2.6,-33.4,2.4,29.8).s().p("AjmkCIGhgiIAsInImiAig");
	this.shape.setTransform(23.1,29.25);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(4.4,3,37.5,52.3), null);


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
	mask.graphics.p("AhkEIQgOgMgDgTIg2mtQgCgSALgPQAMgPASgCIDQgaQAPAAAMAKQAMALACAPIAEAlQADARgLANQgLAOgRACIhkANIAKBSIBlgNQARgDANALQAOAKACASIAFAjQACASgLANQgKANgRADIhmANIAKBRIBmgNQARgCAGAGQAGAFgBAQQgBALABAFQACAKAHAHIALAKQADACAAADQACARgKAOQgLANgRACIjQAaQgPAAgNgJg");
	mask.setTransform(17.2267,27.325);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAC416").s().p("AhfEAQgNgJgCgQIg1mrQgCgQAKgMQAKgMAPgCIDJgZQAOgCALAJQALAIACAOIAFAlQABAOgIALQgJALgOABIhsAOIAMBgIBsgNQAOgCALAJQALAIACAOIAEAjQACAOgJALQgIALgOACIhtAOIAMBgIBtgOQAOgBALAIQALAJABAOIAFAkQAEALgJAMQgKAMgOADIjKAZIgFAAQgMAAgKgIg");
	this.shape.setTransform(17.5199,27.7561);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(1.1,1.4,32.8,52.800000000000004), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AhfEAQgNgJgCgQIg1mrQgCgQAKgMQAKgMAPgCIDJgZIAFAAQAMAAAKAIQAJAJACAMIAFAlQABAOgIALQgJALgOABIhsAOIAMBgIBsgNQAOgCALAJQALAIACAOIAEAjQACAOgJALQgIALgOACIhtAOIAMBgIBtgOQAOgBALAJIAAAFQgBAMABAFQACAJAHAHIAGAGIACAOQAEALgJAMQgKAMgOADIjKAZIgFAAQgMAAgKgIg");
	mask.setTransform(23.3699,30.6674);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFD01B","#FFD01B","#FDB920","#F58023","#EF3E23","#EF3E23"],[0,0.267,0.376,0.612,0.824,1],-4,-31.3,3,23.1).s().p("AjqkAIGMgzIBJIzImMA0g");
	this.shape.setTransform(23.475,30.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(7,4.3,32.8,52.800000000000004), null);


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
	mask.graphics.p("AznHYIAAuvMAnPAAAIAAOvg");
	mask.setTransform(125.6,47.15);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F1213").s().p("AzdHHIAJAAQAJAAAKgCQA1gOAOgaQAKgQgGgXIgjhqIAPgGIABgBIAUgHQAhgMASgKQAZgPAQgXQANgSAFgaIABAJQAFAYAFASQgDAGgFAGQgQAXgXAOQgQAKgeAKIgrAQIAhBhQAJAYgKAUQgIAPgSAMQgQAKgSAEQgMAEgJAAQgXgBgNgQgAskGMQg3AAgvgkQAjARAoAAIAJgBQAlgBAigNQAigOAUgWQAogoAJhBIABALQABAUAOANQgLAxgfAiQgUAUggANQghANgkACgApSEtQgRgJgFgRQAQAIAVAAQAfgBAUgOQAWgOgBgYIgJiAIARAjIAIB1QAAATgPAPQgIAKgPAFQgPAFgRAAQgTAAgOgHgAlKEZQgPgIgFgOQANAFAUABQAggBAXgPQAXgPgCgXIgMiuQAEALAKAFIADADIAMC0QACASgPANQgZAXggAAQgUAAgQgJgAt9CAQgPhfAzgKIAMgCQAMAAALAHIAKAJIgGgBIgNACQg6AMARBkQAIAyAQAeQgfgUgOhSgAgLDOIADAAIAFAAIBBgPIACAAIBKgUQBNgVAXhQIAEAhQAAAHAEAGQgaA6g6APIgRAFQgPAEgrAJIgBABIg6AOIgKABQgQAAgNgRgAnUChQAGACAIABIAFAAQAlgDANgnIAIgYIAEA8QgOAYgZAAIgEABQgXAAgPgWgAErChQgIgGgEgKIADABIDRgaQANgCALgKQAKgJADgNIAIACIAcADQAYAAATgMQAXgNAGgaIAOg9IBDgDIAFANIg+AFIgRBKQgFAXgVANQgSALgXAAQgRAAgKgEIgEgBIAAADQgBAKgHAIQgHAHgKABIjSAcQgKAAgJgGgAznA2IAfgMQAKgCAFAAQAJAAAIAHIAGAHIgzARIAaBIIgLAEgANGBgQgIAAgIgBQgOgEgQgPIAJABIAIAAQARAAAXgHQAdgKALgVQAFgIgBgPQAIAHANAEQABAQgGANQgGAOgRALQgWAPgZAAgAAPgPIAlgMIAIgBQANAAALALIg0AOIAZBNIgOAFgAjcA7IAIAAIBEgSQAPgCAIgNQAIgMgDgOIgJgpIAFACIAYBSQgFALgMACIhPATIgEABQgRgBgHgQgAwZAeQgHgUgNgUQASAUAOAaIgDAXQgDgMgGgRgArLhDQAeAZAWAqIAEA7QgShNgmgxgAPEAzQgdgDgMgSQAKACALABIAHAAQAWAAATgHQATgGALgMQAPgPgBgUIgEgrQAGAMAKAQIAFArQABAIgFAJQgEAKgHAFQgKAJgSAFQgRAGgQgBgASRAgQgZgBgQgQIAFAAQAXAAAWgJQAWgJANgQQATgWgHgaQgDgMgfgqIgMgRQgSgZgPgjIgGgMQAkgZAJg4QAHgngHgxQgHg1gfgnQAwAmAOBGQAOBEgSAwQgNAhgZAUIgCACIABABQADAKAGALQAQAbAYAdIARAXIAQAWQAFAJACAMQACAKgEAPQgEAOgHAJQgMAOgTAJQgTAJgUAAgAF2hDIBjgNQATgCALgPQALgOgCgSIgEgiQAMAIACAOIACASIgLAzQgFAEgHABIhzAOIAIA7IgKABgAoTilQAMAHAFALIA3ByIgDAJgAkLi2QAPALABAPIAIBqQgKAEgFAIgAL2mUQATAYAcBYIATA2IApB8IAEAwgACciJQAPgpgJgsQgIgsgegfQAkAQAPAnQAKAZgCAbQgBAcgNAYIgCACIADABQAbAKASARIAEAfQgZgqgmgSgAgnjTIAFgBQAWgJAMABQAHgBAFADQAFACADAFIgpAKIATBBIgOAEgAKoj0IAHAfIgIAnIgNAAgAFdkMIBjgNQASgCAMgPQALgOgCgSIgEgZQAJAHACAMIAFAjQABALgHAKQgIALgMABIhwAOIAJA9IgLABgAPgmFIAggBQAPAAAJAZIgkADIgCAAIAGBKIgQABg");
	this.shape.setTransform(125.6083,47.15);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,251.2,94.3), null);


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
	mask.graphics.p("AzqHgIAAu/MAnVAAAIAAO/g");
	mask.setTransform(125.925,47.975);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AziHIIAPACQAIAAAKgCQA0gOAOgYQAJgRgGgVIgkhsIAngPQAggLASgKQAYgPARgXQARgZACgmIAEAdQAGAbAEAPIgIAOQgQAXgXAOQgRALgfALIgpAOIAhBfQAKAZgLAVQgIAPgSAMQgQAKgUAGQgLADgKAAQgcAAgOgYgAsjGUQgcAAgbgJQgngOgdgeQAsAdA0AAIAIAAQAlgCAhgNQAhgNAVgWQAxg0AChWIADAuQABATAPANQgNA0gfAhQgUAVghANQghAOglABgApXEyQgRgKgDgUIADABQAQAIAWAAQAdAAAUgNQAVgPgCgVIgJiNIASAkQACAGAEAFIAHB1QABAUgQARQgJAJgPAGQgQAFgRAAQgXAAgQgKgAlOEfQgQgKgEgRQAUAKAagDQAagCATgMQAVgOgBgXIgOjSIAGAeQACANAMAIIAEADIANC2QABATgQAOQgZAXghAAQgYAAgRgLgAt/CFQgQhhA2gKQAGgCAHAAQANAAALAIQAIAFAHAKIgMgCIgNABQg3AMAQBiQAKA6ASAdQgmgPgQhfgAgRDQQAGABAGAAQAGAAAGgBIA5gOIAAgBIBKgTQArgLAbghQAXgdAIgoIAGAwQABAHADAGQgaA8g8APIiGAhIgLACQgTAAgQgYgAmuC/QgcAAgQgdQAMAGANgCQAjgBANgmIAMglIAFBKQgOAZgcACgAErCpQgMgIgDgNIAMAAIDLgZQAOgCAKgKQAJgJADgOIAKADQAKADALAAIAGAAQAZAAASgMQAWgNAFgYIAOg/IBHgEIAHATIg/AEIgRBJQgFAYgUANQgTANgaAAQgSgBgKgEQgBALgIAIQgIAIgLACIjMAbIgGABQgKAAgJgHgAzqA6IAigMQAVgHANAMQAFAEAEAHQgGAAgIADIgmAOIAaBHIgQAGgAqOBlQgHgvgQgqQgVg3gigiQAtAcAbA2IAIBrgAM2BnQgTgFgSgVIAQADQAbAAAVgHQAcgJAKgVQAGgKgDgRQALAKAQAFQABARgGAPQgGANgSANQgXAQgaAAQgJAAgIgCgAAMgMIAogLQAVgGAQAUIgDAAIgyANIAZBOIgUAGgAwbAkQgOgjgZgdQAjAcAVAqQgEAZAAAUQgEgcgJgXgAjTBPQgJgGgDgKIALgBIBEgRQANgDAIgLQAHgLgCgOIgJgqIgBgDQAGAAAFAEIAZBUQgGANgOADIhOASIgGABQgIAAgHgFgAPEA8QgjgFgKgYQAMAEAOABIAHAAQAVAAASgGQATgHAKgLQAPgNgCgUIgEg4QAMAXAKAQIAFAtQABAIgFAKQgEAKgIAGQgMAKgWAGQgOAEgNAAIgPgBgASRAoQgcgBgSgTIgBgCIAHABQAXABAXgKQAXgJANgQQASgWgGgYQgDgNgfgoIgMgRQgSgagPgiIgHgOQAlgYAJg4QAHgmgHgyQgKhDgqgnQAdAQAVAdQAXAgAIAsQANA/gPAvQgMAngdAXQACAHAHAOQAPAYAZAfIAMARIATAaQAHAKACAOQADALgFAPQgEAPgIAJQgMAPgVAKQgTAIgTAAIgEAAgAF0hAIBmgNQAQgCALgOQALgOgCgRIgFgkIAAgBQARAGADATIACASIgLA2QgHAEgHABIhxAOIAJA7IgQACgAoZinQARAIAJARIA3ByIgFAQgAkOizIAAgCQAVAMABATIAIBrQgKAEgFAIIgEAJgAL4mDQgEgNgFgJQATANAWA9IAjBlIApB9IAGBHgACZiBQARgugLguQgLgvgigeIAEABQAsAPASAyQASA0gaAxQAbAJATATIAGAuQgag1gtgTgAgqjPIAIgCQAigNAOAHQAHAEAFAHIgZAGQgOADgEACIASBBQgIADgLABgAKoj6IAKAqIgIAqIgTABgAFbkJIBlgNQARgCALgNQALgOgCgRIgEgfQAOAIACAQIAFAjQACANgIALQgJAKgNACIhuAOIAJA9IgQACgAPemBIAggCIACAAQASAAAKAeIgnADIAGBKIgBAAIgUACg");
	this.shape.setTransform(125.9196,47.975);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,251.9,96), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop,reversed) {
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
	mask_1.graphics.p("AnfCZIAAkxIO/AAIAAExg");
	mask_1.setTransform(47.95,15.325);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCBEC0").s().p("AnfCZQAGgSAGgdQAMg8AAg4QAAhPgXg/IAIAAQAXBCgBBMQABBMgWBQIOqAAQgUhQgBhMQAAhMAYhCIAHAAQgXBDAABLQAAA4AMA8QAFAdAHASg");
	this.shape_1.setTransform(47.95,15.325);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(0,0,95.9,30.7), null);


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
	mask_1.graphics.p("AhUA3IAAhuICpAAIAABug");
	mask_1.setTransform(8.5,5.55);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhEACIBgg5IA5BnIhIgTIhhAag");
	this.shape_1.setTransform(8.5,5.55);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,17,11.1), null);


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
	mask_1.graphics.p("AmCBqIAAjTIMFAAIAADTg");
	mask_1.setTransform(38.675,10.575);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AlpBhQgXgNgCgdQgBgfAagVQAWgRAVABQgQgEgJgKQgJgKABgOQACgeAjgPQAfgOAdAHQAgAIgEAVQgBAKgLAIQgJAGgMACQgFABAAgDQgBgDAEgCQAMgHgBgMQgCgLgNgEQgTgGgQAOQgPANABAUQABASAPAEQAIACAUgCQAGAAgBAFQAAAJgDADQgBADgFAAQggAGgQAKQgWAPAAAaQgBARANAHQANAIASgGQAvgPAZhIQABgDADAAIAcgGQAEAAABACQABACgDADQgEAIACAJQACAHANAVQALAWgNASQAHgEAIgJQAMgNADgPIAKguIgVAFIgHACQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAABgBQAEgLACgCIALgDIARgDIABgIQACgOgCgKQAAgBAEgDQAFgCAGAAQAKAAAFAFQAIAIgBAMIgBAGIAHgCIAcgFQAEAAgFAJQAAACgFACIgbAGIgEABIgYBQQgEANADAIQACAHAGAAQAGAAAIgGQAQgOAIgRIAIgVQgOAAgFgKQgFgKAIgLQAJgMAOADQAQACgCARQAQgEAggUQAJgHACAFQABAFgGATQgSAwgCATQgDAXATgLQAKgHAHgKQgEgZANgWQAHgOANgJQAOgLAPgCQAOgCAJAFQAKAGACAMQACAIgDAJQgFASgSALQgPAKgYgCIgBAAQACANAIAIQAKALANgBQAIgBAMgIQAOgKAKgOIAThqIACgRIABgMIgBgIIgBgGIACgCIAGgDIAIgBQALAAAIAHQAHAHAAANQAAAIgFAXIgZBeQgDAOABAIQACAIAEAAQAFACAHgFQAHgEAGgHQADgEAFAEQAEADgEAGQgJAMgLAHQgLAIgLAAQgOAAgHgMQgGgIgBgOIgIAKQgPATgUADQgYAFgUgMQgKgGgFgMQgfAmgWgOQgZgPAYg9IAEgJQABAAAAgBQAAAAAAgBQAAAAAAAAQgBAAAAAAQgLAHgOADQgGARgIAQQgJAQgEAEQgYAbgVAAQgQAAgHgLQgHgKACgTIAAgBQgbAsgigEQgfgDAAgaQAAgKAGgHQAFgGAGgBQAFgBABACQAAABABAAQAAABgBAAQAAABAAABQAAAAgBABQgNASAOAIQAQAJAGgSQAHgRgOgRQgQgVAAgFQgaA6geAVQgTANgbAAQgQgBgOgIgAA6AGQgKANgEASIgCANQAPgDAKgKQAOgLAAgWIgBgFQAAAAAAgBQgBgBAAAAQgBgBAAAAQgBAAAAAAIgCAAQgJAAgIAKgADHBdQgHgLABgUQABgPADgPIAThvIgBgIIgBgGIACgCIAGgDIAIgBQALAAAIAHQAHAHAAANQAAALgFAUQgEAQgJAhIgMAtQgDAOABAIQABAHAFABQAFACAHgFQAIgFAFgGIAAgBQAAgMADgKQADgNAGgLQAFgKAIgIQAGgGAKgGQAJgFAIgCQAIgCAJAAQAPAAAIAGQAJAGAAAJQgBAIgFAEQgGAGgKgBQgJAAgIgFQgBAAgBgBQAAAAgBgBQAAAAAAAAQAAgBABAAQAHgDACgFQACgEgCgCQgCgDgGAAQgJAAgKALQgKALgFAUQgFARABANQACANAGAAQAHAAAJgMQAJgOAHgTIABgGQAAAAABAAQAAgBAAAAQABAAABgBQAAAAABAAIAIABIAJAEIAHAFQAAABABAAQAAABABAAQAAABAAAAQAAAAAAAAQgFASABAKQAAAMAFACQAFABAGgEQAHgFAEgGIADgDIADABQACACAAADQACACgCADQgIAMgKAGQgLAIgKAAQgKAAgIgKQgHgIgBgRQgSAjgVAAQgQABgHgRIgBgDQgHAHgIAGQgLAIgLAAQgNAAgJgMg");
	this.shape_1.setTransform(38.6781,10.5555);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(0,0,77.4,21.2), null);


(lib.cipsai2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Melynas();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,337);


(lib.cipsai1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Geltonas();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247,333);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED1F35").s().p("EhOHAPoIAA/PMCcPAAAIAAfPg");
	this.shape.setTransform(500,100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,1000,200), null);


(lib.meskuciuai2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// meskutis
	this.instance = new lib.meskutis();
	this.instance.setTransform(30.1,-100.35,0.3978,0.3978,37.9785,0,0,50.7,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:30.6},19,cjs.Ease.quadInOut).wait(32));

	// meskutis
	this.instance_1 = new lib.meskutis();
	this.instance_1.setTransform(107.75,-71.4,0.6832,0.6832,7.9806,0,0,50.5,58.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:59.55},19,cjs.Ease.quadInOut).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-130.9,147.5,234.5);


(lib.Meskuciai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// meskutis
	this.instance = new lib.meskutis();
	this.instance.setTransform(64.85,-104.85,0.8678,0.8678,31.925,0,0,52,58.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:63.75,y:-102.5},0).wait(1).to({y:-99.1},0).wait(1).to({y:-95.4},0).wait(1).to({y:-91.4},0).wait(1).to({y:-87.05},0).wait(1).to({y:-82.35},0).wait(1).to({y:-77.25},0).wait(1).to({y:-71.75},0).wait(1).to({y:-65.75},0).wait(1).to({y:-59.35},0).wait(1).to({y:-52.4},0).wait(1).to({y:-44.9},0).wait(1).to({y:-36.8},0).wait(1).to({y:-28.05},0).wait(1).to({y:-18.6},0).wait(1).to({y:-8.4},0).wait(1).to({y:2.6},0).wait(1).to({y:14.5},0).wait(1).to({y:27.3},0).wait(1).to({y:41.05},0).wait(1).to({y:55.85},0).wait(1).to({y:71.6},0).wait(1).to({y:88.4},0).wait(1).to({y:106.15},0).wait(1).to({y:124.75},0).wait(1).to({y:143.95},0).wait(1).to({y:163.6},0).wait(1).to({y:183.3},0).wait(1).to({y:202.8},0).wait(1).to({y:221.9},0).wait(1).to({y:240.2},0).wait(1).to({y:257.7},0).wait(1).to({y:274.15},0).wait(1).to({y:289.55},0).wait(1).to({rotation:31.9251,y:303.9},0).wait(1).to({y:317.2},0).wait(1).to({y:329.5},0).wait(1).to({y:340.85},0).wait(1).to({y:351.35},0).wait(1).to({y:361},0).wait(1).to({y:369.9},0).wait(1).to({y:378.1},0).wait(1).to({y:385.6},0).wait(1).to({y:392.55},0).wait(1).to({y:398.95},0).wait(1).to({y:404.85},0).wait(1).to({y:410.2},0).wait(1).to({y:415.2},0).wait(1).to({y:419.7},0).wait(1).to({y:423.9},0).wait(1).to({y:427.7},0).wait(1).to({y:431.15},0).wait(1).to({y:434.3},0).wait(1).to({y:437.15},0).wait(1).to({y:439.7},0).wait(1).to({y:442.05},0).wait(1).to({y:444.1},0).wait(1).to({y:445.95},0).wait(1).to({y:447.55},0).wait(1).to({y:448.95},0).wait(1).to({y:450.2},0).wait(1).to({y:451.2},0).wait(1).to({y:452.05},0).wait(1).to({y:452.75},0).wait(1).to({y:453.25},0).wait(1).to({y:453.6},0).wait(1).to({y:453.8},0).wait(1).to({regX:51.9,regY:58.1,x:64.85,y:454.6},0).wait(19).to({_off:true},1).wait(28));

	// meskutis
	this.instance_1 = new lib.meskutis();
	this.instance_1.setTransform(982.2,-135.15,0.8679,0.8679,-1.2835,0,0,52,58.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:980.85,y:-132.4},0).wait(1).to({y:-129.25},0).wait(1).to({y:-125.85},0).wait(1).to({y:-122.2},0).wait(1).to({y:-118.15},0).wait(1).to({y:-113.85},0).wait(1).to({y:-109.1},0).wait(1).to({rotation:-1.2836,y:-104.05},0).wait(1).to({y:-98.55},0).wait(1).to({y:-92.6},0).wait(1).to({y:-86.15},0).wait(1).to({y:-79.2},0).wait(1).to({y:-71.75},0).wait(1).to({y:-63.65},0).wait(1).to({y:-54.9},0).wait(1).to({rotation:-1.2837,y:-45.45},0).wait(1).to({y:-35.3},0).wait(1).to({y:-24.3},0).wait(1).to({y:-12.45},0).wait(1).to({y:0.35},0).wait(1).to({rotation:-1.2838,y:14.1},0).wait(1).to({y:28.85},0).wait(1).to({y:44.65},0).wait(1).to({y:61.4},0).wait(1).to({rotation:-1.2839,y:79.1},0).wait(1).to({y:97.65},0).wait(1).to({y:116.85},0).wait(1).to({rotation:-1.284,y:136.45},0).wait(1).to({y:156.15},0).wait(1).to({y:175.65},0).wait(1).to({rotation:-1.2841,y:194.65},0).wait(1).to({y:212.95},0).wait(1).to({y:230.4},0).wait(1).to({rotation:-1.2842,y:246.9},0).wait(1).to({y:262.25},0).wait(1).to({y:276.6},0).wait(1).to({y:289.85},0).wait(1).to({rotation:-1.2843,y:302.15},0).wait(1).to({y:313.5},0).wait(1).to({y:323.95},0).wait(1).to({y:333.6},0).wait(1).to({y:342.5},0).wait(1).to({rotation:-1.2844,y:350.7},0).wait(1).to({y:358.2},0).wait(1).to({y:365.15},0).wait(1).to({y:371.55},0).wait(1).to({y:377.4},0).wait(1).to({y:382.8},0).wait(1).to({y:387.75},0).wait(1).to({y:392.25},0).wait(1).to({y:396.4},0).wait(1).to({y:400.2},0).wait(1).to({y:403.65},0).wait(1).to({rotation:-1.2845,y:406.8},0).wait(1).to({y:409.65},0).wait(1).to({y:412.25},0).wait(1).to({y:414.55},0).wait(1).to({y:416.6},0).wait(1).to({y:418.45},0).wait(1).to({y:420.05},0).wait(1).to({y:421.45},0).wait(1).to({y:422.7},0).wait(1).to({y:423.7},0).wait(1).to({y:424.55},0).wait(1).to({y:425.2},0).wait(1).to({y:425.75},0).wait(1).to({y:426.1},0).wait(1).to({y:426.3},0).wait(1).to({regX:51.9,regY:58.2,x:982.15,y:426.5},0).wait(18).to({_off:true},1).wait(28));

	// meskutis
	this.instance_2 = new lib.meskutis();
	this.instance_2.setTransform(600,-171.15,0.8679,0.8679,24.4426,0,0,51.9,58.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:598.85,y:-169.35},0).wait(1).to({y:-166.75},0).wait(1).to({y:-163.95},0).wait(1).to({y:-160.85},0).wait(1).to({y:-157.45},0).wait(1).to({y:-153.75},0).wait(1).to({y:-149.75},0).wait(1).to({y:-145.45},0).wait(1).to({y:-140.75},0).wait(1).to({y:-135.7},0).wait(1).to({y:-130.2},0).wait(1).to({y:-124.25},0).wait(1).to({y:-117.85},0).wait(1).to({y:-110.95},0).wait(1).to({y:-103.5},0).wait(1).to({y:-95.4},0).wait(1).to({y:-86.7},0).wait(1).to({y:-77.3},0).wait(1).to({y:-67.15},0).wait(1).to({y:-56.2},0).wait(1).to({y:-44.4},0).wait(1).to({y:-31.65},0).wait(1).to({y:-17.95},0).wait(1).to({y:-3.25},0).wait(1).to({y:12.5},0).wait(1).to({rotation:24.4427,y:29.25},0).wait(1).to({y:46.9},0).wait(1).to({y:65.35},0).wait(1).to({y:84.45},0).wait(1).to({y:104},0).wait(1).to({y:123.6},0).wait(1).to({y:143.05},0).wait(1).to({y:162},0).wait(1).to({y:180.25},0).wait(1).to({y:197.65},0).wait(1).to({y:214},0).wait(1).to({y:229.35},0).wait(1).to({y:243.65},0).wait(1).to({y:256.85},0).wait(1).to({y:269.1},0).wait(1).to({y:280.4},0).wait(1).to({y:290.85},0).wait(1).to({y:300.45},0).wait(1).to({y:309.3},0).wait(1).to({y:317.5},0).wait(1).to({y:325},0).wait(1).to({y:331.9},0).wait(1).to({y:338.25},0).wait(1).to({y:344.1},0).wait(1).to({y:349.45},0).wait(1).to({y:354.4},0).wait(1).to({y:358.9},0).wait(1).to({y:363.05},0).wait(1).to({y:366.85},0).wait(1).to({y:370.35},0).wait(1).to({y:373.45},0).wait(1).to({y:376.3},0).wait(1).to({y:378.9},0).wait(1).to({y:381.2},0).wait(1).to({y:383.25},0).wait(1).to({y:385.05},0).wait(1).to({y:386.7},0).wait(1).to({y:388.1},0).wait(1).to({y:389.3},0).wait(1).to({y:390.3},0).wait(1).to({y:391.15},0).wait(1).to({y:391.8},0).wait(1).to({y:392.35},0).wait(1).to({y:392.7},0).wait(1).to({y:392.9},0).wait(1).to({regX:51.9,regY:58.2,x:599.95,y:393.6},0).wait(16).to({_off:true},1).wait(28));

	// meskutis
	this.instance_3 = new lib.meskutis();
	this.instance_3.setTransform(762.35,43.35,0.5446,0.5446,-11.0779,0,0,51.8,58.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:761.55,y:46.65},0).wait(1).to({y:50.35},0).wait(1).to({y:54.35},0).wait(1).to({y:58.7},0).wait(1).to({rotation:-11.078,y:63.4},0).wait(1).to({y:68.5},0).wait(1).to({y:74.05},0).wait(1).to({y:80},0).wait(1).to({y:86.45},0).wait(1).to({y:93.4},0).wait(1).to({y:100.9},0).wait(1).to({rotation:-11.0781,y:109.05},0).wait(1).to({y:117.8},0).wait(1).to({y:127.25},0).wait(1).to({y:137.45},0).wait(1).to({y:148.45},0).wait(1).to({rotation:-11.0782,y:160.35},0).wait(1).to({y:173.2},0).wait(1).to({y:186.95},0).wait(1).to({rotation:-11.0783,y:201.75},0).wait(1).to({y:217.6},0).wait(1).to({y:234.45},0).wait(1).to({rotation:-11.0784,y:252.2},0).wait(1).to({scaleX:0.5447,scaleY:0.5447,y:270.8},0).wait(1).to({rotation:-11.0785,y:290.05},0).wait(1).to({y:309.7},0).wait(1).to({rotation:-11.0786,y:329.45},0).wait(1).to({y:349},0).wait(1).to({y:368.1},0).wait(1).to({rotation:-11.0787,y:386.45},0).wait(1).to({y:403.9},0).wait(1).to({rotation:-11.0788,y:420.4},0).wait(1).to({y:435.85},0).wait(1).to({y:450.2},0).wait(1).to({rotation:-11.0789,y:463.5},0).wait(1).to({y:475.85},0).wait(1).to({y:487.2},0).wait(1).to({y:497.7},0).wait(1).to({rotation:-11.079,y:507.35},0).wait(1).to({y:516.3},0).wait(1).to({y:524.5},0).wait(1).to({y:532.05},0).wait(1).to({y:539},0).wait(1).to({rotation:-11.0791,y:545.4},0).wait(1).to({y:551.25},0).wait(1).to({y:556.65},0).wait(1).to({y:561.65},0).wait(1).to({y:566.2},0).wait(1).to({y:570.35},0).wait(1).to({y:574.15},0).wait(1).to({y:577.6},0).wait(1).to({y:580.75},0).wait(1).to({y:583.6},0).wait(1).to({y:586.2},0).wait(1).to({y:588.5},0).wait(1).to({rotation:-11.0792,y:590.6},0).wait(1).to({y:592.45},0).wait(1).to({y:594.05},0).wait(1).to({y:595.45},0).wait(1).to({y:596.7},0).wait(1).to({y:597.7},0).wait(1).to({y:598.55},0).wait(1).to({y:599.25},0).wait(1).to({y:599.75},0).wait(1).to({y:600.1},0).wait(1).to({y:600.3},0).wait(1).to({regX:51.8,regY:58.3,scaleX:0.5446,scaleY:0.5446,x:762.35,y:600.5},0).wait(20).to({_off:true},1).wait(28));

	// meskutis
	this.instance_4 = new lib.meskutis();
	this.instance_4.setTransform(954.25,17.1,0.5615,0.5615,73.4363,0,0,51.5,58);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(1).to({regX:50.5,x:954.05,y:19.2},0).wait(1).to({y:22.05},0).wait(1).to({y:25.2},0).wait(1).to({y:28.55},0).wait(1).to({y:32.25},0).wait(1).to({y:36.25},0).wait(1).to({y:40.55},0).wait(1).to({y:45.25},0).wait(1).to({y:50.3},0).wait(1).to({y:55.8},0).wait(1).to({y:61.75},0).wait(1).to({y:68.15},0).wait(1).to({y:75.1},0).wait(1).to({rotation:73.4362,y:82.55},0).wait(1).to({y:90.65},0).wait(1).to({y:99.35},0).wait(1).to({y:108.75},0).wait(1).to({y:118.95},0).wait(1).to({y:129.9},0).wait(1).to({y:141.75},0).wait(1).to({y:154.5},0).wait(1).to({y:168.25},0).wait(1).to({rotation:73.4361,y:182.95},0).wait(1).to({y:198.7},0).wait(1).to({y:215.5},0).wait(1).to({y:233.2},0).wait(1).to({y:251.7},0).wait(1).to({rotation:73.436,y:270.85},0).wait(1).to({y:290.4},0).wait(1).to({y:310.05},0).wait(1).to({y:329.55},0).wait(1).to({y:348.55},0).wait(1).to({rotation:73.4359,y:366.8},0).wait(1).to({y:384.2},0).wait(1).to({y:400.6},0).wait(1).to({y:415.95},0).wait(1).to({y:430.25},0).wait(1).to({y:443.55},0).wait(1).to({rotation:73.4358,y:455.8},0).wait(1).to({y:467.1},0).wait(1).to({y:477.55},0).wait(1).to({x:954,y:487.2},0).wait(1).to({y:496.05},0).wait(1).to({y:504.25},0).wait(1).to({y:511.75},0).wait(1).to({y:518.65},0).wait(1).to({y:525.05},0).wait(1).to({y:530.9},0).wait(1).to({y:536.25},0).wait(1).to({y:541.2},0).wait(1).to({rotation:73.4357,y:545.75},0).wait(1).to({y:549.9},0).wait(1).to({y:553.65},0).wait(1).to({y:557.1},0).wait(1).to({y:560.25},0).wait(1).to({y:563.1},0).wait(1).to({y:565.7},0).wait(1).to({y:568},0).wait(1).to({y:570.05},0).wait(1).to({scaleX:0.5616,scaleY:0.5616,y:571.9},0).wait(1).to({y:573.5},0).wait(1).to({y:574.9},0).wait(1).to({y:576.1},0).wait(1).to({y:577.15},0).wait(1).to({y:577.95},0).wait(1).to({y:578.65},0).wait(1).to({y:579.15},0).wait(1).to({y:579.5},0).wait(1).to({y:579.7},0).wait(1).to({regX:51.6,x:954.2,y:580.3},0).wait(17).to({_off:true},1).wait(28));

	// meskutis
	this.instance_5 = new lib.meskutis();
	this.instance_5.setTransform(510.6,-72.55,0.4761,0.4761,45,0,0,51.2,57.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:510.2,y:-70.55},0).wait(1).to({y:-68.2},0).wait(1).to({y:-65.6},0).wait(1).to({y:-62.75},0).wait(1).to({y:-59.65},0).wait(1).to({y:-56.3},0).wait(1).to({y:-52.6},0).wait(1).to({y:-48.65},0).wait(1).to({y:-44.3},0).wait(1).to({y:-39.65},0).wait(1).to({y:-34.55},0).wait(1).to({y:-29.1},0).wait(1).to({y:-23.15},0).wait(1).to({y:-16.8},0).wait(1).to({y:-9.85},0).wait(1).to({y:-2.4},0).wait(1).to({y:5.65},0).wait(1).to({y:14.3},0).wait(1).to({y:23.7},0).wait(1).to({y:33.85},0).wait(1).to({y:44.7},0).wait(1).to({y:56.5},0).wait(1).to({y:69.25},0).wait(1).to({y:82.9},0).wait(1).to({y:97.6},0).wait(1).to({y:113.3},0).wait(1).to({scaleX:0.4762,scaleY:0.4762,y:130},0).wait(1).to({y:147.65},0).wait(1).to({y:166.1},0).wait(1).to({y:185.2},0).wait(1).to({y:204.7},0).wait(1).to({y:224.3},0).wait(1).to({y:243.7},0).wait(1).to({y:262.6},0).wait(1).to({y:280.85},0).wait(1).to({y:298.2},0).wait(1).to({y:314.55},0).wait(1).to({y:329.85},0).wait(1).to({y:344.1},0).wait(1).to({y:357.3},0).wait(1).to({y:369.55},0).wait(1).to({y:380.85},0).wait(1).to({y:391.25},0).wait(1).to({y:400.85},0).wait(1).to({y:409.7},0).wait(1).to({y:417.8},0).wait(1).to({y:425.3},0).wait(1).to({y:432.2},0).wait(1).to({y:438.55},0).wait(1).to({y:444.4},0).wait(1).to({y:449.75},0).wait(1).to({y:454.7},0).wait(1).to({y:459.2},0).wait(1).to({y:463.3},0).wait(1).to({y:467.1},0).wait(1).to({y:470.55},0).wait(1).to({y:473.65},0).wait(1).to({y:476.5},0).wait(1).to({y:479.05},0).wait(1).to({y:481.35},0).wait(1).to({y:483.4},0).wait(1).to({y:485.25},0).wait(1).to({y:486.85},0).wait(1).to({x:510.15,y:488.25},0).wait(1).to({y:489.45},0).wait(1).to({y:490.45},0).wait(1).to({y:491.3},0).wait(1).to({y:492},0).wait(1).to({y:492.5},0).wait(1).to({y:492.85},0).wait(1).to({y:493.05},0).wait(1).to({regX:51.2,regY:57.9,x:510.55,y:493.3},0).wait(15).to({_off:true},1).wait(28));

	// meskutis
	this.instance_6 = new lib.meskutis();
	this.instance_6.setTransform(596.6,25.65,0.3505,0.3505,0,0,0,51.1,57.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:596.35,y:28.5},0).wait(1).to({y:31.65},0).wait(1).to({y:35.05},0).wait(1).to({y:38.7},0).wait(1).to({y:42.75},0).wait(1).to({y:47.05},0).wait(1).to({y:51.8},0).wait(1).to({y:56.85},0).wait(1).to({y:62.35},0).wait(1).to({y:68.3},0).wait(1).to({y:74.75},0).wait(1).to({y:81.65},0).wait(1).to({y:89.15},0).wait(1).to({y:97.25},0).wait(1).to({y:106},0).wait(1).to({y:115.4},0).wait(1).to({y:125.6},0).wait(1).to({y:136.6},0).wait(1).to({y:148.45},0).wait(1).to({y:161.2},0).wait(1).to({y:174.95},0).wait(1).to({y:189.75},0).wait(1).to({y:205.5},0).wait(1).to({y:222.3},0).wait(1).to({y:240.05},0).wait(1).to({y:258.6},0).wait(1).to({y:277.75},0).wait(1).to({y:297.35},0).wait(1).to({y:317.05},0).wait(1).to({y:336.55},0).wait(1).to({y:355.55},0).wait(1).to({y:373.85},0).wait(1).to({y:391.3},0).wait(1).to({y:407.7},0).wait(1).to({y:423.1},0).wait(1).to({y:437.4},0).wait(1).to({y:450.7},0).wait(1).to({y:463},0).wait(1).to({y:474.35},0).wait(1).to({y:484.8},0).wait(1).to({y:494.45},0).wait(1).to({y:503.3},0).wait(1).to({y:511.5},0).wait(1).to({y:519.05},0).wait(1).to({y:525.95},0).wait(1).to({y:532.35},0).wait(1).to({y:538.2},0).wait(1).to({y:543.6},0).wait(1).to({y:548.55},0).wait(1).to({y:553.05},0).wait(1).to({y:557.2},0).wait(1).to({y:561},0).wait(1).to({y:564.45},0).wait(1).to({y:567.6},0).wait(1).to({y:570.45},0).wait(1).to({y:573.05},0).wait(1).to({y:575.35},0).wait(1).to({y:577.4},0).wait(1).to({y:579.25},0).wait(1).to({y:580.85},0).wait(1).to({y:582.3},0).wait(1).to({y:583.5},0).wait(1).to({y:584.5},0).wait(1).to({y:585.35},0).wait(1).to({y:586.05},0).wait(1).to({y:586.55},0).wait(1).to({y:586.9},0).wait(1).to({y:587.1},0).wait(1).to({regX:51,regY:57.9,x:596.6,y:587.15},0).wait(18).to({_off:true},1).wait(28));

	// meskutis
	this.instance_7 = new lib.meskutis();
	this.instance_7.setTransform(747.9,-96.55,0.5563,0.5563,29.9971,0,0,50.6,57.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:747.75,y:-94.05},0).wait(1).to({y:-91.45},0).wait(1).to({y:-88.65},0).wait(1).to({y:-85.55},0).wait(1).to({y:-82.15},0).wait(1).to({y:-78.45},0).wait(1).to({y:-74.45},0).wait(1).to({y:-70.15},0).wait(1).to({y:-65.45},0).wait(1).to({y:-60.4},0).wait(1).to({y:-54.9},0).wait(1).to({y:-48.95},0).wait(1).to({y:-42.55},0).wait(1).to({y:-35.65},0).wait(1).to({y:-28.2},0).wait(1).to({y:-20.1},0).wait(1).to({y:-11.4},0).wait(1).to({y:-2},0).wait(1).to({y:8.15},0).wait(1).to({y:19.1},0).wait(1).to({y:30.9},0).wait(1).to({y:43.6},0).wait(1).to({y:57.3},0).wait(1).to({y:72},0).wait(1).to({y:87.75},0).wait(1).to({y:104.5},0).wait(1).to({y:122.15},0).wait(1).to({rotation:29.997,y:140.65},0).wait(1).to({y:159.75},0).wait(1).to({y:179.3},0).wait(1).to({y:198.9},0).wait(1).to({y:218.35},0).wait(1).to({y:237.3},0).wait(1).to({y:255.55},0).wait(1).to({y:272.95},0).wait(1).to({y:289.3},0).wait(1).to({y:304.65},0).wait(1).to({y:318.95},0).wait(1).to({y:332.15},0).wait(1).to({y:344.4},0).wait(1).to({y:355.7},0).wait(1).to({y:366.15},0).wait(1).to({y:375.75},0).wait(1).to({y:384.6},0).wait(1).to({y:392.8},0).wait(1).to({y:400.3},0).wait(1).to({y:407.2},0).wait(1).to({rotation:29.9969,y:413.55},0).wait(1).to({y:419.4},0).wait(1).to({y:424.75},0).wait(1).to({y:429.7},0).wait(1).to({y:434.2},0).wait(1).to({y:438.35},0).wait(1).to({y:442.15},0).wait(1).to({y:445.6},0).wait(1).to({y:448.7},0).wait(1).to({y:451.55},0).wait(1).to({y:454.1},0).wait(1).to({y:456.45},0).wait(1).to({y:458.5},0).wait(1).to({y:460.3},0).wait(1).to({y:461.95},0).wait(1).to({y:463.35},0).wait(1).to({y:464.55},0).wait(1).to({y:465.55},0).wait(1).to({y:466.4},0).wait(1).to({y:467.05},0).wait(1).to({y:467.6},0).wait(1).to({y:467.95},0).wait(1).to({y:468.15},0).wait(1).to({regX:50.7,regY:57.8,x:747.9},0).wait(16).to({_off:true},1).wait(28));

	// meskutis
	this.instance_8 = new lib.meskutis();
	this.instance_8.setTransform(281.4,-28.3,0.4903,0.4903,29.9965,0,0,50.7,57.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:281.15,y:-26.8},0).wait(1).to({rotation:29.9966,y:-25.25},0).wait(1).to({y:-23.55},0).wait(1).to({y:-21.65},0).wait(1).to({y:-19.5},0).wait(1).to({y:-17.2},0).wait(1).to({y:-14.6},0).wait(1).to({y:-11.8},0).wait(1).to({y:-8.7},0).wait(1).to({y:-5.35},0).wait(1).to({y:-1.7},0).wait(1).to({y:2.25},0).wait(1).to({y:6.55},0).wait(1).to({y:11.2},0).wait(1).to({y:16.2},0).wait(1).to({y:21.65},0).wait(1).to({y:27.55},0).wait(1).to({y:33.85},0).wait(1).to({y:40.7},0).wait(1).to({y:48.1},0).wait(1).to({y:56.05},0).wait(1).to({rotation:29.9967,y:64.7},0).wait(1).to({y:74},0).wait(1).to({y:84.1},0).wait(1).to({y:94.95},0).wait(1).to({y:106.65},0).wait(1).to({y:119.3},0).wait(1).to({y:132.9},0).wait(1).to({rotation:29.9968,y:147.45},0).wait(1).to({y:163.05},0).wait(1).to({scaleX:0.4904,scaleY:0.4904,y:179.65},0).wait(1).to({y:197.2},0).wait(1).to({y:215.5},0).wait(1).to({rotation:29.9969,y:234.45},0).wait(1).to({y:253.8},0).wait(1).to({y:273.3},0).wait(1).to({y:292.55},0).wait(1).to({y:311.35},0).wait(1).to({rotation:29.997,y:329.45},0).wait(1).to({y:346.65},0).wait(1).to({y:362.9},0).wait(1).to({y:378.1},0).wait(1).to({y:392.25},0).wait(1).to({y:405.4},0).wait(1).to({rotation:29.9971,y:417.5},0).wait(1).to({y:428.75},0).wait(1).to({y:439.05},0).wait(1).to({y:448.6},0).wait(1).to({y:457.4},0).wait(1).to({y:465.45},0).wait(1).to({y:472.9},0).wait(1).to({y:479.75},0).wait(1).to({y:486.05},0).wait(1).to({y:491.85},0).wait(1).to({rotation:29.9972,y:497.2},0).wait(1).to({y:502.05},0).wait(1).to({y:506.55},0).wait(1).to({y:510.65},0).wait(1).to({y:514.4},0).wait(1).to({y:517.8},0).wait(1).to({y:520.95},0).wait(1).to({y:523.75},0).wait(1).to({y:526.3},0).wait(1).to({y:528.55},0).wait(1).to({y:530.6},0).wait(1).to({y:532.45},0).wait(1).to({y:534.05},0).wait(1).to({y:535.4},0).wait(1).to({y:536.6},0).wait(1).to({y:537.6},0).wait(1).to({y:538.45},0).wait(1).to({y:539.1},0).wait(1).to({y:539.65},0).wait(1).to({y:540},0).wait(1).to({y:540.2},0).wait(1).to({regX:50.6,regY:57.8,x:281.3,y:540.15},0).wait(11).to({_off:true},1).wait(28));

	// meskutis
	this.instance_9 = new lib.meskutis();
	this.instance_9.setTransform(390.45,5.8,0.4903,0.4903,29.9965,0,0,50.7,57.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,rotation:29.9966,x:390.2,y:8.55},0).wait(1).to({y:11.4},0).wait(1).to({y:14.55},0).wait(1).to({y:17.9},0).wait(1).to({y:21.6},0).wait(1).to({y:25.6},0).wait(1).to({y:29.95},0).wait(1).to({y:34.65},0).wait(1).to({y:39.65},0).wait(1).to({y:45.15},0).wait(1).to({y:51.1},0).wait(1).to({y:57.5},0).wait(1).to({y:64.45},0).wait(1).to({y:71.9},0).wait(1).to({y:80},0).wait(1).to({y:88.7},0).wait(1).to({rotation:29.9967,y:98.1},0).wait(1).to({y:108.3},0).wait(1).to({y:119.25},0).wait(1).to({y:131.1},0).wait(1).to({y:143.85},0).wait(1).to({y:157.6},0).wait(1).to({y:172.3},0).wait(1).to({rotation:29.9968,y:188.1},0).wait(1).to({y:204.85},0).wait(1).to({scaleX:0.4904,scaleY:0.4904,y:222.55},0).wait(1).to({y:241.05},0).wait(1).to({y:260.2},0).wait(1).to({rotation:29.9969,y:279.75},0).wait(1).to({y:299.45},0).wait(1).to({y:318.9},0).wait(1).to({y:337.9},0).wait(1).to({rotation:29.997,y:356.15},0).wait(1).to({y:373.55},0).wait(1).to({y:390},0).wait(1).to({y:405.35},0).wait(1).to({y:419.65},0).wait(1).to({y:432.9},0).wait(1).to({rotation:29.9971,y:445.15},0).wait(1).to({y:456.5},0).wait(1).to({y:466.95},0).wait(1).to({y:476.55},0).wait(1).to({y:485.45},0).wait(1).to({y:493.6},0).wait(1).to({y:501.1},0).wait(1).to({y:508.05},0).wait(1).to({y:514.4},0).wait(1).to({y:520.25},0).wait(1).to({rotation:29.9972,y:525.65},0).wait(1).to({y:530.6},0).wait(1).to({y:535.1},0).wait(1).to({y:539.25},0).wait(1).to({y:543.05},0).wait(1).to({y:546.5},0).wait(1).to({y:549.65},0).wait(1).to({y:552.45},0).wait(1).to({y:555.05},0).wait(1).to({y:557.35},0).wait(1).to({y:559.4},0).wait(1).to({y:561.25},0).wait(1).to({y:562.85},0).wait(1).to({y:564.25},0).wait(1).to({y:565.45},0).wait(1).to({y:566.5},0).wait(1).to({y:567.35},0).wait(1).to({y:568},0).wait(1).to({y:568.5},0).wait(1).to({y:568.9},0).wait(1).to({y:569.1},0).wait(1).to({regX:50.6,regY:57.8,x:390.35,y:569.05},0).wait(17).to({_off:true},1).wait(28));

	// meskutis
	this.instance_10 = new lib.meskutis();
	this.instance_10.setTransform(356.8,-111.55,0.4903,0.4903,29.9965,0,0,50.7,57.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,rotation:29.9966,x:356.55,y:-108.25},0).wait(1).to({y:-104.85},0).wait(1).to({y:-101.15},0).wait(1).to({y:-97.15},0).wait(1).to({y:-92.8},0).wait(1).to({y:-88.1},0).wait(1).to({y:-83},0).wait(1).to({y:-77.5},0).wait(1).to({y:-71.5},0).wait(1).to({y:-65.1},0).wait(1).to({y:-58.15},0).wait(1).to({y:-50.65},0).wait(1).to({y:-42.55},0).wait(1).to({y:-33.8},0).wait(1).to({y:-24.35},0).wait(1).to({rotation:29.9967,y:-14.15},0).wait(1).to({y:-3.15},0).wait(1).to({y:8.75},0).wait(1).to({y:21.55},0).wait(1).to({y:35.3},0).wait(1).to({y:50.05},0).wait(1).to({rotation:29.9968,y:65.85},0).wait(1).to({y:82.65},0).wait(1).to({scaleX:0.4904,scaleY:0.4904,y:100.45},0).wait(1).to({y:119},0).wait(1).to({y:138.25},0).wait(1).to({rotation:29.9969,y:157.85},0).wait(1).to({y:177.55},0).wait(1).to({x:356.5,y:197.1},0).wait(1).to({y:216.15},0).wait(1).to({rotation:29.997,y:234.5},0).wait(1).to({y:251.95},0).wait(1).to({y:268.4},0).wait(1).to({y:283.8},0).wait(1).to({y:298.15},0).wait(1).to({y:311.45},0).wait(1).to({rotation:29.9971,y:323.75},0).wait(1).to({y:335.1},0).wait(1).to({y:345.6},0).wait(1).to({y:355.25},0).wait(1).to({y:364.15},0).wait(1).to({y:372.35},0).wait(1).to({y:379.9},0).wait(1).to({y:386.85},0).wait(1).to({y:393.25},0).wait(1).to({y:399.1},0).wait(1).to({rotation:29.9972,y:404.5},0).wait(1).to({y:409.45},0).wait(1).to({y:414},0).wait(1).to({y:418.15},0).wait(1).to({y:421.95},0).wait(1).to({y:425.4},0).wait(1).to({y:428.55},0).wait(1).to({y:431.4},0).wait(1).to({y:434},0).wait(1).to({y:436.3},0).wait(1).to({y:438.4},0).wait(1).to({y:440.2},0).wait(1).to({y:441.85},0).wait(1).to({y:443.25},0).wait(1).to({y:444.45},0).wait(1).to({y:445.5},0).wait(1).to({y:446.35},0).wait(1).to({y:447},0).wait(1).to({y:447.5},0).wait(1).to({y:447.9},0).wait(1).to({y:448.1},0).wait(1).to({regX:50.6,regY:57.8,x:356.65,y:448.05},0).wait(19).to({_off:true},1).wait(28));

	// meskutis
	this.instance_11 = new lib.meskutis();
	this.instance_11.setTransform(876.15,-88.95,0.513,0.513,0,0,0,50.8,58.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:875.95,y:-86.7},0).wait(1).to({y:-84.1},0).wait(1).to({y:-81.3},0).wait(1).to({y:-78.2},0).wait(1).to({y:-74.8},0).wait(1).to({y:-71.1},0).wait(1).to({y:-67.15},0).wait(1).to({y:-62.8},0).wait(1).to({y:-58.1},0).wait(1).to({y:-53.05},0).wait(1).to({y:-47.55},0).wait(1).to({y:-41.6},0).wait(1).to({y:-35.2},0).wait(1).to({y:-28.3},0).wait(1).to({y:-20.85},0).wait(1).to({y:-12.8},0).wait(1).to({y:-4.05},0).wait(1).to({y:5.3},0).wait(1).to({y:15.45},0).wait(1).to({y:26.45},0).wait(1).to({y:38.2},0).wait(1).to({y:50.95},0).wait(1).to({y:64.65},0).wait(1).to({y:79.35},0).wait(1).to({y:95.1},0).wait(1).to({y:111.8},0).wait(1).to({y:129.5},0).wait(1).to({y:148},0).wait(1).to({y:167.1},0).wait(1).to({y:186.6},0).wait(1).to({y:206.25},0).wait(1).to({y:225.7},0).wait(1).to({y:244.65},0).wait(1).to({y:262.9},0).wait(1).to({y:280.25},0).wait(1).to({y:296.65},0).wait(1).to({y:312},0).wait(1).to({y:326.25},0).wait(1).to({y:339.5},0).wait(1).to({y:351.75},0).wait(1).to({y:363.05},0).wait(1).to({y:373.45},0).wait(1).to({y:383.1},0).wait(1).to({y:391.95},0).wait(1).to({y:400.1},0).wait(1).to({y:407.6},0).wait(1).to({y:414.5},0).wait(1).to({y:420.85},0).wait(1).to({y:426.7},0).wait(1).to({y:432.1},0).wait(1).to({y:437},0).wait(1).to({y:441.55},0).wait(1).to({y:445.65},0).wait(1).to({y:449.45},0).wait(1).to({y:452.9},0).wait(1).to({y:456.05},0).wait(1).to({y:458.85},0).wait(1).to({y:461.45},0).wait(1).to({y:463.75},0).wait(1).to({y:465.8},0).wait(1).to({y:467.65},0).wait(1).to({y:469.25},0).wait(1).to({y:470.65},0).wait(1).to({y:471.85},0).wait(1).to({y:472.85},0).wait(1).to({y:473.7},0).wait(1).to({y:474.4},0).wait(1).to({y:474.9},0).wait(1).to({y:475.25},0).wait(1).to({y:475.45},0).wait(1).to({regX:50.7,regY:58.4,x:876.15,y:475.7},0).wait(16).to({_off:true},1).wait(28));

	// meskutis
	this.instance_12 = new lib.meskutis();
	this.instance_12.setTransform(661.15,-59.15,0.5059,0.5059,0,0,0,50.7,58);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({_off:false},0).wait(1).to({regX:50.5,x:661,y:-56.25},0).wait(1).to({y:-53.15},0).wait(1).to({y:-49.75},0).wait(1).to({y:-46.1},0).wait(1).to({y:-42.05},0).wait(1).to({y:-37.75},0).wait(1).to({y:-33},0).wait(1).to({y:-27.95},0).wait(1).to({y:-22.45},0).wait(1).to({y:-16.5},0).wait(1).to({y:-10.05},0).wait(1).to({y:-3.1},0).wait(1).to({y:4.35},0).wait(1).to({y:12.45},0).wait(1).to({y:21.2},0).wait(1).to({y:30.55},0).wait(1).to({y:40.75},0).wait(1).to({y:51.75},0).wait(1).to({y:63.6},0).wait(1).to({y:76.4},0).wait(1).to({y:90.15},0).wait(1).to({y:104.9},0).wait(1).to({y:120.7},0).wait(1).to({y:137.45},0).wait(1).to({y:155.2},0).wait(1).to({y:173.75},0).wait(1).to({y:192.95},0).wait(1).to({y:212.5},0).wait(1).to({y:232.2},0).wait(1).to({y:251.7},0).wait(1).to({y:270.75},0).wait(1).to({y:289.05},0).wait(1).to({y:306.45},0).wait(1).to({y:322.9},0).wait(1).to({y:338.3},0).wait(1).to({y:352.6},0).wait(1).to({y:365.9},0).wait(1).to({y:378.2},0).wait(1).to({y:389.5},0).wait(1).to({y:400},0).wait(1).to({y:409.65},0).wait(1).to({y:418.5},0).wait(1).to({y:426.7},0).wait(1).to({y:434.25},0).wait(1).to({y:441.15},0).wait(1).to({y:447.55},0).wait(1).to({y:453.4},0).wait(1).to({y:458.8},0).wait(1).to({y:463.75},0).wait(1).to({scaleX:0.506,scaleY:0.506,y:468.25},0).wait(1).to({y:472.4},0).wait(1).to({y:476.2},0).wait(1).to({y:479.65},0).wait(1).to({y:482.8},0).wait(1).to({y:485.65},0).wait(1).to({y:488.25},0).wait(1).to({y:490.55},0).wait(1).to({y:492.6},0).wait(1).to({y:494.45},0).wait(1).to({y:496.05},0).wait(1).to({y:497.5},0).wait(1).to({y:498.7},0).wait(1).to({y:499.7},0).wait(1).to({y:500.55},0).wait(1).to({y:501.25},0).wait(1).to({y:501.75},0).wait(1).to({y:502.1},0).wait(1).to({y:502.3},0).wait(1).to({regX:50.6,regY:58.1,x:661.15,y:502.4},0).wait(18).to({_off:true},1).wait(28));

	// meskutis
	this.instance_13 = new lib.meskutis();
	this.instance_13.setTransform(207.2,-97.25,0.5653,0.5653,0,0,0,50.6,58);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).wait(1).to({regX:50.5,x:207.1,y:-94.65},0).wait(1).to({y:-91.8},0).wait(1).to({y:-88.65},0).wait(1).to({y:-85.3},0).wait(1).to({y:-81.6},0).wait(1).to({y:-77.6},0).wait(1).to({y:-73.25},0).wait(1).to({y:-68.55},0).wait(1).to({y:-63.5},0).wait(1).to({y:-58},0).wait(1).to({y:-52.05},0).wait(1).to({y:-45.65},0).wait(1).to({y:-38.7},0).wait(1).to({y:-31.25},0).wait(1).to({y:-23.15},0).wait(1).to({y:-14.45},0).wait(1).to({y:-5.05},0).wait(1).to({y:5.15},0).wait(1).to({y:16.1},0).wait(1).to({y:27.95},0).wait(1).to({y:40.65},0).wait(1).to({y:54.4},0).wait(1).to({y:69.1},0).wait(1).to({y:84.9},0).wait(1).to({y:101.65},0).wait(1).to({y:119.35},0).wait(1).to({y:137.85},0).wait(1).to({y:157},0).wait(1).to({y:176.55},0).wait(1).to({y:196.25},0).wait(1).to({y:215.7},0).wait(1).to({y:234.7},0).wait(1).to({y:252.95},0).wait(1).to({y:270.35},0).wait(1).to({y:286.8},0).wait(1).to({y:302.15},0).wait(1).to({y:316.45},0).wait(1).to({y:329.7},0).wait(1).to({scaleX:0.5654,scaleY:0.5654,y:341.95},0).wait(1).to({y:353.3},0).wait(1).to({y:363.75},0).wait(1).to({y:373.35},0).wait(1).to({y:382.25},0).wait(1).to({y:390.4},0).wait(1).to({y:397.9},0).wait(1).to({x:207.05,y:404.85},0).wait(1).to({y:411.2},0).wait(1).to({y:417.05},0).wait(1).to({y:422.45},0).wait(1).to({y:427.4},0).wait(1).to({y:431.9},0).wait(1).to({y:436.05},0).wait(1).to({y:439.85},0).wait(1).to({y:443.3},0).wait(1).to({y:446.45},0).wait(1).to({y:449.25},0).wait(1).to({y:451.85},0).wait(1).to({y:454.15},0).wait(1).to({y:456.2},0).wait(1).to({y:458.05},0).wait(1).to({y:459.65},0).wait(1).to({y:461.05},0).wait(1).to({y:462.25},0).wait(1).to({y:463.3},0).wait(1).to({y:464.15},0).wait(1).to({y:464.8},0).wait(1).to({y:465.3},0).wait(1).to({y:465.7},0).wait(1).to({y:465.9},0).wait(1).to({x:207.15,y:465.95},0).wait(17).to({_off:true},1).wait(28));

	// meskutis
	this.instance_14 = new lib.meskutis();
	this.instance_14.setTransform(146.15,32.15,1,1,0,0,0,50.5,58);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(14).to({_off:false},0).wait(1).to({y:35.6},0).wait(1).to({y:39.3},0).wait(1).to({y:43.3},0).wait(1).to({y:47.65},0).wait(1).to({y:52.35},0).wait(1).to({y:57.5},0).wait(1).to({y:62.95},0).wait(1).to({y:68.9},0).wait(1).to({y:75.35},0).wait(1).to({y:82.3},0).wait(1).to({y:89.8},0).wait(1).to({y:97.95},0).wait(1).to({y:106.7},0).wait(1).to({y:116.15},0).wait(1).to({y:126.35},0).wait(1).to({y:137.4},0).wait(1).to({y:149.25},0).wait(1).to({y:162.1},0).wait(1).to({y:175.9},0).wait(1).to({y:190.7},0).wait(1).to({y:206.5},0).wait(1).to({y:223.35},0).wait(1).to({y:241.15},0).wait(1).to({y:259.75},0).wait(1).to({y:279},0).wait(1).to({y:298.6},0).wait(1).to({y:318.35},0).wait(1).to({y:337.95},0).wait(1).to({y:357},0).wait(1).to({y:375.35},0).wait(1).to({y:392.85},0).wait(1).to({y:409.35},0).wait(1).to({y:424.75},0).wait(1).to({y:439.1},0).wait(1).to({y:452.45},0).wait(1).to({y:464.75},0).wait(1).to({y:476.15},0).wait(1).to({y:486.65},0).wait(1).to({y:496.3},0).wait(1).to({y:505.2},0).wait(1).to({y:513.4},0).wait(1).to({y:521},0).wait(1).to({y:527.95},0).wait(1).to({y:534.35},0).wait(1).to({y:540.2},0).wait(1).to({y:545.6},0).wait(1).to({y:550.55},0).wait(1).to({y:555.1},0).wait(1).to({y:559.3},0).wait(1).to({y:563.1},0).wait(1).to({y:566.55},0).wait(1).to({y:569.7},0).wait(1).to({y:572.55},0).wait(1).to({y:575.15},0).wait(1).to({y:577.45},0).wait(1).to({y:579.55},0).wait(1).to({y:581.4},0).wait(1).to({y:583},0).wait(1).to({y:584.4},0).wait(1).to({y:585.65},0).wait(1).to({y:586.65},0).wait(1).to({y:587.5},0).wait(1).to({y:588.15},0).wait(1).to({y:588.7},0).wait(1).to({y:589.05},0).wait(1).to({y:589.25},0).wait(1).to({y:589.35},0).wait(20).to({_off:true},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-240,1025.9,887.4);


(lib.Lines = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cipsai2
	this.instance = new lib.cipsai2("synched",0);
	this.instance.setTransform(1003,419.5,1,1,0,0,0,125,168.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:180.5},19,cjs.Ease.cubicInOut).to({y:170.5},30).to({regX:125.2,regY:168.6,scaleX:0.7134,scaleY:0.7134,rotation:13.7536,x:949.15,y:166.35},29,cjs.Ease.cubicInOut).wait(58).to({startPosition:0},0).to({_off:true},1).wait(118));

	// cipsai1
	this.instance_1 = new lib.cipsai1("synched",0);
	this.instance_1.setTransform(762.5,434.5,1,1,0,0,0,123.5,166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:195.5},19,cjs.Ease.cubicInOut).to({y:205.5},30).to({regX:123.7,regY:166.7,scaleX:0.7165,scaleY:0.7165,rotation:3.9784,x:795.55,y:169.65},28,cjs.Ease.cubicInOut).wait(61).to({startPosition:0},0).to({_off:true},1).wait(118));

	// line4
	this.instance_2 = new lib.line4("synched",0);
	this.instance_2.setTransform(715.5,361,1,1,0,0,0,238.5,101);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({x:1355.5,y:101},29,cjs.Ease.cubicInOut).wait(22).to({startPosition:0},0).to({x:1644.45,y:3.05},16,cjs.Ease.cubicInOut).wait(61).to({startPosition:0},0).to({_off:true},1).wait(118));

	// line3
	this.instance_3 = new lib.line3("synched",0);
	this.instance_3.setTransform(410.05,333,1,1,0,0,0,200,89);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:1009,y:106},29,cjs.Ease.cubicInOut).wait(26).to({startPosition:0},0).to({x:1429.95,y:-64.95},16,cjs.Ease.cubicInOut).wait(61).to({startPosition:0},0).to({_off:true},1).wait(118));

	// line2
	this.instance_4 = new lib.line2("synched",0);
	this.instance_4.setTransform(1341.95,-101.45,1,1,0,0,0,270,112.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({x:604,y:177.5},29,cjs.Ease.cubicInOut).wait(29).to({startPosition:0},0).to({x:449.95,y:277.5},16,cjs.Ease.cubicInOut).wait(61).to({startPosition:0},0).to({_off:true},1).wait(118));

	// line1
	this.instance_5 = new lib.line1("synched",0);
	this.instance_5.setTransform(977.45,-89.95,1,1,0,0,0,238.5,101);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:238.5,y:177},29,cjs.Ease.cubicInOut).wait(32).to({startPosition:0},0).to({x:-116.5,y:279},16,cjs.Ease.cubicInOut).wait(61).to({startPosition:0},0).to({_off:true},1).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355,-213.9,2238,814.9);


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
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(125.9,48,1,1,0,0,0,125.9,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,251.9,96), null);


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
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(125.6,47.1,1,1,0,0,0,125.6,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,251.2,94.3), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A2BI4IAAxwMAsDAAAIAARwg");
	mask.setTransform(141,56.85);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAdQgMgJgCgPQgDgOAJgLQAJgMAPgDQAOgBALAIQANAKABAOQADANgJAMQgJAMgPACIgFABQgLAAgJgHgAgEgfQgNADgHAKQgIAKACANQABAMALAIQALAIAMgCQAMgBAJgLQAHgLgBgMQgDgNgKgIQgJgGgKAAIgEAAgAgPgRIAPgDQAIgBADADQAEACAAAEQABAFgDAEQgDACgFABIAEABIAMAOIgGABIgFgGIgHgIQgDgBgEABIgDAAIADARIgFABgAgCgPIgIABIACANIAFgBIAKgCIACgDIABgDQgBgEgCgBIgFgBIgEABg");
	this.shape.setTransform(278.175,5.3659);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B82025").s().p("AgWAfQgMgKgDgQQgCgOAJgNQAKgMAQgDIAFAAQAMAAAKAHQAMAJADAQQACAPgJANQgKANgPACIgGAAQgLAAgLgHgAgDgcQgMABgIAKQgHALACAKQACANAKAGQAHAGAJAAIAEAAQAMgCAIgKQAHgJgCgLQgCgNgJgHQgIgGgKAAgAgMAUIgFglIAAgCQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIAOgCIAFAAQAFAAADACQAFADABAFQABAGgEAEIgEACIADADIAJALQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgGABIgCgBIgEgFIgHgIIgGAAIACAPIgBABIgBABIgFABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAgAgHgMIABAIIADAAIAJgCIABgCIABgCQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAgBgBAAIgDAAg");
	this.shape_1.setTransform(278.175,5.375);

	this.instance = new lib.Group();
	this.instance.setTransform(149.75,58.75,1,1,0,0,0,125.6,47.1);
	this.instance.compositeOperation = "darken";

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(149.7,58.25,1,1,0,0,0,125.9,48);
	this.instance_1.compositeOperation = "lighten";

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F1213").s().p("AziHIIAPACQAIAAAKgCQA0gOAOgYQAJgRgGgVIgkhsIAngPQAggLASgKQAYgPARgXQARgZACgmIAEAdQAGAbAEAPIgIAOQgQAXgXAOQgRALgfALIgpAOIAhBfQAKAZgLAVQgIAPgSAMQgQAKgUAGQgLADgKAAQgcAAgOgYgAsjGUQgcAAgbgJQgngOgdgeQAsAdA0AAIAIAAQAlgCAhgNQAhgNAVgWQAxg0AChWIADAuQABATAPANQgNA0gfAhQgUAVghANQghAOglABgApXEyQgRgKgDgUIADABQAQAIAWAAQAdAAAUgNQAVgPgCgVIgJiNIASAkQACAGAEAFIAHB1QABAUgQARQgJAJgPAGQgQAFgRAAQgXAAgQgKgAlOEfQgQgKgEgRQAUAKAagDQAagCATgMQAVgOgBgXIgOjSIAGAeQACANAMAIIAEADIANC2QABATgQAOQgZAXghAAQgYAAgRgLgAt/CFQgQhhA2gKQAGgCAHAAQANAAALAIQAIAFAHAKIgMgCIgNABQg3AMAQBiQAKA6ASAdQgmgPgQhfgAgRDQQAGABAGAAQAGAAAGgBIA5gOIAAgBIBKgTQArgLAbghQAXgdAIgoIAGAwQABAHADAGQgaA8g8APIiGAhIgLACQgTAAgQgYgAmuC/QgcAAgQgdQAMAGANgCQAjgBANgmIAMglIAFBKQgOAZgcACgAErCpQgMgIgDgNIAMAAIDLgZQAOgCAKgKQAJgJADgOIAKADQAKADALAAIAGAAQAZAAASgMQAWgNAFgYIAOg/IBHgEIAHATIg/AEIgRBJQgFAYgUANQgTANgaAAQgSgBgKgEQgBALgIAIQgIAIgLACIjMAbIgGABQgKAAgJgHgAzqA6IAigMQAVgHANAMQAFAEAEAHQgGAAgIADIgmAOIAaBHIgQAGgAqOBlQgHgvgQgqQgVg3gigiQAtAcAbA2IAIBrgAM2BnQgTgFgSgVIAQADQAbAAAVgHQAcgJAKgVQAGgKgDgRQALAKAQAFQABARgGAPQgGANgSANQgXAQgaAAQgJAAgIgCgAAMgMIAogLQAVgGAQAUIgDAAIgyANIAZBOIgUAGgAwbAkQgOgjgZgdQAjAcAVAqQgEAZAAAUQgEgcgJgXgAjTBPQgJgGgDgKIALgBIBEgRQANgDAIgLQAHgLgCgOIgJgqIgBgDQAGAAAFAEIAZBUQgGANgOADIhOASIgGABQgIAAgHgFgAPEA8QgjgFgKgYQAMAEAOABIAHAAQAVAAASgGQATgHAKgLQAPgNgCgUIgEg4QAMAXAKAQIAFAtQABAIgFAKQgEAKgIAGQgMAKgWAGQgOAEgNAAIgPgBgASRAoQgcgBgSgTIgBgCIAHABQAXABAXgKQAXgJANgQQASgWgGgYQgDgNgfgoIgMgRQgSgagPgiIgHgOQAlgYAJg4QAHgmgHgyQgKhDgqgnQAdAQAVAdQAXAgAIAsQANA/gPAvQgMAngdAXQACAHAHAOQAPAYAZAfIAMARIATAaQAHAKACAOQADALgFAPQgEAPgIAJQgMAPgVAKQgTAIgTAAIgEAAgAF0hAIBmgNQAQgCALgOQALgOgCgRIgFgkIAAgBQARAGADATIACASIgLA2QgHAEgHABIhxAOIAJA7IgQACgAoZinQARAIAJARIA3ByIgFAQgAkOizIAAgCQAVAMABATIAIBrQgKAEgFAIIgEAJgAL4mDQgEgNgFgJQATANAWA9IAjBlIApB9IAGBHgACZiBQARgugLguQgLgvgigeIAEABQAsAPASAyQASA0gaAxQAbAJATATIAGAuQgag1gtgTgAgqjPIAIgCQAigNAOAHQAHAEAFAHIgZAGQgOADgEACIASBBQgIADgLABgAKoj6IAKAqIgIAqIgTABgAFbkJIBlgNQARgCALgNQALgOgCgRIgEgfQAOAIACAQIAFAjQACANgIALQgJAKgNACIhuAOIAJA9IgQACgAPemBIAggCIACAAQASAAAKAeIgnADIAGBKIgBAAIgUACg");
	this.shape_2.setTransform(149.7196,58.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AxqI2QgrAAgjgXQgigYgOgnIhzlFIgIgVQgKgYgKgiQgOgwAZgtQAXgqAqgSQBQghAugPQAzgRArAAQAuAAAqATQAiAQAeAbQAvg4BJgXQAtgPAvgBQAyAAArARQAIgdAUgWQAVgWAfgNQAegMAkgBQAnAAAiAQQAiAPAVAdQATgkAlgVQAlgUAvgBIABAAQA0AAAnAZQAVg6BFgXQAQgGBDgSIAlgKIAEgBIAFgBQAVgGAcgBQA5AAAtAbIAFADQAGgMAIgLQAfgoAzgGIDKgZQAbgEAZAJQAZAJATASQASglAhgWQAigWAsgDQAYgDAfADQAnACAgAXQATgwAwgaQAggQAmgFQAggDAtgBIAVgBQARgBAbACIAQABQBEALAyAvQA9A5AMBcQAPB6gyBJIAWAhQAlAzAIAeQAHAegHAcQgIAfgVAYQgaAggoAQQgnARgpgDIgBAAQgigCgegRQgtAihAAAIgRgBQgYAegkAKQgVAHgdABQgHABgLgBIgBAAQgdgCgbgPQgbgPgUgYQgTAeggARQggASgnAAQgaAZgkAHIjeAaQghAAgbgQQgjAdgsAMIgQAEIg9AQIAAAAIg2ANQgQAFgRAAIgBAAQgrAAgkgbQgjgcgMgqIgThCIgIACIAGBOQAEA0gkAoQgWAXggANQggANgmABQhSAAgpg4QgIAPgLAMQgVAXgfAMQgfANgjAAIgCAAQgVAAgTgEIgSAVQgfAigvAUQgwAVg1ADIgOAAQg5AAg1gYQhTgmgvhbIgNAGIAMAkQAQA3gbAuQgUAjgpAWQgVALgiAKQgRAEgWABg");
	this.shape_3.setTransform(140.7237,56.8679);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B82025").s().p("AxqI4QgsAAgjgYQgjgYgOgoIhzlFIgCgCIgHgSQgKgagKghQgOgwAaguQAYgrAqgSQBHgeA4gTQAzgQArAAIABAAQAwgBAoAUQAhAOAeAbQAug2BJgYQAxgPAsgBIACAAQAwAAAqARQAHgbAUgXQAVgWAggOQAfgMAkAAIABAAQAmAAAiAPQAhAPAWAbQATgjAlgUQAlgUAvAAIABAAQAzgBAnAYQAXg5BDgXQAfgKA0gNIABABIAAgCIAkgJIAJgDIABAAQAVgGAcAAIACAAQA5AAAsAbIADABQAGgMAIgJQAegoA0gHIDLgZIAOAAQAuAAAjAeQATgkAhgVQAigVArgDQANgCARAAQAOAAAMACQAlABAhAWQAUgwAwgZQAggQAmgFQAggDAsgBIBCAAIAQACQBFAKAzAwQA+A5ALBdQAPB6gxBKIAVAfQAmA0AHAeQAHAegHAeQgIAegVAZQgZAegkARQglAQgnAAIgLAAQgkgDgdgQQgtAihAAAIgQAAQgZAdgjAKQgTAGggACIgSAAIgBAAQgcgCgbgOQgbgOgUgYQgUAdggAQQggARgmABQgaAZgkAHIgFABIjaAaQggAAgcgQQgiAcgtAMIgQAFIg7AOIgCABIg1ANQgQAFgSAAIgBAAQgsAAglgcQgjgbgMgrIgThAIgDABIAGBLQAEA2glAoQgWAYghAOQghANgmgBIgBAAQhRABgpg2QgGAMgLANQgWAWgfAOQgfAMgkAAIgCAAQgTAAgUgDIgRATQgfAjgwAUQgxAVg1ADIgNAAIgBgDIAAADQg6AAg2gZQhSgmgvhZIgJAEIALAiQAQA3gbAxQgUAjgpAWQgXALghAKQgTAFgVAAg");
	this.shape_4.setTransform(140.7209,56.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AxqI2QgrAAgjgXQgigYgOgnIhzlFIgIgVQgKgYgKgiQgOgwAZgtQAXgqAqgSQBQghAugPQAzgRArAAQAuAAAqATQAiAQAeAbQAvg4BJgXQAtgPAvgBQAyAAArARQAIgdAUgWQAVgWAfgNQAegMAkgBQAnAAAiAQQAiAPAVAdQATgkAlgVQAlgUAvgBIABAAQA0AAAnAZQAVg6BFgXQAQgGBDgSIAlgKIAEgBIAFgBQAVgGAcgBQA5AAAtAbIAFADQAGgMAIgLQAfgoAzgGIDKgZQAbgEAZAJQAZAJATASQASglAhgWQAigWAsgDQAYgDAfADQAnACAgAXQATgwAwgaQAggQAmgFQAggDAtgBIAVgBQARgBAbACIAQABQBEALAyAvQA9A5AMBcQAPB6gyBJIAWAhQAlAzAIAeQAHAegHAcQgIAfgVAYQgaAggoAQQgnARgpgDIgBAAQgigCgegRQgtAihAAAIgRgBQgYAegkAKQgVAHgdABQgHABgLgBIgBAAQgdgCgbgPQgbgPgUgYQgTAeggARQggASgnAAQgaAZgkAHIjeAaQghAAgbgQQgjAdgsAMIgQAEIg9AQIAAAAIg2ANQgQAFgRAAIgBAAQgrAAgkgbQgjgcgMgqIgThCIgIACIAGBOQAEA0gkAoQgWAXggANQggANgmABQhSAAgpg4QgIAPgLAMQgVAXgfAMQgfANgjAAIgCAAQgVAAgTgEIgSAVQgfAigvAUQgwAVg1ADIgOAAQg5AAg1gYQhTgmgvhbIgNAGIAMAkQAQA3gbAuQgUAjgpAWQgVALgiAKQgRAEgWABg");
	this.shape_5.setTransform(140.7237,56.8679);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.instance,this.instance_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0,0.1,282,113.60000000000001), null);


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
	mask.graphics.p("A2BI4IAAxwMAsDAAAIAARwg");
	mask.setTransform(144.8,56.85);

	// Layer_3
	this.instance = new lib.ClipGroup_13();
	this.instance.setTransform(144.8,56.9,1,1,0,0,0,141,56.9);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.setTransform(190.15,47.5,1,1,0,0,0,23.4,30.8);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.setTransform(189.8,46.9,1,1,0,0,0,17.2,27.3);

	this.instance_3 = new lib.ClipGroup_3();
	this.instance_3.setTransform(223.15,41.8,1,1,0,0,0,23.1,29.2);

	this.instance_4 = new lib.ClipGroup_4();
	this.instance_4.setTransform(107.75,62.7,1,1,0,0,0,25.3,28.6);

	this.instance_5 = new lib.ClipGroup_5();
	this.instance_5.setTransform(68.85,72.4,1,1,0,0,0,23,26.8);

	this.instance_6 = new lib.ClipGroup_6();
	this.instance_6.setTransform(156.4,53.8,1,1,0,0,0,26.7,31.3);

	this.instance_7 = new lib.ClipGroup_7();
	this.instance_7.setTransform(30.4,77.7,1,1,0,0,0,30.4,34.8);

	this.instance_8 = new lib.ClipGroup_8();
	this.instance_8.setTransform(257.1,35.6,1,1,0,0,0,22.5,29.6);

	this.instance_9 = new lib.ClipGroup_9();
	this.instance_9.setTransform(144.8,56.9,1,1,0,0,0,141,56.9);

	this.instance_10 = new lib.ClipGroup_10();
	this.instance_10.setTransform(255,44.35);

	this.instance_11 = new lib.ClipGroup_11();
	this.instance_11.setTransform(134.8,59.4,1,1,0,0,0,11.5,11.2);

	this.instance_12 = new lib.ClipGroup_12();
	this.instance_12.setTransform(144.8,56.9,1,1,0,0,0,141,56.9);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(3.8,0,282,113.7), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_1_1();
	this.instance.setTransform(38.6,10.6,1,1,0,0,0,38.6,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,77.4,21.2), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1.setTransform(8.5,5.5,1,1,0,0,0,8.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,17,11.1), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.ClipGroup_3_1();
	this.instance_1.setTransform(48,15.3,1,1,0,0,0,48,15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,95.9,30.7), null);


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
	mask_1.graphics.p("AnjDtIAAnZIPHAAIAAHZg");
	mask_1.setTransform(48.425,23.675);

	// Layer_3
	this.instance = new lib.Group_3();
	this.instance.setTransform(48.45,32,1,1,0,0,0,48,15.3);
	this.instance.compositeOperation = "multiply";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED1B2E").s().p("AnfCZQAGgSAGgdQAMg8AAg4QAAhPgXg/IAIAAQAXBCgBBMQABBMgWBQIOqAAQgUhQgBhMQAAhMAYhCIAHAAQgXBDAABLQAAA4AMA8QAFAdAHASg");
	this.shape_1.setTransform(48.4,32.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABFA/QA2giABgrQABgWgVgNQgWgOgPASQgGAHAEAAQATADAIAQQAJARgKAUIACgLQABgPgGgKIgEgGIgCAEIgEAEQgFAFgKAEQgMAEgGABIAFgLQASgBAJgJIADgDQgJgGgLgBQgFgBAHgOQAHgPASgCQAJgBAKAFQAKAEAFAIQAXAigYAlQgRAdgcAPgAg7BBQgogagYgSQgJgHAAgGQABgEAHgBIAtgIQAcgFANgBQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIgCAIQhFAEgSACQgDABgBACQAAAAgBABQAAAAAAABQABAAAAABQAAAAABABQAeAXAxAXIgDACQgDADgBACg");
	this.shape_2.setTransform(51.5551,9.6159);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED1B2E").s().p("AhRCAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAKglAbhCQgJAAgkgUQgmgUAAgGQAAgIAggDQARgBAtAAIADgIIAVhOQADgIAFAGQAOAPAkBGQANgCALgHQAMgHABgJQAAgDgMgCQgMgBAFgOIANgHQAPgGAMAFQASAJACAOQAKAfgZAgQgSAWgVALQAKAkAGA0QAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQgFACgVgRIgwgpQgUALghAZIglAcIgDABIgBAAg");
	this.shape_3.setTransform(51.2781,13.2942);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED1D2F").s().p("AhRCAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAKglAbhCQgJAAgkgUQgmgUAAgGQAAgIAggDQARgBAtAAIADgIIAVhOQADgIAFAGQAOAPAkBGQANgCALgHQAMgHABgJQAAgDgMgCQgMgBAFgOIANgHQAPgGAMAFQASAJACAOQAKAfgZAgQgSAWgVALQAKAkAGA0QAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQgFACgVgRIgwgpQgUALghAZIglAcIgDABIgBAAg");
	this.shape_4.setTransform(51.2781,13.2942);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhWCEQgEgCABgEQANg1AQgtQgngZgXgRQgKgHABgGQABgEAGgBQA9gMAUgCIAchQQACgEADgBQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQAEACASAaQAXAeANAXQARgBAJgJIAEgDQgJgGgLgBQgFgBAHgOQAHgPARgCQAKAAAKAEQAJAEAFAIQAWAfgTAkQgOAagcASQAJAugBAsQAAAJgHgBQgIAAg8guIg5AgQglAWgGAAIgBAAg");
	this.shape_5.setTransform(51.5444,13.2188);

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.setTransform(51.35,20.8,1,1,0,0,0,8.5,5.5);
	this.instance_1.alpha = 0.3008;
	this.instance_1.compositeOperation = "multiply";

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlpBhQgXgNgCgdQgBgfAagVQAWgRAVABQgQgEgJgKQgJgKABgOQACgeAjgPQAfgOAdAHQANAEAHAGQAKAIgCALQgBALgLAHQgHAGgOACQgEABgBgDQgBgCAEgCQAMgIgBgMQgCgLgNgEQgTgGgQAOQgPANABAUQABATAPAEQAIACAUgDQABAAABAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAJgDADQgBADgFAAQggAGgQAKQgWAPgBAaQAAARANAHQANAIASgGQAvgOAZhIQABgDADgBIAcgGQAEAAABACQABADgDADQgEAGACALQACAGANAVQALAXgNASQAHgFAIgJQAMgNADgPIAKguIgVAFIgHACQgDAAABgDQAEgLACgCQACgBAJgCIARgDIABgIQABgJAAgIIgBgHQAAgBAEgCQAFgDAGAAQAKAAAFAGQAIAGgBANIgBAGIAHgCIAcgFQAEAAgFAJQAAACgFACIgbAHIgEABIgYBPQgEANADAIQACAHAGAAQAHAAAHgGQAQgOAIgRIAIgVQgOAAgFgKQgFgKAIgLQAJgMAOADQAQACgCARQAPgEAhgUQAJgHACAFQABAFgGATQgSAwgCATQgDAXATgLQAJgGAIgLQgFgXAOgYQAIgOAMgJQAOgLAPgCQANgCAKAFQAKAGACANQACAHgDAKQgFARgSALQgQAKgXgBIgBgBQACANAIAJQAKALANgCQAIgBAMgIQAOgKAJgOIAUhqIACgRIABgMIgBgHIgBgFIAAgCIACgCIAGgDIAIgBQALAAAIAHQAHAGAAAPQAAAJgFAVIgZBfQgDAPABAGQACAHAEACQAFABAHgFQAIgEAFgHQAEgEAEAEQADAEgDAFQgKAMgKAHQgLAIgLAAQgOAAgHgLQgHgKAAgNIgIALQgPARgUAFQgYAFgUgNQgKgGgFgLQgfAlgWgOQgZgPAYg8IAEgKQABAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQgMAHgNACQgQArgLAKQgXAbgWAAQgQAAgHgLQgHgKACgTIAAgBQgbAsgigDQgfgEAAgaQAAgKAGgHQAFgGAGgBQAFgBABACQAAABAAAAQABABgBAAQAAABAAABQAAAAgBABQgNASAOAIQAQAJAGgSQAHgRgOgRQgQgVAAgFQgaA6geAVQgTANgbAAQgPAAgPgJgAA6AGQgKANgEATIgCAMQAOgDALgKQAOgMAAgVQgCgIgCAAIgCAAQgIAAgJAKgADHBeQgHgLABgUQABgQADgPIAThvIgBgHIgBgFIAAgCIACgCIAGgDIAIgBQALAAAIAHQAHAHAAAOQAAAKgFAUIgNAxIgMAuQgDANABAIQABAHAFACQAFABAHgFQAJgFAEgGIAAgBQAAgMADgKQACgMAHgMQAFgLAIgHQAGgFAKgGQAJgGAIgCQAJgCAIAAQAPAAAIAGQAJAHAAAIQgBAIgFAFQgFAEgLAAQgJAAgIgFQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAgBQAHgDACgEQACgEgDgDQgCgDgFAAQgKABgJAKQgKALgFAUQgFARABANQACANAGAAQAHAAAJgMQAJgOAHgTIABgGQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAIACIAJADIAHAFQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQgFASABAKQAAALAFACQAEABAHgEQAHgFAEgFQABgBAAgBQABAAAAgBQAAAAABAAQAAgBAAAAIADABQACACAAADQABADgBACQgHALgLAIQgLAHgKAAQgKAAgIgJQgHgJgBgRQgSAjgWAAQgPAAgHgQIgBgDQgHAIgIAFQgLAIgLAAQgOAAgIgLg");
	this.shape_6.setTransform(48.6659,32.0055);

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(48.05,33.2,1,1,0,0,0,38.6,10.6);
	this.instance_2.alpha = 0.3008;
	this.instance_2.compositeOperation = "multiply";

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AneAHIgFgNIPHAAIgFANg");
	this.shape_7.setTransform(48.425,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED1B2E").s().p("AnfCZQAGgSAGgdQAMg8AAg4QAAhPgXg/IO9AAQgXBDAABLQAAA4AMA8QAFAdAHASg");
	this.shape_8.setTransform(48.4,32.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED2027").s().p("AnfCZQAGgSAGgdQAMg8AAg4QAAhPgXg/IO9AAQgXBDAABLQAAA4AMA8QAFAdAHASg");
	this.shape_9.setTransform(48.4,32.025);

	var maskedShapeInstanceList = [this.instance,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.instance_1,this.shape_6,this.instance_2,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_2},{t:this.shape_6},{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0.1,96.9,47.3), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop,reversed) {
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
	mask_1.graphics.p("AnjDtIAAnZIPHAAIAAHZg");
	mask_1.setTransform(48.425,23.675);

	// Layer_3
	this.instance_13 = new lib.ClipGroup_0_1();
	this.instance_13.setTransform(48.4,23.7,1,1,0,0,0,48.4,23.7);

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0,0,96.9,47.4), null);


(lib.LogoEstrella = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_14();
	this.instance.setTransform(0,13.9,0.8895,0.8895,0,0,0,0,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.2,42.1);


(lib.Logo2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(1.85,50.05,0.8798,0.8798,0,0,0,5.9,56.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.3,0,251.4,100.1);


(lib.Logo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.uzkandis("synched",0);
	this.instance.setTransform(403.5,95,1,1,0,0,0,71.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:252.5,y:124},14,cjs.Ease.cubicInOut).wait(1));

	// Layer_1
	this.instance_1 = new lib.LogoEstrella("synched",0);
	this.instance_1.setTransform(155.35,-0.55,1.4872,1.4872,0,0,0,43.1,20.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:21,scaleX:1,scaleY:1,x:155.3,y:-0.45,alpha:1},14,cjs.Ease.backOut).wait(1));

	// Layer_1
	this.instance_2 = new lib.Logo2("synched",0);
	this.instance_2.setTransform(478.9,14.35,1,1,0,0,0,122.4,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:154.9,y:74.35},14,cjs.Ease.cubicInOut).wait(1));

	// Layer_1
	this.instance_3 = new lib.Line_logo("synched",0);
	this.instance_3.setTransform(486,11.5,1,1,0,0,0,162,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:162,y:71.5},14,cjs.Ease.cubicInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-60,648,225);


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

	this.actionFrames = [182];
	// timeline functions:
	this.frame_182 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(182).call(this.frame_182).wait(17));

	// BG
	this.instance = new lib.BG();
	this.instance.setTransform(500,100,1,1,0,0,0,500,100);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(184).to({_off:false},0).to({alpha:1},14).wait(1));

	// Logo
	this.instance_1 = new lib.Logo_1("synched",0,false);
	this.instance_1.setTransform(838,100.5,1,1,0,0,0,162,71.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(140).to({_off:false},0).wait(59));

	// Meskuciai
	this.instance_2 = new lib.meskuciuai2("synched",0,false);
	this.instance_2.setTransform(279,69.35,1,1,0,0,0,73.7,51.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(132).to({_off:false},0).wait(67));

	// Meskutis
	this.instance_3 = new lib.meskutis2("synched",0);
	this.instance_3.setTransform(-147,188.5,1,1,0,0,0,126,173.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(127).to({_off:false},0).to({x:149},17,cjs.Ease.quadInOut).wait(55));

	// Cipsai
	this.instance_4 = new lib.Lines("synched",0,false);
	this.instance_4.setTransform(442,110,1,1,0,0,0,797,145);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).wait(139));

	// Meskiukai3
	this.instance_5 = new lib.Meskuciai("synched",14,false);
	this.instance_5.setTransform(479.25,73.8,1,1,0,0,0,512.9,159.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({_off:true},87).wait(93));

	// Meskiukai2
	this.instance_6 = new lib.Meskuciai("synched",14,false);
	this.instance_6.setTransform(479.25,73.8,1,1,0,0,180,512.9,159.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},88).wait(102));

	// Meskiukai1
	this.instance_7 = new lib.Meskuciai("synched",14,false);
	this.instance_7.setTransform(479.25,73.8,1,1,0,0,0,512.9,159.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},88).wait(111));

	// BG
	this.instance_8 = new lib.BG();
	this.instance_8.setTransform(500,100,1,1,0,0,0,500,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(199));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-221.1,1738,787.1);
// library properties:
lib.properties = {
	id: 'C0029AB03ABC6B4D94DF699EDD15C269',
	width: 1000,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_1_lines.png", id:"_1_lines"},
		{src:"images/_2_lines.png", id:"_2_lines"},
		{src:"images/_3_lines.png", id:"_3_lines"},
		{src:"images/_4_lines.png", id:"_4_lines"},
		{src:"images/Geltonas.png", id:"Geltonas"},
		{src:"images/Line5_lines.png", id:"Line5_lines"},
		{src:"images/Logo.png", id:"Logo"},
		{src:"images/Melynas.png", id:"Melynas"},
		{src:"images/Meskutis.png", id:"Meskutis"},
		{src:"images/Meskutis2.png", id:"Meskutis2"}
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
an.compositions['C0029AB03ABC6B4D94DF699EDD15C269'] = {
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