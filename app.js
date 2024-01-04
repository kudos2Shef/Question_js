//using selectors inside the element
// traversing the dom

//method2
const questions = document.querySelectorAll('.question');
questions.forEach(function(item){
    const btn = item.querySelector('.question-btn');
    /*item.addEventListener('click',function(e){
    
        item.classList.toggle('show-text');
    }); //this works but wont automatically close when we click other  */
    // to close automatically following 
    btn.addEventListener('click',function(e){
        questions.forEach(function(elem) {
            //console.log(elem);// 1 click output:all the 3 article but show-text present in the article i.e.clicked  
            if(elem !== item){
                elem.classList.remove('show-text');// 2nd click automatic close: if show-text present in 1st click remove 
            }
        });
        item.classList.toggle('show-text');
    });
});

 
/* method1
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(item){
    item.addEventListener('click',function(e){
    //console.log(e.currentTarget);
    //console.log(e.currentTarget.parentElement);// we get parent of btn =>question-title div
    //console.log(e.currentTarget.parentElement.parentElement);// we get parent of parent of the btn =>question article
    const questions = e.currentTarget.parentElement.parentElement;
    questions.classList.toggle('show-text');
});
});
*/