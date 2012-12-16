Documents = new Meteor.Collection("documents");

Documents.allow({
  insert: function(userId, doc) {
    if(isValidName(doc.name) && canWrite(doc.parentdoc)) {
      return true;
    }

    return false;
  },
  remove: function(userId, doc) {
    return canWrite(doc._id);
  }
});

Documents.findAllDocuments = function() {
  return Documents.find();
}

Documents.root = function() {
  return Documents.findOne({
    'name': '/'
  });
}

Documents.getHome = function() {
  var root = Documents.root();
  if(root) {
    var homedir = Documents.findOne({
       'parentdoc': root._id,
       'owner': Meteor.user().username
    });
    if(homedir) {
      return homedir._id;
    }
  }
  return null;
}

var isValidName = function(name) {
  if('/' === name) {
    return false;
  }
  return true;
};

var canWrite = function(docid) {
  var doc = Documents.find({
   '_id': docid,
   'owner': Meteor.user().username
  });
  return doc;
};
