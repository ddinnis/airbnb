import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  margin: 24px -14px 0;
  white-space: nowrap;
  padding: 16px 14px 0;

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
    ${props => props.theme.mixin.boxShadow};
    box-shadow: 0px 1px 2px rgb(0 0 0 / 15%);

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
      box-shadow: 0px 7px 14px rgb(0 132 138 / 15%);
    }
  }
`;
