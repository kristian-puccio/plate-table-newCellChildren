import {
  createBoldPlugin,
  createItalicPlugin,
  MARK_BOLD,
  MARK_ITALIC,
} from '@udecode/plate-basic-marks';
import { createPlugins, PlateLeaf, withProps } from '@udecode/plate-common';
import {
  createHeadingPlugin,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@udecode/plate-heading';
import { createNodeIdPlugin } from '@udecode/plate-node-id';
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from '@udecode/plate-paragraph';
import {
  createTablePlugin,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TR,
} from '@udecode/plate-table';

import { HeadingElement } from '@/components/plate-ui/heading-element';
import { ParagraphElement } from '@/components/plate-ui/paragraph-element';
import { withPlaceholders } from '@/components/plate-ui/placeholder';
import {
  TableCellElement,
  TableCellHeaderElement,
} from '@/components/plate-ui/table-cell-element';
import { TableElement } from '@/components/plate-ui/table-element';
import { TableRowElement } from '@/components/plate-ui/table-row-element';

export const plugins = createPlugins(
  [
    // Nodes
    createParagraphPlugin(),
    createHeadingPlugin(),
    createTablePlugin({
      options: {
        newCellChildren: [
          {
            type: ELEMENT_H1,
            children: [{ text: 'TEST TEST' }],
          },
        ],
      },
    }),

    // Marks
    createBoldPlugin(),
    createItalicPlugin(),
    createNodeIdPlugin(),
  ],
  {
    components: withPlaceholders({
      [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
      [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
      [ELEMENT_H3]: withProps(HeadingElement, { variant: 'h3' }),
      [ELEMENT_H4]: withProps(HeadingElement, { variant: 'h4' }),
      [ELEMENT_H5]: withProps(HeadingElement, { variant: 'h5' }),
      [ELEMENT_H6]: withProps(HeadingElement, { variant: 'h6' }),
      [ELEMENT_PARAGRAPH]: ParagraphElement,
      [ELEMENT_TABLE]: TableElement,
      [ELEMENT_TD]: TableCellElement,
      [ELEMENT_TH]: TableCellHeaderElement,
      [ELEMENT_TR]: TableRowElement,
      [MARK_BOLD]: withProps(PlateLeaf, { as: 'strong' }),
      [MARK_ITALIC]: withProps(PlateLeaf, { as: 'em' }),
    }),
  }
);
