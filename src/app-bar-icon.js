import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

function handleTouchTap() { }

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Editor" />
    <MenuItem primaryText="Docs" />
    <MenuItem primaryText="GitHub" />
  </IconMenu>
);

Menu.muiName = 'IconMenu';

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarExampleIconButton = () => (
  <AppBar
    title={<span style={styles.title}>compwhile</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={<Menu />}
  />
);

export default AppBarExampleIconButton;
