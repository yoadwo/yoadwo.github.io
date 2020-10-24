export default {
    computed: {
        profileUrl: function () {
            return require("../assets/images/profile.jpg");
        },
        hackerUrlLight: function () {
            return require("../assets/images/hacker_outline_light.png");
        },
        hackerUrlDark: function () {
            return require("../assets/images/hacker_outline_dark.png");
        },
        iconUrl() {
            return require("../assets/images/hacker.png");
        }
    },
    methods: {
        projectIconUrl(fileName) {
            if (fileName) {
                return require("../assets/images/" + fileName);
            } else {
                return "";
            }

        }
    }
};