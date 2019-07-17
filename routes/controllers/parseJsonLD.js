var finalJson = {
  "@context": "https://schema.org",
  "@type": "Book",
  "author": {
    "@type": "Person",
    "name": ""
  },
  "id": "",
  "sameAs": "",
  "name": "",
  "url": "http://www.barnesandnoble.com/store/info/offer/JDSalinger",
  "workExample": [
    {
      "@type": "Book",
      "bookFormat": "https://schema.org/Ebook",
      "potentialAction": {
        "@type": "ReadAction",
        "target":
        {
          "@type": "EntryPoint",
          "urlTemplate": "",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform"
          ]
        },
        "expectsAcceptanceOf": {
          "@type": "Offer",
          "Price": "free"
        }
      }
    }
  ]
};

exports.parse = function (json) {
  var url = JSON.parse(json).metadata.formaturi[0];
  finalJson.author.name = JSON.parse(json).metadata.autor;
  finalJson.id = url;
  finalJson.sameAs = url;
  finalJson.workExample[0].potentialAction.target.urlTemplate = url;
  return finalJson;
};