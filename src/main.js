var app = new Vue({
    el: '#root',
    data: {
        nav_menu: ["home", "pages", "program", "tickets", "speakers", "papers", "blog", "shotcodes"],
        selectedPage: 0,
    },

    methods: {
        prova: function (x) {
            this.selectedPage = x
        }
    }
})