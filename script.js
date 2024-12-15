const welcomeText = document.getElementById('dynamic-welcome');
const messages = ["Welcome to Gourmet Haven", "Your Culinary Paradise", "Indulge in Exquisite Dining"];
let index = 0;

setInterval(() => {
    index = (index + 1) % messages.length;
    welcomeText.textContent = messages[index];
}, 3000);

// ------------------Menu------------------------------

const prices = document.querySelectorAll('.price');


prices.forEach(price => {
    price.addEventListener('mouseover', () => {
        price.style.fontSize = '2rem';
    });

    price.addEventListener('mouseout', () => {
        price.style.fontSize = '1.4rem';
    });
});


const buttons = document.querySelectorAll('.btn'); 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const img = card.querySelector('.card-img-top');
        img.src = 'https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=';
    });
});

// -------------------------Contact-Us----------------------

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    let isValid = true;
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (isValid) {
        
        document.getElementById('successMessage').style.display = 'block';

        
        this.reset();

        
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            
            input.value = input.value.toUpperCase();
          
            input.style.color = '#d35400'; 
        });
    });
});
