import React from 'react';

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        //index of the the current string being typedout
        this.wordIndex = 0;
        //this.wait must be a base 10 interger
        this.wait = parseInt(wait, 10);
        //method type()
        this.type();
        // Boolean if the word is currently deleting
        this.isDeleting = false;
    }

    type() {
        //current index of words
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fullTxt = this.words[current];

        // check if deleting
        if (this.isDeleting){
        //remove character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        //add a charaacter
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
        // insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        //type speed for when it is typing, deleting and pausing after deletion

        let typeSpeed = 250;

        let pencil = document.querySelector('.fas-dark');

        //select pencil icon for writting animation
        const typingElement = document.querySelector('.fas');

        if (this.isDeleting){
            typeSpeed /= 3.5;        
        }
 
        if(this.isDeleting && pencil){
            typingElement.className = "fas fa-pencil-alt erasing-animation fas-dark";
        }else if (this.isDeleting && !pencil) {
            typingElement.className = "fas fa-pencil-alt erasing-animation";
        }else if(!this.isDeleting && !pencil){
            typingElement.className = "fas fa-pencil-alt writing-animation ";
        }else if (!this.isDeleting && pencil) {
            typingElement.className = "fas fa-pencil-alt writing-animation fas-dark";
        }

        // if word is complete
        if(!this.isDeleting && this.txt === fullTxt){
            // make pause at end
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting = true;
            //will stop the pencil animation after word completion
            // let pencil = document.querySelector('.fas-dark');
            if (pencil){
                typingElement.className = "fas fa-pencil-alt fas-dark";
            } else {
                typingElement.className = "fas fa-pencil-alt";
            }
            

        } else if (this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            //move to the next word in the HTML property
            this.wordIndex++;
            // pause time before the word start typing
            typeSpeed = 1000;
        }

        setTimeout(() => this.type(), typeSpeed)
    }
}

//Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
const txtElement = document.querySelector('.txt-type');

const words = ['Website?','Web App?', 'Developer?'];

const wait = 2500;

new TypeWriter(txtElement, words, wait);
}

const Title = () => {
    return (
    
        <header id="jumbotron" className="header-cont">
            <div className="header-animation">            
                <h1 className="header-h1">
                    Need a&#xA0; 
                    <span className="txt-type"> </span>
                    <i id="pencil" className="fas fa-pencil-alt"> </i>
                    <span className="cursor">|</span>
                </h1>
                <h2 id="header-h2" className="header-h2">
                    <span id="lpm" className="author">Luis Pepen </span>
                    is your solution!
                </h2>
            </div>            
       </header>
    
    )

}

export default Title;