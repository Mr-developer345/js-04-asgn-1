//     // select colors 
// const boxes = document.querySelectorAll(".color");

// // loop through each box and add a event listener

// boxes.forEach(box => {box.addEventListener('click', ()=>{

// const selectedcolor = box.getAttribute('data-color');

// document.body.style.backgroundColor = selectedcolor;


// });

// });

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  box.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
});

box.addEventListener('mouseleave', () => {
  box.style.transform = 'translate(0, 0)';
});


