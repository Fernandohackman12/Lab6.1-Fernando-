if (contact_name == "") {
  alert("Name is a mandatory field");
} else {
  if (contact_name.length < 5) {
    alert("Name: Minimum 6 characters.");
  }
}

if (contact_email == "") {
  alert("Email is mandatory field");
}

if (contact_phone == "") {
  alert("Phone is mandatory field");
}

if (contact_message == "") {
  alert("Message is a mandatory field");
}
