document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const dotsContainer = document.querySelector('.dots');

  let index = 0;

  images.forEach((_, i)=>{
      let dot = document.createElement('span');
      dot.classList.add('dot');
      if(i===0) dot.classList.add('active-dot');
      dot.onclick = ()=>moveTo(i);
      dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function moveTo(i){
      index=i;
      slides.style.transform = `translateX(-${index * 100}%)`;
      updateDots();
  }

  function updateDots(){
      dots.forEach(d=>d.classList.remove('active-dot'));
      dots[index].classList.add('active-dot');
  }

  prev.onclick = ()=>{
      index = (index<=0)? images.length-1 : index-1;
      moveTo(index);
  }

  next.onclick = ()=>{
      index = (index>=images.length-1)? 0 : index+1;
      moveTo(index);
  }

  setInterval(()=>{
      next.click();
  },3500);
});
