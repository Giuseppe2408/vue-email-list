const aPI = new Vue({
    el: '#app',

    data: {
        email : [''],
    },

    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const resultMail = result.data.response;
            console.log(resultMail);
            this.email = resultMail;
        })
    },

}) 