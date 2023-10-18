
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


// function to Edit the product in product table

    // getting all the edit buttons 
    const editButtons = document.querySelectorAll(".edit_button");

    // Events Listeners 
    editButtons.forEach(buttons => {
        buttons.addEventListener("click", function(){

        
        // show the edit from pop
        const editForm = document.querySelector('.editForm_hidden');
        editForm.computedStyleMap.display = 'block';

        // fill the edit form fields with the row data 
        const row = this.closest('tr');
        const productType = row.cells[1].textContent;
        const productName = row.cells[2].textContent;
        const productPrice = row.cells[3].textContent;

        document.getElementById('editProductType').value = productType;
        document.getElementById('editProductName').value = productName;
        document.getElementById('editProductPrice').value = productPrice;



    });

});

// Add event listener to the "save" button.
const saveButton = document.getElementById("actionEdit_btn2");
saveButton.addEventListener("click", function(){
    const editForm = document.querySelector(".editForm_hidden");
    editForm.style.display = "none";
})