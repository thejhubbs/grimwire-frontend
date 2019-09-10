import React from 'react'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const item = this.props.item
    console.log(item)
    return <div className="image-gallery">
        <hr />
        <h4>Images:</h4>
        {
          item.images.map(
            image => <img key={image} src={image} height="200px" alt={item.name} />
          )
        }
        <hr />
    </div>
  }
}

export default Gallery
