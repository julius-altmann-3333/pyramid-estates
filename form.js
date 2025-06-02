document.getElementById('interiorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const room = this.room.value;
    const style = this.style.value;
    const colorScheme = this.colorScheme.value;
    const notes = this.notes.value.trim();

    if (!room || !style || !colorScheme) {
      alert('Please fill out all required fields.');
      return;
    }

    let confirmationMsg = 
      `Thank you for your custom interior request!\n\n` +
      `Room Type: ${room}\n` +
      `Style: ${style}\n` +
      `Color Scheme: ${colorScheme}\n` +
      `Additional Notes: ${notes ? notes : 'None'}\n\n` +
      `Our team will get back to you shortly.`;

    alert(confirmationMsg);
    this.reset();
  });
