 // Selection and get text

 const para1 = document.getElementById('para-1')
 const para2 = document.getElementById('para-2')
 const para3 = document.getElementById('para-3')
 const para4 = document.getElementById('para-4')
 const btn = document.querySelectorAll('.btn')
 const paraArray = [
     para1,
     para2,
     para3,
     para4
 ]

 const paraTextArray = [
     para1.innerText,
     para2.innerText,
     para3.innerText,
     para4.innerText
 ]


 // console.log(paraTextArray[2].slice(0, 150))
 for (let i = 0; i < 4; i++) {


     if (paraTextArray[i].length > 150) {
         paraArray[i].innerText = paraTextArray[i].slice(0, 150)
     }


 }


 let a = 'open';
 let b = ''
 for (let j = 0; j < btn.length; j++) {
     btn[j].addEventListener('click', function () {
         if (a == 'open') {
             btn[j].innerHTML = 'Less More'
             paraArray[j].innerHTML = `${paraTextArray[j].slice(0, 150)} <br><br>${paraTextArray[j].slice(150, (paraTextArray[j].length)/2)} <br><br> ${paraTextArray[j].slice( (paraTextArray[j].length)/2, paraTextArray[j].length)}`
             a = '';
             b = 'close'

         } else if (b == 'close') {
             paraArray[j].innerHTML = `${paraTextArray[j].slice(0, 150)}`
             btn[j].innerHTML = 'See More'

             a = 'open';
             b = ''
         }

     })
 }