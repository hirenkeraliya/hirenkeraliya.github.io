google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(22.269762,70.806773),
        styles: [
            {
                "featureType":"all",
                "elementType":"geometry",
                "stylers":[
                    {
                        "color":"#3dc1cb"
                    }
                ]
            },
            {
                "featureType":"all",
                "elementType":"labels.text.fill",
                "stylers":
                [
                    {
                        "gamma":0.01
                    },
                    {
                        "lightness":20
                    }
                ]
            },
                {
                    "featureType":"all",
                    "elementType":"labels.text.stroke",
                    "stylers":[
                        {
                            "saturation":-31
                        },
                        {
                            "lightness":-33
                        },
                        {
                            "weight":2
                        },
                        {
                            "gamma":0.8
                        }
                    ]
                },
                {
                    "featureType":"all",
                    "elementType":"labels.icon",
                    "stylers":[
                        {
                            "visibility":"off"
                        }
                    ]
                },
                {
                    "featureType":"landscape",
                    "elementType":"geometry",
                    "stylers":[
                        {
                            "lightness":30
                        },
                        {
                            "saturation":30
                        }
                    ]
                },
                {
                    "featureType":"poi",
                    "elementType":"geometry",
                    "stylers":[
                        {
                            "saturation":20
                        }
                    ]
                },
                {
                    "featureType":"poi.park",
                    "elementType":"geometry",
                    "stylers":[
                        {
                            "lightness":20
                        },
                        {
                            "saturation":-20
                        }
                    ]
                },
                {
                    "featureType":"road",
                    "elementType":"geometry",
                    "stylers":[
                        {
                            "lightness":10
                        },
                        {
                            "saturation":-30
                        }
                    ]
                },
                {
                    "featureType":"road",
                    "elementType":"geometry.stroke",
                    "stylers":[
                        {
                            "saturation":25
                        },
                        {
                            "lightness":25
                        }
                    ]
                },
                {
                    "featureType":"water","elementType":"all",
                    "stylers":[
                        {
                            "lightness":-20
                        }
                    ]
                }
            ]
        };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(22.269762,70.806773),
        map: map,
        title: 'Snazzy!'
    });
}
