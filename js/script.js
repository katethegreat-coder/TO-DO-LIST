$(function() {

    // Assign values to variables
    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    
    // Listen to the event submit the form (always put preventDefault)
    $newItemForm.on('submit', function(e) {
      e.preventDefault();
      // Get the value of the imput with val()
      var text = $('input:text').val();
      // Add the retrieved value in the end of the list
      $list.append('<span title="Click to remove"><li>' + text + '</li></span>');
      $('input:text').val('');
    });
  
    // Listen to the event click to remove items
    $list.on('click', 'li', function() {
      var $this = $(this);
      $this.remove();
    });
  
  });