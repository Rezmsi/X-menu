let menu = document.querySelector('.img')
let icons = document.querySelector('.icons')
let user = document.querySelector('.user')
let chat = document.querySelector('.chat')
let tel = document.querySelector('.tel')
let info = document.querySelector('.info')

// usage variable
let flag =false
let iconDeg = null
let userTranslateX=0
let telTranslateX=0
let chatTranslateX=0
let infoTranslateX=0

menu.addEventListener('click', ()=>{

    if(!flag){
        flag=true
        iconDeg=0
        // all icons display=block
        icons.style.display='block'
        let timer = setInterval(() => {

            if(iconDeg===45){
                clearInterval(timer)
            }
            menu.style.cssText=`
            transform: rotate(${iconDeg}deg);
            `
            iconDeg++
        },7)

        let icon1Timer = setInterval(() => {

            userTranslateX++
            if(userTranslateX===70){
                clearInterval(icon1Timer)
            }
            
            user.style.cssText=`
            display: block;
            transform: translate(${userTranslateX}px , -6px);
            `
        }, 7);

        let icon2Timer = setInterval(() => {

            chatTranslateX++

            if(chatTranslateX===55){
                clearInterval(icon2Timer)
            }
            
            chat.style.cssText=`
            display: block;
            transform: translate(${chatTranslateX}px , 30px);
            `
        }, 7);


        let icon3Timer = setInterval(() => {

            telTranslateX++

            if(telTranslateX===21){
                clearInterval(icon3Timer)
            }
            
            tel.style.cssText=`
            display: block;
            transform: translate(${telTranslateX}px , 54px);
            `
        }, 7);


        let icon4Timer = setInterval(() => {

            infoTranslateX--

            if(infoTranslateX===-14){
                clearInterval(icon4Timer)
            }
            
            info.style.cssText=`
            display: block;
            transform: translate(${infoTranslateX}px , 60px);
            `
        }, 7);

    }else{
        flag=false
        iconDeg=45

        let timer = setInterval(() => {

            if(iconDeg===0){
                clearInterval(timer)
            }
            menu.style.cssText=`
            transform: rotate(${iconDeg}deg);
            `
            iconDeg--
        }, 5);

        let icon1Timer = setInterval(() => {

            userTranslateX--

            if(userTranslateX===0){
                clearInterval(icon1Timer)
                
            }
            
            user.style.cssText=`
            display: block;
            transform: translate(${userTranslateX}px , 0px);
            `
        }, 7);

        let icon2Timer = setInterval(() => {

            chatTranslateX--

            if(chatTranslateX===0){
                clearInterval(icon2Timer)

            }
            
            chat.style.cssText=`
            display: block;
            transform: translate(${chatTranslateX}px , 0px);
            `
        }, 7);

        let icon3Timer = setInterval(() => {

            telTranslateX--

            if(telTranslateX===0){
                clearInterval(icon3Timer)

            }
            
            tel.style.cssText=`
            display: block;
            transform: translate(${telTranslateX}px , 0px);
            `
        }, 7);

        let icon4Timer = setInterval(() => {

            infoTranslateX++

            if(infoTranslateX===0){
                clearInterval(icon4Timer)
            }
            
            info.style.cssText=`
            display: block;
            transform: translate(${infoTranslateX}px , 0px);
            `
        }, 7);

        // all icons display=none after translation complete
        let iconsTimer = setInterval(() => {
            if(infoTranslateX===0){
                clearInterval(iconsTimer)
                icons.style.display='none'
            }
        }, 300);

    }
    
})