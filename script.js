function getFormvalue(event) {
    //Write your code here
    event.preventDefault(); 
    const firstName=document.forms["form1"]["fname"].value;
    const lastName=document.forms["form1"]["lname"].value;
    
    alert(`${firstName} ${lastName}`);
}
