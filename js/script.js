/* jshint esversion: 6 */

const properties = [{
    id: 1,
    name: "Beach Hotel",
    location: "Taupō",
    longitude: 176.0781,
    latitude: -38.6869,
    accommodationType: 'Hotel',
    minPeople: 1,
    maxPeople: 2,
    minStay: 1,
    maxStay: 5,
    pricePerNight: "$157",
    bedrooms: 1,
    bathrooms: 1,
    image: "images/beach-house.webp",
    description: `Welcome to Beach Hotel, your perfect getaway located in the beautiful town of Taupō, New Zealand. Enjoy stunning lake views and relax in our comfortable and well-appointed accommodations. Our hotel offers easy access to local attractions and outdoor activities, making it an ideal choice for couples seeking a serene and romantic escape.`,
    mealOptions: [{
        description: 'Meal option selections available upon booking.',
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
    ],
  },
  {
    id: 2,
    name: "Mary's Hostel Owaisis",
    location: "Taupō",
    longitude: 176.0752,
    latitude: -38.6848,
    accommodationType: 'Hostel',
    minPeople: 1,
    maxPeople: 1,
    minStay: 1,
    maxStay: 10,
    pricePerNight: "$30",
    bedrooms: 1,
    bathrooms: 1,
    image: "images/marys-hostel.webp",
    description: `Welcome to Mary's Hostel Oasis, your budget-friendly haven located near the stunning Lake Taupō, New Zealand. Our cozy hostel offers a comfortable and social environment for solo travelers. Enjoy easy access to local attractions, vibrant nightlife, and a variety of outdoor activities. Whether you're here for adventure or relaxation, Mary's Hostel Oasis is the perfect base for your stay in Taupō.`,
    mealOptions: [{
      description: 'Meal option selections available upon booking.',
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
  ],
  },
  {
    id: 3,
    name: "Zangers Loft",
    location: "Taupō",
    longitude: 176.0800,
    latitude: -38.6875,
    accommodationType: 'Motel',
    minPeople: 2,
    maxPeople: 4,
    minStay: 3,
    maxStay: 10,
    pricePerNight: "$90",
    bedrooms: 3,
    bathrooms: 2,
    image: "images/zangers-loft.webp",
    description: `Welcome to Zangers Loft, a charming and spacious motel located near the picturesque Lake Taupō, New Zealand. Our motel is perfect for families or small groups seeking a comfortable and affordable stay. With three bedrooms and two bathrooms, Zangers Loft offers ample space and modern amenities. Enjoy easy access to local attractions, water activities, and the natural beauty of Taupō during your stay.`,
    mealOptions: [{
      description: 'Meal option selections available upon booking.',
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
  ],
  },
  {
    id: 4,
    name: "Ambers Retreat",
    location: "Taupō",
    longitude: 176.0835,
    latitude: -38.6882,
    accommodationType: 'House',
    minPeople: 1,
    maxPeople: 4,
    minStay: 2,
    maxStay: 15,
    pricePerNight: "$240",
    bedrooms: 4,
    bathrooms: 3,
    image: "images/ambers-retreat.webp",
    description: `Welcome to Ambers Retreat, a luxurious house situated near the beautiful Lake Taupō, New Zealand. This spacious and elegant retreat is perfect for families or small groups seeking a premium getaway. With four bedrooms and three bathrooms, Ambers Retreat offers plenty of space and top-notch amenities. Enjoy breathtaking lake views, easy access to local attractions, and a serene environment during your stay at Ambers Retreat.`,
    mealOptions: [{
      type: 'None',
      price: 0,
      description: 'Kitchen available for use'
    }]
  },
  {
    id: 5,
    name: "Mountain Lodge",
    location: "Taupō",
    longitude: 176.1234,
    latitude: -38.6900,
    accommodationType: "Hotel",
    minPeople: 1,
    maxPeople: 2,
    minStay: 1,
    maxStay: 5,
    pricePerNight: "$157",
    bedrooms: 1,
    bathrooms: 1,
    image: "images/beach-house.webp",
    description: "Experience the cozy charm of Mountain Lodge, nestled in the picturesque town of Taupō, New Zealand. Our hotel provides a warm and inviting atmosphere with breathtaking views of the surrounding mountains. Perfect for a relaxing retreat or a romantic getaway, with easy access to outdoor adventures.",
    mealOptions: [{
      description: 'Meal option selections available upon booking.',
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
  ],
  },
  {
    id: 6,
    name: "Mary's Hostel Owaisis",
    location: "Taupō",
    longitude: 176.0752,
    latitude: -38.6848,
    accommodationType: 'Hostel',
    minPeople: 1,
    maxPeople: 1,
    minStay: 1,
    maxStay: 10,
    pricePerNight: "$30",
    bedrooms: 1,
    bathrooms: 1,
    image: "images/marys-hostel.webp",
    description: `Welcome to Mary's Hostel Oasis, your budget-friendly haven located near the stunning Lake Taupō, New Zealand. Our cozy hostel offers a comfortable and social environment for solo travelers. Enjoy easy access to local attractions, vibrant nightlife, and a variety of outdoor activities. Whether you're here for adventure or relaxation, Mary's Hostel Oasis is the perfect base for your stay in Taupō.`,
    mealOptions: [{
      description: 'Meal option selections available upon booking.',
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
  ],
  },
  {
    id: 7,
    name: "Zangers Loft",
    location: "Taupō",
    longitude: 176.0800,
    latitude: -38.6875,
    accommodationType: 'Motel',
    minPeople: 2,
    maxPeople: 4,
    minStay: 3,
    maxStay: 10,
    pricePerNight: "$90",
    bedrooms: 3,
    bathrooms: 2,
    image: "images/zangers-loft.webp",
    description: `Welcome to Zangers Loft, a charming and spacious motel located near the picturesque Lake Taupō, New Zealand. Our motel is perfect for families or small groups seeking a comfortable and affordable stay. With three bedrooms and two bathrooms, Zangers Loft offers ample space and modern amenities. Enjoy easy access to local attractions, water activities, and the natural beauty of Taupō during your stay.`,
    mealOptions: [{
      description: 'Meal option selections available upon booking.',
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
  ],
  },
  {
    id: 8,
    name: "Ambers Retreat",
    location: "Taupō",
    longitude: 176.0835,
    latitude: -38.6882,
    accommodationType: 'House',
    minPeople: 1,
    maxPeople: 4,
    minStay: 2,
    maxStay: 15,
    pricePerNight: "$240",
    bedrooms: 4,
    bathrooms: 3,
    image: "images/ambers-retreat.webp",
    description: `Welcome to Ambers Retreat, a luxurious house situated near the beautiful Lake Taupō, New Zealand. This spacious and elegant retreat is perfect for families or small groups seeking a premium getaway. With four bedrooms and three bathrooms, Ambers Retreat offers plenty of space and top-notch amenities. Enjoy breathtaking lake views, easy access to local attractions, and a serene environment during your stay at Ambers Retreat.`,
    mealOptions: [{
      type: 'None',
      price: 0,
      description: 'Kitchen available for use'
    }]
  },
  {
    id: 9,
    name: "Beach Hotel",
    location: "Taupō",
    longitude: 176.0781,
    latitude: -38.6869,
    accommodationType: 'Hotel',
    minPeople: 1,
    maxPeople: 2,
    minStay: 1,
    maxStay: 5,
    pricePerNight: "$157",
    bedrooms: 1,
    bathrooms: 1,
    image: "images/beach-house.webp",
    description: `Welcome to Beach Hotel, your perfect getaway located in the beautiful town of Taupō, New Zealand. Enjoy stunning lake views and relax in our comfortable and well-appointed accommodations. Our hotel offers easy access to local attractions and outdoor activities, making it an ideal choice for couples seeking a serene and romantic escape.`,
    mealOptions: [{
        description: 'Meal option selections available upon booking.',
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
    ],
  },
  {
    id: 10,
    name: "Mary's Hostel Owaisis",
    location: "Taupō",
    longitude: 176.0752,
    latitude: -38.6848,
    accommodationType: 'Hostel',
    minPeople: 1,
    maxPeople: 1,
    minStay: 1,
    maxStay: 10,
    pricePerNight: "$30",
    bedrooms: 1,
    bathrooms: 1,
    image: "images/marys-hostel.webp",
    description: `Welcome to Mary's Hostel Oasis, your budget-friendly haven located near the stunning Lake Taupō, New Zealand. Our cozy hostel offers a comfortable and social environment for solo travelers. Enjoy easy access to local attractions, vibrant nightlife, and a variety of outdoor activities. Whether you're here for adventure or relaxation, Mary's Hostel Oasis is the perfect base for your stay in Taupō.`,
    mealOptions: [{
      description: 'Meal option selections available upon booking.',
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
  ],
  },
  {
    id: 11,
    name: "Zangers Loft",
    location: "Taupō",
    longitude: 176.0800,
    latitude: -38.6875,
    accommodationType: 'Motel',
    minPeople: 2,
    maxPeople: 4,
    minStay: 3,
    maxStay: 10,
    pricePerNight: "$90",
    bedrooms: 3,
    bathrooms: 2,
    image: "images/zangers-loft.webp",
    description: `Welcome to Zangers Loft, a charming and spacious motel located near the picturesque Lake Taupō, New Zealand. Our motel is perfect for families or small groups seeking a comfortable and affordable stay. With three bedrooms and two bathrooms, Zangers Loft offers ample space and modern amenities. Enjoy easy access to local attractions, water activities, and the natural beauty of Taupō during your stay.`,
    mealOptions: [{
      description: 'Meal option selections available upon booking.',
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
  ],
  },
  {
    id: 12,
    name: "Ambers Retreat",
    location: "Taupō",
    longitude: 176.0835,
    latitude: -38.6882,
    accommodationType: 'House',
    minPeople: 1,
    maxPeople: 4,
    minStay: 2,
    maxStay: 15,
    pricePerNight: "$240",
    bedrooms: 4,
    bathrooms: 3,
    image: "images/ambers-retreat.webp",
    description: `Welcome to Ambers Retreat, a luxurious house situated near the beautiful Lake Taupō, New Zealand. This spacious and elegant retreat is perfect for families or small groups seeking a premium getaway. With four bedrooms and three bathrooms, Ambers Retreat offers plenty of space and top-notch amenities. Enjoy breathtaking lake views, easy access to local attractions, and a serene environment during your stay at Ambers Retreat.`,
    mealOptions: [{
      type: 'None',
      price: 0,
      description: 'Kitchen available for use'
    }]
  },
  {
    id: 13,
    name: "Beach Hotel",
    location: "Taupō",
    longitude: 176.0781,
    latitude: -38.6869,
    accommodationType: 'Hotel',
    minPeople: 1,
    maxPeople: 2,
    minStay: 1,
    maxStay: 5,
    pricePerNight: "$157",
    bedrooms: 1,
    bathrooms: 1,
    image: "images/beach-house.webp",
    description: `Welcome to Beach Hotel, your perfect getaway located in the beautiful town of Taupō, New Zealand. Enjoy stunning lake views and relax in our comfortable and well-appointed accommodations. Our hotel offers easy access to local attractions and outdoor activities, making it an ideal choice for couples seeking a serene and romantic escape.`,
    mealOptions: [{
        description: 'Meal option selections available upon booking.',
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
    ],
  },
  {
    id: 14,
    name: "Mary's Hostel Owaisis",
    location: "Taupō",
    longitude: 176.0752,
    latitude: -38.6848,
    accommodationType: 'Hostel',
    minPeople: 1,
    maxPeople: 1,
    minStay: 1,
    maxStay: 10,
    pricePerNight: "$30",
    bedrooms: 1,
    bathrooms: 1,
    image: "images/marys-hostel.webp",
    description: `Welcome to Mary's Hostel Oasis, your budget-friendly haven located near the stunning Lake Taupō, New Zealand. Our cozy hostel offers a comfortable and social environment for solo travelers. Enjoy easy access to local attractions, vibrant nightlife, and a variety of outdoor activities. Whether you're here for adventure or relaxation, Mary's Hostel Oasis is the perfect base for your stay in Taupō.`,
    mealOptions: [{
      description: 'Meal option selections available upon booking.',
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
  ],
  },
  {
    id: 15,
    name: "Zangers Loft",
    location: "Taupō",
    longitude: 176.0800,
    latitude: -38.6875,
    accommodationType: 'Motel',
    minPeople: 2,
    maxPeople: 4,
    minStay: 3,
    maxStay: 10,
    pricePerNight: "$90",
    bedrooms: 3,
    bathrooms: 2,
    image: "images/zangers-loft.webp",
    description: `Welcome to Zangers Loft, a charming and spacious motel located near the picturesque Lake Taupō, New Zealand. Our motel is perfect for families or small groups seeking a comfortable and affordable stay. With three bedrooms and two bathrooms, Zangers Loft offers ample space and modern amenities. Enjoy easy access to local attractions, water activities, and the natural beauty of Taupō during your stay.`,
    mealOptions: [{
      description: 'Meal option selections available upon booking.',
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
  ],
  },
  {
    id: 16,
    name: "Ambers Retreat",
    location: "Taupō",
    longitude: 176.0835,
    latitude: -38.6882,
    accommodationType: 'House',
    minPeople: 1,
    maxPeople: 4,
    minStay: 2,
    maxStay: 15,
    pricePerNight: "$240",
    bedrooms: 4,
    bathrooms: 3,
    image: "images/ambers-retreat.webp",
    description: `Welcome to Ambers Retreat, a luxurious house situated near the beautiful Lake Taupō, New Zealand. This spacious and elegant retreat is perfect for families or small groups seeking a premium getaway. With four bedrooms and three bathrooms, Ambers Retreat offers plenty of space and top-notch amenities. Enjoy breathtaking lake views, easy access to local attractions, and a serene environment during your stay at Ambers Retreat.`,
    mealOptions: [{
      type: 'None',
      price: 0,
      description: 'Kitchen available for use'
    }]
  },
];

$(document).ready(function () {
  // Fullpage Init:
  new fullpage('#fullpage', {
    licenseKey: 'gplv3-license',
    controlArrows: false,
  });

  // MapBox Init:
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA';

  function initaliseMap(longitude, latitude) {
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 13
    });
    map.on('load', function () {
      map.resize();
    });

    // Markers for the specified coordinates
    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  }

  // Prevent scroll of sections and slides:
  fullpage_api.setAllowScrolling(false);

  // Swiper Init:
  let swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //NAVIGATION
  $('#goToHome').click(function () {
    fullpage_api.moveTo(1, 0);
  });

  $('#goToSearch').click(function () {
    fullpage_api.moveTo(1, 1);
  });

  $('#goToAccommodations').click(function () {
    fullpage_api.silentMoveTo(1, 2);
  });

  // Populate Accommodations Options/Filtering:
  function populateAccommodationOptions() {
    const accommodations = Array.from(new Set(properties.map(property => property.accommodationType)));
    accommodations.sort();
    const accommodationSelect = $('#type');
    accommodationSelect.empty();
    accommodationSelect.append('<option value="any">Any</option>');
    accommodations.forEach(accommodationType => {
      accommodationSelect.append(`<option value="${accommodationType}">${accommodationType}</option>`);
    });
  }

  // Call the function:
  populateAccommodationOptions();

  // Validate Filters/Forms
  function validateFilters() {
    let isValid = true;
    let errorMessage = "";

    if ($('#guests').val() === "#") { // Check if the value is '#'
      isValid = false;
      errorMessage += "Please select number of guests.<br>";
    }
    if ($('#startDate').val() === "") {
      isValid = false;
      errorMessage += "Please select a start date.<br>";
    }
    if ($('#endDate').val() === "") {
      isValid = false;
      errorMessage += "Please select an end date.<br>";
    }
    if (!isValid) {
      $('#error-message').html(errorMessage).show();
    } else {
      $('#error-message').hide();
    }

    return isValid;
  }

  // DatePickers:
  $("#startDate").datepicker({
    dateFormat: "dd/mm/yy"
  });
  $("#endDate").datepicker({
    dateFormat: "dd/mm/yy"
  });

  // Search Button Click:
  $("#searchButton").click(function (e) {
    e.preventDefault();
    if (validateFilters()) {
      fullpage_api.moveTo(1, 2);
      filterAndDisplayProperties();
    } else {
      console.log('Filters not valid');
    }
  });

  // Filters & Display:
  function filterAndDisplayProperties() {
    const type = $('#type').val();
    const guests = parseInt($('#guests').val(), 10) || 0;
    const bedrooms = parseInt($('#bedrooms').val(), 10) || 0;
    const bathrooms = parseInt($('#bathrooms').val(), 10) || 0;
    const minPrice = parseInt($('#minPrice').val().replace('$', ''), 10) || 0;
    const maxPrice = parseInt($('#maxPrice').val().replace('$', ''), 10) || Infinity;
    const diffDays = calculateDays();

    const filteredProperties = properties.filter(property => {
      const pricePerNight = parseInt(property.pricePerNight.replace('$', ''), 10);

      return (type === 'any' || property.accommodationType === type) &&
        (property.minPeople <= guests && property.maxPeople >= guests) &&
        (property.bedrooms >= bedrooms) &&
        (property.bathrooms >= bathrooms) &&
        (pricePerNight >= minPrice) &&
        (pricePerNight <= maxPrice) &&
        (property.minStay <= diffDays) &&
        (property.maxStay >= diffDays);
    });

    displayProperties(filteredProperties);
  }

  // Start & End Date:
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

  // PROPERTIES
  displayProperties(properties);

  function displayProperties(properties) {

    const propertiesPerPageSmall = 1;
    const propertiesPerPageMedium = 2;
    const propertiesPerPageLarge = 3;

    function getPropertiesPerPage() {
      if (window.matchMedia('(max-width: 600px)').matches) {
        return propertiesPerPageSmall;
      } else if (window.matchMedia('(max-width: 1024px)').matches) {
        return propertiesPerPageMedium;
      } else {
        return propertiesPerPageLarge;
      }
    }

    let propertiesPerPage = getPropertiesPerPage();

    const swiperWrapper = $('.swiper-wrapper');
    swiperWrapper.empty();

    for (let i = 0; i < properties.length; i += propertiesPerPage) {
      const slide = $('<div class="swiper-slide"></div>');

      for (let j = i; j < i + propertiesPerPage && j < properties.length; j++) {
        const property = properties[j];
        // CARD
        const propertyElement = `
                <div class="property">
                    <img src="${property.image}" alt="${property.name}">
                    <div class="property-details">
                        <h3>${property.name}</h3>
                        <p>${property.accommodationType}</p>
                        <h4>${property.pricePerNight}</h4>
                        <p>Min Stay: ${property.minStay} nights</p>
                        <p>Max Stay: ${property.maxStay} nights</p>
                        <div class="property-amenities">
                            <p>${property.bedrooms} <i class="fa-solid fa-bed"></i></p>
                            <p>${property.bathrooms} <i class="fa-solid fa-bath"></i></p>
                        </div>
                        <button class="read-more" data-id="${property.id}">Read More</button>
                    </div>
                </div>
            `;
        slide.append(propertyElement);
      }
      swiperWrapper.append(slide);
    }

    // Destroy the swiper instance
    swiper.destroy(true, true);
    // Initialize a new one
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      },
    });

    // Rebuild Fullpage to see the new slides
    fullpage_api.reBuild();

    // READ MORE BUTTON
    $(".read-more").click(function () {
      const propertyId = $(this).data('id');
      populateSelectedModal(propertyId);
      fullpage_api.moveTo(1, 3);
    });
  }

  // closing modals
  function closeModal() {
    let close = document.getElementById('close-modal');

    close.addEventListener('click', function () {
      slideModalHtml.close();
      document.body.classList.remove('modal-open');
      const scrollPosition = slideModalHtml.dataset.scrollPosition || 0;
      window.scroll(0, scrollPosition);
    });
  }

  // MODAL
  function populateSelectedModal(selectedId) {
    const outputSlideModal = $("#selectedCardModal");

    let mealDescription = properties[0].mealOptions[0].description;

    const slideModalHtml = `
      <div class="selected-modal">
        <button class="close-modal"><i class="fa-solid fa-xmark"></i></button>
        <img src="${properties[selectedId - 1].image}" alt="${properties[selectedId - 1].name}>

        <div class="modal-contents">
          <div class="content-container">

            <div class="column1">
              <h3>${properties[selectedId - 1].name}</h3>
              <p>${properties[selectedId - 1].description}</p>
              <h4>Meal Options</h4>
              <p>${mealDescription}</p>

              <div class="property-amenities">
                <p>${properties[selectedId - 1].bedrooms} <i class="fa-solid fa-bed"></i></p>
                <p>${properties[selectedId - 1].bathrooms} <i class="fa-solid fa-bath"></i></p>
              </div>
            </div>

            <div class="column2">
              <div class="map" id="map"></div>

              <div class="price-and-button">
                <h3>${properties[selectedId - 1].pricePerNight}</h3>
                <button class="book-now" data-id="${selectedId}">Book Now</button>
              </div>
            </div>

          </div>
        </div>
    `;
    
    const longitude = properties[selectedId - 1].longitude;
    const latitude = properties[selectedId - 1].latitude;

    outputSlideModal.empty();
    outputSlideModal.append(slideModalHtml);
    initaliseMap(longitude, latitude);

    // Destroy the swiper instance
    swiper.destroy(true, true);
    // Initialize a new one
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      },
    });

    // Rebuild Fullpage to see the new slides
    fullpage_api.reBuild();

    // Close modal event listener
    $(".close-modal").click(function () {
      fullpage_api.moveTo(1, 2); // Move to the accommodations slide
    });

    $(".book-now").click(function () {
      const selectedTotal = $(this).data('id'); 
      populateTotal(properties[selectedTotal - 1]); 
      fullpage_api.moveTo(1, 4);
    });

  }

  // Total
  function populateTotal(property) {
    const totalOutput = $("#total");
  
    const propertyName = property.name;
    const propertyPricePerNight = parseInt(property.pricePerNight.replace('$', ''), 10);
    const diffDays = calculateDays();
  
    const defaultMealPrice = property.mealOptions.length > 0 ? property.mealOptions[0].price : 0;
    const totalPropertyPrice = propertyPricePerNight * diffDays;
    const totalMealPrice = defaultMealPrice * diffDays;
    const totalPrice = totalPropertyPrice + totalMealPrice;
  
    let mealButtonsHtml = '';
    property.mealOptions.forEach((option, index) => {
      const isSelected = index === 0 ? 'selected-meal' : ''; // Set the first button as selected
      mealButtonsHtml += `<button class="meal-option ${isSelected}" data-type="${option.type}" data-price="${option.price}">${option.type}</button>`;
    });
  
    const slideTotalHtml = `
      <div class="total-container">
        <div class="name-and-price">
          <h3>${propertyName}</h3>
          <h3>${property.pricePerNight}</h3>
        </div>
        <ul>
          <li>${$('#guests').val()} Guest</li>
          <li>${diffDays} Nights stay + selected meal</li>
        </ul>
  
        <div class="name-and-price">
          <h3>Meal Options</h3>
          <h3 id="mealPriceDisplay">$${defaultMealPrice}</h3>
        </div>
  
        <div class="meal-options">
          ${mealButtonsHtml}
        </div>
  
        <h4>Total Price</h4>
        <p id="importantMessage">*Note that the total price is multiplied by Accommodation + Meal x Nights staying</p>
        <div class="total-price">
          <h3>Total</h3>
          <h3 id="totalPriceDisplay">$${totalPrice}</h3>
        </div>
        <button id="complete">Complete Booking</button>
      </div>
    `;
  
    totalOutput.empty();
    totalOutput.append(slideTotalHtml);
  
    // Event listeners to meal buttons
    $(".meal-option").click(function() {
      const selectedMealPrice = parseInt($(this).data('price'), 10);
      const updatedTotalMealPrice = selectedMealPrice * diffDays;
      const updatedTotalPrice = totalPropertyPrice + updatedTotalMealPrice;
  
      // Update meal price and total price
      $("#mealPriceDisplay").text(`$${selectedMealPrice}`);
      $("#totalPriceDisplay").text(`$${updatedTotalPrice}`);
  
      // Remove 'selected-meal' class from all buttons
      $(".meal-option").removeClass("selected-meal");
      // Add 'selected-meal' class to the clicked button
      $(this).addClass("selected-meal");
    });
  }
});