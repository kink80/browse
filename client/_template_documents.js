Meteor.subscribe('all-documents');
Meteor.subscribe('count-documents');

Template.documentlist.documents = function() {
  var currentid = Session.get('docid');

  if(currentid) {
    return Documents.find({
      'parentdoc': currentid 
    });
  }
};

Template.documentlist.count = function() {
  return Documents.find().count();
};

Template.documentlist.events({
  'click #adddoc': function() {
     console.log(Session.get('docid'));
     Documents.insert({ 
        'name': $('#docname').val(),
        'owner': Meteor.user().username,
        'parentdoc': Session.get('docid')
     });
     $('#docname').val('');
  },
  'click .delete': function() {
     Documents.remove({ '_id': this._id });
  }
});
