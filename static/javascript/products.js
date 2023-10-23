
// Finction table
$(document).ready(function () {
    $('#product_table').DataTable();
});




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
                    // Remove the row from the table
                    row.remove();

                    // Wait for the table to be redrawn before returning
                    table.draw().then(function () {
                        // The table has been redrawn
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







// Function to edit the product in the product table


// $(document).on('click', '.edit_link', function(e) {
//     e.preventDefault();
//     console.log('Edit link clicked');

//     // Get the product ID from the data attribute of the clicked row
//     const productId = $(this).closest('tr').data('product-id');
//     console.log('product ID:', productId)

//     // Update the form action URL
//     const form = $('#hidden_form');
//     const actionUrl='/products/edit_product/' + productId + '/';
//     form.attr('action', '/products/edit_product/' + productId + '/');
//     console.log('Form Action URL:', actionUrl);
//     // Optionally, you can populate the form fields with the product data here

//     // Show the edit form
//     $('.editForm_hidden').show();
//     console.log('Edit form displayed')
// });

$(document).on('click', '.edit_link', function(e) {
    e.preventDefault();
    console.log('Edit link clicked');

    // Get the product ID from the data attribute of the clicked row
    const productId = $(this).closest('tr').data('product-id');
    console.log('Product ID:', productId);

    // Update the form action URL
    const form = $('#hidden_form');
    const actionUrl = '/products/edit_product/' + productId + '/';
    form.attr('action', actionUrl);
    console.log('Form Action URL:', actionUrl);

    // Show the edit form
    $('.editForm_hidden').show();
    console.log('Edit form displayed');
});






// Function to initialize the DataTable
$(document).ready(function () {
    $('#product_table').DataTable();
});










