// New member table code 

    $(document).ready(function () {
        $('#membersTable').DataTable({
            "paging": true, // Enable pagination
            "pageLength": 9, // Number of rows per page
            "dom": '<"top"l>rt<"bottom"ip>',
            // Add more options as needed
        });
    });





// members.js

    $(document).ready(function () {
        // Listen for clicks on the "Add" button in the "New Members" table
        $('#membersTable tbody').on('click', 'button#add_button', function () {
            // Get the clicked row
            var row = $(this).closest('tr');

            // Get the data from the row
            var firstName = row.find('td:eq(1)').text();
            var lastName = row.find('td:eq(2)').text();
            var email = row.find('td:eq(3)').text();

            // Remove the row from the "New Members" table
            row.remove();

            // Add a new row to the "Members" table with the data
            var newRow = '<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td></tr>';
            $('#members_Table tbody').append(newRow);

            // Reinitialize the DataTable for the "Members" table
            $('#members_Table').DataTable();
        });
    });


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