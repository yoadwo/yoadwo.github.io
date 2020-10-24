export default {
    methods: {
        toFormSpreeIo(token, data) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');

            const request = new Request("https://formspree.io/" + token, {
                method: "POST",
                body: JSON.stringify(data),
                headers: headers
            });

            return fetch(request);

        }
    }
};