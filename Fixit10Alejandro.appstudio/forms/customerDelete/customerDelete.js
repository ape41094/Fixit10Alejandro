
pw = "Tequilaisgood123"


1. Used a textArea  or Dropdown that shows all the customer names, one per line.
User can pick a customer from the list.  
Used a sql Delete  query to delete the customer chosen by the user from the display control. 
Used an AJAX call to the database to delete the matching customer. 
Checked if customer name exists in database before deleting it.
Used a textArea to show the user the remaining customer names, using a template literal. 
*/

customerDelete.onshow=function(){
  txtResults_contents.style.height = "200px"
//create select statement
let query = "SELECT * FROM customer"
          
// Below change from my netID to yours (twice: user and database)    
let req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ape41094&pass=" + pw + "&database=ape41094&query=" + query)

  if (req.status == 200) { //transit trip worked.
    //has all roqs for for ex hores records 
       allCustomerData = JSON.parse(req.responseText)
        console.log(results)
      }
//if there are no customers
if (results.length == 0)    // no results were returned by the query
       lblError.value  = "There are no customers."
else 
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
//show all customer names 
  for (i = 0; i <=  allCustomerData.length-1; i++) 
    txtNames.addItem(results[i][1])

//when the user clicks a name 
txtNames.onclick=function(){
  let customerDelete = txtNames.value
  //make sure in the database 
  let found = false 
   for (i = 0; i <= allCustomerData.length-1; i++) {
     if(customerDelete == allCustomerData[i][1])
     found = true 
     break
}
    if (found == false)
       NSB.MsgBox("That customer name is not in the database.")
    else if (found == true) {
      let query = "DELETE FROM customer WHERE name = " + '"' + customerDelete + '"'
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ape41094&pass=" + pw + "&database=ape41094&query=" + query)

      if (req.status == 200) { //transit worked.
            if (req.responseText == 500)    // means the insert succeeded
                NSB.MsgBox(`You have successfully deleted  ${customerDelete}`)
            else
                NSB.MsgBox(`There was a problem deleting ${customerDelete} from the database.`)
      } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
      }  
} else {
//for listing all of the names that have not been deleted 
    let message = " "
    for (i = 0; i < allCustomerData.length-1; i++)
    message = message + allCustomerData[i][0] + "\n"
    txtNonDelete.value = message
} 
       
       
       
       
       
       
       
       
       
       
  //allows the reults to be matched to a state - and adds to an array 
    
    for (i = 0; i < results.length[i][1]; i++)
      if (state == results[i][4])
        displayNames.push(results[i][1])
         newQuery = `SELECT name FROM customer WHERE state = ${customerState}`
          //write a select statement to show the state in the box 
        newQuery = `SELECT name FROM customer WHERE state = ${customerState}`
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ape41094&pass=" + pw + "&database=ape41094&query=" + query)
        if (req.status == 200) { //transit trip worked.
    //has all roqs for for ex hores records 
       results = JSON.parse(req.responseText)
 //PROBLEM WITH THE ELSE 
 else 
    let message = " "
    for (i = 0; i < results.length-1; i++)
    message = message + results[i][0] + "\n"
    txtAllStates.value = message
     // end else
  else
      txtAllStates = `Error code:  + req.status `

        


}


}
