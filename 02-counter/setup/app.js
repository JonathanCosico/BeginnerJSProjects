// set init count
let count = 0;

// select value and buttons
const value = document.querySelector('#value'); // id name is value = #
const btns = document.querySelectorAll('.btn'); // select all have class 'btn'
// NodeLists are array-like, can use for-each
// some array methods cannot use on array list -> need to transform into array

// calls function on each item in list (btns)
// passes each item into function
btns.forEach(function(btn) {
    // pass in each event object -> check each button being clicked 
    btn.addEventListener('click', function (e) {
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) { // if variable contains specific class->something
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        } 
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        else if (count < 0) {
            value.style.color = 'red';
        }
        else {
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});