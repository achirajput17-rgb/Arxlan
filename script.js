// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Margherita",
        description: "Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil.",
        price: 14.99,
        category: "classic",
        rating: 5,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80"
    },
    {
        id: 2,
        name: "Pepperoni Passion",
        description: "Generous layer of spicy pepperoni with mozzarella cheese and our signature tomato sauce.",
        price: 16.99,
        category: "classic",
        rating: 5,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 3,
        name: "Truffle Mushroom",
        description: "Wild mushrooms, truffle oil, fontina cheese, fresh thyme, and a touch of garlic.",
        price: 19.99,
        category: "specialty",
        rating: 4,
        image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80"
    },
    {
        id: 4,
        name: "BBQ Chicken",
        description: "Grilled chicken, red onions, cilantro, mozzarella, and our homemade BBQ sauce.",
        price: 18.99,
        category: "specialty",
        rating: 4,
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80"
    },
    {
        id: 5,
        name: "Garden Delight",
        description: "Bell peppers, red onions, black olives, mushrooms, spinach, and cherry tomatoes.",
        price: 17.99,
        category: "vegetarian",
        rating: 5,
        image: "https://images.unsplash.com/photo-1552539612-78a1d5c78c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        id: 6,
        name: "Four Cheese",
        description: "Mozzarella, gorgonzola, parmesan, and fontina cheeses with a garlic-herb oil base.",
        price: 17.99,
        category: "vegetarian",
        rating: 4,
        image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        id: 7,
        name: "Meat Lovers",
        description: "Pepperoni, Italian sausage, ham, bacon, and ground beef with extra cheese.",
        price: 20.99,
        category: "specialty",
        rating: 5,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
        id: 8,
        name: "Hawaiian",
        description: "Classic combination of ham and pineapple with mozzarella cheese.",
        price: 16.99,
        category: "classic",
        rating: 3,
        image: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
];

// DOM Elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const menuItemsContainer = document.getElementById('menuItems');
const categoryButtons = document.querySelectorAll('.category-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryModal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const prevTestimonialBtn = document.getElementById('prevTestimonial');
const nextTestimonialBtn = document.getElementById('nextTestimonial');
const testimonials = document.querySelectorAll('.testimonial');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('nav a');

// Current testimonial index
let currentTestimonial = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Render all menu items initially
    renderMenuItems('all');
    
    // Set up testimonial slider
    showTestimonial(currentTestimonial);
    
    // Set up event listeners
    setupEventListeners();
    
    // Smooth scrolling for anchor links
    setupSmoothScrolling();
});

// Render menu items based on category
function renderMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const ratingStars = '★'.repeat(item.rating) + '☆'.repeat(5 - item.rating);
        
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <p class="menu-item-desc">${item.description}</p>
                <div class="menu-item-footer">
                    <div class="menu-item-rating">${ratingStars}</div>
                    <button class="btn" onclick="orderPizza('${item.name}')">Order Now</button>
                </div>
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItemElement);
    });
}

// Show testimonial at given index
function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });
    
    // Show the selected testimonial
    testimonials[index].style.display = 'block';
    currentTestimonial = index;
}

// Order pizza function
function orderPizza(pizzaName) {
    alert(`Thank you for ordering ${pizzaName}! We'll prepare your pizza fresh and have it ready in 20-30 minutes.`);
}

// Set up all event listeners
function setupEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Category filter buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Render menu items for selected category
            renderMenuItems(category);
        });
    });

    // Gallery modal functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            modalImage.src = imgSrc;
            galleryModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside image
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Testimonial navigation
    prevTestimonialBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonial(newIndex);
    });

    nextTestimonialBtn.addEventListener('click', function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(function() {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    }, 5000);

    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show an alert
        alert(`Thank you for your message, ${name}! We'll get back to you at ${email} within 24 hours.`);
        
        // Reset the form
        contactForm.reset();
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}