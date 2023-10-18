
// Finction table
$(document).ready(function () {
    $('#product_table').DataTable();
});


// Function to delete a row with confirmation
// $(document).on('click', '.delete_link i', function () {
//     if (confirm("Confirm delete")) {
//         const row = $(this).closest('tr');
//         if (row) {
//             const productId = row.data('product-id'); // Get the product ID from the row's data attribute

//             // Send an AJAX request to delete the product on the server
//             $.ajax({
//                 type: 'DELETE',
//                 url: '/products/delete_product/' + productId + '/',
//                 success: function () {
//                     // Remove the row from the table
//                     row.remove();
//                 },
//                 error: function (error) {
//                     console.error(error);
//                 }
//             });
//         }
//     }
// });

// Function to delete a row with confirmation
$(document).on('click', '.delete_link i', function () {
    if (confirm("Confirm delete")) {
        const row = $(this).closest('tr');
        if (row) {
            const productId = row.data('product-id');
            const table = $('#product_table').DataTable(); // Get the DataTable

            // Send an AJAX request to delete the product on the server
            $.ajax({
                type: 'DELETE',
                url: '/products/delete_product/' + productId + '/',
                success: function () {
                    // Remove the row from the table
                    row.remove();

                    // Update the DataTable to reorder the rows
                    table.draw();
                },
                error: function (error) {
                    console.error(error);
                }
            });
        }
    }
});

// Function to edit the product in the product table
$(document).on('click', '.edit_link i', function () {
    // Handle editing functionality here
    // You can show an edit form or implement your editing logic
    // For example, you can display a popup with the edit form.
});

// Function to initialize the DataTable
$(document).ready(function () {
    $('#product_table').DataTable();
});







