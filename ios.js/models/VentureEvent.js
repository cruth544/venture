class VentureEvent {
  constructor(id, date, title, location, time, category) {
    // To be set later (because La wants it named like that)
    this.answered = 0
    this.reviews = []
    this.pictures = []
    this.people = []
    this.ventures = []

    // Touchable Values
    this.id = id
    this.date = date
    this.title = title
    this.location = location
    this.time = time
    this.category = category
  }
}

module.exports = VentureEvent
