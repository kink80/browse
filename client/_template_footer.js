Template.footer.events({
  'click #logout': function() {
    Meteor.logout(function() {
      Session.set('docid', undefined);
    });
  }
});
