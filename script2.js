function myFunction(){
  var name = String(document.getElementById("enterName").value);
  var amount = parseInt(document.getElementById("enterAmount").value);
  var userAccount = name+'BankBalance';
  var a = document.getElementById(userAccount).id;
  var userBalance = document.getElementById(a).innerHTML; 
  var myAccountBalance = document.getElementById("myAccountBalance").innerHTML;
  var currentBalance = myAccountBalance - amount;
  if(currentBalance<500){
    alert("Insufficient Balance. Balance will reached the limit of $500.");
  }else{
    alert(`Successful Transaction !!  
      $${amount} is sent to ${name}@email.com.`);
      document.getElementById("myAccountBalance").innerHTML = currentBalance;
      var currentUserBalance = Number(userBalance) + Number(amount);
      document.getElementById(a).innerHTML = currentUserBalance;

      //Transaction history
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${amount} is sent to recepient with Email-id ${name}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
  }
}
  
/*function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/12189/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}*/
