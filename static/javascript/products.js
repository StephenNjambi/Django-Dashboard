
// Finction table
$(document).ready(function () {
    $('#product_table').DataTable();
});

// function to delete the product in product table
$(document).on('click', '.actionRemove_btn', function () {
    var productId = $(this).data('product-id');
    var deleteUrl = $(this).data('delete-url');
    if (confirm("Proceed to remove")) {
        $.ajax({
            type: 'DELETE',
            url: deleteUrl,
            success: function (data) {
                alert(data.message); 
                location.reload(); // Or window.location.href = window.location.href;
            },
            error: function (error) {
                console.error(error);
            }
        });
    }
});


