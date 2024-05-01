$(function () {
  $("#WAButton").floatingWhatsApp({
    phone: "0000000", //WhatsApp Business phone number International format-
    //Get it with Toky at https://toky.co/en/features/whatsapp.
    headerTitle: "Message", //Popup Title
    popupMessage: "Hello, How Can We Help You", //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="./whatsapp/whatsapp.svg"/>', //Button Image
    headerColor: "green", //Custom header color
    //backgroundColor: 'crimson', //Custom background button color
    position: "right",
  });
});
