import { compose } from '@fluentui/react-bindings';
import { commonPropTypes } from '../../utils';
import { Box, BoxProps, BoxStylesProps } from '../Box/Box';

export interface ListItemContentOwnProps {
  hasContentMedia?: boolean;
  hasHeader?: boolean;
  truncate?: boolean;
}
export interface ListItemContentProps extends ListItemContentOwnProps, BoxProps {}

export type ListItemContentStylesProps = ListItemContentOwnProps;
export const listItemContentClassName = 'ui-list__item__content';

/**
 * Provides a content for the ListItem.
 */
export const ListItemContent = compose<
  'div',
  ListItemContentOwnProps,
  ListItemContentStylesProps,
  BoxProps,
  BoxStylesProps
>(Box, {
  className: listItemContentClassName,
  displayName: 'ListItemContent',

  handledProps: ['hasContentMedia', 'hasHeader', 'truncate'],
  overrideStyles: true,
  shorthandConfig: {
    mappedProp: 'content',
  },
});

ListItemContent.propTypes = commonPropTypes.createCommon();
