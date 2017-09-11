window.addEventListener ("load", myMain, false);

function myMain (evt) {
   
    btnWriteMail = document.querySelector('div.z0');
   
    btnWriteMail.insertAdjacentHTML("afterend",'<div class="T-I J-J5-Ji T-I-KE L3" role="button" tabindex="1" style="user-select: none;" id="btnSecuMail">보안편지쓰기</div>');
   
    btnSecuMail = document.querySelector('#btnSecuMail');
    
    btnSecuMail.addEventListener("click", function(a){
        alert(1);
    })
}





