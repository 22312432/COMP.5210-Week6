//function EnterName()
//{
   // let name = window.prompt("Please Enter Name");
  // document.getElementById('js').innerHTML = name;

//}

function validateForm()
{
    let num1 = document.forms["myForm"]["num1"].value;
    let num2 = document.forms["myForm"]["num2"].value;

    let sum = parseInt(num1) + parseInt(num2);

    document.getElementById('add').innerHTML = sum;

    return false
    
}
//function validateForm() {
 //   let x = document.forms["myForm"]["fname"].value;
 //   if (x == "") {
 //     alert("Name must be filled out");
  //    return false;
  //  }
 // }