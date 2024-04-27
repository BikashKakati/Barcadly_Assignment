import { createSlice } from "@reduxjs/toolkit";
import { Todos } from "../utils/todoData";
const STORAGE_KEY = "DRAGGABLE_TODO";

const board = createSlice({
    name: "board",
    initialState: {
        cards: JSON.parse(localStorage.getItem(STORAGE_KEY)) || Todos,
        draggingItems: {},
    },
    reducers: {
        addNewCard: function (state, { payload }) {
            state.cards.push(payload);
        },
        updateCards: function (state, { payload }) {
            state.cards = payload;
        },
        addNewTask: function (state, { payload }) {
            const { task, status } = payload;

            const newTask = {
                title: task,
                timeStamp: Date.now(),
            }
            const updatedCards = state.cards.map((card) => {
                if (card.name === status) {
                    return {
                        ...card,
                        tasks: [...card.tasks, newTask]
                    };
                } else {
                    return card
                }
            })
            state.cards = updatedCards;
        },
        editTask: function (state, { payload }) {
            const { editedTaskTitle, prevStatus, newStatus, taskIdx } = payload;

            const prevCard = state.cards.find((card) => card.name.toLowerCase() === prevStatus.toLowerCase());
            const task = prevCard.tasks.find((_, index) => index === taskIdx);
            task.title = editedTaskTitle;
            task.timeStamp = Date.now();

            if (prevStatus === newStatus) return;


            prevCard.tasks = prevCard.tasks.filter((_, index) => index !== taskIdx);
            const newCard = state.cards.find((card) => card.name === newStatus);
            newCard.tasks.push(task);
        },
        addDragTaskDetails: function (state, { payload }) {
            const { taskIdx, prevCardIdx } = payload;
            state.draggingItems = { taskIdx, prevCardIdx }
        },
        dragTask: function (state, { payload }) {
            const { currentCardIdx,droppedPosition} = payload;
            const { taskIdx, prevCardIdx } = state.draggingItems;

            const prevCard = state.cards.find((_, index) => index === prevCardIdx);
            const task = prevCard.tasks.splice(taskIdx, 1)[0];
            const currCard = state.cards.find((_, indx) => indx === currentCardIdx);

            currCard.tasks.splice(droppedPosition, 0, task);
        },
        deleteTask: function (state, { payload }) {
            const { status, taskIdx } = payload;
            const card = state.cards.find((card) => card.name === status);
            card.tasks = card.tasks.filter((_, index) => index !== taskIdx);
        }
    }
})

export const { addNewCard, addNewTask, updateCards, editTask, addDragTaskDetails, dragTask, deleteTask} = board.actions;
export default board.reducer;