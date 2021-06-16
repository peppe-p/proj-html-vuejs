var app = new Vue({
    el: '#root',
    data: {
        nav_menu: ["home", "pages", "program", "tickets", "speakers", "papers", "blog", "shotcodes"],
        selectedPage: 0,
        f_gallery: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"],
    },

    methods: {
        prova: function (x) {
            this.selectedPage = x
        }
    }
})