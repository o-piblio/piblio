git config --local user.name "Piblio"
git config --local user.email "o-piblio@proton.me"

git config --local gpg.format ssh
git config --local user.signingkey ~/.ssh/carbon.pub
git config --local commit.gpgsign true
git config --local tag.gpgSign true
