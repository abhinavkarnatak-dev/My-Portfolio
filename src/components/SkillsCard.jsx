import React from 'react'
import styled from 'styled-components'
import { skills } from '../data/constants'

const SkillsCard = () => {
    const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
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
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
    `

    const Title = styled.div`
    font-size: 30px;
    text-align: center;
    font-weight: 600;
    margin-top: 70px;
    color: white;
    @media (max-width: 768px) {
    margin-top: 12px;
        font-size: 32px;
    }
    `;

    const Desc = styled.div`
        font-size: 18px;
        text-align: center;
        max-width: 600px;
        color: white;
        @media (max-width: 768px) {
            font-size: 16px;
        }
    `

    const SkillList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
    `

    const SkillItem = styled.div`
    min-width: 140px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    border: 1px solid white;
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    `

    const SkillImage = styled.img`
    width: 24px;
    height: 24px;
    `

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
          {skills.map((skill) => (
            <SkillList>
                {skill.skills.map((item) => (
                <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                </SkillItem>
                ))}
            </SkillList>
          ))}
      </Wrapper>
    </Container>
  )
}

export default SkillsCard