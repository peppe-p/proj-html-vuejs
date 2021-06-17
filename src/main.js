var app = new Vue({
    el: '#root',
    data: {
        nav_menu: ["home", "pages", "program", "tickets", "speakers", "papers", "blog", "shotcodes"],
        selectedPage: 0,
        f_gallery: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"],
        tab_on: 1,
        speaker_page: 0,
        speakers:
            [
                [
                    { name: "Patrick Spencer", role: "S&P Analyzer", imgURL: "./PREVIEW/img/speaker-6.jpg" },
                    { name: "Patrick Spencer", role: "S&P Analyzer", imgURL: "./PREVIEW/img/speaker-6.jpg" },
                    { name: "Patrick Spencer", role: "S&P Analyzer", imgURL: "./PREVIEW/img/speaker-6.jpg" },
                    { name: "Patrick Spencer", role: "S&P Analyzer", imgURL: "./PREVIEW/img/speaker-6.jpg" },
                ],
                [
                    { name: "Patrick Spencer", role: "S&P Analyzer", imgURL: "./PREVIEW/img/speaker-5.jpg" },
                    { name: "Patrick Spencer", role: "S&P Analyzer", imgURL: "./PREVIEW/img/speaker-5.jpg" },
                    { name: "Patrick Spencer", role: "S&P Analyzer", imgURL: "./PREVIEW/img/speaker-5.jpg" },
                    { name: "Patrick Spencer", role: "S&P Analyzer", imgURL: "./PREVIEW/img/speaker-5.jpg" },
                ],
            ],
    },

    methods: {
        menuIndex: function (x) {
            this.selectedPage = x
        },

        setTab: function (x) {
            this.tab_on = x
        },

        pagePre: function () {
            this.speaker_page - 1;
            if (this.speaker_page == 0) {

            } else {
                this.speaker_page--;
            }
        },

        pageAfter: function () {
            this.speaker_page + 1;
            if (this.speaker_page == (this.speakers.length - 1)) {

            } else {
                this.speaker_page++;
            }
        }
    }
})

