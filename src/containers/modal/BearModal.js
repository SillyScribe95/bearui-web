import React, {
  //
  useState,
  useContext,
} from "react";
import {
  useDisclosure,
  //
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { Modal } from "antd";

import {
  //
  bearlog,
} from "../../index";
import { BearList } from "../../components/list/BearList";

export function BearModal({
  //
  open,
  onClose,
  height,
  header,
  noFooter,
  footer,
  footerConfig,
  // message,
  children,
  buttonConfig,
  ...args
}) {
  // 1const
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  // 1footer

  // 1antd
  const antGo = {
    // title="Title"
    visible: open,
    onOk: onClose,
    onCancel: onClose,
    footer: "",
  };

  function asdkwe(afads) {
    bearlog.lug("___ afads ___", afads);
    // onClose();
  }

  const sijdfe = {
    //
    bearName: "bearModalButtons",
    list: ["close"],
    dictvar: {
      close: {
        background: "blue",
        textvar: "Close",
        onClick: onClose,
      },
    },
  };

  const ifdse = {
    // onClick: asdkwe,
    //   buttonLis
    typeList: "button",
    horiz: true,
    ...sijdfe,
    ...buttonConfig,
  };

  bearlog.lug("___ ifdse ___", ifdse);

  const sidjfwer = footer ? footer : <BearList {...ifdse} />;

  const isjdew =
    //
    true;
  // !open

  const isdfr = footer || sidjfwer;
  args = {
    // ...skdfer,
    ...args,
  };

  const sirew = {
    isOpen: open,
    onClose,
    toggle: onClose,
    ...antGo,
    ...args,
  };

  const okfdsd = (
    <>
      <Modal {...sirew}>
        {/* <ModalOverlay /> */}
        {/* <ModalContent> */}
        {/* <ModalHeader>{header}</ModalHeader> */}
        {/* <ModalCloseButton /> */}
        {/* <ModalBody>{children}</ModalBody> */}
        {children}
        {/* <ModalFooter {...footerConfig}>{isdfr}</ModalFooter> */}
        {/* </ModalContent> */}
      </Modal>
    </>
  );

  //   args = {
  //     obj: okfdsd,
  //     ...args,
  //   };

  //   return "sdoksdf0";
  return okfdsd;
  //   return <BearDiv {...args} />;
}
