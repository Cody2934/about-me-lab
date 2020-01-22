export default isYes;
//the isYes in an if else function and whats allowed to be ready
function isYes(str) {
    if (str.toLowerCase() === 'yes' || str.toLowerCase() === 'y' || str.toLowerCase() === 'yep' || str.toLowerCase() === 'uhhuh') return true;
    else return false;
}
