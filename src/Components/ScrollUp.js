import React from 'react';

function ScrollUp() {

    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up')
        if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }

    window.addEventListener('scroll' , scrollUp)

    return (
        <a href="#" className="scrollUp" id="scroll-up">
            <i className='bx bx-up-arrow-alt scrollUp-icon'/>
        </a>
    );
}

export default ScrollUp;
