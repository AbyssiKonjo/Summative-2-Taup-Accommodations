/* jshint esversion: 6 */

const properties = [{
    id: 1,
    name: "Beach Hotel",
    location: "Taupō",
    longitude: 178.0176,
    latitude: -38.6623,
    accommodationType: 'Hotel',
    minPeople: 1,
    maxPeople: 2,
    minStay: 1,
    maxStay: 5,
    pricePerNight: 157,
    bedrooms: 1,
    bathrooms: 1,
    image: "../images/",
    description: `Welcome to `,
    mealOptions: [{
        type: 'None',
        price: 0
      },
      {
        type: 'Breakfast',
        price: 30
      },
      {
        type: 'Lunch',
        price: 50
      },
      {
        type: 'Dinner',
        price: 70
      }
    ]
  },
  {
    id: 2,
    name: "Mary's Hostel Owaisis",
    location: "Taupō",
    longitude: 178.0176,
    latitude: -38.6623,
    accommodationType: 'Hostel',
    minPeople: 1,
    maxPeople: 1,
    minStay: 1,
    maxStay: 10,
    pricePerNight: 30,
    bedrooms: 1,
    bathrooms: 1,
    image: "../images/",
    description: `Welcome to `,
    mealOptions: [{
        type: 'None',
        price: 0
      },
      {
        type: 'Breakfast',
        price: 30
      },
      {
        type: 'Lunch',
        price: 50
      },
      {
        type: 'Dinner',
        price: 70
      }
    ]
  },
  {
    id: 3,
    name: "Zangers Loft",
    location: "Taupō",
    longitude: 178.0176,
    latitude: -38.6623,
    accommodationType: 'Motel',
    minPeople: 2,
    maxPeople: 4,
    minStay: 3,
    maxStay: 10,
    pricePerNight: 90,
    bedrooms: 3,
    bathrooms: 2,
    image: "../images/",
    description: `Welcome to `,
    mealOptions: [{
        type: 'None',
        price: 0
      },
      {
        type: 'Breakfast',
        price: 30
      },
      {
        type: 'Lunch',
        price: 50
      },
      {
        type: 'Dinner',
        price: 70
      }
    ]
  },
  {
    id: 4,
    name: "Ambers Retreat",
    location: "Taupō",
    longitude: 178.0176,
    latitude: -38.6623,
    accommodationType: 'House',
    minPeople: 1,
    maxPeople: 4,
    minStay: 2,
    maxStay: 15,
    pricePerNight: 240,
    bedrooms: 4,
    bathrooms: 3,
    image: "../images/",
    description: `Welcome to `,
    mealOptions: [{
      type: 'None',
      description: 'Kitchen available for use'
    }]
  }
];

$(document).ready(function () {
  // Fullpage Init:
  new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    controlArrows: false,
    // fixedElements: "#fixedNav",
  });

  // Prevent scroll of sections and slides:
  fullpage_api.setAllowScrolling(false);

  //  Function to move to the specified section
  function moveToSection(number) {
    fullpage_api.silentMoveTo(number); // allows you to move sections or "jump"
  }

  /** LANDING & SEARCH PAGE **/
  $('#goToHome').click(function () {
    moveToSection(1);
  });


  $('#goToHome').click(function () {
    fullpage_api.moveTo(1, 0);
  });

  $('#goToSlide2').click(function () {
    fullpage_api.moveTo(1, 1);
  });

  // Accommodation Results
  $('#goToAccommodations').click(function () {
    moveToSection(2);
  });

  $('#goToSection3').click(function () {
    moveToSection(3);
  });




  // DatePickers:
  $("#startDate").datepicker({
    dateFormat: "dd/mm/yy"
  });
  $("#endDate").datepicker({
    dateFormat: "dd/mm/yy"
  });

  // Search Button Click:
  $("#searchBtn").click(function (e) {
    e.preventDefault();
    if (validateFilters()) {
      fullpage_api.moveTo(1, 1);
      filterAndDisplayProperties();
    }
  });

  function calculateDays() {
    const startDate = $("#startDate").datepicker("getDate");
    const endDate = $("#endDate").datepicker("getDate");

    if (startDate && endDate) {
      // calculate the difference:
      const timeDiff = Math.abs(endDate.getTime() - startDate.getTime()); // postive number
      // convert to days:
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
    } else {
      return 0;
    }
  }
});