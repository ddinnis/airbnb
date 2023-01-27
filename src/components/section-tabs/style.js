import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  display: flex;
  margin-top: 24px;

  .tab {
    flex: 0 0 86px;
    text-align: center;
    white-space: nowrap;

    margin-right: 16px;
    padding: 14px 16px;

    border: solid 0.5px #d8d8d8;
    border-radius: 3px;

    font-size: 17px;
    color: #484848;

    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`;
