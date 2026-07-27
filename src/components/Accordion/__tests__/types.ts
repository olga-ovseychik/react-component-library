import { Accordion } from "../Accordion";
import React from "react";

export type MultipleModeArgs = Extract<React.ComponentProps<typeof Accordion>, {mode: 'multiple'}>
export type SingleModeArgs = Extract<React.ComponentProps<typeof Accordion>, {mode: 'single'}>