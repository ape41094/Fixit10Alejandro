/*
INSERT a pet into the database (assume it is not already in the database)
  Algorithm
  1. get the name and type of the pet they want to insert into the database.
  2. create insert query
  3. test the query in the database
  4. run query (ajax call)
    > if transit worked, check .responseText for query results
         - if .responseText is 500, means the insert worked - tell user so
         - if .responseText is not 500, means the insert did not work - tell user so
    > if transit didn't work, tell user error in transit
*/

pw = "Tequilaisgood123"
customerAdd.onshow=function(){
  txtCustomer_contents.style.height = "200px"
//create select statement
let query = "SELECT * FROM customer"
          
// Below change from my netID to yours (twice: user and database)    
let req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ape41094&pass=" + pw + "&database=ape41094&query=" + query)

  if (req.status == 200) { //transit trip worked.
    //has all roqs for for ex hores records 
       allCustomer = JSON.parse(req.responseText)
        console.log(results)
      }
//if there are no customers
if (results.length == 0)    // no results were returned by the query
       lblError1.value  = "There are no customers."
else 
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
//show all customer names 
  for (i = 0; i <=  allCustomer.length-1; i++) 
    txtCustomer.addItem(results[i][1])
}
//hard code Jess antiques into the database! 
//create variables for Jess Antiques 
//do this in the on click - then add to the customer dropdown table
btnAddJess.onclick=function(){

    let customerName = "Jess Antiques"
    let customerStreet = " 1113 F St" 
    let customerCity = "Omaha"
    let customerState = "NE"
    let customerzipcode = "68178"
    let query = "INSERT INTO customer (name, street, city, zipcode) VALUES ('" + customerName + "', '" + "', " + customerStreet "+ " + customerCity + "', '" +   customerState '" + "', '" + "', " + customerZipcode")
    //alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ape41094&pass=" + pw + "&database=ape41094&query=" + query)

    if (req.status == 200) { //transit worked.
        if (req.responseText == 500) {   // means the insert succeeded
            NSB.MsgBox("You have successfully added the customer!")
        } else
            NSB.MsgBox("There was a problem with adding the Jess Antiques to the database.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req.status);
    }  

} else {
//shows all the customers that are in the database in the 2nd textarea
    let message = " "
    for (i = 0; i < allCustomer.length-1; i++)
    message = message + allCustomer[i][1] + "\n"
    txtNonDelete1.value = message
} 
       


