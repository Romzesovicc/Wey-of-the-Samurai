import profileReducer, {addPostActionCreator, deletePost} from "./Profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'hi', likeCount: 0},
        {id: 2, message: 'bi', likeCount: 1}
    ]
};

it('length of post should be incremented', () => {
    // 1.Test data
    let action = addPostActionCreator('Test');

    // 2. Action
    let newState = profileReducer(state, action);
    // 3. Expectation
    expect(newState.posts.length).toBe(3);

});
it('message of hew post should be correct', () => {

    let action = addPostActionCreator('Test');
    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe('Test')
});

it('after deleting length of messages should be decrement', () => {

    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1)
});
it(`after deleting length shouldn't be decrement if id incorrect`, () => {

    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2)
});
