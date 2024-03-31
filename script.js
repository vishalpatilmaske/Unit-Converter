// code to select all the  units button button
const selecteAllUnit = document.querySelectorAll(".select-unit");
const select = Array.from(selecteAllUnit);
let selectedUnit = undefined;

// code to select unit list
const listContainers = document.querySelectorAll(".display-list");

//select the input fileds
const from = document.querySelector(".fromInputFiled");
const to = document.querySelector(".toInputFiled");

// select the Calculate Button
const calculate = document.querySelector(".calculate");

// function to add the units on the textfield
function displayUnitOnTextField() {
  const listOfUnits = document.querySelectorAll(".display-list");
  const displayListContainers = Array.from(listOfUnits);

  // code for select the unit FROM and print the text on the input field
  displayListContainers[0].querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      from.value = button.value;
    });
  });

  // code for select he unit TO and print the text on the input field
  displayListContainers[1].querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      to.value = button.value;
    });
  });
}

// code to  select the type of unit
select.forEach((element) => {
  element.addEventListener("click", function () {
    switch (element.value) {
      case "Length":
        selectedUnit = "Length";
        displayLength();
        break;
      case "Temperature":
        selectedUnit = "Temperature";
        displayTemperature();
        break;
      case "Area":
        selectedUnit = "Area";
        displayArea();
        break;
      case "Volume":
        selectedUnit = "Volume";
        displayVolume();
        break;
      case "Weight":
        selectedUnit = "Weight";
        displayWeight();
        break;
      case "Time":
        selectedUnit = "Time";
        displayTime();
        break;
      default:
        displayLength();
        break;
    }
  });
});

// function to create the button for units
function createButton(value) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("class", "list-button");
  button.setAttribute("value", value);
  button.textContent = value;
  return button;
}

// function to remove the exicting buttons before add new buttons

function removeExistingButtons() {
  const displayListContainers = Array.from(listContainers);
  displayListContainers.forEach((container) => {
    const buttons = container.querySelectorAll("button");
    buttons.forEach((button) => {
      button.remove();
    });
  });
}

// display the list of unit to on the screen
function displayLength() {
  const lengthUnits = [
    "Meter",
    "Kilometer",
    "Centimeter",
    "Millimeter",
    "Micrometer ",
    "Nanometer ",
    "Mile",
    "Yard",
    "Foot",
    "Inch",
    "Light Year",
  ];
  // function to remove the exicting buttons before add new buttons
  removeExistingButtons();

  lengthUnits.forEach((unit) => {
    // create function call and this function returns the button for each array element
    const button = createButton(unit);
    listContainers.forEach((container) => {
      if (container.children.length < lengthUnits.length) {
        container.appendChild(button.cloneNode(true));
      }
    });
  });

  // when function is call it will display all the buttons on the screen
  displayUnitOnTextField();
}

function displayTemperature() {
  const tempratureUnits = ["Celsius", "Fahrenheit", "Kelvin", "Rankine"];

  // function to remove the exicting buttons before add new buttons
  removeExistingButtons();

  tempratureUnits.forEach((unit) => {
    // create function call and this function returns the button for each array element
    const button = createButton(unit);
    listContainers.forEach((container) => {
      if (container.children.length < tempratureUnits.length) {
        container.appendChild(button.cloneNode(true));
      }
    });
  });

  // when function is call it will display all the buttons on the screen
  displayUnitOnTextField();
}

function displayArea() {
  const areaUnits = [
    "Square_meter",
    "Square_kilometer",
    "Square_centimeter",
    "Square_millimeter",
    "Hectare",
    "Acre",
    "Square_mile",
    "Square_yard",
    "Square_foot",
    "Square_inch",
  ];

  // function to remove the exicting buttons before add new buttons
  removeExistingButtons();

  // create function call and this function returns the button for each array element
  areaUnits.forEach((unit) => {
    // create function call and this function returns the button for each array element
    const button = createButton(unit.replace(/_/g, " "));
    listContainers.forEach((container) => {
      if (container.children.length < areaUnits.length) {
        container.appendChild(button.cloneNode(true));
      }
    });
  });

  // when function is call it will display all the buttons on the screen
  displayUnitOnTextField();
}

