import React from 'react'

const Painting = ({ selectPainting, painting }) =>
  <div onClick={() => selectPainting(painting)} className="ui card" >
    <div className="image">
      <img src={painting.image} alt={painting.title} />
    </div>
    <div className="content">
      <p className="header">{painting.title}</p>
      <div className="meta">
        <span className="date">{painting.artist.name}</span>
      </div>
      <span className="right floated">
      <i className="heart outline like icon"></i>
        {painting.votes} likes
      </span>
    </div>
  </div>

export default Painting

// <div class="ui card">
//   <div class="image">
//     <img src="/images/avatar2/large/kristy.png">
//   </div>
//   <div class="content">
//     <a class="header">Kristy</a>
//     <div class="meta">
//       <span class="date">Joined in 2013</span>
//     </div>
//     <div class="description">
//       Kristy is an art director living in New York.
//     </div>
//   </div>
//   <div class="extra content">
//     <a>
//       <i class="user icon"></i>
//       22 Friends
//     </a>
//   </div>
// </div>

// {
//   id: '59bd5a519c18db5297a32479',
//   collecting_institution: '',
//   date: '1446',
//   dimensions: {
//     text: '11 1/2 Ã— 8 1/2 in',
//     height: 11.5,
//     width: 8.5,
//     depth: null,
//     diameter: null
//   },
//   slug: 'petrus-christus-portrait-of-a-carthusian',
//   title: 'Portrait of a Carthusian',
//   image:
//     'https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg',
//   artist: {
//     name: 'Petrus Christus',
//     hometown: 'Baarle-Hertog, Belgium',
//     birthday: '1410',
//     deathday: '1475'
//   },
//   votes: 64
// }
