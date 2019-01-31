"user strict";

// Ejemplo
var form = document.getElementById('demoForm');
var userFld = form.elements['user'];

if ( window.addEventListener ) { // avoid errors in incapable browsers
    form.addEventListener('submit', checkOnSubmit, true);
    userFld.addEventListener('focus', showUserInfo, false);
    userFld.addEventListener('blur', checkUserInfo, false);
}

function checkOnSubmit(e) {
    var fld;
    
    if ( !this.elements['terms'].checked ) { // terms checkbox checked?
        alert( 'Agree to our terms?' ); // alerts used to keep demo simple
        e.preventDefault(); // prevent submission (return false won't work)
    }
    
    // check user
    fld = this.elements['user'];
    if ( fld.value.length < 8 ) {
        alert( 'Invalid user name' );
        fld.focus();
        e.preventDefault();
    }
    
}

function showUserInfo(e) {
    //alert(e.type); // access event properties
    //var form = this.form; // to access form 
    //var terms = form.elements['terms']; // acccess other form elements
    //alert(terms.value);
    
    this.className = 'active'; // display span with validation info
}

function checkUserInfo(e) {
    this.className = '';
    
    if ( this.value.length < 8 ) {
        this.className = 'error';
    }
}