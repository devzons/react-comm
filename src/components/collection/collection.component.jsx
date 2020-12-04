import React, { Component } from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './collection.styles.scss'

class Collection extends Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/VHSxX9Q/hats.jpg',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/mHMtWc3/jackets.jpg',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/Lpb874Q/sneaker.jpg',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/ydx3KtX/women.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/M5yNT2r/men.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    }
  }

  render() {
    return (
      <div className='collection-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Collection
