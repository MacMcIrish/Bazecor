import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

// Components
import { SuperkeyPicker } from "../../component/Button";

// Icons
import { IconKeysPress, IconKeysTapHold, IconKeysHold, IconKeys2Tap, IconKeys2TapHold } from "../../component/Icon";

// API's
import i18n from "../../i18n";

const Style = Styled.div` 
.keyWrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 4px;
    margin-top: 32px;
}
`;

const SuperkeyActions = ({
  isStandardViewSuperkeys,
  superkeys,
  selected,
  selectedAction,
  changeSelected,
  updateSuper,
  macros,
  updateAction,
  changeAction,
  keymapDB
}) => {
  const rows = [
    {
      icon: <IconKeysPress />,
      title: i18n.editor.superkeys.actions.tap,
      description: i18n.editor.superkeys.actions.tapLabel
    },
    {
      icon: <IconKeysHold />,
      title: i18n.editor.superkeys.actions.hold,
      description: i18n.editor.superkeys.actions.holdLabel
    },
    {
      icon: <IconKeysTapHold />,
      title: "Tap & hold",
      description: "Tap once, tap again and keep holding to activate another key."
    },
    {
      icon: <IconKeys2Tap />,
      title: "2Tap",
      description: "Tap twice fast and trigger another key."
    },
    {
      icon: <IconKeys2TapHold />,
      title: "2Tap & hold",
      description: "Tap twice fast and hold to see others keyboards crying."
    }
  ];

  return (
    <Style>
      <div className="keyWrapper">
        {superkeys != undefined && superkeys.length > 0
          ? rows.map((item, index) => (
              <SuperkeyPicker
                index={index}
                selected={selected}
                selectedAction={selectedAction}
                superkeys={superkeys}
                icon={item.icon}
                key={`skA-${index}`}
                title={item.title}
                description={item.description}
                elementActive={selectedAction == index ? true : false}
                isStandardViewSuperkeys={isStandardViewSuperkeys}
                changeSelected={changeSelected}
                onClick={changeAction}
                updateSuper={updateSuper}
                macros={macros}
                keymapDB={keymapDB}
                updateAction={updateAction}
              />
            ))
          : ""}
      </div>
    </Style>
  );
};

SuperkeyActions.propTypes = {
  isStandardViewSuperkeys: PropTypes.bool.isRequired
};

export default SuperkeyActions;
