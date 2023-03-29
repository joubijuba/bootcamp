
                /// INTRODUCTION TO GIT ///

        /// SOME GIT COMMMANDS ///

/// FIRST THING : 
// INIT A REPO -->
        // git repo


/// CREATE A BRANCH : 
        // git branch'branch name' 
        // example : git branch -M main


/// SWITCH BRANCH : 
        // git checkout 'destination branch'


/// MAKE A PUSH REQUEST AFTER A COMMIT :
        // git push origin <branch name> (git push only is different from -u origin ..)


/// PULL THE REMOTE REPO :
        // git pull origin 


/// MERGE WITH AN OTHER BRANCH :
// Let's say that branch 1 is 3 commits late on branch 2
// then if we go to the branch 1 and do a 'git merge branch2', the 3 commits
// will be "merged" to branch1. Inside branch 1 : 
        // git merge branch2


/// NAVIGATE BETWEEN COMMITS :
// this is moving the HEAD from the last item we were into to the one we are pointing
        // git checkout "commit name"


/// REVERSE A BRANCH TO OLD COMMITS :
// we can tell to a branch to go back to a previous state (X commits reverse)
        // git branch -f 'branch name' HEAD~X

/// KKKK
// 
// AAAAA
// A