function displayVolume() {
  const volumeUnits = [
    "Cubic_meter",
    "Cubic_kilometer",
    "Cubic_centimeter",
    "Cubic_millimeter",
    "Liter",
    "Milliliter",
    "US_fluid_ounce",
    "US_gallon",
    "US_quart",
    "US_pint",
    "US_cup",
    "US_tablespoon",
    "US_teaspoon",
    "Imperial_gallon",
    "Imperial_quart",
    "Imperial_pint",
    "Imperial_cup",
    "Imperial_fluid_ounce",
  ];

  // function to remove the exicting buttons before add new buttons
  removeExistingButtons();

  // create function call and this function returns the button for each array element
  volumeUnits.forEach((unit) => {
    // create function call and this function returns the button for each array element
    const button = createButton(unit.replace(/_/g, " "));
    listContainers.forEach((container) => {
      if (container.children.length < volumeUnits.length) {
        container.appendChild(button.cloneNode(true));
      }
    });
  });

  // when function is call it will display all the buttons on the screen
  displayUnitOnTextField();
}

function displayWeight() {
  const weightUnits = [
    "Kilogram",
    "Gram",
    "Milligram",
    "Microgram",
    "Metric_ton",
    "Pound",
    "Ounce",
    "Carat",
    "Metric_carat",
    "Grain",
    "Troy_ounce",
    "Troy_pound",
  ];
  // function to remove the exicting buttons before add new buttons
  removeExistingButtons();

  // create function call and this function returns the button for each array element
  weightUnits.forEach((unit) => {
    // create function call and this function returns the button for each array element
    const button = createButton(unit.replace(/_/g, " "));
    listContainers.forEach((container) => {
      if (container.children.length < weightUnits.length) {
        container.appendChild(button.cloneNode(true));
      }
    });
  });
  console.log("OK");
  // when function is call it will display all the buttons on the screen
  displayUnitOnTextField();
}

function displayTime() {
  const timeUnits = [
    "Second",
    "Millisecond",
    "Microsecond",
    "Nanosecond",
    "Picosecond",
    "Minute",
    "Hour",
    "Day",
    "Week",
    "Fortnight",
    "Month",
    "Year",
    "Decade",
    "Century",
    "Millennium",
  ];
  // function to remove the exicting buttons before add new buttons
  removeExistingButtons();

  // create function call and this function returns the button for each array element
  timeUnits.forEach((unit) => {
    // create function call and this function returns the button for each array element
    const button = createButton(unit);
    listContainers.forEach((container) => {
      if (container.children.length < timeUnits.length) {
        container.appendChild(button.cloneNode(true));
      }
    });
  });

  // when function is call it will display all the buttons on the screen
  displayUnitOnTextField();
}

// function to calculate the unit
calculate.addEventListener("click", () => {
  // user inputs
  const fromUnit = from.value.replace(/\s+/g, "_");
  const toUnit = to.value.replace(/\s+/g, "_");

  const unit = Number(document.querySelector("#from").value);
  if (isNaN(unit)) {
    document.getElementById("wrong-input").innerText = "Please enter a number";
  }
  const output = document.querySelector("#to");

  switch (selectedUnit) {
    case "Length":
      const result = lengthConverter(unit, fromUnit, toUnit);
      output.value = `${result.toFixed(6)} ${toUnit}`;
      break;
    case "Temperature":
      const result1 = temperatureConverter(unit, fromUnit, toUnit);
      output.value = `${result1.toFixed(6)} ${toUnit}`;
      break;
    case "Area":
      const result2 = areaConverter(unit, fromUnit, toUnit);
      output.value = `${result2.toFixed(6)} ${toUnit}`;
      break;
    case "Volume":
      const result3 = volumeConverter(unit, fromUnit, toUnit);
      output.value = `${result3.toFixed(6)} ${toUnit}`;
      break;
    case "Weight":
      const result4 = weightConverter(unit, fromUnit, toUnit);
      output.value = `${result4.toFixed(6)} ${toUnit}`;
      break;
    case "Time":
      const result5 = timeConverter(unit, fromUnit, toUnit);
      output.value = `${result5.toFixed(6)} ${toUnit}`;
      break;
  }
});

// Define a function to convert Length units
function lengthConverter(value, fromUnit, toUnit) {
  // Define conversion factors
  const units = {
    Meter: 1,
    Kilometer: 1000,
    Centimeter: 0.01,
    Millimeter: 0.001,
    Micrometer: 0.000001,
    Nanometer: 0.000000001,
    Mile: 1609.34,
    Yard: 0.9144,
    Foot: 0.3048,
    Inch: 0.0254,
    Light_Year: 9460730472580800,
  };
  const valueInMeters = value * units[fromUnit];
  const convertedValue = valueInMeters / units[toUnit];
  return convertedValue;
}

