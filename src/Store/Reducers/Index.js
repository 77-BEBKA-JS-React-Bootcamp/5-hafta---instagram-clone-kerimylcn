import {combineReducers} from "redux";
import {PhotosReducer} from "./PhotoReducer";
import {CommentsReducer} from "./CommentReducer";

const rootReducer = combineReducers({
    PhotosReducer,
    CommentsReducer
});

export default rootReducer;