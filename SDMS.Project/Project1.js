
function ss()
{
	if(f1.t1.value=="")
	{
	alert("Pls ente the Username");
	}
	else if(f1.t2.value=="")
	{
	alert("Pls enter the password"); 
	}
	else
	{
	f1.action="http://desktop-0vjq3va:8080/examples/servlets/servlet/Samp2";
	f1.method="post";
	f1.submit();
	}
	
}