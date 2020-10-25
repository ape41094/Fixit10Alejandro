

let pw = "Tequilaisgood123"

/*
1. create global variables req and query and results if not already done
 2. create SELECT query - that gets customer names to be displayed
 3. look at query
 4. test SELECT query in Database
 5. run ajax call (which runs the query)
    > if transit works, parse results into JSON
    > if transit didn't work, tell user error in transit 
> user can select one customer
> Used a sql Select  query to get all of the customers whose state matches the state of the customer chosen by the user. 
SELECT * FROM customer WHERE state == " "
let state = "SELECT * FROM customer WHERE state == userState
> Used a textArea to show the user the matching customers, one per line, using a template literal.
*/

customerSelect.onshow=function() {
  txtResults_contents.style.height = "200px"
//create select statement
let query = "SELECT * FROM customer"
          
// Below change from my netID to yours (twice: user and database)    
let req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ape41094&pass=" + pw + "&database=ape41094&query=" + query)

  if (req.status == 200) { //transit trip worked.
    //has all roqs for for ex hores records 
       results = JSON.parse(req.responseText)
        console.log(results)
      }
//showing all names of customer on the table

if (results.length == 0)    // no results were returned by the query
       lblmsg.value  = "There are no customers."
else 
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
//show all customer names 
  for (i = 0; i <= results.length-1; i++) 
    txtAllNames.addItem(results[i][1])
}
//when the user clicks a name 
txtAllNames.onclick=function(){
  let nameCustomer = ' '
  let customerState = ' '
  let displayNames = [ ]
  
  
if (typeof (s) == 'object') 
  return
else
  //when user clicks a name have it be matched to a state 
      //you have to have a match to where the user clicks the name and where the 
      //possibly take this out
  txtAllNames.value = s
  //select the customer name 
  nameCustomer = txtAllNames.selction 
  //select the state to match the name
        for (i = 0; i < results.length[i][1]; i++)
          if(nameCustomer == results[i][1])
            customerState = results[i][4]
         // break
  //allows the reults to be matched to a state - and adds to an array 
    for (i = 0; i < results.length[i][1]; i++)
      if (state == results[i][4])
        displayNames.push(results[i][1])
      
          //write a select statement to show the state in the box 
        newQuery = `SELECT name FROM customer WHERE state = ${customerState}`
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ape41094&pass=" + pw + "&database=ape41094&query=" + query)
        if (req.status == 200) { //transit trip worked.
       results = JSON.parse(req.responseText)
 //PROBLEM WITH THE ELSE 
 else 
    let message = " "
    for (i = 0; i < results.length-1; i++)
    message = message + results[i][0] + "\n"
    txtAllStates.value = message
     // end else
  else
      txtAllStates = `Error code:  + ${req.status} `

}