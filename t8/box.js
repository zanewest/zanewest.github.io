var box = document.getElementsByClassName('box')[0];

document.getElementsByClassName('toggleSlide')[0].onclick = function() {
    if(this.innerHTML === 'Slide')
    {
        this.innerHTML = 'Stop';
        box.classList.add('horizTranslate');
    } else {
        this.innerHTML = 'Slide';
        var computedStyle = window.getComputedStyle(box),
            marginLeft = computedStyle.getPropertyValue('margin-left');
        box.style.marginLeft = marginLeft;
        box.classList.remove('horizTranslate');
    }
}

var box = document.getElementsByClassName('box')[0];

document.getElementsByClassName('toggleSize')[0].onclick = function() {
    if(this.innerHTML === 'Grow')
    {
        this.innerHTML = 'Reset';
        box.classList.add('transform');
        box.classList.add('transform-active');
    } else {
        this.innerHTML = 'Grow';
        box.classList.remove('transform-active');
        box.classList.remove('transform');
    }
}