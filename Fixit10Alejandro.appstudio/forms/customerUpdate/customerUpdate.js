
let pw = "Tequilaisgood123"

selToChange.onclick=function(){

    // get the data to populate the dropdown with names from database

    let query = "SELECT name FROM customer"

    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ape41094&pass=" + pw + "&database=ape41094&query=" + query)

 

    if (req.status == 200) { //transit worked.

          allNames = JSON.parse(req.responseText)

            // names now in results array - load names into the dropdown

            //POSSIBLY CHANGE - SEL

            selToChange.clear()

            for (i = 0; i <= allNames.length - 1; i++)

                selToChange.addItem(allNames[i])

    } else {

        // transit error

        NSB.MsgBox(`Error: ${req.status}`);

    } 

}

 

btnAddCustomer.onclick=function(){

    let newName = inptNewName.value

    let oldName = selToChange.value

  

    let found = false

    for (i = 0; i <= allNames.length - 1; i++)

        if (oldName == allNames[i]) {

            found = true

            break

        }

    

    if (found == false)

       NSB.MsgBox("The change is reflected in the database.")

    else if (found == true) {

        query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'

        //alert(query)

        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ape41094&pass=" + pw + "&database=ape41094&query=" + query)

 

        if (req.status == 200) { //transit worked.

            if (req.responseText == 500) {   // means the update succeeded

                NSB.MsgBox(`You have successfully changed the customer name!`)

                // reset controls to original state

                inptNewName.value = ""

                selToChange.value = ""

            } else

                NSB.MsgBox(`There was a problem changing the customer name.`)

        } else

            // transit error

            NSB.MsgBox(`Error: ${req.status}`);

//2nd text area display

} else {

//shows all the customers that are in the database in the 2nd textarea

    let message = " "

    for (i = 0; i < allNames.length; i++)

    message = message + allNames[i][1] + "\n"

    txtNewCustomerText.value = message

}

}