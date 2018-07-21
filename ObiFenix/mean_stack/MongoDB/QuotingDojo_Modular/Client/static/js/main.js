$(document). ready(() => {
   let socket = io.connect();

   // Handles server request from each FORM
   $('#greenForm').submit((_event) => {
      _event.preventDefault();
      socket.emit('color_pressed', 'green');
   });
   $('#blueForm').submit((_event) => {
      _event.preventDefault();
      socket.emit('color_pressed', 'blue');
   });
   $('#pinkForm').submit((_event) => {
      _event.preventDefault();
      socket.emit('color_pressed', 'pink');
   });

   // handles server responses to each FORM's request
   socket.on('background_color', (background) => {
      $('.jumbotron').css({'background-color': background.color, 'background-image': 'none'});
   });
})
