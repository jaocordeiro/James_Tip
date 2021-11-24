import styled from "styled-components";

export const Container = styled.div`
  background-color: #173859;
  color: #ffff;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Steps = styled.div`
  flex: 1;
  display: flex;
`

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid #1f4f7c;
  display: flex;
  flex-direction: column;
`

export const Page = styled.div`
  flex: 1;
  padding-left: 10px;
  padding-top: 10px;
`