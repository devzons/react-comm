import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionSections } from '../../redux/collection/collection.selectors'

import MenuItem from '../menu-item/menu-item.component'

import './collection.styles.scss'

const Collection = ({ sections }) => {
  return (
    <div className='collection-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectCollectionSections,
})

export default connect(mapStateToProps)(Collection)
