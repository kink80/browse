Template.login.events({
  'click #login': function() {
    Meteor.loginWithPassword(
      $('#username').val(),
      $('#password').val(),
      function() {
        Session.set('docid', Documents.getHome());
      }
    );
  }
});
