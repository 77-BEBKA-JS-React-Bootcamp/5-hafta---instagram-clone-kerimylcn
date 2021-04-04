const Header = () =>{

    return(
        <div class="center">
             <div className = "navbar">
                <button>
                    <img 
                        className="camera" 
                        src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
                        alt = "camera"
                        width = "15%"
                    />
                </button>
                <img
                    className="insta"
                    src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
                    alt="logo"
                    width="25%"
                />
                <button>
                    <img
                        className="send"
                        src="https://pngimage.net/wp-content/uploads/2018/06/send-button-icon-png-6.png"
                        alt="dm"
                    />{" "}
                </button>
            </div>
        </div>
    );
}
export default Header;