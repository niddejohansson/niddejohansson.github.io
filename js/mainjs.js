function validateForm()
	{
        var fname = document.forms["kontaktform"]["fname"].value;
        var lname = document.forms["kontaktform"]["lname"].value;
        var email = document.forms["kontaktform"]["email"].value;
        var subject = document.forms["kontaktform"]["subject"].value;


        if (fname==null || fname=="") {
            alert("Fyll i ditt förnamn");
			document.getElementById("fname").focus();
			return false;
        }
        else if (lname==null || lname=="") {
            alert("Fyll i ditt efternamn");
			document.getElementById("lname").focus();
			return false;
        }
        else if (email==null || email=="") {
            alert("Skriv din e-post");
			document.getElementById("email").focus();
			return false;
        }
        else if (subject==null || subject=="") {
            alert("Ställ en fråga");
			document.getElementById("subject").focus();
			return false;
        }
    }


function getNextElement(field) 
{
    var form = field.form;
    for ( var e = 0; e < form.elements.length; e++) {
        if (field == form.elements[e]) {
            break;
        }
    }
    return form.elements[++e % form.elements.length];
}

function tabOnEnter(field, evt) 
{
    if (evt.keyCode === 13) 
    {
        if (evt.preventDefault) 
        {
            evt.preventDefault();
        } 
        else if (evt.stopPropagation) 
        {
            evt.stopPropagation();
        } 
        else 
        {
            evt.returnValue = false;
        }
        getNextElement(field).focus();
        return false;
    } else {
        return true;
    }
}

/* function checkBox(boxId, analysText) {
    var ibockad = document.getElementById(boxId);
    var textRuta = document.getElementById(analysText);
    if (ibockad.checked === true) {
        textRuta.style.display = "block";
    }
    else {
        textRuta.style.display = "none";
    }
  }
 */

/* function checkBoxAnalys() {
    var analysText = document.getElementsByClassName("analysText");
    var checkBoxes = document.querySelectorAll(".form-check-input");

    for(i = 0; i < analysText.length; i++) {
        console.log(analysText[i].style.display)
        console.log(checkBoxes[i].checked)
        checkBoxes.addEventlistener(("click", (e) =>{
            console.log("hej")
        }))
    }

}
checkBoxAnalys()
   */



var analysText = document.getElementsByClassName("analysText");
var checkBoxes = document.querySelectorAll(".form-check-input");

/* checkBoxes.forEach(checkBox => {
    
    checkBox.addEventListener("click", (e) =>{
       
        
            }
        }) */
        
checkBoxes.forEach(checkBox => {
    
    checkBox.addEventListener("click", (e) =>{
        if (checkBox.checked) {
            var ibockad = checkBox.value;
            analysText.value = ibockad;
            if(analysText.value === checkBox.value){
                document.getElementsByClassName('analysText')[ibockad -1].style.display = 'block'            
            }
           
        }
        if(!checkBox.checked){
            var urbockad = checkBox.value;
            analysText.value = urbockad;
            if(analysText.value === checkBox.value){
                document.getElementsByClassName('analysText')[urbockad -1].style.display = 'none'            
            }
        }

        
    })
});