// Define a function to convert temperature units
function temperatureConverter(value, fromUnit, toUnit) {
  // Define conversion factors
  const conversionFactors = {
    Celsius: {
      Fahrenheit: (celsius) => (celsius * 9) / 5 + 32,
      Kelvin: (celsius) => celsius + 273.15,
      Rankine: (celsius) => ((celsius + 273.15) * 9) / 5,
    },
    Fahrenheit: {
      Celsius: (fahrenheit) => ((fahrenheit - 32) * 5) / 9,
      Kelvin: (fahrenheit) => ((fahrenheit + 459.67) * 5) / 9,
      Rankine: (fahrenheit) => fahrenheit + 459.67,
    },
    Kelvin: {
      Celsius: (kelvin) => kelvin - 273.15,
      Fahrenheit: (kelvin) => (kelvin * 9) / 5 - 459.67,
      Rankine: (kelvin) => (kelvin * 9) / 5,
    },
    Rankine: {
      Celsius: (rankine) => ((rankine - 491.67) * 5) / 9,
      Fahrenheit: (rankine) => rankine - 459.67,
      Kelvin: (rankine) => (rankine * 5) / 9,
    },
  };
  const convertedValue = conversionFactors[fromUnit][toUnit](value);
  return convertedValue;
}

// Define a function to convert Area units
function areaConverter(value, fromUnit, toUnit) {
  const areaUnits = {
    Square_meter: 1,
    Square_kilometer: 1e6,
    Square_centimeter: 1e-4,
    Square_millimeter: 1e-6,
    Hectare: 1e4,
    Acre: 4046.8564224,
    Square_mile: 2.58999e6,
    Square_yard: 0.83612736,
    Square_foot: 0.09290304,
    Square_inch: 0.00064516,
  };

  const convertedValue = (value * areaUnits[fromUnit]) / areaUnits[toUnit];
  return convertedValue;
}

// Define a function to convert volume units

function volumeConverter(value, fromUnit, toUnit) {
  // Define the volume units and their conversion factors
  const volumeUnits = {
    Cubic_meter: 1,
    Cubic_kilometer: 1e12,
    Cubic_centimeter: 1e-6,
    Cubic_millimeter: 1e-9,
    Liter: 0.001,
    Milliliter: 1e-6,
    US_fluid_ounce: 2.95735e-5,
    US_gallon: 0.00378541,
    US_quart: 0.000946353,
    US_pint: 0.000473176,
    US_cup: 0.000236588,
    US_tablespoon: 1.47868e-5,
    US_teaspoon: 4.92892e-6,
    Imperial_gallon: 0.00454609,
    Imperial_quart: 0.00113652,
    Imperial_pint: 0.000568261,
    Imperial_cup: 0.000284131,
    Imperial_fluid_ounce: 2.84131e-5,
  };
  const convertedValue = (value * volumeUnits[fromUnit]) / volumeUnits[toUnit];
  return convertedValue;
}

// Define a function to convert weight units
function weightConverter(value, fromUnit, toUnit) {
  // Define the weight units and their conversion factors
  const weightUnits = {
    Kilogram: 1,
    Gram: 1000,
    Milligram: 1e6,
    Microgram: 1e9,
    Metric_ton: 0.001,
    Pound: 2.20462,
    Ounce: 35.274,
    Carat: 5000,
    Metric_carat: 5000,
    Grain: 15432.4,
    Troy_ounce: 32.1507,
    Troy_pound: 2.67923,
  };
  const convertedValue = value / weightUnits[fromUnit];
  return convertedValue * weightUnits[toUnit];
}

// Define a function to convert time units
function timeConverter(value, fromUnit, toUnit) {
  // Define the time units and their conversion factors
  const timeUnits = {
    Second: 1,
    Millisecond: 0.001,
    Microsecond: 0.000001,
    Nanosecond: 0.000000001,
    Picosecond: 0.000000000001,
    Minute: 60,
    Hour: 3600,
    Day: 86400,
    Week: 604800,
    Fortnight: 1209600,
    Month: 2629800,
    Year: 31557600,
    Decade: 315576000,
    Century: 3155760000,
    Millennium: 31557600000,
  };
  const seconds = value * timeUnits[fromUnit];
  const convertedValue = seconds / timeUnits[toUnit];

  return convertedValue;
}
