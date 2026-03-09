module.exports = {
    name: "Ambrose Building Group",
    email: "ambrosebuildinggroup@gmail.com",
    phoneForTel: "0401218243",
    phoneFormatted: "0401 218 243",
    address: {
        lineOne: "14A, 21 Cook Road",
        lineTwo: "",
        city: "Mitcham",
        state: "Victoria",
        zip: "3132",
        mapLink: "https://www.google.com/maps/place/Ambrose+Building+Group+Pty+Ltd/@-37.7952847,144.8709663,10z/data=!3m1!4b1!4m6!3m5!1s0x2138ffaa2693afa1:0x6aeaed76118910e7!8m2!3d-37.7957439!4d145.2006126!16s%2Fg%2F11ydwh3tgr?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D",
    },
    socials: {
        instagram: "https://www.instagram.com/ambrose_building_group/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://ambrose-buildinggroup.com.au",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
