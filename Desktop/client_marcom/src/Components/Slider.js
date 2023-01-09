import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { ImageData } from './ImageData';
import '../Css/Carousel.css'
export default class Slider extends Component {
  render() {
    return (
      <div>
          <Carousel className='Carousel-part'>
                {
                    ImageData.map((slide,index)=>{
                        return(
                            <Carousel.Item interval={1500}>
                                <img
                                className="d-block w-100"
                                src={slide.image}
                                alt=""
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                        )
                    })
                }
            </Carousel>
      </div>
    )
  }
}
