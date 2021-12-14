import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const ImageBackground = styled(BackgroundImage)`
   width: 700px;
`
const Container = styled.div`
    background-color: aquamarine;
    height: 75vh;
    width: 100%;
    display:flex;
    justify-content: center;
    position: relative;
    background-image: url('https://pesweb.azureedge.net/spimg/hotelroomtypeimages/boutique-hotel-large-family-room1.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=1440&h=680&mode=crop');
    background-size: cover;
    background-position: center;

`


export default function HotelImg() {

    const { image } = useStaticQuery (graphql`
    query {
        image: file(relativePath: {eq: "8.jpg"}) {
          sharp: childImageSharp {
            gatsbyImageData(width: 1920, blurredOptions: {width: 400}, placeholder: BLURRED)
          }
        }
      }
      
`)
console.log(image.sharp.gatsbyImageData.images.sources)

    return (
        <Container>
            <GatsbyImage src="https://pesweb.azureedge.net/spimg/hotelroomtypeimages/boutique-hotel-large-family-room1.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=70&w=1440&h=680&mode=crop" alt='img'  >

            </GatsbyImage>
      </Container>
    )
}
