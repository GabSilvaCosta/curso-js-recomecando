let data = new Date()
let CurrentYear = data.getFullYear()
let bornUser = document.querySelector('#bornUser')
let res = document.querySelector('#res')
let button = document.querySelector('#Iverify').addEventListener('click', function() {
    if (Number(bornUser.value) > CurrentYear || Number(bornUser.value) == 0) {
        window.alert('[ERROR] The value entered is equal the 0 or greater than the current year.')
    } else {
        let WomanOrMan = document.getElementsByName('sexUser')
        let gender = ''
        let age = CurrentYear - Number(bornUser.value)
        let img = document.createElement('img')
        img.setAttribute('id', 'people')
        if ( WomanOrMan[0].checked) {
            gender = 'man'
                if (age <= 11) {
                    res.innerHTML = `We detected a child ${gender} with ${age} year/years.`
                    img.src = 'images/baby-boy-circle.png'
                    } else if (age <= 21) {
                        res.innerHTML = `We detected a young ${gender} with ${age} years.`
                        img.src = 'images/young-boy-circle.png'
                    } else if (age <= 50) {
                        res.innerHTML = `We detected a ${gender} with ${age} years.`
                        img.src = 'images/adult-man-circle.png'
                    } else {
                        res.innerHTML = `We detected a old ${gender} with ${age} years.`
                        img.src = 'images/old-man-circle.png'
                    }
                } else {
                    gender = 'woman'
                    if ( age <= 11) {
                        res.innerHTML = `We detected a child ${gender} with ${age} year/years.`
                        img.src = 'images/baby-girl-circle.png'
                    } else if (age <= 21) {
                        res.innerHTML = `We detected a young ${gender} with ${age} years.`
                        img.src = 'images/young-girl-circle.png'
                    } else if (age <= 50) {
                        res.innerHTML = `We detected a ${gender} with ${age} years.`
                        img.src = 'images/adult-woman-circle.png'
                    } else {
                        res.innerHTML = `We detected a  old ${gender} with ${age} years.`
                        img.src = 'images/old-woman-circle.png'
                    }
                }
                res.appendChild(img)
            }
            bornUser.value = ''
            bornUser.focus()
})