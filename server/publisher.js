Meteor.publish("all-documents", function() {
  return Documents.findAllDocuments();
});

