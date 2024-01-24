window.screen.orientation.addEventListener('orientationchange', function() {
    // احصل على قيمة orientation
    const orientation = window.screen.orientation;

    // تحقق مما إذا كانت قيمة orientation تساوي LANDSCAPE
    if (orientation === "landscape") {
        const video = document.createElement('video');
        video.src = 'imgs/rotate.mp4'
        video.autoplay = true;
        video.loop = true;
        video.className = 'rotate';
        document.body.appendChild(video)
    } else {
        if (document.querySelector('.rotate')) {
            document.querySelector('.rotate').remove();
        }
    }
});
const effectAudio = new Audio('music/text.flac');
const bgAudio = new Audio('music/bg.wav');
bgAudio.loop = true;
setTimeout(() => {
    bgAudio.play();
}, 2000);

let currentIndex = 0;

// document.querySelector('button').addEventListener('click',function() {
//     charachterName = document.querySelector('input').value;
// })


textBoxFrom(document.body,'',intro[currentIndex],intro);



// Craete Text Box Function
function conversetionFrom(charachter,content) {
    currentIndex = 0;
    const conversetion = document.createElement('div');
    conversetion.className = 'conversetion';
    const imgs = document.createElement('div');
    imgs.className = 'imgs';
    const mainSlide = document.createElement('div');
    const mainImg = document.createElement('img');
    mainImg.src = 'imgs/main_charachter.png';
    mainSlide.className = 'slide main'
    mainSlide.appendChild(mainImg);
    const slide = document.createElement('div');
    slide.className = 'slide'
    const img = document.createElement('img');
    img.src = `imgs/${charachter}.png`;
    slide.appendChild(img);
    imgs.appendChild(mainSlide)
    imgs.appendChild(slide)


    // Append All Elements
    conversetion.appendChild(imgs);
    textBoxFrom(conversetion,content[currentIndex].c,content[currentIndex].p,content);


    document.body.appendChild(conversetion);
}


function textBoxFrom(ele,charachter,text,content) {
    const textBox = document.createElement('div');
    textBox.className = 'textbox';

    const textDiv = document.createElement('div');

    if (content != intro) {
        const h2 = document.createElement('h2');
        h2.innerHTML = charachter;
        textDiv.appendChild(h2)
    }

    const p =  document.createElement('p');
    p.innerHTML = text;
    textDiv.appendChild(p)
    textBox.appendChild(textDiv);
    const btnDiv = document.createElement('div');
    if (charachter == charachterName) {
        btnDiv.className = `arrow-right btn`;
        textBox.classList.add('main');
    } else {
        btnDiv.className = `arrow-left btn`;
    }

    btnDiv.addEventListener('click' , () => {
        btnDiv.parentElement.remove()
        currentIndex++
        if (content == intro) {
            if (intro[currentIndex] == undefined) {
                conversetionFrom('إكس',xAndCharachter);
            } else {
                textBoxFrom(ele,'',content[currentIndex],intro);
            }
        } else if (content == xAndCharachter) {
            if (content[currentIndex] == undefined) {
                conversetionFrom('ahmed',ahmedAndCharachter);
                document.querySelector('video').src = 'imgs/land.mp4'
                ele.remove()
            } else {
                textBoxFrom(ele,xAndCharachter[currentIndex].c,xAndCharachter[currentIndex].p,xAndCharachter);
            }
        } else if (content == ahmedAndCharachter) {
            if (content[currentIndex] == undefined) {
                conversetionFrom('إكس',xAndCharachterWithCharchter);
                ele.remove()
            } else {
                textBoxFrom(ele,ahmedAndCharachter[currentIndex].c,ahmedAndCharachter[currentIndex].p,ahmedAndCharachter);
            }
        } else if (content == xAndCharachterWithCharchter) {
            if (content[currentIndex] == undefined) {
                conversetionFrom('sara',saraAndCharachter);
                ele.remove();
            } else {
                textBoxFrom(ele,xAndCharachterWithCharchter[currentIndex].c,xAndCharachterWithCharchter[currentIndex].p,xAndCharachterWithCharchter);
            }
        } else if (content == saraAndCharachter) {
            if (content[currentIndex] == undefined) {
                conversetionFrom('omar',omarAndCharachter);
                ele.remove();
            } else {
                textBoxFrom(ele,saraAndCharachter[currentIndex].c,saraAndCharachter[currentIndex].p,saraAndCharachter);
            }
        } else if (content == omarAndCharachter) {
            if (content[currentIndex] == undefined) {
                conversetionFrom('إكس',xAndCharachterWithOmar);
                ele.remove();
            } else {
                textBoxFrom(ele,omarAndCharachter[currentIndex].c,omarAndCharachter[currentIndex].p,omarAndCharachter);
            }
        } else if (content == xAndCharachterWithOmar) {
            if (content[currentIndex] == undefined) {
                conversetionFrom('hend',hendAndCharachter);
                ele.remove();
            } else {
                textBoxFrom(ele,xAndCharachterWithOmar[currentIndex].c,xAndCharachterWithOmar[currentIndex].p,xAndCharachterWithOmar);
            }
        } else if (content == hendAndCharachter) {
            if (content[currentIndex] == undefined) {
                conversetionFrom('إكس_فرحان',xAndCharachterWithHend);
                ele.remove();
            } else {
                textBoxFrom(ele,hendAndCharachter[currentIndex].c,hendAndCharachter[currentIndex].p,hendAndCharachter);
            }
        } else if (content == xAndCharachterWithHend) {
            if (content[currentIndex] == undefined) {
                location.href.split('game')[0] + 'game' + '/test.html'
                ele.remove();
            } else {
                textBoxFrom(ele,xAndCharachterWithHend[currentIndex].c,xAndCharachterWithHend[currentIndex].p,xAndCharachterWithHend);
            }
        }

        effectAudio.play()
    })

    textBox.appendChild(btnDiv);

    ele.appendChild(textBox);
}
