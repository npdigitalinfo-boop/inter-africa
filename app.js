const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const toast = $('.toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// -------------------------------------------------------------
// Inter Africa Bus Schedules Database
// -------------------------------------------------------------
const schedulesDatabase = {
  'Harare-Bulawayo': [
    {
      name: 'Morning Express',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-204',
      depTime: '06:30 AM',
      arrTime: '12:15 PM',
      duration: '5h 45m',
      direct: true,
      price: 15,
      seats: 14,
      status: 'delayed',
      delayMins: 20,
      delayReason: 'Single-lane road resurfacing between Gweru and Kwekwe',
      estDepTime: '06:50 AM',
      estArrTime: '12:35 PM',
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Tracking']
    },
    {
      name: 'Mid-Morning Starlink Cruiser',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-318',
      depTime: '09:30 AM',
      arrTime: '03:30 PM',
      duration: '6h 00m',
      direct: true,
      price: 18,
      seats: 9,
      status: 'ontime',
      perks: ['Starlink Wi-Fi', 'USB-C Charging', 'A/C', 'Movie Screen']
    },
    {
      name: 'Afternoon Executive',
      type: 'Executive',
      badgeClass: 'express',
      fleet: 'IA-412',
      depTime: '01:30 PM',
      arrTime: '07:15 PM',
      duration: '5h 45m',
      direct: true,
      price: 20,
      seats: 4,
      status: 'delayed',
      delayMins: 15,
      delayReason: 'Heavy traffic volume departing Harare showground area',
      estDepTime: '01:45 PM',
      estArrTime: '07:30 PM',
      perks: ['Starlink Wi-Fi', 'Fast Charging', 'Reclining Seats', 'Refreshment']
    },
    {
      name: 'Sunset Shuttle',
      type: 'Standard Coach',
      badgeClass: '',
      fleet: 'IA-109',
      depTime: '05:00 PM',
      arrTime: '10:45 PM',
      duration: '5h 45m',
      direct: true,
      price: 15,
      seats: 19,
      status: 'ontime',
      perks: ['Vehicle Tracking', 'USB Charging', 'A/C']
    }
  ],
  'Bulawayo-Harare': [
    {
      name: 'Early Bird Express',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-205',
      depTime: '06:00 AM',
      arrTime: '11:45 AM',
      duration: '5h 45m',
      direct: true,
      price: 15,
      seats: 11,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Tracking']
    },
    {
      name: 'Midday Cruiser',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-319',
      depTime: '10:00 AM',
      arrTime: '04:00 PM',
      duration: '6h 00m',
      direct: true,
      price: 18,
      seats: 15,
      perks: ['Starlink Wi-Fi', 'USB-C', 'A/C', 'Entertainment']
    },
    {
      name: 'Afternoon Executive',
      type: 'Executive',
      badgeClass: 'express',
      fleet: 'IA-415',
      depTime: '02:00 PM',
      arrTime: '07:45 PM',
      duration: '5h 45m',
      direct: true,
      price: 20,
      seats: 6,
      perks: ['Starlink Wi-Fi', 'Premium Seats', 'Refreshment', 'USB-C']
    }
  ],
  'Harare-Chiredzi': [
    {
      name: 'Lowveld Morning Express',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-255',
      depTime: '06:00 AM',
      arrTime: '01:30 PM',
      duration: '7h 30m',
      direct: false,
      price: 20,
      seats: 12,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Luggage 30kg']
    },
    {
      name: 'Chiredzi Afternoon Cruiser',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-302',
      depTime: '11:30 AM',
      arrTime: '07:00 PM',
      duration: '7h 30m',
      direct: false,
      price: 20,
      seats: 8,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Tracking']
    }
  ],
  'Chiredzi-Harare': [
    {
      name: 'Capital City Express',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-256',
      depTime: '05:30 AM',
      arrTime: '01:00 PM',
      duration: '7h 30m',
      direct: false,
      price: 20,
      seats: 15,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Luggage 30kg']
    },
    {
      name: 'Afternoon Return Coach',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-303',
      depTime: '12:00 PM',
      arrTime: '07:30 PM',
      duration: '7h 30m',
      direct: false,
      price: 20,
      seats: 5,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C']
    }
  ],
  'Harare-Mutare': [
    {
      name: 'Eastern Highlands Flyer',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-188',
      depTime: '06:30 AM',
      arrTime: '10:30 AM',
      duration: '4h 00m',
      direct: true,
      price: 12,
      seats: 22,
      status: 'advisory',
      advisoryNote: 'Morning mist around Christmas Pass with reduced visibility. Drivers operating at regulated safe speeds.',
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Tracking']
    },
    {
      name: 'Manicaland Midday',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-210',
      depTime: '11:00 AM',
      arrTime: '03:15 PM',
      duration: '4h 15m',
      direct: true,
      price: 12,
      seats: 14,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C']
    },
    {
      name: 'Mutare Sunset Express',
      type: 'Executive',
      badgeClass: 'express',
      fleet: 'IA-440',
      depTime: '03:30 PM',
      arrTime: '07:30 PM',
      duration: '4h 00m',
      direct: true,
      price: 15,
      seats: 5,
      perks: ['Starlink Wi-Fi', 'Fast USB-C', 'A/C', 'Reclining Seats']
    }
  ],
  'Mutare-Harare': [
    {
      name: 'Manica Sunrise Coach',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-189',
      depTime: '06:00 AM',
      arrTime: '10:00 AM',
      duration: '4h 00m',
      direct: true,
      price: 12,
      seats: 18,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C']
    },
    {
      name: 'Capital Express',
      type: 'Executive',
      badgeClass: 'express',
      fleet: 'IA-441',
      depTime: '01:30 PM',
      arrTime: '05:30 PM',
      duration: '4h 00m',
      price: 15,
      seats: 7,
      perks: ['Starlink Wi-Fi', 'Fast USB-C', 'A/C', 'Reclining Seats']
    }
  ],
  'Harare-Masvingo': [
    {
      name: 'Great Zimbabwe Express',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-142',
      depTime: '07:00 AM',
      arrTime: '11:45 AM',
      duration: '4h 45m',
      direct: true,
      price: 12,
      seats: 16,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Tracking']
    },
    {
      name: 'Afternoon Pioneer',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-280',
      depTime: '01:00 PM',
      arrTime: '05:45 PM',
      duration: '4h 45m',
      direct: true,
      price: 12,
      seats: 8,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C']
    }
  ],
  'Masvingo-Harare': [
    {
      name: 'Morning Pioneer',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-143',
      depTime: '06:30 AM',
      arrTime: '11:15 AM',
      duration: '4h 45m',
      direct: true,
      price: 12,
      seats: 19,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C']
    },
    {
      name: 'Capital Shuttle',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-281',
      depTime: '02:00 PM',
      arrTime: '06:45 PM',
      duration: '4h 45m',
      direct: true,
      price: 12,
      seats: 10,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Tracking']
    }
  ],
  'Bulawayo-Masvingo': [
    {
      name: 'Cross-Country Liner',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-165',
      depTime: '07:30 AM',
      arrTime: '12:30 PM',
      duration: '5h 00m',
      direct: true,
      price: 14,
      seats: 15,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Tracking']
    },
    {
      name: 'Sunset Coach',
      type: 'Standard Coach',
      badgeClass: '',
      fleet: 'IA-221',
      depTime: '02:00 PM',
      arrTime: '07:00 PM',
      duration: '5h 00m',
      direct: true,
      price: 14,
      seats: 7,
      perks: ['Vehicle Tracking', 'USB Charging', 'A/C']
    }
  ],
  'Masvingo-Bulawayo': [
    {
      name: 'City of Kings Liner',
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-166',
      depTime: '08:00 AM',
      arrTime: '01:00 PM',
      duration: '5h 00m',
      direct: true,
      price: 14,
      seats: 12,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Tracking']
    }
  ]
};

// Fallback generator for any custom/connecting city pair
function getBusesForRoute(from, to) {
  const key = `${from}-${to}`;
  if (schedulesDatabase[key]) {
    return schedulesDatabase[key];
  }
  return [
    {
      name: `Inter Africa ${from} to ${to} Morning Coach`,
      type: 'Luxury Coach',
      badgeClass: 'luxury',
      fleet: 'IA-212',
      depTime: '07:00 AM',
      arrTime: '01:15 PM',
      duration: '6h 15m',
      direct: true,
      price: 16,
      seats: 12,
      perks: ['Starlink Wi-Fi', 'USB Charging', 'A/C', 'Vehicle Tracking']
    },
    {
      name: `Inter Africa ${from} to ${to} Afternoon Express`,
      type: 'Executive',
      badgeClass: 'express',
      fleet: 'IA-380',
      depTime: '01:30 PM',
      arrTime: '07:45 PM',
      duration: '6h 15m',
      direct: true,
      price: 18,
      seats: 5,
      perks: ['Starlink Wi-Fi', 'Fast USB-C', 'A/C', 'Refreshment']
    }
  ];
}

// -------------------------------------------------------------
// Travel Date initialization
// -------------------------------------------------------------
const travelDateInput = $('#travel-date');
if (travelDateInput) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const minDate = `${year}-${month}-${day}`;
  travelDateInput.min = minDate;
  if (!travelDateInput.value) {
    travelDateInput.value = minDate;
  }
}

