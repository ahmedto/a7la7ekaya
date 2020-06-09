$(function() {
$('div.a7la7ekaya-img a').each(function() {
var link = $(this).attr('href');
var title = $(this).text();
$(this).prepend('<a href="'+link+'" title="'+title+'"></a>');
$(this).children('a').load(link +'#page-body #dtlsDesc .postbody img:eq(0)', function() {
$(this).children('img').attr('class','a7la7ekaya-div');
});
$(this).find('').insertBefore($(this));
});
});