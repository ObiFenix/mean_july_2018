$(document). ready(() => {
   let socket = io.connect();
   let count = 1;

   // Handles server request from each FORM
   $('#countform').submit((_event) => {
      _event.preventDefault();
      socket.emit("count");
   });
   $('#resetform').submit((_event) => {
      _event.preventDefault();
      socket.emit("reset");
   });

   // handles server responses to each FORM's request
   socket.on('counted', (count) => {
      response = `<span class="text-primary">${count}</span> Time(s)`;
      $('#counter').html(response);
   });
   socket.on('reseted', (count) => {
      response = `<span class="text-primary">${count}</span> Time(s)`;
      $('#counter').html(response);
   });
})
