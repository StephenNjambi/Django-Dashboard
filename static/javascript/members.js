// newmembers table javascript 
    $(document).ready(function () {
        $('#newMemberTable').DataTable({
            "paging": true, // Enable pagination
            "pageLength": 9, // Number of rows per page
            "dom": '<"top"l>rt<"bottom"ip>', // Place the pagination control outside the table
        });
    });


// Members table javascript code.
    $(document).ready(function () {
        $('#allMembers_talbe').DataTable();
    });


// removing member form new members table to members table.
// Get all the "Add" buttons
const addButtons = document.querySelectorAll(".add_button");

// Iterate through each button and add a click event listener
addButtons.forEach(button => {
    button.addEventListener("click", function () {
        // Get the user ID from the data attribute
        const userId = this.getAttribute("data-user-id");

        // Find the row containing the clicked button
        const row = this.closest("tr");

        // Clone the row to move it to the last table
        const newRow = row.cloneNode(true);

        // Remove the button from the cloned row
        newRow.querySelector(".add_button").remove();

        // Add the cloned row to the last table's tbody
        const lastTableBody = document.querySelector("#allMembers_table tbody");
        lastTableBody.appendChild(newRow);

        // Remove the original row from the current table
        row.remove();
    });
});

















































































// New member table code 

    // $(document).ready(function () {
    //     $('#All_members_Table').DataTable({
    //         "paging": true, // Enable pagination
    //         "pageLength": 9, // Number of rows per page
    //         "dom": '<"top"l>rt<"bottom"ip>',
    //         // Add more options as needed
    //     });
    // });





// members.js

    // $(document).ready(function () {
    //     // Listen for clicks on the "Add" button in the "New Members" table
    //     $('#membersTable tbody').on('click', 'button#add_button', function () {
    //         // Get the clicked row
    //         var row = $(this).closest('tr');

    //         // Get the data from the row
    //         var firstName = row.find('td:eq(1)').text();
    //         var lastName = row.find('td:eq(2)').text();
    //         var email = row.find('td:eq(3)').text();

    //         // Remove the row from the "New Members" table
    //         row.remove();

    //         // Add a new row to the "Members" table with the data
    //         var newRow = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td></tr>';
    //         $('#members_Table tbody').append(newRow);

    //         // Reinitialize the DataTable for the "Members" table
    //         $('#members_Table').DataTable();
    //     });
    // });


    // $(document).ready(function () {
    //     // Listen for clicks on the "Add" button
    //     $('#membersTable tbody').on('click', 'button#add_button', function () {
    //         // Get the clicked row
    //         var row = $(this).closest('tr');

    //         // Get the data from the row
    //         var firstName = row.find('td:eq(1)').text();
    //         var lastName = row.find('td:eq(2)').text();
    //         var email = row.find('td:eq(3)').text();

    //         // Remove the row from the "New Members" table
    //         row.remove();

    //         // Add a new row to the "Members" table with the data
    //         var newRow = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td></tr>';
    //         $('#membersTableMembers tbody').append(newRow);
    //     });
    // });

   


// Members table code