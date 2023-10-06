import React from 'react';
import { MARK_BOLD, MARK_ITALIC } from '@udecode/plate-basic-marks';
import { useEditorReadOnly } from '@udecode/plate-common';

import { Icons } from '@/components/icons';
import { TableDropdownMenu } from '@/components/plate-ui/table-dropdown-menu';

import { InsertDropdownMenu } from './insert-dropdown-menu';
import { MarkToolbarButton } from './mark-toolbar-button';
import { ModeDropdownMenu } from './mode-dropdown-menu';
import { ToolbarGroup } from './toolbar';
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu';

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex flex-wrap"
        style={{
          transform: 'translateX(calc(-1px))',
        }}
      >
        {!readOnly && (
          <>
            <ToolbarGroup noSeparator>
              <InsertDropdownMenu />
              <TurnIntoDropdownMenu />
            </ToolbarGroup>

            <ToolbarGroup>
              <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
                <Icons.bold />
              </MarkToolbarButton>
              <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
                <Icons.italic />
              </MarkToolbarButton>
            </ToolbarGroup>

            <ToolbarGroup>
              <TableDropdownMenu />
            </ToolbarGroup>
          </>
        )}

        <div className="grow" />

        <ToolbarGroup noSeparator>
          <ModeDropdownMenu />
        </ToolbarGroup>
      </div>
    </div>
  );
}
