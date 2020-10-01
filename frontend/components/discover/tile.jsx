import React from 'react'
import Header from '../shared/blocks'




// TILE
//   header
//     title
//     subtext (host writes title. default is host_name's land)
//     icons (camp, cabin, or rv)
//     reviews (icon, percentage -- num reviews. No reviews? => number of saves)
//     price/night
//   body
//     photos carousel
//     instant book button
//     save button

// STYLE
// display: flex, column-reverse (body then header)
// width, height, border-radius

// HOVER
// instant book: info media
// subtext: underline
// icons: info media

// PROPERTIES
//   props: location info
//   'highlight' prop or state?

// HIGHLIGHT (hover)
//   -header background darkens
//   -carousel scroll arrows appear
//   -pin turns black on map
//   -media pops open on map (link to show page)