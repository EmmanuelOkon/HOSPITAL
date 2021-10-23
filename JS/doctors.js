doctors = [
  {
    name: 'john doe',
    docImage: 'doc-1',
    rank: 'expert doctor',
  },
  {
    name: 'john doe',
    docImage: 'doc-2',
    rank: 'senior doctor',
  },
  {
    name: 'john doe',
    docImage: 'doc-3',
    rank: 'expert doctor',
  },
  {
    name: 'john doe',
    docImage: 'doc-4',
    rank: 'senior doctor',
  },
  {
    name: 'john doe',
    docImage: 'doc-5',
    rank: 'expert doctor',
  },
  {
    name: 'john doe',
    docImage: 'doc-6',
    rank: 'senior doctor',
  },
];

for (let i = 0; i < doctors.length; i++) {
  const e = doctors[i];
  document.getElementById('docList').innerHTML += `
        <div class="box">
              <img src="./Assets/${e.docImage}.jpg" class="docImage" alt="doctors">
              <h3 class="docName">${e.name}</h3>
              <span>${e.rank}</span>
            <div class="card">
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-linkedin"></a>
                <a href="#" class="fab fa-instagram"></a>
            </div>
        </div>
      `;
}
