import { ReactNode } from "react";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "@SillyScribe95/bedia-shared/";

import { useHistory } from "react-router-dom";

import * as gens from "../consts/GenStyled";

import Divo from "../components/Divo";

import BasePriceMod from "./BasePriceMod";

import { MainContext } from "../contexts/MainContext";
// import aaaa from "./components/aaaa";
import {
  CurrencyMain,
  setGlobalSource,
  //
} from "../functions/GlobalFunctions";

export default function PriceBase({
  //
  referTrue,
  textvar,
  cost,
  typevar,
  // totalTime,
  chooseFunc,
  chooseConfig,
  includeYes,
  includeNo,
  ...sdss
}) {
  // 1MainContext
  const {
    orderDetails,
    setpriceType,
    orderCountry,
    changePerMin,
    perMinTimes,
    seriesOver,
  } = useContext(MainContext);

  // 1const
  const [type, setType] = useState("");
  let history = useHistory();

  function PriceWrapper({ children }: { children: ReactNode }) {
    return (
      <Box
        borderWidth="1px"
        mb={4}
        shadow="base"
        // height="100px"
        borderWidth="1px"
        alignSelf={{ base: "center", lg: "flex-start" }}
        borderColor={useColorModeValue("gray.200", "gray.500")}
        borderRadius={"xl"}
      >
        {children}
      </Box>
    );
  }

  function CheckBase(obj, icon, coloro) {
    const mdor = {
      fontSize: "20px",
      textAlign: "left",
    };

    const ijdsdse = {
      as: icon,
      m: 3,
      color: coloro,
    };

    const ijsda = (
      <ListItem {...mdor}>
        <ListIcon {...ijdsdse} />
        {obj}
      </ListItem>
    );

    return ijsda;
  }

  function CheckYes(obj) {
    return CheckBase(obj, FaCheckCircle, "green.500");
  }

  function CheckNo(obj) {
    return CheckBase(obj, FaTimesCircle, "red.500");
  }

  function PopGO() {
    const popList = (
      <Box
        position="absolute"
        top="-16px"
        // marginTop="-16px"
        // bottom="1px"
        textAlign="center"
        // padding="0 20%"
        left="50%"
        style={{ transform: "translate(-50%)" }}
      >
        <Text
          textTransform="uppercase"
          bg={useColorModeValue("red.300", "red.700")}
          color={useColorModeValue("gray.900", "gray.300")}
          px={3}
          py={1}
          fontSize="15px"
          fontWeight="600"
          rounded="xl"
        >
          Recommended
        </Text>
      </Box>
    );

    return popList;
  }

  const yssso = includeYes.map(CheckYes);
  const nnsoss = includeNo.map(CheckNo);

  function asidae() {
    logs.logga("___ choosePrice ___", typevar);

    changePerMin(cost);
    setpriceType(typevar);

    // if (chooseFunc){
    //   chooseFunc()
    // } else {
    //   setpriceType(typevar)
    // }

    history.push("/order");
  }

  const sodsae = referTrue && gens.bediaMainStyle;

  const vdsreaw = {
    onClick: asidae,
    w: "full",
    fontSize: "24px",
    variant: "outline",
    className: "shadowHover",
    ...sodsae,
    ...chooseConfig,
  };

  const findYsap = <Button {...vdsreaw}>Choose</Button>;

  const djeaw =
    //
    referTrue;
  // true

  const pricRe = djeaw && <PopGO />;

  const ijsadaew = {
    arrText: textvar,
  };

  const sidjaew = {
    fontSize: "3xl",
    minHeight: "80px",
    textAlign: "center",
  };

  const baseDescr = (
    <Box {...sidjaew}>
      <Divo {...ijsadaew} />
    </Box>
  );

  const gfdofr = {
    cost: cost,
    ...sdss,
  };

  logs.logga("gfdofr-zzz", gfdofr);

  const sdfssad = (
    <Box
      borderWidth="1px"
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      <BasePriceMod noAccuracy noBasic monthTrue totalCostT rue {...gfdofr} />
      <Box position="relative">
        {pricRe}
        <VStack
          bg={useColorModeValue("gray.50", "gray.700")}
          py={4}
          borderBottomRadius={"xl"}
        >
          <Box minHeight="300px">
            {baseDescr}
            <List spacing={3} textAlign="start" px={28}>
              {yssso}
            </List>
            <List spacing={3} textAlign="start" px={12}>
              {nnsoss}
            </List>
          </Box>
          <Box fontSize="24px" w="80%" pt={7}>
            {findYsap}
          </Box>
        </VStack>
      </Box>
    </Box>
  );

  //   const okfdsd = (
  //     <>
  //       {/*  */}
  //       {ijsdwe}
  //     </>
  //   );

  const ijifdgret = <>{sdfssad}</>;

  const args = {
    obj: ijifdgret,
    // obj: "asdje"
    className: "shadowHover",
    // style: { padding: "20px" },
    // obj: "asdaew",
    // ...args,
  };

  //
  return <Divo {...args} />;
}
