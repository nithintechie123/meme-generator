import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  padding: 50px;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
  font-size: 24px;
`
export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const LabelElement = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
  margin-bottom: 5px;
  font-size: 12px;
`

export const InputElement = styled.input`
  border-radius: 4px;
  border: 1px solid #d7dfe9;
  width: 100%;
  padding: 5px;
  outline: none;
  color: #7e858e;
`
export const SelectContainer = styled.select`
  border-radius: 4px;
  border: 1px solid #d7dfe9;
  width: 100%;
  padding: 5px;
  color: #7e858e;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;
`

export const OptionElement = styled.option`
  font-family: 'Roboto';
  cursor: pointer;
`
export const GenerateButton = styled.button`
  background-color: #0b69ff;
  width: 100px;
  color: #ffffff;
  padding-left: 15px;
  padding-right: 15px;
  padding: 7px;
  outline: none;
  border-width: 0px;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
`

export const ImageContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  width: 300px;
  height: 300px;
  background-size: cover;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const TextOnImage = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize};
  font-family: 'Roboto";
  font-weight:500;
`
