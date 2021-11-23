export default function stateMeta() {
  return({
    modes: [
      {
        name: 'temp',
        icon: 'fa-thermometer-half',
        labels: {
          heading: 'Temperature',
          headingShort: 'Temp',
          chart: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ]
        },
      },
      {
        name: 'rh',
        icon: 'fa-water',
        labels: {
          heading: 'Residual Humidity',
          headingShort: 'RH',
          chart: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ]
        },
      },
      {
        name: 'lux',
        icon: 'fa-lightbulb',
        labels: {
          heading: 'Light Level',
          headingShort: 'Lux',
          chart: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ]
        },
      },
      {
        name: 'vpd',
        icon: 'fa-bullseye',
        labels: {
          heading: 'Vapor Pressure Defecit',
          headingShort: 'VPD',
          chart: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ]
        },
      },
    ]
  })
}