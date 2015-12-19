function hello() {
  if (Meteor.isCordova) {
    alert("Hello, World!");
  } else {
    alert("Hello, World!");
  }
}

function helloNative() {
  if (Meteor.isCordova) {
    navigator.notification.alert("Hello, World!", null, "");
  } else {
    alert("Hello, World!");
  }
}

Template.appBody.events({
  'click [data-action=hello]': hello,
  'click [data-action=helloNative]': helloNative,
});