module.exports = {
    name: "Tomic Painting & Decorating",
    email: "info@tomicpainting.com",
    phoneForTel: "0449200343",
    phoneFormatted: "0449 200 343",
    address: {
        lineOne: "",
        lineTwo: "",
        city: "Melbourne",
        state: "Victoria",
        zip: "3000",
        mapLink: "https://www.google.com/maps/place/Tomic+Painting+Decorating/@-38.0037631,144.3937313,9z/data=!3m1!4b1!4m6!3m5!1s0x6ad61b1b35b1e267:0x27eb1e9c0207bbb5!8m2!3d-38.005604!4d145.0531353!16s%2Fg%2F11nnnr4y5b?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D",
    },
    socials: {
        facebook: "https://www.facebook.com/tomicpainting/",
        instagram: "https://www.instagram.com/tomicpainting_decorating",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://tomicpainting.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
