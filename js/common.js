// handlebars
Handlebars.registerHelper("counter", function (index){
    return index + 1;
});
var source = $("#entry-template").html();
var template = Handlebars.compile(source);

function renderCards () {
	var context = {};
	context.cards = cards;
	console.log(context);
	var html = template(context);
	$("#cards").html(html);
	if (cards.length > 1) $(".card:last-child").addClass("upper");
	for (i = 0; i < cards.length - 1; i++) {
		$(".card").eq(i).removeClass("wide narrow");
	}
}

renderCards ();

//изменение стопки карточек
$( "#cards" ).mouseup(function(e) {
	if (!e.altKey && !e.shiftKey) cardsRemove();
	if (e.shiftKey && !e.altKey) cardsAddNarrow();
	if (e.shiftKey && e.altKey) cardsAddWide();
});

function cardsRemove () {
	if (cards.length > 1) {
		cards.splice(-1,1);
		renderCards ();
	}
}

function cardsAddNarrow () {
	cards.push( { type: 'narrow' } );
	renderCards ();
}

function cardsAddWide () {
	cards.push( { type: 'wide' } );
	renderCards ();
}