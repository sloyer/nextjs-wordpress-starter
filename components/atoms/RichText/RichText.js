import createMarkup from '@/functions/createMarkup'
import cn from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './RichText.module.css'

/**
 * Render the RichText component.
 *
 * @param {object} props                 RichText component props.
 * @param {string} props.attributes      Optional element attributes.
 * @param {string} props.backgroundColor The background color.
 * @param {string} props.children        Child component(s) to render.
 * @param {string} props.className       Optional classNames.
 * @param {boolean} props.dropCap        Whether or not there should be a drop cap.
 * @param {string} props.id              Optional element ID.
 * @param {string} props.tag             The type of element to render.
 * @param {string} props.textColor       The text color.
 * @return {Element}                     The RichText component.
 */
export default function RichText({
  attributes,
  backgroundColor,
  children,
  className,
  dropCap,
  id,
  tag,
  textColor
}) {
  const tagClassName = tag !== 'div' ? tag : ''
  return React.createElement(tag, {
    ...attributes,
    className: cn(
      styles.richtext,
      styles?.[tagClassName],
      dropCap && styles.dropcap,
      className
    ),
    id: id || null,
    dangerouslySetInnerHTML: createMarkup(children),
    style: {
      color: textColor ?? 'inherit',
      'background-color': backgroundColor ?? 'inherit'
    }
  })
}

RichText.propTypes = {
  attributes: PropTypes.object,
  backgroundColor: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  dropCap: PropTypes.bool,
  id: PropTypes.string,
  tag: PropTypes.string,
  textColor: PropTypes.string
}

RichText.defaultProps = {
  dropCap: false,
  tag: 'div'
}