// -------------------------------------------------------------
// Search Form Handler
// -------------------------------------------------------------
const fromSelect = $('#from-city');
const toSelect = $('#to-city');
const passengersSelect = $('#passengers-count');
const searchResults = $('#search-results');

function performSearch() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const dateVal = travelDateInput.value;
  const passengers = parseInt(passengersSelect.value, 10) || 1;

  if (!from || !to) {
    showToast('Please select both departure and destination.');
    return;
  }

  if (from === to) {
    searchResults.hidden = false;
    searchResults.innerHTML = `
      <div class="results-error">
        <span>⚠️</span>
        <div>
          <strong>Invalid route selection</strong>
          <p style="margin: 3px 0 0; font-size: 12px;">Departure and destination cannot be the same city (${from}). Please choose a different destination.</p>
        </div>
      </div>
    `;
    searchResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  let formattedDate = dateVal;
  if (dateVal) {
    const parts = dateVal.split('-');
    if (parts.length === 3) {
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      formattedDate = d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    }
  }

  // Check Young Passenger Option
  const isYoungActive = $('#toggle-young-passenger')?.checked || false;
  let youngCount = 0;
  let youngAges = '';
  let youngTravelType = 'accompanied';
  let youngSeating = 'front-cabin';
  let depGuardianName = '';
  let depGuardianPhone = '';
  let arrGuardianName = '';
  let arrGuardianPhone = '';

  if (isYoungActive) {
    youngCount = parseInt($('#young-count')?.value, 10) || 1;
    youngAges = $('#young-ages')?.value.trim() || '8';
    youngTravelType = $('#young-travel-type')?.value || 'accompanied';
    youngSeating = $('#young-seating')?.value || 'front-cabin';
    if (youngTravelType === 'unaccompanied') {
      depGuardianName = $('#dep-guardian-name')?.value.trim() || '';
      depGuardianPhone = $('#dep-guardian-phone')?.value.trim() || '';
      arrGuardianName = $('#arr-guardian-name')?.value.trim() || '';
      arrGuardianPhone = $('#arr-guardian-phone')?.value.trim() || '';
    }
    if (passengers < youngCount) {
      passengers = youngCount;
      passengersSelect.value = String(youngCount);
    }
  }

  // Check Special Care Option
  const isCareActive = $('#toggle-special-care')?.checked || false;
  let careCategory = '';
  let careCategoryLabel = '';
  let careLuggageAid = '';
  let careSeating = '';
  let careCompanion = '';
  let careNotes = '';

  if (isCareActive) {
    careCategory = $('#care-category')?.value || 'elderly';
    const catNames = {
      elderly: 'Senior Citizen (65+)',
      pregnant: 'Expectant Mother',
      wheelchair: 'Wheelchair / Reduced Mobility',
      medical: 'Medical Condition',
      sensory: 'Visual or Hearing Impairment'
    };
    careCategoryLabel = catNames[careCategory] || 'Special Care';
    careLuggageAid = $('#care-luggage-aid')?.value || 'full-assistance';
    careSeating = $('#care-seating')?.value || 'row-1-2';
    careCompanion = $('#care-companion')?.value || 'no';
    careNotes = $('#care-notes')?.value.trim() || '';
  }

  const buses = getBusesForRoute(from, to);

  const cardsHtml = buses.map((bus) => {
    // Pricing calculation
    let totalFare = 0;
    let priceBlockHtml = '';
    const youthPrice = Math.round(bus.price * 0.8); // 20% discount

    if (isYoungActive && youngCount > 0) {
      const adultCount = Math.max(0, passengers - youngCount);
      totalFare = (adultCount * bus.price) + (youngCount * youthPrice);
      priceBlockHtml = `
        <div class="bus-price">
          $${youthPrice} <small style="color:#059669;font-weight:700;">/ child seat (Ages 5–12, -20%)</small>
        </div>
        <span class="bus-total-fare">Total: $${totalFare} (${adultCount ? adultCount + ' adult' + (adultCount > 1 ? 's' : '') + ' + ' : ''}${youngCount} child${youngCount > 1 ? 'ren' : ''})</span>
      `;
    } else {
      totalFare = bus.price * passengers;
      priceBlockHtml = `
        <div class="bus-price">$${bus.price} <small>/ seat</small></div>
        ${passengers > 1 ? `<span class="bus-total-fare">Total: $${totalFare} (${passengers} seats)</span>` : ''}
      `;
    }

    const isFewSeats = bus.seats <= 6;
    const seatsHtml = `<span class="seats-status ${isFewSeats ? 'few' : ''}"><b>●</b> ${bus.seats} seats available</span>`;

    let statusBadgeHtml = '<span class="bus-status-tag status-ontime"><b>●</b> On Schedule</span>';
    let depTimeHtml = `<strong>${bus.depTime}</strong><span>${from} Depot</span>`;
    let arrTimeHtml = `<strong>${bus.arrTime}</strong><span>${to} Depot</span>`;
    let durationHtml = `<span>${bus.direct ? 'Direct' : 'Connecting'}</span>`;
    let delayBannerHtml = '';
    let waDelayNote = '';

    if (bus.status === 'delayed') {
      statusBadgeHtml = `<span class="bus-status-tag status-delayed"><b>▲</b> Delayed (+${bus.delayMins}m)</span>`;
      depTimeHtml = `<strong class="time-original-strikethrough">${bus.depTime}</strong><strong class="time-revised">Est. ${bus.estDepTime}</strong><span>${from} Depot</span>`;
      arrTimeHtml = `<strong class="time-original-strikethrough">${bus.arrTime}</strong><strong class="time-revised">Est. ${bus.estArrTime}</strong><span>${to} Depot</span>`;
      durationHtml = `<span style="color:#d97706;font-weight:700;">+${bus.delayMins}m delay</span>`;
      delayBannerHtml = `
        <div class="bus-delay-banner">
          <span>⚠️</span>
          <div><strong>Service Delay Notice (+${bus.delayMins}m):</strong> ${bus.delayReason}. Real-time satellite tracking is monitoring this coach.</div>
        </div>
      `;
      waDelayNote = ` (Note: I am aware this bus has an estimated departure of ${bus.estDepTime} due to ${bus.delayReason})`;
    } else if (bus.status === 'advisory') {
      statusBadgeHtml = `<span class="bus-status-tag" style="background:#dbeafe;color:#1e40af;"><b>ℹ</b> Caution · Safe Speed</span>`;
      delayBannerHtml = `
        <div class="bus-delay-banner" style="background:#eff6ff;border-color:#dbeafe;color:#1e40af;">
          <span>ℹ️</span>
          <div><strong>Route Advisory:</strong> ${bus.advisoryNote}</div>
        </div>
      `;
    }

    // Care Badges on Bus Cards
    let careBadgesHtml = '';
    if (isYoungActive) {
      careBadgesHtml += `<span class="bus-status-tag tag-young-care"><b>🧒</b> Child Protocol (Ages 5–12): ${youngTravelType === 'unaccompanied' ? 'Unaccompanied Minor' : 'Accompanied'}</span>`;
    }
    if (isCareActive) {
      careBadgesHtml += `<span class="bus-status-tag tag-special-care"><b>♿</b> Special Care: ${careCategoryLabel}</span>`;
    }

    // Care Notes for WhatsApp
    let waCareText = '';
    if (isYoungActive) {
      waCareText += `\n• Child Passenger Care (Ages 5–12): ${youngCount} child(ren) aged [${youngAges}], Travel type: ${youngTravelType === 'unaccompanied' ? 'Unaccompanied Minor (Driver Handover Required)' : 'Traveling with Family'}, Preferred seating: ${youngSeating}`;
      if (youngTravelType === 'unaccompanied') {
        waCareText += `\n  - Departure Handover Guardian: ${depGuardianName || 'To specify'} (${depGuardianPhone || 'N/A'})\n  - Destination Receiving Guardian: ${arrGuardianName || 'To specify'} (${arrGuardianPhone || 'N/A'})`;
      }
    }
    if (isCareActive) {
      waCareText += `\n• Special Care Assistance: ${careCategoryLabel}\n  - Seating: Priority Row 1-2 requested\n  - Luggage: Depot baggage escort requested\n  - Companion: ${careCompanion === 'yes' ? 'Traveling with companion' : 'Independent (Staff assistance needed)'}`;
      if (careNotes) {
        waCareText += `\n  - Passenger Notes: ${careNotes}`;
      }
    }

    const waText = encodeURIComponent(
      `Hello Inter Africa! I would like to book ${passengers} seat(s) on the ${bus.depTime} ${bus.name} (${bus.type}) from ${from} to ${to} on ${formattedDate}.${waDelayNote}${waCareText}\nTotal Fare: $${totalFare}. Please confirm availability and seating.`
    );
    const waUrl = `https://wa.me/263736009688?text=${waText}`;

    return `
      <article class="bus-card">
        <div class="bus-identity">
          <div class="bus-badges">
            <span class="bus-type-badge ${bus.badgeClass}">${bus.type}</span>
            <span class="bus-fleet-no">${bus.fleet}</span>
            ${statusBadgeHtml}
            ${careBadgesHtml}
          </div>
          <h4 class="bus-name">${bus.name}</h4>
          <div class="bus-perks">
            ${bus.perks.map((p) => `<span>${p}</span>`).join('')}
          </div>
          ${delayBannerHtml}
        </div>

        <div class="bus-times-wrap">
          <div class="time-point">
            ${depTimeHtml}
          </div>
          <div class="time-duration">
            <small>${bus.duration}</small>
            <div class="duration-line"></div>
            ${durationHtml}
          </div>
          <div class="time-point" style="text-align: right;">
            ${arrTimeHtml}
          </div>
        </div>

        <div class="bus-action-wrap">
          <div class="bus-price-block">
            ${priceBlockHtml}
          </div>
          ${seatsHtml}
          <a class="button button-accent bus-book-btn" href="${waUrl}" target="_blank" rel="noreferrer" aria-label="Book seat on ${bus.name} via WhatsApp">
            Book seat <span>↗</span>
          </a>
        </div>
      </article>
    `;
  }).join('');

  searchResults.hidden = false;
  searchResults.innerHTML = `
    <div class="results-header">
      <div>
        <h3>${from} <span>→</span> ${to}</h3>
        <span class="results-meta">${formattedDate} · <b>${buses.length} buses scheduled</b> · ${passengers} ${passengers > 1 ? 'passengers' : 'passenger'}</span>
      </div>
      <div style="font: 500 11px 'DM Mono'; color: #6e7784;">
        <span>Rates in USD (ZiG equivalent accepted at depot)</span>
      </div>
    </div>
    <div class="bus-list">
      ${cardsHtml}
    </div>
  `;

  searchResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

$('#trip-form').addEventListener('submit', (event) => {
  event.preventDefault();
  performSearch();
});

// Swap departure and destination
$('.swap').addEventListener('click', () => {
  const fromVal = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = fromVal;
  if (fromSelect.value && toSelect.value && !searchResults.hidden) {
    performSearch();
  }
});

// -------------------------------------------------------------
// Popular Routes Click Handler: prefill & trigger search
// -------------------------------------------------------------
$$('.route-cards .route-card').forEach((card) => {
  card.addEventListener('click', () => {
    $$('.route-cards .route-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const from = card.getAttribute('data-from');
    const to = card.getAttribute('data-to');
    if (from && to) {
      fromSelect.value = from;
      toSelect.value = to;
      performSearch();
    }
  });
});

// -------------------------------------------------------------
// Private Hire Multi-step Form
// -------------------------------------------------------------
const steps = $$('.form-step');
let currentStep = 0;
const progress = $('.form-progress i');
const stepCount = $('#step-count');
const back = $('.back-button');
const next = $('.next-button');
const submit = $('.submit-button');

function setStep(index) {
  currentStep = index;
  steps.forEach((step, i) => step.classList.toggle('active', i === index));
  stepCount.textContent = index + 1;
  progress.style.width = `${(index + 1) * 33.33}%`;
  back.style.visibility = index ? 'visible' : 'hidden';
  next.style.display = index === steps.length - 1 ? 'none' : 'inline-flex';
  submit.style.display = index === steps.length - 1 ? 'inline-flex' : 'none';
}

next.addEventListener('click', () => {
  const fields = $$('input, select, textarea', steps[currentStep]);
  if (fields.some((field) => !field.checkValidity())) {
    fields.find((field) => !field.checkValidity()).reportValidity();
    return;
  }
  setStep(currentStep + 1);
});

back.addEventListener('click', () => setStep(Math.max(0, currentStep - 1)));

// -------------------------------------------------------------
// Return Trip Date Toggle in Private Hire
// -------------------------------------------------------------
const hireTypeRadios = $$('input[name="trip_type"]');
const hireReturnWrap = $('#hire-return-date-wrap');
const hireDateInput = $('#hire-date');
const hireReturnDateInput = $('#hire-return-date');

if (hireDateInput) {
  const todayStr = new Date().toISOString().split('T')[0];
  hireDateInput.min = todayStr;
  hireDateInput.value = todayStr;
}

hireTypeRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (hireReturnWrap) {
      const isReturn = radio.value === 'return';
      hireReturnWrap.style.display = isReturn ? 'block' : 'none';
      if (hireReturnDateInput) {
        hireReturnDateInput.required = isReturn;
        if (isReturn && hireDateInput) {
          hireReturnDateInput.min = hireDateInput.value;
        }
      }
    }
  });
});

