Template.register.events({
  "click #register": function() {
     var username = $("#rusername").val(),
         email = $("#remail").val(),
         pass = $("#rpassword").val();

     if(username && email && pass) {
       Accounts.createUser({
         'username': username,
         'password': pass,
         'email': email
       }, function() {
         Session.set('docid', Documents.getHome());
       });
     }
  }
});
