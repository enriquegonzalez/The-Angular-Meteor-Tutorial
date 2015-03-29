Meteor.startup(function () {
  if (Parties.find().count() === 0) {

    var parties = [
      {'name': 'Popeye Party',
        'description': 'Spinach, Olives, Tobacco, and more. . .',
        'owner': '6KHtWinP9FWSzvefA',
        'public': true},
      {'name': 'All DUBSTEP',
        'description': 'wowowowooooooomp WOMPWOMPWAAAAAOOAOAOAOAOMP chirp!',
        'owner': '6KHtWinP9FWSzvefA',
        'public': true}
    ];

    for (var i = 0; i < parties.length; i++) {
      Parties.insert({name: parties[i].name, description: parties[i].description});
    }

  }
});
