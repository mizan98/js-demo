const myPost = [
    {
        title: "post one",
        body: "post one body"
    },
    {
        title: "post two",
        body: "post two body"
    }  
];

// console.log(myPost[1])     //this is to get the second post object inside the array

// console.log(myPost[1].body)  //this is to get the post body only

// ////////////////////////////// For Each function///////////////////

// myPost.forEach( (post) => {
//     console.log(post)
// })

// // function getPost(){
// //     console.log(myPost)
// // }
// // function createPost(){
// //     console.log("create a new post")
// // }

// // getPost()

// /// to set a timer to delay how long it takes to grab information

// function getPost() {
//     setTimeout( () => {
//         console.log(myPost)
//     }, 5000)                      //5000 means 5000 milliseconds = 5 seconds
// }

// function creatPost(post) {
//     setTimeout( () => {
//         myPost.push(post)          //5000 means 5000 milliseconds = 5 seconds
// }, 1000)
// }

// getPost()
// creatPost()
// getPost()

//////////////////////////////////// Callback//////////////////////

// function getPost() {
//     setTimeout( () => {
//         console.log(myPost)
//     }, 4000)                      
// }
//                           //this becomes getPost from below
// function creatPost(post, callback) {
//     setTimeout( () => {
//         myPost.push(post) 
//         callback()         
// }, 4000)
// }

// creatPost("post 3", getPost)

////////////////////////// Promises //////////////////////////
function getPosts() {
    setTimeout( () => {
        myPost.forEach( (post) => {
            console.log(post.title);
        })
        console.log(myPost);
    }, 4000);
}

function createPost(post) {
    return new Promise ( (resolve, reject) => {
    setTimeout( () => {
        myPost.push(post) 
        
        const error = false

        if( !error ){          //! means the opposite to false...can also be done as error == false
            resolve()
        }else{
            reject("error something went wrong")
        }
}, 4000)
})
}
                                                                                       //this becomes the reject method
// createPost({title: 'Post Three', body: 'this is the post three body'}).then(getPosts).catch( (e) => {  
//     console.log(e);                                                    //this becomes the resolve method
// })

//another way to do this is by using the async function

async function init() {
    try{
        await createPost({title: 'Post Three', body: 'this is the post three body'})
            getPosts()
        }catch (err) {
            console.log(err)
        }
}

init()