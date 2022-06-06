const aPI = new Vue({
    el: '#app',

    data: {
        email : [''],
        mail : 'pepp'
    },

    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
            const resultMail = result.data.response;
            console.log(resultMail);
            this.email = resultMail;
        })
    },

    methods : {
        addNumber: function(){
            if(this.mail){
            this.email.push(this.mail);
            }
            },
    }
}) 