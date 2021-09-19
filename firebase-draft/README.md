# introduction

This repo is for testing the basic fuction of firebase. For now, the draft is in `draft.js`. I looked up the following website to get start:
> https://github.com/komavideo/LearnFirebase
>
> https://firebase.google.com/docs/reference/admin/node

For windows, need to install node and npm first, and then, run the cmd as admin.
```bash
# install 
$ sudo npm install -g firebase-tools
# verify whether install or not
$ firebase --version
# need to login so that can use firebase sdk
$ firebase login
# another way to login, not recommend
$ firebase login --no-localhost
# list all firebase projects
$ firebase projects:list
# exit and reopen the terminal,then run the following
$ npm install 
$ firebase-admin --save

# run  node firebase-draft/draft.js
$ node firebase-draft/draft.js
```

the output after run `firebase projects:list` should be: 

<img src="https://cdn.jsdelivr.net/gh/Yun-K/pic-bed@latest/images/image-20210916020108230.png" alt="image-20210916020108230" style="zoom:67%;" />

the output after run `node firebase-draft/draft.js`:

<img src="https://cdn.jsdelivr.net/gh/Yun-K/pic-bed@latest/images/image-20210916132924983.png" alt="image-20210916132924983" style="zoom:67%;" />

If you can see the above output, then it means you success conected to firebase