// -------------------------------------------------------------
// Private Hire Instant Proposal & Quotation Engine
// -------------------------------------------------------------
const hireForm = $('#hire-form');
const hireProposalContainer = $('#hire-proposal-container');

if (hireForm && hireProposalContainer) {
  hireForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const pickup = $('#hire-pickup').value.trim();
    const dest = $('#hire-dest').value.trim();
    const tripType = $('input[name="trip_type"]:checked')?.value || 'one-way';
    const hireDate = $('#hire-date').value;
    const returnDate = $('#hire-return-date')?.value;
    const passengers = parseInt($('#hire-passengers').value, 10) || 35;
    const busPref = $('#hire-bus-pref').value;
    const purpose = $('#hire-purpose').value;
    const hasYoung = $('#hire-care-young')?.checked || false;
    const hasSpecial = $('#hire-care-special')?.checked || false;
    const notes = $('#hire-notes')?.value.trim() || 'Standard private charter itinerary';
    const name = $('#hire-name').value.trim();
    const phone = $('#hire-phone').value.trim();
    const email = $('#hire-email').value.trim();

    // Determine Vehicle Tier
    let busTier = 'midi';
    if (busPref === 'sprinter' || (busPref === 'auto' && passengers <= 18)) {
      busTier = 'sprinter';
    } else if (busPref === 'flagship' || (busPref === 'auto' && passengers > 38)) {
      busTier = 'flagship';
    } else {
      busTier = 'midi';
    }

    let busName = '';
    let busCapacityText = '';
    let busLuggageText = '';
    let busImg = 'private-hire-bus.png';
    let basePriceMin = 320;
    let basePriceMax = 380;
    let amenities = [];

    if (busTier === 'sprinter') {
      busName = '18-Seater Executive Sprinter Coach';
      busCapacityText = '18 Luxury High-Back Seats + Professional Driver';
      busLuggageText = '20–25 Large Bags in rear cargo compartment';
      busImg = 'private-hire-bus.png';
      basePriceMin = 220;
      basePriceMax = 280;
      amenities = [
        '❄️ High-efficiency Air Conditioning',
        '🔌 USB-C fast charging at each seat',
        '📶 Starlink High-Speed Satellite Wi-Fi',
        '🎵 Bluetooth stereo sound system',
        '🛰️ 24/7 Satellite Fleet Tracking',
        '🛡️ Full passenger liability insurance'
      ];
    } else if (busTier === 'flagship') {
      busName = '55–65 Seater Intercity Flagship Luxury Coach';
      busCapacityText = `${passengers > 55 ? passengers : 60} Reclining Seats + Dedicated Driver & Conductor`;
      busLuggageText = '12 m³ Underfloor Luggage Holds (Up to 80+ Large Bags)';
      busImg = 'inter-africa-bus.png';
      basePriceMin = 480;
      basePriceMax = 580;
      amenities = [
        '🚻 Clean Flush Restroom / Toilet Onboard',
        '❄️ Dual Climate-Controlled Air Conditioning',
        '📺 Twin 32" HD Monitors & PA Microphone',
        '📶 High-Speed Starlink Satellite Wi-Fi',
        '🔌 220V & USB Charging Ports',
        '🛡️ VID & Road Safety Certified'
      ];
    } else {
      busName = '35-Seater Midi Luxury Coach (Most Popular)';
      busCapacityText = '35 Comfort Reclining Seats + Dedicated Driver';
      busLuggageText = 'Deep Underfloor Hold + Overhead Racks (Up to 45 Large Bags)';
      busImg = 'intercity-coach-interior.png';
      basePriceMin = 360;
      basePriceMax = 440;
      amenities = [
        '❄️ Roof-Mounted Climate Air Conditioning',
        '🔌 Fast USB Charging at Every Row',
        '📶 High-Speed Starlink Wi-Fi',
        '📺 HD Video Entertainment & PA Mic',
        '🛰️ GPS Live Tracking & Speed Governor',
        '🛡️ Comprehensive Passenger Insurance'
      ];
    }

    // Distance & Return Trip adjustments
    const isReturn = tripType === 'return';
    if (isReturn) {
      basePriceMin = Math.round(basePriceMin * 1.65);
      basePriceMax = Math.round(basePriceMax * 1.7);
    }

    // Purpose labels & perks
    const purposeNames = {
      wedding: 'Wedding / Celebration',
      school: 'School / University Excursion',
      corporate: 'Corporate Conference / Retreat',
      church: 'Church / Faith Pilgrimage',
      tour: 'Tourism / Safari Tour',
      funeral: 'Family / Memorial Gathering'
    };
    const purposeLabel = purposeNames[purpose] || 'Group Travel';

    let occasionPerk = '';
    if (purpose === 'wedding') {
      occasionPerk = '🎉 <strong>Wedding Special:</strong> Floral vehicle ribbons and interior decorations are 100% permitted!';
    } else if (purpose === 'school') {
      occasionPerk = '🏫 <strong>School Safety Standard:</strong> Certified VID roadworthiness documentation & vetted driver background checks provided.';
    } else if (purpose === 'corporate') {
      occasionPerk = '💼 <strong>Corporate Service:</strong> Official pro-forma invoice, tax clearance & direct billing available.';
    } else {
      occasionPerk = '⭐ <strong>Tailored Itinerary:</strong> Customized route pick-ups & stops scheduled around your group.';
    }

    // Date formatting
    let formattedDates = hireDate;
    if (isReturn && returnDate) {
      formattedDates = `${hireDate} → Returning ${returnDate}`;
    }

    // Generate Charter Quote Ref
    const quoteRef = 'IA-CHARTER-' + Math.floor(1000 + Math.random() * 9000);

    // Pre-filled WhatsApp link
    const waText = encodeURIComponent(
      `Hello Inter Africa Charter Desk! I would like to book a private bus charter.\n` +
      `• Quote Reference: ${quoteRef}\n` +
      `• Route: ${pickup} to ${dest} (${isReturn ? 'Round Trip' : 'One-Way Transfer'})\n` +
      `• Travel Dates: ${formattedDates}\n` +
      `• Group Size: ${passengers} passengers\n` +
      `• Bus Requested: ${busName}\n` +
      `• Occasion: ${purposeLabel}\n` +
      (hasYoung ? `• Child Care: Young passengers (Ages 5-12) traveling\n` : '') +
      (hasSpecial ? `• Accessibility: Senior / Wheelchair / Luggage assistance needed\n` : '') +
      `• Specific Notes: ${notes}\n` +
      `• Contact: ${name} (${phone}, ${email})\n` +
      `• Estimated All-Inclusive Quote: $${basePriceMin} – $${basePriceMax} USD\n\n` +
      `Please confirm bus lock-in and send the formal booking agreement.`
    );
    const waUrl = `https://wa.me/263736009688?text=${waText}`;

    // Render the Instant Proposal Card
    hireProposalContainer.hidden = false;
    hireForm.style.display = 'none';

    hireProposalContainer.innerHTML = `
      <div class="proposal-header">
        <div class="proposal-header-left">
          <span class="proposal-ref">CHARTER PROPOSAL #${quoteRef}</span>
          <h3>${pickup} <span>→</span> ${dest}</h3>
          <small style="color: #64748b; font-weight: 600;">${formattedDates} · ${isReturn ? 'Round Trip' : 'One-Way Transfer'} · ${passengers} Passengers · ${purposeLabel}</small>
        </div>
        <div>
          <span class="proposal-status-pill">
            <span class="pulse"></span> Available for your date
          </span>
        </div>
      </div>

      <div class="proposal-grid">
        <!-- Vehicle Details (What Do I Get?) -->
        <div class="proposal-vehicle-card">
          <img src="${busImg}" alt="${busName}" class="proposal-bus-img" />
          <h4 class="proposal-bus-title">${busName}</h4>
          <div class="proposal-bus-specs">
            <span class="proposal-spec-pill">👥 ${busCapacityText}</span>
            <span class="proposal-spec-pill">🧳 ${busLuggageText}</span>
          </div>
          <div class="proposal-amenities">
            ${amenities.map(a => `<span>${a}</span>`).join('')}
          </div>
          <div style="font-size: 11.5px; color: #475569; border-top: 1px solid #e2e8f0; padding-top: 10px; margin-top: 6px;">
            ${occasionPerk}
          </div>
          ${hasYoung ? `<div style="font-size: 11px; color: #065f46; background: #d1fae5; padding: 6px 10px; border-radius: 4px; margin-top: 8px;">🧒 <strong>Child Safety Protocol Active:</strong> Certified drivers & front cabin seating reserved for children.</div>` : ''}
          ${hasSpecial ? `<div style="font-size: 11px; color: #5b21b6; background: #ede9fe; padding: 6px 10px; border-radius: 4px; margin-top: 8px;">♿ <strong>Special Care Guaranteed:</strong> Step-free boarding escort & front-row accessible seats.</div>` : ''}
        </div>

        <!-- Pricing & Policy (How Much?) -->
        <div class="proposal-price-card">
          <div>
            <div class="proposal-fare-headline">
              <div class="proposal-fare-label">Estimated Charter Package</div>
              <div class="proposal-fare-amount">$${basePriceMin} – $${basePriceMax} <small>USD</small></div>
              <small style="color: #cbd5e1; font-size: 11px;">(ZiG equivalent accepted at current bank rate)</small>
            </div>

            <div class="proposal-inclusions">
              <b>What’s 100% Included in This Quote:</b>
              <ul>
                <li>Full fuel coverage for the entire itinerary</li>
                <li>Professional certified highway driver & driver food/stay</li>
                <li>All national highway toll fees & council road transit fees</li>
                <li>Comprehensive passenger liability insurance</li>
                <li>Up to 12 hours daily itinerary time included</li>
                <li>Zero depot return surcharges or hidden fees</li>
              </ul>
            </div>
          </div>

          <div class="proposal-policy-box">
            <strong>Transparent Overtime &amp; Cancellation:</strong><br />
            • Extra distance: $0.95 / km · Extra time: $20 / hr<br />
            • <strong>100% Refundable:</strong> Cancel up to 72 hours before trip with zero penalty.
          </div>
        </div>
      </div>

      <!-- Trust Credentials (Can I Trust You?) -->
      <div class="proposal-trust-row">
        <div class="trust-col">
          <strong>🛡️ Verified Safety Standards</strong>
          <small>VID-certified roadworthiness &amp; speed governed to national safety limits.</small>
        </div>
        <div class="trust-col">
          <strong>🏢 24/7 Breakdown Recovery Network</strong>
          <small>Backup luxury coaches stationed at Harare, Bulawayo, Mutare &amp; Masvingo depots.</small>
        </div>
        <div class="trust-col">
          <strong>⭐ 4.9 / 5.0 Star Group Rating</strong>
          <small>Trusted by over 420+ schools, corporations, and wedding parties nationwide.</small>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="proposal-actions">
        <a class="proposal-whatsapp-btn" href="${waUrl}" target="_blank" rel="noreferrer" aria-label="Lock in bus on WhatsApp">
          <span>💬</span> Lock in this bus on WhatsApp ↗
        </a>
        <a class="proposal-call-btn" href="tel:+263736009688" aria-label="Call charter desk">
          <span>📞</span> Call Charter Desk: 0736009688
        </a>
        <button type="button" class="proposal-print-btn" id="print-proposal-btn">
          <span>🖨️</span> Print Official Pro-Forma Quote
        </button>
        <button type="button" class="proposal-edit-btn" id="edit-proposal-btn">
          ← Edit Trip Details
        </button>
      </div>
    `;

    hireProposalContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast(`Charter Quote #${quoteRef} generated!`);

    // Wire up Print & Edit buttons
    const printBtn = $('#print-proposal-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const editBtn = $('#edit-proposal-btn');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        hireProposalContainer.hidden = true;
        hireForm.style.display = 'block';
        hireForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  });
}


