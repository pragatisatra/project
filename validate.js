
  
      function validate()
      {
      
         if( document.myForm.Name.value == "" )
         {
            alert( "Please provide your valid name!" );
            document.myForm.Name.focus() ;
            return false;
         }
		 var letters = /^[A-Za-z]+$/;  
		 
		 if(!document.myForm.Name.value.match(letters))
		 {
		   alert("Name must have alphabet characters only");  
		   document.myForm.Name.focus() ;
            return false;
         } 
		  if( document.myForm.Email.value == "" )
         {
            alert( "Please enter a valid Email" );
            document.myForm.Email.focus() ;
            return false;
         }
		 var x=document.myForm.Email.value;  
		 var atposition=x.indexOf("@");  
		 var dotposition=x.lastIndexOf(".");  
		 if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
		 {  
		 alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
		  document.myForm.Email.focus() ;
		 return false;  
		 }  
         if( document.myForm.Username.value == "" )
         {
            alert( "Please provide your valid  username!" );
            document.myForm.Username.focus() ;
            return false;
         }
		 
         if(document.myForm.paswd.value=="")
		 {  
		    alert("Password can't be blank");  
			document.myForm.paswd.focus() ;
			return false;  
		}
         
		 if(document.myForm.paswd.value.length <6 || document.myForm.paswd.value.length>20)
		 {  
		    alert("Password length must be between 6 to 20 characters");  
			document.myForm.paswd.focus() ;
			return false;  
		 }  
		 if(document.myForm.paswd.value!=document.myForm.repaswd.value)
		 {
		    alert( "Passwords don't match ! Retype password..." );
            document.myForm.repaswd.focus() ;
            return false;
		 }
         
		  if( document.myForm.Age.value == "" || isNaN( document.myForm.Age.value ) || document.myForm.Age.value > 100 )
         {
            alert( "Please provide a valid Age" );
            document.myForm.Age.focus() ;
            return false;
         }
		 
         if( document.myForm.Gender.selectedIndex <1 )
         {
            alert( "Please provide your gender !" );
            return false;
         }
		 
		 
         if( document.myForm.Phone.value == "" || isNaN( document.myForm.Phone.value ) || document.myForm.Phone.value.length != 10 )
         {
            alert( "Please provide a valid 10-digits Phone no." );
            document.myForm.Phone.focus() ;
            return false;
         }
		 
		
         return( true );
      }
   
