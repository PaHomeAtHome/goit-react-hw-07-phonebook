export const handleSubmit = async (value, resetForm, data, addContact) => {
  const { name } = value;

  if (data.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    alert(name + ' is already in contacts');

    return;
  }

  await addContact(value)
    .then(response => {
      resetForm();
      return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
};