// -------------------------------------------------------------
// Mobile Menu Button
// -------------------------------------------------------------
$('.menu-button').addEventListener('click', (event) => {
  const open = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!open));
  showToast(open ? 'Menu closed' : 'Use the booking button below to plan your trip.');
});

// -------------------------------------------------------------
// Live Travel Advisory & Audio Announcements
// -------------------------------------------------------------
const playAnnouncementBtn = $('#play-announcement-btn');
const announcementText =
  "Attention valued passengers. Inter Africa Travel Advisory: Harare to Bulawayo coaches are experiencing an approximate twenty minute delay due to road resurfacing works between Gweru and Kwekwe. All services on Mutare, Masvingo, and Chiredzi routes are operating on schedule. Fleet tracking is active across all coaches. Thank you for travelling with Inter Africa.";

let isSpeaking = false;

if (playAnnouncementBtn) {
  playAnnouncementBtn.addEventListener('click', () => {
    if (!('speechSynthesis' in window)) {
      showToast('Speech audio is not supported in this browser.');
      return;
    }

    if (window.speechSynthesis.speaking || isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      playAnnouncementBtn.classList.remove('speaking');
      playAnnouncementBtn.innerHTML = '<span class="speaker-icon">🔊</span> <span>Listen announcement</span>';
      showToast('Announcement stopped.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(announcementText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.lang = 'en-GB';

    utterance.onstart = () => {
      isSpeaking = true;
      playAnnouncementBtn.classList.add('speaking');
      playAnnouncementBtn.innerHTML = '<span class="speaker-icon">⏹</span> <span>Stop announcement</span>';
      showToast('Playing live audio travel advisory...');
    };

    utterance.onend = () => {
      isSpeaking = false;
      playAnnouncementBtn.classList.remove('speaking');
      playAnnouncementBtn.innerHTML = '<span class="speaker-icon">🔊</span> <span>Listen announcement</span>';
    };

    utterance.onerror = () => {
      isSpeaking = false;
      playAnnouncementBtn.classList.remove('speaking');
      playAnnouncementBtn.innerHTML = '<span class="speaker-icon">🔊</span> <span>Listen announcement</span>';
    };

    window.speechSynthesis.speak(utterance);
  });
}

// -------------------------------------------------------------
// Highway Challenges & Network Noticeboard Toggle
// -------------------------------------------------------------
const noticeboardToggleBtn = $('#toggle-noticeboard-btn');
const networkNoticeboard = $('#network-noticeboard');

if (noticeboardToggleBtn && networkNoticeboard) {
  noticeboardToggleBtn.addEventListener('click', () => {
    const isHidden = networkNoticeboard.hidden;
    networkNoticeboard.hidden = !isHidden;
    noticeboardToggleBtn.setAttribute('aria-expanded', String(isHidden));
    noticeboardToggleBtn.innerHTML = isHidden
      ? '<span>Close road notices</span> ▴'
      : '<span>Road challenges &amp; notices</span> ▾';
    if (isHidden) {
      networkNoticeboard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// -------------------------------------------------------------
// Advisory Ticker Rotator
// -------------------------------------------------------------
const advisoryTicker = $('#advisory-ticker');
if (advisoryTicker) {
  const tickerNotices = [
    '<strong>Notice:</strong> Harare – Bulawayo coaches experiencing ~20 min delay due to roadworks near Gweru. Mutare &amp; Masvingo on schedule.',
    '<strong>Road Alert:</strong> Eastern Highlands (A3) morning mist near Christmas Pass. Drivers maintaining safe cautionary speeds.',
    '<strong>Fleet Status:</strong> 24/7 real-time vehicle tracking active on all 600+ Inter Africa coaches nationwide.'
  ];
  let tickerIdx = 0;
  setInterval(() => {
    tickerIdx = (tickerIdx + 1) % tickerNotices.length;
    advisoryTicker.style.opacity = '0';
    setTimeout(() => {
      advisoryTicker.innerHTML = tickerNotices[tickerIdx];
      advisoryTicker.style.opacity = '1';
    }, 300);
  }, 6000);
}

// -------------------------------------------------------------
// Dual Booking Tabs (Passenger Tickets vs. Send a Package)
// -------------------------------------------------------------
const tabPassengers = $('#tab-passengers');
const tabPackages = $('#tab-packages');
const passengerPanel = $('#passenger-panel');
const packagePanel = $('#package-panel');

function switchBookingTab(mode) {
  if (!tabPassengers || !tabPackages || !passengerPanel || !packagePanel) return;
  if (mode === 'packages') {
    tabPassengers.classList.remove('active');
    tabPassengers.setAttribute('aria-selected', 'false');
    tabPackages.classList.add('active');
    tabPackages.setAttribute('aria-selected', 'true');
    passengerPanel.hidden = true;
    passengerPanel.classList.remove('active');
    packagePanel.hidden = false;
    packagePanel.classList.add('active');
  } else {
    tabPackages.classList.remove('active');
    tabPackages.setAttribute('aria-selected', 'false');
    tabPassengers.classList.add('active');
    tabPassengers.setAttribute('aria-selected', 'true');
    packagePanel.hidden = true;
    packagePanel.classList.remove('active');
    passengerPanel.hidden = false;
    passengerPanel.classList.add('active');
  }
}

if (tabPassengers && tabPackages) {
  tabPassengers.addEventListener('click', () => switchBookingTab('passengers'));
  tabPackages.addEventListener('click', () => switchBookingTab('packages'));
}

// Nav link shortcut to "Send Package"
const navPackagesLink = $('#nav-packages-link');
if (navPackagesLink) {
  navPackagesLink.addEventListener('click', (e) => {
    e.preventDefault();
    switchBookingTab('packages');
    const bookingSec = $('#booking');
    if (bookingSec) {
      bookingSec.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// -------------------------------------------------------------
// Package / Courier Form Handling
// -------------------------------------------------------------
const pkgDateInput = $('#pkg-date');
if (pkgDateInput) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const minDate = `${year}-${month}-${day}`;
  pkgDateInput.min = minDate;
  if (!pkgDateInput.value) {
    pkgDateInput.value = minDate;
  }
}

// Swap origin and destination depots
const pkgSwapBtn = $('#pkg-swap');
const pkgFromSelect = $('#pkg-from-city');
const pkgToSelect = $('#pkg-to-city');
if (pkgSwapBtn && pkgFromSelect && pkgToSelect) {
  pkgSwapBtn.addEventListener('click', () => {
    const val = pkgFromSelect.value;
    pkgFromSelect.value = pkgToSelect.value;
    pkgToSelect.value = val;
  });
}

// Auto-adjust weight based on category selection
const pkgCategorySelect = $('#pkg-category');
const pkgWeightInput = $('#pkg-weight');
if (pkgCategorySelect && pkgWeightInput) {
  pkgCategorySelect.addEventListener('change', () => {
    const cat = pkgCategorySelect.value;
    if (cat === 'envelope') pkgWeightInput.value = '1';
    else if (cat === 'small_box') pkgWeightInput.value = '3';
    else if (cat === 'medium_box') pkgWeightInput.value = '8';
    else if (cat === 'heavy_cargo') pkgWeightInput.value = '20';
    else if (cat === 'bulk_commercial') pkgWeightInput.value = '35';
  });
}

// Package Form Submit & Calculation
const packageForm = $('#package-form');
const packageResults = $('#package-results');

if (packageForm && packageResults) {
  packageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const from = pkgFromSelect.value;
    const to = pkgToSelect.value;
    const dateVal = pkgDateInput.value;
    const category = pkgCategorySelect.value;
    const weight = parseFloat(pkgWeightInput.value) || 2;
    const isFragile = $('#pkg-fragile').checked;
    const senderName = $('#pkg-sender-name').value.trim();
    const senderPhone = $('#pkg-sender-phone').value.trim();
    const receiverName = $('#pkg-receiver-name').value.trim();
    const receiverPhone = $('#pkg-receiver-phone').value.trim();
    const description = $('#pkg-description').value.trim();

    if (!from || !to) {
      showToast('Please choose both origin and destination depots.');
      return;
    }

    if (from === to) {
      packageResults.hidden = false;
      packageResults.innerHTML = `
        <div class="results-error">
          <span>⚠️</span>
          <div>
            <strong>Invalid depot route</strong>
            <p style="margin: 3px 0 0; font-size: 12px;">Origin and destination cannot be the same depot (${from}). Please choose a different destination depot.</p>
          </div>
        </div>
      `;
      packageResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    // Pricing calculation
    let baseRate = 5;
    let catLabel = 'Small Box / Bag';
    if (category === 'envelope') {
      baseRate = 3;
      catLabel = 'Documents / Envelope';
    } else if (category === 'small_box') {
      baseRate = 5;
      catLabel = 'Small Box / Bag';
    } else if (category === 'medium_box') {
      baseRate = 8;
      catLabel = 'Medium Box / Luggage';
    } else if (category === 'heavy_cargo') {
      baseRate = 12;
      catLabel = 'Heavy Sacks / Cargo';
    } else if (category === 'bulk_commercial') {
      baseRate = 18;
      catLabel = 'Commercial Bulk Cargo';
    }

    // Distance surcharge for longer routes
    let distanceSurcharge = 0;
    if ((from === 'Harare' && to === 'Bulawayo') || (from === 'Bulawayo' && to === 'Harare')) {
      distanceSurcharge = 1;
    } else if ((from === 'Harare' && to === 'Chiredzi') || (from === 'Chiredzi' && to === 'Harare')) {
      distanceSurcharge = 1.5;
    }

    // Weight over category threshold ($0.30 / extra kg)
    let weightSurcharge = 0;
    if (category === 'small_box' && weight > 5) weightSurcharge = (weight - 5) * 0.4;
    else if (category === 'medium_box' && weight > 15) weightSurcharge = (weight - 15) * 0.35;
    else if (category === 'heavy_cargo' && weight > 30) weightSurcharge = (weight - 30) * 0.3;

    const fragileFee = isFragile ? 2 : 0;
    const totalFreight = Math.round((baseRate + distanceSurcharge + weightSurcharge + fragileFee) * 100) / 100;

    // Date formatting
    let formattedDate = dateVal;
    if (dateVal) {
      const parts = dateVal.split('-');
      if (parts.length === 3) {
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        formattedDate = d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
      }
    }

    // Simulated Waybill Tracking Code
    const waybillId = 'IA-PKG-' + Math.floor(1000 + Math.random() * 9000);

    // Get buses conveying freight on this route
    const buses = getBusesForRoute(from, to);

    const busCardsHtml = buses.map((bus) => {
      const pickupTime = bus.estArrTime || bus.arrTime;
      return `
        <div class="pkg-bus-card">
          <div class="pkg-bus-meta">
            <b>${bus.name}</b>
            <small>Fleet ${bus.fleet} · Secure Luggage Compartment · GPS Tracked</small>
          </div>
          <div class="pkg-bus-times">
            <div>
              <strong>${bus.depTime}</strong>
              <small>${from} Depot Drop-off</small>
            </div>
            <span class="pkg-time-arrow">→</span>
            <div>
              <strong>${bus.arrTime}</strong>
              <small>${to} Depot Arrival</small>
            </div>
          </div>
          <span class="pkg-pickup-window">Ready for pickup ~${pickupTime}</span>
        </div>
      `;
    }).join('');

    // Pre-filled WhatsApp message
    const waText = encodeURIComponent(
      `Hello Inter Africa Cargo Express! I want to dispatch a package from ${from} Depot to ${to} Depot on ${formattedDate}.\n` +
      `• Waybill: ${waybillId}\n` +
      `• Category: ${catLabel} (${weight}kg${isFragile ? ', Fragile handling' : ''})\n` +
      `• Contents: ${description}\n` +
      `• Sender: ${senderName} (${senderPhone})\n` +
      `• Recipient: ${receiverName} (${receiverPhone})\n` +
      `• Estimated Freight: $${totalFreight.toFixed(2)}\n\n` +
      `Please confirm drop-off bay instructions and parcel registration.`
    );
    const waUrl = `https://wa.me/263736009688?text=${waText}`;

    packageResults.hidden = false;
    packageResults.innerHTML = `
      <div class="pkg-quote-summary">
        <div class="pkg-quote-info">
          <h4>📦 Freight Estimate: $${totalFreight.toFixed(2)} USD</h4>
          <p>Depot-to-depot express dispatch on scheduled Inter Africa coaches from <strong>${from} Depot</strong> to <strong>${to} Depot</strong>.</p>
          <div class="pkg-quote-meta">
            <span class="pkg-quote-pill">${catLabel}</span>
            <span class="pkg-quote-pill">${weight} kg</span>
            ${isFragile ? '<span class="pkg-quote-pill" style="background:rgba(239,68,68,.3);color:#fca5a5;">⚠️ Fragile Handling</span>' : ''}
            <span class="pkg-quote-pill">Dispatch: ${formattedDate}</span>
          </div>
        </div>
        <div class="pkg-price-box">
          <div class="pkg-price-label">Estimated Fee</div>
          <div class="pkg-price-val">$${totalFreight.toFixed(2)} <small>USD</small></div>
          <div class="pkg-waybill-id">Draft Waybill: ${waybillId}</div>
        </div>
      </div>

      <div class="pkg-depot-pickup-card">
        <span>📋</span>
        <div>
          <strong>Depot Collection &amp; Security Policy</strong>
          <p>The recipient (<strong>${receiverName}</strong>) must bring a valid National ID or Passport matching this name to claim the parcel at ${to} Depot. Free secure depot storage is provided for up to 5 business days after coach arrival.</p>
        </div>
      </div>

      <div class="pkg-buses-head">
        <span>TODAY'S BUSES CARRYING PARCELS ON THIS ROUTE</span>
        <span>${buses.length} departures available</span>
      </div>
      <div class="pkg-buses-list">
        ${busCardsHtml}
      </div>

      <div class="pkg-whatsapp-bar">
        <div>
          <strong>Ready to send your package?</strong>
          <p>Pre-register your parcel on WhatsApp to reserve space in the coach luggage bay and receive instant drop-off confirmation.</p>
        </div>
        <a class="button button-accent" href="${waUrl}" target="_blank" rel="noreferrer" aria-label="Register parcel on WhatsApp">
          Register parcel on WhatsApp ↗
        </a>
      </div>
    `;

    packageResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

// -------------------------------------------------------------
// Passenger Care Toggles & Details Expansion
// -------------------------------------------------------------
const toggleYoung = $('#toggle-young-passenger');
const cardToggleYoung = $('#card-toggle-young');
const youngDetails = $('#young-passenger-details');
const youngTravelTypeSelect = $('#young-travel-type');
const unaccompaniedFields = $('#unaccompanied-fields');

if (toggleYoung && cardToggleYoung && youngDetails) {
  toggleYoung.addEventListener('change', () => {
    const isChecked = toggleYoung.checked;
    cardToggleYoung.classList.toggle('active', isChecked);
    youngDetails.hidden = !isChecked;
    if (isChecked) {
      const passengersSelect = $('#passengers-count');
      const youngCountSelect = $('#young-count');
      if (passengersSelect && youngCountSelect) {
        if (parseInt(passengersSelect.value, 10) < parseInt(youngCountSelect.value, 10)) {
          passengersSelect.value = youngCountSelect.value;
        }
      }
    }
    if (!searchResults.hidden) {
      performSearch();
    }
  });
}

if (youngTravelTypeSelect && unaccompaniedFields) {
  youngTravelTypeSelect.addEventListener('change', () => {
    const isUnaccompanied = youngTravelTypeSelect.value === 'unaccompanied';
    unaccompaniedFields.hidden = !isUnaccompanied;
    if (!searchResults.hidden) {
      performSearch();
    }
  });
}

const toggleCare = $('#toggle-special-care');
const cardToggleCare = $('#card-toggle-care');
const careDetails = $('#special-care-details');

if (toggleCare && cardToggleCare && careDetails) {
  toggleCare.addEventListener('change', () => {
    const isChecked = toggleCare.checked;
    cardToggleCare.classList.toggle('active', isChecked);
    careDetails.hidden = !isChecked;
    if (!searchResults.hidden) {
      performSearch();
    }
  });
}

// When young count changes, update passengers-count if needed and re-search
const youngCountInput = $('#young-count');
if (youngCountInput) {
  youngCountInput.addEventListener('change', () => {
    const yVal = parseInt(youngCountInput.value, 10) || 1;
    if (parseInt(passengersSelect.value, 10) < yVal) {
      passengersSelect.value = String(yVal);
    }
    if (!searchResults.hidden) {
      performSearch();
    }
  });
}

// Re-search when care category changes
const careCategoryInput = $('#care-category');
if (careCategoryInput) {
  careCategoryInput.addEventListener('change', () => {
    if (!searchResults.hidden) {
      performSearch();
    }
  });
}




