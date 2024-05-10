import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorForm,
  Heading,
  InputLabelContainer,
  LabelElement,
  InputElement,
  SelectContainer,
  OptionElement,
  GenerateButton,
  ImageContainer,
  TextOnImage,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    wallpaperActiveStatus: false,
    imageUrl: '',
    topTextValue: '',
    bottomTextValue: '',
    activeOptionId: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value, wallpaperActiveStatus: false})
  }

  onChangeTopText = event => {
    this.setState({
      topTextValue: event.target.value,
      wallpaperActiveStatus: false,
    })
  }

  onChangeBottomText = event => {
    this.setState({
      bottomTextValue: event.target.value,
      wallpaperActiveStatus: false,
    })
  }

  onChangeOption = event => {
    const updatedOptionId = fontSizesOptionsList.find(eachFontsize => {
      if (eachFontsize.optionId === event.target.value) {
        return eachFontsize.displayText
      }
      return null
    })

    this.setState({
      activeOptionId: updatedOptionId.displayText,
      wallpaperActiveStatus: false,
    })
  }

  onClickGenerateButton = event => {
    event.preventDefault()
    this.setState(prevState => ({
      wallpaperActiveStatus: !prevState.wallpaperActiveStatus,
    }))
  }

  render() {
    const {
      activeOptionId,
      wallpaperActiveStatus,
      topTextValue,
      bottomTextValue,
      imageUrl,
    } = this.state

    console.log(activeOptionId)

    return (
      <AppContainer>
        <MemeGeneratorForm type="form">
          <Heading>Meme Generator</Heading>
          <InputLabelContainer>
            <LabelElement htmlFor="imageurl">Image URL</LabelElement>
            <InputElement
              id="imageurl"
              placeholder="Enter the Image URL"
              type="input"
              onChange={this.onChangeImageUrl}
            />
          </InputLabelContainer>
          <InputLabelContainer>
            <LabelElement htmlFor="toptext">Top Text</LabelElement>
            <InputElement
              id="toptext"
              placeholder="Enter the Top Text"
              type="input"
              onChange={this.onChangeTopText}
            />
          </InputLabelContainer>
          <InputLabelContainer>
            <LabelElement htmlFor="bottomtext">Bottom Text</LabelElement>
            <InputElement
              id="bottomtext"
              placeholder="Enter the Bottom Text"
              type="input"
              onChange={this.onChangeBottomText}
            />
          </InputLabelContainer>
          <InputLabelContainer>
            <SelectContainer id="fontsize" onChange={this.onChangeOption}>
              <LabelElement htmlFor="fontsize">Font Size</LabelElement>
              {fontSizesOptionsList.map(eachFontSize => (
                <OptionElement
                  key={eachFontSize.optionId}
                  value={eachFontSize.displayText}
                >
                  {eachFontSize.displayText}
                </OptionElement>
              ))}
            </SelectContainer>
          </InputLabelContainer>
          <GenerateButton type="submit" onClick={this.onClickGenerateButton}>
            Generate
          </GenerateButton>
        </MemeGeneratorForm>
        {wallpaperActiveStatus ? (
          <ImageContainer data-testid="meme" imageUrl={imageUrl}>
            <TextOnImage fontSize={activeOptionId}>{topTextValue}</TextOnImage>
            <TextOnImage fontSize={activeOptionId}>
              {bottomTextValue}
            </TextOnImage>
          </ImageContainer>
        ) : null}
      </AppContainer>
    )
  }
}

export default MemeGenerator
