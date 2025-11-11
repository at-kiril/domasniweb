document.getElementById("loginmain1").addEventListener("submit",firma);

function firma(e){



    e.preventDefault();
    document.getElementById("usergreska").textContent=""
document.getElementById("pwgreska").textContent=""
    let valid=true;
    let user=document.getElementById("username").value.trim();
    let pw=document.getElementById("password").value.trim();

    if(!user){
        valid=false;
    }

    if(!pw){
        valid=false;
    }


    if(valid){
        alert("Честито, најавени сте!");
    }else{
        document.getElementById("usergreska").textContent="Ова поле не смее да биде празно!"
        document.getElementById("pwgreska").textContent="Ова поле не смее да биде празно!"

    }
};