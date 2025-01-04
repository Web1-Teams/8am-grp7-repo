const createProductsPage = () => {
    const content = document.querySelector('.content');
    
    const newPage = document.createElement('div');
    newPage.id = 'additional-products';
    newPage.style.marginTop = '30px';

    const pageTitle = document.createElement('h2');
    pageTitle.textContent = 'Explore More Products';
    pageTitle.style.color = '#ff80aa';
    newPage.appendChild(pageTitle);

    const products = [
        {
            name: 'Glowing Serum',
            description: 'A serum that gives your skin a radiant and hydrated look.',
        },
        {
            name: 'Oil-Free Moisturizer',
            description: 'Perfect for oily skin, keeps your skin matte all day.',
        },
        {
            name: 'Vitamin C Cream',
            description: 'Brightens your complexion and reduces dark spots.',
        },
        {
            name: 'Gentle Cleanser',
            description: 'Cleans your face without stripping its natural oils.',
        },
    ];

    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.style.display = 'flex';
        productCard.style.flexDirection = 'column';
        productCard.style.alignItems = 'center';
        productCard.style.backgroundColor = '#fff';
        productCard.style.border = '1px solid #ddd';
        productCard.style.borderRadius = '8px';
        productCard.style.padding = '15px';
        productCard.style.marginBottom = '20px';
        productCard.style.boxShadow = '0 1px 5px rgba(0, 0, 0, 0.1)';
        productCard.style.width = '100%';
        productCard.style.maxWidth = '300px';
        productCard.style.margin = '0 auto 20px';

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productName.style.color = '#ff80aa';
        productName.style.marginBottom = '10px';
        productCard.appendChild(productName);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDescription.style.textAlign = 'center';
        productCard.appendChild(productDescription);

        newPage.appendChild(productCard);
    });

    content.appendChild(newPage);
};

createProductsPage();
