$(function() {
	$('.modal-item').on('click', function() {
		$('.image-preview').attr('src', $(this).find('img').attr('src'));
		$('#image-modal').modal('show');   
	});		

	var curDate = new Date();
	var curYear = curDate.getFullYear();

	var yearTag= document.getElementById("year");
		yearTag.innerHTML = curYear;
});