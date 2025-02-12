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



(lib.Aktoriai_300x600 = function() {
	this.initialize(img.Aktoriai_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,354,427);


(lib.BG_300x600_1 = function() {
	this.initialize(img.BG_300x600_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,356,600);


(lib.BG_300x600_2 = function() {
	this.initialize(img.BG_300x600_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,460,600);


(lib.gnt_300x600 = function() {
	this.initialize(img.gnt_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,92);


(lib.Manobilietaslogo2white_300x600 = function() {
	this.initialize(img.Manobilietaslogo2white_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,14);


(lib.ornament_300x600 = function() {
	this.initialize(img.ornament_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,572);


(lib.pavadinimas_300x600 = function() {
	this.initialize(img.pavadinimas_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,90);


(lib.val_300x600 = function() {
	this.initialize(img.val_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,33);


(lib.Vardai_300x600 = function() {
	this.initialize(img.Vardai_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,50);


(lib.Veikejai = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Aktoriai_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,354,427);


(lib.vardai = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AwPCRIAAkhMAgfAAAIAAEhg");
	mask.setTransform(89,10.5);

	// Layer_1
	this.instance = new lib.Vardai_300x600();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,25);


(lib.valanda = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.val_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253,33);


(lib.tragedijos = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AGOEFIg1giIAAg9IhcAAIgpgbImlAAIgvAbIhOAAIAAAuIhVAxImvAAIAAoJIakAAIAAIJg");
	mask.setTransform(85.05,57.125);

	// Layer_1
	this.instance = new lib.gnt_300x600();
	this.instance.setTransform(6.6,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,31,156,52.3);


(lib.Shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0,134,0,-115).s().p("EgquAWCMAAAgsDMBVdAAAMAAAAsDg");
	this.shape.setTransform(273.5,141);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,547,282);


(lib.Ornament = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("An9V6IAAgaIP7AAIAAAag");
	var mask_graphics_1 = new cjs.Graphics().p("An9V6IAAgcIP7AAIAAAcg");
	var mask_graphics_2 = new cjs.Graphics().p("An9V9IAAgoIP7AAIAAAog");
	var mask_graphics_3 = new cjs.Graphics().p("An9WGIAAhKIP7AAIAABKg");
	var mask_graphics_4 = new cjs.Graphics().p("An9WWIAAiLIP7AAIAACLg");
	var mask_graphics_5 = new cjs.Graphics().p("An9WxIAAj2IP7AAIAAD2g");
	var mask_graphics_6 = new cjs.Graphics().p("An9XZIAAmWIP7AAIAAGWg");
	var mask_graphics_7 = new cjs.Graphics().p("An9YQIAAp1IP7AAIAAJ1g");
	var mask_graphics_8 = new cjs.Graphics().p("An9ZaIAAudIP7AAIAAOdg");
	var mask_graphics_9 = new cjs.Graphics().p("An9a6IAA0cIP7AAIAAUcg");
	var mask_graphics_10 = new cjs.Graphics().p("An9cwIAA73IP7AAIAAb3g");
	var mask_graphics_11 = new cjs.Graphics().p("An9fCMAAAgk8IP7AAMAAAAk8g");
	var mask_graphics_12 = new cjs.Graphics().p("EgH9AhwMAAAgv2IP7AAMAAAAv2g");
	var mask_graphics_13 = new cjs.Graphics().p("EgH9AkeMAAAg6vIP7AAMAAAA6vg");
	var mask_graphics_14 = new cjs.Graphics().p("EgH9AmvMAAAhD1IP7AAMAAABD1g");
	var mask_graphics_15 = new cjs.Graphics().p("EgH9AomMAAAhLRIP7AAMAAABLRg");
	var mask_graphics_16 = new cjs.Graphics().p("EgH9AqFMAAAhROIP7AAMAAABROg");
	var mask_graphics_17 = new cjs.Graphics().p("EgH9ArQMAAAhV4IP7AAMAAABV4g");
	var mask_graphics_18 = new cjs.Graphics().p("EgH9AssMAAAhZXIP7AAMAAABZXg");
	var mask_graphics_19 = new cjs.Graphics().p("EgH9At8MAAAhb3IP7AAMAAABb3g");
	var mask_graphics_20 = new cjs.Graphics().p("EgH9AuyMAAAhdjIP7AAMAAABdjg");
	var mask_graphics_21 = new cjs.Graphics().p("EgH9AvSMAAAhejIP7AAMAAABejg");
	var mask_graphics_22 = new cjs.Graphics().p("EgH9AvjMAAAhfFIP7AAMAAABfFg");
	var mask_graphics_23 = new cjs.Graphics().p("EgH9AvpMAAAhfRIP7AAMAAABfRg");
	var mask_graphics_24 = new cjs.Graphics().p("EgH9AvqMAAAhfTIP7AAMAAABfTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:31,y:140.1733}).wait(1).to({graphics:mask_graphics_1,x:31,y:140.2172}).wait(1).to({graphics:mask_graphics_2,x:31,y:140.5243}).wait(1).to({graphics:mask_graphics_3,x:31,y:141.3579}).wait(1).to({graphics:mask_graphics_4,x:31,y:142.9812}).wait(1).to({graphics:mask_graphics_5,x:31,y:145.6575}).wait(1).to({graphics:mask_graphics_6,x:31,y:149.65}).wait(1).to({graphics:mask_graphics_7,x:31,y:155.2219}).wait(1).to({graphics:mask_graphics_8,x:31,y:162.6366}).wait(1).to({graphics:mask_graphics_9,x:31,y:172.1571}).wait(1).to({graphics:mask_graphics_10,x:31,y:184.0468}).wait(1).to({graphics:mask_graphics_11,x:31,y:198.5689}).wait(1).to({graphics:mask_graphics_12,x:31,y:215.9867}).wait(1).to({graphics:mask_graphics_13,x:31,y:233.4044}).wait(1).to({graphics:mask_graphics_14,x:31,y:247.9266}).wait(1).to({graphics:mask_graphics_15,x:31,y:259.8163}).wait(1).to({graphics:mask_graphics_16,x:31,y:269.3368}).wait(1).to({graphics:mask_graphics_17,x:31,y:276.7514}).wait(1).to({graphics:mask_graphics_18,x:31,y:278.6515}).wait(1).to({graphics:mask_graphics_19,x:31,y:278.6403}).wait(1).to({graphics:mask_graphics_20,x:31,y:278.6328}).wait(1).to({graphics:mask_graphics_21,x:31,y:278.6283}).wait(1).to({graphics:mask_graphics_22,x:31,y:278.626}).wait(1).to({graphics:mask_graphics_23,x:31,y:278.6251}).wait(1).to({graphics:mask_graphics_24,x:31,y:279.025}).wait(1));

	// Layer_1
	this.instance = new lib.ornament_300x600();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,572);


(lib.komedija3 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AlTBjIAAjFIKnAAIAADFg");
	mask.setTransform(78.95,83.65);

	// Layer_1
	this.instance = new lib.gnt_300x600();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45,73.7,68,18.299999999999997);


(lib.komedija = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AARA6IgIgIQgEgEgFADQgHAIgGAHIgcgZIAQgOQADgDgBgSQAAgWgJgXQAIgDAGgGIALgOQAHAHAKAEIATAHQgBADAAAEIgBAIIAAAgIAAAgQAAADADADIADADQABAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAgBABQAAAAAAAAIgSAUIgGgHgAgVAcIATAOQABABAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgPIABgSgAgUglQAEANAAAPIAAAcIAUgSIAAgaIABgHIgVgJIgCAAQAAAAgBAAQAAAAAAABQgBAAAAABQAAABAAABg");
	this.shape.setTransform(77.8071,20.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBfIAKgQQAEgGAAgNIAAgTIAChMQAAgFgCgEQgBgDgEACQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAgBQgBgCACgDIAUgSIAHAJQAGAHgBALIgBBHIgBARQAAALADAGQgGAFgKAMIgRAXgAgChVIAPgQQACgBAEAEQADAFgCACIgRAMg");
	this.shape_1.setTransform(70.6114,20.9563);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPA9QADgJAAgLIACg3QAAgNgIADQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBgDACgCIAUgSIAHAJQAGAGgBALIgCBHQAAAMAHgDQAEgCACACQABACgEADIgRARgAgJhAIAPgPQACgCAEAFQADAEgCACIgQANg");
	this.shape_2.setTransform(65.0968,19.1563);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPBEIgUgLIADgOQABgGAAgVIAAgbQAAgJgDgGQAIAAAGgEIALgJIghgYQAKgGAIgLQAqAnAZALQgFAuAEAqIgUAHQgPAHgJAJQgEgGgJgHgAgHgbIAAAHIgBA6IAAAFIAAAFIAIAFIAKAGQAGAEAAgHIgBhCQAAgKgHgEIgOgMIgBAJg");
	this.shape_3.setTransform(57.425,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMA1IgUgKIAEgPIABgbIgBgcQgBgJgDgGQAMAAALgGQAJgHAHgJIAaAWIglAnIAAAYIgBAKIAGAEIAIAGQAIAEAEgEQAAAAABAAQAAgBAAAAQABAAAAABQAAAAABAAIABABIgXAXQgEgGgKgGgAgCgsIgCAEIAAAeIAQgTQgHgGgFgHIgBgDIgBABg");
	this.shape_4.setTransform(48.825,20.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwA7IgFgFQgGgFAAgDIABgTIAAg1QAAgGgJgFQgIgGgEAEIgCABQgDACgBAFIAAAeIAAAcQAAANAGAFQgKAJgIAKQgGgLgLgHQAJgFAAgPIAAg0QABgFgKgGQgKgFgEABQgFADAAADIAAAfIgBAeQAAANAHAGIgKAJIgIAKQgHgMgJgHQAGgFAAgOIABg1QAAgFgCgEQgDgDgEACQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABgBIAUgTIAIAKIADAGQAAABABAAQAAABABAAQAAAAABAAQABgBABAAIAQgRIAXARQADADACAAIAEgDIARgRQAPAOANAEQAFABgDACQgCADAAAEIgBAjIAAAiQAAALAHgCQAFgCABACQABABgDADIgSARIgEgFg");
	this.shape_5.setTransform(37.1444,20.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRA2QgJgGgMgGIADgOQABgGAAgUIAAgcQgBgJgDgGQAHAAAQgKQAQgKAEgEQAEAGAJAGIAVAMIgDAOIgBAbIAAAbQAAAIAEAIQgHAAgRAJQgPAJgFAFQgEgHgIgFgAgLgjIAAA6IAAAFIgBAFIAMAGIAKAGIACABIAAgLIAAg4IAAgGIAAgEIgLgHIgKgHIgCAAIAAAAIAAAKg");
	this.shape_6.setTransform(24.95,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZBVQgPgIgRAHIgBAAIgBgBQAFgTABgYIACgtIgBgnQAAgUgEgRIAAgBIACgBQAQAHANgGIACAAIAAACQgDAOgBAQIgBAeIABABIABAAQAPgQAMgQQAMgRAIgQIABAAQAQAEAVgDIABABIgBACIgfAcIgeAcQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQASgCAPATQAOARADAYIAEAXIAFAYIAAABIgBAAQgIgDgJAAQgIgBgJAEIgBAAIgBgBQAIgagDgTQgEgTgJgMQgNgQgbADIgBABIAAADIAAADIAAApQABAVAEAVIAAABIgCAAg");
	this.shape_7.setTransform(13.9333,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,36.8);


(lib.GalNedarom = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AqbCoIAAlPIU3AAIAAFPg");
	mask.setTransform(77.575,16.825);

	// Layer_1
	this.instance = new lib.gnt_300x600();
	this.instance.setTransform(0,3.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.8,3.4,133.6,30.300000000000004);


(lib.cta_text = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGA3QgDgDgBgEIAAg+QABgEADgDQADgDADAAQAFAAADADQADADABAEIAAA+QgBAEgDADQgDACgFABQgDgBgDgCgAgHgmQgEgDgBgFQABgEAEgEQADgDAEAAQAGAAADADQADAEAAAEQAAAGgDACQgDADgGAAQgEAAgDgDg");
	this.shape.setTransform(37.55,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAxQgHgEgDgIQgCgHAAgLIAAg9QAAgEACgDQADgDAGAAQAFAAADADQADADAAAEIAAASIALAAQAFAAACACQADADABAEQgBAEgDADQgCADgFAAIgLAAIAAAXQgBAJACADQABAEAFAAIACAAIABAAQAIAAADACQACACAAAEQAAAFgCACQgCACgEABIgHABQgMAAgGgEg");
	this.shape_1.setTransform(32.85,12.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARA5IgEgDIgVgdIgBABIAAAXQAAAEgEADQgDACgEAAQgFAAgDgCQgDgDgBgEIAAhgQABgFADgCQADgDAFAAQAEAAADADQAEACAAAFIAAAxIAVgWIADgDIAEAAQAFAAADADQADACAAAEIgBAEIgCADIAAAAIgUAUIAYAfIABADIABADQgBAEgDACQgDACgEAAIgFgBg");
	this.shape_2.setTransform(25.975,12.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAnQgDgDAAgEIAAgwIAAgEIgCgDIgBgDIgBgDQAAgEADgDQADgCAFAAIAFABIADAEQAGgEAEgBQAFgCAEAAQAIAAADADQACACAAAEQAAAFgDADQgDADgFAAIgGgBIgEABIgFABIAAACIAAABIAAAwQAAAEgCADQgDACgFAAQgFAAgDgCg");
	this.shape_3.setTransform(18.925,14.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHA3QgCgDgBgEIAAg+QABgEACgDQADgDAEAAQAFAAADADQADADAAAEIAAA+QAAAEgDADQgDACgFABQgEgBgDgCgAgHgmQgEgDgBgFQABgEAEgEQADgDAEAAQAGAAADADQAEAEgBAEQABAGgEACQgDADgGAAQgEAAgDgDg");
	this.shape_4.setTransform(13.35,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiA2QgEgDAAgEIAAhcQAAgEAFgEQADgDAFAAIAXAAQAOAAAKAFQAJAFADAJQAFAIAAAKQAAAMgGAHQgEAJgKAEQgJAEgMAAIgNAAIAAAeQAAAEgEADQgDADgEAAQgFAAgDgDgAgPgCIANAAQAJAAAFgEQAEgEAAgJQAAgEgCgEQgBgEgEgCQgEgDgHAAIgNAAg");
	this.shape_5.setTransform(6.85,12.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.1,24.2);


(lib.cta_G = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DD1461").s().p("Ao4C0QhkAAAAhjIAAihQAAhjBkgBIRxAAQBkABAABjIAAChQAABjhkAAg");
	this.shape.setTransform(66.875,18.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.8,36.1);


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

	// Layer_1
	this.instance = new lib.BG_300x600_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,460,600);


(lib.BG_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BG_300x600_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356,600);


(lib._1410 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pavadinimas_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174,90);


(lib.vardas2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AwPCRIAAkhMAgfAAAIAAEhg");
	mask.setTransform(104,39.5);

	// Layer_1
	this.instance = new lib.Vardai_300x600();
	this.instance.setTransform(15,0);

	this.instance_1 = new lib.vardai("synched",0);
	this.instance_1.setTransform(106,25,1,1,0,0,0,91,25);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,25,182,25);


(lib.komedija2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.komedija("synched",0);
	this.instance.setTransform(45,18.4,1,1,0,0,0,45,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,36.8);


(lib.GalNedaromTragedijos = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.GalNedarom("synched",0);
	this.instance.setTransform(77.5,10.15,1.3862,1.3862,0,0,0,77.5,18.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:15.1,alpha:1},17,cjs.Ease.backOut).wait(20));

	// Layer_5
	this.instance_1 = new lib.tragedijos("synched",0);
	this.instance_1.setTransform(78.4,54.6,1.2689,1.2689,0,0,0,85,52.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,y:52.1,alpha:1},17,cjs.Ease.backOut).wait(17));

	// Layer_1
	this.instance_2 = new lib.komedija3("synched",0);
	this.instance_2.setTransform(79,82.9,1,1,0,0,0,79,82.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},13,cjs.Ease.backOut).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-10.7,197.9,104.9);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {ON:10,OFF:20};
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

	// Layer_1
	this.instance = new lib.cta_text("synched",0);
	this.instance.setTransform(66.85,17.4,1,1,0,0,0,21,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:0},0).to({regX:21.1,scaleX:1.33,scaleY:1.33,x:67,y:17.35},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({regX:21,scaleX:1,scaleY:1,x:66.85,y:17.4},9,cjs.Ease.quadInOut).wait(1));

	// Layer_2
	this.instance_1 = new lib.cta_G("synched",0);
	this.instance_1.setTransform(66.8,18.1,1,1,0,0,0,66.8,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({startPosition:0},0).to({scaleX:1.1136,scaleY:1.1136,x:66.85},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:66.8},9,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-2,148.9,40.2);


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

	// Layer_6
	this.instance = new lib.vardas2("synched",0);
	this.instance.setTransform(120,474.3,1,1,0,0,0,104,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({y:454.3,alpha:1},12,cjs.Ease.cubicInOut).wait(23));

	// vardai
	this.instance_1 = new lib.vardai("synched",0);
	this.instance_1.setTransform(122,474.3,1,1,0,0,0,91,25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({y:454.3,alpha:1},12,cjs.Ease.cubicInOut).wait(25));

	// komedija2
	this.instance_2 = new lib.komedija2("synched",0);
	this.instance_2.setTransform(126,18.4,1,1,0,0,0,45,18.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},12).wait(46));

	// valanda
	this.instance_3 = new lib.valanda("synched",0);
	this.instance_3.setTransform(126.55,144.95,1.3715,1.3715,0,0,0,126.5,16.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regY:16.5,scaleX:1,scaleY:1,x:126.5,y:144.8,alpha:1},15,cjs.Ease.backOut).wait(34));

	// _410
	this.instance_4 = new lib._1410("synched",0);
	this.instance_4.setTransform(125.05,78.5,1.4667,1.4667,0,0,0,87,45.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({regY:45,scaleX:1,scaleY:1,x:125,y:78.3,alpha:1},15,cjs.Ease.backOut).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.9,0,347,499.3);


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
		  
		canvas.addEventListener("mouseover",  over.bind(this));
		canvas.addEventListener("mouseout",  out.bind(this)); 
		
		function  over() {  
			this.CTA.gotoAndPlay("ON");
		};
		
		function  out() {  
			this.CTA.gotoAndPlay("OFF");
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(206));

	// manoBilietas_lt
	this.instance = new lib.Manobilietaslogo2white_300x600();
	this.instance.setTransform(100,568);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.name = "CTA";
	this.CTA.setTransform(149.95,526.8,1,1,0,0,0,66.8,18.1);

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(42).to({regX:66.9,scaleX:1.1659,scaleY:1.1659,x:150.1,y:526.85},6).to({regX:66.8,scaleX:1,scaleY:1,x:149.95,y:526.8},11,cjs.Ease.bounceOut).wait(89).to({regX:66.9,scaleX:1.1659,scaleY:1.1659,x:150.1,y:526.85},6).to({regX:66.8,scaleX:1,scaleY:1,x:149.95,y:526.8},11,cjs.Ease.bounceOut).wait(41));

	// Text2
	this.instance_1 = new lib.GalNedaromTragedijos("synched",0,false);
	this.instance_1.setTransform(148,119,1,1,0,0,0,78,46);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).wait(93).to({startPosition:36},0).to({x:-232},14,cjs.Ease.cubicInOut).wait(1));

	// Text1
	this.instance_2 = new lib.Text1("synched",0,false);
	this.instance_2.setTransform(151.5,247.4,1,1,0,0,0,126.5,239.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87).to({startPosition:57},0).to({x:-248.5},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(103));

	// shadow
	this.instance_3 = new lib.Shadow("synched",0);
	this.instance_3.setTransform(154.5,755,1,1,0,0,0,273.5,141);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({_off:false},0).to({y:493},15,cjs.Ease.cubicInOut).wait(86).to({startPosition:0},0).to({x:-275.5},14,cjs.Ease.cubicInOut).wait(1));

	// Veikejai
	this.instance_4 = new lib.Veikejai("synched",0);
	this.instance_4.setTransform(490,386.5,1,1,0,0,0,177,213.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({_off:false},0).to({x:155},15,cjs.Ease.cubicInOut).wait(86).to({startPosition:0},0).to({x:-235},14,cjs.Ease.cubicInOut).wait(1));

	// Orn2
	this.instance_5 = new lib.Ornament("synched",0,false);
	this.instance_5.setTransform(39,300,1,1,0,0,180,32,286);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).wait(92).to({startPosition:24},0).to({x:-342},14,cjs.Ease.cubicInOut).wait(1));

	// Orn1
	this.instance_6 = new lib.Ornament("synched",0,false);
	this.instance_6.setTransform(261,300,1,1,0,0,0,32,286);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(97).to({_off:false},0).wait(94).to({startPosition:24},0).to({x:-120},14,cjs.Ease.cubicInOut).wait(1));

	// BG1
	this.instance_7 = new lib.BG_1("synched",0);
	this.instance_7.setTransform(534.95,300,1,1,0,0,0,178,300);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(191).to({_off:false},0).to({x:168},14,cjs.Ease.cubicInOut).wait(1));

	// BG2
	this.instance_8 = new lib.BG2("synched",0);
	this.instance_8.setTransform(554,300,1,1,0,0,0,230,300);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(87).to({_off:false},0).to({x:158},15,cjs.Ease.cubicInOut).to({x:138},89).to({x:-235},14,cjs.Ease.cubicInOut).wait(1));

	// BG1
	this.instance_9 = new lib.BG_1("synched",0);
	this.instance_9.setTransform(168,300,1,1,0,0,0,178,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:148},87).to({x:-242},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(103));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-399,300,1183,596);
// library properties:
lib.properties = {
	id: '4D2F970F0D99F841992A3D979D126F07',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Aktoriai_300x600.png", id:"Aktoriai_300x600"},
		{src:"images/BG_300x600_1.jpg", id:"BG_300x600_1"},
		{src:"images/BG_300x600_2.jpg", id:"BG_300x600_2"},
		{src:"images/gnt_300x600.png", id:"gnt_300x600"},
		{src:"images/Manobilietaslogo2white_300x600.png", id:"Manobilietaslogo2white_300x600"},
		{src:"images/ornament_300x600.png", id:"ornament_300x600"},
		{src:"images/pavadinimas_300x600.png", id:"pavadinimas_300x600"},
		{src:"images/val_300x600.png", id:"val_300x600"},
		{src:"images/Vardai_300x600.png", id:"Vardai_300x600"}
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
an.compositions['4D2F970F0D99F841992A3D979D126F07'] = {
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