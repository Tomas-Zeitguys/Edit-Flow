jQuery(document).ready(function($) {
	
	// Disable all the slug input fields in Quick Edit
	$(".inline-edit-col label:nth-child(3) input").attr('disabled', 'disabled');
	
	// Disable the slug input field when editing a term
	$("input#slug").attr('disabled', 'disabled');
	
	// Add some explanatory text that the slug cannot be edited once created when editing a term
	$("input#slug").next().append(' This cannot be edited once created.');
});