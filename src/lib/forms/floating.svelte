<div class="register">
    <form>
        <label for="name">
            <input type="text" id="name" aria-label="Name" placeholder="Name">
            <span>Name</span>
        </label>
        <label for="email">
            <input type="email" id="email" aria-label="Email" placeholder="Email">
            <span>Email</span>
        </label>
        <label for="phone">
            <input type="tel" id="phone" aria-label="Phone" placeholder="c">
            <span>Phone</span>
        </label>
        <button type="submit">Register</button>
    </form>
</div>
<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    min-height:100vh;
    display:grid;
    place-content:center;
    font-family:sans-serif;
    color:#6b6b6b;
}
form{
    width:90vw;
    max-width:768px;
    border:1px solid #ddd;
    padding:3vw;
    display:flex;
    flex-direction:column;
    border-radius:5px;
}

label{
    margin-bottom:15px;
    position:relative;
    border-bottom :1px solid #ddd;
  }
input{
    width:100%;
    padding:10px 0px;
    margin-top:20px;
    border: none;
    line-height:3 ;
    outline:none;
}
input::placeholder{
    opacity:0;
}
span{ /* the label is in a span this is what gets moved on focus */
    position:absolute;
    top:0;
    left:0;
    transform:translateY(30px);
    font-size:0.825em;
    transition-duration:300ms;
}
button{
    padding:15px 0px; 
    margin-top:20px;
    background:purple;
    color:#fff;
    border:1px solid purple;
    cursor:pointer;
    border-radius:3px;
}
/*** floating input / */
label:focus-within > span,
input:not(:placeholder-shown) + span{
    color:purple;
    transform:translateY(0px);
}

</style>

<!--The <label> has a position:relative: property. This enables us to place the actual label text within the <span> tag with an absolute position placement. I am placing the <span> to the top left of the the <label>. Then I used CSS transform property to move it 30px down. This gives the appearance that the label is placed within the <input> field. I am also setting the opacity property of the input placeholder to 0, so that it does not come in the way of our label text.-->