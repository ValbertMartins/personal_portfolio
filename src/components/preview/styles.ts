import styled from "styled-components"

interface Props {
  active?: boolean
}

export const Container = styled.div`
  max-width: 500px;
  max-height: 300px;
  border-radius: 5px;
  background-color: #d9d9d9;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Indicator = styled.li`
  background: ${(props: Props) => (props.active ? "#6215DD" : "#fff")};

  width: 8px;
  height: 8px;
  display: inline-block;
  margin: 0 3px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
`
