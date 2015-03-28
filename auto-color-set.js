function mycolorset(selector) {
$(selector).each(function() {
	var color = $(this).data("color");
	var bg = color;
	var bg1 = "#"+color;
	var color = color.replace(/0/gi, 'g');
	var color = color.replace(/1/gi, 'h');
	var color = color.replace(/2/gi, 'i');
	var color = color.replace(/3/gi, 'j');
	var color = color.replace(/4/gi, 'k');
	var color = color.replace(/5/gi, 'l');
	var color = color.replace(/6/gi, 'm');
	var color = color.replace(/7/gi, 'n');
	var color = color.replace(/8/gi, 'o');
	var color = color.replace(/9/gi, 'p');
	var color = color.replace(/a/gi, 'q');
	var color = color.replace(/b/gi, 'r');
	var color = color.replace(/c/gi, 's');
	var color = color.replace(/d/gi, 't');
	var color = color.replace(/e/gi, 'u');
	var color = color.replace(/f/gi, 'v');
	var color = color.replace(/A/gi, 'q');
	var color = color.replace(/B/gi, 'r');
	var color = color.replace(/C/gi, 's');
	var color = color.replace(/D/gi, 't');
	var color = color.replace(/E/gi, 'u');
	var color = color.replace(/F/gi, 'v');
	var color = color.replace(/v/gi, '0');
	var color = color.replace(/u/gi, '1');
	var color = color.replace(/t/gi, '2');
	var color = color.replace(/s/gi, '3');
	var color = color.replace(/r/gi, '2');
	var color = color.replace(/q/gi, '1');
	var color = color.replace(/p/gi, 'e');
	var color = color.replace(/o/gi, 'd');
	var color = color.replace(/n/gi, 'c');
	var color = color.replace(/m/gi, 'b');
	var color = color.replace(/l/gi, 'a');
	var color = color.replace(/k/gi, 'b');
	var color = color.replace(/j/gi, 'c');
	var color = color.replace(/i/gi, 'd');
	var color = color.replace(/h/gi, 'e');
	var color = color.replace(/g/gi, 'f');
	var color1="#"+color;
	if($(this).hasClass("color-2-bg")) {
	var h = '<div contenteditable="true">'+color+'</div><div contenteditable="true">'+bg+'</div>';
	$(this).css({
	'backgroundColor'	:	color1,
	'color'				:	bg1,
	}).html(h).data("bg", color).data("color", bg);
	}
	else {
	var h = '<div contenteditable="true">'+bg+'</div><div contenteditable="true">'+color+'</div>';
	$(this).css({
	'backgroundColor'	:	bg1,
	'color'				:	color1,
	}).html(h).data("bg", bg).data("color", color);
	}
});
}

