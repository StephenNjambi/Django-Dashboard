// newmembers table javascript 
    $(document).ready(function () {
        $('#newMemberTable').DataTable({
            "paging": true,
            "pageLength": 9, 
            "dom": '<"top"l>rt<"bottom"ip>', 
        });
    });


// // Members table javascript code.
//     $(document).ready(function () {``
//         $('#allMembers_talbe').DataTable();
//     });


// removing member form new members table to members table.
// $(document).ready(function () {
//     // Function to store the updated table data in local storage
//     function storeTableData() {
//         var allMembersData = $('#allMembers_table tbody').html();
//         localStorage.setItem('allMembersData', allMembersData);
//     }

    // Function to retrieve and display data from local storage
    // function retrieveTableData() {
    //     var storedData = localStorage.getItem('allMembersData');
    //     if (storedData) {
    //         $('#allMembers_table tbody').html(storedData);
    //         console.log('Data retrieved from local storage');
    //     }
    // }

//     retrieveTableData(); // Call this function to load data from local storage on page load
//     $('#newMemberTable tbody').on('click', 'button.add_button', function () {
//         var row = $(this).closest('tr');
//         var newRow = row.clone();
//         newRow.find('button.add_button').remove();
//         $('#allMembers_table tbody').append(newRow);
//         row.remove();
//         storeTableData(); // Call this to update local storage when a member is added
//     });
// });

























































































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