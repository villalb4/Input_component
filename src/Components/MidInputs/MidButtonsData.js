const buttons = [
  {
    title: "<Input disabled />",
    label: "label",
    placeholder: "Placeholder",
    style: "input_disabled",
    hoverTitle: "",
    labelHover: "label_disabled",
    hoverStyle: "input_hoverDisabled",
  },

  {
    title: "<Input helperText=”Some interesting text” />",
    label: "label",
    placeholder: "Placeholder",
    style: "input_helper",
    text: "Some interesting text",
    textStyle: "helperText",
    hoverTitle: "<Input helperText=”Some interesting text” error />",
    labelHover: "labelHelperError",
    hoverStyle: "input_hoverHelper",
    error: "Some interesting text",
    errorStyle: "helperErrorText",
  }
]

export default buttons;