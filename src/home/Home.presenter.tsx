import styled from "styled-components";
import { useState } from "react";

const HomeUI: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState("인기순");
  const handleItemClick = (itemText: string) => {
    setSelectedItem(itemText);
  };

  return (
    <StyledHome>
      <FilterBox>
        <FilterButton onClick={() => setIsExpanded(!isExpanded)}>
          {selectedItem}
          <img alt="toggle" src="/assets/icon/toggle.svg" />
        </FilterButton>
        {isExpanded && (
          <ToggleContainer>
            <ToggleItem
              onClick={() => {
                handleItemClick("인기순");
                setIsExpanded(false);
              }}
            >
              인기순
            </ToggleItem>
            <ToggleItem
              onClick={() => {
                handleItemClick("최신순");
                setIsExpanded(false);
              }}
            >
              최신순
            </ToggleItem>
          </ToggleContainer>
        )}
      </FilterBox>
      <CardContainer>
        {selectedItem === "인기순" && (
          // <PopularityContainer></PopularityContainer>
          <TemporaryBox>
            <img
              src="/assets/image/temporary.svg"
              style={{ width: "260px" }}
            />
            <TemporaryGuideTitle>
              아직...! 나작길 서비스는 준비중
            </TemporaryGuideTitle>
            <TemporaryGuideSubTitle>
              우리 애기들 보려고 열심히 준비하고 있어.
              <br />
              조금만 더 기다려줘.
            </TemporaryGuideSubTitle>
          </TemporaryBox>
        )}
        {selectedItem === "최신순" && (
          // <LatestContainer></LatestContainer>
          <TemporaryBox>
            <img
              src="/assets/image/temporary.svg"
              style={{ width: "260px" }}
            />
            <TemporaryGuideTitle>
              아직...! 나작길 서비스는 준비중
            </TemporaryGuideTitle>
            <TemporaryGuideSubTitle>
              우리 애기들 보려고 열심히 준비하고 있어.
              <br />
              조금만 더 기다려줘.
            </TemporaryGuideSubTitle>
          </TemporaryBox>
        )}
      </CardContainer>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  height: calc(100vh - 110px);
`;
const FilterBox = styled.div`
  height: 48px;
  /* background: orange; */
  border-bottom: 8px solid #f0f0f0;
  padding: 6px 0px 6px 11px;
`;

const FilterButton = styled.button`
  width: 68px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

const ToggleContainer = styled.div`
  position: fixed;
  width: 68px;
  height: 62px;
  background-color: white;
  padding: 4px 6px;
  border-radius: 3.5px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
`;

const ToggleItem = styled.div`
  color: #000;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 5px 0px;
`;

const CardContainer = styled.div`
  height: calc(100vh - 158px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const PopularityContainer = styled.div`
//   height: calc(100vh - 158px);
//   background: green;
// `;

// const LatestContainer = styled.div`
//   height: calc(100vh - 158px);
//   background: blue;
// `;

// 임시
const TemporaryBox = styled.div`
  width: 260px;
  height: 260px;
  /* background: orange; */
`;

const TemporaryGuideTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 5px;
`;

const TemporaryGuideSubTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
export default HomeUI;
