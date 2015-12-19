function hello() {
  if (Meteor.isCordova) {
    alert("Hello, World!");
  } else {
    alert("Hello, World!");
  }
}

Template.appBody.events({
  'click [data-action=hello]': hello,
});