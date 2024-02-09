// function for limiting number of selections on checkboxes

function limitFunc(){
    let allacadprog = document.querySelectorAll('.acadprog');
    let selected = 0;

    for(let count = 0; count < allacadprog.length; count++){
        if(allacadprog[count].checked == true){
            selected += 1;
        }
    }
    if(selected > 3){
        document.querySelector('#invalid').innerText = "";
        alert("You can only make 3 selection");
        return false;
    }
    else{
        document.querySelector('#invalid').innerText = "";
    }
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzfqSnypBzFwgeXooDMmTbMdI2D2g9oQLusZXNFVgGFOwypVMxA2qIICK_Jz3w7bIOgkA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    alert('Student Information has been submitted!');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "The form has been submitted"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })
