const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    image: 'https://randomuser.me/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingFor: 'male',
    image: 'https://randomuser.me/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingFor: 'female',
    image: 'https://randomuser.me/portraits/men/83.jpg'
  }
];
const profiles = profileIterator(data);
//Call first profile
nextProfile();

//Next event
document.getElementById('next').addEventListener('click', nextProfile);

//Function next profile
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Preference: ${currentProfile.lookingFor}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    </ul>`;

    document.getElementById(
      'imageDisplay'
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    //No more profiles
    window.location.reload();
  }
}

//Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
