let booking = document.querySelector('#booking');

document.getElementById('booking').innerHTML += `
            <div class="bookImage">
                <img src="./Assets/book-img.svg" alt="book-img">
            </div>
          
            <form action="">
                <h3>book appointment</h3>
                <input type="text" placeholder="your name" class="box">
                <input type="number" placeholder="your number" class="box">
                <input type="email" placeholder="Your Email" class="box email">
                <input type="date" class="box">
                <input type="submit" value="book now" class="btn">
            </form>
`;


