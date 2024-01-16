document.write(`
    <!DOCTYPE html>
    <html lang="en" class="no-js">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MarkShark</title>
        <meta name="Description" content="This ">
        <link rel="icon" type="image/x-icon" href="Assets/Images/logo.jpg">
        <link rel="stylesheet" href="Assets/CSS/style.css">
    </head>
    <body>
        <header>
            <a href="./lecturerDashboard.html">
                <div class="logo">
                    <img src="Assets/Images/logo.png" alt="Logo">
                </div>
            </a>
            <div class="dropdown">
                <button class="dropbtn">Language &#x25BC</button>
                <div class="dropdown-content">
                <a href="#"><div class="lang-container"><img src="Assets/Images/uk.jpg" alt="Flag"><div class="lang">English</div></div></a>
                <a href="#"><div class="lang-container"><img src="Assets/Images/russia.jpg" alt="Flag"><div class="lang">Russian</div></div></a>
                <a href="#"><div class="lang-container"><img src="Assets/Images/arab.jpg" alt="Flag"><div class="lang">Arabic</div></div></a>
                </div>
            </div>
            <div class="user">
                <a href="#">
                    <img src="Assets/Images/colin.png" alt="Lecturer">
                </a>
                <div class="user-content">
                    <h3>Dr Colin Layfield</h3>
                    <p>colinlayfieldfake@um.edu.mt</p>
                    <br><br><h4>EXAMINER ACCOUNT</h4>
                    <a href="./lecturerLogIn.html" class="general-button" id="user-button">
                        <h3>Sign Out</h3>
                    </a>
                </div>
            </div>
            
        </header>
        <div class="filler"></div>
    </body>
`);