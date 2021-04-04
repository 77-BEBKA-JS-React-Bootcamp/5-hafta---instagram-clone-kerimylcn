import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPhoto, getComments, addComment} from "../../Store/Actions/Actions"

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPhoto(Math.floor(Math.random() * 10)));
        dispatch(getComments(Math.floor(Math.random() * 10)));
    }, []);

    const comments = useSelector((state) => state.CommentsReducer.data);
  
    const [newComment, setNewComment] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComment(newComment));
      };


    return(
        <div className="center" >
           
            <div className="profile">
                <p className="photo-info">{useSelector((state) => state.PhotosReducer.data).author}</p>
                <img src={useSelector((state) => state.PhotosReducer.data).download_url} alt="images" width="100%" />

                {comments.length > 0 &&
                comments.map((comment) => (
                    <>
                    <p className="photo-info">
                        <span>{comment.name}</span> - {comment.body}
                         <button onClick={()=>{ 
                            const index = comments.indexOf(comment)
                            if(index>-1){
                                console.log(index)
                                comments.splice(index,1)
                                setNewComment(...comments)  
                            }
                            
                       }} className="delete-button">
                        Delete
                    </button>
                    </p>
                   
                    </>
                ))}
                <form onSubmit={handleSubmit}>
                <input
                    onChange={(event) =>
                    setNewComment({ name: "Isim", body: event.target.value })
                    }
                    value={newComment.body}
                />
                
                <button type="submit">Add new comment</button>
                </form>
            </div>
        </div>
        
    );
}
export default Dashboard;