$(function() {
    
    $("#login").click(function(){
        $('#main-picture').fadeToggle(); 
        $("#right-section").
        html(`
        <form id="login-form">
        <h1>Log in Form</h1>
            <div class="form-group">
                <label class="col-form-label" for="inputDefault">Username</label>
                <input type="text" class="form-control" placeholder="Username" id="username">
            </div>
                <div class="form-group">
                <label class="col-form-label" for="inputDefault">Password</label>
                <input type="password" class="form-control" placeholder="Password" id="password">
            </div>
            <p><b>Username:</b> pinkman</p>
            <p><b>Password:</b> whatever</p>
            <button type="submit" class="btn btn-info">Log in</button>
        </form>
        `);      
    });

    $("#brand").click(function(){
        location.reload();     
    });
});
