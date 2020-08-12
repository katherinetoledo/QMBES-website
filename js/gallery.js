var feed = new Instafeed({
    get: 'user',
    accessToken: '5787145626.1677ed0.d281eed9e8ed44c88485f2be120b5ce6',
    userId: '5787145626',
    limit: 12,
    filter: function (image) {
        return image.tags.indexOf('gallery') >= 0;
    },
    resolution: "standard_resolution",
    template: '<img src="{{image}}" class="instaPic"/>',
    after: function () {
        $('#instafeed').flickity({
            imagesLoaded: true,
            contain: true,
            cellAlign: 'left',
        });
    },

});
feed.run();


