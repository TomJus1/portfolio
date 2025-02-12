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



(lib.Geltonas_300x250 = function() {
	this.initialize(img.Geltonas_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,221);


(lib.Line5_lines_300x250 = function() {
	this.initialize(img.Line5_lines_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,149);


(lib.line_1_300x250 = function() {
	this.initialize(img.line_1_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,130);


(lib.line_2_300x250 = function() {
	this.initialize(img.line_2_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,248,130);


(lib.line_3_300x250 = function() {
	this.initialize(img.line_3_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,116);


(lib.Logo_300x250 = function() {
	this.initialize(img.Logo_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,97);


(lib.Melynas_300x250 = function() {
	this.initialize(img.Melynas_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,222);


(lib.Meskutis = function() {
	this.initialize(img.Meskutis);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,116);


(lib.Meskutis_300x250 = function() {
	this.initialize(img.Meskutis_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,190);


(lib.paragauk = function() {
	this.initialize(img.paragauk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,105);// helper functions:

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
	this.instance = new lib.Logo_300x250();
	this.instance.setTransform(-2,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-25,126,97);


(lib.Para = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.paragauk();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,233,105);


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
	this.instance = new lib.Meskutis_300x250();
	this.instance.setTransform(73,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73,125,125,190);


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
	this.instance = new lib.line_3_300x250();
	this.instance.setTransform(-461,153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-461,153,219,116);


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
	this.instance = new lib.line_2_300x250();
	this.instance.setTransform(204,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(204,-42,248,130);


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
	this.instance = new lib.line_1_300x250();
	this.instance.setTransform(335,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(335,-11,248,130);


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
	this.instance = new lib.Line5_lines_300x250();
	this.instance.setTransform(13,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,-12,292,149);


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
	this.instance = new lib.Geltonas_300x250();
	this.instance.setTransform(-459,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459,35,172,221);


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
	this.instance = new lib.Melynas_300x250();
	this.instance.setTransform(-219,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219,19,173,222);


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
	this.shape.graphics.f("#ED1F35").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance.setTransform(64.85,-89.3,0.8678,0.8678,31.925,0,0,52,58.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:63.75,y:-85.35},0).wait(1).to({y:-80.2},0).wait(1).to({y:-74.65},0).wait(1).to({y:-68.7},0).wait(1).to({y:-62.2},0).wait(1).to({y:-55.2},0).wait(1).to({y:-47.7},0).wait(1).to({y:-39.55},0).wait(1).to({y:-30.75},0).wait(1).to({y:-21.25},0).wait(1).to({y:-11},0).wait(1).to({y:0.1},0).wait(1).to({y:12},0).wait(1).to({y:24.9},0).wait(1).to({y:38.75},0).wait(1).to({y:53.6},0).wait(1).to({y:69.45},0).wait(1).to({y:86.35},0).wait(1).to({y:104.2},0).wait(1).to({y:122.9},0).wait(1).to({y:142.25},0).wait(1).to({y:161.95},0).wait(1).to({y:181.8},0).wait(1).to({y:201.4},0).wait(1).to({y:220.6},0).wait(1).to({y:239},0).wait(1).to({y:256.6},0).wait(1).to({y:273.15},0).wait(1).to({y:288.6},0).wait(1).to({rotation:31.9251,y:303.05},0).wait(1).to({y:316.4},0).wait(1).to({y:328.8},0).wait(1).to({y:340.2},0).wait(1).to({y:350.75},0).wait(1).to({y:360.45},0).wait(1).to({y:369.4},0).wait(1).to({y:377.65},0).wait(1).to({y:385.25},0).wait(1).to({y:392.2},0).wait(1).to({y:398.65},0).wait(1).to({y:404.55},0).wait(1).to({y:410},0).wait(1).to({y:414.95},0).wait(1).to({y:419.55},0).wait(1).to({y:423.7},0).wait(1).to({y:427.55},0).wait(1).to({y:431},0).wait(1).to({y:434.2},0).wait(1).to({y:437.05},0).wait(1).to({y:439.65},0).wait(1).to({y:441.95},0).wait(1).to({y:444.05},0).wait(1).to({y:445.9},0).wait(1).to({y:447.55},0).wait(1).to({y:448.95},0).wait(1).to({y:450.15},0).wait(1).to({y:451.2},0).wait(1).to({y:452.05},0).wait(1).to({y:452.7},0).wait(1).to({y:453.25},0).wait(1).to({y:453.6},0).wait(1).to({y:453.8},0).wait(1).to({regX:51.9,regY:58.1,x:64.85,y:454.6},0).wait(29).to({_off:true},1).wait(18));

	// meskutis
	this.instance_1 = new lib.meskutis();
	this.instance_1.setTransform(982.2,-121.5,0.8679,0.8679,-1.2835,0,0,52,58.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:980.85,y:-117.2},0).wait(1).to({y:-112.45},0).wait(1).to({y:-107.35},0).wait(1).to({y:-101.8},0).wait(1).to({rotation:-1.2836,y:-95.85},0).wait(1).to({y:-89.35},0).wait(1).to({y:-82.4},0).wait(1).to({y:-74.85},0).wait(1).to({y:-66.7},0).wait(1).to({y:-57.9},0).wait(1).to({y:-48.45},0).wait(1).to({rotation:-1.2837,y:-38.2},0).wait(1).to({y:-27.1},0).wait(1).to({y:-15.2},0).wait(1).to({y:-2.35},0).wait(1).to({y:11.5},0).wait(1).to({rotation:-1.2838,y:26.35},0).wait(1).to({y:42.25},0).wait(1).to({y:59.1},0).wait(1).to({rotation:-1.2839,y:76.95},0).wait(1).to({y:95.6},0).wait(1).to({y:114.9},0).wait(1).to({rotation:-1.284,y:134.6},0).wait(1).to({y:154.45},0).wait(1).to({y:174.05},0).wait(1).to({rotation:-1.2841,y:193.2},0).wait(1).to({y:211.65},0).wait(1).to({y:229.2},0).wait(1).to({rotation:-1.2842,y:245.75},0).wait(1).to({y:261.25},0).wait(1).to({y:275.65},0).wait(1).to({y:289},0).wait(1).to({rotation:-1.2843,y:301.4},0).wait(1).to({y:312.8},0).wait(1).to({y:323.35},0).wait(1).to({y:333.05},0).wait(1).to({y:341.95},0).wait(1).to({rotation:-1.2844,y:350.2},0).wait(1).to({y:357.8},0).wait(1).to({y:364.75},0).wait(1).to({y:371.2},0).wait(1).to({y:377.1},0).wait(1).to({y:382.5},0).wait(1).to({y:387.5},0).wait(1).to({y:392.05},0).wait(1).to({y:396.2},0).wait(1).to({y:400.05},0).wait(1).to({y:403.5},0).wait(1).to({rotation:-1.2845,y:406.7},0).wait(1).to({y:409.55},0).wait(1).to({y:412.15},0).wait(1).to({y:414.45},0).wait(1).to({y:416.55},0).wait(1).to({y:418.4},0).wait(1).to({y:420},0).wait(1).to({y:421.45},0).wait(1).to({y:422.65},0).wait(1).to({y:423.7},0).wait(1).to({y:424.55},0).wait(1).to({y:425.2},0).wait(1).to({y:425.75},0).wait(1).to({y:426.1},0).wait(1).to({y:426.3},0).wait(1).to({regX:51.9,regY:58.2,x:982.15,y:426.5},0).wait(28).to({_off:true},1).wait(18));

	// meskutis
	this.instance_2 = new lib.meskutis();
	this.instance_2.setTransform(600,-161,0.8679,0.8679,24.4426,0,0,51.9,58.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:598.85,y:-157.85},0).wait(1).to({y:-153.85},0).wait(1).to({y:-149.5},0).wait(1).to({y:-144.75},0).wait(1).to({y:-139.65},0).wait(1).to({y:-134.1},0).wait(1).to({y:-128.15},0).wait(1).to({y:-121.7},0).wait(1).to({y:-114.75},0).wait(1).to({y:-107.2},0).wait(1).to({y:-99.1},0).wait(1).to({y:-90.3},0).wait(1).to({y:-80.85},0).wait(1).to({y:-70.6},0).wait(1).to({y:-59.6},0).wait(1).to({y:-47.7},0).wait(1).to({y:-34.85},0).wait(1).to({y:-21.05},0).wait(1).to({y:-6.2},0).wait(1).to({y:9.65},0).wait(1).to({y:26.5},0).wait(1).to({rotation:24.4427,y:44.3},0).wait(1).to({y:62.95},0).wait(1).to({y:82.15},0).wait(1).to({y:101.8},0).wait(1).to({y:121.6},0).wait(1).to({y:141.2},0).wait(1).to({y:160.3},0).wait(1).to({y:178.7},0).wait(1).to({y:196.2},0).wait(1).to({y:212.7},0).wait(1).to({y:228.15},0).wait(1).to({y:242.5},0).wait(1).to({y:255.85},0).wait(1).to({y:268.2},0).wait(1).to({y:279.6},0).wait(1).to({y:290.1},0).wait(1).to({y:299.75},0).wait(1).to({y:308.7},0).wait(1).to({y:316.9},0).wait(1).to({y:324.5},0).wait(1).to({y:331.45},0).wait(1).to({y:337.85},0).wait(1).to({y:343.75},0).wait(1).to({y:349.15},0).wait(1).to({y:354.1},0).wait(1).to({y:358.65},0).wait(1).to({y:362.85},0).wait(1).to({y:366.65},0).wait(1).to({y:370.15},0).wait(1).to({y:373.3},0).wait(1).to({y:376.2},0).wait(1).to({y:378.75},0).wait(1).to({y:381.1},0).wait(1).to({y:383.15},0).wait(1).to({y:385},0).wait(1).to({y:386.65},0).wait(1).to({y:388.05},0).wait(1).to({y:389.25},0).wait(1).to({y:390.3},0).wait(1).to({y:391.15},0).wait(1).to({y:391.8},0).wait(1).to({y:392.35},0).wait(1).to({y:392.7},0).wait(1).to({y:392.9},0).wait(1).to({regX:51.9,regY:58.2,x:599.95,y:393.6},0).wait(26).to({_off:true},1).wait(18));

	// meskutis
	this.instance_3 = new lib.meskutis();
	this.instance_3.setTransform(762.35,60.95,0.5446,0.5446,-11.0779,0,0,51.8,58.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:761.55,y:65.95},0).wait(1).to({y:71.5},0).wait(1).to({y:77.5},0).wait(1).to({rotation:-11.078,y:83.95},0).wait(1).to({y:90.95},0).wait(1).to({y:98.5},0).wait(1).to({y:106.65},0).wait(1).to({y:115.45},0).wait(1).to({rotation:-11.0781,y:124.95},0).wait(1).to({y:135.2},0).wait(1).to({y:146.3},0).wait(1).to({y:158.25},0).wait(1).to({rotation:-11.0782,y:171.1},0).wait(1).to({y:184.95},0).wait(1).to({y:199.85},0).wait(1).to({rotation:-11.0783,y:215.75},0).wait(1).to({y:232.65},0).wait(1).to({rotation:-11.0784,y:250.55},0).wait(1).to({y:269.25},0).wait(1).to({scaleX:0.5447,scaleY:0.5447,y:288.55},0).wait(1).to({rotation:-11.0785,y:308.3},0).wait(1).to({y:328.15},0).wait(1).to({rotation:-11.0786,y:347.8},0).wait(1).to({y:366.95},0).wait(1).to({rotation:-11.0787,y:385.4},0).wait(1).to({y:402.95},0).wait(1).to({rotation:-11.0788,y:419.55},0).wait(1).to({y:435.05},0).wait(1).to({y:449.45},0).wait(1).to({rotation:-11.0789,y:462.85},0).wait(1).to({y:475.2},0).wait(1).to({y:486.65},0).wait(1).to({y:497.2},0).wait(1).to({rotation:-11.079,y:506.9},0).wait(1).to({y:515.85},0).wait(1).to({y:524.1},0).wait(1).to({y:531.7},0).wait(1).to({y:538.7},0).wait(1).to({y:545.1},0).wait(1).to({rotation:-11.0791,y:551.05},0).wait(1).to({y:556.45},0).wait(1).to({y:561.45},0).wait(1).to({y:566},0).wait(1).to({y:570.2},0).wait(1).to({y:574},0).wait(1).to({y:577.5},0).wait(1).to({y:580.65},0).wait(1).to({y:583.55},0).wait(1).to({y:586.15},0).wait(1).to({y:588.45},0).wait(1).to({rotation:-11.0792,y:590.55},0).wait(1).to({y:592.4},0).wait(1).to({y:594},0).wait(1).to({y:595.45},0).wait(1).to({y:596.65},0).wait(1).to({y:597.7},0).wait(1).to({y:598.55},0).wait(1).to({y:599.2},0).wait(1).to({y:599.75},0).wait(1).to({y:600.1},0).wait(1).to({y:600.3},0).wait(1).to({regX:51.8,regY:58.3,scaleX:0.5446,scaleY:0.5446,x:762.35,y:600.5},0).wait(30).to({_off:true},1).wait(18));

	// meskutis
	this.instance_4 = new lib.meskutis();
	this.instance_4.setTransform(954.25,28.95,0.5615,0.5615,73.4363,0,0,51.5,58);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).wait(1).to({regX:50.5,x:954.05,y:32.5},0).wait(1).to({y:36.8},0).wait(1).to({y:41.55},0).wait(1).to({y:46.65},0).wait(1).to({y:52.2},0).wait(1).to({y:58.15},0).wait(1).to({y:64.65},0).wait(1).to({y:71.6},0).wait(1).to({y:79.15},0).wait(1).to({rotation:73.4362,y:87.25},0).wait(1).to({y:96.05},0).wait(1).to({y:105.5},0).wait(1).to({y:115.75},0).wait(1).to({y:126.8},0).wait(1).to({y:138.7},0).wait(1).to({y:151.55},0).wait(1).to({y:165.4},0).wait(1).to({rotation:73.4361,y:180.25},0).wait(1).to({y:196.1},0).wait(1).to({y:213},0).wait(1).to({y:230.8},0).wait(1).to({y:249.45},0).wait(1).to({y:268.75},0).wait(1).to({rotation:73.436,y:288.4},0).wait(1).to({y:308.2},0).wait(1).to({y:327.8},0).wait(1).to({y:346.95},0).wait(1).to({rotation:73.4359,y:365.35},0).wait(1).to({y:382.85},0).wait(1).to({y:399.4},0).wait(1).to({y:414.85},0).wait(1).to({y:429.25},0).wait(1).to({y:442.6},0).wait(1).to({rotation:73.4358,y:454.95},0).wait(1).to({y:466.35},0).wait(1).to({y:476.85},0).wait(1).to({x:954,y:486.55},0).wait(1).to({y:495.5},0).wait(1).to({y:503.7},0).wait(1).to({y:511.3},0).wait(1).to({y:518.25},0).wait(1).to({y:524.65},0).wait(1).to({y:530.55},0).wait(1).to({y:535.95},0).wait(1).to({y:540.95},0).wait(1).to({rotation:73.4357,y:545.5},0).wait(1).to({y:549.7},0).wait(1).to({y:553.5},0).wait(1).to({y:556.95},0).wait(1).to({y:560.15},0).wait(1).to({y:563},0).wait(1).to({y:565.6},0).wait(1).to({y:567.9},0).wait(1).to({y:570},0).wait(1).to({scaleX:0.5616,scaleY:0.5616,y:571.85},0).wait(1).to({y:573.45},0).wait(1).to({y:574.85},0).wait(1).to({y:576.1},0).wait(1).to({y:577.1},0).wait(1).to({y:577.95},0).wait(1).to({y:578.65},0).wait(1).to({y:579.15},0).wait(1).to({y:579.5},0).wait(1).to({y:579.7},0).wait(1).to({regX:51.6,x:954.2,y:580.3},0).wait(27).to({_off:true},1).wait(18));

	// meskutis
	this.instance_5 = new lib.meskutis();
	this.instance_5.setTransform(510.6,-63.9,0.4761,0.4761,45,0,0,51.2,57.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:510.2,y:-60.6},0).wait(1).to({y:-56.9},0).wait(1).to({y:-52.9},0).wait(1).to({y:-48.55},0).wait(1).to({y:-43.85},0).wait(1).to({y:-38.7},0).wait(1).to({y:-33.2},0).wait(1).to({y:-27.25},0).wait(1).to({y:-20.8},0).wait(1).to({y:-13.85},0).wait(1).to({y:-6.35},0).wait(1).to({y:1.8},0).wait(1).to({y:10.55},0).wait(1).to({y:20},0).wait(1).to({y:30.2},0).wait(1).to({y:41.2},0).wait(1).to({y:53.1},0).wait(1).to({y:65.9},0).wait(1).to({y:79.7},0).wait(1).to({y:94.5},0).wait(1).to({y:110.3},0).wait(1).to({scaleX:0.4762,scaleY:0.4762,y:127.15},0).wait(1).to({y:144.95},0).wait(1).to({y:163.55},0).wait(1).to({y:182.8},0).wait(1).to({y:202.45},0).wait(1).to({y:222.15},0).wait(1).to({y:241.75},0).wait(1).to({y:260.8},0).wait(1).to({y:279.15},0).wait(1).to({y:296.65},0).wait(1).to({y:313.15},0).wait(1).to({y:328.55},0).wait(1).to({y:342.9},0).wait(1).to({y:356.25},0).wait(1).to({y:368.55},0).wait(1).to({y:379.95},0).wait(1).to({y:390.45},0).wait(1).to({y:400.1},0).wait(1).to({y:409},0).wait(1).to({y:417.2},0).wait(1).to({y:424.8},0).wait(1).to({y:431.75},0).wait(1).to({y:438.15},0).wait(1).to({y:444},0).wait(1).to({y:449.4},0).wait(1).to({y:454.35},0).wait(1).to({y:458.9},0).wait(1).to({y:463.1},0).wait(1).to({y:466.9},0).wait(1).to({y:470.35},0).wait(1).to({y:473.5},0).wait(1).to({y:476.35},0).wait(1).to({y:478.95},0).wait(1).to({y:481.25},0).wait(1).to({y:483.35},0).wait(1).to({y:485.2},0).wait(1).to({y:486.8},0).wait(1).to({x:510.15,y:488.2},0).wait(1).to({y:489.45},0).wait(1).to({y:490.45},0).wait(1).to({y:491.3},0).wait(1).to({y:491.95},0).wait(1).to({y:492.5},0).wait(1).to({y:492.85},0).wait(1).to({y:493.05},0).wait(1).to({regX:51.2,regY:57.9,x:510.55,y:493.3},0).wait(25).to({_off:true},1).wait(18));

	// meskutis
	this.instance_6 = new lib.meskutis();
	this.instance_6.setTransform(596.6,39.3,0.3505,0.3505,0,0,0,51.1,57.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:596.35,y:43.7},0).wait(1).to({y:48.45},0).wait(1).to({y:53.55},0).wait(1).to({y:59.1},0).wait(1).to({y:65.05},0).wait(1).to({y:71.55},0).wait(1).to({y:78.5},0).wait(1).to({y:86.05},0).wait(1).to({y:94.2},0).wait(1).to({y:102.95},0).wait(1).to({y:112.45},0).wait(1).to({y:122.7},0).wait(1).to({y:133.75},0).wait(1).to({y:145.7},0).wait(1).to({y:158.55},0).wait(1).to({y:172.4},0).wait(1).to({y:187.25},0).wait(1).to({y:203.1},0).wait(1).to({y:220},0).wait(1).to({y:237.85},0).wait(1).to({y:256.5},0).wait(1).to({y:275.85},0).wait(1).to({y:295.55},0).wait(1).to({y:315.35},0).wait(1).to({y:334.95},0).wait(1).to({y:354.1},0).wait(1).to({y:372.55},0).wait(1).to({y:390.05},0).wait(1).to({y:406.6},0).wait(1).to({y:422.1},0).wait(1).to({y:436.5},0).wait(1).to({y:449.85},0).wait(1).to({y:462.2},0).wait(1).to({y:473.6},0).wait(1).to({y:484.15},0).wait(1).to({y:493.85},0).wait(1).to({y:502.8},0).wait(1).to({y:511.05},0).wait(1).to({y:518.6},0).wait(1).to({y:525.6},0).wait(1).to({y:532},0).wait(1).to({y:537.9},0).wait(1).to({y:543.3},0).wait(1).to({y:548.3},0).wait(1).to({y:552.85},0).wait(1).to({y:557.05},0).wait(1).to({y:560.85},0).wait(1).to({y:564.35},0).wait(1).to({y:567.5},0).wait(1).to({y:570.35},0).wait(1).to({y:572.95},0).wait(1).to({y:575.3},0).wait(1).to({y:577.35},0).wait(1).to({y:579.2},0).wait(1).to({y:580.85},0).wait(1).to({y:582.25},0).wait(1).to({y:583.45},0).wait(1).to({y:584.5},0).wait(1).to({y:585.35},0).wait(1).to({y:586},0).wait(1).to({y:586.55},0).wait(1).to({y:586.9},0).wait(1).to({y:587.1},0).wait(1).to({regX:51,regY:57.9,x:596.6,y:587.15},0).wait(28).to({_off:true},1).wait(18));

	// meskutis
	this.instance_7 = new lib.meskutis();
	this.instance_7.setTransform(747.9,-86.4,0.5563,0.5563,29.9971,0,0,50.6,57.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:747.75,y:-82.55},0).wait(1).to({y:-78.55},0).wait(1).to({y:-74.2},0).wait(1).to({y:-69.45},0).wait(1).to({y:-64.35},0).wait(1).to({y:-58.8},0).wait(1).to({y:-52.85},0).wait(1).to({y:-46.4},0).wait(1).to({y:-39.45},0).wait(1).to({y:-31.9},0).wait(1).to({y:-23.8},0).wait(1).to({y:-15},0).wait(1).to({y:-5.55},0).wait(1).to({y:4.7},0).wait(1).to({y:15.7},0).wait(1).to({y:27.6},0).wait(1).to({y:40.45},0).wait(1).to({y:54.2},0).wait(1).to({y:69.05},0).wait(1).to({y:84.9},0).wait(1).to({y:101.75},0).wait(1).to({y:119.55},0).wait(1).to({y:138.2},0).wait(1).to({rotation:29.997,y:157.45},0).wait(1).to({y:177.1},0).wait(1).to({y:196.9},0).wait(1).to({y:216.5},0).wait(1).to({y:235.6},0).wait(1).to({y:254},0).wait(1).to({y:271.5},0).wait(1).to({y:288},0).wait(1).to({y:303.45},0).wait(1).to({y:317.8},0).wait(1).to({y:331.15},0).wait(1).to({y:343.5},0).wait(1).to({y:354.9},0).wait(1).to({y:365.4},0).wait(1).to({y:375.05},0).wait(1).to({y:384},0).wait(1).to({y:392.2},0).wait(1).to({y:399.8},0).wait(1).to({y:406.75},0).wait(1).to({rotation:29.9969,y:413.15},0).wait(1).to({y:419.05},0).wait(1).to({y:424.45},0).wait(1).to({y:429.4},0).wait(1).to({y:433.95},0).wait(1).to({y:438.15},0).wait(1).to({y:441.95},0).wait(1).to({y:445.4},0).wait(1).to({y:448.55},0).wait(1).to({y:451.45},0).wait(1).to({y:454},0).wait(1).to({y:456.35},0).wait(1).to({y:458.4},0).wait(1).to({y:460.25},0).wait(1).to({y:461.9},0).wait(1).to({y:463.3},0).wait(1).to({y:464.5},0).wait(1).to({y:465.55},0).wait(1).to({y:466.4},0).wait(1).to({y:467.05},0).wait(1).to({y:467.55},0).wait(1).to({y:467.95},0).wait(1).to({y:468.15},0).wait(1).to({regX:50.7,regY:57.8,x:747.9},0).wait(26).to({_off:true},1).wait(18));

	// meskutis
	this.instance_8 = new lib.meskutis();
	this.instance_8.setTransform(281.4,-24.55,0.4903,0.4903,29.9965,0,0,50.7,57.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,rotation:29.9966,x:281.15,y:-22},0).wait(1).to({y:-19.4},0).wait(1).to({y:-16.6},0).wait(1).to({y:-13.5},0).wait(1).to({y:-10.1},0).wait(1).to({y:-6.4},0).wait(1).to({y:-2.4},0).wait(1).to({y:1.9},0).wait(1).to({y:6.6},0).wait(1).to({y:11.65},0).wait(1).to({y:17.15},0).wait(1).to({y:23.1},0).wait(1).to({y:29.5},0).wait(1).to({y:36.4},0).wait(1).to({y:43.8},0).wait(1).to({y:51.85},0).wait(1).to({y:60.6},0).wait(1).to({rotation:29.9967,y:70},0).wait(1).to({y:80.15},0).wait(1).to({y:91.1},0).wait(1).to({y:102.9},0).wait(1).to({y:115.65},0).wait(1).to({y:129.35},0).wait(1).to({y:144.05},0).wait(1).to({rotation:29.9968,y:159.8},0).wait(1).to({y:176.55},0).wait(1).to({scaleX:0.4904,scaleY:0.4904,y:194.2},0).wait(1).to({y:212.7},0).wait(1).to({y:231.8},0).wait(1).to({rotation:29.9969,y:251.35},0).wait(1).to({y:270.95},0).wait(1).to({y:290.4},0).wait(1).to({y:309.35},0).wait(1).to({rotation:29.997,y:327.6},0).wait(1).to({y:345},0).wait(1).to({y:361.35},0).wait(1).to({y:376.7},0).wait(1).to({y:390.95},0).wait(1).to({y:404.2},0).wait(1).to({rotation:29.9971,y:416.45},0).wait(1).to({y:427.75},0).wait(1).to({y:438.2},0).wait(1).to({y:447.8},0).wait(1).to({y:456.65},0).wait(1).to({y:464.8},0).wait(1).to({y:472.35},0).wait(1).to({y:479.25},0).wait(1).to({y:485.6},0).wait(1).to({y:491.45},0).wait(1).to({rotation:29.9972,y:496.8},0).wait(1).to({y:501.75},0).wait(1).to({y:506.25},0).wait(1).to({y:510.4},0).wait(1).to({y:514.2},0).wait(1).to({y:517.65},0).wait(1).to({y:520.75},0).wait(1).to({y:523.6},0).wait(1).to({y:526.15},0).wait(1).to({y:528.45},0).wait(1).to({y:530.55},0).wait(1).to({y:532.35},0).wait(1).to({y:533.95},0).wait(1).to({y:535.35},0).wait(1).to({y:536.6},0).wait(1).to({y:537.6},0).wait(1).to({y:538.45},0).wait(1).to({y:539.1},0).wait(1).to({y:539.6},0).wait(1).to({y:540},0).wait(1).to({y:540.2},0).wait(1).to({regX:50.6,regY:57.8,x:281.3,y:540.15},0).wait(21).to({_off:true},1).wait(18));

	// meskutis
	this.instance_9 = new lib.meskutis();
	this.instance_9.setTransform(390.45,17.65,0.4903,0.4903,29.9965,0,0,50.7,57.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,rotation:29.9966,x:390.2,y:21.85},0).wait(1).to({y:26.2},0).wait(1).to({y:30.95},0).wait(1).to({y:36.05},0).wait(1).to({y:41.55},0).wait(1).to({y:47.55},0).wait(1).to({y:54},0).wait(1).to({y:60.95},0).wait(1).to({y:68.5},0).wait(1).to({y:76.6},0).wait(1).to({y:85.4},0).wait(1).to({y:94.85},0).wait(1).to({rotation:29.9967,y:105.1},0).wait(1).to({y:116.15},0).wait(1).to({y:128.1},0).wait(1).to({y:140.9},0).wait(1).to({y:154.75},0).wait(1).to({y:169.6},0).wait(1).to({y:185.45},0).wait(1).to({rotation:29.9968,y:202.35},0).wait(1).to({scaleX:0.4904,scaleY:0.4904,y:220.15},0).wait(1).to({y:238.8},0).wait(1).to({y:258.1},0).wait(1).to({rotation:29.9969,y:277.8},0).wait(1).to({y:297.55},0).wait(1).to({y:317.15},0).wait(1).to({y:336.3},0).wait(1).to({y:354.7},0).wait(1).to({rotation:29.997,y:372.25},0).wait(1).to({y:388.75},0).wait(1).to({y:404.2},0).wait(1).to({y:418.6},0).wait(1).to({y:431.95},0).wait(1).to({rotation:29.9971,y:444.3},0).wait(1).to({y:455.7},0).wait(1).to({y:466.25},0).wait(1).to({y:475.9},0).wait(1).to({y:484.85},0).wait(1).to({y:493.1},0).wait(1).to({y:500.65},0).wait(1).to({y:507.6},0).wait(1).to({y:514.05},0).wait(1).to({y:519.95},0).wait(1).to({y:525.35},0).wait(1).to({rotation:29.9972,y:530.3},0).wait(1).to({y:534.85},0).wait(1).to({y:539.05},0).wait(1).to({y:542.85},0).wait(1).to({y:546.35},0).wait(1).to({y:549.5},0).wait(1).to({y:552.35},0).wait(1).to({y:554.95},0).wait(1).to({y:557.25},0).wait(1).to({y:559.35},0).wait(1).to({y:561.2},0).wait(1).to({y:562.8},0).wait(1).to({y:564.25},0).wait(1).to({y:565.45},0).wait(1).to({y:566.5},0).wait(1).to({y:567.3},0).wait(1).to({y:568},0).wait(1).to({y:568.5},0).wait(1).to({y:568.9},0).wait(1).to({y:569.1},0).wait(1).to({regX:50.6,regY:57.8,x:390.35,y:569.05},0).wait(27).to({_off:true},1).wait(18));

	// meskutis
	this.instance_10 = new lib.meskutis();
	this.instance_10.setTransform(356.8,-96,0.4903,0.4903,29.9965,0,0,50.7,57.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,rotation:29.9966,x:356.55,y:-91.1},0).wait(1).to({y:-85.95},0).wait(1).to({y:-80.4},0).wait(1).to({y:-74.45},0).wait(1).to({y:-67.95},0).wait(1).to({y:-60.95},0).wait(1).to({y:-53.45},0).wait(1).to({y:-45.3},0).wait(1).to({y:-36.5},0).wait(1).to({y:-27},0).wait(1).to({y:-16.75},0).wait(1).to({rotation:29.9967,y:-5.65},0).wait(1).to({y:6.3},0).wait(1).to({y:19.15},0).wait(1).to({y:33},0).wait(1).to({y:47.8},0).wait(1).to({y:63.7},0).wait(1).to({rotation:29.9968,y:80.65},0).wait(1).to({y:98.5},0).wait(1).to({scaleX:0.4904,scaleY:0.4904,y:117.15},0).wait(1).to({y:136.5},0).wait(1).to({rotation:29.9969,y:156.2},0).wait(1).to({y:176.05},0).wait(1).to({x:356.5,y:195.7},0).wait(1).to({y:214.85},0).wait(1).to({y:233.3},0).wait(1).to({rotation:29.997,y:250.85},0).wait(1).to({y:267.4},0).wait(1).to({y:282.9},0).wait(1).to({y:297.3},0).wait(1).to({y:310.7},0).wait(1).to({rotation:29.9971,y:323.05},0).wait(1).to({y:334.5},0).wait(1).to({y:345.05},0).wait(1).to({y:354.75},0).wait(1).to({y:363.7},0).wait(1).to({y:371.95},0).wait(1).to({y:379.5},0).wait(1).to({y:386.5},0).wait(1).to({y:392.9},0).wait(1).to({y:398.85},0).wait(1).to({y:404.25},0).wait(1).to({rotation:29.9972,y:409.25},0).wait(1).to({y:413.8},0).wait(1).to({y:418},0).wait(1).to({y:421.8},0).wait(1).to({y:425.3},0).wait(1).to({y:428.45},0).wait(1).to({y:431.35},0).wait(1).to({y:433.9},0).wait(1).to({y:436.25},0).wait(1).to({y:438.35},0).wait(1).to({y:440.2},0).wait(1).to({y:441.8},0).wait(1).to({y:443.2},0).wait(1).to({y:444.45},0).wait(1).to({y:445.45},0).wait(1).to({y:446.3},0).wait(1).to({y:447},0).wait(1).to({y:447.5},0).wait(1).to({y:447.85},0).wait(1).to({y:448.1},0).wait(1).to({regX:50.6,regY:57.8,x:356.65,y:448.05},0).wait(29).to({_off:true},1).wait(18));

	// meskutis
	this.instance_11 = new lib.meskutis();
	this.instance_11.setTransform(876.15,-78.8,0.513,0.513,0,0,0,50.8,58.3);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).wait(1).to({regX:50.5,regY:58,x:875.95,y:-75.2},0).wait(1).to({y:-71.2},0).wait(1).to({y:-66.85},0).wait(1).to({y:-62.1},0).wait(1).to({y:-57},0).wait(1).to({y:-51.45},0).wait(1).to({y:-45.5},0).wait(1).to({y:-39.05},0).wait(1).to({y:-32.1},0).wait(1).to({y:-24.55},0).wait(1).to({y:-16.45},0).wait(1).to({y:-7.65},0).wait(1).to({y:1.8},0).wait(1).to({y:12},0).wait(1).to({y:23.05},0).wait(1).to({y:34.9},0).wait(1).to({y:47.75},0).wait(1).to({y:61.55},0).wait(1).to({y:76.4},0).wait(1).to({y:92.25},0).wait(1).to({y:109.1},0).wait(1).to({y:126.9},0).wait(1).to({y:145.5},0).wait(1).to({y:164.8},0).wait(1).to({y:184.45},0).wait(1).to({y:204.25},0).wait(1).to({y:223.8},0).wait(1).to({y:242.9},0).wait(1).to({y:261.3},0).wait(1).to({y:278.8},0).wait(1).to({y:295.3},0).wait(1).to({y:310.75},0).wait(1).to({y:325.15},0).wait(1).to({y:338.45},0).wait(1).to({y:350.8},0).wait(1).to({y:362.2},0).wait(1).to({y:372.7},0).wait(1).to({y:382.4},0).wait(1).to({y:391.3},0).wait(1).to({y:399.55},0).wait(1).to({y:407.1},0).wait(1).to({y:414.05},0).wait(1).to({y:420.45},0).wait(1).to({y:426.35},0).wait(1).to({y:431.75},0).wait(1).to({y:436.75},0).wait(1).to({y:441.3},0).wait(1).to({y:445.45},0).wait(1).to({y:449.25},0).wait(1).to({y:452.75},0).wait(1).to({y:455.9},0).wait(1).to({y:458.75},0).wait(1).to({y:461.35},0).wait(1).to({y:463.65},0).wait(1).to({y:465.75},0).wait(1).to({y:467.55},0).wait(1).to({y:469.2},0).wait(1).to({y:470.6},0).wait(1).to({y:471.8},0).wait(1).to({y:472.85},0).wait(1).to({y:473.7},0).wait(1).to({y:474.35},0).wait(1).to({y:474.9},0).wait(1).to({y:475.25},0).wait(1).to({y:475.45},0).wait(1).to({regX:50.7,regY:58.4,x:876.15,y:475.7},0).wait(26).to({_off:true},1).wait(18));

	// meskutis
	this.instance_12 = new lib.meskutis();
	this.instance_12.setTransform(661.15,-45.5,0.5059,0.5059,0,0,0,50.7,58);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({_off:false},0).wait(1).to({regX:50.5,x:661,y:-41.1},0).wait(1).to({y:-36.35},0).wait(1).to({y:-31.25},0).wait(1).to({y:-25.7},0).wait(1).to({y:-19.75},0).wait(1).to({y:-13.25},0).wait(1).to({y:-6.3},0).wait(1).to({y:1.25},0).wait(1).to({y:9.4},0).wait(1).to({y:18.2},0).wait(1).to({y:27.65},0).wait(1).to({y:37.85},0).wait(1).to({y:48.9},0).wait(1).to({y:60.85},0).wait(1).to({y:73.7},0).wait(1).to({y:87.55},0).wait(1).to({y:102.4},0).wait(1).to({y:118.3},0).wait(1).to({y:135.2},0).wait(1).to({y:153.05},0).wait(1).to({y:171.7},0).wait(1).to({y:191},0).wait(1).to({y:210.7},0).wait(1).to({y:230.5},0).wait(1).to({y:250.15},0).wait(1).to({y:269.3},0).wait(1).to({y:287.7},0).wait(1).to({y:305.25},0).wait(1).to({y:321.8},0).wait(1).to({y:337.25},0).wait(1).to({y:351.65},0).wait(1).to({y:365.05},0).wait(1).to({y:377.4},0).wait(1).to({y:388.8},0).wait(1).to({y:399.35},0).wait(1).to({y:409.05},0).wait(1).to({y:418},0).wait(1).to({y:426.2},0).wait(1).to({y:433.8},0).wait(1).to({y:440.8},0).wait(1).to({y:447.2},0).wait(1).to({y:453.1},0).wait(1).to({y:458.5},0).wait(1).to({y:463.5},0).wait(1).to({y:468.05},0).wait(1).to({scaleX:0.506,scaleY:0.506,y:472.25},0).wait(1).to({y:476.05},0).wait(1).to({y:479.55},0).wait(1).to({y:482.7},0).wait(1).to({y:485.55},0).wait(1).to({y:488.15},0).wait(1).to({y:490.5},0).wait(1).to({y:492.55},0).wait(1).to({y:494.4},0).wait(1).to({y:496.05},0).wait(1).to({y:497.45},0).wait(1).to({y:498.65},0).wait(1).to({y:499.7},0).wait(1).to({y:500.55},0).wait(1).to({y:501.2},0).wait(1).to({y:501.75},0).wait(1).to({y:502.1},0).wait(1).to({y:502.3},0).wait(1).to({regX:50.6,regY:58.1,x:661.15,y:502.4},0).wait(28).to({_off:true},1).wait(18));

	// meskutis
	this.instance_13 = new lib.meskutis();
	this.instance_13.setTransform(207.2,-85.4,0.5653,0.5653,0,0,0,50.6,58);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).wait(1).to({regX:50.5,x:207.1,y:-81.35},0).wait(1).to({y:-77},0).wait(1).to({y:-72.25},0).wait(1).to({y:-67.15},0).wait(1).to({y:-61.6},0).wait(1).to({y:-55.65},0).wait(1).to({y:-49.15},0).wait(1).to({y:-42.2},0).wait(1).to({y:-34.65},0).wait(1).to({y:-26.55},0).wait(1).to({y:-17.75},0).wait(1).to({y:-8.3},0).wait(1).to({y:1.95},0).wait(1).to({y:13},0).wait(1).to({y:24.95},0).wait(1).to({y:37.7},0).wait(1).to({y:51.55},0).wait(1).to({y:66.4},0).wait(1).to({y:82.25},0).wait(1).to({y:99.15},0).wait(1).to({y:116.95},0).wait(1).to({y:135.6},0).wait(1).to({y:154.9},0).wait(1).to({y:174.55},0).wait(1).to({y:194.35},0).wait(1).to({y:213.95},0).wait(1).to({y:233.1},0).wait(1).to({y:251.5},0).wait(1).to({y:269},0).wait(1).to({y:285.55},0).wait(1).to({y:301},0).wait(1).to({y:315.4},0).wait(1).to({y:328.75},0).wait(1).to({y:341.1},0).wait(1).to({scaleX:0.5654,scaleY:0.5654,y:352.5},0).wait(1).to({y:363},0).wait(1).to({y:372.7},0).wait(1).to({y:381.65},0).wait(1).to({y:389.9},0).wait(1).to({y:397.45},0).wait(1).to({x:207.05,y:404.4},0).wait(1).to({y:410.85},0).wait(1).to({y:416.7},0).wait(1).to({y:422.15},0).wait(1).to({y:427.1},0).wait(1).to({y:431.65},0).wait(1).to({y:435.85},0).wait(1).to({y:439.65},0).wait(1).to({y:443.15},0).wait(1).to({y:446.3},0).wait(1).to({y:449.15},0).wait(1).to({y:451.75},0).wait(1).to({y:454.05},0).wait(1).to({y:456.15},0).wait(1).to({y:458},0).wait(1).to({y:459.6},0).wait(1).to({y:461.05},0).wait(1).to({y:462.25},0).wait(1).to({y:463.25},0).wait(1).to({y:464.1},0).wait(1).to({y:464.8},0).wait(1).to({y:465.3},0).wait(1).to({y:465.65},0).wait(1).to({y:465.9},0).wait(1).to({x:207.15,y:465.95},0).wait(27).to({_off:true},1).wait(18));

	// meskutis
	this.instance_14 = new lib.meskutis();
	this.instance_14.setTransform(146.15,49.75,1,1,0,0,0,50.5,58);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({_off:false},0).wait(1).to({y:54.9},0).wait(1).to({y:60.4},0).wait(1).to({y:66.4},0).wait(1).to({y:72.85},0).wait(1).to({y:79.85},0).wait(1).to({y:87.4},0).wait(1).to({y:95.55},0).wait(1).to({y:104.35},0).wait(1).to({y:113.85},0).wait(1).to({y:124.1},0).wait(1).to({y:135.2},0).wait(1).to({y:147.15},0).wait(1).to({y:160.05},0).wait(1).to({y:173.9},0).wait(1).to({y:188.75},0).wait(1).to({y:204.65},0).wait(1).to({y:221.6},0).wait(1).to({y:239.45},0).wait(1).to({y:258.15},0).wait(1).to({y:277.5},0).wait(1).to({y:297.2},0).wait(1).to({y:317.05},0).wait(1).to({y:336.7},0).wait(1).to({y:355.9},0).wait(1).to({y:374.35},0).wait(1).to({y:391.9},0).wait(1).to({y:408.45},0).wait(1).to({y:423.95},0).wait(1).to({y:438.4},0).wait(1).to({y:451.8},0).wait(1).to({y:464.15},0).wait(1).to({y:475.6},0).wait(1).to({y:486.15},0).wait(1).to({y:495.85},0).wait(1).to({y:504.8},0).wait(1).to({y:513.05},0).wait(1).to({y:520.65},0).wait(1).to({y:527.65},0).wait(1).to({y:534.05},0).wait(1).to({y:539.95},0).wait(1).to({y:545.4},0).wait(1).to({y:550.4},0).wait(1).to({y:554.95},0).wait(1).to({y:559.15},0).wait(1).to({y:562.95},0).wait(1).to({y:566.45},0).wait(1).to({y:569.6},0).wait(1).to({y:572.5},0).wait(1).to({y:575.1},0).wait(1).to({y:577.4},0).wait(1).to({y:579.5},0).wait(1).to({y:581.35},0).wait(1).to({y:582.95},0).wait(1).to({y:584.4},0).wait(1).to({y:585.6},0).wait(1).to({y:586.65},0).wait(1).to({y:587.5},0).wait(1).to({y:588.15},0).wait(1).to({y:588.7},0).wait(1).to({y:589.05},0).wait(1).to({y:589.25},0).wait(1).to({y:589.35},0).wait(30).to({_off:true},1).wait(18));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({y:180.5},19,cjs.Ease.cubicInOut).to({y:185.75},18).to({y:-59.9},12,cjs.Ease.cubicInOut).wait(67).to({startPosition:0},0).to({_off:true},1).wait(103));

	// cipsai1
	this.instance_1 = new lib.cipsai1("synched",0);
	this.instance_1.setTransform(762.5,434.5,1,1,0,0,0,123.5,166.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:195.5},19,cjs.Ease.cubicInOut).to({y:199.2},18).to({y:-47},12,cjs.Ease.cubicInOut).wait(104).to({startPosition:0},0).to({_off:true},1).wait(103));

	// line3
	this.instance_2 = new lib.line3("synched",0);
	this.instance_2.setTransform(1353,-40,1,1,0,0,0,200,89);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:1009,y:106},29,cjs.Ease.cubicInOut).to({x:989,y:116},35).to({x:783,y:213},16,cjs.Ease.cubicInOut).wait(67).to({startPosition:0},0).to({_off:true},1).wait(103));

	// line2
	this.instance_3 = new lib.line2("synched",0);
	this.instance_3.setTransform(156,374.5,1,1,0,0,0,270,112.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({x:604,y:177.5},29,cjs.Ease.cubicInOut).to({x:624,y:167.5},38).to({x:731,y:122.5},16,cjs.Ease.cubicInOut).wait(67).to({startPosition:0},0).to({_off:true},1).wait(103));

	// line1
	this.instance_4 = new lib.line1("synched",0);
	this.instance_4.setTransform(576.9,20.9,1,1,0,0,0,238.5,101);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:238.5,y:177},29,cjs.Ease.cubicInOut).to({x:218.5,y:187},41).to({x:3.5,y:282},16,cjs.Ease.cubicInOut).wait(67).to({startPosition:0},0).to({_off:true},1).wait(103));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90,-194.5,831.4,703.5);


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
	this.instance.setTransform(5.05,17.05,0.8055,0.8055,0,0,0,0.1,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,4.4,78,38.2);


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

	// Layer_3
	this.instance = new lib.Para("synched",0);
	this.instance.setTransform(-118.05,227.45,1,1,0,0,0,116.5,52.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:3.5,y:203.5},14,cjs.Ease.cubicInOut).wait(36));

	// Layer_2
	this.instance_1 = new lib.uzkandis("synched",0);
	this.instance_1.setTransform(403.5,95,1,1,0,0,0,71.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:252.5,y:124},14,cjs.Ease.cubicInOut).wait(41));

	// Layer_1
	this.instance_2 = new lib.LogoEstrella("synched",0);
	this.instance_2.setTransform(155.35,-0.55,1.4872,1.4872,0,0,0,43.1,20.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:21,scaleX:1,scaleY:1,x:155.3,y:-0.45,alpha:1},14,cjs.Ease.backOut).wait(41));

	// Layer_1
	this.instance_3 = new lib.Logo2("synched",0);
	this.instance_3.setTransform(464.4,-4.8,0.9148,0.9148,0,0,0,112.5,29.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:146.35,y:52.1},14,cjs.Ease.cubicInOut).wait(41));

	// Layer_1
	this.instance_4 = new lib.Line_logo("synched",0);
	this.instance_4.setTransform(486,11.5,1,1,0,0,0,162,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:162,y:71.5},14,cjs.Ease.cubicInOut).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.5,-72,863.5,352);


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

	this.actionFrames = [197];
	// timeline functions:
	this.frame_197 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(197).call(this.frame_197).wait(17));

	// BG
	this.instance = new lib.BG();
	this.instance.setTransform(500,100,1,1,0,0,0,500,100);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).to({alpha:1},14).wait(1));

	// Logo
	this.instance_1 = new lib.Logo("synched",0,false);
	this.instance_1.setTransform(157.05,96,1,1,0,0,0,162,71.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(145).to({_off:false},0).wait(69));

	// Meskutis
	this.instance_2 = new lib.meskutis2("synched",0);
	this.instance_2.setTransform(148.95,308.5,1,1,0,0,0,126,173.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(132).to({_off:false},0).to({x:149,y:188.5},17,cjs.Ease.quadInOut).wait(65));

	// Cipsai
	this.instance_3 = new lib.Lines("synched",0,false);
	this.instance_3.setTransform(442,110,1,1,0,0,0,797,145);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).wait(154));

	// Meskiukai3
	this.instance_4 = new lib.Meskuciai("synched",19,false);
	this.instance_4.setTransform(164.25,73.8,1,1,0,0,0,512.9,159.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},87).wait(108));

	// Meskiukai2
	this.instance_5 = new lib.Meskuciai("synched",24,false);
	this.instance_5.setTransform(164.25,73.8,1,1,0,0,180,512.9,159.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({_off:true},88).wait(117));

	// Meskiukai1
	this.instance_6 = new lib.Meskuciai("synched",24,false);
	this.instance_6.setTransform(164.25,73.8,1,1,0,0,0,512.9,159.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},88).wait(126));

	// BG
	this.instance_7 = new lib.BG();
	this.instance_7.setTransform(500,100,1,1,0,0,0,500,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(214));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-198.7,-185.9,875.9000000000001,747.9);
// library properties:
lib.properties = {
	id: 'C0029AB03ABC6B4D94DF699EDD15C269',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Geltonas_300x250.png", id:"Geltonas_300x250"},
		{src:"images/Line5_lines_300x250.png", id:"Line5_lines_300x250"},
		{src:"images/line_1_300x250.png", id:"line_1_300x250"},
		{src:"images/line_2_300x250.png", id:"line_2_300x250"},
		{src:"images/line_3_300x250.png", id:"line_3_300x250"},
		{src:"images/Logo_300x250.png", id:"Logo_300x250"},
		{src:"images/Melynas_300x250.png", id:"Melynas_300x250"},
		{src:"images/Meskutis.png", id:"Meskutis"},
		{src:"images/Meskutis_300x250.png", id:"Meskutis_300x250"},
		{src:"images/paragauk.png", id:"paragauk"}
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