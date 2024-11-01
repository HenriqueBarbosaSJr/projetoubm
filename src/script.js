const btn = document.getElementById('btn');


btn.onclick = ()=>{
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
};