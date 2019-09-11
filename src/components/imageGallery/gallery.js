import React from 'react'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const item = this.props.item

    return <div className="image-gallery">
        <hr />
        <h4>Images:</h4>
        <div style={{display:'flex'}} >
          { item.images ?
            item.images.map(
              image => <span key={image.image_title}>
                {image.image_title}<br />
                <img key={image} src={`http://localhost:4001/uploads/${image.image_url}`} height="200px" alt={item.name} /><br />
                {image.image_description}<br />
              </span>
            ) : ""
          }
        </div>
        <hr />
    </div>
  }
}

export default Gallery
