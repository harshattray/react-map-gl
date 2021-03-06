// 'new' is optional
const DEPRECATED_PROPS = [
  {old: 'onChangeViewport', new: 'onViewportChange'},
  {old: 'perspectiveEnabled', new: 'dragRotate'},
  {old: 'onHoverFeatures', new: 'onHover'},
  {old: 'onClickFeatures', new: 'onClick'}
];

function getDeprecatedText(name) {
  return `react-map-gl: \`${name}\` is deprecated and will be removed in a later version.`;
}

function getNewText(name) {
  return `Use \`${name}\` instead.`;
}

/**
 * Checks props object for any prop that is deprecated and insert a console
 * warning to the user. This will also print out the recommended new prop/API
 * if one exists.
 */
export default function checkDeprecatedProps(props = {}) {
  /* eslint-disable no-console, no-undef */
  DEPRECATED_PROPS.forEach((depProp) => {
    if (props.hasOwnProperty(depProp.old)) {
      let warnMessage = getDeprecatedText(depProp.old);
      if (depProp.new) {
        warnMessage = `${warnMessage} ${getNewText(depProp.new)}`;
      }
      console.warn(warnMessage);
    }
  });
}
