Meteor.startup(function() {
  var root = Documents.findOne({
     'name': '/'
  });
  if(!root) {
    root = Documents.insert({
       'name': '/'
    });
  } else {
    root = root._id;
  }

  Accounts.onCreateUser(function(options, user) {
    var home = Documents.findOne({
       'name': user.username,
       'parentdoc': root
    });
    if(!home) {
      home = Documents.insert({
        'name': user.username,
        'parentdoc': root,
        'owner': user.username
      });
    } else {
      home = home._id;
    }
    user.home = home;
    return user;
  });

});
