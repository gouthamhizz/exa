let member = document.getElementById('values');
num = 0;
function addMem(){
   
   num+=1;
   window.localStorage.setItem("mylocalStorage",JSON.stringify(num));
   member.textContent=JSON.parse(localStorage.getItem("mylocalStorage"));;

}
function values  ()  {
    const newJoin = num;
   console.log(newJoin);
};
// window.localStorage.setItem("mylocalStorage",JSON.stringify(num));
const mylocalData = JSON.parse(localStorage.getItem("mylocalStorage"));
console.log(mylocalData)