//function to remove item from cart
function deleteListItem(item) {
	    // remove li element (item) from ol element (item.parentNode)
 	    item.parentNode.removeChild(item);
}

//function to remove item from cart
$(document).on("click", ".delete-item", function() {
    $(this).remove();
});

$(document).on("click", "#add-item", function() { 
    console.log("test");
    var list = $("#grocery-list");
    console.log("test");
    var itemInput = $("#new-list-item");
    list.append("<div class='delete-item'>" + itemInput.val() + "</div>");
});
