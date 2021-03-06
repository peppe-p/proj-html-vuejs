import Vue from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);

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
                    { name: "Patrick Spencer", role: "S&P Analyzer", imgURL: "./dist/images/speaker-6.jpg" },
                    { name: "Janet Jones", role: "Newyork Post's GM", imgURL: "./dist/images/speaker-5.jpg" },
                    { name: "Michael Dover", role: "Starbuck's CEO", imgURL: "./dist/images/speaker-4.jpg" },
                    { name: "Angelina Holy", role: "Maxii's Manager", imgURL: "./dist/images/speaker-3.jpg" },
                ],
                [
                    { name: "David Polline", role: "Dev COP", imgURL: "./dist/images/speaker-7.jpg" },
                    { name: "Patricia Bella", role: "S&P Analyzer", imgURL: "./dist/images/speaker-8.jpg" },
                    { name: "Albert Badoski", role: "S&P Analyzer", imgURL: "./dist/images/speaker-2.jpg" },
                    { name: "Alex Kennedy", role: "S&P Analyzer", imgURL: "./dist/images/speaker-1.jpg" },
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
        },

    }
})

