
// Finction table
$(document).ready(function () {
    $('#product_table').DataTable();
});
// Function to initialize the DataTable
// $(document).ready(function () {
//     $('#product_table').DataTable();
// });


// Function to delete a row with confirmation
$(document).on('click', '.delete_link i', function () {
    if (confirm("Confirm delete")) {
        const row = $(this).closest('tr');
        if (row) {
            const productId = row.data('product-id');
            const table = $('#product_table').DataTable(); 

            $.ajax({
                type: 'DELETE',
                url: '/products/delete_product/' + productId + '/',
                success: function () {
                    row.remove();

                    table.draw().then(function () {
                        console.log('The table has been redrawn');
                    });
                },
                error: function (error) {
                    console.error(error);
                }
            });
        }
    }
});



// Function to edit products.
$(document).on('click', '.edit_link', function(e) {
    e.preventDefault();
    console.log('Edit link clicked.');

    const productId = $(this).data('product-id');
    console.log('Product ID:', productId);

    const editForm = $('#edit_form');
    editForm.attr('action', '/products/edit_product/' + productId + '/');
    console.log('Form action updated:', editForm.attr('action'));

    // Scroll the form 
    $('html, body').animate({
        scrollTop: editForm.offset().top
    }, 300); 

    editForm.show();
    console.log('Form shown.');
});


  
















