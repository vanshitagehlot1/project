const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src=" C:\Users\Vanshita gehlot\OneDrive\Desktop\projectt\cakes pic\Grender1.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">

            <li class="category-title">Quick links</li>
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Cakes</a></li>
            <li class="link-item"><a href="#" class="link">Cupcakes</a></li>
            <li class="link-item"><a href="#" class="link">Desserts</a></li>
            <li class="link-item"><a href="#" class="link">Contact </a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Contact us</li>
            <li><img src="C:\Users\Vanshita gehlot\OneDrive\Desktop\projectt\cakes pic\whatsapp-logo.png"
                    style="width:20px"> +91 8107053401</li><br>
            <li>vanshitacakestudio@gmail.com</li>
        </ul>
    </div>
</div>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="https://www.instagram.com/invites/contact/?i=1cqxv20epc92f&utm_content=iz162xw"
            class="social-link"><img
                src="C:\Users\Vanshita gehlot\OneDrive\Desktop\projectt\cakes pic\instalogo.png"
                style="width: 30px"> </a>
        <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fcake.studio155%2F&e=ATMP2d_hmn87dhnkbU7F3eAehlpTx0_KlgfVoIl-_Z45yueQ4VgePjqTQkjdCwnU6fd6b1DC6ykHaAXhyBw1lVe1Lmp7pZxweTcfLm0&s=1"
            class="social-link"><img
                src="C:\Users\Vanshita gehlot\OneDrive\Desktop\projectt\cakes pic\Facebook_Logo_(2019).png"
                style="width: 30px"> </a>

        <a href="https://wa.me/message/2ENWJQS5M25ME1" class="social-link"><img
                src="C:\Users\Vanshita gehlot\OneDrive\Desktop\projectt\cakes pic\whatsapp-logo-png-hd-2.png"
                style="width:35px"></a>
    </div>
    <p class="footer-credit"> &copy; 2022 CakeSudio,Inc.All rights reserved</p>
</div>
    `;
}

createFooter();