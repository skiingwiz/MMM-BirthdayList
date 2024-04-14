# MMM-BirthdayList

This an extension for the [MagicMirror²](https://magicmirror.builders/).

This Module adds a happy notification when the current date matches someone's birthday from a configured list of birthdays.

### Configuration

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
    {
      module: "MMM-BirthdayList",
      position: "top_center",
      config: {
        tableClass: 'large',
        birthdays: [
          {
            name: "John",
            year: 1970,
            month: 1,
            day: 10
          },
          {
            name: "Jane",
            year: 1972,
            month: 10,
            day: 30
          }
        ]
      }
    }
]
````

### Configuration options

The following properties can be configured:

| Option             | Default | Description
| ------------------ | ------- | -----------
| `tableClass`       | `small` | Size of the panel details
| `birthdays `       | `[]`    | Array of birhtdays. Must give name, year, month, day.
