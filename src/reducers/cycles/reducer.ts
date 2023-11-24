import { ActionTypes } from "./actions";
import { produce } from "immer";

export interface iCycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface iCycleState {
  cycle: iCycle[];
  activeCycleId: string | null;
}

export const cyclesReducer = (state: iCycleState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      // return {
      //   ...state,
      //   cycle: [...state.cycle, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // };
      return produce(state, (draft) => {
        draft.cycle.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      // return {
      //   ...state,
      //   cycle: state.cycle.map((elem) => {
      //     if (elem.id === state.activeCycleId) {
      //       return { ...elem, interruptedDate: new Date() };
      //     } else {
      //       return elem;
      //     }
      //   }),
      //   activeCycleId: null,
      // };

      const currentCycleIndex = state.cycle.findIndex((cycle) => {
        return cycle.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycle[currentCycleIndex].interruptedDate = new Date();
      });
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      // return {
      //   ...state,
      //   cycle: state.cycle.map((elem) => {
      //     if (elem.id === state.activeCycleId) {
      //       return { ...cycle, finishedDate: new Date() };
      //     } else {
      //       return cycle;
      //     }
      //   }),
      //  activeCycleId: null
      // };

      const currentCycleIndex = state.cycle.findIndex((elem) => {
        return elem.id === state.activeCycleId;
      });

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.cycle[currentCycleIndex].finishedDate = new Date();
        draft.activeCycleId = null;
      });
    }
    default:
      return state;
  }
};
