import React, { Component } from 'react';

import { Editor } from 'slate-react';
import { Value } from 'slate';
import initialValue from './value.json';
import { Button, Icon, Toolbar } from './components';
import { DivFileCss, LinkCss } from './PostStyle.css';
import { Image, Card, Button as BootstrapButton } from 'react-bootstrap';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Formik, Form } from 'formik';
import './PostEditor.css';
import { faEdit, faImage } from '@fortawesome/fontawesome-free-regular';

const DEFAULT_NODE = 'paragraph';

class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorText: Value.fromJSON(initialValue),
      coWorker: [{ value: '1', label: 'Safa Omri', id: 1 }, { value: '2', label: 'Elena Kalimera', id: 2 }],
      group: [
        {
          id: 1,
          title: "Teams & Projects",
          value: "Teams & Projects",
          label: "Teams & Projects",
          description:
            "A space for smaller teams to work, with up to 250 members plus its own chat",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        },
        {
          id: 2,
          title: "Discussions",
          value: "Discussions",
          label: "Discussions",
          description:
            "Start a conversation and get feedback from coworkers across your company",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        },
        {
          id: 3,
          title: "Announcements",
          value: "Announcements",
          label: "Announcements",
          description:
            "A place to broadcast your company news, updates and announcements",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        },
        {
          id: 4,
          title: "Social & More",
          value: "Social & More",
          label: "Social & More",
          description: "Plan lunch dates, sports and team outings",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        },
        {
          id: 5,
          title: "Multi-Company",
          value: "Multi-Company",
          label: "Multi-Company",
          description: "Work with people from other companies",
          imageUrl: "https://dummyimage.com/1920x1080/000/fff"
        }
      ],
      selectedCoWorkers: [],
      imagesArray: [],
      showTagCoWorkers: false
    };

    this.fileUploader = React.createRef();
    this.submitMyForm = null;
  }

  /**
 * Check if the current selection has a mark with `type` in it.
 *
 * @param {String} type
 * @return {Boolean}
 */

  hasMark = (type) => {
    const { editorText } = this.state;
    return editorText.activeMarks.some((mark) => mark.type === type);
  };

  /**
 * Check if the any of the currently selected blocks are of `type`.
 *
 * @param {String} type
 * @return {Boolean}
 */

  hasBlock = (type) => {
    const { editorText } = this.state;
    return editorText.blocks.some((node) => node.type === type);
  };

  /**
 * Store a reference to the `editor`.
 *
 * @param {Editor} editor
 */

  ref = (editor) => {
    this.editor = editor;
  };

  handleClickPhoto = (e) => {
    this.fileUploader.current.click();
  };

  handleFormSubmit = (values) => {
    const payload = {
      postContent: JSON.stringify(this.state.editorText.toJSON()),
      coWorkers: values.coWorkers,
      mediaFiles: values.medias,
      selectedGroup: values.selectedGroup,
    };

    this.props.onSubmit(payload);
  };

  handleSubmitMyForm = (e) => {
    if (this.submitMyForm) {
      this.submitMyForm(e);
    }
  };

  bindSubmitForm = (submitForm) => {
    this.submitMyForm = submitForm;
  };

  /**
 * Render.
 *
 * @return {Element}
 */

  render() {
    const { imagesArray, showTagCoWorkers, coWorker, editorText, group } = this.state;
    const { isGroup, isEvent } = this.props;

    return (
      <div>
        <Formik
          enableReinitialize
          initialValues={{
            // editorText: Value.fromJSON(initialValue),
            coWorkers: [],
            medias: [],
            selectedGroup: undefined,
          }}
          // validationSchema={CardSchema}
          onSubmit={(values) => this.handleFormSubmit(values)}
          render={(renderProps) => {
            this.bindSubmitForm(renderProps.submitForm);
            const allValues = renderProps.values;
            return (
              <Card className="card__box--post shadow-sm">
                <Form onSubmit={renderProps.handleSubmit}>
                  <Toolbar className="p-2 m-0 shadow">
                    {this.renderMarkButton('bold', 'format_bold')}
                    {this.renderMarkButton('italic', 'format_italic')}
                    {this.renderMarkButton('underlined', 'format_underlined')}
                    {this.renderMarkButton('code', 'code')}
                    {this.renderBlockButton('heading-one', 'looks_one')}
                    {this.renderBlockButton('heading-two', 'looks_two')}
                    {this.renderBlockButton('block-quote', 'format_quote')}
                    {this.renderBlockButton('numbered-list', 'format_list_numbered')}
                    {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
                  </Toolbar>
                  <Card.Header className="card__box--header p-0 d-flex justify-content-around align-items-center font-size-16 border-bottom-0">
                    <BootstrapButton variant="default" className="rounded-0 pt-2 pb-2 border-left-0 border-right-0 border-top-0" style={{ width: '50%', borderBottom: '2px solid #373e4c' }}>
                      <FontAwesomeIcon icon={faEdit} />
                      <span className="ml-2">Write Post</span>
                    </BootstrapButton>
                    <BootstrapButton variant="default" className="rounded-0 pt-2 pb-2" style={{ width: '50%' }} onClick={this.handleClickPhoto}>
                      <FontAwesomeIcon icon={faImage} />
                      <span className="ml-2">Upload Media</span>
                    </BootstrapButton>
                  </Card.Header>
                  <Editor
                    spellCheck
                    autoFocus
                    placeholder="Write a post on Workplace..."
                    ref={this.ref}
                    value={editorText}
                    onChange={(editorText) => {
                      this.onChange(editorText);
                      // renderProps.setFieldValue('editorText', editorText.value);
                    }}
                    // onKeyDown={this.onKeyDown}
                    renderBlock={this.renderBlock}
                    renderMark={this.renderMark}
                    className="p-4"
                    style={{
                      fontSize: 14
                    }}
                  />
                  {allValues.coWorkers.length > 0 && (
                    <div className="pt-2 pb-2">
                      {allValues.coWorkers.map((tag, i) => {
                        return (
                          <div className="d-flex flex-row pl-3 w-100" key={i}>
                            --with {tag.label}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {showTagCoWorkers && (
                    <Select
                      closeMenuOnSelect={false}
                      components={makeAnimated}
                      defaultValue={allValues.coWorkers}
                      isMulti
                      options={coWorker}
                      className="p-2"
                      onChange={(selectedOption) => {
                        renderProps.setFieldValue(
                          'coWorkers',
                          selectedOption ? selectedOption : []
                        );
                      }}
                    />
                  )}
                  {imagesArray.length > 0 && (
                    <div className="d-flex mw-100 overflow-auto m-2">
                      {imagesArray.map((image, index) => {
                        return (
                          <React.Fragment key={`imagesArray-${index}`}>
                            <div className="mainimage mr-1 position-relative">
                              {image.name.includes('image') ? (
                                <Image
                                  src={image.value}
                                  className="card__post--media"
                                />
                              ) : (
                                  <video className="card__post--media">
                                    <source src={image.value} />
                                  </video>
                                )}
                              <span
                                className="cursor-pointer"
                                onClick={() => {
                                  renderProps.setFieldValue(
                                    'medias',
                                    allValues.medias.filter((x, i) => i !== index)
                                  );
                                  this.removeImage(index);
                                }}
                              >
                                <FontAwesomeIcon
                                  className="close-icon--post"
                                  icon={faWindowClose}
                                />
                              </span>
                            </div>
                            {index === imagesArray.length - 1 && (
                              <LinkCss className="cursor-pointer">
                                <DivFileCss
                                  className="w-100 h-100"
                                  onClick={() =>
                                    this.fileUploader.current.click()}
                                />
                              </LinkCss>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  )}
                  <input
                    type="file"
                    id="file"
                    className="d-none"
                    name="whyImage"
                    ref={this.fileUploader}
                    accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif"
                    multiple="multiple"
                    onChange={(e) => {
                      if (e.target.files.length === 0) {
                        return;
                      } else {
                        renderProps.setFieldValue('medias', [...allValues.medias, ...e.target.files]);
                        this.addThisImage(e);
                      }
                    }}
                  />
                  <Card.Header className="card__box--header p-0 bg-white">
                    <div className="d-flex justify-content-between font-weight-bold card__box--header--div border-bottom-0">
                      <div className="flex-grow-1">
                        {!isGroup && !isEvent &&
                          <Select
                            components={makeAnimated}
                            defaultValue={allValues.selectedGroup}
                            options={group}
                            className="p-2"
                            onChange={(selectedOption) => {
                              renderProps.setFieldValue('selectedGroup', selectedOption ? selectedOption : undefined);
                            }}
                            placeholder="Select Group..."
                          />
                        }
                      </div>
                      <div className="d-flex justify-content-end flex-grow-1">
                        <div className="d-flex align-items-center cursor-pointer card__post--feature-icons p-2" onClick={this.toggleShowTagCoWorkers}>
                          <img
                            height="30"
                            src="/assets/icons/add-tag.png"
                            alt="tag_icon"
                          />
                          <span className="pl-1">Tag Co-worker</span>
                        </div>
                        <BootstrapButton
                          className="border-0 rounded-0"
                          type="submit"
                          size="sm"
                          variant="primary"
                          style={{ padding: '0.25rem 1.5rem', fontSize: 16, backgroundColor: '#373e4c' }}
                        >
                          Post
                        </BootstrapButton>
                      </div>
                    </div>
                  </Card.Header>
                </Form>
              </Card>
            );
          }}
        />
      </div>
    );
  }

  toggleShowTagCoWorkers = () => {
    this.setState((prevState) => ({
      showTagCoWorkers: !prevState.showTagCoWorkers
    }));
  };

  addThisImage = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        const { type } = event.target.files[i];
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (e) => {
          const imagenewobj = {
            name: type,
            value: e.target.result
          };
          this.setState((prevState) => ({
            imagesArray: [...prevState.imagesArray, imagenewobj]
          }));
        };
      }
    }
  };

  removeImage = (i) => {
    let { imagesArray } = this.state;
    imagesArray.splice(i, 1);
    this.setState({
      imagesArray
    });
  };

  /**
 * Render a mark-toggling toolbar button.
 *
 * @param {String} type
 * @param {String} icon
 * @return {Element}
 */

  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type);

    return (
      <Button active={isActive} onMouseDown={(event) => this.onClickMark(event, type)}>
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  /**
 * Render a block-toggling toolbar button.
 *
 * @param {String} type
 * @param {String} icon
 * @return {Element}
 */

  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type);

    if (['numbered-list', 'bulleted-list'].includes(type)) {
      const { editorText: { document, blocks } } = this.state;

      if (blocks.size > 0) {
        const parent = document.getParent(blocks.first().key);
        isActive = this.hasBlock('list-item') && parent && parent.type === type;
      }
    }

    return (
      <Button active={isActive} onMouseDown={(event) => this.onClickBlock(event, type)}>
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  /**
 * Render a Slate block.
 *
 * @param {Object} props
 * @return {Element}
 */

  renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;
      default:
        return next();
    }
  };

  /**
 * Render a Slate mark.
 *
 * @param {Object} props
 * @return {Element}
 */

  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;
      case 'code':
        return <code {...attributes}>{children}</code>;
      case 'italic':
        return <em {...attributes}>{children}</em>;
      case 'underlined':
        return <u {...attributes}>{children}</u>;
      default:
        return next();
    }
  };

  /**
 * On change, save the new `value`.
 *
 * @param {Editor} editor
 */

  onChange = ({ value }) => {
    this.setState({ editorText: value });
  };

  /**
 * On key down, if it's a formatting command toggle a mark.
 *
 * @param {Event} event
 * @param {Editor} editor
 * @return {Change}
 */

  // onKeyDown = (event, editor, next) => {
  // 	let mark;

  // 	if (isBoldHotkey(event)) {
  // 		mark = 'bold';
  // 	} else if (isItalicHotkey(event)) {
  // 		mark = 'italic';
  // 	} else if (isUnderlinedHotkey(event)) {
  // 		mark = 'underlined';
  // 	} else if (isCodeHotkey(event)) {
  // 		mark = 'code';
  // 	} else {
  // 		return next();
  // 	}

  // 	event.preventDefault();
  // 	editor.toggleMark(mark);
  // };

  /**
 * When a mark button is clicked, toggle the current mark.
 *
 * @param {Event} event
 * @param {String} type
 */

  onClickMark = (event, type) => {
    event.preventDefault();
    this.editor.toggleMark(type);
  };

  /**
 * When a block button is clicked, toggle the block type.
 *
 * @param {Event} event
 * @param {String} type
 */

  onClickBlock = (event, type) => {
    event.preventDefault();

    const { editor } = this;
    const { value } = editor;
    const { document } = value;

    // Handle everything but list buttons.
    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock('list-item');

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list');
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock('list-item');
      const isType = value.blocks.some((block) => {
        return !!document.getClosest(block.key, (parent) => parent.type === type);
      });

      if (isList && isType) {
        editor.setBlocks(DEFAULT_NODE).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');
      } else if (isList) {
        editor.unwrapBlock(type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list').wrapBlock(type);
      } else {
        editor.setBlocks('list-item').wrapBlock(type);
      }
    }
  };
}

export default PostEditor;
