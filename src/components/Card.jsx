import React from 'react'
import styled from 'styled-components'
import { services } from '../data/constants'

const Card = ({}) => {

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  align-items: center;
  `
  
  const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 20px;
  `
  
  const Title = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  margin-top: 30px;
  color: white;
  `
  
  const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: white;
    @media (max-width: 640px) {
      max-width: 350px;
    }
  `

  const ServicesContainer = styled.div`
    keyboard: focusable;1
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 30px;
    gap: 40px;
    justify-content: center;
  `
  
  const Service = styled.div`
    width: 100%;
    max-width: 300px;
    border: 0.1px solid #854CE6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 3px rgba(133, 76, 230, 1);
        filter: brightness(1.1);
    }
    @media (max-width: 640px) {
      max-width: 275px;
      margin-bottom: 10px
    }
  `
  
  const ServiceTitle = styled.h2`
    font-size: 25px;
    font-weight: 500;
    color: white;
    margin-bottom: 20px;
    text-align: center;
  `
  
  const ServiceList = styled.div`
    display: flex;
    justify-content: center; 
  `
  
  const ServiceItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `
  
  const ServiceImage = styled.img`
    width: 90px;
    height: 90px;
  `

  return (
    <Container id="services">
      <Wrapper>
        <Title>About</Title>
        <Desc>Versatile developer skilled in the following areas, which I've been working on for the past 2 years
        </Desc>
        <ServicesContainer>
          {services.map((service) => (
            <Service>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceList>
                {service.services.map((item) => (
                  <ServiceItem>
                    <ServiceImage src={item.image}/>
                  </ServiceItem>
                ))}
              </ServiceList>
            </Service>
          ))}
        </ServicesContainer>
      </Wrapper>
    </Container>
  );
};

export default Card;
