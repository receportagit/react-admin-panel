import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';

const IconRenderer = ({ iconName, iconSet = 'Fa', className, style }) => {
  const iconSets = {
    Fa: FaIcons,
    Md: MdIcons,
    Io: IoIcons,
  };

  if (!iconSets[iconSet] || !iconSets[iconSet][iconName]) {
    return <span>İkon bulunamadı</span>;
  }

  const SelectedIcon = iconSets[iconSet][iconName];

  return <SelectedIcon className={className} style={style} />;
};

export default IconRenderer;
