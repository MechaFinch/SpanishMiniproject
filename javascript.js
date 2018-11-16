document.getElementById("b").onclick = function(){
	let v = document.getElementById("txt").value.toLowerCase(),
  		p = document.getElementById("out");
  
  p.innerHTML = "";
  
  //Check if its a verb
  if(v.length < 3){
  	p.innerHTML = "Not a verb!";
    return;
  }
  
  //Continue check and also get ending for later
  let vEnd = v.substring(v.length - 2);
  if(vEnd != "ar" && vEnd != "er" && vEnd != "ir"){
  	p.innerHTML = "Not a verb!";
    return;
  }
  
  //Split by ending
  if(vEnd == "ar"){	//ar verbs
  	vEnd = v.substring(v.length - 3);
    
    if(vEnd == "car"){	//car verbs
    	p.innerHTML = "<p class=\"output rb1\">\n" + 
      							v.substring(0, v.length - 3) + "qué\n" +
                    "</p>";
    } else if(vEnd == "gar"){	//gar verbs
    	p.innerHTML = "<p class=\"output rb1\">\n" + 
      							v.substring(0, v.length - 3) + "gué\n" +
                    "</p>";
    } else if(vEnd == "zar"){	//zar verbs
    	p.innerHTML = "<p class=\"output rb1\">\n" + 
      							v.substring(0, v.length - 3) + "cé\n" + 
                    "</p>";
    } else {	//normal ar verbs
    	p.innerHTML = "<p class=\"outputPlain\">\n" + 
      							v.substring(0, v.length - 2) + "é\n" + 
                    "</p>";
    }
  } else {	//er and ir verbs
  	p.innerHTML = "<p class=\"outputPlain\">\n" +
    							v.substring(0, v.length - 2) + "í\n" +
                  "</p>";
  }
};
