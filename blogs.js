/* eslint-env browser */


// Step 1: Create the blogs object using accumulator pattern
const blogs = [
  {
    image: "Images/blogImg/Airavata-cottagesCOUPLEROOM.jpg",
    alt: "RESORT ROOMS IMAGES",
    title: "Hygene Rooms",
    date: "Dec 02, 2025",
    description: "Dandeli is a perfect getaway for adventure lovers. With river rafting, ziplining, and wildlife safaris, it's a paradise for thrill seekers.Our Dandeli resort hygiene rooms are clean, safe, and well maintained for guest comfort. We provide fresh water supply, regular cleaning, and proper waste disposal. Clean toilets and bathrooms help guests stay healthy and comfortable during their stay."
  },
  {
    image: "Images/blogImg/Airavata-cottagesSWIMMINGPOOL.jpg",
    alt: "SWIMMING POOL IMAGE",
    title: "Clean Swimmingpools",
    date: "Dec 05, 2025",
    description: "A clean swimming pool keeps water fresh and safe for swimmers. Filters and cleaning systems remove dirt and germs. Regular maintenance helps keep the pool hygienic. Clean pools make swimming safe and enjoyable for everyone.Clean swimming pools give a healthy and fun swimming experience. Dirty pools can cause eye and skin problems. Proper cleaning and filtering of pool water is very important. People should not throw waste or spit in the pool."
  },
  {
    image: "Images/blogImg/raft.jpg",
    alt: "RIVER RAFTING IMAGES",
    title: "Adventureous River Rafting",
    date: "Dec 08, 2025",
    description: "Dandeli river rafting gives a thrilling experience with strong water currents and beautiful forest views. It is done with expert instructors to ensure safety. This adventure sport gives fun, excitement, and unforgettable memories for tourists.River rafting in Dandeli is one of the most popular adventure activities. The ride goes through natural forests and rocky rivers. It is safe, exciting, and perfect for friends and family groups who love adventure and outdoor fun."
  }
];

// Step 2: Generate HTML dynamically (accumulator pattern)
let blogHTML = "";

blogs.forEach((blog, index) => {
  blogHTML += `
    <div class="blog-card">
      <img src="${blog.image}" alt="${blog.alt}" class="blog-image" />
      <div class="blog-content">
        <h2 class="blog-title">${blog.title}</h2>
        <button class="toggle-btn" data-index="${index}">Read More</button>
        <p class="blog-date">${blog.date}</p>
        <div class="blog-description" id="desc-${index}">
          ${blog.description}
        </div>
      </div>
    </div>
  `;
});

// Step 3: Insert generated HTML into the container
document.getElementById("blog-container").innerHTML = blogHTML;

// Step 4: Add dropdown toggle functionality
const buttons = document.querySelectorAll(".toggle-btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const index = button.dataset.index;
    const desc = document.getElementById(`desc-${index}`);
    desc.classList.toggle("show");

    // Change button text dynamically
    button.textContent = desc.classList.contains("show") ? "Show Less" : "Read More";
  });
});
