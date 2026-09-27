// ========================================
// PRODUCT DATA
// ========================================

const products = [

    {
        id: 1,
        name: "Wireless Headphones",
        price: 1999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        description: "High-quality wireless headphones with clear sound."
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        description: "Modern smartwatch with fitness tracking features."
    },

    {
        id: 3,
        name: "Running Shoes",
        price: 2999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        description: "Comfortable shoes designed for running and sports."
    },

    {
        id: 4,
        name: "Backpack",
        price: 1499,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        description: "Stylish and durable backpack for everyday use."
    },

    {
        id: 5,
        name: "Camera",
        price: 35999,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        description: "Professional digital camera for photography."
    },

    {
        id: 6,
        name: "Laptop",
        price: 54999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        description: "Powerful laptop for work, study and entertainment."
    },

    {
        id: 7,
        name: "Sunglasses",
        price: 999,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        description: "Trendy sunglasses with UV protection."
    },

    {
        id: 8,
        name: "Mobile Phone",
        price: 28999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        description: "Modern smartphone with powerful performance."
    }

];


// ========================================
// CART
// ========================================

let cart = JSON.parse(
    localStorage.getItem("cart")
) || [];


// ========================================
// APP ROUTER
// ========================================

function router() {

    const route =
        window.location.hash.substring(1) || "home";

    if (route === "home") {
        showHome();
    }

    else if (route === "products") {
        showProducts();
    }

    else if (route === "cart") {
        showCart();
    }

    else if (route === "about") {
        showAbout();
    }

    else if (route === "contact") {
        showContact();
    }

    else {
        showHome();
    }

    updateCartCount();
}


// Run router when URL changes
window.addEventListener(
    "hashchange",
    router
);


// ========================================
// HOME PAGE
// ========================================

function showHome() {

    document.getElementById("app").innerHTML = `

        <section class="hero">

            <div class="hero-content">

                <h1>
                    Welcome to ShopEase
                </h1>

                <p>
                    Find quality products at affordable prices.
                    Shop your favorite products online.
                </p>

                <a
                    href="#products"
                    class="btn"
                >
                    Shop Now
                </a>

            </div>

        </section>


        <section class="products-section">

            <div class="section-title">

                <h2>
                    Featured Products
                </h2>

                <p>
                    Check out our popular products
                </p>

            </div>

            <div
                class="product-grid"
                id="featuredProducts"
            ></div>

        </section>

    `;

    displayProducts(
        products.slice(0, 4),
        "featuredProducts"
    );
}


// ========================================
// PRODUCTS PAGE
// ========================================

function showPr