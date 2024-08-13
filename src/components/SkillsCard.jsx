import React, { useState } from 'react'
import styled from 'styled-components'
import { skills } from '../data/constants'

const SkillsCard = () => {
    const [selectedFilter, setSelectedFilter] = useState('Languages');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

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
            margin-top: 80px;
            font-size: 30px;
        }
    `;

    const Desc = styled.div`
        font-size: 18px;
        text-align: center;
        max-width: 600px;
        color: white;
        @media (max-width: 640px) {
            max-width: 350px;
        }
    `

    const FilterContainer = styled.div`
        margin-top: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    `

    const FilterButton = styled.button`
        color: white;
        border: 2px solid #854CE6;
        border-radius: 8px;
        padding: 8px 16px;
        cursor: pointer;
        font-size: 16px;
    `

    const PaginationContainer = styled.div`
        display: flex;
        justify-content: center;
        gap: 10px;
        @media (max-width: 640px) {
            justify-content: space-between;
        }
    `

    const PageButton = styled.button`
        background-color: black;
        color: white;
        border: 1px solid #854CE6;
        border-radius: 8px;
        padding: 8px;
        cursor: pointer;
        font-size: 12px;
        &.active {
            background-color: #854CE6;
        }
    `

    const ArrowButton = styled.button`
        background-color: black;
        color: white;
        border: 1px solid #854CE6;
        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            background-color: #854CE6;
        }
        &.disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
        @media (max-width: 640px) {
            padding: 6px;
        }
    `

    const SkillList = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center; 
        flex-wrap: wrap;
        gap: 25px;
        margin-top: 100px;
    `

    const SkillItem = styled.div`
        min-width: 160px;
        font-size: 16px;
        font-weight: 400;
        color: white;
        border: 1px solid #854CE6;
        box-shadow: 0 0 10px 2px rgba(133, 76, 230, 1);
        border-radius: 12px;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        @media (max-width: 640px) {
          min-width: 140px;
          font-size: 12px;
        }
    `

    const SkillImage = styled.img`
        width: 24px;
        height: 24px;
        @media (max-width: 640px) {
          width: 22px;
          height: 22px;
        }
    `

    const totalButtons = skills.length;
    const totalPages = Math.ceil(totalButtons / itemsPerPage);

    const filteredSkills = skills.filter(skill => skill.title === selectedFilter);

    const paginateButtons = (buttons, page) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, buttons.length);
        return buttons.slice(startIndex, endIndex);
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <Container id="skills">
            <Wrapper>
                <Title>Skills</Title>
                <Desc>Here are some of my skills on which I have been working on for the past 2 years.</Desc>
                <FilterContainer>
                    {paginateButtons(skills, currentPage).map(skill => (
                        <FilterButton
                            key={skill.title}
                            onClick={() => setSelectedFilter(skill.title)}
                            style={{ backgroundColor: selectedFilter === skill.title ? '#854CE6' : 'black' }}
                        >
                            {skill.title}
                        </FilterButton>
                    ))}
                </FilterContainer>
                <PaginationContainer>
                    <ArrowButton
                        onClick={handlePrevPage}
                        className={currentPage === 1 ? 'disabled' : ''}
                        aria-label="Previous"
                    >
                        &larr;
                    </ArrowButton>
                    {[...Array(totalPages)].map((_, index) => (
                        <PageButton
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </PageButton>
                    ))}
                    <ArrowButton
                        onClick={handleNextPage}
                        className={currentPage === totalPages ? 'disabled' : ''}
                        aria-label="Next"
                    >
                        &rarr;
                    </ArrowButton>
                </PaginationContainer>
                {filteredSkills.length > 0 && filteredSkills[0].skills.length > 0 && (
                    <SkillList>
                        {filteredSkills[0].skills.map((item) => (
                            <SkillItem key={item.name}>
                                <SkillImage src={item.image} alt={item.name} />
                                {item.name}
                            </SkillItem>
                        ))}
                    </SkillList>
                )}
            </Wrapper>
        </Container>
    )
}

export default SkillsCard
