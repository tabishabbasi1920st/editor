import {Component} from 'react'
import {MainContainer, ContentContainer, EditorImg} from './styledComponent'

class Editor extends Component {
  render() {
    return (
      <MainContainer>
        <ContentContainer>
          <EditorImg
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
          <Editor>t</Editor>
        </ContentContainer>
      </MainContainer>
    )
  }
}

export default Editor
