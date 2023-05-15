import { ActionContext } from "vuex";
import { IResult } from "./result.model";
import { ITextStyle } from "./text.model";

export interface IResultModule {
  results: IResult[];
  result: IResult;
}

export interface ISettingsModule {
  isResultsOpen: boolean;
  isSettingsOpen: boolean;
}

export interface IUserModule {
  nickname: string;
}

export interface ITextModule {
  sentences: number;
  textSize: string;

  isCorrect: boolean;
  correctStyle: ITextStyle;
  uncorrectStyle: ITextStyle;
}

export interface ITestModule {
  text: Array<string>;
  step: number;

  timer: number;

  isCorrect: boolean;

  isStarted: boolean;
}

export interface IStatsModule {
  time: number;
  speed: number;
  mistakes: number;
  accuracity: number | string;
}

export interface IState {
  results: IResultModule;
  settings: ISettingsModule;
  user: IUserModule;
  text: ITextModule;
  test: ITestModule;
  stats: IStatsModule;
}

export type ResultContext = ActionContext<IResultModule, IState>;
export type SettingsContext = ActionContext<ISettingsModule, IState>;
export type UserContext = ActionContext<IUserModule, IState>;
export type TextContext = ActionContext<ITextModule, IState>;
export type TestContext = ActionContext<ITestModule, IState>;
export type StatsContext = ActionContext<IStatsModule, IState>;
