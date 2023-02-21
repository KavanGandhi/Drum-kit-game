// here in jquery document.querySelector is replaced by $ sign
// $("h1").css("color","blue")
// includes all button
// $("button")
// adding class to html and making changes using css
// $("h1").addClass("big-title");
// $("h1").text("Bye");
$("button").text("Dont cick me");
// to add html tags
$("button").html("<em>heyy</em>")
// for attributes
// console.log($("img").attr("src"))
// set attribute
$("a").attr("href","https://www.youtube.com/")
// adding eventlistener
// $("h1").click(function(){
// $("h1").css("color","purple")
// });

$("document").keydown(function(event) {
    $("h1").text(event.key);
});