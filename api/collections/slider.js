Collection = new Mongo.Collection('collection');

Collection.attachSchema(new SimpleSchema ({
  slider: {
    type: Number,
    max: 150,
    min: 30,
    autoform: {
      type: "noUiSlider",
      step: 10,
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
  }
}));
