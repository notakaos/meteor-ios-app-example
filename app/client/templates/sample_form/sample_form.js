function onSubmitForm(event, template) {
  event.preventDefault();
  const name = event.target.name.value;
  alert(`Hello, ${name}!`);
}

Template.sampleForm.events({
  'submit form': onSubmitForm,
});
