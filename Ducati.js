
        var flag=0
        // let e=document.getElementById("barsicon")
        // console.log(e)

        function fun(){ 
            
            e=document.getElementById("barsicon")
            console.log(e)
            e1=document.getElementById("navBarIcon1")
            if (flag==0){
                e.className="fa-solid fa-xmark"
                e1.style.display="block"
                flag=1
                // e1.style.transition="0.8s"
                
                
            }
            else{
                e.className="fa-solid fa-bars"
                e1.style.display="none"
                flag=0
                // e1.style.transition="0.8s"

            }
            
        }
        function fun2(m){
                f2O=document.getElementById("countries3")
                // fixNavBar=document.getElementById("fixedNavBar")
                // navBarIcon1=document.getElementById("navBarIcon1")


                if (m==0){
                f2O.style.display="flex"
                // e1.style.transition="0.8s"
                // fixNavBar.style.display="none"
                // navBarIcon1.style.display="none"

                
                
            }
            else{
                f2O.style.display="none"
                // e1.style.transition="0.8s"
                // fixNavBar.style.display="block"
                // navBarIcon1.style.display="block"
            }
            }
        function models(){
            let e=document.getElementById('subNavBar-models')
            let e1=document.getElementById('modelsicon')
            let e2=document.getElementById("navBarIcon1")
            if(flag==0)
            {
                e.style.display="flex"
                e1.className="fa-solid fa-chevron-up"
                flag=1
            }
            else{
                e.style.display="none"
                e1.className="fa-solid fa-chevron-down"
                flag=0
            }
        }