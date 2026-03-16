const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
    <html>
    <head>
        <title>Assignment 6</title>
        <style>

            body{
                font-family: sans-serif;
                margin:auto;
                color:#4b5b67;
            }

            .nav{
                display:flex;
                justify-content:space-around;
                align-items:center;
                padding:0 20px;
            }

            ul{
                display:flex;
                list-style:none;
                gap:30px;
                color:#8b8b8b;
            }

            .username{
                background:#e7f7ff;
                color:#31b4ff;
                padding:18px;
                font-weight:bold;
                border-radius:10px;
            }

            a{
                text-decoration:none;
                color:inherit;
            }

            .section{
                display:flex;
                align-items:center;
                margin:60px 200px;
            }

            .section div{
                width:50%;
                padding:0 20px;
            }

            .left_div p{
                color:#8b8b8b;
                line-height:1.5;
            }

            .right_div img{
                width:400px;
            }

            .button{
                background:#15acff;
                color:white;
                border:none;
                border-radius:10px;
                height:49px;
                width:237px;
                margin:25px 0;
                cursor:pointer;
            }

            .about, .contact-info{
                margin:50px 200px;
            }

            .quality-desc{
                display:flex;
                justify-content:space-around;
                text-align:center;
                padding:10px;
            }

            .key-attr{
                width:225px;
                margin:10px;
            }

            .key-attr p{
                font-size:small;
                padding:10px 0;
            }

            .attr-icon{
                width:100px;
                margin-bottom:5px;
            }

        </style>
    </head>

    <body>

    <nav class="nav">
        <div class="logo"><h1>Logo</h1></div>

        <ul class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>

        <div class="username">UserName</div>
    </nav>
    `);
    if (req.url === "/" || req.url === "/home") {

        res.write(`
        <div class="section">

            <div class="left_div">
                <h1>Revitalize Your Clothes with Expert</h1>
                <h1 style="color:#15acff">Laundry Services!</h1>

                <p>
                    From premium dry cleaning to swift wash and fold,
                    we deliver care and convenience. Schedule a pickup
                    and rediscover the freshness of your clothes today!
                </p>

                <button class="button">Book a service today!</button>
            </div>

            <div class="right_div">
                <img src="https://as2.ftcdn.net/jpg/04/35/40/29/1000_F_435402948_3ky1Bt4BK0QVZhk9rL19fJa0QQ9FIwbC.jpg"/>
            </div>

        </div>
        `);
    }

    else if (req.url === "/services") {

        res.write(`
        <section style="margin:50px 100px">

            <h2 style="text-align:center">Our Services & Pricing</h2>

            <div style="display:flex;flex-wrap:wrap;gap:20px;justify-content:center">

                <div style="border:1px solid #ccc;padding:20px;width:250px;border-radius:8px">
                    <h3>Dry Cleaning</h3>
                    <p><strong>Price: $200.00</strong></p>
                </div>

                <div style="border:1px solid #ccc;padding:20px;width:250px;border-radius:8px">
                    <h3>Wash & Fold</h3>
                    <p><strong>Price: $100.00</strong></p>
                </div>

                <div style="border:1px solid #ccc;padding:20px;width:250px;border-radius:8px">
                    <h3>Ironing</h3>
                    <p><strong>Price: $30.00</strong></p>
                </div>

                <div style="border:1px solid #ccc;padding:20px;width:250px;border-radius:8px">
                    <h3>Stain Removal</h3>
                    <p><strong>Price: $500.00</strong></p>
                </div>

                <div style="border:1px solid #ccc;padding:20px;width:250px;border-radius:8px">
                    <h3>Leather & Suede Cleaning</h3>
                    <p><strong>Price: $999.00</strong></p>
                </div>

                <div style="border:1px solid #ccc;padding:20px;width:250px;border-radius:8px">
                    <h3>Wedding Dress Cleaning</h3>
                    <p><strong>Price: $2800.00</strong></p>
                </div>

            </div>
        </section>
        `);
    }
    else if (req.url === "/about") {

        res.write(`
        <section class="about">

            <div class="quality-desc">

                <div class="key-attr">
                    <img src="https://www.svgrepo.com/show/426864/washing-machine.svg" class="attr-icon">
                    <div><b>Premium Services</b></div>
                    <p>
                        Elevate your wardrobe with our meticulous dry cleaning,
                        ensuring garments look and feel as good as new.
                    </p>
                </div>

                <div class="key-attr">
                    <img src="https://www.svgrepo.com/show/369977/customerservice.svg" class="attr-icon">
                    <div><b>Quick Support</b></div>
                    <p>
                        We're committed to providing prompt solutions
                        to ensure your experience is smooth and worry-free.
                    </p>
                </div>

                <div class="key-attr">
                    <img src="https://www.svgrepo.com/show/477681/delivery.svg" class="attr-icon">
                    <div><b>Hassle Free Delivery</b></div>
                    <p>
                        Enjoy convenient pickup and delivery options
                        tailored to your schedule.
                    </p>
                </div>

                <div class="key-attr">
                    <img src="https://www.svgrepo.com/show/525838/dollar-minimalistic.svg" class="attr-icon">
                    <div><b>Affordable Prices</b></div>
                    <p>
                        Experience exceptional care without breaking the bank.
                    </p>
                </div>

            </div>

        </section>`);
    }
    else if (req.url === "/contact") {

        res.write(`
        <div class="contact-info">

            <h3>Get in Touch</h3>

            <p><strong>Address:</strong> 123 Main Street, Your City, Your Country</p>
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>

            <h3>Business Hours</h3>

            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>

        </div>
        `);
    }

    else {
        res.write(`<h1 style="text-align:center">404 Not Found</h1>`);
    }

    res.write(`</body></html>`);
    res.end();

});

server.listen(port, () => {
    console.log("Server running at http://localhost:" + port);
});